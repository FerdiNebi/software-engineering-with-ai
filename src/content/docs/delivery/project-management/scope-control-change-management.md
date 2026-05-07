---
title: Scope Control & Change Management
description: The live enforcement of the SOW change-control clause at delivery time — the change-control flow, impact-assessment template, and the discipline of saying no to "we'll squeeze it in."
type: sub-section
phase: delivery
order: 7
lastUpdated: 2026-05-07
status: v1
---

## What happens here

Scope control at delivery time is the live enforcement of the change-control clause that was negotiated into the [SOW](/pre-sales/sow-contract-drafting/) at pre-sales time. Every SOW for a fixed-scope or fixed-price engagement contains a change-control clause; whether it has teeth depends entirely on whether the PM enforces it during delivery. Engagements where the PM treats change requests as conversations to absorb produce silent scope expansion of typically 10–30% over the engagement, eaten out of margin or out of quality. Engagements where the PM treats every change request as a formal flow produce smaller margins on paper but trustworthy commercial conversations and predictable delivery.

Change requests come from many sources. The client asks for a feature that wasn't in the SOW. The team discovers a requirement that was implicit in the SOW but not specified. A signed FR turns out to be ambiguous and the team's interpretation costs more than the client's interpretation. The competitive landscape shifts and the client wants to add a feature mid-build. Each of these is a *change* — and whether the engagement absorbs it, charges for it, or refuses it must be a deliberate decision recorded in writing, not a conversation.

The change-control flow is a five-step ritual:

1. **Request received.** The PM logs the request in the change log with date, source, and a one-line description.
2. **Impact assessment.** The technical lead and QA lead assess the cost (engineering hours, testing hours, additional risk) and the schedule impact.
3. **Client decision.** The PM presents the impact assessment to the client with three options: proceed (with cost/schedule impact), defer (to post-launch), or refuse (out of scope, no commitment to deliver).
4. **Change order issued.** If the client chooses to proceed, the PM issues a change order against the SOW change-control clause. The change order is signed by both sides before work begins.
5. **Backlog updated.** Once the change order is signed, the PM adds the new work to the [backlog](/delivery/project-management/backlog-management/) and surfaces it in the next [status report](/delivery/project-management/status-reporting-stakeholder-communication/).

The flow is the same whether the change is small (one extra story) or large (a new feature area). What changes is the depth of the impact assessment — a small change might be a one-line note, a large change might be a half-day exercise.

## Best practices

**Distinguish "in-scope refinement" from "change request."** A request that clarifies an existing FR is refinement and doesn't trigger the change-control flow — it triggers the [backlog refinement](/delivery/project-management/backlog-management/) flow. A request that adds new behaviour, new screens, new data, new integrations, or new performance commitments is a change. The line is sometimes ambiguous; the discipline is checking against the signed FR/NFR set every time. If the new behaviour is documented in a numbered FR, it's refinement; if it isn't, it's a change. PM judgement calls in grey areas should err on the side of "this is a change" — under-recording changes is the failure mode that costs engagements the most.

**Use a fixed impact-assessment template.** Three columns: cost (engineering hours, testing hours, design hours if applicable), schedule (sprint impact: same sprint, next sprint, defer), risk (any new risk introduced by the change). The template makes assessments fast and comparable; ad-hoc assessments produce inconsistent client conversations because each assessment looks different. The PM, technical lead, and QA lead should be able to fill the template in 30–60 minutes for most changes. Larger changes that need a half-day of work justify it because the resulting decision sticks.

**Make the change order land before the work starts.** This is the single most-violated rule in agency change-control. The team is mid-sprint, the client asks for "just one small thing," the team agrees to look at it, by end-of-sprint the change is mostly built, and the change order is being negotiated retroactively against work that has already happened. Once work starts, the agency has lost negotiating leverage — the team feels they've already invested, and the client knows the agency is unlikely to revert. The discipline is *no work begins until the change order is signed*. Smaller changes often get a same-day turn-around, but the order of operations matters.

