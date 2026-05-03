---
title: Stakeholder Interviews
description: Surfacing context, constraints, and political realities through 1:1 conversations before the requirements workshop.
type: sub-section
phase: discovery
order: 2
lastUpdated: 2026-05-03
status: v1
---

## What happens here

Stakeholder interviews are 1:1 (or small-group) conversations conducted at the start of discovery to surface the context, constraints, and unspoken realities that the prospect did not, or could not, share during pre-sales. They produce the raw material that feeds into the [Requirements Workshop](/discovery/requirements-workshops/) — themes, tensions, named risks, and a calibrated read on which stakeholders matter most.

Stakeholder is broader than sponsor. A useful interview list covers four roles:

- **The sponsor.** The economic buyer, often a director, VP, or product owner. Holds the budget, defines success, and signs off on deliverables. Interviewing only the sponsor produces a sponsor-shaped specification that no one else owns.
- **End-users.** The people who will actually use what is built — internal staff, external customers, partners. Their constraints (training, accessibility, real workflows) are usually invisible to the sponsor and frequently contradict the sponsor's mental model.
- **Integrators.** Engineers and ops staff on the client side who will integrate, deploy, or maintain what the agency delivers. They hold the institutional knowledge about brittle systems, undocumented APIs, and the political context behind technical decisions.
- **Detractors.** Stakeholders who opposed the engagement or have reservations about the chosen direction. Their objections, surfaced early, are far cheaper to address than their objections raised at sign-off. Skipping detractors is a tell that the discovery is being run for political comfort, not signal quality.

A typical discovery runs 6–15 stakeholder interviews depending on engagement size. Each lasts 45–60 minutes. They run in parallel during the first week of discovery, with synthesis and theming starting before the last interview is complete. The output — an interview synthesis document — anchors the workshop agenda and is referenced throughout the engagement.

Interviews are positioned ahead of workshops by deliberate design. A workshop populated with cold stakeholders becomes a discovery session in disguise; a workshop populated with stakeholders who have already aired their concerns 1:1 becomes a decision session. The interview is where positions are surfaced privately; the workshop is where conflicts between positions are debated publicly.

## Best practices

**Match the format to the conversation.** Three formats cover most situations:

- **1:1 interviews** — the default. A consultant and a single stakeholder. Used for sponsors, named end-users, and any stakeholder whose perspective might be filtered in a group setting (detractors, junior staff, anyone outside the dominant team).
- **Small-group interviews** — 2–4 stakeholders from the same team or function, sharing context. Useful for end-user representatives where you want the cross-talk that surfaces shared frustrations, and for integrator teams where the institutional knowledge is collective.
- **Paired-consultant interviews** — two consultants (typically a delivery lead and a technical lead) interviewing one stakeholder. The second consultant takes notes, asks follow-ups, and catches what the lead misses. Costs more time but produces dramatically better synthesis. Reserve for the highest-signal interviews — the sponsor and one or two key end-users.

**Use a structured-but-open question script.** A pure-open conversation produces colour but not comparable data; a fully scripted interview produces comparable data but no colour. The middle pattern — three to five anchor questions consistent across interviews, with open follow-ups — gives you both. Anchor questions cover: what does success look like for you; what is the current pain; what would you change about the existing system; who else should we talk to; what are we not asking that we should. The follow-ups are where the real signal sits.

**Neutralise dominant voices in group settings.** Group interviews collapse to the highest-status voice unless actively managed. Three techniques work:

- Ask quieter participants by name before they have to compete for the floor: "Sarah, before we move on, what would you add?"
- Time-box each speaker on the anchor questions (60 seconds each, then open discussion).
- Run a silent-write step on critical questions: each participant writes their answer for two minutes before the discussion. Surfaces independent positions before they are anchored to the loudest voice.

The goal is not to eliminate hierarchy — sponsors should be heard — but to ensure other voices are also captured. A group interview where only the sponsor talks is a sponsor interview with witnesses.

**Establish recording etiquette upfront.** Recording produces the most accurate synthesis but introduces consent and trust dynamics. The practitioner-grade pattern: ask each interviewee at the start of the call whether recording is acceptable, explain why (accuracy, freeing the interviewer to listen rather than scribble), confirm that recordings are used internally for synthesis only, and offer to stop recording on request. If recording is declined or the interview is politically sensitive, fall back to dual note-takers — one consultant interviews while another takes verbatim notes.

