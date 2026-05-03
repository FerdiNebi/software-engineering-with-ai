---
title: Deployment Execution & Smoke Testing
description: The launch-day sequence — rehearsed cutover, named commander, scripted smoke tests, pre-defined rollback criteria.
type: sub-section
phase: deployment-launch
order: 3
lastUpdated: 2026-05-03
status: v1
---

## What happens here

Deployment execution is the launch-day cutover — the sequence that takes the build from staging to production, runs smoke tests against the result, and either confirms launch success or invokes the rehearsed rollback. It runs against the [provisioned production environment](/deployment-launch/infrastructure-provisioning/) using the [CI/CD pipeline](/development/devops-ci-cd/) the engagement built throughout development. The launch is the planned performance of work that has been rehearsed, not an improvised event.

The typical launch-day sequence:

1. **Final build.** The build that will deploy is the same one that passed UAT — no last-minute commits, no last-minute config changes, no "let me just fix this one thing" interventions. The build is identified by commit SHA, container image tag, or release version.
2. **Cutover.** The deployment pipeline runs against production. For big-bang launches, this is a single deployment promoting the artifact across environments. For canary launches, this is the first step in a series — 5%, 25%, 100% — each gated by smoke-test results.
3. **Smoke tests.** The scripted smoke-test suite runs against the production deployment within minutes of cutover. Tests cover critical user flows, key integrations, and observability connectivity. Pass means proceed; fail triggers the rollback decision.
4. **Monitor.** The team watches monitoring dashboards through the launch window — error rate, latency, traffic patterns, alerts. Pre-defined criteria escalate concerning signals to rollback decisions. The window typically lasts 30–120 minutes after cutover.
5. **Confirm.** Once the launch window passes without rollback, the launch commander declares the cutover complete. Stakeholders are notified. The on-call rotation transitions to standard operation.
6. **Communicate.** Internal team, client team, and any external stakeholders receive the launch-completion notification with the relevant details (cutover time, traffic shifted, any known issues, on-call contact).

Go/no-go gates exist at multiple points: pre-cutover (the [readiness review](/deployment-launch/infrastructure-provisioning/) signed off), post-cutover-pre-smoke (deployment completed without errors), post-smoke (smoke tests passed), end-of-monitoring-window (no concerning signals). Each gate has documented criteria; the launch commander applies them mechanically rather than politically.

## Best practices

**Rehearse the launch in a staging environment that mirrors production.** Before launch day, the same deployment sequence has run end-to-end at least once against staging — same pipeline, same smoke tests, same rollback procedure. Issues found in rehearsal are debugged outside the launch window when there is time to investigate. Engagements that launch as the first end-to-end test of the deployment sequence discover the sequence has assumptions that do not hold in production, with no time to adjust.

**Name a launch commander.** A single person owns the call/scrub decisions during the launch window — typically the technical lead, sometimes a delivery lead, occasionally a dedicated launch coordinator on larger engagements. The commander follows the runbook, applies the go/no-go criteria, makes the rollback decision, and communicates with the team and the client. Engagements with no named commander discover at the moment of decision that nobody owns the call, and the cutover stalls in committee while the issue gets worse.

**Use a documented smoke-test script that runs in 5–10 minutes.** Smoke tests at launch are not the regression suite — they are the fast checklist that confirms the live system is healthy. Typical contents:

- Public homepage loads with HTTP 200.
- Authenticated dashboard loads for a test user.
- One critical user flow completes end-to-end (sign-up, checkout, primary action).
- Each external integration responds (one query against each third-party API).
- Monitoring dashboards show traffic and the new deployment version.
- Health-check endpoints return healthy.

The script is automated where possible (Playwright or k6 against production), supplemented by manual checks for things automation cannot verify. Smoke tests longer than 10 minutes shift focus from "is the cutover healthy" to "are all the features working" — the latter is what UAT was for.

**Define rollback criteria in advance.** The launch commander does not improvise rollback decisions. The criteria are written:

- Smoke tests fail any critical step → roll back.
- Error rate exceeds X% sustained over Y minutes → roll back.
- Latency p95 exceeds budget by more than Z% → roll back.
- Critical integration unavailable for more than N minutes → roll back.
- Any unrecoverable data corruption observed → roll back immediately.

The criteria reflect the engagement's risk tolerance and are signed off at the readiness review. Engagements that improvise rollback during launch end up either rolling back too late (after damage accumulates) or not rolling back when they should (because the launch felt nearly successful).

**Communicate the launch window broadly.** Internal team and client team aware of start time and expected duration. External stakeholders (integration partners, customer-facing channels, status pages) receive maintenance notifications where relevant. Surprise launches that hit a system someone is using produce confusion at best; on a system the client is depending on, they produce incidents.

