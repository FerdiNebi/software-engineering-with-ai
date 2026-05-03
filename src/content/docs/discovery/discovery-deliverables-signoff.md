---
title: Discovery Deliverables & Sign-Off
description: The closure ritual that converts discovery work into a signed handoff package and an invoiceable milestone.
type: sub-section
phase: discovery
order: 6
lastUpdated: 2026-05-03
status: v1
---

## What happens here

Discovery sign-off is the formal closure ritual that converts six weeks of interviews, workshops, prototypes, and estimation into a signed handoff to [Requirements & Design](/requirements-design/). It is the moment the agency invoices the discovery milestone and the client commits to the post-discovery commercial path. Without sign-off, discovery's output is a private artifact; with sign-off, it is a binding reference both parties can defend against in the months that follow.

The standard discovery deliverable set has six artifacts, produced across the previous activities and consolidated into a single handoff package:

- **Requirements document.** A structured statement of validated functional and non-functional requirements at the level of detail needed to feed the formal spec authored in [Requirements & Design](/requirements-design/functional-nonfunctional-requirements/). Not the final FR/NFR doc — that comes next phase.
- **Scope statement.** What is in scope, what is explicitly excluded, what is parked for future engagements. The exclusions list is as load-bearing as the inclusions list because it is the basis for change control during delivery.
- **Estimate revision.** The post-discovery estimate with confidence band, reconciled against the [pre-sales price](/pre-sales/pricing-estimation/), and a documented commitment path (accept, scope-adjust, renegotiate, or pause).
- **Risk register.** Known risks, named owners, mitigation strategies, and items the client has explicitly accepted as residual risk. The accepted-risks list is what the agency cites if any of those items materialise during delivery.
- **Decisions log.** Every workshop and out-of-workshop decision with date, decision-maker, and rationale. Becomes the reference document when delivery hits a contested choice and someone asks "didn't we decide this already?"
- **Handoff package.** The bundle that travels into Requirements & Design — interview synthesis, prototype findings, named stakeholders with roles, open-issues backlog, and pointers to client-side systems and credentials the next phase will need.

Sign-off itself is a discrete, named event — typically a one-hour meeting where the sponsor (and any other named signatories per the [SOW](/pre-sales/sow-contract-drafting/)) walks through the deliverables with the agency's delivery lead, asks questions, and signs the acceptance document. The signature triggers the invoice and unlocks the next phase. Slack acknowledgements do not count; verbal-only "looks good" comments do not count; an email confirmation against a named, attached deliverable counts; a signed document is the gold standard.

## Best practices

**Pre-circulate every deliverable before the sign-off meeting.** The sponsor should not see any deliverable for the first time during the sign-off meeting. Send the full package 5–7 business days ahead with a one-page summary: what was learned, what changed, what the recommended commitment path is. The meeting is then a discussion, not a presentation. Sign-offs that depend on real-time review of deliverables almost always get deferred to "let me read through this and get back to you" — which can take weeks and pushes delivery start.

**Name the signatories per artifact.** The SOW typically names the client's authorised signatory for major artifacts (often the sponsor or their delegate). Confirm in writing who is signing what before the sign-off meeting. Engagements stall when the meeting opens and the room realises the person attending lacks signature authority. Either the named signatory attends, or sign-off is rescheduled. Do not accept "I'll get this signed later" as a closing position.

**State explicitly what sign-off waives — and what it does not.** Sign-off on the requirements document means the client accepts that the documented requirements are what will be built. It does not waive the agency's obligation to deliver against quality standards, NFRs, or SOW terms. It does not pre-approve change requests that arise during delivery. The acceptance document should state this in plain language: "Client accepts the discovery deliverables as the basis for delivery work. Scope changes during delivery follow the change-control process in the SOW." Without this language, sign-off becomes a backdoor through which the client can claim either too much (waived all rights) or too little (signed nothing).

**Document accepted residual risks before sign-off.** The risk register inevitably contains items that cannot be fully mitigated within the engagement budget — third-party API stability, client-staff turnover, regulatory changes mid-delivery. The sign-off ritual surfaces these and gets the client's explicit acceptance: "These risks are documented; the agency has named mitigation strategies; the client accepts that these risks remain and has approved the engagement to proceed regardless." Engagements without explicit residual-risk acceptance rediscover the risks during delivery as surprises and adversarial conversations.

