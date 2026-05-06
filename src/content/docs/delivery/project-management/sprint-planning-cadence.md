---
title: Sprint Planning & Cadence
description: The heartbeat of agency delivery — sprint length, ceremonies, definition of ready, definition of done, and how cadence interlocks with Development and QA / Testing.
type: sub-section
phase: delivery
order: 2
lastUpdated: 2026-05-06
status: v1
---

## What happens here

The sprint is the unit of agency delivery. A sprint is a fixed-length time-box (typically one or two weeks) inside which the team plans a commitment, builds it, tests it, demos it, and reflects on it. The sprint cadence is the heartbeat: it gives [Development](/delivery/development/) a stable plan to execute against, gives [QA / Testing](/delivery/qa-testing/) a stable scope to test against, and gives the client a stable window to provide input and see progress. Without sprint cadence, an engagement degrades into rolling chaos where everyone is working but nobody can answer "what will land this week."

A sprint contains four ceremonies, each producing a defined output:

1. **Sprint planning** at the start of the sprint, where the team commits to scope. Output: a sprint backlog with named owners and a definition of done per story.
2. **Daily checkpoint** (sometimes called a stand-up), 15 minutes, where the team surfaces blockers and aligns. Output: a clear blocker list with owners.
3. **Sprint review** (the demo) at the end of the sprint, where the team shows the client what was built. Output: client feedback recorded against named stories.
4. **Retrospective** at the end of the sprint (covered in [Retrospectives](/delivery/project-management/retrospectives/)). Output: 1–3 owned action items for the next sprint.

The sprint runs across all three Delivery streams. The PM owns planning, daily, and review facilitation; the technical lead owns the engineering content of planning and daily; the QA lead owns the test plan within the sprint and the in-sprint quality gates. The sprint backlog is the single artefact the three streams share.

Sprint length depends on engagement shape. One-week sprints suit short engagements (3 months or less), engagements with frequent client check-ins, and teams running on Kanban-with-sprint-planning. Two-week sprints suit most mid-sized engagements (3–9 months) — they amortise planning overhead and give complex stories room to breathe. Sprints longer than two weeks (three or four weeks) appear in regulated-industry engagements and very large programmes; below the agency scale they introduce more risk than predictability.

## Best practices

**Plan from velocity, not from optimism.** Every sprint commitment should be sized against observed velocity (how much the team has actually delivered in recent sprints), not against what the team hopes to deliver. Sprints 1 and 2 will overcommit because there is no velocity baseline yet — that's expected, and the calibration loop is documented in [Estimation & Sprint Slicing](/delivery/project-management/estimation-sprint-slicing/). By sprint 3, velocity is observable and commitments should track it. Engagements that perpetually overcommit ("we'll catch up next sprint") accrue technical debt as the team cuts corners to hit a number, and demo days reveal fewer working features than committed. The PM's job in planning is to push back on optimism, not just to scribe what the team says.

**Make Definition of Ready non-negotiable.** A story is ready when it has acceptance criteria, has been sized, has open questions resolved, and has a named owner from each stream that touches it. Stories that fail DoR don't enter the sprint, full stop. Engagements that pull in unready stories produce mid-sprint requirements clarification calls that consume the same hours that should have been spent building.

**Make Definition of Done include both Dev and QA.** This is the single most important Delivery convention. Code merged is not done; tests passing in CI is not done; story acceptance criteria verified by a human (Dev or QA depending on story type) is done. A typical DoD looks like: code merged into mainline, automated tests passing, manual exploratory testing run by QA, story acceptance criteria verified, demo recorded if a UI story, technical documentation updated if behaviour changed, change log updated if scope shifted. Engagements with weak DoD ship "done" stories that QA later rejects, producing the rolling backlog of "done-pending-test" stories that demoralise teams and frustrate clients.

:::tip
Run the daily checkpoint as a 15-minute walking-the-board exercise: PM walks through the in-progress column item by item, owners report status and blockers in two sentences, the meeting ends. Avoid the round-the-table "what did you do yesterday, what will you do today, any blockers" format — it produces theatre rather than useful coordination, and it consumes time on items the team isn't actively working on.
:::