:::tip
Ask "what are we not asking you that we should?" as the closing question of every interview. The most useful information frequently comes after the formal questions, when the interviewee has settled and is reflecting on the conversation. This single prompt routinely surfaces risks, political dynamics, and prior failed engagements that no structured question would have caught.
:::

:::caution
Do not interview only the sponsor and call discovery complete. The sponsor's view of the system is necessary but never sufficient. Engagements that go wrong at sign-off almost always do so because end-users or integrators surface concerns at the last moment that should have been heard in week one. If the budget cannot accommodate end-user and integrator interviews, the engagement is under-scoped — flag it before discovery begins, not at the workshop.
:::

**Document rejected directions in real time.** Stakeholders frequently say "we considered X and rejected it because Y." Capture both the X and the Y. The rejected-directions log is one of the most valuable discovery artifacts because it prevents the agency from independently rediscovering — and proposing — the same dead end the client already explored. It also signals to the client that you listened and remembered.

**Synthesize in batches, not at the end.** After every three or four interviews, the consultant pair reviews notes together and updates a running theme list. Late-emerging themes get tested in subsequent interviews; themes that were strong early but did not recur are downgraded. Synthesizing only at the end produces a document that maps to interview order rather than to actual signal weight.

## Desired outcomes

By the end of stakeholder interviews, the discovery team has:

- A written interview synthesis document — themes, tensions, named risks, frequency-of-mention data, and direct quotes anchoring each theme
- An identified set of stakeholder concerns and constraints that will shape the workshop agenda and the eventual scope statement
- A workshop agenda informed by interview themes — the questions to be debated, the decisions to be made, and the participants whose attendance is non-negotiable
- A documented rejected-directions log capturing which approaches the client has already considered and discarded, and the reasoning behind each rejection
- A calibrated stakeholder map: who decides, who influences, who blocks, who executes, and the relationships between them
- A list of carry-over questions the workshop will not resolve — items destined for the open-risks log or for prototyping

## What the industry does

**Interview-heavy vs. workshop-heavy discovery styles.** Interview-heavy agencies front-load discovery with extensive 1:1 conversations (15+ interviews on a mid-sized engagement) and use the workshop as a relatively short decision session to ratify pre-aired themes. Workshop-heavy agencies invest minimally in interviews — a sponsor conversation, perhaps two end-user calls — and rely on the workshop itself to surface positions. Interview-heavy discovery produces sharper specs and fewer late-stage surprises but costs more discovery hours; workshop-heavy discovery is faster but vulnerable to dominant voices and missing context. Interview-heavy is dominant in enterprise consulting (BCG-style discovery, change-management engagements). Workshop-heavy survives in short, highly-bounded engagements (fixed-price marketing-site builds, well-understood platform integrations) where the cost of missing a stakeholder is low.

**Practitioner-led vs. researcher-led interviews.** Some agencies use professional UX researchers or consultants trained in qualitative interviewing for stakeholder interviews. Others have the delivery lead and technical lead run interviews directly. Researcher-led interviews produce better-structured synthesis (theme coding, affinity mapping, formal artifact) but introduce a translation layer between the interview content and the delivery team. Practitioner-led interviews lose some research rigor but build a direct relationship between the stakeholders and the consultants who will deliver. Most software agencies trend practitioner-led — the cost of a researcher per engagement is hard to justify against the modest improvement in synthesis quality. Researcher-led shows up at the high end of management consulting and in design-heavy engagements where research is itself a deliverable.

**Recording-by-default vs. notes-only cultures.** Recording-default agencies record every stakeholder interview with explicit consent, transcribe via automated tools, and run synthesis off the transcripts. Notes-only agencies refuse recording on the grounds that it changes interviewee behaviour and creates retention liability. Recording-default produces dramatically better synthesis at the cost of more disciplined data handling; notes-only loses fidelity but is simpler to manage. The shift toward recording has accelerated since automated transcription became cheap and reliable, but regulated-industry engagements (legal, healthcare, government) often still require notes-only. The next page in the sequence — [Requirements Workshops](/discovery/requirements-workshops/) — handles a similar recording-vs-notes choice for the workshop itself.
