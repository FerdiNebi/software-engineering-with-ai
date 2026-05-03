---
title: System Architecture
description: Mapping requirements to a technical design through ADR-format decision documents that survive build and team rotation.
type: sub-section
phase: requirements-design
order: 4
lastUpdated: 2026-05-03
status: v1
---

## What happens here

System architecture is the activity that maps the [FR/NFR set](/requirements-design/functional-nonfunctional-requirements/) to a technical design — the components that exist, how they communicate, what data they hold, and which third-party systems they integrate with. It is the phase where decisions get made and documented, before code is written, so that engineers do not rediscover them during build at a multiple of the cost.

The standard architecture artifact set has four pieces:

- **Architecture decision records (ADRs).** Short, decision-focused documents — typically one page each — that capture context, the decision, and consequences. ADRs answer "why did we choose Postgres over DynamoDB," "why did we centralise auth in a single service rather than per-domain," "why did we choose REST over GraphQL for the client API." Each is durable through team rotation because the rationale is on the page, not in the head of the engineer who left last quarter.
- **Component diagram.** A boxes-and-arrows diagram showing the major components (services, libraries, third-party systems) and their relationships. The single visual that lets a new engineer understand the system in two minutes.
- **Data-flow diagram.** Shows how data moves through the system in the critical paths — request lifecycle, async processing, batch flows. Surfaces ordering, blocking, and failure modes that the component diagram does not.
- **Integration map.** Lists every integration with a third-party system — APIs called, webhooks received, data formats exchanged, authentication model, rate limits, fallback behaviour. The artifact that delivery references when a third-party integration breaks at 3am.

Architecture work runs alongside [FR/NFR authoring](/requirements-design/functional-nonfunctional-requirements/) and [UX/UI design](/requirements-design/ux-ui-design/), with each shaping the others — an architecture decision to use a serverless platform constrains response-time NFRs; a UX decision for real-time updates constrains the data architecture. The output hands off forward to [infrastructure design](/requirements-design/infrastructure-design/), where the architecture's tech-stack decisions become the input for environment, hosting, and operational planning, and cross-phase to [development](/development/), where engineers build against the documented decisions.

