---
title: Requirements & Design
description: The bridge phase that converts discovery outputs into a development-ready specification — FRs, designs, architecture, and infrastructure plan.
type: phase-overview
phase: requirements-design
order: 1
lastUpdated: 2026-05-03
status: v1
---

## What happens here

Requirements & Design is the bridge between [Discovery](/discovery/discovery-deliverables-signoff/) and [Development](/development/). Discovery produced raw material — interview themes, validated requirements at workshop-detail, prototype findings, a refined estimate. Development needs implementable deliverables — atomic and testable FR/NFR documents, design files engineers can build from, an architecture decision document, an infrastructure plan. This phase is the converter, and getting it wrong front-loads risk into delivery that the agency cannot easily recover from.

The phase consists of four parallel-but-sequenced activities:

1. **[Functional & Non-Functional Requirements](/requirements-design/functional-nonfunctional-requirements/)** — converting discovery's prioritised feature list and constraints into atomic, testable, traceable FRs and NFRs that delivery and QA can build and verify against.
2. **[UX/UI Design](/requirements-design/ux-ui-design/)** — producing user flows, wireframes, mockups, interactive prototypes, and design tokens at fidelity sufficient for engineers to build from without ambiguity.
3. **[System Architecture](/requirements-design/system-architecture/)** — mapping requirements to a technical design through ADR-format decision documents, component diagrams, data-flow diagrams, and integration maps.
4. **[Infrastructure Design](/requirements-design/infrastructure-design/)** — planning the runtime, hosting, network, secrets, and disaster-recovery posture so that Day 1 of development is not blocked by missing environments.

These activities run in partial parallel. FR/NFR work happens first because it constrains every other deliverable. UX/UI and system architecture run alongside it once requirements stabilise. Infrastructure design depends on architecture's tech-stack decisions and runs last. A typical mid-sized engagement allocates 2–6 weeks to this phase. Engagements with already-mature design systems or architecture patterns compress; engagements with novel UX or unfamiliar tech stacks expand.

Participants are the agency's delivery lead, technical lead, UX lead (where design is in scope), and a solutions architect on architecture-heavy engagements. Client-side participants are typically the sponsor (for sign-off), the named technical stakeholder (for architecture review), and end-user representatives (for design review). The output is a development-ready handoff package that hands off to [Development](/development/) on a signed acceptance event.

## Best practices

**Treat this phase as design, not as documentation.** A common failure mode is producing 80 pages of requirements and architecture without making any non-trivial decisions. The artifacts have weight, but they document state — they do not commit to one approach over another. Each major deliverable should contain decisions: which approach was chosen, which alternatives were considered, why the chosen one beat them. Documents without decisions are documents the team disregards during build.

**Carry the rationale forward, not just the conclusions.** Discovery surfaced reasons behind every workshop decision and every prototype finding. Requirements & Design either honours those reasons or revisits them deliberately. The FR/NFR document should cite the workshop or interview that drove each requirement; the ADR-style architecture document should cite the prototype findings that validated each technical choice. Engagements that strip rationale during this phase produce delivery teams that re-litigate settled decisions because nobody remembers why they were made.

**Time-box reviews tightly.** Each deliverable goes through one or two client review cycles before sign-off, no more. Open-ended review eats into delivery budget; tight reviews force the client to engage seriously rather than treat the cycle as scheduled procrastination. Five business days for the first review, three days for revisions, then the deliverable is signed or escalated. Document the cycle in the SOW or in the project charter.

:::tip
Maintain a single decisions document that runs across all four sub-activities — FR/NFR decisions, design decisions, architecture decisions, infrastructure decisions, all in one place with consistent format. The unified document becomes the durable artifact the delivery team and client both reference. Per-discipline documents fragment context and inevitably contradict each other on cross-cutting decisions (a UX choice that depends on an unstated architecture assumption is the most common shape).
:::

