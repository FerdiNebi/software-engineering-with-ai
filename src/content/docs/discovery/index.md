---
title: Discovery
description: How signed scope becomes validated requirements — the bridge from SOW to a development-ready specification.
type: phase-overview
phase: discovery
order: 1
lastUpdated: 2026-05-03
status: v1
---

## What happens here

Discovery is the phase that runs from a signed [SOW](/pre-sales/sow-contract-drafting/) to a validated, defended specification ready for development. The signed contract gives the agency a mandate to investigate; discovery is what produces the artifact that justifies the next phase's commitments. Skipping or compressing discovery is the leading cause of fixed-price agency engagements blowing through margin.

Five sequential activities make up the phase:

1. **[Stakeholder Interviews](/discovery/stakeholder-interviews/)** — 1:1 conversations with sponsors, end-users, integrators, and detractors that surface context, constraints, and political realities before the requirements workshop.
2. **[Requirements Workshops](/discovery/requirements-workshops/)** — facilitated sessions where interview themes are converted into concrete, prioritised requirements with explicit scope boundaries.
3. **[Prototyping & Proof of Concept](/discovery/prototyping-proof-of-concept/)** — time-boxed validation of risky technical, UX, or integration assumptions before they become fixed-price commitments.
4. **[Estimation & Cost Commitment](/discovery/estimation-cost-commitment/)** — the post-discovery re-estimate, reconciled against pre-sales pricing, with a clear commitment path.
5. **[Discovery Deliverables & Sign-Off](/discovery/discovery-deliverables-signoff/)** — the formal closure ritual that produces the handoff package to Requirements & Design.

The phase typically runs two to six weeks for a mid-sized engagement, though regulated-industry or platform-replacement engagements can stretch to twelve weeks or more. Participants include a delivery lead or principal consultant, a technical lead, a UX lead where design is in scope, and named client stakeholders identified during pre-sales. The outputs land in [Requirements & Design](/requirements-design/), where formal FR/NFR documents, design artifacts, and architecture decisions are produced from discovery's raw material.

A clean discovery exit is a paid event. The agency invoices on the discovery milestone (typically 15%–30% of total engagement value) regardless of whether the client decides to proceed with delivery. That commercial separation matters: it makes the discovery output a deliverable in its own right, not a pre-sales loss leader.

## Best practices

**Sequence interviews before workshops.** A workshop populated with cold stakeholders defaults to the loudest voice in the room. Conduct individual interviews first — the workshop then becomes the place where pre-surfaced themes are debated and decided, not where requirements are discovered for the first time. Interview-first discovery produces sharper workshops in less calendar time.

**Time-box every activity, including prototyping.** Discovery has a fixed budget. Stakeholder interviews are 45–60 minutes each. Workshops are half-day or full-day blocks with a published agenda. Prototypes have explicit time-box ceilings (typically 3–10 days) and are abandoned if they exceed it. Open-ended discovery is how a four-week engagement becomes a ten-week engagement and the delivery phase is funded out of margin.

**Document decisions in-session, not after.** Every workshop produces a decisions log captured live by a designated note-taker, displayed on the screen, and reviewed before the room breaks. Email summaries written the next morning never match what participants thought they agreed to. In-session capture eliminates the "but we said..." conversations that derail delivery.

**Treat the re-estimate as a feature, not a problem.** Discovery exists in part to produce a defensible estimate. If discovery confirms the pre-sales price, the agency closes with the original number. If discovery reveals that the engagement is materially larger or smaller, the agency triggers the change-control process and re-prices. Mature clients expect this; immature clients need the loop explained at the discovery kickoff. The mechanics live in [Estimation & Cost Commitment](/discovery/estimation-cost-commitment/).

:::tip
Distribute the workshop pre-read 48 hours before the session. A pre-read is one or two pages: the workshop's purpose, the decisions to be made, the materials to review beforehand. Workshops that begin with a 30-minute "context refresh" are signalling that the pre-read was not done — both your fault for not sending it and the participants' for not reading it. Sending the pre-read on time, and naming who has not opened it, raises the standard of the room.
:::

