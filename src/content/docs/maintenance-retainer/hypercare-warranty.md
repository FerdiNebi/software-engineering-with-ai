---
title: Hypercare & Warranty Period
description: The 2–4 week elevated-response window between launch and the start of the formal retainer — what the agency owes, what the client is entitled to, and how the transition into the retainer is gated.
type: sub-section
phase: maintenance-retainer
order: 2
lastUpdated: 2026-05-07
status: v1
---

## What happens here

Hypercare is the elevated-response window immediately after launch when the agency is still on the hook for stability, defect triage, and rapid response under whatever the original SOW committed to. It is the bridge between [Deployment / Launch](/deployment-launch/) (signed handoff) and the start of the formal retainer or the clean end of the engagement. Most fixed-price SOWs include a defect-liability or warranty period; most retainers do not start counting until that window closes. Hypercare is the period that sits between them.

A typical hypercare period runs 2–4 weeks for a mid-sized engagement, longer (4–8 weeks) for regulated or high-stakes engagements, shorter (1 week) for low-stakes greenfield launches with no migrated data. The length is named in the SOW alongside the SLA terms, the inclusions list, and the trigger for the period closing.

The period has four named characteristics that distinguish it from both pre-launch delivery and post-hypercare retainer:

- **Elevated response.** Faster acknowledgement and resolution times than the steady-state retainer. Sev-1 in 15 minutes, Sev-2 in 1 hour, daily client checkpoint, agency engineers on standby through the agreed window.
- **Free fixes inside the warranty.** Defects against the signed [acceptance criteria](/delivery/qa-testing/user-acceptance-testing/) are fixed at no charge during hypercare. The warranty is contractual; the agency cannot decline to fix in-scope defects discovered in this window without breaching the SOW.
- **Paid changes outside the warranty.** Feature requests, scope additions, and "while you're in there" enhancements are *not* warranty work. They are change orders, billed per the SOW's change-control clause, even when they look small. The discipline matters because the most common form of warranty erosion is the small enhancement that "we'll just throw in" — and the precedent it sets.
- **Daily standup with the client.** A 15-minute working-hours checkpoint covering: what fired in the last 24 hours, what the agency is working on, what the client needs to action. The cadence is dropped to weekly when the system has been stable for the agreed period; until then, daily is the norm. Engagements that skip the daily checkpoint discover at the end of hypercare that the client has accumulated unspoken concerns; daily checkpoints surface them as they happen.

Hypercare ends on a named event, not on a calendar date alone. The standard close criteria are: the agreed calendar window has elapsed, no Sev-1 incidents in the past N days (typically 7), all warranty-eligible defects raised during hypercare are resolved or have a documented plan, and the client has signed the hypercare close-out. If any criterion is not met, hypercare extends — usually under the SOW's contingency clause — until it is.

## Best practices

**Name the hypercare window in the SOW, not in the post-launch email.** The hypercare period's duration, scope, response times, and close criteria are named in the SOW signed before delivery starts. The detail matters: "2-week hypercare following launch with Sev-1 acknowledgement in 15 minutes, Sev-2 in 1 hour, daily 15-minute client standup, fixes for defects against signed UAT acceptance criteria included at no charge, feature changes priced per the change-control clause." Engagements that try to negotiate hypercare scope after launch — when the client is already operating the system and the leverage has shifted — discover the conversation goes the agency's way much less often than it would have at SOW signing.

**Distinguish defect from change at intake, not under pressure.** Each hypercare ticket is classified at intake against the [signed FR/NFR set](/requirements-design/functional-nonfunctional-requirements/) and the signed UAT acceptance package: defect (covered by warranty), change (priced as a change order), or operational request (handled per the operational scope of the upcoming retainer). The classification is a 5-minute exercise, made by the agency's tech lead or PM with reference to the signed artefacts. Engagements that triage classification ad hoc per ticket find that "small fixes" silently absorb capacity that was never priced for them.

**Run a daily 15-minute standup with the named client representative.** The agenda is fixed: what fired in the last 24 hours and how the agency responded, what the agency is working on now, what the client needs to action, any new issues raised. The standup is short, scripted, and exists to surface concerns before they become end-of-hypercare disputes. The client gets visibility; the agency gets pressure release; both sides build the relationship that funds the retainer renewal. Engagements that skip the daily standup discover at hypercare close that the client has accumulated frustrations that should have been resolved in week 1.

:::tip
Maintain a hypercare ticket log as a Markdown file in the project repo (e.g. `docs/hypercare-log.md`) covering every ticket: timestamp received, classification (defect / change / operational), severity, named owner, resolution timestamp, and link to the resolving commit or change order. The log becomes the artefact for hypercare close-out — the client and agency review it together at the close meeting, sign the close-out document referencing it, and keep it as the engagement's hypercare record. Engagements without a hypercare log close the period from memory, which is the wrong technology for a contractual milestone.
:::

