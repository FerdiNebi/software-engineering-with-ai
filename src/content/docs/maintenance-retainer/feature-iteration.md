---
title: Feature Iteration
description: Handling post-launch feature requests — small additions inside the retainer, substantial work re-entering Pre-Sales as a new engagement.
type: sub-section
phase: maintenance-retainer
order: 3
lastUpdated: 2026-05-03
status: v1
---

## What happens here

Feature iteration covers the post-launch feature requests that arrive throughout the retainer relationship. The work splits cleanly along a re-pricing threshold:

- **Small features inside the retainer.** Modifications that fit within the retainer's allocated capacity and do not materially change the system's architecture or commercial terms. Drawn against the retainer's hours bucket or feature allocation; documented in the retainer's running roadmap.
- **Substantial work that exceeds the retainer.** Features large enough to consume meaningful capacity, change the system's architecture, or extend beyond the retainer's commercial scope. These re-enter the lifecycle through [Pre-Sales](/pre-sales/) as new engagements — full scoping, proposal, SOW, the same flow that produced the original engagement.

The triage between the two is the work this page is about. Treating substantial work as retainer overflow erodes margin and turns the retainer into a perpetual half-paid engagement; treating small features as new engagements creates procurement friction the relationship cannot tolerate. The discipline is mechanical classification at intake, with the threshold defined in writing and applied consistently.

Feature iteration is the activity most likely to grow the agency-client relationship over time. A retainer engagement that handles ongoing small features cleanly tends to produce follow-on engagements as the client's roadmap matures. A retainer engagement that fights every feature request as scope creep tends to lose the relationship at renewal. The output is a credible roadmap of what the system has gained over time, a clear commercial record of what was retainer-covered and what was new-engagement work, and a healthy pipeline of follow-on work re-entering Pre-Sales.

## Best practices

**Maintain a documented intake queue.** Every feature request lands in a shared tracker visible to both teams: title, requested-by, business rationale, rough size estimate, classification (in-retainer / new engagement / decline), and disposition. The intake queue is the artifact that prevents requests from being lost, mis-routed, or silently absorbed. Without one, requests arrive via Slack, email, and conversations, and the only durable record is whoever happened to remember.

**Use a change-request form for any non-trivial request.** A short structured intake form for feature requests above a documented size threshold (typically 1–2 days of work). The form captures: requested behaviour, business rationale, success criteria, dependencies, suggested timing. The form forces enough definition that the agency can size the request accurately. Engagements that classify requests from one-line Slack messages produce mis-classifications — the request that sounded small turns out to be a 2-week project once the implications surface.

**Define the re-pricing threshold in the retainer agreement.** A specific threshold — measured in hours, in calendar duration, in architectural impact, or in some combination — above which work moves from retainer-covered to new-engagement. Examples:

- **Hours threshold.** "Features estimated above 16 hours of work are scoped as a separate change order, not absorbed into the retainer."
- **Calendar threshold.** "Features that span more than 2 weeks of elapsed time require a mini-SOW."
- **Architectural threshold.** "Features that introduce a new database, a new third-party integration, or a new top-level module require Pre-Sales scoping regardless of hours estimate."

The threshold is documented at retainer signature, applied without exception, and revisited at renewal. Engagements without an explicit threshold negotiate it on every contested request, eroding the commercial discipline.

**Use a mini-SOW for in-between work.** Some features are larger than retainer-covered work but smaller than full new engagements. The mini-SOW is the right artifact: a 2–4 page scoping document with the feature description, agreed scope, fixed price (or T&M cap), timeline, and acceptance criteria. Reviewed and signed in days rather than the weeks a full SOW would take. The mini-SOW preserves commercial discipline without imposing full procurement overhead. Engagements that lack a mini-SOW pattern force every above-threshold request through either retainer absorption (margin erosion) or full Pre-Sales (relationship friction).

**Maintain a client-visible roadmap.** A shared document or board listing what has been delivered, what is in flight, and what is planned — including features-in-retainer, features-as-mini-SOW, and substantial-work-as-new-engagement. The roadmap is the conversation artifact for quarterly reviews, retainer renewals, and capacity discussions. Engagements without a roadmap produce conversations where the client says "we'd like X" and the agency says "we did X last month" — both because no shared record exists.

