---
title: Maintenance & Retainer
description: Post-launch work — bug fixes, feature iteration, incident response, retainer structure — and the loop back to Pre-Sales for further engagements.
type: phase-overview
phase: maintenance-retainer
order: 1
lastUpdated: 2026-05-03
status: v1
---

## What happens here

Maintenance & Retainer is the lifecycle's closing phase and its loop point. It begins the moment [client handoff](/deployment-launch/client-handoff-launch-checklist/) is signed — not when the first incident fires — and continues either under a defined retainer agreement or as a finite warranty period after which the agency is unavailable for unbilled support. Maintenance also feeds back into [Pre-Sales](/pre-sales/) when the client expands scope, starts a new engagement, or commissions a follow-on project. The lifecycle is a loop, not a one-shot.

The phase contains four sub-sections:

1. **[Bug Fixes & Patch Management](/maintenance-retainer/bug-fixes-patch-management/)** — classifying defects, scheduling patches, and maintaining scope discipline so bug-fix work does not silently absorb feature scope.
2. **[Feature Iteration](/maintenance-retainer/feature-iteration/)** — handling post-launch feature requests through structured intake, mini-SOWs, or full re-entry into Pre-Sales for substantial work.
3. **[Incident Response](/maintenance-retainer/incident-response/)** — runbook-driven, SLO-aligned response to production incidents with documented severity, named commander, and post-incident review.
4. **[Retainer Structure & SLAs](/maintenance-retainer/retainer-structure-slas/)** — designing the retainer agreement: hours bucket, feature allocation, SLA tiers, exclusions, renewal cadence.

Participants depend on the retainer structure. A defined retainer typically allocates a partial team (1–3 engineers, perhaps shared across multiple clients) plus on-call rotation; a break-fix-only relationship has no allocated team and engages on demand. The phase has no fixed end — it runs until the client commissions a substantial new engagement that re-enters [Pre-Sales](/pre-sales/), the relationship terminates by mutual agreement, or the agency declines further work.

The lifecycle loop matters. Repeat engagements are usually the highest-margin work an agency does — pre-sales is shorter (the client knows the agency), discovery is faster (existing context), and delivery is more efficient (familiar systems). Agencies that treat handoff as the end of the relationship miss the lifecycle's economic compounding. Agencies that treat retainer as the natural state of the relationship — and that close handoff with explicit retainer or path-to-retainer — convert engagements into multi-year client relationships.

## Best practices

**Begin maintenance at handoff, not at the first incident.** The retainer engagement (or warranty period) starts on the handoff signature date, not on the first time the client pages the agency. The clock matters because most retainer SLAs are measured from issue submission, not from when the agency happens to notice; the warranty period is a documented window, not an open-ended obligation. Engagements that leave the maintenance start ambiguous find the agency providing free support that the handoff documentation never committed to.

**Make the retainer agreement explicit, not implicit.** A retainer is a signed document covering hours per month or per quarter, what is included, what is excluded, SLA terms, escalation path, renewal cadence, and rate for overflow work. Implicit retainers — "just keep an eye on it for us" — bleed agency margin and erode the boundary between paid and unpaid work. The discipline is mechanical: post-handoff support requires either a signed retainer or per-incident pricing; nothing else.

**Distinguish bug fixes from feature requests in classification, not in conversation.** Each support request is classified at intake — defect against signed acceptance criteria (covered under retainer or warranty), enhancement request (priced as new work or as a draw against the retainer's allocated capacity), or operational request (covered under the retainer's operational scope). Engagements that triage classification ad hoc per request find that "small enhancements" silently consume bug-fix capacity, eroding the retainer economics.

**Recognise when a request exceeds the retainer.** Feature requests that exceed the retainer's hours allocation, or that materially change the system's architecture, are not retainer work. They re-enter [Pre-Sales](/pre-sales/) as new engagements, with their own scoping, pricing, and SOW. Treating substantial new work as "retainer overflow" produces a relationship where the retainer becomes a perpetual half-paid engagement, and neither party is satisfied.

