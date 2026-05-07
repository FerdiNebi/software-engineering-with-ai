---
title: Deliverables across the lifecycle
description: A roll-up of every named deliverable agency engagements produce, organised by phase — what the agency owes the client at each gate and where on the site it is specified.
lastUpdated: 2026-05-07
---

The complete list of named deliverables an agency engagement produces, organised by lifecycle phase. Each row points to the page where the deliverable is specified in detail. Use this as a reference when scoping a new engagement, drafting an SOW, or auditing whether an in-flight engagement is on track to produce what it owes.

The list is opinionated — it reflects the deliverables the site treats as load-bearing, not every artefact every agency has ever produced. Engagements smaller than mid-market may collapse several rows into one; engagements in regulated industries may need additional artefacts beyond what is listed here.

## Pre-Sales & Business Development

| Deliverable | Specified at |
|---|---|
| Qualified-lead record (BANT outcome, recommended path) | [Lead Qualification & Scoping Calls](/pre-sales/lead-qualification-scoping-calls/) |
| Written proposal (outcome-oriented sales document) | [Proposal Writing](/pre-sales/proposal-writing/) |
| Signed Statement of Work (SOW) | [SOW & Contract Drafting](/pre-sales/sow-contract-drafting/) |
| Pricing commitment with documented methodology | [Pricing & Estimation](/pre-sales/pricing-estimation/) |
| Signed NDA, MSA, and DPA where applicable | [NDA / MSA / DPA — the legal stack](/pre-sales/legal-stack-nda-msa-dpa/) |

## Discovery

| Deliverable | Specified at |
|---|---|
| Stakeholder interview synthesis | [Stakeholder Interviews](/discovery/stakeholder-interviews/) |
| Workshop summary, decisions log, parking lot | [Requirements Workshops](/discovery/requirements-workshops/) |
| Prototype or POC findings (if commissioned) | [Prototyping & Proof of Concept](/discovery/prototyping-proof-of-concept/) |
| Refined cost estimate with confidence band and commitment path | [Estimation & Cost Commitment](/discovery/estimation-cost-commitment/) |
| Signed discovery deliverables package: prioritised feature list and constraint catalogue, scope statement, risk register, decisions log, handoff package | [Discovery Deliverables & Sign-Off](/discovery/discovery-deliverables-signoff/) |

## Requirements & Design

| Deliverable | Specified at |
|---|---|
| Numbered, atomic, testable, traceable FR/NFR document | [Functional & Non-Functional Requirements](/requirements-design/functional-nonfunctional-requirements/) |
| UX design specification: wireframes, design system, component library, interaction patterns, accessibility specification | [UX/UI Design](/requirements-design/ux-ui-design/) |
| Architecture decision record (ADR) collection, component diagram, data-flow diagram, integration map | [System Architecture](/requirements-design/system-architecture/) |
| Infrastructure design and Day-1 readiness checklist | [Infrastructure Design](/requirements-design/infrastructure-design/) |

## Delivery

### Project Management stream

| Deliverable | Specified at |
|---|---|
| Mobilization document (RACI, sprint cadence, tooling stack, named stakeholders, escalation paths) | [Delivery Mobilization & Kickoff](/delivery/project-management/delivery-mobilization-kickoff/) |
| Sprint plans and outcomes (one per sprint) | [Sprint Planning & Cadence](/delivery/project-management/sprint-planning-cadence/) |
| Refined and prioritised backlog (always 1–2 sprints ahead) | [Backlog Management](/delivery/project-management/backlog-management/) |
| Sprint-level estimates and slicing artefacts (vertical INVEST-conformant slices) | [Estimation & Sprint Slicing](/delivery/project-management/estimation-sprint-slicing/) |
| Status reports at agreed cadence (typically weekly written + monthly steering) | [Status Reporting & Stakeholder Communication](/delivery/project-management/status-reporting-stakeholder-communication/) |
| Change log: every scope change, impact assessment, client decision, and link to change order | [Scope Control & Change Management](/delivery/project-management/scope-control-change-management/) |
| Risk register at every sprint boundary | [Risk & Issue Management](/delivery/project-management/risk-issue-management/) |
| Retro outputs (one per sprint) | [Retrospectives](/delivery/project-management/retrospectives/) |

### Development stream

