---
title: Performance Engineering
description: NFR-driven performance work — define the budget, profile before tuning, defer what the engagement hasn't paid for.
type: sub-section
phase: development
order: 9
lastUpdated: 2026-05-03
status: v1
---

## What happens here

Performance engineering in an agency context is NFR-driven. The system has performance non-functional requirements ([signed during Requirements & Design](/requirements-design/functional-nonfunctional-requirements/)) — p95 response time under 800ms at 100 concurrent users, time-to-interactive under 2.5 seconds on 3G, batch job completion within a 4-hour window. Performance engineering is the activity that ensures the system meets those numbers and detects regressions when something during build pushes it past them. Without a budget, performance work is a black hole that consumes engagement hours indefinitely.

Three techniques cover the bulk of performance work in fixed-scope engagements:

- **Baseline before optimising.** Measure current behaviour against the budget before making changes. A 1.2-second page that the budget says should be under 2.5 seconds does not need optimisation; engineers who optimise it anyway are spending hours the engagement did not price.
- **Profile, then tune.** When a measurement shows the system over budget, profile to identify the actual bottleneck — database queries, render time, network round-trips, garbage-collection pauses. Tune the bottleneck. Re-measure. Engineers who tune by intuition produce code that is "more optimised" without being faster.
- **Budget per FR.** Each user-facing FR has a documented performance budget — total time budget plus a breakdown across components (network, server processing, render). Budgets that fit together produce a system that meets its global performance NFRs; budgets defined globally without per-FR breakdown produce features that individually pass and globally fail.

Performance work runs continuously through development as a quality discipline, with named investment points: budget-setting at architecture time, baseline establishment when a feature first ships, regression detection in CI, and load testing in pre-launch handoff to [QA performance testing](/qa-testing/performance-testing/). The output is a system that meets the signed NFRs, with documented budgets and active regression detection that survives the engagement and operates post-handoff.

## Best practices

**Encode performance budgets as testable thresholds.** Every performance NFR translates into a testable threshold: "p95 page-render time under 800ms at 100 concurrent users for the dashboard route." Each threshold has a measurement mechanism, a measurement environment, and a pass/fail criterion. Thresholds without measurement mechanisms are aspirations; aspirations are what gets dropped under deadline pressure. The threshold lives in the test suite, gated by CI, so a regression breaks the build rather than waiting to be discovered in QA.

**Run performance regression checks in CI.** Continuous performance regression detection catches the moment a feature lands that pushes the system past budget. Tools that fit:

- **Lighthouse CI.** For web frontends — runs Lighthouse against representative pages on every PR, fails the build on regressions to performance, accessibility, or best-practice scores.
- **k6, Artillery, JMeter.** For backend load testing — scripted load profiles that run on a schedule (nightly or pre-merge for high-stakes services), with thresholds that fail the run.
- **Sitespeed.io, WebPageTest, Calibre.** For continuous synthetic monitoring of the live system in pre-launch and post-launch.

The tools matter less than the discipline: every performance NFR has automated measurement, runs frequently enough to catch regressions before they accumulate, and is gated in CI.

**Profile before tuning.** Engineers who tune by intuition produce code that is differently-shaped without being faster. The discipline is profiling first — capturing flame graphs, query plans, network waterfalls — to identify the actual bottleneck before changing anything. Tools matter again: the language's profiler (py-spy, async-profiler, Chrome DevTools, pprof), the database's query analyzer (EXPLAIN, query stores, slow-log), the platform's tracing (OpenTelemetry, Datadog APM, Honeycomb). A 30-minute profile session usually produces the answer faster than three days of speculative optimisation.

**Use caching layers proportional to budget pressure.** Caching is the highest-leverage performance technique and the highest-risk source of correctness bugs. Apply it where budgets demand it (computed values reused frequently, expensive third-party API calls, slow database queries), with explicit invalidation strategies, monitoring for cache hit rates, and tests that verify cache behaviour. Caching everywhere produces stale-data bugs and complex invalidation logic; caching nowhere produces predictable behaviour and budget overruns. The discipline is choosing where to cache based on profiling data, not adding cache layers prophylactically.

**Load-test before pre-launch handoff.** A working system that passes p95 budgets at single-user concurrency may collapse at 100 concurrent users. Load-testing in pre-launch (typically the last 1–2 weeks of development, in a staging environment that mirrors production) verifies the budget holds under the engagement's documented concurrent-user assumptions. Findings either confirm the system meets NFRs or trigger targeted optimisation work before [QA performance testing](/qa-testing/performance-testing/) finds them at higher cost. Load tests run against the deployed system, not against the developer's laptop; results are documented as a deliverable.

:::caution
Do not optimise without a profiled baseline. Premature optimisation — code refactored for speed before measurement showed it was slow — is the most common waste of performance-engineering hours in agency work. The optimisation produces marginal gains, often for code that was not on the critical path, and consumes hours that should have been spent on features. The discipline is mechanical: no optimisation work without a measurement showing the system is over budget and a profile showing where the time is going. Engineers who skip the measurement step are optimising on intuition; intuition is wrong about performance more often than it is right.
:::

