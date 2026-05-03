---
title: Incident Response
description: Time-bounded, SLO-driven response to production incidents — severity matrix, named commander, client communication, post-incident review.
type: sub-section
phase: maintenance-retainer
order: 4
lastUpdated: 2026-05-03
status: v1
---

## What happens here

Incident response is the time-bounded, client-visible, SLO-driven activity that engages when production breaks. It is distinct from both [bug-fix work](/maintenance-retainer/bug-fixes-patch-management/) (which is scheduled, asynchronous, and lower-stakes) and [feature iteration](/maintenance-retainer/feature-iteration/) (which is planned, deliberate, and forward-looking). Incident response runs against the clock, with named roles, formal communication cadence, and post-incident learning artifacts that prevent recurrence.

A useful incident-response framing has four phases:

1. **Detect.** Monitoring or user report identifies that production is unavailable, degraded, or behaving incorrectly. The [observability setup](/deployment-launch/monitoring-observability-setup/) configured during deployment fires alerts that route to the on-call rotation. The clock starts on the SLA's response-time commitment.
2. **Triage and respond.** On-call engineer acknowledges, assesses severity, names an incident commander, opens an incident-tracking artifact, and begins resolution. Severity drives the response intensity — critical incidents get immediate full attention; minor incidents proceed with bounded urgency.
3. **Resolve and communicate.** The commander coordinates resolution, the team executes, and the client receives status updates at the cadence the severity requires. Resolution criteria match the alert criteria — when monitoring shows the system healthy again and the resolution holds for a defined period, the incident closes.
4. **Review and learn.** Post-incident review (often called "post-mortem" or "learning review") within a defined window after resolution — typically 5–10 business days. Documents what happened, why, what worked in response, what did not, and what changes prevent recurrence.

The output of incident response is a resolved incident, a client-signed post-incident review, an SLA-compliance record, and tracked corrective actions that flow into the engagement's [bug-fix queue](/maintenance-retainer/bug-fixes-patch-management/) or [feature iteration backlog](/maintenance-retainer/feature-iteration/) as remediation work.

## Best practices

**Define a severity matrix in the retainer agreement.** Severity classification drives response intensity, communication cadence, and SLA commitments. A typical four-tier matrix:

- **Sev-1 (Critical).** Production unavailable; revenue or safety impact. Acknowledge in 15 minutes; full team engaged; client updated every 30 minutes.
- **Sev-2 (High).** Major feature unavailable or seriously degraded. Acknowledge in 1 hour; named commander engaged; client updated every 2 hours.
- **Sev-3 (Medium).** Feature partially impaired or workaround exists. Acknowledge in 4 hours; standard support response; client updated daily until resolved.
- **Sev-4 (Low).** Minor or cosmetic issue, or non-urgent operational concern. Routes to bug-fix queue at standard cadence; not really an incident.

The matrix is documented in the retainer agreement, applied at incident open, and visible to the client. Without classification, every issue becomes a debate about urgency under pressure.

**Name an incident commander immediately on Sev-1 and Sev-2.** A single person owns the incident — coordinates the resolution, makes the calls, communicates with the client, decides when the incident is closed. The commander is not necessarily the person fixing the issue (often they are not — the commander coordinates while engineers diagnose and patch). The role rotates by on-call schedule but is named explicitly at incident open. Engagements without named commanders produce diffused responsibility — every engineer waits for someone else to make the call, and the incident extends.

**Establish communication cadence with the client at incident open.** The client receives a structured update at a documented cadence — every 30 minutes for Sev-1, every 2 hours for Sev-2, etc. The update format is consistent: current status, what is being investigated, what has been ruled out, next steps, expected next update time. Communication is the work the commander owns; the engineers diagnosing the issue are protected from communication interrupts. Engagements that improvise client communication during incidents either over-communicate (every engineer fielding questions, no one fixing) or under-communicate (silent technical work, anxious client).

**Run a post-incident review within 5–10 business days.** Every Sev-1 and Sev-2 incident gets a documented review: timeline of what happened, root cause (technical and process), what worked in response, what failed, corrective actions with named owners and target dates. The review is blameless — focused on system and process, not on individuals. The artifact is shared with the client and signed off as the closure of the incident's review phase. Engagements that skip post-incident review repeat the same incidents — the technical fix lands, the process fix never does.

**Maintain a learning log across incidents.** A running document — across the retainer engagement and ideally across the agency's portfolio — capturing the patterns surfaced in post-incident reviews. The log feeds future incident-response design, runbook updates, and team training. Engagements without a learning log treat every incident as novel, even when it shares root causes with three earlier incidents nobody documented.

