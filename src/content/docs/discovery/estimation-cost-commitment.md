---
title: Estimation & Cost Commitment
description: Producing the post-discovery estimate, reconciling it against pre-sales pricing, and committing with both parties' eyes open.
type: sub-section
phase: discovery
order: 5
lastUpdated: 2026-05-03
status: v1
---

## What happens here

Discovery-phase estimation is the activity that converts validated requirements, prototype findings, and stakeholder context into a defensible cost number. It sits between two other estimation activities that readers routinely conflate:

- **[Pre-sales pricing](/pre-sales/pricing-estimation/)** is the commercial commitment made before discovery, anchored by the scoping-call hypothesis. The number is a starting position, priced with a contingency buffer for unknown scope.
- **Discovery estimation** (this page) is the post-discovery refinement. The hypothesis has been tested through interviews, workshops, and any prototyping; the estimate is now produced from validated requirements, not assumptions.
- **Developer-task estimation** is the granular sizing of individual work items during delivery — story points, hours per ticket, sprint forecasting. It happens after the SOW is locked and is bounded by the discovery estimate, not contributing to it.

Discovery estimation produces one of four outcomes against the pre-sales price:

- **Confirmed.** The pre-sales number is right within tolerance. Discovery validated the scope; the price stands. Most-common outcome on engagements with disciplined pre-sales scoping.
- **Raised.** Discovery surfaced complexity that pre-sales missed — additional integrations, regulatory constraints, NFRs that drive significant work. The agency needs more than the pre-sales number to deliver.
- **Lowered.** Less common but real. Discovery revealed that the original scope is smaller than pre-sales feared, or that a planned approach can be replaced with a cheaper one.
- **Scope-adjusted.** The estimate would raise the price, but the client cannot or will not increase budget. Scope is reduced (features deferred, NFRs relaxed, deliverables consolidated) to fit the original number. The estimate produces a re-shaped engagement at the same price.

The output of this activity is not the final SOW pricing line. The output is a refined estimate with a stated confidence band and a reconciliation document that explains the variance from pre-sales. The client and agency then decide together whether to accept, renegotiate, or pause — and that decision feeds the formal [discovery sign-off](/discovery/discovery-deliverables-signoff/) and any change-control entries against the SOW.

## Best practices

**Estimate bottom-up by task, then sanity-check top-down.** A defensible estimate starts by decomposing the validated scope into discrete tasks (each between half a day and five days of work), assigning team-member time to each, summing the totals, and then comparing the result against top-down anchors — analogous past engagements, reference-class forecasts, and the pre-sales number. Bottom-up alone produces estimates that miss systemic costs (project management, ceremony overhead, integration testing); top-down alone produces estimates that lose granularity. The two together produce a number that is both granular and sanity-checked.

**Use reference-class forecasting against your own delivery history.** Reference-class forecasting compares the proposed engagement against the actual outcomes of comparable past engagements — not the budgets, the actuals. "We have delivered four engagements that look like this one in the past 18 months. Their actual delivery hours were 480, 620, 540, and 710. The proposed scope is at the higher end of complexity, so the reference-class forecast is 600–720 hours, with a 70% confidence we land in that range." Agencies that maintain delivery-actuals databases produce dramatically more accurate estimates than agencies that estimate from team intuition alone. The discipline is unglamorous (closing actuals against original estimates after every engagement) and high-leverage.

**Quote a range with explicit confidence, not a single number.** The discovery estimate goes to the client as a range — typically with the most-likely number at the centre and a stated confidence band. "Our estimate is £180k–£220k, with 80% confidence the engagement lands within this range. The 20% downside reflects the risk that the legacy CRM integration requires more change-management time than discovery's POC validated." Single-point estimates collapse uncertainty into false precision and pin the agency to a number that disregards what discovery actually learned. Mature clients expect ranges; clients who insist on single-point numbers are signalling that they intend to hold the agency to whatever number is quoted regardless of what changes during delivery.

**Size against prototype findings, not pre-prototype assumptions.** When [prototyping or POC work](/discovery/prototyping-proof-of-concept/) was conducted in discovery, the estimate must reflect what the spike actually proved or disproved. A POC that uncovered an undocumented dependency adds estimate; a POC that confirmed feasibility removes risk-buffer. The estimate should explicitly cite each prototype finding and how it changed the number. Estimates that ignore prototype findings render the entire prototyping investment pointless.

:::tip
Maintain a running "estimation reconciliation" document that maps every line item in the discovery estimate back to either a pre-sales assumption (confirmed or revised), a workshop decision, or a prototype finding. The document becomes the explanation when the client asks "why is this larger than what we discussed three weeks ago?" Engagements with strong reconciliation documents have shorter, less adversarial re-pricing conversations because the variance is fully traceable.
:::

