---
title: Delivery Mobilization & Kickoff
description: The activity that turns a signed delivery SOW into a team that can ship — allocation, account setup, RACI confirmation, and the kickoff meeting that opens Sprint 1.
type: sub-section
phase: delivery
order: 2
lastUpdated: 2026-05-07
status: v1
---

## What happens here

Delivery mobilization is the activity that converts a signed delivery contract into a team that can run sprints. It happens at the moment the **delivery SOW is signed** — the same commercial gate that funds the build. Engineers are allocated, repos provisioned, CI/CD scaffolded, sprint cadence set, RACI confirmed, and a delivery kickoff meeting is run with the full client team. The output is a team that can run [Sprint Planning & Cadence](/delivery/project-management/sprint-planning-cadence/) on day one without losing the first week to setup friction.

The activity sits at one of three commercial seams depending on contract structure:

- **R&D is paid as part of Delivery** (single SOW covers R&D + build sprints) — mobilization happens *before* R&D; R&D is effectively Sprint 0 of Delivery and the team is fully mobilized for the whole phase. Most common in mid-market agency engagements where the client wanted one signed contract.
- **R&D is its own paid milestone between Discovery and Delivery** (separate contract) — only a small R&D-team mobilization (tech lead, UX lead, sometimes a solutions architect) happens at the [Discovery](/discovery/) → [Requirements & Design](/requirements-design/) seam. Full mobilization happens *after* R&D, when the delivery/build SOW is signed. Common in regulated work and engagements where the client wanted a separately defensible architecture before committing to build.
- **R&D and Delivery are one SOW with R&D as a stage gate within it** — mobilization happens once at SOW signing; the team engages from R&D onward, with engineering capacity throttled until R&D sign-off unblocks build sprints. Common middle ground; produces the cleanest commercial conversation but requires careful capacity planning.

This is *not* the same as the smaller "discovery kickoff" that happens when the discovery SOW is signed at the end of [Pre-Sales](/pre-sales/). That earlier event is a 1–2 day allocation for a 2–3 person discovery team and is implicit in the [Stakeholder Interviews](/discovery/stakeholder-interviews/) opening. Delivery mobilization is the larger, named activity that the rest of the engagement runs on.

Participants are the agency's delivery lead, project manager, technical lead, named engineers, QA lead, and DevOps or platform engineer (where the engagement has one). Client-side participants are the named sponsor, the named day-to-day client representative, and the named technical stakeholder. The mobilization runs over 2–10 calendar days depending on engagement size — small engagements (4–6 person team, ≤£100k) mobilize in a couple of days; large engagements (12+ team, regulated client, multi-system integration) take 2 weeks or more.

## Best practices

**Treat mobilization as a discrete deliverable, not as "we'll get started."** A mobilization that ends with the team unsure who owns what, where credentials live, or when the next ceremony is, has not finished. The named mobilization deliverable is a **mobilization document** — one page per engagement covering: the named team and their roles, the agreed RACI, the sprint cadence and ceremony schedule, the tooling stack with access provisioned, the named client stakeholders and their availability windows, and the agreed escalation path. The document is shared with the client at the end of the kickoff meeting and treated as the engagement's operating manual until the first retro.

**Run the kickoff meeting as a working session, not as a presentation.** The temptation is to walk the client through slides about the agency. The right kickoff is a working session: the team and the client together confirm the SOW scope as understood, walk through the sprint cadence and ceremonies the client is expected to attend, agree the communication channels and response-time expectations, ratify the RACI for the engagement's first decisions, and surface anything the client needs from the agency or anyone the agency needs from the client to start work. Kickoffs that produce signed RACI and a confirmed first-sprint scope are kickoffs that work; kickoffs that produce a slide deck the team referenced once are kickoffs that produced theatre.

**Provision tooling and access during mobilization, not in Sprint 1.** Engineering teams that hit Day 1 of Sprint 1 still waiting for repo access, environment credentials, ticket-tracker accounts, or VPN access have lost the most valuable sprint of the engagement to setup. The mobilization checklist explicitly includes: source-control access (every team member, named), CI/CD trigger access, all environment credentials (dev, staging — production access typically waits for [Deployment / Launch](/deployment-launch/)), ticket tracker, time-tracking system, Slack or equivalent channel, shared drive for non-code artefacts, calendar invites for all sprint ceremonies through the next four weeks. The acceptance criterion is concrete: a new engineer can clone the repo, run the system locally, and pick up a ticket within 30 minutes of joining.

:::tip
Maintain a mobilization checklist as a Markdown file in the project repo (e.g. `docs/mobilization-checklist.md`) that is reused across engagements. Each engagement copies the template, ticks items off as they complete, and commits the result as the engagement's mobilization record. The checklist compounds: every engagement learns one new "we forgot to set this up" item that gets added back to the template, and within a year the checklist runs the next mobilization rather than depending on whichever PM remembers the most.
:::

:::caution
Do not skip the kickoff meeting because "we already covered everything in pre-sales." The pre-sales conversation was about whether the engagement happens. The kickoff is about *how* the engagement runs. Different audiences (the buying-side stakeholder vs. the day-to-day client representative), different content (commercial terms vs. operating cadence), different output (signed contract vs. signed RACI). Engagements that conflate the two arrive at Sprint 1 with neither side clear on who decides what or who attends which meeting.
:::