**Test the incident response process via tabletop exercises.** Once or twice a year (or after major architecture changes), run a tabletop exercise — simulate an incident, walk through the response, identify gaps in runbooks, communication plans, or escalation paths. Tabletops are dramatically cheaper than learning the same lessons during real incidents. Engagements that never test their incident response discover during real incidents that the runbook is out of date, the on-call rotation has stale contact info, or the client's named operator has rotated.

:::caution
Do not run incident response without a named commander. Diffused responsibility — where every engineer in the call assumes someone else owns the resolution — produces incidents that take 3–4 times as long to resolve. The commander makes the calls, owns the communication, and decides the closing. Without a commander, the incident becomes a committee discussion that prioritises consensus over resolution. The discipline is mechanical: the on-call rotation names a commander at incident open, and that commander runs the incident until it is closed.
:::

**Document corrective actions and track them to closure.** The post-incident review produces concrete corrective actions — fix the alerting gap, update the runbook, add the missing test, refactor the brittle component. Each action gets an owner, a target date, and tracking against closure. Engagements that produce review documents without tracking the actions repeat the same conversations after the next incident. The actions become entries in the [bug-fix queue](/maintenance-retainer/bug-fixes-patch-management/) or [feature backlog](/maintenance-retainer/feature-iteration/), with retainer hours allocated as remediation work.

## Desired outcomes

By the end of incident response work — at any point during the retainer — the engagement has:

- A documented incident-response process with severity matrix, response-time commitments, communication cadence, and named-commander discipline applied consistently
- A resolved incident for every event triggered, with the resolution timestamped against the SLA's commitments and the result reported to the client
- A client-signed post-incident review for every Sev-1 and Sev-2 incident, completed within the documented review window
- An SLA-compliance record covering every incident in the retainer period, ready as evidence at retainer renewal
- Corrective actions tracked from post-incident review through closure, with retainer hours allocated to remediation work
- A maintained learning log capturing patterns across incidents, feeding ongoing improvements to runbooks, alerts, and team practices
- A tested incident-response process — tabletop exercise completed at least once during the retainer engagement, with findings folded back into the runbooks

## What the industry does

**Formal-IR-program vs. ad-hoc shops.** Formal-IR-program agencies operate with documented severity matrices, named commander rotations, structured communication templates, post-incident review processes, and learning logs across engagements. Trade-off: high preparation overhead, dramatically better incident outcomes, common in agencies serving regulated clients or operating production-heavy retainers. Ad-hoc agencies handle incidents as they arrive — the on-call engineer responds, communicates with the client informally, fixes the issue, and moves on. Trade-off: low overhead, dramatically worse incident outcomes (longer resolution, higher recurrence), common in agencies whose retainers are bug-fix-heavy with rare incidents. Formal-IR-program dominates in agencies serving fintech, health, regulated SaaS, and any client where downtime carries financial or regulatory penalties; ad-hoc survives in agencies whose retainers do not include incident-response commitments and in clients whose tolerance for incident-response immaturity is high.

**Status-page communication vs. direct-channel communication cultures.** Status-page agencies maintain a public or client-private status page (Atlassian Statuspage, Statuspage.io, GitHub Status alternatives) where incidents are posted, updated, and closed publicly. Trade-off: scales to many clients, transparent communication, requires status-page tooling and discipline. Direct-channel agencies communicate through email or Slack channels with client stakeholders. Trade-off: more personal, less scalable, harder to maintain consistent communication discipline. Status-page dominates in agencies operating public-facing platforms and in retainers serving clients with formal SLA reporting requirements; direct-channel survives in retainers serving small numbers of close-relationship clients. Most modern agencies blend — status pages for severity-1 customer-facing incidents, direct channels for internal-only or lower-severity events.

**Blameless-review vs. accountability-review cultures.** Blameless-review post-incident processes focus on system and process — what conditions allowed the incident to happen, what process fixes prevent recurrence — without attributing fault to individuals. Trade-off: produces psychological safety for engineers to surface near-misses and contributing factors honestly; risks of perceived accountability gaps if not paired with strong process discipline. Accountability-review processes assign individual responsibility for incidents — who made the change that caused this, who should have caught it. Trade-off: appears to enforce discipline, drives reporting underground (engineers hide near-misses), almost always degrades incident outcomes over time. Blameless-review is the modern industry standard, drawn from Google SRE practices and operationalised across most modern agencies; accountability-review survives in legacy enterprise cultures and in agencies that have not adopted modern reliability practices. The evidence consistently favours blameless review for actual incident-rate reduction.
