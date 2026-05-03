---
title: Prototyping & Proof of Concept
description: Time-boxed, disposable validation of risky technical, UX, or integration assumptions before they become fixed-price commitments.
type: sub-section
phase: discovery
order: 4
lastUpdated: 2026-05-03
status: v1
---

## What happens here

Prototypes and proofs of concept are time-boxed, disposable experiments that de-risk specific assumptions before those assumptions become commitments. They are not the start of production work. Their purpose is to convert "we think this will work" into "we know this will work, with these specific trade-offs" — early enough that the answer can revise the [estimate](/discovery/estimation-cost-commitment/) before the SOW locks pricing.

Prototype and POC are not synonyms. The distinction is load-bearing for what gets built and how it is run:

- **A prototype answers a UX or product question.** Will users understand this navigation pattern? Does this onboarding flow feel right? Is this dashboard layout scannable in two seconds? Prototypes are usually built in design tools (Figma, Sketch, ProtoPie) or low-code stacks; sometimes in lightweight code where interactive behaviour matters. The artifact is a clickable interaction that real users (or proxy users) can hold and react to.
- **A POC answers a technical or integration question.** Can the agency actually authenticate against this legacy SAML provider? Does this third-party SDK handle our data volume? Can the chosen ML model produce acceptable accuracy on this client's data? POCs are usually thin code spikes — the smallest possible integration that proves or disproves the question. The artifact is a demonstration script, a screenshot, or a benchmark result. It is not user-facing software.

Both share three properties: they are time-boxed (typically 3–10 days each), narrowly scoped (one question at a time), and explicitly disposable. The output is a written findings document, not the code itself. The code is reference material at best and a temptation at worst.

A discovery engagement runs zero, one, or two prototypes/POCs depending on how much risk the [stakeholder interviews](/discovery/stakeholder-interviews/) and [requirements workshop](/discovery/requirements-workshops/) surfaced. Engagements with well-understood scope (a marketing site, a platform integration against documented APIs) skip prototyping entirely. Engagements with named technical risks (legacy integration, ML-heavy features, performance-sensitive flows) almost always include a POC. Engagements with novel UX (new product category, untested workflow) almost always include a prototype.

## Best practices

**Write the question before building anything.** A prototype or POC starts with a written one-sentence question and an explicit success criterion. "Can we authenticate users against the client's existing Active Directory tenant in under 200ms p95 over a 10-minute load test?" is a question. "Build a login screen" is a task. Tasks expand; questions terminate. Without a written question and explicit success criterion, the spike has no end state and consumes discovery budget until someone calls it.

**Time-box strictly and abandon at the deadline.** Every prototype and POC has a stated time-box (3 days, 5 days, 10 days) agreed at the start. When the time-box expires, the work stops — regardless of whether the question has been answered. An unanswered question after a time-box is itself a finding ("we cannot answer this in 5 days; it needs a longer engagement or a different approach"). Open-ended prototyping is how a four-week discovery becomes a six-week discovery and the delivery phase is funded out of margin.

**Scope to the riskiest unknown only.** A POC for a payments integration tests payment flow, not user account creation, not the dashboard, not the email notifications. Each adjacent feature added to the spike doubles the time-box and dilutes the answer. If a single POC needs to answer multiple questions, run multiple sequential POCs with separate time-boxes — not one fat POC that tries to cover everything.

**Adopt explicit throw-away posture.** POC code is built to be thrown away. Skip tests, skip configuration, skip error handling, skip code review, skip the full project structure. The POC's only job is to answer the question. Any time spent on production-grade discipline is time stolen from the next discovery question. The discipline saves time even when the technical approach proves correct, because building the production version cleanly from a known-good architecture is faster than refactoring a POC into production shape.

**Document findings as a written artifact, not a verbal handoff.** Every prototype or POC produces a one- to two-page findings document: the question, the approach taken, the result (does-it-work / does-it-not / works-with-these-trade-offs), the constraints discovered, the implications for the [estimate](/discovery/estimation-cost-commitment/), and any risks carried forward. Verbal handoffs of POC findings are unreliable — three weeks later, the consultant who built the POC has rotated off and the team that inherits delivery has no record of what was actually proven.