:::caution
Do not launch without a rehearsed rollback plan. A rollback plan that has only been discussed but not executed is a plan the team has not validated. The pipeline that worked yesterday for forward deployment may have edge cases for rollback that nobody has hit. The first time the team runs the rollback should be in staging during launch rehearsal, not in production during a real incident. Rollbacks under pressure are the highest-risk operation in any engagement; they are the operation that benefits most from rehearsal and the operation most often unrehearsed.
:::

**Time-box the launch window and proceed mechanically.** A defined window — typically 30–120 minutes after cutover — during which the team is actively watching monitoring and ready to roll back. Once the window passes without triggering rollback, the launch is declared complete. Stretching the window indefinitely produces team fatigue and degraded judgement; ending it too early misses delayed-effect issues. The window length is set in the runbook; the launch commander enforces it.

**Document the launch outcome immediately.** A short launch report — what was deployed, when, what smoke tests passed, what monitoring showed, any incidents during the window — written within 24 hours and circulated to the team and the client. The report becomes part of the [client handoff package](/deployment-launch/client-handoff-launch-checklist/) and the operational record. Verbal launch summaries dissolve under pressure; written ones survive into the warranty period and beyond.

## Desired outcomes

By the end of deployment execution and smoke testing, the engagement has:

- A successful production deployment, identified by commit SHA or release version, of the same build that passed UAT
- Passed smoke tests on the production system, with results archived as the launch evidence
- Stakeholder notifications confirmed sent — internal team, client team, integration partners, customer-facing channels where applicable
- Monitoring dashboards showing healthy traffic, error rates within expected bounds, and the new deployment version receiving traffic
- A documented launch report covering deployment time, smoke-test results, monitoring observations during the window, and any incidents triaged
- A clean handoff to [monitoring and observability setup](/deployment-launch/monitoring-observability-setup/) and onward to [client handoff](/deployment-launch/client-handoff-launch-checklist/) — production stable, ops team informed, on-call rotation transitioned to standard operation

## What the industry does

**Go-live-as-event vs. deploy-continuously cultures.** Go-live-as-event agencies treat launch as a discrete ceremonial activity — named date, named commander, full launch runbook, post-launch review. Trade-off: high stakes per launch, predictable cadence, strong team and client artifact. Deploy-continuously agencies ship to production on every passing mainline commit and treat the named launch as the moment the feature flag flips for the first user. Trade-off: low stakes per individual deployment, much higher deployment frequency, requires excellent monitoring and rollback automation. Go-live-as-event dominates in marketing-driven engagements (campaigns, product launches, app-store releases), regulated work, and any engagement with formal external coordination needs; deploy-continuously dominates in product engineering and modern web work where releases are routine. Most agencies use go-live-as-event for the named engagement launch and then transition to deploy-continuously for ongoing work in the warranty and retainer periods.

**Big-bang cutover vs. blue/green vs. canary deployment patterns.** Big-bang cutover replaces the running production with the new version at once. Trade-off: simplest, fastest, hardest rollback. Blue/green deployment runs old and new versions in parallel, switches traffic via load balancer, and keeps the old version warm for instant rollback. Trade-off: more infrastructure during cutover, much faster rollback, well-supported in modern platforms. Canary deployment routes a small percentage of traffic to the new version, monitors, and incrementally promotes — 5%, 25%, 100%. Trade-off: lowest launch risk, longest cutover duration, requires traffic-routing infrastructure and observability per cohort. Big-bang dominates in greenfield engagements with no existing user base; blue/green dominates in production environments where instant rollback matters; canary dominates in B2B SaaS, high-traffic platforms, and engagements where launch risk is high enough to justify the infrastructure.

**Manual smoke vs. automated smoke vs. synthetic-monitoring-replaces-smoke patterns.** Manual smoke agencies have a person execute the smoke checklist post-cutover. Trade-off: catches issues automation might miss, slower, dependent on the person's vigilance. Automated smoke agencies run scripted suites (Playwright, k6, custom scripts) immediately post-cutover. Trade-off: fast, repeatable, requires script maintenance. Synthetic-monitoring agencies treat the synthetic monitoring already running against production as the smoke validation — if synthetic checks stay green through cutover, the launch is healthy. Trade-off: zero per-launch ceremony, requires excellent synthetic monitoring infrastructure throughout the engagement. Most modern agencies blend automated smoke with synthetic monitoring; pure-manual survives in agencies whose engagements do not justify automation investment; pure-synthetic survives in continuous-deployment cultures where every commit goes through the same gates.
