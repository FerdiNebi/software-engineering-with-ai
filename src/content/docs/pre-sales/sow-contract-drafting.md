---
title: SOW & Contract Drafting
description: Drafting a Statement of Work that protects both parties and survives delivery contact with reality.
type: sub-section
phase: pre-sales
order: 4
lastUpdated: 2026-05-03
status: v1
---

## What happens here

The Statement of Work (SOW) is the contract artifact that converts an accepted proposal into a binding commercial agreement. Once signed, it governs every dispute about scope, payment, intellectual property, and termination for the duration of the engagement. The SOW is the document a delivery manager pulls out at month three when the client says "but I thought that was included."

Two contract artifacts work together in agency engagements:

- **The Master Services Agreement (MSA)** sets the legal terms that apply across every engagement with this client: liability caps, indemnification, IP ownership defaults, governing law, dispute resolution, confidentiality. The MSA is signed once and reused.
- **The SOW** sets the project-specific terms: what is being built, when, by whom, for how much, with what acceptance criteria, and under what change-control process. A new SOW is signed for each engagement under the MSA.

For a first engagement with a new client, you sign both documents together. For a repeat client, you sign only a new SOW under the existing MSA. This separation reduces legal review cycles on subsequent engagements and is the standard pattern in mature agency relationships.

A typical SOW contains: scope of work, deliverables, acceptance criteria for each deliverable, timeline and milestones, payment terms and schedule, change-control process, intellectual property assignment, warranties, termination provisions, and explicit exclusions. The SOW is drafted by the agency's delivery or operations lead in consultation with the technical lead, then reviewed by both parties' legal counsel before signature.

## Best practices

**Define acceptance criteria for every deliverable.** "Acceptable to client" is not an acceptance criterion — it is a perpetual escape hatch. Each deliverable should have specific, testable criteria: "passes the regression suite documented in Appendix A," "deployed to staging environment and accessible at the URL provided," "approved in writing by the named Product Owner within 5 business days of submission." Without explicit acceptance, the project never officially completes.

**State explicit exclusions.** A scope statement that lists only what is included leaves what is excluded ambiguous. Include an exclusions section: "This SOW does not cover migration of legacy data," "This SOW does not include training for end users," "This SOW does not include third-party license fees." Exclusions prevent the conversation that starts with "I just assumed you would also..."

**Document every assumption.** Assumptions are the soft underbelly of any fixed-price SOW. List them explicitly: "Assumes the client will provide test accounts for the third-party API by week 2," "Assumes the existing authentication service is documented and stable," "Assumes design assets are delivered in a consistent format by the design partner." When an assumption proves false, the documented assumption is the basis for a change request.

**Make change control a process, not a negotiation.** The SOW should specify exactly how scope changes are handled: who can submit a change request, who approves it, how it is priced (fixed-price addendum or T&M against a defined rate), and how the timeline adjusts. A defined process means the conversation about a new feature is "let's open a change request" instead of "do we need to update the contract?"

:::caution
Vague acceptance criteria are the most common SOW pitfall. "Looks good," "feels right," "matches the brand" are not acceptance criteria — they are open invitations for indefinite revision. Write criteria that a third party could evaluate without consulting either signatory. If you cannot, the criterion is too vague.
:::

:::tip
Include a clause that defines "deemed acceptance": the deliverable is accepted if the client does not provide written rejection with specific reasons within N business days of submission. Without deemed acceptance, the project drifts indefinitely on the client's review queue.
:::

**Specify the payment schedule by milestone, not by calendar.** Tying payment to calendar dates ("invoiced monthly") shifts cash-flow risk to the agency when delivery slips. Tying payment to milestones ("invoiced upon acceptance of milestone X") aligns payment with delivered value and creates a forcing function for the client to review and accept on time.

**Cap your liability.** Standard agency MSAs cap liability at the fees paid under the SOW (or some multiple thereof — usually 1× to 2×). Without a cap, a single bug in production could expose the agency to consequential damages that dwarf the engagement value. This is non-negotiable in mature agencies; if a client refuses, the engagement is too risky to take.

**Resist client paper, or read it carefully.** Enterprise clients often insist on using their MSA template. These templates are written by the client's legal team and contain provisions favorable to them — uncapped liability, automatic IP assignment of pre-existing code, broad indemnification. Either negotiate a redlined version or quote the engagement at a higher rate to absorb the increased risk.

## Desired outcomes

By the end of SOW drafting and signature, both parties have:

- A signed SOW (and signed MSA, if this is a first engagement) covering scope, deliverables, acceptance, payment, IP, change control, and termination
- Documented scope boundaries with explicit exclusions
- An agreed change-control process that both parties understand and can invoke
- A documented payment schedule tied to milestones, with payment terms (net 30, net 14, etc.) specified
- A handoff package for [Discovery](/discovery/): the signed SOW, the proposal it replaced, scoping-call notes, and a roster of named client stakeholders with their roles and authorities

## What the industry does

**Fixed-scope SOWs.** The traditional agency contract: a defined scope, defined deliverables, fixed price, fixed timeline. Risk sits with the agency. Best for engagements where scope is genuinely well-understood and the deliverables are testable. Common in marketing-site builds, mobile app MVPs with clear feature lists, and platform integrations against documented APIs. The pricing model in this category typically discussed in detail in [Pricing & Estimation](/pre-sales/pricing-estimation/).

**Time-and-materials (T&M) SOWs.** The opposite end: a defined hourly rate, optional not-to-exceed cap, and scope managed via prioritised backlog rather than upfront commitment. Risk sits with the client. Best for engagements where scope evolves with discovery, especially in product development or research-heavy work. Mature T&M SOWs include weekly or bi-weekly checkpoints where the client reviews burn rate against remaining backlog and re-prioritises.

**Hybrid (phased) SOWs.** A fixed-price discovery or proof-of-concept phase, followed by a fixed-price or T&M delivery phase contingent on discovery output. The discovery phase produces the spec that prices delivery. This model handles uncertainty honestly: the agency is not asked to fix-price unknown scope, and the client is not asked to write a blank cheque. Hybrid SOWs are increasingly common in enterprise transformations, where the cost of mis-pricing either upward or downward is substantial. Post-discovery re-estimation is documented in [Discovery → Estimation & Cost Commitment](/discovery/estimation-cost-commitment/).

**Retainer SOWs.** Recurring monthly commitments rather than project-based engagements. A retainer SOW commits the agency to a defined number of hours or capacity per month at an agreed rate, with rules for unused-hour rollover and overflow billing. Used heavily in maintenance, ongoing product partnerships, and fractional-CTO arrangements. See [Retainer Structure & SLAs](/maintenance-retainer/retainer-structure-slas/) for the post-launch retainer model.
