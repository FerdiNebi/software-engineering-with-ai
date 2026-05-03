---
title: QA / Testing
description: Validating the build against signed requirements — strategy, functional and regression cycles, performance, security, UAT, and the path to launch.
type: phase-overview
phase: qa-testing
order: 1
lastUpdated: 2026-05-03
status: v1
---

## What happens here

QA / Testing is the phase that exercises the build against the signed requirements before deployment. It runs system-level testing that complements (rather than replaces) the [developer testing](/development/developer-testing/) that engineers wrote during build. The signed FR/NFR set is the contract; QA's job is to verify the deliverable meets it. Engagements that under-invest in QA discover at UAT that the build does not match what was sold.

The phase contains five sub-sections:

1. **[Test Strategy & Planning](/qa-testing/test-strategy-planning/)** — converts the signed FR/NFR set into a test strategy (scope, approach, entry/exit criteria) and a test plan (what gets executed when).
2. **[Functional & Regression Testing](/qa-testing/functional-regression-testing/)** — verifies behaviour against requirements (functional) and against prior-passing state (regression), with the automation/manual mix sized to the engagement.
3. **[Performance Testing](/qa-testing/performance-testing/)** — exercises the system at the load profiles the NFRs commit to, validating budgets that [development](/development/performance-engineering/) maintained throughout build.
4. **[Security Testing](/qa-testing/security-testing/)** — applies SAST, DAST, dependency scanning, and (for higher-risk engagements) third-party penetration testing against the codebase and deployed system.
5. **[User Acceptance Testing](/qa-testing/user-acceptance-testing/)** — client-executed verification of the signed acceptance criteria, the gate to deployment.

Participants are a QA lead (in agencies with a QA discipline), test engineers (manual or automation specialists), the agency's delivery lead, and the client's named UAT participants. Duration depends on engagement size and test-cycle scope but typically runs 1–6 weeks. The phase hands off forward to [Deployment / Launch](/deployment-launch/) once UAT is signed off and the bug-and-defect list is either closed or explicitly deferred with client agreement.

## Best practices

**Treat the FR/NFR set as the test contract.** Every test case traces back to a numbered FR or NFR in the signed requirements document. The traceability matrix is QA's primary artifact — a mapping of each requirement to the test cases that verify it. Without traceability, QA cycles produce ad-hoc bug lists that the team and client cannot agree are signal-vs-noise; with traceability, every defect is attached to a specific contractual commitment, and triage becomes a structured conversation.

**Triage every finding into the right channel.** QA cycles produce three kinds of findings:

- **Bugs** — the build does not meet a signed requirement. Routed to development for fix during the engagement, no change-control needed.
- **Enhancement requests** — the client wants something the requirements did not specify. Routed to change-control, priced separately, scoped against engagement budget.
- **Requirements-ambiguity findings** — the requirement could be interpreted multiple ways and the implementation chose differently than the client expected. Routed to a working session with the requirements author and client to resolve, with the resolution captured as a requirements clarification.

Engagements that triage everything as a "bug" inflate the defect list, miss change-control opportunities, and produce sign-off arguments. Engagements that triage with discipline maintain a credible bug list the client trusts.

**Run cycles in parallel with the last sprint of development, not after it.** A hard development-then-QA wall produces QA cycles that find architectural issues that should have been caught in week 4. The discipline is overlap: QA reviews the FR/NFR set during requirements work, builds the test plan during development, gets staging access throughout build, and runs first cycles on completed features as they ship — not as a single block at the end. Parallel cycles compress the calendar and surface defects when fixing them is cheap.

**Define UAT entry criteria in writing.** UAT requires the build to be in a state where client-side testing is productive — not a dumping ground for incomplete features the development team hopes the client will accept. Documented entry criteria: all critical-path FRs implemented and developer-tested, all blocker bugs from internal cycles closed, deployment in a stable staging environment, test data and accounts provisioned, named client participants briefed. UAT cycles entered without satisfying entry criteria become unproductive — the client finds bugs the agency already knew about, and the cycle wastes both teams' time.

:::caution
Do not let QA become the place where late-found requirements ambiguities become bugs. The requirement said "users can manage their account"; the implementation built profile editing; the client expected role assignment. This is not a bug — it is a requirement that was not specified at the level of detail QA can verify. The fix is to address the requirement at requirements-clarification level, not to log it against engineering. Engagements that route requirements ambiguities through the bug pipeline produce bug lists that look catastrophic and contracted-team relationships that fray under the apparent quality crisis.
:::

