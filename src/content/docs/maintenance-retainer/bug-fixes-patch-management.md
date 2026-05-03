---
title: Bug Fixes & Patch Management
description: Classifying defects, scheduling patches, and protecting retainer scope from silently absorbing feature work.
type: sub-section
phase: maintenance-retainer
order: 2
lastUpdated: 2026-05-03
status: v1
---

## What happens here

Bug-fix work in a retainer context is one of three classes of post-launch agency work, and conflating it with the others produces the most common form of retainer scope creep.

- **Bug fixes (this page).** Previously-shipped behaviour is wrong against the [signed acceptance criteria](/pre-sales/sow-contract-drafting/). Routine patches, dependency updates, security patches, and routine operational fixes. Covered by the retainer (or by warranty during the warranty window).
- **Feature requests** (handled in [Feature Iteration](/maintenance-retainer/feature-iteration/)). Net-new behaviour the client wants the system to have. Either drawn against the retainer's allocated capacity, priced as a change order, or escalated to a new engagement through [Pre-Sales](/pre-sales/).
- **Incidents** (handled in [Incident Response](/maintenance-retainer/incident-response/)). Production unavailable or degraded; time-bounded, client-visible, SLO-driven response. Covered by SLA terms, with severity classification and response-time commitments.

The three classes have different SLAs, different escalation paths, and different commercial implications. Routing a feature request through the bug-fix queue silently consumes retainer capacity; routing an incident through bug-fix queues delays the response that the SLA committed to. The discipline is mechanical classification at intake, with each class flowing through its own workflow.

Bug-fix work has a steady rhythm. Most retainers hold weekly or fortnightly patch windows where bug fixes, dependency updates, and routine operational changes deploy together. Critical security patches and high-severity defects bypass the routine cadence with an emergency-patch process. The output is a healthy live system, a documented patch log, and a credible record of the retainer's value to the client.

## Best practices

**Use a triage matrix to classify every incoming issue.** Every issue submitted to the support queue is triaged within a defined SLA — typically 24 hours for retainer-covered systems — into one of four categories:

- **Critical defect.** System unavailable or unable to perform a core function. Triggers emergency-patch process; bypasses the routine patch window.
- **High-severity defect.** Major feature broken; workaround may exist but is unreasonable. Scheduled into the next patch window with priority.
- **Medium/low-severity defect.** Minor feature broken or cosmetic issue. Scheduled into a future patch window based on retainer capacity.
- **Not a defect.** Either feature request (route to [Feature Iteration](/maintenance-retainer/feature-iteration/)), operational request (covered by retainer if in scope), or out-of-scope (priced separately).

Triage is performed by the agency's named support engineer (or delivery lead on smaller retainers), with the classification visible to the client. Engagements that defer triage produce a queue where critical issues age alongside requests for "minor" enhancements that turned out to be major.

**Run scheduled patch windows.** Patches deploy on a documented cadence — weekly, fortnightly, or monthly — agreed in the retainer agreement. Each window deploys a batch of triaged fixes, dependency updates, and routine operational changes, with documented testing and a defined rollback path. Predictable patch windows produce predictable client expectations and reduce the operational ceremony of each individual fix. Continuous-deployment retainers may forgo windows in favour of per-fix deployment, but the principle holds — patches deploy on a documented procedure, not ad-hoc.

