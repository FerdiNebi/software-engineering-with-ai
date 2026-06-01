---
title: Delivery
description: The phase where Project Management, Development, and QA / Testing run as three concurrent streams against a shared sprint cadence — not as sequential phases.
type: phase-overview
phase: delivery
order: 1
tree: "process"
lastUpdated: 2026-05-06
status: v1
---

## What happens here

Delivery is the phase where the signed [Requirements & Design](/requirements-design/) package is converted into a tested, demonstrable, sign-off-ready release candidate. It is the longest and most expensive phase in the engagement and the one where the agency-client relationship is either reinforced or eroded.

The phase contains three sub-sections that run **concurrently**, not sequentially:

1. **[Project Management](/delivery/project-management/)** — the commercial product the client pays for. PM owns the cadence, the status conversation, the change log, the risk register, and the demos. Without PM, Development and QA / Testing produce work but the client cannot see it, cannot trust it, and cannot sign off on it.
2. **[Development](/delivery/development/)** — the engineering stream. Repository plumbing, CI/CD, backend, frontend, developer testing, code review, security practices, performance engineering, and technical documentation. This is the largest budget line and the one most often mistaken for the whole of delivery.
3. **[QA / Testing](/delivery/qa-testing/)** — the validation stream. Test strategy, functional and regression testing, performance testing, security testing, and UAT. QA runs alongside Development from sprint one — not after Development "finishes."

The older "Development phase, then QA / Testing phase" framing is wrong for agency engagements. In practice, every sprint contains all three streams: PM plans the sprint, runs the demo, talks to the client, and updates the change log; Development builds the items committed in planning; QA writes tests against those same items as they merge, gates the definition of done, and feeds defects back to Development before the sprint ends. The streams interlock at the sprint boundary and at the definition of done — not at a one-time handoff.

A typical mid-sized engagement allocates 60%–75% of total budget and 50%–70% of total calendar time to Delivery. The phase ends when the agreed scope is built, tested, demoed, signed off in a UAT cycle, and packaged for [Deployment / Launch](/deployment-launch/).

## Best practices

**Plan, build, test, and report on the same heartbeat.** Pick a sprint cadence (one or two weeks for most engagements) and align all three streams to it. PM-led planning at the start, demo at the end, daily checkpoints in between. Development and QA both gate on the same definition of done — code merged, tests green, story acceptance criteria met. Status reporting cadence matches the sprint cadence so the client sees progress at the same rhythm the team works at. Engagements that decouple cadences (Dev on two-week sprints, QA on a one-week buffer cycle, PM reporting monthly) produce streams that can't see each other and a client that loses trust between updates.

**Make Definition of Done include both Dev and QA.** The single most common Delivery anti-pattern is a definition of done that says "code merged" — Development declares victory at merge, QA finds defects two sprints later, and the client receives unstable demos. A working definition of done is "code merged, automated tests green, manual exploratory testing passed, story acceptance criteria verified by QA, demo recorded, change log updated by PM." Every story closes against that bar or it is not closed.

**Treat PM as a stream, not as overhead.** Agencies that bill PM separately and price it commercially produce healthier engagements than agencies that blend PM into team rates and treat it as a tax. PM-as-a-product means dedicated PM capacity, named PM artifacts (status report, change log, risk register, retro outputs), and a PM voice in every client conversation. The Project Management sub-section is the artifact list — every page in it represents something the PM produces and the client consumes.

:::tip
Run a single sprint review (the demo) attended by PM, Development lead, QA lead, and the client. One meeting, all three streams represented. Don't split it into a "Dev demo" plus a "QA report" plus a "PM update" — the cost of context switching outweighs any specialisation gain, and the client mentally aligns the three streams when they see them together.
:::

:::caution
Do not let Development "ship" features that QA hasn't seen. Sprints that end with a long tail of "QA in progress" stories are sprints that didn't actually land their commitment — the team has built optimism, not work. Either bring QA into earlier sprint days, or shrink sprint scope so QA can keep up.
:::

**Make scope changes visible at the sprint boundary.** Mid-sprint scope changes are the silent killer of agency engagements. The PM-owned change-control flow ([Scope Control & Change Management](/delivery/project-management/scope-control-change-management/)) routes every requested change through impact assessment before it lands in the backlog. The client sees the change log every sprint and signs off on every change order; the team works against a stable plan inside the sprint and a controlled plan across sprints.

**Run retrospectives every sprint, even when nothing is wrong.** Retros that only happen when the team is upset turn into venting sessions. Retros that happen every sprint, on the same cadence, become a normal calibration ritual that produces small continuous improvements rather than rare large ones.

## Desired outcomes

By the end of Delivery, the engagement has the following in place:

- A tested release candidate covering the full SOW scope, with automated test pass rate at the agreed bar (typically ≥95% on critical paths) and zero open Sev-1 defects
- A UAT-signed acceptance package, signed by the named client acceptor, listing every accepted story, every deferred story, and every change order
- A PM-owned change log capturing every scope change, who requested it, the impact assessment, and the client's decision
- A current risk register at the sprint boundary, with an owner and mitigation for every above-threshold risk
- A retro-output trail showing what the team learned and what changed across the engagement
- A documented handoff package to [Deployment / Launch](/deployment-launch/) covering the release candidate, the runbook, the test reports, the change log, and named stakeholders for go-live

## What the industry does

**Scrum-by-the-book vs. Kanban-with-release-train vs. hybrid.** Strict-Scrum agencies time-box everything (two-week sprints, fixed ceremonies, story-point velocity, no mid-sprint scope), bill against story-point throughput, and demo at the sprint boundary. Kanban-with-release-train agencies run continuous flow with a periodic release cut, bill against flow rate, and demo on release rhythm rather than sprint rhythm. Most agencies are hybrid in practice: sprint cadence for planning and reporting, Kanban-style flow for in-sprint work. The choice is driven by the contract type — fixed-price engagements push toward strict cadence (predictability matters more than throughput); T&M engagements tolerate Kanban (throughput matters more than predictability). Both produce shippable software; the discipline is choosing one model and aligning the SOW, status reporting, and definition of done with it.

**Onsite vs. fractional vs. blended PM.** High-touch agencies put a dedicated PM on each engagement, billed at their full rate. Fractional-PM agencies share one PM across two or three concurrent engagements, billed at a fraction of full capacity. Blended agencies don't bill PM separately at all — PM time is absorbed into the team rate and provided as part of the package. Each model produces a different commercial conversation. Dedicated PM is the cleanest contract (PM scope is named, PM time is tracked, PM deliverables are listed in the SOW) and the most expensive. Fractional PM is the practical middle ground for engagements under £200k. Blended PM works for trusted agency-client relationships and engagements with simple scope; it falls apart on engagements with active scope-control or stakeholder-management needs because the PM doesn't have visible time to spend.

**Onshore vs. nearshore vs. distributed Development.** Onshore agencies run all three streams in one timezone, accept higher rates, and offer the easiest collaboration. Nearshore agencies run Development (and sometimes QA) in a partner timezone with a small onshore PM and tech-lead presence. Distributed agencies treat the engagement as fully remote across multiple timezones. The Delivery cadence has to match: onshore engagements can run synchronous ceremonies; nearshore engagements can run mostly-synchronous with two daily overlap windows; fully-distributed engagements run async-first with weekly synchronous demos. The choice cascades into the rest of the engagement — a fully-distributed engagement needs heavier written status reporting, stricter definition of ready, and asynchronous review of work.
