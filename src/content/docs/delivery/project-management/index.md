---
title: Project Management
description: The commercial product agency clients pay for during Delivery — cadence, status, change control, risk management, and retros that hold Development and QA / Testing together.
type: sub-section
phase: delivery
order: 1
tree: "process"
lastUpdated: 2026-05-07
status: v1
---

## What happens here

Project Management is the third stream that runs concurrently with [Development](/delivery/development/) and [QA / Testing](/delivery/qa-testing/) inside the [Delivery](/delivery/) phase. It is also the stream most commonly mistaken for overhead. In agency engagements, PM is a **commercial product** clients pay for — billed either as a named line item or blended into the team rate — and what the client actually consumes from the engagement on a week-by-week basis. Without PM, Development and QA produce work but the client cannot see it, cannot trust it, and cannot sign off on it.

Agency PM is not the same as product-company PM. A product manager at a tech company owns a roadmap, prioritises user-facing features against business outcomes, and reports to a head of product. An agency project manager owns a *delivery cadence* against a *signed scope*. They do not set the roadmap (the SOW already locked it), they do not own commercial outcomes (the client does), and they do not own engineering decisions (the tech lead does). Their deliverables are cadence, transparency, and change control — and on agency engagements, those are the things the client cannot get from anywhere else.

This sub-section contains eight leaf pages, each covering one PM activity:

