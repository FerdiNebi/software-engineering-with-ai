---
title: Requirements Workshops
description: Facilitated sessions that convert interview themes into prioritised, scope-bounded requirements.
type: sub-section
phase: discovery
order: 3
lastUpdated: 2026-05-03
status: v1
---

## What happens here

The requirements workshop is the discovery activity where themes from [Stakeholder Interviews](/discovery/stakeholder-interviews/) are converted into concrete, prioritised, scope-bounded requirements. It is a facilitated working session, not a presentation. The workshop produces inputs for the formal requirements document — the document itself is authored in [Requirements & Design](/requirements-design/functional-nonfunctional-requirements/), where atomic, testable FRs and NFRs are written from the workshop's prioritised feature list and scope decisions.

A typical engagement runs one to three workshops, each lasting a half-day to a full day, depending on engagement size. Participants are the named decision-makers identified during interviews — typically the sponsor, two or three end-user representatives, an integrator or technical-side stakeholder, the agency's delivery lead, and the agency's technical lead. UX leads attend when design is in scope. The session is run by a designated facilitator (usually the delivery lead) and supported by a designated note-taker who captures decisions in real time on a shared screen visible to the room.

The room makes four kinds of decisions:

- **Scope decisions** — what is in, what is out, and what is parked for a future engagement.
- **Priority decisions** — which features are critical for launch, which are nice-to-have, which are explicitly deferred.
- **Constraint decisions** — non-functional requirements (performance, accessibility, security posture, browser support, integration deadlines) that bound the technical solution.
- **Open-question decisions** — items that cannot be resolved in the room, routed to either prototyping ([Prototyping & POC](/discovery/prototyping-proof-of-concept/)) or to a follow-up working session.

The output is not the requirements document. The output is a workshop summary: prioritised feature list, scope-in / scope-out statements, constraint catalogue, decisions log, parking-lot, and the open-questions list with named owners. That summary is signed by the sponsor (or formally email-confirmed) before the workshop ends or, at the latest, within 48 hours.

## Best practices

**Distribute the pre-read 48 hours ahead.** A pre-read is one or two pages: the workshop's purpose, the decisions on the agenda, the materials to review beforehand (interview synthesis, pre-sales scope statement, any prior client artifacts). Workshops that begin with a 30-minute "context refresh" are signalling that the pre-read was either not sent or not read. Send it on time, name participants who have not opened it before the session, and raise the standard of preparedness across the engagement.

**Publish an explicit agenda with time-boxed segments.** Every agenda item has a stated outcome, a time-box, and a named decision-maker. "Discuss the reporting requirements" is not an agenda item; "Decide which of the three reporting approaches we take into delivery — sponsor decides — 45 minutes" is. Time-boxed agendas force prioritisation: items that overrun get parked, not extended.

**Capture decisions in-session, on screen, before moving on.** Designate a note-taker whose only job is to write decisions onto a shared document visible to the room. Read the decision aloud before moving to the next agenda item: "Decided: reporting approach is option 2; sponsor approved; in scope for delivery." The room either confirms or revises before the agenda advances. This single discipline eliminates the post-workshop "but we said..." conversations that derail engagements at sign-off.

**Run a parking-lot, not a debate club.** Workshops surface ideas that do not belong on the current agenda — adjacent features, longer-term enhancements, opinions on architecture that exceed the discovery's scope. Capture them in a parking-lot list, acknowledge them, and move on. Parking-lot items become candidates for follow-up engagements, change requests, or simply documented context. Allowing the room to debate every parking-lot item turns a half-day workshop into a full-day workshop and erodes confidence in the facilitator.

:::tip
Use silent-write rounds for high-stakes prioritisation. When the room needs to rank features, give each participant five minutes to silently write their top-three list before the discussion. Reveal them simultaneously. Silent-write surfaces independent positions before they anchor to the loudest voice and produces a starting distribution that is far easier to converge from than open discussion alone.
:::

:::caution
Do not run a workshop without conducting stakeholder interviews first. A workshop populated with cold stakeholders becomes a discovery session disguised as a decision session — the room ends up surfacing positions that should have been pre-aired in 1:1 interviews, and decisions get deferred to "the next workshop" because the room is not ready to commit. Interviews-first is non-negotiable; if the budget cannot accommodate them, the engagement is under-scoped and the discovery price needs to come up before the workshop is scheduled.
:::

