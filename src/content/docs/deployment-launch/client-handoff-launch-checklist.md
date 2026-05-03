---
title: Client Handoff & Launch Checklist
description: The ritual that closes the engagement — credentials, documentation, training, and signed acceptance, with the gate to retainer or end-of-engagement explicit.
type: sub-section
phase: deployment-launch
order: 5
lastUpdated: 2026-05-03
status: v1
---

## What happens here

Client handoff is the formal ritual that closes the delivery engagement. The agency transfers everything the client needs to operate the system independently; the client formally accepts the deliverables; the engagement invoice is closed; and the relationship explicitly transitions to either a [retainer](/maintenance-retainer/retainer-structure-slas/) or to a clean end-of-engagement. It is the procedural counterpart to the [SOW's signature](/pre-sales/sow-contract-drafting/) at engagement start — the SOW set out what would be delivered; the handoff confirms it has been.

The standard handoff artifact set has six classes:

- **Credentials and access.** Cloud accounts, deployment pipelines, monitoring platforms, secrets-management platforms, third-party SaaS subscriptions, domain registrations, certificate registrars. Ownership transitions to the client; the agency's access is revoked at handoff or end of warranty.
- **Documentation.** The complete [technical documentation](/development/technical-documentation/) set — architecture reference, API reference, operational runbook, onboarding guide, known-issues log — handed over alongside the codebase.
- **Runbooks.** Operational procedures the client's team will execute — deploy, rollback, secrets rotation, common-incident response, escalation contacts. Validated against actual operation, not theoretical.
- **Training session.** A scheduled knowledge-transfer event where the agency walks the client's named operators through the system — typically 2–4 hours, recorded for future reference, attended by the people who will operate the system post-handoff.
- **Acceptance signature.** A formal sign-off document confirming the client has received and accepted each deliverable. Names the artifacts, names the signatories, dates the acceptance.
- **Closing administrative items.** Final invoice for the engagement milestone, warranty period start date, retainer agreement (where applicable) signed and active, agreed contact for warranty-period support.

The handoff event itself is typically a 60–90 minute meeting attended by the agency's delivery lead and technical lead and the client's named sponsor and operators. It runs on a published agenda walking through each artifact class, validates the client has access and understands what they have received, and ends with the signature ceremony. The output is a fully transferred system, signed acceptance, and an explicit relationship state going forward.

## Best practices

**Hold a named handoff meeting on a scheduled date.** The handoff is a calendar event, not a series of trickling emails. The meeting has a published agenda, named attendees from both sides, and a defined duration. Engagements that try to handoff via async messaging — "I'll send you the credentials, let me know if anything is missing" — find six weeks later that the client never received credentials they needed and the agency is still answering operational questions for free. The discipline is mechanical: a scheduled event with a clear endpoint.

**Walk through each artifact in the handoff package.** Not just hand over a folder of documents — actively walk the client's named operators through each artifact, demonstrating access, confirming understanding, and addressing questions in the moment. The runbook is opened and one procedure is executed. The dashboards are opened and one alert is reviewed. The architecture document is reviewed at high level. The walkthrough takes time the agency may resent in the moment; it saves dramatically more time in the warranty period when the client would otherwise paged the agency to figure out what they had received.

**Record the knowledge-transfer session.** A 2–4 hour KT session recorded as video (Zoom, Teams, Google Meet recording) and shared with the client. The recording becomes the durable artifact for client team members who could not attend or who join later. Engagements that rely on attendees-only KT find that team rotation 6 months later produces an operator who has never seen the system and cannot reach the original attendees. The recording is the artifact that survives team rotation.

**Run an explicit acceptance ritual.** A signed document — paper, DocuSign, in-tool acknowledgement — listing each deliverable artifact and confirming the named signatory has reviewed and accepted them. The signature event is named, the signatory is the contractually authorised person, and the signed artifact lives in the engagement record. Verbal acceptance ("looks good") at the end of the handoff meeting is not acceptance — it is conversational politeness that dissolves under post-launch pressure. The signature is the artifact that closes the engagement.

**State the relationship transition explicitly.** The handoff names what comes next:

- **Retainer engagement.** A signed retainer agreement (per [Retainer Structure & SLAs](/maintenance-retainer/retainer-structure-slas/)) is in place; the warranty period merges into ongoing retainer support; the SLA terms are agreed.
- **Warranty period only.** A defined warranty window (typically 30–90 days post-launch, set in the SOW) during which the agency addresses defects in the delivered system at no additional cost. After the warranty, the agency is unavailable for free support; new work is priced as a new engagement or per change order.
- **Clean end-of-engagement.** No warranty, no retainer; the engagement ends at handoff signature; further work requires a new commercial conversation.

The transition is documented and signed. Engagements that leave the post-handoff state ambiguous default to "we're here on Slack anyway" — agency-without-retainer with no commercial coverage, eroding margin until someone names the situation.

:::caution
Do not let handoff become a Slack-channel relationship that never officially ends. "We're still on the project Slack so we'll just answer questions" is the most common form of post-handoff scope creep — the agency provides ongoing support that the engagement was not priced for, the client receives operational help without paying for it, and the relationship drifts into mutual resentment. The discipline is the explicit transition statement: the handoff is the final delivery, the warranty period (if any) has named bounds, and ongoing support requires a retainer agreement or per-incident pricing. The Slack channel can stay open; the support obligations cannot be implicit.
:::

**Document the warranty terms in the acceptance.** The warranty period — duration, scope (what is covered: defects, integration failures, what is not: feature requests, configuration changes, training), response time commitments, contact mechanism — is documented and signed alongside the acceptance. Warranty terms left informal become friction during the warranty period when the client and agency disagree on what was covered.

**Validate client self-sufficiency before signing.** A short client-led exercise during the handoff meeting — the client's named operator deploys a small change, reads the runbook for an alert, accesses the dashboards, rotates a test credential. The exercise confirms the client can actually do what the documentation describes, not just that documents exist. Engagements that hand over without this validation discover post-handoff that the documentation has gaps the agency would have caught with a 30-minute walkthrough.

## Desired outcomes

By the end of client handoff, the engagement has:

- A client team equipped with everything needed to operate the system — credentials transitioned, documentation delivered, runbooks validated, training session held and recorded
- A signed handoff acceptance document — paper, DocuSign, or in-tool — listing each delivered artifact and signed by the contractually authorised client signatory
- A closed engagement invoice covering the deployment and handoff milestones, with no outstanding deliverables blocking final payment
- An explicit transition statement covering what comes next: retainer engagement (with a signed retainer agreement), warranty period (with documented terms), or clean end-of-engagement
- A documented warranty agreement (where applicable) covering duration, scope of coverage, response-time commitments, and contact mechanism — signed alongside the acceptance
- A retrospective scheduled or completed with the client to capture engagement learnings, distinct from the handoff acceptance itself
- A clean record of the engagement filed for future reference: SOW, signed deliverables, handoff acceptance, retainer agreement (where signed), final invoice

## What the industry does

**Formal-handoff vs. "we're here on Slack anyway" cultures.** Formal-handoff agencies treat handoff as a discrete contractual ritual — scheduled meeting, walkthrough of every artifact, signed acceptance, explicit relationship transition. Trade-off: clean end of engagement, defensible artifacts, predictable post-handoff economics. Send-it-on-Slack agencies handle handoff informally — credentials shared in DMs, documentation linked from project channels, no formal acceptance event. Trade-off: low ceremony, much higher risk of post-handoff scope creep, fuzzy boundaries between paid and unpaid work, agency-without-retainer relationships that bleed margin. Formal-handoff dominates in agencies with mature delivery practices and in engagements over £30k where the post-handoff economics matter; send-it-on-Slack survives in startup-velocity engagements, in agencies whose engagement structure has not built handoff discipline, and in long-running agency-client relationships where formality feels excessive (until the next dispute proves it was needed).

**Single-event vs. progressive handoff models.** Single-event handoff packs all transfer activities into one meeting at the close of engagement. Trade-off: clean ceremonial closure, may overload the client team with information, requires the agency to stage all artifacts before the event. Progressive handoff distributes transfer activities across the deployment phase — credentials provisioned in week 1, dashboards transitioned in week 2, KT sessions across weeks 3–4, final acceptance signature at the end. Trade-off: smoother knowledge transfer, more administrative effort, requires longer deployment phase to accommodate. Single-event dominates in shorter engagements and in agencies with limited deployment-phase budget; progressive dominates in long engagements and in handoff-track engagements where the client team's preparation matters more than ceremonial closure.

**Warranty-included vs. warranty-as-paid-retainer cultures.** Warranty-included agencies build a defined warranty period (30–90 days typical) into every engagement — defects identified during the period are fixed at no additional cost; feature requests and operational changes are out of scope. Trade-off: clear post-launch commitment, predictable agency cost (priced into the engagement), bounded by definition of "defect." Warranty-as-paid-retainer agencies offer no free warranty — post-launch support is exclusively under a paid retainer or per-incident pricing. Trade-off: simpler economics, harder commercial conversation at end of engagement, common in cost-sensitive engagements. Warranty-included dominates in mid-sized commercial engagements and in agencies that price the warranty into the engagement headline; warranty-as-paid-retainer survives in fixed-price engagements where every additional cost is contested and in agency cultures where post-launch work is treated as separate revenue.
