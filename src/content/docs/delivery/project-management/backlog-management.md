---
title: Backlog Management
description: Delivery-time stewardship of the backlog — refinement cadence, prioritisation frameworks, definition of ready, and traceability back to the signed requirements.
type: sub-section
phase: delivery
order: 4
tree: "process"
lastUpdated: 2026-05-07
status: v1
---

## What happens here

Backlog management at delivery time is the ongoing stewardship of the work the team has committed to deliver under the SOW. It is distinct from initial requirements capture — that work happened during [Requirements & Design](/requirements-design/functional-nonfunctional-requirements/), where the FRs and NFRs were defined and signed off. The backlog inherits from that work: every backlog item should trace back to a numbered FR or to a recorded change order.

The PM is the backlog *steward*, not the sole *author*. Authorship is shared — engineers add technical-debt items and refactoring stories, QA adds test-debt and tooling stories, the PM adds delivery-coordination stories (e.g. UAT preparation, release-readiness checks), and the client adds change requests through the [scope-control flow](/delivery/project-management/scope-control-change-management/). The PM keeps the backlog ordered, refined, and ready for upcoming sprints; the team keeps the backlog populated with the work it sees coming.

Backlog management runs continuously, with a formal refinement ritual once or twice per sprint. Refinement is **not** sprint planning — it's the work that makes sprint planning possible. In refinement, the team:

1. Walks the top of the backlog (typically 1–2 sprints' worth of items).
2. Sizes items that aren't sized yet.
3. Surfaces missing acceptance criteria, undefined dependencies, and unresolved questions.
4. Splits items that are too large to fit a sprint (see [Estimation & Sprint Slicing](/delivery/project-management/estimation-sprint-slicing/)).
5. Reorders items based on new information (a risk has materialised, a dependency has slipped, the client has shifted priority through change-control).

The output of refinement is a top-of-backlog that meets the team's Definition of Ready. Stories that fail DoR drop out of the next sprint's plan; stories that meet DoR are eligible for sprint-planning commitment.

## Best practices

**Run refinement on a separate cadence from planning.** A common failure mode is folding refinement into sprint planning — the team arrives at planning to discover stories are unsized, ambiguous, or too large. Planning runs over, the commitment is unclear, and the sprint starts behind. Healthier engagements run refinement mid-sprint (e.g. Wednesday of a two-week sprint) on the upcoming-sprint backlog, separately from the planning meeting that schedules the next sprint. Refinement happens with information available; planning happens with already-refined stories.

**Make Definition of Ready specific and team-owned.** A useful DoR is concrete and short: every story must have acceptance criteria written by QA-or-PM, must be sized by the team (not by an individual), must have any external dependency (design, API contract, content) explicitly named and confirmed available, and must have a one-line "what done looks like" statement. Engagements that copy a generic DoR template from the internet end up with stories that pass DoR by ticking boxes but still arrive at planning with hidden ambiguity.

**Prioritise by value × cost, not by feature wishlist.** The backlog is the place where the SOW scope meets reality. Some items the SOW commits to will turn out to be cheap; some will turn out to be expensive. The PM works with the technical lead to keep prioritisation honest: high-value, low-cost items go first; high-value, high-cost items get sized and decided early; low-value, high-cost items get challenged ("is this still in scope?"). Frameworks like RICE (Reach, Impact, Confidence, Effort), MoSCoW (Must, Should, Could, Won't), or simple value-vs-effort 2×2s are tools for that conversation — none replace the conversation, all structure it.

:::tip
Maintain backlog item traceability with a single field per item that names the source — the FR number, the change-order number, the technical-debt category, or the test-debt category. Engagements that lose source-traceability accumulate orphan items that nobody can defend ("why is this here?") and that get cut without anyone realising they were SOW commitments.
:::

:::caution
Do not treat the backlog as a feature dump for everything anyone might want. Items added "just in case" without a sponsor and without a value framing become the swamp the team works through to find real work. The PM's job in refinement is to *remove* items that don't belong, as much as to refine the items that do. A good backlog is shorter than a bad one.
:::

**Keep the top of the backlog refined to a sprint or two ahead — and not further.** Refinement is expensive (it consumes team time), and refining items that are six sprints away wastes that investment because requirements will have changed by then. The discipline is refining 1–2 sprints out, leaving items beyond that as one-line placeholders, and trusting that the backlog will surface what to refine next. Engagements that try to refine the entire backlog up-front produce a brittle plan that needs rework as soon as the first change order lands.

**Make the backlog a single source of truth.** One tool, one location, one name per item. Engagements that maintain a "real backlog in Jira" plus a "client-friendly backlog in Notion" plus a "what we're actually doing list in Slack" produce drift between the three within a week, and the team and client end up working from different views of the same engagement. The cleanest model is a single backlog (Jira, Linear, GitHub Issues, or even a Markdown file in the repo) the PM steward-updates and that everyone — including the client — has read access to.

## Desired outcomes

Across the engagement, backlog management produces:

- **A refined top-of-backlog** at every sprint boundary, with at least 1–2 sprints' worth of stories meeting Definition of Ready
- **A ranked backlog** the client can defend (when asked "why are you working on X before Y?", the PM has the prioritisation answer ready)
- **End-to-end traceability** from each backlog item back to its source — a numbered FR, a change order, a technical-debt category, or a test-debt category
- **A clean record** of items added, removed, reordered, and split, kept in the backlog tool's history
- **No surprise items** appearing in sprint planning — every story committed in planning was visible in the backlog at least one refinement cycle prior

## What the industry does

**Tooling-led vs. lightweight.** Tooling-led agencies run heavyweight backlog tools (Jira with custom workflows, Azure DevOps, Aha!, ProductBoard) configured to enforce a structured backlog discipline. The model produces strong reporting and audit trails; the trade-off is the upfront configuration cost, the team friction of complex workflows, and the tendency to confuse tool sophistication with delivery sophistication. Lightweight agencies run the backlog as a simple list (Linear, GitHub Issues, Trello, sometimes a `BACKLOG.md` file) with minimal workflow. The model produces lower friction and faster onboarding; the trade-off is weaker reporting and a higher dependence on the PM's discipline rather than the tool's enforcement. Most engagements between £50k and £300k are better served by lightweight tooling than by heavyweight; above £500k, the heavier tooling earns its keep.

**Full-team refinement vs. PM+lead refinement.** Full-team refinement involves every developer and QA engineer in the refinement ritual, producing strong shared understanding and a backlog the team trusts. The cost is roughly 2–4 hours of every team member's time per sprint. PM+lead refinement involves only the PM, technical lead, and QA lead, who refine on behalf of the team and bring the refined items to planning. The cost is much lower (roughly 1–2 hours of three people's time per sprint), but the team can arrive at planning with surprises. The trade-off is engagement-size dependent: small engagements (3–5 people) often run full-team refinement because the cost is low; larger engagements often run PM+lead refinement to scale the ritual.

**Story-points vs. T-shirt vs. hours.** Story-point estimation produces a unitless velocity that is hard to compare across teams but stable within a team. T-shirt sizing (XS, S, M, L, XL) is faster but maps loosely to actual capacity. Hours-with-confidence-band estimation (e.g. "2–4 hours, 80% confidence") is the most direct mapping to billable time but is the most fragile to changes in scope or complexity. Most agencies pick story-points or T-shirts for in-sprint sizing and hours for client-facing reporting (because clients understand hours and budgets). [Estimation & Sprint Slicing](/delivery/project-management/estimation-sprint-slicing/) covers the calibration loop.