:::caution
Do not start workshops without stakeholder interviews. A workshop with cold participants becomes a discovery session disguised as a decision session — the agency walks out with notes instead of decisions, and the next workshop is needed to re-litigate the same ground. Interviews are not optional; they are the input that makes the workshop productive.
:::

**Maintain a parking-lot for out-of-scope items.** Workshops surface ideas that do not belong in the current engagement: enhancements, follow-on phases, integration opportunities. Capture them in a parking-lot document rather than letting them either die in the room or silently expand scope. Parking-lot items become candidates for change requests during delivery or for new engagements after launch.

**Keep the client visible in the deliverables.** Discovery deliverables — the requirements document, the scope statement, the prototype findings, the revised estimate — should be reviewable by the client throughout the phase, not handed over in a final-week document drop. Continuous visibility prevents the closing-day surprise where the client realises the document does not match what they thought was being discussed.

## Desired outcomes

By the end of Discovery, the engagement has the following in place:

- A documented set of validated functional and non-functional requirements ready for formal specification in Requirements & Design
- A signed discovery sign-off document, listing accepted requirements, agreed scope exclusions, documented assumptions, and an open-risks log
- A refined cost estimate that either confirms, raises, lowers, or scope-adjusts the pre-sales price — with a defensible methodology behind the number
- A handoff package for [Requirements & Design](/requirements-design/): the requirements document, scope statement, prototype findings, decisions log, named stakeholders with roles, and the open-issues backlog
- A commitment path agreed with the client: proceed at confirmed price, proceed at re-priced price, scope-adjust to fit budget, or pause with discovery deliverables retained

## What the industry does

**Paid discovery vs. included discovery.** Mature agencies bill discovery as a separate, paid milestone — either a fixed-price discovery contract that precedes the delivery SOW (the discovery-first model) or a discovery phase line-item inside a phased SOW. The deliverables are owned by the client regardless of whether they proceed with delivery. Less mature agencies bundle discovery into the delivery price as a free consultation, anchored by the original pre-sales number. Paid discovery is the more defensible model: it produces a specification that justifies the delivery price, aligns expectations, and gives both parties an exit ramp. Free discovery consistently anchors delivery to under-quoted pre-sales numbers because the agency cannot credibly re-price after work has already been done.

**Time-boxed vs. open-ended discovery.** Time-boxed agencies set a fixed calendar duration for discovery (two weeks, four weeks, six weeks) regardless of how much remains "to learn" at the deadline. The deadline forces prioritisation; open questions become entries on the open-risks log carried into delivery. Open-ended discovery continues until the agency feels confident enough to estimate — which in practice means it continues until budget exhaustion. Time-boxed discovery is the dominant model in mature agencies; open-ended discovery survives mainly in research-led engagements where ambiguity is the point.

**Heavyweight requirements documents vs. lightweight specs.** Some agencies produce 80-page formal requirements documents — full FR/NFR catalogues, ISO/IEEE-style structure, traceability matrices. Others produce 15-page lightweight specs — narrative scope statement, prioritised feature list, accepted assumptions, open risks. Heavyweight is appropriate for regulated industries (healthcare, financial services, government) where the document is itself a compliance artifact. Lightweight is appropriate for most commercial agency work, where a long document slows delivery without changing what gets built. The format choice is a function of the client's industry, not the agency's preference.

**Discovery as gateway vs. discovery as continuous activity.** Traditional agency lifecycles treat discovery as a discrete phase that closes before development begins. Continuous-discovery shops keep discovery activities running in parallel with delivery — ongoing user research, iterative requirements refinement, evolving prototypes. Continuous discovery suits product-development engagements where the client owns long-term roadmap and the agency is one of multiple workstreams. Phase-gate discovery suits fixed-scope project work where the contractual commitment requires a stable spec. Most agencies pick one and apply it consistently; agencies that mix the two confuse both their delivery teams and their clients.