| Deliverable | Specified at |
|---|---|
| Repository structure, branching strategy, commit conventions, mainline protection | [Repository Structure & Branching](/delivery/development/repository-structure-branching/) |
| CI/CD pipeline with documented gates and deployment runbooks | [DevOps & CI/CD](/delivery/development/devops-ci-cd/) |
| Backend implementation: APIs, data model, business logic, observability hooks | [Backend Development](/delivery/development/backend-development/) |
| Frontend implementation against signed design system, accessibility bake-in | [Frontend Development](/delivery/development/frontend-development/) |
| Unit and integration test suite | [Developer Testing](/delivery/development/developer-testing/) |
| Code-review-before-merge enforced; PR records as the audit trail | [Code Review](/delivery/development/code-review/) |
| Secrets hygiene, dependency management, threat modelling, security gates passed | [Secure Development Practices](/delivery/development/secure-development-practices/) |
| Performance budgets met, regression detection in CI | [Performance Engineering](/delivery/development/performance-engineering/) |
| Architecture reference (ADRs), API reference, runbooks, onboarding guide, known-issues log | [Technical Documentation](/delivery/development/technical-documentation/) |

### QA / Testing stream

| Deliverable | Specified at |
|---|---|
| Test strategy and test plan tied to FR/NFR set, with traceability matrix | [Test Strategy & Planning](/delivery/qa-testing/test-strategy-planning/) |
| Functional and regression test cycles, automation suite, defect log | [Functional & Regression Testing](/delivery/qa-testing/functional-regression-testing/) |
| Performance test results against NFR thresholds | [Performance Testing](/delivery/qa-testing/performance-testing/) |
| Security test results: SAST, DAST, dependency scan, third-party pen-test where applicable | [Security Testing](/delivery/qa-testing/security-testing/) |
| Accessibility test results, VPAT or accessibility conformance report, accessibility statement | [Accessibility Testing](/delivery/qa-testing/accessibility-testing/) |
| UAT sign-off from named client signatory, deferred-bugs list with sign-off | [User Acceptance Testing](/delivery/qa-testing/user-acceptance-testing/) |

## Deployment / Launch

| Deliverable | Specified at |
|---|---|
| Provisioned production environments, DNS, certificates, secrets, monitoring connectivity | [Infrastructure Provisioning](/deployment-launch/infrastructure-provisioning/) |
| Migration plan, cutover runbook, rehearsal records, signed reconciliation report | [Data Migration & Cutover](/deployment-launch/data-migration-cutover/) |
| Live production system, smoke-test pass record, archived launch evidence | [Deployment Execution & Smoke Testing](/deployment-launch/deployment-execution-smoke-testing/) |
| Operational dashboards, alerts, runbook-linked notifications, baseline metrics | [Monitoring & Observability Setup](/deployment-launch/monitoring-observability-setup/) |
| Signed handoff package: credentials, documentation, training, acceptance | [Client Handoff & Launch Checklist](/deployment-launch/client-handoff-launch-checklist/) |

## Maintenance & Retainer

| Deliverable | Specified at |
|---|---|
| Signed hypercare close-out, complete hypercare ticket log | [Hypercare & Warranty Period](/maintenance-retainer/hypercare-warranty/) |
| Bug-fix log, patch cadence record, dependency-update history | [Bug Fixes & Patch Management](/maintenance-retainer/bug-fixes-patch-management/) |
| Feature-request intake log, mini-SOWs, change orders for substantial work | [Feature Iteration](/maintenance-retainer/feature-iteration/) |
| Severity-classified incident log, post-incident reviews, learning log, tabletop-exercise records | [Incident Response](/maintenance-retainer/incident-response/) |
| Signed retainer agreement: hours/capacity, SLA tiers, exclusions, renewal calendar | [Retainer Structure & SLAs](/maintenance-retainer/retainer-structure-slas/) |
| Signed final acceptance, paid final invoice, lessons-learned artefact, post-implementation review report | [Engagement Closeout & Post-Implementation Review](/maintenance-retainer/engagement-closeout/) |

## Cross-cutting

These artefacts are produced or maintained at multiple lifecycle phases, not at a single one:

| Artefact | Purpose |
|---|---|
| Risk register | Lives across the engagement; updated at every sprint boundary by PM, surfaced at sign-off events, hands off to retainer at engagement close |
| Decisions log | Every workshop, ADR, and change order contributes; the long-term record of "why we chose this" |
| Cross-phase links | Every page on this site links forward and backward to its lifecycle neighbours; the artefact is the readable site itself |
