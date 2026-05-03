---
title: Deployment / Launch
description: Going live as a planned event — infrastructure provisioning, deployment execution, monitoring setup, and client handoff that closes the engagement cleanly.
type: phase-overview
phase: deployment-launch
order: 1
lastUpdated: 2026-05-03
status: v1
---

## What happens here

Deployment / Launch is the phase that converts a UAT-signed-off build into a running production system that the client operates. It is the end of the agency's delivery commitment, not the start of new work. By this point, [UAT](/qa-testing/user-acceptance-testing/) has produced a signed acceptance and a go decision; the production cutover, monitoring, and client handoff are all that stand between "the build is done" and "the engagement is closed and invoiced."

The phase contains four sub-sections, run in sequence:

1. **[Infrastructure Provisioning](/deployment-launch/infrastructure-provisioning/)** — executes the [infrastructure design plan](/requirements-design/infrastructure-design/) in production: environments created, DNS configured, certificates issued, secrets populated, runtime configuration deployed.
2. **[Deployment Execution & Smoke Testing](/deployment-launch/deployment-execution-smoke-testing/)** — runs the launch-day cutover with named commander, documented sequence, scripted smoke tests, and pre-defined rollback criteria.
3. **[Monitoring & Observability Setup](/deployment-launch/monitoring-observability-setup/)** — configures dashboards, alerts, runbook-linked notifications, and the operational visibility the client will use post-launch.
4. **[Client Handoff & Launch Checklist](/deployment-launch/client-handoff-launch-checklist/)** — formal handoff ritual covering credentials, documentation, training, and acceptance.

The phase typically runs 1–4 weeks depending on engagement complexity. Participants are the agency's technical lead, a DevOps or platform engineer, the delivery lead, and the client's named operations stakeholder. The output is a live production system, signed-off handoff, monitoring operational, and an engagement-closing invoice. Forward, the engagement transitions to [Maintenance & Retainer](/maintenance-retainer/) — either under a signed retainer agreement or as a clean end-of-engagement with the client operating independently.

## Best practices

**Make launch a planned event, not a hope.** Every launch has a named date, a named commander (typically the technical lead), a documented runbook, a defined rollback path, a pre-agreed go/no-go gate, and an active observability watch during the launch window. Launches improvised because "we'll just deploy and see" produce the production incidents that destroy client confidence. The discipline is mechanical: launches that have not been rehearsed in staging do not happen in production.

**Provision infrastructure long before launch day.** Production environments come up days or weeks before launch, not hours. The discipline lets the team validate DNS propagation, certificate issuance, monitoring connectivity, and credential rotation in advance — and gives time to debug whatever does not work the first time. Engagements that provision production infrastructure on launch day inevitably hit a one-line config issue that takes four hours to diagnose under pressure.

**Run smoke tests against production from day one.** A documented smoke test suite — the 5–10 verifications that confirm the production system is healthy — runs on every deployment, including the launch deployment. The suite covers critical user flows, key integrations, observability connectivity, and any high-risk integrations specific to the engagement. Smoke tests run in seconds, fail loudly, and trigger the documented rollback if they fail. Engagements without smoke tests discover production breakages by user reports rather than by automation.

**Build the handoff into the deployment process.** The client receives the system at handoff, but the artifacts they will receive — credentials, documentation, runbook access, monitoring dashboards — are produced throughout deployment, not assembled at the closing ceremony. The handoff package is staged in writing, in tooling, and in the client's named accounts before the formal handoff event. The event itself becomes a walkthrough and signature ceremony rather than a scramble to gather artifacts.

:::caution
Do not let launch day be the first day production exists. Production environments provisioned on launch day inevitably hit issues — DNS that has not propagated, certificates that take longer than expected to issue, secrets that need to be rotated under time pressure, monitoring connections that fail in unfamiliar configurations. The cumulative effect is a launch where the team spends the launch window debugging infrastructure rather than verifying the deployment. Provision in advance; rehearse the launch in staging that mirrors production; treat launch day as the rehearsed performance, not the first run.
:::

