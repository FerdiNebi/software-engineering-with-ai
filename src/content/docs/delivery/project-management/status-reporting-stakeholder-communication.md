---
title: Status Reporting & Stakeholder Communication
description: The PM-owned client-visible artefact that ensures no surprises — report structure, cadence options, and the bad-news playbook.
type: sub-section
phase: delivery
order: 6
lastUpdated: 2026-05-07
status: v1
---

## What happens here

Status reporting is the PM-owned, client-visible artefact that documents engagement state at a regular cadence. It is the single most consequential PM deliverable because it is what the client uses to assess the engagement between demos, what their leadership uses to assess the relationship at steering committees, and what both sides reach for when something goes wrong. Status reports that are accurate, timely, and structured produce trust; status reports that are sporadic, glossy, or evasive produce escalations.

Stakeholder communication is the wider activity that surrounds status reporting. It includes the steering-committee meetings that consume the monthly version of the report, the ad-hoc client conversations the PM has between sprints, the escalation calls that happen when something material goes wrong, and the post-engagement debriefs that happen at handoff. The status report is the document; stakeholder communication is the relationship.

A well-structured status report has six sections:

1. **Headline** — one paragraph: where we are, what we shipped this period, what's next.
2. **RAG status** against scope, schedule, and budget. Each axis is Red, Amber, or Green, with a one-line justification per axis. RAG is calibrated, not aspirational.
3. **Delivered this period** — bullet list of completed stories with links to demos or merged PRs.
4. **Planned for next period** — bullet list of committed stories, with named owners.
5. **Risks and decisions needed** — top 3–5 risks from the [risk register](/delivery/project-management/risk-issue-management/), and any open decisions the client needs to make to unblock work.
6. **Change-control activity** — summary of [scope-control](/delivery/project-management/scope-control-change-management/) movement: requests received, decisions made, change orders issued.

The cadence is two-tier on most engagements: a weekly written report (sent end-of-Friday or end-of-Monday-morning) covering the operational detail, and a monthly steering-committee meeting (consuming a roll-up of the four weekly reports) covering the strategic shape. Engagements that drop the weekly written report and rely only on the monthly meeting fail at communication — material problems go unreported for up to three weeks, and by the time they surface they're harder to fix and the client is angry that they weren't told earlier.

## Best practices

**Make RAG status calibrated, not aspirational.** The single most-common failure mode is "always green" reporting — every axis green, every status report, until the moment the engagement collapses. The discipline is calibrating RAG against an explicit threshold: scope is green if the team is tracking to deliver the SOW commitment ±10%, amber if the gap is 10–20%, red if the gap is over 20% or the team has lost confidence; schedule is green if no milestone has slipped, amber if a milestone is at risk, red if a milestone has slipped; budget is green if burn-rate matches plan, amber if the gap is opening, red if a course correction is needed. Engagements where the PM never reports amber or red are engagements where the PM is editing the report to manage the client's emotional state — a common, well-intentioned, and ultimately damaging pattern.

**Structure the report so a client leader can read it in two minutes.** The headline paragraph and the RAG block answer "what do I need to know?" in 30 seconds. The delivered/planned bullets answer "what did the team actually do?" in another 30 seconds. The risks/decisions answer "what does the client need to do?" in 30 seconds. A status report that requires a 20-minute read isn't a status report — it's a deliverable disguised as one. Engagements with overlong status reports often have weak headline discipline; the fix is forcing a one-paragraph synthesis at the top.

**Send the report on the same day, at the same time, every period.** Cadence is more important than length. A weekly report at end-of-Friday becomes part of the client's rhythm — they expect it, they read it, they discuss it on Monday. A weekly report that drifts to "sometime Tuesday" becomes a deliverable the client chases for, and the chase itself becomes the friction that erodes trust. The PM treats the report send-time as a hard commitment and structures the team's sprint cadence to make it possible (e.g. demo on Thursday, retro Friday morning, report Friday afternoon).

