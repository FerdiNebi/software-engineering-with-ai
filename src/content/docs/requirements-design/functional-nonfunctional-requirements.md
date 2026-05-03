---
title: Functional & Non-Functional Requirements
description: Authoring atomic, testable, traceable FRs and NFRs that survive build, QA, and UAT without ambiguity.
type: sub-section
phase: requirements-design
order: 2
lastUpdated: 2026-05-03
status: v1
---

## What happens here

Functional and non-functional requirements are the structured statements of what the system must do (FRs) and how well it must do it (NFRs). They convert the prioritised feature list and constraint catalogue produced by [requirements workshops](/discovery/requirements-workshops/) into atomic, numbered statements that delivery, QA, and the client can each defend against without ambiguity.

The two categories answer different questions:

- **Functional requirements (FRs)** describe behaviour: what the system does in response to inputs, events, or actions. "FR-12: A logged-in admin can revoke an active session." "FR-37: When a user submits a checkout form with an invalid postcode, the system displays an inline validation error and does not advance to the payment step."
- **Non-functional requirements (NFRs)** describe quality attributes: how well the system performs, scales, secures, recovers, and supports operation. "NFR-4: Page response time at the 95th percentile is under 800ms under steady-state load of 100 concurrent users." "NFR-11: All form inputs meet WCAG 2.2 Level AA contrast and keyboard-operability requirements."

Where they come from: discovery's prioritised feature list (FRs) and constraint catalogue (NFRs), reconciled against scope decisions and prototype findings. Where they go: development uses them as the build target; [QA's test strategy](/qa-testing/test-strategy-planning/) traces test cases against each numbered requirement; UAT signs off against acceptance criteria attached to each requirement; the SOW's acceptance language references the FR/NFR set as the basis for "delivered."

The output is a numbered, structured document — sometimes a separate FR document and a separate NFR document, sometimes one consolidated catalogue — typically 30–80 pages on a mid-sized engagement. The document is signed by the named client signatory before any non-trivial development begins. Without this artifact, every QA cycle, every UAT meeting, and every change-control conversation runs on whoever has the loudest memory of what was discussed.

## Best practices

**Make every requirement atomic, testable, and traceable.** Three properties define a usable requirement:

- **Atomic** — one requirement covers one behaviour or one quality attribute. "The user can register, log in, and reset their password" is three FRs, not one. Compound requirements hide partial-completion (the user can register and log in, but cannot reset) and produce sign-off arguments about whether the requirement is met.
- **Testable** — the requirement can be verified in finite time by a third party. "The system shall be secure" is not testable; "All API endpoints reject requests with no Authorization header within 50ms with HTTP 401" is. Untestable requirements are aspirational, not acceptable.
- **Traceable** — the requirement is numbered, source-attributed (which workshop decision, interview theme, or prototype finding produced it), and downstream-linked (which user journey, which test cases). Traceability lets the team answer "why is this in the spec?" and "what breaks if we drop it?" without re-litigating discovery.

The atomic-testable-traceable trinity is the core discipline of FR/NFR work. If a requirement fails any of the three, it is not yet a requirement — it is a wish.

**Use a consistent statement template.** Every FR follows the same shape: "FR-N: \<actor\> can \<action\> when \<condition\>, resulting in \<observable outcome\>." Every NFR follows the same shape: "NFR-N: Under \<defined load or condition\>, \<measurable attribute\> is \<numeric threshold\>." Templated requirements are easier to write, easier to review, and dramatically easier to test. The first half-day of FR/NFR work is rarely the writing — it is converging on a template the engagement uses consistently.

**Number requirements once and never renumber.** Requirements get numbered (FR-1, FR-2, NFR-1) at first authoring and the numbers persist for the engagement lifetime — even when requirements are deprecated, deferred, or superseded. Deprecated requirements get marked deprecated; new requirements get the next available number. Renumbering invalidates every traceability matrix, test plan, and change-control entry that references the old numbers. The cost of stable numbering is a slightly noisy document; the cost of renumbering is days of correlation work.

**Source-attribute every requirement.** Each FR/NFR cites the discovery input that drove it: a workshop decision, an interview theme, a prototype finding, an explicit SOW provision. "FR-12: ... [Source: Workshop 2 decision; sponsor approved 2026-04-15]." Source attribution prevents the silent drift where requirements appear in the doc that no one ratified, and it makes the change-control conversation tractable when the client says "where did this come from?"

**Define explicit acceptance criteria per requirement.** Each FR has acceptance criteria attached: the specific test or observation that confirms the requirement is met. "FR-12: A logged-in admin can revoke an active session within 2 seconds. Acceptance: Test case TC-104 — admin clicks 'revoke' on an active session and the session is invalidated; subsequent requests using the revoked token return HTTP 401 within 2 seconds at the 95th percentile across 100 trials." Acceptance criteria are what UAT actually verifies; FRs without explicit acceptance criteria devolve into "looks good to me" sign-offs that come unstuck.

