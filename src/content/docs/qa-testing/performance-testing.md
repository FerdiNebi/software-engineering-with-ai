---
title: Performance Testing
description: Load, stress, soak, and spike testing — sized to engagement risk, executed in parity environments, never against shared client infrastructure without consent.
type: sub-section
phase: qa-testing
order: 4
lastUpdated: 2026-05-03
status: v1
---

## What happens here

Performance testing in QA validates that the system meets the performance NFRs at production-representative load, with results reported to the client as a sign-off artifact. It is the system-level counterpart to [development-time performance engineering](/development/performance-engineering/), which kept the system within budget throughout build via per-PR regression checks. Where development-time work caught regressions early, QA performance testing answers the question development could not: does the system still hold under realistic, sustained, system-level load?

Four test types matter, each answering a different NFR question:

- **Load testing.** Steady-state at the documented expected traffic — typically the system's projected peak concurrent users sustained for 30–60 minutes. Validates the bread-and-butter performance NFRs (p95 response time, throughput, error rate at expected load). The most common test type, included in nearly every engagement that has performance NFRs.
- **Stress testing.** Beyond expected load — 2x, 5x, 10x — to find the breaking point. Used to validate failover behaviour, surface bottlenecks that load testing did not, and produce data for capacity planning. Common in engagements with growth assumptions or with NFRs that explicitly require headroom.
- **Soak testing.** Extended duration — 4 hours to 72 hours at expected load. Surfaces memory leaks, file-handle exhaustion, gradual database degradation, and connection-pool issues that short cycles cannot find. Typically run once near launch on engagements where production reliability matters more than launch speed.
- **Spike testing.** Sudden bursts of traffic followed by return to baseline. Validates auto-scaling, caching warm-up, and database read-replica catch-up. Common in engagements with marketing-driven traffic patterns (campaign launches, time-bounded promotions, news-driven traffic).

Not every engagement runs every type. The discipline is matching test types to NFRs and to engagement risk: a marketing site running on managed infrastructure typically needs only load testing; a B2B SaaS platform with auto-scaling commitments needs load and spike; a long-running operational system with stability NFRs needs all four. Selecting test types is part of the [test strategy](/qa-testing/test-strategy-planning/), not an in-cycle decision.

## Best practices

**Test in environment parity.** Performance results from the developer's laptop, a half-sized staging environment, or a different cloud region tell you nothing about production. The test environment matches production: same instance types, same number of replicas, same database tier, same network topology, same caching layer. Where parity is genuinely impractical (cost-prohibitive scale, single-tenant production), document the divergence in the test report and adjust expectations accordingly. Implicit divergence between staging and production is the leading cause of post-launch performance surprises.

**Use representative production data.** A database with 100 rows performs nothing like a database with 10 million rows. The performance test environment includes data shaped like production data — same row counts, same index distributions, same query patterns. Synthetic data generators produce useful seed data for new builds; replicated production data (anonymised, sampled, or fully copied where compliance allows) is closer to reality. Tests run against empty databases produce results so different from production that they are actively misleading.

**Gather baselines early in the cycle.** The first performance run is a baseline, not a verdict. Subsequent runs are compared against the baseline to detect regressions and validate optimisations. Engagements that run performance tests once at the end of the cycle have no baseline data, which means optimisation effort cannot be validated and post-launch performance changes cannot be attributed. Baseline early; iterate against the baseline; report the trajectory.

**Match the load profile to actual traffic patterns.** A production system rarely sees uniform sustained load. Real traffic has peaks (lunch hour, end-of-month, post-marketing campaign), troughs (weekends, overnight), and patterns by user segment (admin actions skew different from end-user actions). The load profile in tests reflects this — multiple concurrent virtual user types, weighted action distributions, ramp-up and ramp-down rather than instant full load. Uniform-load tests produce results that miss the issues real traffic creates.

**Report results in NFR-traceable language.** Performance test reports map results directly to the NFRs they verify: "NFR-7 (p95 page-render under 800ms at 100 concurrent users): MET. Observed p95 = 712ms. NFR-12 (sustained throughput of 50 transactions/second): MET. Observed sustained throughput = 64 t/s. NFR-9 (error rate under 0.1% under peak load): NOT MET. Observed = 0.43% — see Section 4 for failure analysis." The format makes sign-off mechanical and surfaces gaps clearly. Reports that present results without NFR mapping become unreviewable.