:::tip
Maintain the running risk register, change log, and delivered-stories list in living Markdown files (or equivalent) throughout the sprint. The status report is then a *roll-up* of those files at end-of-sprint, not a fresh write. This pattern dramatically reduces the time-cost of reporting and ensures the report is consistent with the underlying records.
:::

:::caution
Do not deliver bad news for the first time at a steering-committee meeting. If something material has gone wrong (a milestone is going to slip, a risk has materialised, a scope conversation needs to happen), it goes in the next written report and is followed by an immediate phone call to the named client sponsor. The steering committee is where decisions are confirmed, not where surprises are announced. Engagements that treat steering committees as the venue for first delivery of bad news produce escalations that should have been ordinary conversations.
:::

**Run the bad-news playbook: early, factual, with a proposed mitigation.** When something goes wrong, the PM communicates it on three principles. *Early* — within hours of the agency understanding the situation, not at the next scheduled report. *Factual* — what happened, what's known, what's not yet known, no spin. *With a proposed mitigation* — the PM doesn't bring problems without a proposed path forward, even if the path is "we need a 30-minute call to decide between options A and B." The combination produces trust; any of the three missing produces erosion.

**Match cadence to engagement size.** Engagements under £50k often run on monthly reports plus ad-hoc updates. £50k–£200k engagements run weekly written reports without a formal steering rhythm. £200k+ engagements run weekly written reports plus monthly steering committees. £1M+ programmes add quarterly executive reviews. The discipline is matching cadence to engagement value — over-reporting on a small engagement consumes the PM time that should be spent on delivery; under-reporting on a large engagement leaves stakeholders blind.

## Desired outcomes

Each reporting period produces:

- **A weekly status artefact** the client can forward to their own leadership without rewriting
- **An audit trail** of what was committed and what was delivered, with deltas explained
- **A current RAG snapshot** the client can use to assess engagement health without a phone call

Across the engagement, status reporting produces:

- **No surprise escalations** — every material problem was visible in a status report at least one period before it became urgent
- **A documented decision trail** for every steering-committee decision, captured in the meeting minutes and the next status report
- **A repeatable cadence** the team and client both adapt to — the report becomes a fixture of the engagement rather than an interruption

## What the industry does

**Written-first vs. meeting-first agencies.** Written-first agencies produce a structured written report on a regular cadence and treat meetings as the venue to discuss the report. The model produces strong audit trails and works asynchronously across timezones. Meeting-first agencies run regular status calls and produce only minimal written follow-ups (sometimes just minutes). The model produces fast feedback and richer relationships but weak audit trails — six months later, nobody can reconstruct what was reported when. Written-first dominates in enterprise engagements, regulated industries, and distributed teams; meeting-first dominates in onsite engagements with co-located clients. Hybrid (the dominant model) writes a structured weekly report and runs a 30-minute weekly call to discuss it.

**RAG vs. narrative-only formats.** RAG (Red/Amber/Green per axis) is the dominant industry format because it forces calibration and produces a scannable summary. Narrative-only reports describe state in prose without categorical labels — they're more nuanced but harder to scan. Numbered RAG with explicit thresholds (1 = critical, 2 = at risk, 3 = on track) is a refinement that some agencies use for higher-rigour engagements. A few mature agencies report RAG plus a confidence number ("schedule: amber, 60% confidence") to communicate the strength of their own assessment.

**Internal-only vs. client-co-authored status.** The standard model is PM-authored, agency-internal status that is then sent to the client. A more recent pattern (especially in trusted agency-client relationships) is client-co-authored status — the PM drafts, the client adds context from their side, and the joint report is the artefact both organisations work from. The pattern produces strong alignment but requires a client representative who has time to engage; on engagements where the client sponsor is already overstretched, it adds friction rather than removing it. Most engagements are best served by PM-authored with a quick client review before send.
