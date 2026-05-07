---
title: Estimation & Sprint Slicing
description: The delivery-time calibration loop that closes the gap between Pre-Sales pricing and shippable scope — slicing techniques, estimation styles, and surfacing drift early.
type: sub-section
phase: delivery
order: 5
lastUpdated: 2026-05-07
status: v1
---

## What happens here

Estimation at delivery time is **not** the same as the [pre-sales pricing](/pre-sales/pricing-estimation/) exercise that produced the SOW number, and it is **not** the same as the [discovery cost commitment](/discovery/estimation-cost-commitment/) that refined that number against validated requirements. Pre-sales pricing was an offer — a defended price the client could agree to. Discovery's cost commitment was a refinement — a more accurate price after the team learned what the engagement actually involves. Delivery-time estimation is a *calibration loop*: the team estimates each story it commits to, compares delivered velocity against estimated velocity, and surfaces the gap to the PM and the client well before the engagement runs out of room.

Sprint slicing is the related practice of cutting large items into pieces that fit a sprint. A story that won't fit in one sprint isn't ready for the sprint — it must be sliced. Slicing is hard because it requires understanding the work well enough to break it sensibly without producing artificial sub-stories that don't deliver real value. Done well, slicing produces independently shippable vertical slices (a slice of UI + the API that backs it + the tests for both). Done badly, slicing produces "build the database" + "build the API" + "build the UI" horizontal layers that aren't useful until the last one lands.

Estimation and slicing run together because they're the same conversation: the team can't size a story it can't slice, and a story it can size is usually one it has already sliced (or could). Both happen in [backlog refinement](/delivery/project-management/backlog-management/), with the team sizing items that are reaching the top of the backlog. The PM owns the calibration data — observed velocity, estimated-vs-actual deltas, the running gap between SOW assumption and delivery reality.

## Best practices

**Slice vertically, not horizontally.** A vertical slice ships a thin end-to-end piece of value: a single user action working through the full stack with its own tests. A horizontal slice ships a layer of infrastructure (data model, API, UI) that isn't useful on its own. Vertical slices let the team demo working features at every sprint boundary; horizontal slices push all the demo value to the end of the engagement. The discipline is hard because vertical slicing requires the team to think about end-to-end value before specialising into layers, but engagements that get this right report dramatically smoother delivery.

**Use INVEST as the slicing checklist.** Independent (the slice can be built without depending on a future slice), Negotiable (the team can adjust the slice within the sprint without re-litigating the SOW), Valuable (the slice delivers user-visible or system-visible value, not just internal infrastructure), Estimable (the team can size it), Small (it fits in a sprint with room for unknowns), Testable (acceptance criteria can be verified at sprint end). A slice that fails any of the six is not ready and should be re-sliced.

**Pick one estimation style and run it for the whole engagement.** Story-point estimation (Fibonacci or modified-Fibonacci scale) is the most common and produces stable team-internal velocity numbers that calibrate over 2–3 sprints. T-shirt sizing (XS, S, M, L, XL) is faster but harder to compare against client-facing budgets. Hours-with-confidence-band ("4–8 hours, 80% confidence") is the most directly billable but the most volatile under scope changes. Whichever style you pick, run it consistently — switching mid-engagement breaks the calibration loop and forces the team to relearn its own velocity.

:::tip
Calibrate velocity against a reference story, not against the abstract Fibonacci scale. After sprint 2, pick one story the team agrees was "a 5" — clearly understood, no surprises, shipped in the expected time. Use that story as the anchor for future estimation: "is this bigger or smaller than the reference?" The Fibonacci scale becomes a tool rather than a debate.
:::

:::caution
Do not show the client raw story points. Story points are an internal calibration unit; clients understand hours and milestones. Translate story points into time-equivalent ranges in the status report ("the next 30 points represent roughly 3 sprints, 70% confidence"). Engagements that try to teach clients to read story points produce confusion and erode trust; engagements that translate to client-friendly units keep the calibration loop intact while presenting a coherent commercial story.
:::