**Maintain a client-visible patch log.** A shared document or tracker view listing every patch that deployed: date, summary of changes, related ticket numbers, deployment outcome. The log is updated immediately after each patch window. The transparency builds trust during the retainer (the client sees the work being done) and provides defensibility at retainer-renewal time (the agency can demonstrate the retainer's value with a credible record). Engagements without a patch log produce renewal conversations where the client says "what have you actually done for us?" and the agency cannot answer concretely.

**Define an emergency-patch ritual for critical issues.** Critical defects bypass the routine patch window. The emergency-patch process has named steps:

- Issue acknowledged within the SLA's critical-acknowledgement window (often 1 hour).
- Triage confirms severity within the SLA's critical-triage window (often 2–4 hours).
- Fix developed, tested in staging, and deployed with abbreviated change-control.
- Post-emergency review documents what happened and whether processes need adjustment.

The ritual mirrors [incident response](/maintenance-retainer/incident-response/) but operates on defects rather than outages. The discipline matters because emergency patches deployed without a structured process produce their own incidents — fix-the-fix patches that consume more retainer capacity than the original issue.

**Apply scope discipline in every ticket.** Each support ticket has a documented scope: the specific defect against the specific signed requirement. Tickets that drift ("while you're in there, can you also...") get split — the original defect is fixed under the original scope; the additional work is logged separately as either a new defect or a feature request. Engagements that allow ticket-scope drift produce retainer hours absorbed by uncommitted work.

**Document dependency-update cadence in the retainer.** Routine dependency updates (Renovate or Dependabot bumps, security advisories, framework updates) consume real retainer hours. The retainer agreement names which updates the agency commits to applying — typically all critical security advisories within a documented SLA, all dependency major versions evaluated within a quarter, ongoing minor and patch updates rolled into routine patch windows. Without explicit cadence, engagements either drift to never-update (security debt accumulates) or always-update (retainer hours consumed by routine work that crowds out actual support).

:::caution
Do not accept client-reported "bugs" without classification. Many issues that arrive at the support queue are feature requests in bug clothing — "this should also do X" or "we'd prefer Y instead." Routing them silently to the bug-fix queue produces retainer scope creep that erodes margin and sets a precedent the client cannot help but exploit. The discipline is mechanical: every incoming issue passes through triage classification before any work begins; feature requests route to [Feature Iteration](/maintenance-retainer/feature-iteration/) where they are priced or drawn against allocated capacity.
:::

**Run regression checks on every patch.** Patch deployments use the engagement's CI pipeline including the regression suite (per [functional and regression testing](/qa-testing/functional-regression-testing/)). Patches that pass CI gates flow to the patch window; patches that fail are diagnosed before deployment. The discipline matters because patches deployed without regression coverage are how a 30-minute fix becomes a 4-hour incident — a small change to one component breaks something seemingly unrelated, the fix-the-fix patch does the same, and the retainer hours leak.

## Desired outcomes

By the end of any quarter under retainer support, the engagement has:

- A running support backlog with triage applied to every issue, classification visible to the client, and SLA compliance tracked
- A documented patch cadence operating predictably, with patch windows delivering batched fixes and dependency updates
- A documented emergency-patch process tested at least once and rehearsed in tabletop form for critical events
- A client-visible patch log covering every deployment in the period, ready as evidence of retainer value at renewal conversations
- A documented scope boundary maintained across the support queue: defects fixed under retainer, enhancement requests routed to feature work, out-of-scope items priced or declined
- A monthly or quarterly patch report shared with the client summarising patches deployed, dependencies updated, security advisories addressed, and SLA performance against the retainer's commitments
- A clean record of dependency-update activity covering security patches applied within SLA, major version reviews completed on cadence, and a forward roadmap for evaluation work

## What the industry does

**Structured-SLA vs. best-effort cultures.** Structured-SLA agencies commit to documented response and resolution times per severity tier — critical issues acknowledged in 1 hour, resolved within 8 hours; high-severity acknowledged in 4 hours, resolved within 2 business days; medium acknowledged in 1 business day, resolved within 1 week. Trade-off: predictable client experience, requires capacity planning to meet SLAs, justifies higher retainer pricing. Best-effort agencies do not commit to SLAs — issues are addressed when capacity allows, with no formal response-time commitment. Trade-off: simpler operationally, lower commitment, lower-margin retainer pricing, weaker commercial defensibility. Structured-SLA dominates in mid-sized and larger retainers, in regulated industries, and in agencies whose retainer pricing reflects the SLA tier; best-effort survives in startup-velocity engagements and in retainers where the client values flexibility over predictability.

**Routine-cadence vs. continuous-deployment patch cultures.** Routine-cadence agencies batch patches into scheduled windows (weekly, fortnightly, monthly). Trade-off: predictable, lower per-fix ceremony, slower response for non-critical issues. Continuous-deployment agencies deploy fixes individually as they pass CI gates. Trade-off: faster response, requires excellent automation and monitoring, fits clients with continuous-delivery cultures. Routine-cadence dominates in regulated industries, in clients with formal change-control processes, and in retainers where predictability matters more than speed; continuous-deployment dominates in modern product engagements and in retainers serving clients who already operate continuous-delivery systems.

**In-house-only patches vs. client-engineer-collaborative patches.** In-house-only agencies handle all patch work internally — issues come in, agency engineers fix and deploy. Trade-off: simple, fast, the client team learns nothing about the system from the patch work. Client-engineer-collaborative agencies pair on patches — the client's named engineer sees the diagnosis, reviews the fix, often approves the deployment. Trade-off: slower patches, dramatically better post-handoff knowledge transfer, fits long-running retainers where the client is being trained for eventual self-sufficiency. In-house-only dominates in transactional retainers; collaborative dominates in handoff-track retainers and in long-running agency-client relationships where the client team's growth matters.