:::tip
Run user-facing prototypes with at least three real users (or close proxies) before relying on the findings. A prototype reviewed only by the agency team and the client sponsor produces sponsor-shaped feedback. Three external testers — even rough recruitment — surfaces interaction failures and language confusions that internal review never catches. The prototyping budget should always include the recruiting cost; if it does not, the prototype is a UX rehearsal, not validation.
:::

:::caution
Do not productionize POC code. The most common discovery-to-build trap is the POC that "already works" and gets dragged into production without the architecture, testing, or operational concerns it deliberately skipped. By the time the team realises the foundation is brittle, the cost of unwinding is multiples of the cost of a clean re-build. The throw-away posture is not laziness; it is the discipline that lets POCs run cheaply. Re-building cleanly from POC findings is non-negotiable.
:::

**Anti-patterns to avoid:**

- **The POC that becomes the MVP.** A two-week POC that the client likes so much they ask the agency to "just keep building." Without a clean re-architecture, the production system inherits the POC's shortcuts forever. The right response is to celebrate the POC, declare it done, scope an MVP cleanly, and start fresh.
- **The infinite spike.** A POC with no time-box that runs until someone happens to notice it has consumed three weeks. Every engagement has at least one of these unless the discipline is enforced.
- **The POC by committee.** A spike where two or three engineers each contribute a piece. Output gets fragmented; nobody owns the findings document. Single owner per spike, time-boxed, named outcome.

## Desired outcomes

By the end of prototyping or POC work, the discovery team has:

- A documented finding for each question — does-it-work, does-it-not, or works-with-these-specific-trade-offs — with the data or screenshots that support the conclusion
- An updated risk register reflecting risks the spike either eliminated, confirmed, or newly surfaced (e.g., the integration works but only with a 12-week change to the client's existing system)
- An explicit input to the [estimation activity](/discovery/estimation-cost-commitment/) — usually a delta on the pre-sales estimate (no change, increase, decrease, scope adjustment) with the reasoning attached
- A written decision on whether the spike's code is referenced going forward (architecture sketch, library choices, sample integration code) or fully discarded
- A clear answer to the practitioner question that drove the spike, in language the client sponsor can read and act on

## What the industry does

**Time-boxed spike vs. full-fidelity prototype approaches.** Time-boxed-spike agencies treat prototyping and POC as 3–10 day disposable experiments. Findings are written; code is discarded. The output is a decision artifact, not a deliverable. Full-fidelity prototype agencies invest 2–6 weeks in interactive prototypes that approximate the final product and serve as both validation and pre-sold artifact for the delivery phase. Full-fidelity prototypes produce sharper user feedback and a stronger sales artifact, but they are dramatically more expensive and almost always get pressed into production despite the team's best intentions. Time-boxed spikes are dominant in mature engineering agencies and modern product shops; full-fidelity prototypes survive in design-led agencies and innovation-consultancy work where the prototype itself is the product the client buys.

**Disposable POCs vs. stepping-stone POCs.** Disposable-POC agencies write code that is explicitly thrown away — the question gets answered, the code gets deleted. Stepping-stone-POC agencies treat the POC as the architectural sketch that delivery builds on; the same engineers, the same repository, evolutionary growth from spike to production. Disposable POCs produce cleaner production architectures but require the discipline to do the same integration twice. Stepping-stone POCs are faster to delivery but inherit POC shortcuts that quietly compound. Mature agencies trend disposable; younger or capacity-constrained agencies trend stepping-stone. The distinction is rarely written down — it is usually a cultural artifact passed between engineers.

**Internal-only validation vs. user-tested validation.** Internal-only agencies validate prototypes and POCs with the agency team and the client sponsor — fast feedback, low recruitment overhead, but biased toward stakeholder preferences. User-tested agencies recruit at least three external testers (real end-users, close proxies, or even unmoderated remote testers via tools like UserTesting and Maze) before declaring a prototype validated. User-tested validation costs more discovery budget but catches the interaction failures and language confusions that internal review never sees. User-tested is dominant in UX-led agencies and product-development engagements; internal-only survives in B2B engagements where the end-users are themselves rare or politically inaccessible.