**Defer performance work where the budget is met.** Knowing when not to optimise is the agency-specific skill. A page rendering in 600ms on a 2.5-second budget does not need optimisation, no matter how aesthetically slow the code looks. The engagement was priced against the budget; investing extra hours past the budget is unpaid work. The discipline is deferral with documentation: "Page-render time meets budget at 600ms p95; further optimisation deferred unless NFR tightens or the budget is consumed by future features." Documented deferral is a record of judgement; silent deferral is a risk to the team's defensibility at sign-off.

**Anti-patterns to avoid:**

- **The intuition-driven optimisation.** Code refactored for "performance" with no profile, no before/after measurement, no NFR connection. Wastes hours; sometimes makes things worse; produces code with mysterious justifications that future engineers cannot challenge.
- **The performance-as-finishing-touch.** Performance work deferred to the closing days of development. Discoveries are late; fixes are rushed; budgets miss; QA finds the issues that should have been caught in CI.
- **The micro-optimisation festival.** Replacing readable code with clever code in pursuit of nanoseconds that the budget does not need. Produces code the next team cannot read for performance gains the system does not benefit from.

## Desired outcomes

By the end of performance engineering investment in this phase, the engagement has:

- A signed-off set of NFR performance numbers being met by the deployed system, verified by automated and manual measurements
- A documented performance budget per user-facing FR — total time budget plus per-component breakdown — checked into the repo as a maintained artifact
- Performance regression detection running in CI on every PR or merge, gating commits that push the system past budget
- Profiling discipline applied throughout development: bottlenecks identified by measurement before tuning; tunes verified by re-measurement; profiles archived where they explain non-trivial decisions
- Caching strategies applied where profiling data justified them, with documented invalidation and monitoring
- Pre-launch load-test results showing the system holds under documented concurrent-user assumptions, with any findings triaged before [QA performance testing](/qa-testing/performance-testing/) starts
- A handoff-ready performance posture: budgets documented, regression-detection tooling configured, monitoring dashboards visible to the client's ops team, and operational guidance for what to do when alerts fire post-launch

## What the industry does

**Perf-by-design vs. perf-as-fix-at-end styles.** Perf-by-design agencies treat performance as a continuous concern from architecture onwards — performance budgets defined at NFR time, regression detection wired in CI from the first feature, profiling as a routine engineering practice. Trade-off: higher discipline cost; predictable performance outcomes; rare large-scale optimisation events. Perf-as-fix-at-end agencies build features without active performance attention and address performance issues in a dedicated optimisation phase before launch. Trade-off: lower discipline cost during build; concentrated optimisation effort late, often under deadline pressure; the optimisation phase frequently overruns. Perf-by-design dominates in mature agencies and product engineering; perf-as-fix-at-end survives in commodity engagements where performance NFRs are loose and in agencies where the engineering culture has not adopted continuous performance work. The economic crossover is around 6–8 weeks of build duration — perf-as-fix-at-end works in shorter engagements where the late-stage cost is bounded; longer engagements compound the cost of late optimisation.

**Synthetic-monitoring-driven vs. real-user-monitoring (RUM) cultures.** Synthetic-monitoring agencies measure performance with scripted measurements running against a fixed environment — Lighthouse CI, k6, headless-browser test suites. Trade-off: deterministic, easy to integrate with CI gates, does not measure actual user experience. RUM-driven agencies collect performance data from actual users (browser-side beacons, OpenTelemetry tracing, Real User Monitoring tools like Datadog RUM, Sentry Performance, New Relic Browser). Trade-off: measures the experience users actually have, harder to make CI-gating decisions on, requires production traffic to produce data. Most modern agencies do both — synthetic for CI gates and pre-launch verification, RUM for post-launch monitoring and budget calibration. Pure synthetic survives in pre-launch-only engagements; pure RUM survives in agencies whose work is operations-heavy or in retainer engagements where post-launch tuning is the primary value.

**Caching-eager vs. caching-lazy cultures.** Caching-eager agencies introduce caching layers (CDN, Redis, in-process caches) early and broadly, optimising for performance margins above NFR requirements. Trade-off: faster systems; more correctness risk from stale data and complex invalidation; harder for the post-handoff team to operate. Caching-lazy agencies introduce caching layers only where profiling data shows they are needed to meet NFRs. Trade-off: simpler systems; tighter to NFR margins; lower complexity for the post-handoff team. Caching-eager survives in performance-critical engagements (high-traffic e-commerce, content delivery, ad-tech) where margins matter; caching-lazy dominates in modern agencies because cache-invalidation bugs are the leading cause of post-launch performance and correctness incidents. The right answer for any engagement is the lightest caching that meets the budget — adding caching prophylactically is a long-term liability, not a short-term win.
