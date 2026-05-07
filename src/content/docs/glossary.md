---
title: Glossary
description: Defined terms used across the agency / consulting delivery lifecycle.
lastUpdated: 2026-05-07
---

A reference for the agency-specific jargon used throughout this site. Listed alphabetically.

## A

**Acceptance criteria.** The specific verification each FR or NFR must pass before being considered delivered. Lives on the FR/NFR document, exercised by [QA](/delivery/qa-testing/) and [UAT](/delivery/qa-testing/user-acceptance-testing/). See [FR/NFR](/requirements-design/functional-nonfunctional-requirements/).

**ADR (Architecture Decision Record).** A short, decision-focused document — typically one page — capturing context, decision, and consequences for a single architectural choice. Lives in the repo (`/docs/adr/`) alongside the code, numbered (ADR-001, ADR-002), durable through team rotation. See [System Architecture](/requirements-design/system-architecture/).

**ADA (Americans with Disabilities Act).** US civil rights law expanded by case law to cover digital accessibility. Drives the contractual case for [WCAG](#w) conformance on US-facing systems. See [Accessibility Testing](/delivery/qa-testing/accessibility-testing/).

## B

**BANT (Budget, Authority, Need, Timeline).** The classic qualification axes used during the [scoping call](/pre-sales/lead-qualification-scoping-calls/) to filter serious prospects from noise. A lead failing two or more axes is a time sink.

**BAA (Business Associate Agreement).** Required under HIPAA for any agency engagement touching US healthcare data. Names the data, the security measures, and the breach-notification obligations. Attaches to the [legal stack](/pre-sales/legal-stack-nda-msa-dpa/).

**Big-bang launch / cutover.** Deploying or migrating all users at one named moment, with rollback as the only contingency. Contrast: canary, parallel-run, phased. See [Deployment Execution](/deployment-launch/deployment-execution-smoke-testing/) and [Data Migration & Cutover](/deployment-launch/data-migration-cutover/).

**Blameless review.** Post-incident review process that focuses on system and process rather than individual fault. The modern industry standard, drawn from Google SRE practice. See [Incident Response](/maintenance-retainer/incident-response/).

## C

**Canary launch.** Deploying to a small subset of users first (5%, then 25%, then 100%) with monitoring at each step. The lower-risk alternative to big-bang. See [Deployment Execution](/deployment-launch/deployment-execution-smoke-testing/).

**Change order.** A formal SOW amendment executed during delivery when scope, timeline, or pricing materially change. Distinct from the *operational* change-control flow that runs the backlog impact assessment — the change order is the *legal* artefact. See [Legal Stack](/pre-sales/legal-stack-nda-msa-dpa/).

**Closeout.** The formal ritual that ends a fixed-price engagement: final acceptance, final invoice, lessons-learned, post-implementation review. See [Engagement Closeout](/maintenance-retainer/engagement-closeout/).

**Cutover.** The choreographed transition where the legacy system is retired and the new system takes ownership of live data and users at a named moment. See [Data Migration & Cutover](/deployment-launch/data-migration-cutover/).

## D

**DAST (Dynamic Application Security Testing).** Black-box scanning of a running system for security vulnerabilities. Pairs with [SAST](#s). See [Security Testing](/delivery/qa-testing/security-testing/).

**Definition of Done (DoD).** The agreed bar a story must meet to be considered complete: code merged, tests green, story acceptance criteria met by QA, demo recorded, change log updated by PM. See [Sprint Planning & Cadence](/delivery/project-management/sprint-planning-cadence/).

**Definition of Ready (DoR).** The agreed bar a story must meet before it can enter a sprint: requirement clear, acceptance criteria written, dependencies identified, sized. See [Backlog Management](/delivery/project-management/backlog-management/).

**DDQ (Due Diligence Questionnaire).** A pre-engagement document the client uses to evaluate the agency — financial information, security policies, contractual obligations, personnel, regulatory compliance. Common in enterprise procurement.

**Discovery kickoff.** The small mobilization event when the *discovery* SOW is signed — 1–2 day allocation for a 2–3 person team. Distinct from [delivery mobilization](/delivery/project-management/delivery-mobilization-kickoff/).

**DPA (Data Processing Agreement).** Required under GDPR / UK GDPR / many state privacy laws when the agency processes personal data on the client's behalf. Names data categories, processing purpose, security measures, sub-processors, breach notification. See [Legal Stack](/pre-sales/legal-stack-nda-msa-dpa/).

## E

**EAA (European Accessibility Act).** EU legislation in force since 2025-06-28 expanding accessibility obligations to private-sector commerce, banking, transport, and consumer-facing platforms. Drives WCAG 2.2 AA as the practical bar for systems serving EU users. See [Accessibility Testing](/delivery/qa-testing/accessibility-testing/).

**Engagement.** The named, contracted scope of work agreed under a single SOW. Distinct from "the relationship" (which spans multiple engagements under one MSA).

## F

**Fixed-price.** Commercial model where the agency commits to a defined scope at a defined price; the agency carries scope-overrun risk. Contrast: T&M. Drives heavier [pre-sales scoping](/pre-sales/pricing-estimation/), explicit [change-control](/delivery/project-management/scope-control-change-management/), and contingency buffering.

**FR (Functional Requirement).** A numbered, atomic statement of what the system does. "FR-12: A logged-in admin can revoke an active session." See [FR/NFR](/requirements-design/functional-nonfunctional-requirements/).

## H

**Hypercare.** The 2–4 week elevated-response window between launch and the start of the formal retainer. See [Hypercare & Warranty Period](/maintenance-retainer/hypercare-warranty/).

## I

**Incident commander.** The single named person who owns coordination, communication, and resolution decisions during a Sev-1 or Sev-2 [incident](/maintenance-retainer/incident-response/). Often *not* the engineer fixing the issue.

**INVEST.** A slicing checklist for backlog items: Independent, Negotiable, Valuable, Estimable, Small, Testable. See [Estimation & Sprint Slicing](/delivery/project-management/estimation-sprint-slicing/).

## L

**Lessons-learned session.** A structured working session run with the client at engagement closeout, capturing what worked, what did not, and what either party would do differently. Distinct from sprint retro and post-incident review. See [Engagement Closeout](/maintenance-retainer/engagement-closeout/).

## M

**Mobilization.** The activity that turns a signed delivery SOW into a team that can ship — allocation, account setup, RACI, kickoff. See [Delivery Mobilization & Kickoff](/delivery/project-management/delivery-mobilization-kickoff/).

**MSA (Master Services Agreement).** The umbrella legal contract between agency and client, signed once and reused across every engagement. Sets liability caps, IP terms, governing law, dispute resolution. See [Legal Stack](/pre-sales/legal-stack-nda-msa-dpa/).

## N

**NDA (Non-Disclosure Agreement).** Signed before the scoping call when confidential information needs to be exchanged. Mutual is the professional default. See [Legal Stack](/pre-sales/legal-stack-nda-msa-dpa/).

**NFR (Non-Functional Requirement).** A numbered, measurable statement of how well the system performs a quality attribute. "NFR-4: p95 page response under 800ms at 100 concurrent users." See [FR/NFR](/requirements-design/functional-nonfunctional-requirements/).

## P

**Parallel-run cutover.** Running both legacy and new systems simultaneously for a defined period after launch, with reconciliation. The lowest-risk migration model. See [Data Migration & Cutover](/deployment-launch/data-migration-cutover/).

**PIR (Post-Implementation Review).** A 30–90-day after-launch review assessing whether the system delivered the *business* outcomes the engagement was commissioned for. See [Engagement Closeout](/maintenance-retainer/engagement-closeout/).

**Post-incident review (post-mortem, learning review).** A blameless review run within 5–10 business days of resolution for every Sev-1 and Sev-2 incident. See [Incident Response](/maintenance-retainer/incident-response/).

## R

**RACI (Responsible, Accountable, Consulted, Informed).** A decision-rights matrix used at [delivery mobilization](/delivery/project-management/delivery-mobilization-kickoff/) to clarify who does what for the engagement's named decisions.

**Retainer.** A signed agreement covering ongoing post-launch work — hours-bucket, capacity-allocation, SLA-tiered, or blended structures. See [Retainer Structure & SLAs](/maintenance-retainer/retainer-structure-slas/).

**Runbook.** The step-by-step execution guide for an operational procedure (deployment, cutover, incident response). Author as an executable script where possible, not as prose.

## S

**SAST (Static Application Security Testing).** Scanning source code for security vulnerabilities at build time. Pairs with [DAST](#d). See [Security Testing](/delivery/qa-testing/security-testing/).

**Sev-1 / Sev-2 / Sev-3 / Sev-4.** Severity classification for production incidents driving response intensity, communication cadence, and SLA commitments. See [Incident Response](/maintenance-retainer/incident-response/).

**SOW (Statement of Work).** The project-specific contract executed under the MSA. One per engagement. Names scope, deliverables, timeline, payment, acceptance criteria, change-control. See [SOW & Contract Drafting](/pre-sales/sow-contract-drafting/).

**Sprint.** The fixed-length time-box (typically 1–2 weeks) inside which the team plans, builds, tests, demos, and reflects. The unit of agency delivery cadence. See [Sprint Planning & Cadence](/delivery/project-management/sprint-planning-cadence/).

## T

**T&M (Time-and-materials).** Commercial model where the agency bills against actual hours worked at agreed rates; the client carries scope-overrun risk. Contrast: fixed-price. Drives lighter pre-sales scoping and more flexible delivery practice.

**Trunk-based development.** Branching model where engineers merge small commits to mainline frequently, often multiple times per day, with feature flags for in-progress work. Contrast: GitFlow. See [Repository Structure & Branching](/delivery/development/repository-structure-branching/).

## U

**UAT (User Acceptance Testing).** Client-executed verification of the signed acceptance criteria. The formal gate to deployment. See [User Acceptance Testing](/delivery/qa-testing/user-acceptance-testing/).

## V

**VPAT (Voluntary Product Accessibility Template).** A document declaring a system's WCAG conformance posture, criterion by criterion. Originally US-federal, now widely adopted. See [Accessibility Testing](/delivery/qa-testing/accessibility-testing/).

## W

**Warranty period.** The contractual window after launch during which the agency fixes defects against signed acceptance criteria at no additional charge. Typically the first 2–4 weeks of the [hypercare](/maintenance-retainer/hypercare-warranty/) window.

**WCAG (Web Content Accessibility Guidelines).** The accessibility specification used as the contractual conformance bar for digital systems. WCAG 2.2 Level AA is the practical default in regulated and enterprise work. See [Accessibility Testing](/delivery/qa-testing/accessibility-testing/).