**Confirm RACI for the engagement's first three decisions, not just the long list.** A blank RACI matrix can sit signed at every kickoff meeting and still produce confused engagements. The discipline is to run the RACI against three concrete near-term decisions: "Who signs off on Sprint 1's planned scope? Who decides whether to accept a deferred-defect from the previous engagement that surfaces during build? Who has authority to extend the SOW timeline by one sprint?" If those three answers are crisp at the kickoff, the rest of the RACI works. If those three produce hesitation, the RACI is theatre.

**Calibrate Day-1 onboarding speed as a leading indicator.** Set up the environment so a new engineer goes from `git clone` to a running, testable system in under 30 minutes. Engagements with multi-day onboarding paths waste a non-trivial fraction of every new engineer's first week and signal a project where the plumbing was under-invested. The investment in onboarding speed pays back across every team rotation, every new client engineer, and every handoff conversation. (See also [Repository Structure & Branching](/delivery/development/repository-structure-branching/) for the repo conventions that make this possible and [DevOps & CI/CD](/delivery/development/devops-ci-cd/) for the pipeline scaffolding.)

**Schedule the first retro before the first sprint plans.** Mobilization is itself an activity worth retro-ing. Ten days after kickoff, the team holds a 30-minute mobilization retro: what did we learn about this client, what surprised us, what should be fed into our mobilization template, what is the team's confidence level on the first sprint commitment? Engagements that skip the mobilization retro repeat the same mobilization mistakes on the next engagement.

## Desired outcomes

By the end of mobilization, the engagement has:

- A named team allocated at the agreed FTE level for the engagement duration, with each engineer's start date and ramp-up plan documented
- A signed RACI matrix covering the engagement's named decisions, with the next three concrete decisions explicitly assigned
- A provisioned tooling stack — source control, CI/CD, environments, ticket tracker, time tracking, communication channels, shared drive — with every team member having confirmed access
- A confirmed sprint cadence and ceremony schedule with calendar invites placed for the next four weeks of planning, daily checkpoints, demos, retros, and client status meetings
- A named client representative with confirmed availability windows for ceremonies, demos, and ad-hoc questions, plus a named escalation path on both sides
- A signed kickoff record (meeting minutes, RACI, mobilization document) accepted by the client as the operating manual for the engagement
- A documented Day-1 onboarding path for any new engineer joining mid-engagement: `git clone` to running, testable system in under 30 minutes
- A scheduled mobilization retro 10 business days after kickoff to fold learnings back into the agency's mobilization template

## What the industry does

**Full-mobilization-then-sprint vs. mobilization-overlapping-with-R&D vs. lean just-in-time.** Full-mobilization agencies run the entire mobilization checklist before any in-engagement work begins — the team is fully provisioned, the cadence is scheduled, and Sprint 1 starts on Day N when everything is ready. Trade-off: predictable, the team is highest-throughput from Day 1, but the client pays for several days of provisioning before seeing engineering output. Mobilization-overlapping-with-R&D agencies run mobilization in parallel with the first 1–2 sprints of R&D, with engineers ramping up while the tech lead drives architecture decisions; engineers join the build as their access is confirmed. Trade-off: the client sees motion sooner, but Day 1 is structurally messier and engineers can lose the first day or two to setup. Lean just-in-time agencies provision only the access each engineer needs the moment they need it, accepting setup friction as the cost of zero up-front overhead. Trade-off: lowest mobilization cost, highest in-engagement friction; works on small short engagements and breaks down on engagements over ~£80k or four engineers. Full-mobilization dominates in regulated and enterprise work; overlapping is the modern mid-market default; lean survives in solo-consultant and small-team engagements where the consultant is also the PM.

**High-touch full-day kickoff workshop vs. 60-minute kickoff call.** High-touch agencies run a half-day or full-day kickoff workshop, often onsite at the client, attended by the full delivery team and the named client stakeholders. The workshop covers SOW walkthrough, RACI, sprint cadence, communication norms, escalation paths, and a working-session block where the team and client jointly decompose the first sprint's scope. Trade-off: high cost (1+ day of every team member's time, often plus travel), strong relationship and shared mental model. Lightweight agencies run a 60-minute kickoff call with the PM, delivery lead, and named client representative; the rest of the team mobilizes in parallel and meets the client at Sprint 1 planning. Trade-off: lower commercial cost, faster start, weaker relationship and higher chance of misaligned expectations. High-touch dominates in fixed-price engagements over ~£200k and engagements with new client relationships; lightweight survives in repeat-client engagements and small T&M work where the relationship is already trusted.

**Onshore vs. distributed mobilization.** Onshore agencies (whole team in one timezone) mobilize quickly because every ceremony can be synchronous and every access provisioning happens in working hours. Distributed agencies (team across two or more timezones) need explicit mobilization design — a documented async-first communication norm, a named overlap window for synchronous ceremonies, and a longer mobilization period because access provisioning and credential exchanges run on calendar-day cycles rather than working-day cycles. Engagements that mobilize distributed teams using onshore patterns produce the "we lost the first sprint to time zones" anti-pattern; engagements that explicitly design for distribution mobilize cleanly but pay the up-front cost of named overlap windows.