The technical lead owns architecture authoring; a solutions architect joins on architecture-heavy engagements. Client-side participation is typically a named technical stakeholder (the client's CTO, head of engineering, or platform lead) who reviews and signs off — both because they may eventually inherit the system and because their environment may constrain decisions the agency would otherwise make freely.

## Best practices

**Adopt ADR format by default.** An architecture decision record follows the established Michael Nygard template:

- **Context.** What forces drove this decision — FRs, NFRs, constraints, prior decisions, client environment.
- **Decision.** What was chosen, in declarative language. "We use Postgres as the primary datastore." Not "We will likely use Postgres if it makes sense."
- **Consequences.** What this commits, both positive and negative. "Postgres gives us strong consistency and well-understood operational tooling. It limits horizontal-scale write throughput beyond ~10k writes/sec, which is acceptable given the projected workload."

Each ADR is one decision, numbered (ADR-001, ADR-002), dated, and stored in the repository alongside the code (`/docs/adr/`) so it travels with the system. Superseded ADRs are not deleted; they are marked superseded with a pointer to the replacing ADR. The history of why-we-chose-this is the artifact that survives team rotation.

**Make decision-impact analysis explicit.** Every significant architecture decision lists the FRs and NFRs it is the response to, the alternatives that were considered, and the trade-offs of each. "Decision: REST API. Alternatives considered: GraphQL (rejected — added schema-management overhead exceeds the integration benefit at this engagement size); gRPC (rejected — client team's frontend stack lacks mature tooling). Trade-offs: REST limits batch-fetch performance; we accept this for the read patterns in scope." Decisions without alternatives reads as fait accompli; decisions with alternatives reads as engineering judgment.

**State risks and trade-offs explicitly per decision.** A useful ADR names what the decision sacrifices, not just what it gains. "We use a single-region deployment. Risk: regional outage takes the system offline; mitigation: documented RTO/RPO of 4h/1h via cross-region backups; client accepts this for the engagement." Naming risks in the ADR is what makes them addressable later — risks discovered during operations are surprises, risks documented at decision time are accepted-or-mitigated.

**Apply pattern-consistency rules.** Architecture decisions compound — a choice to handle errors with structured exceptions in service A must propagate to service B unless there is a stated reason for divergence. Document the cross-cutting patterns the system commits to: error handling, logging conventions, configuration model, secrets handling, request tracing, retry semantics. Without explicit pattern-consistency rules, each engineer invents their own and the system grows seven approaches to the same concern.

**Run a structured client review on architecture.** A 60–90 minute review session with the client's named technical stakeholder, walking through the major ADRs, the component diagram, and the integration map. The reviewer's job is to surface client-environment constraints (existing systems the agency must integrate with, internal compliance requirements, team capabilities post-handoff), not to redesign the architecture. Document what they raised and how the architecture responds. Skipping this review produces architectures the client cannot operate post-handoff.

:::tip
Default to ADRs in the repo, in plain Markdown, numbered. The form is unglamorous and the discipline pays compounding interest. New engineers onboard faster, change requests reference specific ADRs, and the document-vs-code drift that destroys traditional architecture documents is much lower because ADRs sit alongside the code they describe. Glamorous architecture artifacts (60-page Word documents, elaborate UML in cloud tools) usually rot within six months. Plain-text ADRs in the repo do not.
:::

:::caution
Do not let architecture decisions get discovered during build. The cost of changing an architecture decision after engineers have built against it is multiples of the cost of making the decision deliberately at this phase. Engagements that ship "we'll figure out the data model in sprint 1" almost always re-do the data model in sprint 4 at three times the cost. If a decision is genuinely too uncertain to make in this phase, its uncertainty is itself a signal that a [POC or prototype](/discovery/prototyping-proof-of-concept/) was needed during discovery and was skipped.
:::

**Right-size the artifact to engagement scope.** A 200-page UML architecture document on a £40k brochure-site build is malpractice; a one-paragraph architecture sketch on a £400k regulated-industry platform is too. The discipline is calibrating depth — number of ADRs, level of diagram detail, scope of pattern-consistency rules — to the engagement size, novelty, and risk. The right number of ADRs is the number that captures every decision a future engineer cannot easily reconstruct from context. Engagements with five ADRs and engagements with fifty are both correct; engagements with zero are not.

**Anti-patterns to avoid:**

- **The architecture-by-screenshot.** Architecture documented as PowerPoint screenshots that drift the moment a slide is updated. The agency presents it once, the client accepts it, and the document is read by no one again.
- **The aspirational architecture.** Decisions stated in future tense ("We may choose...", "We are likely to..."). Aspirational language is not an ADR; it is uncertainty masquerading as decision. Replace with declarative statements or escalate as an open decision in the open-issues backlog.
- **The diagram-only architecture.** Pretty diagrams with no prose explaining the rationale. New engineers cannot infer why the system is shaped this way; the diagram becomes wallpaper.

## Desired outcomes

By the end of system architecture, the engagement has:

- A signed architecture decision document — typically an ADR collection plus a short cover narrative — covering every non-trivial technical decision with context, decision, and consequences
- An approved technology stack covering language, framework, datastore, queue, cache, third-party platform commitments, with rationale for each choice
- Documented integration boundaries: every third-party system the engagement integrates with, the API or protocol used, authentication model, rate limits, fallback behaviour, and the named owner on the client side
- A component diagram and data-flow diagram showing the major components and their relationships, at fidelity sufficient for a new engineer to understand the system in two minutes
- An identified risks-and-mitigations list, with each risk linked to the architecture decision that produced it and a stated mitigation strategy or accepted-residual stance
- A pattern-consistency rule set covering error handling, logging, configuration, secrets, observability, and any other cross-cutting concern the system commits to
- A signed handoff to [infrastructure design](/requirements-design/infrastructure-design/), where architecture decisions become the input for environment, hosting, and operational planning

## What the industry does

**Heavy-UML vs. lightweight-ADR agency styles.** Heavy-UML agencies produce comprehensive UML artifacts — class diagrams, sequence diagrams, deployment diagrams, ERDs — typically authored in dedicated tools (Enterprise Architect, Visual Paradigm, Lucidchart structured templates). The artifact is procurement-defensible, contractually robust, and frequently required in regulated industries (defence, healthcare, government). Trade-off: high authoring cost, low durability post-handoff, and tendency to drift from the actual system within months. Lightweight-ADR agencies produce numbered Markdown decision records in the repository alongside the code, supplemented by focused diagrams (component, data-flow, integration map) where they materially aid comprehension. Trade-off: less procurement-defensible, less impressive in stakeholder reviews, but dramatically more durable through build and team rotation. ADR-first dominates in modern software agencies and product-engineering work; heavy-UML survives in regulated industries, government, and engagements where the architecture document is itself a contract artifact required by procurement.

**Architecture-as-decision-document vs. architecture-as-implementation-guide.** Decision-document agencies treat the architecture as a set of choices the engineering team makes — what is chosen, what is rejected, why. The team then implements within those constraints. Implementation-guide agencies produce architecture as a step-by-step build plan: which classes to create, which interfaces to define, which patterns to apply where. Decision-document architecture trusts engineering judgment within decision boundaries; implementation-guide architecture prescribes the build to a much finer granularity. Decision-document is dominant where engineers are senior and the agency culture trusts judgment; implementation-guide survives in offshoring-heavy engagements and engagements where the agency cannot rely on consistent engineering culture across the build team.

**Single-architecture vs. emergent-architecture cultures.** Single-architecture agencies design the system holistically in this phase and treat the design as fixed for the engagement — changes go through architecture change control. Emergent-architecture agencies make headline decisions in this phase and let detailed architecture emerge during build, with engineers refactoring as patterns clarify. Single-architecture is more predictable, more procurement-friendly, and produces cleaner artifacts; emergent-architecture is more adaptive, suits engagements where requirements continue to clarify during build, and matches modern Agile sensibilities. Most agencies trend somewhere between — make the cross-cutting and high-cost-to-change decisions in this phase (datastore, framework, integration patterns), let lower-cost decisions (internal module structure, library choices for narrow concerns) emerge during build. Pure single-architecture survives in regulated and fixed-price engagements; pure emergent survives in product-development and longstanding agency-client retainers.