1. **[Delivery Mobilization & Kickoff](/delivery/project-management/delivery-mobilization-kickoff/)** — the activity that turns a signed delivery SOW into a team that can ship. Allocation, account setup, RACI, and the kickoff meeting that opens Sprint 1.
2. **[Sprint Planning & Cadence](/delivery/project-management/sprint-planning-cadence/)** — the heartbeat of delivery. Sprint length, ceremonies, definition of ready, definition of done.
3. **[Backlog Management](/delivery/project-management/backlog-management/)** — keeping the backlog refined, prioritised, and ready for the next 1–2 sprints. Distinct from [Requirements & Design's initial requirements capture](/requirements-design/functional-nonfunctional-requirements/), which feeds this work.
4. **[Estimation & Sprint Slicing](/delivery/project-management/estimation-sprint-slicing/)** — calibrating delivery-time estimates against [Pre-Sales pricing](/pre-sales/pricing-estimation/) and slicing work to fit sprint boundaries.
5. **[Status Reporting & Stakeholder Communication](/delivery/project-management/status-reporting-stakeholder-communication/)** — the PM-owned client-visible artefact that ensures no surprises.
6. **[Scope Control & Change Management](/delivery/project-management/scope-control-change-management/)** — the live enforcement of the [SOW change-control clause](/pre-sales/sow-contract-drafting/) at delivery time.
7. **[Risk & Issue Management](/delivery/project-management/risk-issue-management/)** — the living register of what could go wrong and what already has.
8. **[Retrospectives](/delivery/project-management/retrospectives/)** — the calibration ritual that converts observations into change.

Participants are the PM (dedicated or fractional), the technical lead (escalation point for engineering decisions), the QA lead (escalation point for quality decisions), and the named client sponsor. The PM is the only role with continuous client-facing time outside of demos.

## Best practices

**Treat PM as a stream with its own deliverables, not as overhead.** The single biggest cultural failure in agency PM is treating it as a tax — time taken away from "real work." That framing produces under-resourced PM, blended billing that hides PM cost, and engagements where the PM defaults to note-taking. The healthier framing is PM-as-product: a named PM owns a named deliverable list (status report, change log, risk register, retro outputs), the client sees those deliverables on a known cadence, and the PM's time is tracked the same way Development and QA time is tracked. This framing is what allows the PM to push back on scope creep, run hard conversations about timeline drift, and represent the engagement at the steering committee.

**Run PM cadence at the sprint boundary, not at an independent rhythm.** Status reports land at end-of-sprint, demos happen at end-of-sprint, retros happen end-of-sprint, sprint planning happens start-of-sprint. The cadence is not separately negotiated — it falls out of the sprint length agreed at kickoff. Engagements where PM cadence drifts away from sprint cadence (weekly status during a two-week sprint, or monthly status during a one-week sprint) lose the rhythm that makes the cadence work; the client sees half a sprint of progress and reacts to incomplete information.

:::tip
Maintain the four PM-owned artefacts (status report, change log, risk register, retro outputs) as living Markdown files in the project repo, alongside the code. Two consequences: the artefacts are version-controlled (so disputes about "when did we agree to that?" resolve from history rather than memory), and the PM and engineering team work from the same source of truth rather than separate Notion / Jira / wiki silos that drift.
:::

:::caution
Do not let the PM role become "the person who runs Jira." If PM time is dominated by ticket triage and tool admin, the engagement is missing the PM stream — the client is paying for tool-keeping rather than for cadence, transparency, and change control. Calibrate by checking what's in the weekly status report: if it's mostly ticket counts, the role has slid; if it's a narrative on scope, schedule, risk, and decisions needed, the role is intact.
:::

**Have a named PM, not a rotating responsibility.** PM responsibility distributed across the team produces inconsistent client communication, missed handoffs between sprints, and a status report that nobody owns. A single named PM (full-time or fractional) accountable for the four artefacts, even if the role consumes only 20% capacity on a small engagement, outperforms three engineers each "covering" PM in their spare time. If a fractional PM is the right shape commercially, name the fractional allocation in the SOW (e.g. "PM at 0.4 FTE for the duration of the build") so the client and team both see it as a real, sized commitment.

**Plan for the engagement, not just the sprint.** Sprint-level planning answers "what will we ship in two weeks." Engagement-level planning answers "where do we expect to be in eight weeks, twelve weeks, at the end of the SOW." Both are the PM's responsibility. Engagements that only plan sprint-by-sprint produce the "we forgot about UAT" pattern at week 12 — running room ran out and nobody flagged it. The PM keeps a milestone view that sits above the sprint-by-sprint backlog and surfaces upcoming compression points (UAT cycle, release windows, client holiday weeks).

## Desired outcomes

By the end of Delivery, the PM stream has produced the following artefacts, all visible to the client throughout the engagement:

- **Sprint plans and outcomes**, one per sprint, showing committed scope and delivered scope, with deltas explained
- **A current backlog** that the team can plan from for at least the next two sprints without rework
- **Status reports** at the agreed cadence (typically weekly written + monthly steering), each carrying scope/schedule/budget against baseline, top risks, and decisions needed
- **A change log** capturing every scope change, the impact assessment, the client decision, and the link to the resulting change order
- **A risk register** at every sprint boundary, with an owner and mitigation for every above-threshold risk
- **Retro outputs** showing what the team learned each sprint and what changed as a result
- **A clean handoff package** to [Deployment / Launch](/deployment-launch/) covering the release candidate, the runbook, the open-issues backlog, and named stakeholders for go-live

## What the industry does

**Dedicated PM vs. fractional PM vs. blended PM.** Dedicated-PM agencies put one PM on each engagement, billed at full rate, with the PM's time and deliverables named in the SOW. The contract is the cleanest (everyone agrees on PM scope and PM cost) and the engagement runs the most predictably; the trade-off is the highest commercial cost and the lowest engagement size that can support the model — typically £150k+ for a full-time PM. Fractional-PM agencies share one PM across two or three concurrent engagements, with allocation named in the SOW (e.g. "PM at 0.5 FTE"). The model is the practical middle ground for engagements between £80k and £200k. Blended-PM agencies do not bill PM separately at all — PM time is absorbed into the team rate and provided as part of the package. The model works for trusted relationships and engagements with simple scope; it falls apart on engagements with active scope-control or stakeholder-management needs because the PM doesn't have visible time to spend, and the client and PM both default to under-investing.

**Onshore PM vs. nearshore PM.** Most agencies place the PM onshore even when Development and QA are nearshore. The reason is timezone alignment with the client and the cultural alignment that makes hard conversations land — when bad news has to be delivered, the agency sends someone in the client's working hours and the client's communication style. The nearshore-PM model exists (lower cost, sometimes preferred when the client is itself nearshore) but produces friction on engagements where the client expects continuous business-hours availability from the PM.

**PM-as-billable vs. PM-as-overhead vs. PM-as-product.** The historical agency model treats PM as overhead — the cost of doing business, baked into the team rate. The middle-ground model treats PM as billable but invisible — billed against the engagement, but not given commercial visibility in the SOW. The mature model treats PM as a product — named line item, named deliverables, named time commitment, billed and reported on like any other deliverable. The mature model produces the cleanest commercial conversations and the highest-quality PM work because the PM is accountable to a named scope rather than to whatever is left over after engineering takes its share. Most senior engineers who become independent consultants underprice and under-name PM in their first one or two engagements; the calibration usually happens after the first engagement that ran badly because PM was under-invested.
