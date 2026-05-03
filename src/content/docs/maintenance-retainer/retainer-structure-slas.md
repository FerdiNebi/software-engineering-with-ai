---
title: Retainer Structure & SLAs
description: Designing the retainer agreement — structure choices, explicit exclusions, SLA tiers, renewal cadence — and the loop back to Pre-Sales.
type: sub-section
phase: maintenance-retainer
order: 5
lastUpdated: 2026-05-03
status: v1
---

## What happens here

The retainer agreement is the post-launch contract mechanism that converts the engagement from delivery into ongoing partnership. It builds on the original [SOW](/pre-sales/sow-contract-drafting/) — which defined the delivery commitment — and replaces or extends it with a recurring agreement covering the post-launch period. Mature retainers handle bug fixes, dependency maintenance, incident response, small feature work, and roadmap conversation; they also feed the next-engagement pipeline back into [Pre-Sales](/pre-sales/) when the relationship matures into substantial new work.

Three structural choices dominate retainer design:

- **Hours-bucket retainer.** Commits a defined number of hours per month or quarter (e.g., 40 hours/month) drawn against any work the client requests within scope. Predictable cost; flexible scope; common in agencies serving small-to-mid clients with moderate operational needs.
- **Feature-allocation retainer.** Commits a partial team (e.g., one engineer at 50% capacity, or 2 weeks per month) dedicated to the client. Predictable team availability; useful for clients with steady feature work; common in product-engineering retainers.
- **SLA-tiered retainer.** Commits to response and resolution time SLAs by severity (e.g., critical issues acknowledged in 1 hour, resolved in 8 hours) without specifying capacity directly. Reflects the client's actual concern (incident response); common in clients whose primary need is reliability commitments rather than ongoing development.

Real retainers usually blend two or three structures — a base hours bucket plus SLA tiers, or a feature allocation plus an emergency-incident SLA. The discipline is naming the structure explicitly in writing rather than letting it emerge from practice.

## Best practices

**Define inclusions and exclusions explicitly.** A retainer without an exclusions section is an unbillable contract — every ambiguity defaults to "agency does the work." The agreement covers:

- **Inclusions.** Bug fixes against signed acceptance criteria, dependency updates, security patches, incident response per SLA, monthly operational support, monthly status report. Specific enough that a third party could read the agreement and identify what is covered.
- **Exclusions.** Net-new features above the documented size threshold, infrastructure changes, third-party platform migrations, training of new client staff, integration with new third-party systems, work outside the engagement's defined business hours. Specific enough that the client cannot interpret silence as inclusion.

The exclusions list is more important than the inclusions list. Inclusions can drift positively (the agency adds value); exclusions left undefined drift negatively (the agency absorbs scope that should have been priced).

**Document SLA response and resolution targets per severity tier.** SLAs are written commitments — what response time the client gets at each severity, what resolution time, how time is measured (calendar hours vs business hours), what the consequence is if the SLA is missed. The matrix from [incident response](/maintenance-retainer/incident-response/) lives in the retainer agreement, not just in operational documentation. Without written SLAs, every incident becomes a debate about urgency under pressure.