:::tip
Apply the atomic-testable-traceable trinity in review, not just in authoring. A 60-minute review session that picks 10 representative requirements at random and confirms each meets all three properties surfaces systemic drafting problems faster than reviewing every requirement linearly. Drafting drifts; sampled review keeps the standard honest across hundreds of requirements.
:::

:::caution
Vague NFRs are the most common requirements pitfall. "The system shall be fast." "The UI shall be intuitive." "The system shall be secure." None of these is testable; none can be signed off; none can be a basis for delivery acceptance. Replace each with a measurable threshold ("p95 page load under 800ms at 100 concurrent users"; "task completion in 5-user moderated tests with 0 critical errors"; "all OWASP Top 10 categories addressed in security review with documented remediations or accepted residuals"). If you cannot specify the threshold during requirements work, the team cannot deliver against it during build.
:::

**Run requirements review with engineers, designers, and QA in the room.** A requirements doc reviewed only by the client and the delivery lead misses the buildability signals that engineers catch (this FR depends on a system we don't control), the design conflicts that designers catch (this requirement contradicts the navigation pattern we agreed last week), and the testability gaps that QA catches (this NFR has no measurable threshold). One half-day cross-functional review session catches what individual reviews miss.

**Anti-patterns to avoid:**

- **The novel-form requirements doc.** Requirements written as flowing prose without numbering or template. Unreviewable, untestable, untraceable. Every reviewer extracts a different mental model.
- **The marketing-copy NFR.** "Best-in-class performance," "industry-leading security," "world-class accessibility." These are sales claims, not requirements. Replace with thresholds.
- **The unbounded list.** A requirements doc with 600 FRs, most of which were captured during workshops without prioritisation. Engineering treats most as low-priority and the team builds against the ones that look hardest. The fix is the prioritisation discipline from discovery — only requirements categorised as "in scope for this engagement" enter the FR document.

## Desired outcomes

By the end of FR/NFR authoring, the engagement has:

- A numbered, atomic, testable FR list covering every in-scope behaviour, with each entry source-attributed to a discovery input and downstream-linked to user journey and test plan
- A numbered NFR list covering performance, scalability, accessibility, security, observability, and any client-specific constraints (regulatory, compliance, integration), each with measurable thresholds
- A cross-reference matrix mapping each FR/NFR to the relevant user journey or feature area, used during development planning and QA test design
- An agreed set of acceptance criteria per FR/NFR — the specific verification each requirement must pass before being considered delivered
- A traceability backbone that flows forward into [QA's test strategy](/qa-testing/test-strategy-planning/) and SOW acceptance language, and backward into the [requirements workshop](/discovery/requirements-workshops/) decisions log
- A signed FR/NFR document accepted by the named client signatory as the basis for development and acceptance

## What the industry does

**ISO/IEEE-formal vs. agile user-story styles.** Formal-style agencies follow ISO/IEC/IEEE 29148 or similar requirements engineering standards: numbered shall-statements, structured templates, explicit precondition/postcondition/exception clauses, and formal traceability matrices. The artifact is heavyweight, procurement-defensible, and required in regulated industries (healthcare, defence, infrastructure, financial services). Agile-style agencies write requirements as user stories with acceptance criteria embedded ("As a logged-in admin, I can revoke an active session, so that I can manage account access. Acceptance: ..."). The artifact is leaner, lives in the issue tracker, and pairs naturally with sprint planning. Trade-off: formal style produces durable artifacts that survive team rotation and contractual disputes; agile style produces lighter artifacts that can drift if not actively maintained. Most modern software agencies trend agile-style for the FRs and formal-style for NFRs (where measurable thresholds matter). Pure-formal style survives in regulated work; pure-agile style survives in continuous-discovery product engagements.

**Single-document vs. tooling-driven catalogues.** Some agencies produce a single Word, PDF, or Markdown FR/NFR document — easy to circulate, easy to sign, easy to lose. Others maintain requirements in a tool — Jira, Polarion, DOORS, Azure DevOps, Notion — with each requirement as a tracked item that links to test cases, code commits, and review comments. Tool-based catalogues are better for traceability and live engagements; documents are better for procurement, sign-off rituals, and engagements where the client cannot or will not access the agency's tooling. The pragmatic middle path: maintain requirements in a tool during the engagement and export a snapshot document for sign-off events. Pure-document approaches survive in fixed-price, single-handoff engagements; pure-tooling dominates in continuous-engagement and retainer-managed work.

**Sponsor-signs-off vs. cross-functional acceptance models.** Sponsor-only sign-off accepts the FR/NFR document on a single signature from the named client signatory. Fast, defensible, simple. Cross-functional acceptance requires sign-off from the sponsor, the client's technical lead, the client's compliance officer (where applicable), and sometimes a named end-user representative. Slower but produces dramatically stronger buy-in across the client organisation and reduces the surface area for "but I never saw this" disputes during build. Sponsor-only is the default in small and mid-size engagements; cross-functional acceptance is dominant in enterprise and regulated work where multiple stakeholders carry sign-off authority and discovering this fact post-signature is a real risk.
