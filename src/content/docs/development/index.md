---
title: Development
description: The agency's delivery mechanics — repo, DevOps, backend, frontend, testing, review, security, performance, and documentation as a deliverable.
type: phase-overview
phase: development
order: 1
lastUpdated: 2026-05-03
status: v1
---

## What happens here

Development is the phase that converts the signed Requirements & Design package into running, tested, documented software. It is the longest and most expensive phase in the lifecycle, typically 40%–70% of the engagement budget. By the time development starts, [requirements](/requirements-design/functional-nonfunctional-requirements/) are atomic and testable, [designs](/requirements-design/ux-ui-design/) are signed, [architecture](/requirements-design/system-architecture/) is documented as ADRs, and [infrastructure](/requirements-design/infrastructure-design/) has a Day-1 readiness checklist marked green. Anything missing from those inputs gets discovered as friction during build.

The phase contains nine sub-sections grouped into four functional buckets:

**Plumbing** — the day-zero work that makes the team productive:

1. **[Repository Structure & Branching Strategy](/development/repository-structure-branching/)** — repo layout, branch model, commit conventions, mainline protection.
2. **[DevOps & CI/CD](/development/devops-ci-cd/)** — pipeline stages, secrets handling, environment promotion, deployment runbooks.

**Build** — the actual code production:

3. **[Backend Development](/development/backend-development/)** — APIs, data model, business logic, observability hooks.
4. **[Frontend Development](/development/frontend-development/)** — UI implementation against the signed design system, accessibility bake-in, component-library discipline.

**Quality-in-dev** — the practices that prevent QA from finding everything:

5. **[Developer Testing](/development/developer-testing/)** — unit and integration tests written by engineers as part of build.
6. **[Code Review](/development/code-review/)** — review-before-merge as both quality gate and knowledge transfer.
7. **[Secure Development Practices](/development/secure-development-practices/)** — secrets hygiene, dependency management, threat modelling proportional to risk.
8. **[Performance Engineering](/development/performance-engineering/)** — performance budgets tied to NFRs, regression detection in CI.

**Lifecycle** — the artifact that travels with the system after the agency leaves:

9. **[Technical Documentation](/development/technical-documentation/)** — architecture reference, API reference, runbooks, onboarding guides — produced as a deliverable, not as a retrospective exercise.

Participants are the agency's delivery lead, technical lead, two to twelve engineers depending on engagement size (mid-sized engagements typically run a 4–6 person team), a DevOps or platform engineer (sometimes shared across engagements), and named client engineers on handoff-track engagements. Duration depends on engagement size and team velocity but typically runs 6–24 weeks. The output hands off to [QA / Testing](/qa-testing/), where the build is exercised against the signed requirements before deployment.

## Best practices

**Treat the four buckets as one phase, not four parallel projects.** Plumbing without quality-in-dev produces a fast pipeline that ships broken code; build without lifecycle produces software the client cannot maintain post-handoff; quality without plumbing produces engineers who write tests that no pipeline runs. The four buckets compound — strength in one is wasted without competence in the others. Engagements that under-invest in any bucket pay multiples of the saved cost during QA, launch, or maintenance.

**Make documentation a parallel deliverable, not a closing task.** Technical documentation written in the last sprint of development is documentation written under deadline pressure by engineers who have rotated mentally to the next engagement. The result is shallow, error-prone, and unread. Docs written incrementally — every API endpoint documented as it ships, every runbook entry written as the runbook need is discovered — produce documentation the client actually uses. Documentation is a deliverable in this phase, not a retrospective exercise.

**Run quality gates as automated CI checks, not human review of every concern.** A team that requires human review for every commit cannot scale; a team that has CI enforce the mechanical concerns (lint, format, type, security scan, test coverage threshold, performance budget) frees human review to focus on the design, correctness, and clarity concerns where humans add value. The gates should run on every PR, fail loudly, and be treated as non-negotiable except by explicit override with rationale recorded.

**Define done at the merge level, not the sprint level.** A feature is done when it is merged to mainline with passing tests, completed code review, updated documentation, and any operational concerns (alerts, dashboards, runbook entries) in place. Sprint-end "done" definitions that defer testing or documentation to a later sprint produce work that is never actually finished. The merge gate is the contract; if the team cannot meet it, the team is signalling that the work was incorrectly scoped.