:::tip
Maintain a single change log Markdown file in the project repo (or equivalent), with one line per change request: date, source, description, impact summary, decision, change-order link. The log becomes the canonical history of how the engagement's scope evolved, and it's the artefact the PM reaches for at the end-of-engagement debrief and the artefact the client looks at during commercial reconciliation.
:::

:::caution
Do not let "we'll squeeze it in" become an acceptable response to a change request. The phrase is the most common way scope creeps in agency engagements: it expresses goodwill, it lowers immediate friction, and it costs the engagement 5%–15% of capacity per occurrence. The discipline is replacing it with "let me run the impact assessment and we'll decide together" — the same goodwill, less friction long-term, and a recorded decision instead of an absorbed cost.
:::

**Calibrate the change-control rigour to the engagement's commercial structure.** Fixed-price engagements run strict change control because the only way to protect margin is to bill changes. T&M engagements run lighter change control because all time is billable anyway — the value of the change-control flow on a T&M engagement is to maintain visibility (so the client doesn't get a surprise invoice) rather than to protect billing. Hybrid engagements (fixed core scope plus a T&M change-order envelope) run strict control on the core scope and lighter control on changes (which are billed against the envelope automatically). The PM picks the right rigour at engagement kickoff and runs it consistently.

**Surface the change-control activity in every status report.** The [status report](/delivery/project-management/status-reporting-stakeholder-communication/) should include a "Change-control activity" section every period: requests received, decisions made, change orders issued, change orders pending. The client sees the change activity as a normal engagement rhythm, not as an exception. Engagements that hide change activity (or only surface it when something has gone wrong) produce client surprise that erodes trust; engagements that surface it regularly normalise it.

## Desired outcomes

Across the engagement, scope control produces:

- **A change log the client co-owns**, with one line per change request and a clear decision trail
- **Signed change orders** for every accepted change, against the SOW change-control clause
- **No unbilled scope expansion** — every additional story in the backlog traces to a signed change order or to a refinement of an existing FR
- **No surprised stakeholders at end-of-sprint demos** — the client knows what's in the sprint, what's deferred, and why
- **A clean commercial-reconciliation conversation at engagement close**, where the agency and client can both reconstruct what was committed, what was changed, and what was delivered

## What the industry does

**Strict-control vs. relationship-led agencies.** Strict-control agencies bill every change, no matter how small. The model produces clean commercial outcomes and clear margins; the trade-off is friction in trusted relationships where small absorbed changes are part of the value the agency offers. Relationship-led agencies absorb small changes and only formally control large ones. The model produces softer client relationships and higher implicit value delivery; the trade-off is margin erosion, especially when the absorbed-change rate is high. Most mature agencies run a hybrid: a defined "absorbed-change envelope" (e.g. up to £5k of small changes per quarter, absorbed as goodwill) plus formal change orders for anything beyond. The envelope is named in the SOW so it's part of the commercial deal rather than improvisation.

**Sprint-boundary vs. continuous-flow change-control.** Sprint-boundary control batches change decisions to the sprint planning cycle — change requests received during sprint N are assessed and decided before sprint N+1's planning. The model is predictable but slow. Continuous-flow control assesses changes as they arrive, with same-day turn-around on small changes and longer for large ones. The model is faster but produces more PM time-cost. Sprint-boundary fits engagements with infrequent changes (say <5/sprint); continuous-flow fits engagements with frequent changes (say >10/sprint, often consumer-product engagements with active stakeholders).

**PM-only vs. PM + technical-lead + QA-lead change-control.** PM-only models put the PM as the sole gatekeeper, with the technical lead consulted on cost. The model is fast and works on small engagements. Triple-signed models (PM + technical lead + QA lead all approve) are slower but produce stronger assessments and shared accountability for the decision. The triple-signed model is standard on engagements over £200k and on engagements in regulated industries where audit trails matter; the PM-only model is fine on smaller engagements.