:::danger
Never load-test shared client infrastructure without written approval. A load test that consumes resources from a shared production database, a shared Kubernetes cluster, or a multi-tenant platform can degrade or take down systems that are not part of the engagement — sometimes at multiples of the cost of the engagement itself. The discipline is mechanical: confirm in writing, before any load test runs, that the target infrastructure is dedicated to the test, that the client has approved the test window, that escalation contacts are on standby, and that the rollback plan is documented. Load testing into shared infrastructure without approval is the agency mistake most likely to end the engagement and the relationship simultaneously.
:::

**Plan the run window with the client.** Even on dedicated infrastructure, performance tests are scheduled events: "Tuesday 2pm–4pm UTC; on-call rotation aware; observability dashboards being watched; rollback plan documented." Surprise tests that hit a system the client is also using produce confusion at best and incidents at worst. The discipline mirrors deployment-window communication — named time, named duration, named participants, documented rollback.

**Document anti-pattern responses.** Performance tests sometimes find issues that cannot be fixed in the cycle. The report classifies findings: "must-fix-before-launch (NFR breach with no workaround); fix-or-defer-with-client-approval (NFR breach with workaround); deferred to post-launch with target date; deferred indefinitely with workaround documented." The classifications mirror the [test strategy's](/qa-testing/test-strategy-planning/) severity model and feed the deferred-bugs conversation at sign-off.

## Desired outcomes

By the end of performance testing in this phase, the engagement has:

- Executed performance tests covering every signed performance NFR — load tests minimum, with stress, soak, and spike where the engagement and NFRs demand them
- A baseline-and-trajectory report showing initial performance, optimisation impact (if any), and final results against each NFR
- Test execution against environment-parity infrastructure with production-representative data, documented in the report so reviewers can assess result validity
- A test-run window plan agreed with the client (named times, named participants, documented rollback) for any test that touched shared or risk-sensitive infrastructure
- A reported set of results to the client mapped FR-by-FR or NFR-by-NFR, with sign-off on met thresholds and explicit deferral/acceptance for any unmet thresholds
- Baseline data archived for [post-launch maintenance](/maintenance-retainer/) comparison — the post-launch team needs the launch baseline to detect production-time degradation
- A clean handoff state to [security testing](/qa-testing/security-testing/) and onward to [user acceptance testing](/qa-testing/user-acceptance-testing/), with performance no longer a launch risk

## What the industry does

**Full-rig vs. spot-check approaches.** Full-rig agencies build comprehensive performance test infrastructure for each engagement — dedicated load-generation clusters (k6 with cloud workers, JMeter on Kubernetes, Locust at scale), production-parity test environments, full multi-test-type coverage, formal performance reports. Trade-off: high upfront cost, defensible artifacts, common in regulated and high-traffic engagements; over-investment for engagements with loose performance NFRs. Spot-check agencies run lightweight load tests using simple tools (k6 single-machine, Apache Bench, simple Python scripts) against staging, focused on the few NFRs that matter most. Trade-off: low cost, fast cycle, weaker formal reporting; insufficient for engagements where performance is contractually critical. Full-rig dominates in fintech, e-commerce at scale, B2B SaaS platforms, and any engagement with formal SLAs; spot-check survives in marketing-site engagements, internal tools, low-traffic B2B applications, and engagements where the performance NFRs are loose enough that thorough testing would be over-investment.

**Cloud-load-service vs. self-hosted-load-generator cultures.** Cloud-load-service agencies use managed services (k6 Cloud, BlazeMeter, Loader.io, AWS Distributed Load Testing, Azure Load Testing) where load is generated from cloud infrastructure operated by the test platform. Trade-off: easy to scale geographically distributed load, no test-infrastructure to operate, ongoing service cost. Self-hosted agencies run load generators on infrastructure they operate (k6 OSS, Gatling, JMeter clusters). Trade-off: no service cost, full control, requires team to operate the load infrastructure, harder to scale geographically. Cloud-load-service dominates in modern agencies and short engagements; self-hosted survives in regulated work where service-provider data residency matters and in long engagements where the cost economics flip.

**Single-tester vs. embedded-with-engineering cultures.** Single-tester agencies have a dedicated performance-testing specialist who runs cycles independently of the dev team — receives the build, executes tests, produces the report. Trade-off: deep specialist expertise, independent verification, slower feedback loop, weaker shared understanding of issues found. Embedded-with-engineering cultures pair performance testing with development — dev engineers and QA engineers running tests jointly, optimisations applied in the same cycle, results discussed continuously. Trade-off: faster optimisation cycle, shared understanding, requires dev engineers to be available for performance work. Embedded dominates in modern agencies and product engineering; single-tester survives in regulated work and in agencies whose performance specialists are shared across multiple engagements.