:::tip
Set up the Day-1 development environment so a new engineer goes from `git clone` to a running, testable system in under 30 minutes. Engagements with multi-day onboarding paths waste a non-trivial fraction of every new engineer's first week and signal a project where the plumbing was under-invested. The investment in onboarding speed pays back across every team rotation, every new client engineer, and every handoff conversation.
:::

:::caution
Do not treat technical documentation as a write-it-after activity. Documentation produced in the closing days of development is the most-skipped, lowest-quality artifact in agency engagements. The client inherits a system they cannot operate; the agency answers handoff questions for months past invoice. Document as you build — every architecture decision (ADR), every API endpoint, every runbook procedure. The cost during build is small; the cost of producing it later is multiples and the quality is dramatically worse.
:::

**Carry the FR/NFR traceability through to merged commits.** Each merged PR references the FR or NFR it implements; each FR has commits or PRs traceable against it. Engineering managers can answer "is FR-37 done" by querying the issue tracker rather than asking the engineer who built it. Traceability is what lets QA test against the FR set, lets UAT verify against acceptance criteria, and lets the agency defend the engagement at sign-off.

**Build the QA handoff into the development cadence.** QA does not start when development ends. QA reviews the FR/NFR set during requirements work, builds the test plan in parallel with development, and ideally has access to staging environments throughout build. Engagements with a hard hand-off-then-test wall produce QA cycles that find architectural issues that should have been caught in week 2. The QA handoff is a continuous conversation, not a one-time event.

## Desired outcomes

By the end of Development, the engagement has the following in place:

- A completed build against every in-scope FR and NFR, with traceability between merged commits and the requirements they implement
- A green CI pipeline running automated lint, format, type, security scan, test, and performance checks on every commit, with documented gates and human-override rationale where applied
- Internal quality gates cleared: passing test suite, code-review-before-merge enforced, no known critical or high-severity security issues, performance budgets met
- Technical documentation produced as a deliverable: architecture reference (ADRs), API reference, operational runbooks, onboarding guide, known-issues log
- A QA-ready handoff package: deployed staging environment, test data, test accounts, FR/NFR traceability, and a documented set of "out-of-scope" or "deferred" items the client has accepted
- A named delivery team prepared to support QA cycles, fix triaged defects, and respond to UAT findings without context loss

## What the industry does

**Feature-factory vs. high-craft agency approaches.** Feature-factory agencies optimise for throughput — engineers are interchangeable, work is decomposed into uniform tickets, velocity is the primary metric. The agency ships against the FR/NFR set in the shortest practical time and at the lowest practical cost per feature. Trade-off: high throughput, lower per-engineer engagement, higher technical debt, weaker handoff documentation. High-craft agencies optimise for quality — named engineers own components, code review is rigorous, documentation is treated as a deliverable, refactoring is built into the cadence. Trade-off: higher cost per feature, lower throughput, but durable systems that survive handoff and post-launch evolution. Feature-factory dominates in commodity engagements (admin tools, marketing sites, well-understood platform implementations); high-craft survives in product engagements, regulated work, and longstanding agency-client relationships where the system's longevity matters more than its initial cost. Most agencies sit somewhere on the spectrum; the discipline is being honest about which model the engagement is being delivered against.

**TDD-strict vs. test-as-you-go vs. test-after cultures.** TDD-strict agencies write tests before any production code — red, green, refactor — as the dominant discipline. Test-as-you-go agencies write tests alongside production code in the same commit but without strict TDD ordering. Test-after agencies write production code first and add tests at PR time or at story-end. TDD-strict produces the highest test coverage and the cleanest interfaces but is harder to staff; test-as-you-go is the modern default — most engineers can do it consistently and it produces good-enough coverage; test-after is widespread despite its downsides because it survives sprint pressure better than the alternatives. The test culture is a function of team composition, not a moral choice — picking a discipline the team cannot deliver against produces the same results as having no discipline.

**Trunk-based vs. GitFlow-style branching cultures.** Trunk-based agencies merge small commits to mainline frequently (multiple times per day per engineer) with feature flags for in-progress work. Optimises for fast feedback, continuous integration, and minimal merge conflicts. GitFlow-style agencies maintain long-running develop and feature branches with periodic merges to mainline. Optimises for releases-as-events and explicit gating between feature and production. Trunk-based dominates in modern agencies and in product engineering; GitFlow survives in engagements where releases are external events (regulated industries, B2B platforms with formal release calendars) and where small commits to mainline are operationally infeasible. The choice is set during the [Repository Structure](/development/repository-structure-branching/) sub-section and constrains the rest of the development practices.