:::caution
Do not produce an estimate that ignores prototype findings or workshop decisions. A discovery estimate that comes back identical to the pre-sales number despite the spike uncovering material complexity is signalling that the agency is too afraid to surface bad news. The conversation is harder in the short term, but a known re-price during sign-off is dramatically less damaging than an unsignalled scope or budget overrun three months into delivery.
:::

**Plan the renegotiation conversation before you have it.** When discovery raises the estimate, the client conversation is harder than the technical work that produced the number. Plan it: name the variance, explain the reasoning (prototype X showed Y, workshop Z surfaced constraint W), present the options (accept, scope-adjust, pause), and have the relevant artifacts ready before the meeting. The conversation goes badly when the client is told the number changed without being shown why; it goes well when the variance is presented as the result of work the client agreed to fund.

**Anti-patterns to avoid:**

- **The defensive estimate.** Padding the estimate to absorb every conceivable risk because surfacing real risks felt awkward in the workshop. Defensive estimates are usually obvious to clients and erode the credibility of the discovery output.
- **The optimistic estimate.** Estimating the engagement as if every prototype finding was the optimistic case. Optimistic estimates feel like they save the relationship but produce delivery overruns that destroy it instead.
- **The "just hold the price" estimate.** Refusing to surface variance because management "wants to hold the original number." Discovery exists to surface this signal; suppressing it makes discovery a theatrical exercise that funded the agency without doing its actual job.

## Desired outcomes

By the end of discovery estimation, the engagement has:

- A refined estimate with an explicit confidence band, expressed as a range and tied to validated scope, prototype findings, and workshop decisions
- A reconciliation document mapping every variance from pre-sales to a specific discovery input — interview, workshop decision, prototype finding, or revealed constraint
- A commitment path agreed with the client: accept the refined estimate, renegotiate scope to fit budget, scope-adjust at the original number, or pause the engagement with discovery deliverables retained
- A documented set of estimation assumptions carried forward into delivery as named risks (e.g., "estimate assumes 5-business-day client review on each milestone; longer review cycles trigger schedule re-baselining")
- The input that flows into the [discovery sign-off package](/discovery/discovery-deliverables-signoff/) and, depending on the commitment path, either ratifies the SOW pricing or triggers a change-control entry

## What the industry does

**Re-price freely vs. hold the pre-sales number.** Re-pricing-freely agencies treat the pre-sales number as a placeholder that discovery will revise. The SOW lists the pre-sales number with a stated re-price clause: "Final delivery pricing is set after discovery and reconciles against this number." Mature clients accept this; immature clients balk. Hold-the-number agencies commit to the pre-sales price absolute and absorb variance into margin (positive or negative). Re-pricing freely produces less under-quoting risk but slows the sale and requires a sophisticated buyer; holding the number produces faster sales cycles but loses money on engagements where pre-sales was wrong. Neither model is wrong; the discipline is choosing one and structuring contracts and pre-sales effort accordingly. Mid-market software agencies trend toward re-pricing freely because variance after discovery is too common to absorb; product-shop agencies and very-mature scoped-engagement agencies trend toward holding the number because their pre-sales effort is rigorous enough that variance is rare.

**Bottom-up vs. analogy-only estimation.** Bottom-up agencies decompose every engagement into a task list with named owners and time-boxed estimates, then sum. The number is granular but expensive to produce — discovery hours go into the estimation work itself. Analogy-only agencies estimate by comparison to past engagements: "this looks like the platform integration we did last year, scaled up by ~30%." Faster, cheaper, less granular, prone to drift when the comparator engagement was itself mis-estimated. The mature pattern is bottom-up *with* analogy as a sanity check, not analogy alone — but small agencies frequently lack the historical data to do bottom-up well and lean on analogy out of necessity.

**Heavyweight estimate documents vs. lightweight ranges.** Some agencies produce 30-page estimate documents — task breakdowns, reference-class data, sensitivity analyses, scenario modelling. Common in regulated-industry engagements (defence, healthcare, infrastructure) where the estimate is itself a procurement artifact. Others produce one-page estimates: range with confidence, top three drivers of variance, recommended commitment path. Heavyweight wins on procurement defensibility and stakeholder buy-in; lightweight wins on sales-cycle speed and the energy budget of the discovery team. The format choice is dictated by the buyer's procurement process, not the agency's preference. Quoting a one-page estimate to a procurement-driven enterprise client signals you do not understand their process; quoting a 30-page estimate to a startup founder signals you do not understand theirs.