:::tip
Use a one-page sign-off cover sheet that lists every deliverable, its filename or location, the named signatory, and a single signature line confirming acceptance of all listed deliverables. The cover sheet plus the deliverables themselves becomes the artifact that gets signed (paper, DocuSign, or in-tool). Sponsors who balk at signing a long document will sign a one-page cover sheet that points at the long documents.
:::

:::caution
Do not skip sign-off because the client said "looks good" on a call. Verbal acceptances dissolve under pressure. The team most likely to skip sign-off is also the team most likely to need the paper trail three months into delivery when a stakeholder rotates or a memory diverges. The sign-off ritual feels like overhead in the moment and is invaluable in retrospect; it is one of the most over-skipped, under-valued discovery practices in the industry.
:::

**Handle sign-off delays with named consequences.** When the client misses the sign-off date, the agency's response should be pre-defined and stated in the SOW's change-control or scheduling clauses: paused work, schedule re-baseline, or a defined deemed-acceptance trigger after N business days of no response. Without pre-defined consequences, sign-off slips drag the engagement into the next quarter without anyone naming the delay. The conversation is easier when the consequence is contractual rather than ad-hoc.

**Keep the deliverables small enough to actually read.** A 200-page requirements document gets approved without reading. A 25-page document gets read and challenged. The sign-off ritual is only meaningful when the artifacts are small enough that the signatory can credibly review them. If discovery genuinely produces hundreds of pages of detail, the sign-off should be against an executive summary plus appendices — and the summary is the artifact that actually gets reviewed line-by-line.

## Desired outcomes

By the end of the discovery sign-off ritual, the engagement has:

- A signed acceptance document confirming that the named signatory has reviewed and accepted the discovery deliverables — requirements doc, scope statement, estimate revision, risk register, decisions log, handoff package
- A closed pending-questions list — every question raised during discovery has been answered, deferred to delivery with a named owner, or explicitly accepted as residual risk
- A documented set of open risks the client has explicitly accepted, reducing the surface area for "we never knew about that" disputes during delivery
- An invoice event triggered (the discovery milestone payment) on the signed acceptance, in the schedule and amount specified in the SOW
- A Day-1 handoff package ready for [Requirements & Design](/requirements-design/) — the next phase begins with a complete, ratified context rather than re-discovering what discovery already established
- A clear commitment path locked: proceed at confirmed pricing, proceed at re-priced pricing per change control, scope-adjust to fit budget, or pause the engagement with discovery deliverables retained by the client

## What the industry does

**Formal written sign-off vs. email-confirmation practices.** Formal-sign-off agencies treat sign-off as a contractual milestone with a signed document (paper, DocuSign, contract-management tool) referencing the named deliverables. The artifact is unambiguous and survives staff rotation on either side. Email-confirmation agencies accept a written email reply against the deliverable bundle as sufficient acceptance. Email is faster and lower-friction but inherits all the ambiguity of email — Reply-Alls get lost, threads get archived, the person who confirmed leaves the company. Formal sign-off is dominant in enterprise and regulated-industry engagements where the deliverable itself is a procurement artifact; email confirmation survives in startup-velocity engagements and longstanding agency-client relationships where formality is not the norm. Mature agencies trend formal even on informal-feeling engagements because the cost of a signed document is small and the upside in a dispute is high.

**Single sign-off vs. progressive sign-off.** Single-sign-off engagements close all of discovery in one event at the end. Progressive-sign-off engagements get incremental sign-offs along the way: workshop summaries signed at the end of each session, prototype findings signed when each spike closes, estimate signed before the closing meeting. Progressive sign-off is more administrative but produces a much stronger paper trail and dramatically reduces the surface area of the closing meeting (it becomes a ratification of already-signed pieces rather than a new review of everything). Single-sign-off survives in shorter engagements where the administrative overhead would be disproportionate; progressive sign-off dominates in enterprise engagements over twelve weeks.

**Discovery-as-gateway vs. soft-close cultures.** Gateway agencies treat discovery sign-off as a hard gate: no delivery work begins, no contracts get drafted, no team gets allocated until the sign-off is in hand. Soft-close agencies start delivery work as discovery winds down — staff allocated, repos created, sprint zero kicked off — on the assumption that sign-off will arrive. Gateway is safer; soft-close is faster but commits the agency to delivery hours before the commercial path is locked. Soft-close survives mainly in long-term agency-client relationships where the sign-off is a formality; gateway dominates in new-client engagements where the sign-off carries real risk of pause or renegotiation.