:::caution
Do not provide informal post-launch support without a contract. The most common form of agency margin erosion is the post-handoff Slack channel that nobody officially closed — engineers continue answering questions, fixing small issues, and providing operational guidance that the engagement was not priced for and the retainer was not signed for. The discipline mirrors handoff: post-handoff work requires either a signed retainer or per-incident pricing. Engagements that drift into informal-support relationships discover six months later that they have provided dozens of hours of unbilled work, the relationship has lost commercial discipline, and the conversation about formalising it is harder than it would have been at handoff.
:::

**Plan the next-engagement conversation throughout the retainer.** Retainers are the natural prospecting ground for follow-on engagements. The agency's account manager (or delivery lead) maintains a quarterly check-in covering: how is the retainer going, what new initiatives is the client planning, what would they want to ship in the next 6–12 months. The conversations surface follow-on work earlier and position the agency as the natural delivery partner. Agencies that treat retainer as a maintenance-only relationship miss the engagement opportunities the relationship would have produced.

## Desired outcomes

By the end of the post-handoff transition into Maintenance & Retainer, the engagement has the following in place:

- A running retainer engagement with signed agreement, agreed SLAs, documented inclusions and exclusions, and a renewal calendar — or an explicit decision that the relationship is warranty-only or has ended
- A documented patch cadence covering routine dependency updates, security patches, and operational upgrades the retainer commits to
- Incident-response readiness: on-call rotation defined, runbook-linked alerts active, post-incident review process documented and rehearsed
- A path-to-next-engagement explicitly maintained — quarterly check-ins, named account manager, awareness of the client's roadmap — feeding back into [Pre-Sales](/pre-sales/) when substantial new work emerges
- A clean commercial boundary between retainer-covered work, warranty-covered work, and out-of-scope work that requires new commercial conversation
- A relationship state both parties understand: where the retainer goes, when it renews, what new work looks like, who owns the conversation when expansion comes up

## What the industry does

**Defined-retainer vs. break-fix-only cultures.** Defined-retainer agencies enter every post-handoff engagement under a signed retainer agreement with allocated hours, SLA tiers, and a renewal calendar. Trade-off: predictable revenue, ongoing relationship, requires retainer-shaped capacity allocation in the agency. Break-fix-only agencies do not maintain retainers — post-handoff issues are billed per incident or per change order, the agency has no allocated capacity for the client outside engagements, the relationship goes dormant between projects. Trade-off: simpler commercial model, lower-margin overall (no recurring revenue), more friction when issues arise. Defined-retainer dominates in agencies whose business model is ongoing client partnership, in modern product engineering, and in regulated industries where ongoing operational support is part of the procurement requirement; break-fix-only survives in agencies whose engagements are short and clearly bounded, in clients with strong internal operations capacity, and in agencies that explicitly do not want recurring-revenue commitments. Modern agencies trend strongly toward defined-retainer because the recurring revenue compounds and the relationship economics improve.

**Hours-bucket vs. capacity-allocation vs. SLA-tiered retainer structures.** Hours-bucket retainers commit a number of hours per month or quarter (e.g., 40 hours/month) drawn against any work the client requests. Trade-off: simple to price, flexible for the client, no commitment to specific outcomes. Capacity-allocation retainers commit a partial team (e.g., one engineer at 50% capacity) to the client. Trade-off: predictable for the agency's resourcing, less flexible than hours-bucket. SLA-tiered retainers commit to response-time and resolution-time SLAs (e.g., critical issues acknowledged in 1 hour, resolved in 4 hours) without specifying hours or team capacity. Trade-off: reflects the client's actual need (incident response), harder to price the agency's commitment. The choice depends on what the client values most — flexibility, predictable team availability, or response-time guarantees. Most mature agency retainers blend two or three structures.

**Single-client retainers vs. shared-bench retainer pools.** Single-client retainer agencies dedicate engineers to one client at a time — typically used in larger engagements where the client's volume justifies dedicated capacity. Trade-off: deep client knowledge, fast response, expensive, harder to fill engineer time during quiet periods. Shared-bench retainer agencies pool retainer capacity across multiple clients — engineers serve several clients on smaller retainers, with the bench scheduled like an internal-service team. Trade-off: efficient utilisation, lower per-client cost, less deep familiarity per system, more context-switching for engineers. Single-client survives in large enterprise engagements and in long-running agency-client relationships where the client funds dedicated capacity; shared-bench dominates in mid-sized agencies serving smaller-retainer clients and in modern agency operating models.