**Define go/no-go gates in advance.** The launch decision is not improvised on the day. The criteria — UAT acceptance signed, all critical bugs closed, monitoring dashboards green, on-call rotation aware, rollback plan documented, communication plan in place — are agreed and documented before the launch window opens. The launch commander makes the call mechanically against the criteria, not politically against stakeholder pressure. Engagements that improvise the go/no-go conversation discover at the last moment that the criteria were never explicit, and the launch becomes a debate.

**Communicate the launch window to all stakeholders.** Internal team, client team, named integrations partners, customer-facing channels (where applicable). The communication includes the start window, expected duration, and contacts for issues. Surprise launches that take down a system the client was actively using produce damage no engagement can fully recover from. The discipline mirrors the [performance test window](/qa-testing/performance-testing/) communication pattern.

## Desired outcomes

By the end of Deployment / Launch, the engagement has the following in place:

- A live production system serving real traffic, with the documented architecture and configuration matching the [signed design](/requirements-design/system-architecture/) and [infrastructure plan](/requirements-design/infrastructure-design/)
- Passed smoke tests on the production deployment, with results archived as the launch evidence
- Operational monitoring: dashboards live, alerts routed, runbooks linked from alert pages, baselines captured
- A completed [client handoff](/deployment-launch/client-handoff-launch-checklist/) — credentials transitioned, documentation delivered, training completed, acceptance signed
- A closed engagement invoice for the deployment milestone, with no outstanding deliverables blocking final payment
- A clear transition to either [Maintenance & Retainer](/maintenance-retainer/) under a signed retainer agreement, or to a clean end-of-engagement with the client equipped to operate independently
- A retrospective scheduled with the client to capture engagement learnings, distinct from the launch closure itself

## What the industry does

**Big-bang vs. canary launch cultures.** Big-bang launches deploy the new system to all users at the named launch time — the simplest mental model, the fastest cutover, the highest-risk profile. Trade-off: full launch impact at one moment, easier coordination, harder rollback. Common in marketing-site builds (where there is no production system to migrate from), in greenfield engagements with no existing user base, and in regulated launches where partial deployment would create compliance complications. Canary launches deploy to a small subset of users (5%, then 25%, then 100%), monitor each step, and proceed only when the previous step is healthy. Trade-off: dramatically lower launch risk, more complex deployment infrastructure, longer cutover duration. Canary dominates in modern web engineering, in B2B SaaS engagements with continuous-deployment cultures, and in engagements where a botched launch would cost more than the canary infrastructure investment. Most agencies pick per-engagement based on the client's tolerance for launch risk and the underlying platform's capability — Kubernetes-based deployments support canary trivially; legacy infrastructure may not.

**Launch-as-event vs. continuous-deployment cultures.** Launch-as-event agencies treat launch as a discrete, named, ceremonial activity — production cutover happens at a defined moment, communication goes out, monitoring is watched, the team gathers (often virtually) to commemorate the deployment. Trade-off: high stakes per launch, low launch frequency, clear team and client artifact. Continuous-deployment agencies ship to production on every passing mainline commit and treat the launch as the moment the feature flag flips for the first user. Trade-off: low stakes per individual deployment, high deployment frequency, requires excellent monitoring and rollback automation. Launch-as-event dominates in agencies serving clients who expect named launches (marketing campaigns, mobile apps, regulated platforms); continuous-deployment dominates in product engineering and modern web work where releases are routine. Most agencies blend — major releases as events, ongoing changes as continuous deployments, with the engagement choosing per release.

**Agency-runs-launch vs. client-runs-launch cultures.** Agency-runs-launch cultures see the agency commanding the launch from start to finish — agency engineers execute the deployment, agency QA runs smoke tests, agency operators watch monitoring. Trade-off: predictable execution, agency carries the risk, client receives the launched system as a deliverable. Client-runs-launch cultures see the client commanding launch with agency support — client operators execute the deployment using the runbook, agency engineers shadow and answer questions, the launch doubles as the first operational training. Trade-off: harder cycle, longer launch duration, much stronger handoff because the client team has run the actual procedure. Agency-runs-launch dominates in commercial engagements where the client is not equipped to run the launch independently; client-runs-launch survives in handoff-track engagements where the agency's commitment includes producing a self-sufficient client team and in long-running agency-client relationships where the client has accumulated operational depth.