**State the escalation path.** Each retainer has a documented escalation path — primary contact, secondary contact, escalation contact (typically the agency's delivery lead or principal). The path covers both directions: when the agency needs to escalate to a senior client stakeholder, and when the client is unhappy with the standard response. Escalation paths set in writing prevent the "I went to the CEO directly" pattern that destroys retainer relationships.

**Plan a renewal ritual on a documented cadence.** Retainers without renewal rituals drift indefinitely — they auto-renew, accumulate ambiguity, and end up renegotiated under pressure when one party finally raises an issue. The discipline is mechanical:

- **Quarterly check-ins.** A 30-minute conversation between the agency's account manager and the client's named sponsor covering the past quarter's activity, the upcoming quarter's expectations, any adjustments needed.
- **Annual renewal.** A formal renewal event 60–90 days before the agreement's anniversary covering retainer scope, SLA terms, pricing, and any structural changes for the next year.
- **Off-cycle adjustments.** Documented mechanism (often a 30-day notice clause) for either party to propose mid-cycle changes.

The renewal calendar is set at retainer signature and held firmly. Engagements that defer renewal conversations because "things are going fine" find at the next contested issue that the agreement is years out of date.

**Document overflow billing for hours-bucket retainers.** Hours-bucket retainers inevitably hit overflow situations — a heavy month, a major incident, an opportunistic feature. The agreement names what happens:

- Overflow rate (often the same as base rate or a small premium).
- Authorisation threshold (the level at which overflow needs explicit client approval before work begins — e.g., overflow above 8 hours requires a documented approval).
- Reporting cadence for overflow (monthly summary; flagged immediately when triggered).

Without overflow terms, hours-bucket retainers either bleed margin (agency absorbs overruns) or produce surprise invoices (overflow billed without prior approval) that erode trust.

:::caution
Do not sign a retainer without explicit exclusions. The exclusions section is the boundary that makes the retainer commercially defensible; without it, every client request defaults to "is this covered?" and the conversation is harder than it needs to be. The discipline is mechanical: every retainer agreement names what is in scope and what is explicitly out of scope. Engagements that ship with implicit exclusions ("we'll figure out edge cases as they come") find that every edge case becomes a contested unbilled hour.
:::

**Preserve the lifecycle-loop pathway.** The retainer agreement explicitly references the [Pre-Sales](/pre-sales/) pathway for substantial new work — features above the retainer's threshold, new modules, expanded integrations, replacements of major components. The reference normalises the conversation when scope grows: "this is a Pre-Sales conversation, not a retainer absorption." Engagements that omit the loop produce relationships where every substantial new work becomes either a contested overflow event or a procurement event that loses to a competing vendor.

## Desired outcomes

By the end of the retainer-design process — at signature for new retainers, at each renewal for ongoing ones — the engagement has:

- A signed retainer agreement covering structure (hours bucket, feature allocation, SLA tiers, or blend), agreed SLAs per severity, documented inclusions and exclusions, escalation path, renewal cadence, overflow terms
- Mutually understood exclusions documented in writing — both parties know what is not covered without ambiguity
- A renewal calendar with quarterly check-ins and annual renewal events scheduled, with named owners on both sides
- An overflow-billing mechanism documented and tested — at least one overflow event handled cleanly during the retainer period
- A documented escalation path used at least once during the retainer period — either for incident escalation or for commercial conversation
- A signed reference to the [Pre-Sales](/pre-sales/) pathway for substantial new work, normalising the lifecycle loop when the relationship expands
- A maintained record of retainer activity (per [bug-fix log](/maintenance-retainer/bug-fixes-patch-management/), [feature roadmap](/maintenance-retainer/feature-iteration/), [incident reviews](/maintenance-retainer/incident-response/)) ready as renewal-conversation evidence

## What the industry does

**Defined-bucket retainer vs. open-ended monthly-retainer structures.** Defined-bucket retainers commit a specific quantity per period — hours, features, or capacity — with documented overflow handling. Trade-off: predictable margin, clear commercial discipline, harder to absorb small variation without renegotiation. Open-ended monthly-retainer structures commit a monthly fee for "ongoing support and maintenance" without explicit quantity commitments. Trade-off: flexible, simpler to price, prone to scope drift in either direction (client expects unlimited, agency provides minimum). Defined-bucket dominates in mature agencies and in retainers where commercial discipline matters more than maximum flexibility; open-ended survives in long-running relationships where trust-based negotiation has replaced documented commitments. Modern agencies trend strongly toward defined-bucket because the long-term economics favour explicit terms.

**Fixed-fee vs. usage-based retainer pricing models.** Fixed-fee retainers charge the same amount every period regardless of activity. Trade-off: predictable revenue, predictable client cost, harder to handle quiet periods or surge periods. Usage-based retainers charge based on actual hours consumed (with a minimum and a cap). Trade-off: aligns with actual work, more administrative effort, less predictable for both parties. Fixed-fee dominates in modern retainer practice because the predictability favours both parties; usage-based survives in retainers that handle highly variable workloads (e.g., predominantly incident-response retainers where activity is concentrated in short bursts).

**Single-retainer vs. tiered retainer offerings.** Single-retainer agencies offer one retainer shape and customise within it. Trade-off: simple to manage, may not fit all client needs. Tiered-retainer agencies maintain multiple retainer levels (Bronze/Silver/Gold, or named tiers per scope) at different price points and SLA commitments, with clients choosing the tier matching their needs. Trade-off: more complex sales conversation, scales across client size variation, common in agencies serving wide ranges of client sizes. Tiered-retainer dominates in agencies whose retainer business is a meaningful revenue line; single-retainer survives in agencies whose retainer practice is small or specialised.