:::caution
Do not let hypercare drift into informal-support mode where the agency keeps responding past the named end date because "we're already in the channel." The pattern erodes the boundary between paid and unpaid work and usually means the retainer never gets signed because the client is already getting the service for free. The discipline is mechanical: at the named end date, hypercare closes against its criteria, the close-out is signed, and the relationship transitions to either signed retainer or per-incident pricing. Channels stay open; obligations do not.
:::

**Plan the retainer signature for week N-1, not week N+1.** The retainer agreement is drafted before launch, finalised during hypercare, and signed *before* hypercare ends — typically in the second-to-last week. The discipline avoids the "we're between engagements" gap where the agency is no longer on hypercare but the retainer hasn't been signed and incidents have no commercial cover. Engagements that draft the retainer after hypercare ends create either a no-coverage gap or a forced free-extension of hypercare while paperwork lands.

**Run a hypercare close-out as a named event.** The close-out is a 30–60 minute meeting attended by the agency's delivery lead, PM, technical lead, and the named client stakeholders. The agenda: review the hypercare ticket log, confirm every defect is resolved or has a documented plan, confirm the close criteria are met (or document the extension if not), confirm the retainer is signed (or that the engagement closes here), and sign the hypercare close-out document. The signed close-out is what the agency cites when an issue is raised in week 5 that should have been raised in week 2.

**Capture lessons for the agency's next launch.** Hypercare surfaces systemic issues that delivery did not catch — gaps in the runbook, monitoring blind spots, deployment steps that worked in staging but not in production, integrations whose failure modes were not tested. The hypercare close-out captures these in a learning document that feeds back into the agency's launch playbook. Engagements that close hypercare without capturing the learnings rediscover the same issues at the next engagement's launch.

## Desired outcomes

By the end of the hypercare period, the engagement has:

- A signed hypercare close-out document accepting that the named close criteria are met (calendar window elapsed, no Sev-1 in the past N days, all warranty-eligible defects resolved or with documented plans)
- A complete hypercare ticket log as the engagement's artefact for warranty-period work, classified between defect, change, and operational categories
- A signed retainer agreement (or an explicit decision that the engagement closes warranty-only) executed before hypercare ends, with the retainer's first day scheduled no later than hypercare's last day to avoid coverage gaps
- A handover from elevated-response cadence to retainer-rate cadence: SLA tiers transition, daily standup either ends or moves to weekly, on-call rotation continues under the retainer's terms
- A captured set of launch-quality learnings folded back into the agency's launch playbook, runbook templates, and pre-launch checklist
- A documented baseline of system stability after hypercare close — defect rate, incident rate, performance trend — that becomes the reference for retainer-period operations and the trigger if any metric degrades materially

## What the industry does

**Hypercare-as-named-period vs. hypercare-as-marketing cultures.** Named-period agencies treat hypercare as a contractual artefact: named in the SOW, with response times, scope, and close criteria documented before launch. Trade-off: explicit obligations and explicit boundaries, requires the upfront contractual discipline, produces clean transitions into retainer. Marketing-only agencies use the word "hypercare" in pre-sales conversations but never define it contractually — the agency promises elevated post-launch attention without naming what that means commercially. Trade-off: appears flexible to the client at sales time, produces ambiguity and commercial erosion at launch when the client expects unlimited attention and the agency cannot afford to provide it. Named-period dominates in mature agencies and in regulated work; marketing-only survives in agencies whose pre-sales motion has not caught up to their delivery discipline.

**Free-warranty vs. retainer-funded hypercare cultures.** Free-warranty agencies include the hypercare window's defect-fix work in the original SOW price — the launch milestone covers warranty fixes for the agreed window at no additional charge. Trade-off: simpler commercial conversation, the warranty cost is priced into the SOW from the start, the agency carries the risk if defect volume exceeds expectations. Retainer-funded agencies treat hypercare as the first weeks of the retainer — the retainer's hours bucket starts on launch day and absorbs hypercare work, with elevated response delivered against the retainer's SLA terms rather than as warranty. Trade-off: the client pays for hypercare under the retainer rather than under the SOW; the agency does not carry warranty risk. Free-warranty dominates in fixed-price engagements and in regulated work where the warranty is procurement-mandated; retainer-funded survives in T&M engagements and in retainer-from-day-one structures where the retainer is the primary commercial relationship.

**2-week vs. 4-week vs. 8-week hypercare windows.** 2-week agencies treat hypercare as a brief transition into steady-state operations — appropriate for greenfield launches with low data complexity, internal-tool launches with controlled user volumes, and launches where the agency has high confidence in the deployment. 4-week agencies — the modern default for mid-market engagements — give the system enough time to surface the second-week and third-week issues (timing-related bugs, scheduled-job edge cases, end-of-billing-cycle issues) that 2-week windows miss. 8-week (or longer) agencies handle regulated, high-stakes, or large-data-migration launches where the system needs a full operational cycle (a billing month, a quarterly close, a peak-traffic event) inside hypercare. The choice is a function of system complexity and the cost of late-surfaced issues, not agency preference. Engagements that pick a window shorter than the system's natural cycle inevitably extend hypercare under the SOW's contingency clause; engagements that pick too long pay for elevated response that the system did not need.