**Anti-patterns to avoid:**

- **The status-update workshop.** A session where the sponsor presents the current state, the consultant nods, and no decision is made. The agency walks out with notes; the client walks out with a status update. Workshops produce decisions or they are not workshops.
- **The kitchen-sink workshop.** A four-hour session that tries to cover scope, priorities, NFRs, technical architecture, and timeline in one block. Nothing gets enough airtime; the room leaves exhausted and the sign-off summary is vague.
- **The facilitator-as-stakeholder workshop.** The agency's facilitator argues for a particular technical approach while running the agenda. The room loses trust; the decisions favour the agency's preferences over the client's actual needs. Facilitate or advocate, not both. If the technical lead wants to argue a position, hand the agenda to a different consultant for that segment.
- **The verbal sign-off.** "Sounds good" at the end of the workshop is not sign-off. Get it in writing — either signed paper, an email confirmation against the workshop summary, or an in-tool acknowledgement (DocuSign, Confluence approval). Verbal-only sign-offs come unstuck the moment a stakeholder changes their mind.

**Run remote workshops with discipline matching in-person.** Remote workshops require tighter facilitation, not looser. Camera-on for active participants, a single shared document for decisions, breakout rooms for small-group exercises, and explicit hand-up or chat-stack rules so that quieter voices are not lost to whoever speaks first. Remote workshops also benefit from shorter time-boxes (90-minute blocks rather than half-days) because attention degrades faster on video.

## Desired outcomes

By the end of the requirements workshop (or workshop series), the discovery team has:

- A documented set of functional and non-functional requirements at the level of detail needed to feed the formal requirements document — feature names, behaviour summaries, acceptance hints, NFR targets
- A prioritised feature list with explicit categorisation: critical for launch, included if scope permits, explicitly deferred to a future engagement
- An agreed scope statement listing what is in scope and what is explicitly excluded — the exclusions list is as important as the inclusions list
- A risks-and-assumptions log capturing items the workshop could not fully resolve, with named owners and target resolution dates
- A signed workshop summary (paper, email, or in-tool acknowledgement) that the sponsor and the agency's delivery lead both accept as the record of the session
- A parking-lot list of out-of-scope ideas captured for future reference, signalling to the client that ideas are heard even when they are not in scope

## What the industry does

**Single-workshop vs. series-of-workshops approaches.** Single-workshop discovery condenses scope, priority, NFR, and constraint decisions into one full-day session, often with pre-distributed straw-man documents that the workshop ratifies or revises. Faster, lower commercial overhead, suitable for engagements with concentrated decision-making (one sponsor, well-understood domain, tight scope). Series-of-workshops discovery splits the work across two to four sessions over two to three weeks, each with a narrower agenda — scope first, then priorities, then NFRs, then a sign-off session. Slower but produces sharper decisions, suitable for enterprise engagements with multiple stakeholders and contested priorities. Single-workshop dominates in product agencies and small-to-mid SaaS engagements; series-of-workshops dominates in management consulting and large platform implementations where the cost of mis-decisions exceeds the cost of additional workshop time.

**In-person vs. remote facilitation.** In-person workshops produce higher-bandwidth communication, faster consensus-building, and the soft-power dynamics (body language, side conversations, shared meals) that build trust on a new engagement. Remote workshops cost a fraction of the time and travel budget, scale to distributed stakeholder sets, and produce better written artifacts because the shared document is the workshop's primary medium. Remote-default has been the dominant mode since 2020, with in-person reserved for kickoff workshops, executive-stakeholder sessions, and engagements where the client's culture explicitly expects on-site presence. Hybrid workshops (some in-person, some remote) are usually the worst of both — the remote attendees are second-class participants and the room makes decisions without them.

**Decision-by-consensus vs. decision-by-decision-maker styles.** Consensus-driven workshops aim for unanimity in the room before recording a decision. Decision-maker-driven workshops surface positions, debate them, and let a named decision-maker call the call. Consensus produces better stakeholder buy-in but slower, more compromise-shaped outcomes; decision-maker style produces faster, sharper decisions but risks under-investment in dissenter buy-in. Most agency workshops trend decision-maker-driven because consensus on contested topics consumes more time than the engagement's discovery budget allows. Consensus-driven workshops survive in engagements with no clear single decision-maker — partnerships, multi-tenant platforms, internal-stakeholder-heavy programs.