**Run the calibration loop after sprints 2 and 4.** By end of sprint 2, the team has two data points (committed-vs-delivered) and a rough velocity estimate. By end of sprint 4, the team has a calibrated velocity (typically ±15% sprint-over-sprint). The calibration loop is the explicit conversation that compares delivered velocity against the SOW pricing assumption — if the SOW assumed 100 story points across 10 sprints (10/sprint) and delivered velocity is 7/sprint, the engagement is on track for ~70% of sold scope unless something changes. That conversation must happen at sprint 4 at the latest, while there is still time to course-correct (cut scope, add capacity, extend timeline through change-control). Engagements that delay the calibration conversation past sprint 6 typically run out of room.

**Surface drift early and explicitly.** Estimation drift is the single most-common cause of late-engagement surprises. The PM tracks committed-vs-delivered every sprint and reports the trend in the status update. When the trend goes negative for two consecutive sprints (e.g. sprint 5 delivered 7/8 committed points, sprint 6 delivered 6/8), the PM raises it as a risk in the [risk register](/delivery/project-management/risk-issue-management/) and surfaces it in the status report. Surfacing early gives the client time to choose: cut scope, add capacity, accept later delivery. Surfacing late forces the client into a corner and damages trust.

## Desired outcomes

Each sprint's estimation work produces:

- **Sprint-sized items at the top of the backlog**, all sliced vertically, all sized
- **A team-internal velocity number** that is comparable across sprints
- **Reference-class anchors** the team uses to calibrate new stories against shipped ones

Across the engagement, the calibration loop produces:

- **A velocity baseline by sprint 3 or 4** (±15% sprint-over-sprint stability)
- **An early signal** when delivered velocity diverges from the SOW pricing assumption — surfaced no later than sprint 4 of a 10-sprint engagement
- **A documented decision trail** when the gap between SOW assumption and delivery reality forced a course correction (scope cut, capacity added, timeline extended via change order)

## What the industry does

**Story-points cultures vs. hour-based agencies.** Story-points cultures (most modern agency teams, especially those running Scrum) believe estimation in time units couples too tightly to individual capacity and produces brittle plans. They estimate in points, calibrate velocity, and translate to client-facing time only at the report layer. Hour-based agencies (especially T&M-billing shops) estimate directly in hours because that's what they bill. Both work; the discipline is doing one consistently. Hybrid agencies (most large agencies) estimate in points internally and quote in hours externally, with a documented translation factor that gets recalibrated quarterly.

**Reference-class forecasting vs. team-judgement estimation.** Reference-class forecasting estimates a story by comparing it to similar past stories ("this is like the export feature we built in sprint 3 of the last engagement"). The model produces strong calibration on engagements that have a backlog of historical reference points (long-running agency-client relationships, agencies with internal estimation libraries). Team-judgement estimation estimates from the team's reading of the work in front of them, with no formal historical anchoring. The model is faster but more volatile. Reference-class forecasting is provably more accurate (Kahneman, *Thinking, Fast and Slow*; Flyvbjerg's project-overrun research), but most agencies don't have the historical-data discipline to use it. Mature agencies build a small reference library — 5 to 15 anchor stories with known sizes — and use it to calibrate fresh estimates.

**Buffer-up-front vs. ranged-estimate vs. confidence-banded.** Buffer-up-front agencies estimate optimistically and add a fixed buffer (e.g. 25%) to land at a defended estimate. The model is simple but produces a single number that hides the underlying uncertainty. Ranged-estimate agencies report a range ("between 8 and 12 sprints") and let the client see the uncertainty. Confidence-banded agencies report a number with an explicit confidence band ("10 sprints, 80% confidence; 12 sprints, 95% confidence"). Confidence bands produce the cleanest commercial conversation because the client sees both the central estimate and the risk; they're also the hardest to produce because they require a calibrated team. Most engagements between £100k and £500k are best served by ranged estimates; below that, fixed numbers with buffer; above, confidence bands.