**Recognise the new-engagement signal explicitly.** When a request triggers re-pricing, the response is concrete: "This feature exceeds the retainer's threshold for in-retainer work. We'd like to scope it as a separate engagement — that means a brief Pre-Sales conversation, a proposal, and an SOW. The retainer continues for ongoing support; this work runs in parallel under its own commercial terms." The framing makes the loop back to [Pre-Sales](/pre-sales/) a positive expansion of the relationship rather than a friction point. Engagements that frame re-pricing as a concession ("we're going to have to charge extra for this") position the agency adversarially; engagements that frame it as the natural next step ("this is where the next engagement starts") build the pipeline.

:::caution
Do not let small features compound across the retainer until the agency is delivering a new engagement at retainer rates. Each individual feature looks reasonable; cumulatively they consume the retainer's bug-fix and operational capacity, leaving the actual support work under-resourced. The discipline is mechanical: every feature request passes through the threshold check; cumulative effort across multiple small features is itself a signal that triggers re-pricing conversation. Engagements that allow feature-creep absorption discover at retainer renewal that they have effectively done a second engagement for free.
:::

**Plan quarterly roadmap conversations with the client.** Beyond the running intake queue, the agency's account manager (or delivery lead) holds a quarterly conversation with the client covering: roadmap status, recent retainer activity, upcoming initiatives the client is planning, capacity adjustments needed for the next quarter. The conversations surface follow-on engagements early — when a substantial new initiative is still in the planning stage, the agency can position for the work rather than reacting to a procurement event.

## Desired outcomes

By the end of any quarter under retainer support, the engagement's feature-iteration practice has produced:

- A running feature-request intake queue with every request triaged and dispositioned, visible to both teams
- A documented record of in-retainer vs out-of-retainer decisions, with the re-pricing threshold applied consistently and re-pricing conversations escalated to the client when triggered
- A maintained client-visible roadmap covering delivered features, in-flight work, and planned items across all classifications
- A pipeline of follow-on work re-entering [Pre-Sales](/pre-sales/) when substantial new initiatives emerge — proposal pipeline visible, mini-SOW templates ready, full SOW process available
- A documented mini-SOW pattern in active use for in-between-size requests, preserving commercial discipline without full Pre-Sales overhead
- Quarterly roadmap conversations held with the client, surfacing follow-on opportunities and capacity needs in advance of procurement events
- A retainer that operates at its priced commitment — not absorbing creeping feature scope that should have been priced separately

## What the industry does

**Fixed-bucket retainer vs. elastic-retainer structures.** Fixed-bucket retainers commit a fixed number of hours per period and treat any work beyond the bucket as a re-pricing event. Trade-off: predictable margin, clear commercial discipline, harder to absorb small overrun without renegotiation. Elastic retainers commit a baseline of hours with documented overflow billing rates (e.g., 40 hours/month base, additional hours billed at rate X with no cap). Trade-off: flexible for the client, easier to absorb small overrun, can erode the discipline that triggers re-pricing for substantial work. Fixed-bucket dominates in mature agencies and in retainers where the agency wants to preserve capacity for substantial new engagements; elastic survives in agencies that prioritise client flexibility over commercial discipline. Most modern agencies use fixed-bucket retainers with mini-SOW patterns for above-threshold work — the combination preserves commercial discipline while accommodating reasonable variation.

**Feature-iteration-only vs. roadmap-driven retainer cultures.** Feature-iteration-only retainers handle requests as they arrive, with no formal roadmap discussion. Trade-off: simple, reactive, low overhead, weak strategic relationship. Roadmap-driven retainers maintain a structured roadmap conversation with the client (quarterly, semi-annually) covering what has been delivered, what is planned, what capacity is needed. Trade-off: positions the agency as a strategic partner, surfaces follow-on engagements earlier, requires account-management investment. Roadmap-driven dominates in agencies whose business model is long-term client partnership; feature-iteration-only survives in transactional retainers where the agency does not invest in the strategic relationship. Modern agencies trend strongly toward roadmap-driven because the follow-on engagements compound and the relationship economics improve.

**Self-serve-mini-SOW vs. full-Pre-Sales-for-everything cultures.** Self-serve-mini-SOW agencies maintain templated mini-SOW patterns that the delivery lead can author and execute within days for in-between-size work. Trade-off: fast cycle for reasonably-sized work, requires the delivery lead to have commercial authority, may bypass strategic conversations the account manager would have. Full-Pre-Sales-for-everything agencies route every above-retainer request through full proposal and SOW, regardless of size. Trade-off: maintains strategic conversation discipline, slower for small new work, can produce procurement friction that loses smaller engagements to other vendors. Self-serve-mini-SOW dominates in agencies with strong delivery-side commercial authority; full-Pre-Sales survives in agencies with strict separation between delivery and sales functions, often in larger consultancies.