:::caution
Do not negotiate the sprint commitment with the client during planning. Planning is a team-internal exercise; the client sees the resulting commitment in the post-planning status update. Engagements that include the client in planning produce political negotiation rather than capacity-based planning, and the team commits to scope it cannot deliver.
:::

**Handle mid-sprint scope intrusion through the change-control flow.** When the client (or the agency) wants to add scope mid-sprint, route the request through [Scope Control & Change Management](/delivery/project-management/scope-control-change-management/) rather than absorbing it. The discipline is hard — the request often feels small — but absorbing scope mid-sprint is how engagements lose 10% of their delivered scope to invisible drift.

**Match status reporting cadence to sprint cadence.** A two-week sprint has a status report at end-of-sprint covering the sprint just closed plus a forward-look at the sprint about to start. A one-week sprint has a weekly status report. Decoupled cadences (e.g. two-week sprints reporting monthly) hide bad news for too long; misaligned cadences (e.g. weekly status during a two-week sprint) report progress against an incomplete sprint and force the PM to invent a narrative. See [Status Reporting & Stakeholder Communication](/delivery/project-management/status-reporting-stakeholder-communication/) for the artefact structure.

## Desired outcomes

Each sprint produces:

- **A defended commitment** the team can articulate to the client, sized against observed velocity
- **A stakeholder-visible plan** showing what's in the sprint and what's not, published before the sprint starts
- **An audit trail** of committed-vs-delivered scope, with deltas explained in the end-of-sprint status report
- **A clean handoff** from the PM-led planning to Development and QA / Testing, with no story entering the sprint that fails DoR
- **A demo recording** at the end of the sprint, attended by PM, Dev lead, QA lead, and the named client sponsor

Across the engagement, sprint cadence produces:

- **Velocity stability** by sprint 3 or 4 (a baseline ±15% sprint-over-sprint)
- **Predictable demo days** the client can plan their week around
- **A ceremony pattern** the team and client both adapt to — engagements that get this right report dramatically lower coordination overhead than engagements running ad-hoc

## What the industry does

**Scrum-by-the-book vs. Kanban-with-sprint-planning vs. hybrid.** Strict-Scrum agencies time-box every ceremony, run story-point velocity, refuse mid-sprint scope changes, and demo on the sprint boundary. The model produces predictability; the trade-off is rigidity, which costs throughput on engagements that need to adapt to client direction inside a sprint. Kanban-with-sprint-planning agencies plan in sprint-sized chunks but execute as continuous flow inside the sprint, demoing on a rhythm that may or may not align with the planning boundary. The model is more flexible; the trade-off is fuzzier predictability for the client. Hybrid agencies (most of the market in 2026) plan in sprints, execute as Kanban-flow, and demo at sprint boundary — borrowing the predictability of Scrum and the throughput of Kanban. The choice is mostly contract-driven: fixed-price engagements push toward strict cadence (predictability beats throughput); T&M engagements tolerate flow (throughput beats predictability).

**One-week vs. two-week vs. four-week sprints.** One-week sprints suit short engagements, prototypes, and teams with very high velocity calibration. Two-week sprints are the agency default — they amortise the planning + retro overhead while staying short enough to feel like a unit. Four-week sprints appear in regulated industries (banking, healthcare, government) where the change-control overhead is high and a smaller cadence wastes time on procedure; they also appear in very large programmes with many cross-team dependencies. Below the agency scale (one-developer freelance work), formal sprints are often dropped entirely in favour of weekly status emails and continuous merge.

**Billable hour-tracking vs. blended sprint commitment.** Time-and-materials agencies track hours per sprint and report against the budget envelope. Fixed-price agencies track sprint commitment vs. delivery against a projected total scope. The cadence is the same; what changes is what the status report measures. Hybrid agencies (fixed-price engagements with a discretionary T&M envelope for change orders) run the fixed-price report on the core scope and an hours report on the change-order envelope, and reconcile both at end-of-sprint.