**Maintain a transparent defect log the client can read.** A shared defect tracker (Jira, Linear, GitHub Issues, dedicated UAT tools like TestRail or Xray) where every finding is logged with severity, current status, target resolution, and any client decisions on deferral. The transparency matters because hidden defect lists become discovered defect lists that erode trust; visible ones become collaborative triage exercises that build it.

**Plan for the deferred-bugs conversation.** Not every defect found in QA gets fixed before launch. Some are minor; some have workarounds; some would push the launch date. The discipline is structuring the deferral conversation: each deferred bug is documented with severity, business impact, workaround, and the timeline for fix (post-launch within warranty, post-launch via change request, indefinitely deferred). The client signs off on the deferral list as part of UAT closure. Engagements that ship with un-discussed deferred bugs find them re-litigated as production incidents.

## Desired outcomes

By the end of QA / Testing, the engagement has the following in place:

- A documented test strategy and test plan tied to the signed FR/NFR set, with traceability from each requirement to the test cases that verify it
- Passing test cycles against signed acceptance criteria — functional, regression, performance, security, and UAT — with results documented and shared with the client
- A closed bug list (every defect either fixed or explicitly deferred with client sign-off and a documented post-launch path)
- UAT sign-off from the named client signatory, ratifying that the build meets the engagement's acceptance criteria
- A deployment-ready state: build verified at the same configuration that will deploy to production, deployment runbook validated against staging, [Deployment / Launch](/deployment-launch/) phase ready to start
- A handoff package combining test artifacts (test plan, traceability matrix, defect log, UAT sign-off, deferred-bugs list) ready to flow into deployment and post-launch operation

## What the industry does

**QA-as-separate-discipline vs. QA-in-dev-team shops.** QA-as-separate-discipline agencies maintain a dedicated QA function — test engineers, QA leads, automation specialists. Trade-off: deeper testing expertise per engagement, structured test cycles, defensible audit trail; higher per-engagement cost, slower iteration loop, risk of QA-vs-dev adversarial dynamic if not actively managed. QA-in-dev-team agencies fold testing entirely into the development team — engineers own unit, integration, and system-level testing, with no dedicated QA function. Trade-off: tight feedback loop, shared ownership of quality, lower per-engagement cost; risk of testing under-investment when developers are under deadline pressure, weaker test cycles when engineers test their own work. Separate-QA dominates in regulated industries (healthcare, defence, financial services), enterprise B2B engagements, and agencies serving clients who expect a named QA function in the SOW. QA-in-dev dominates in modern software product engineering, startup-velocity engagements, and continuous-delivery cultures. Most mid-sized agencies sit somewhere on the spectrum — a small QA function (one or two specialists) augmenting developer testing rather than replacing it.

**Test-cycle-driven vs. continuous-testing cultures.** Test-cycle-driven agencies run discrete test cycles — week 1 functional, week 2 regression, week 3 performance, week 4 UAT — each with formal entry/exit criteria, formal sign-off, and a test report. Trade-off: defensible artifact production, clear gates, predictable schedule; later defect discovery, longer total calendar duration. Continuous-testing agencies run automated regression and performance suites continuously throughout development, with manual UAT as the only formal cycle. Trade-off: faster defect discovery, shorter total duration, requires automation investment, weaker formal artifact production. Test-cycle-driven dominates in regulated work and engagements with formal procurement testing requirements; continuous-testing dominates in modern software agencies and product engagements. The choice is dictated by the client's procurement culture more than by the agency's testing philosophy.

**Manual-first vs. automation-first test approaches.** Manual-first agencies invest heavily in manual test execution — exploratory testing, structured manual cycles, manual regression suites. Trade-off: catches issues automation misses (visual regressions, UX issues, edge cases requiring judgement); high cycle cost, slow regression cycles, hard to scale to large suites. Automation-first agencies invest in automated test suites — Playwright, Cypress, Selenium for end-to-end; Jest, Vitest, Pytest for integration; specialised tools for performance and security. Trade-off: fast regression cycles, low marginal cost per cycle, scales to large suites; misses issues automation cannot perceive, requires automation expertise. Most modern agencies blend both with the ratio shifting per engagement — automation-heavy on critical regression paths, manual-heavy on UX-sensitive flows and exploratory cycles. Pure-manual survives in agencies serving clients who do not invest in automation infrastructure; pure-automation survives in mature product engineering with strong test-engineer benches.