:::caution
Do not skip formal FR/NFR documentation because the team "already discussed it" during discovery. Conversation is not specification. Engagements that ship without atomic, testable FRs produce QA cycles that argue about whether each behaviour is a bug or a feature, and UAT cycles that drag on because the client and agency had different mental models of "done." The FR/NFR document is the artifact that QA tests against and UAT signs off against; without it, those phases run on memory and goodwill.
:::

**Get the client review process right at the kickoff.** Each deliverable needs a named client reviewer, a stated review window, and an explicit acceptance signal (signed document, in-tool approval, or email confirmation against a named artifact). Confirm these in writing before the phase begins, not when the first deliverable is ready for review. Engagements that improvise the review process inevitably slip on the first cycle and never recover.

**Right-size the deliverables to the engagement.** A 200-page architecture document on a £40k marketing-site build is malpractice; a six-bullet architecture sketch on a £400k regulated-industry platform is the same. The discipline is calibrating depth to engagement size and risk profile. Stories 4.2 through 4.5 each name the heavyweight-vs-lightweight choice for their domain.

## Desired outcomes

By the end of Requirements & Design, the engagement has the following in place:

- A finalised, atomic, testable FR/NFR set tied to discovery requirements and ready for development against and QA testing against
- UX deliverables — user flows, wireframes, mockups, design tokens, accessibility notes — at fidelity sufficient for development to build from without ambiguity
- An architecture decision document (ADR-style) capturing tech-stack decisions, component boundaries, data flow, integration points, and the risks and trade-offs of each
- An infrastructure plan covering environments, hosting, network, secrets management, cost estimate, and disaster-recovery posture
- A signed development-ready handoff package combining all four deliverables, named stakeholders for delivery, and the open-issues backlog
- A scheduled handoff event to [Development](/development/) with named delivery-team members and a Day-1 readiness review

## What the industry does

**Front-loaded design vs. design-as-they-build.** Front-loaded agencies invest heavily in this phase — full architecture documents, complete design systems, atomic FR/NFR catalogues — and treat the handoff to development as a near-binding spec. Development becomes implementation rather than design. Trade-off: the agency commits to a design before it has been pressure-tested in code, and the design can become outdated as discovery's assumptions are revised during build. Design-as-they-build agencies produce lighter Requirements & Design artifacts and treat development as a continuation of the design conversation — components are designed in close collaboration with engineers, architecture decisions evolve as code is written, FRs are sharpened as features land. Trade-off: the agency cannot offer a fixed scope easily and the client lives with continual change-control conversations. Front-loaded design dominates in fixed-price engagements, regulated industries, and engagements where the client needs document-quality artifacts; design-as-they-build dominates in T&M product engagements, design-led shops, and longstanding agency-client relationships. Both are commercially viable; the discipline is choosing one and structuring the SOW accordingly.

**Single-document vs. discipline-specific documentation.** Some agencies produce one consolidated Requirements & Design document covering FRs, designs (linked or embedded), architecture, and infrastructure in a single structured artifact. Procurement-friendly, sign-off-friendly, but heavy. Others produce four separate documents, each owned by a different discipline lead, with cross-references. Easier to author in parallel, more discipline-appropriate detail, but requires careful consistency management because the documents will disagree on cross-cutting concerns. Single-document is dominant in enterprise consulting and regulated-industry engagements; multi-document dominates in modern software agencies where the disciplines work in parallel and tooling is per-discipline (Figma for design, Confluence or Notion for FRs, repo-based ADRs for architecture).

**Heavyweight vs. lightweight architecture artifacts.** UML-style architecture (sequence diagrams, deployment diagrams, ERDs, state machines) was the dominant pattern for two decades and survives in regulated industries and government contracts. Modern agencies trend toward lightweight ADR-format architecture: short, decision-focused documents in the repo (one decision per file: context, decision, consequences). The lightweight form pairs better with code-based design and is more durable through team rotation. Heavyweight architecture survives where the artifact is itself a deliverable contract — defence work, healthcare platforms, financial-services compliance. Most general software agencies have moved to lightweight ADRs by default and add diagrams only where they materially aid comprehension.
