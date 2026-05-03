---
title: Test Strategy & Planning
description: Strategy (why and scope) versus plan (what, when, who) — building a traceable, defensible foundation for the test cycles ahead.
type: sub-section
phase: qa-testing
order: 2
lastUpdated: 2026-05-03
status: v1
---

## What happens here

Test strategy and test plan are different artifacts. Conflating them is one of the most common mistakes in agency QA work and produces test cycles that pass without anyone being able to defend what they actually verified.

- **Test strategy** is the why and scope. One document. Defines what the engagement is testing, what it deliberately is not testing, the approach (manual/automation balance, environments, tooling), and the entry/exit criteria for each test cycle. The strategy is signed off once at the start of QA and rarely changes during the engagement.
- **Test plan** is the what, when, and who. Operational document. Schedules specific test cycles (functional cycle 1 in week 14, regression cycle in week 16, UAT in week 18), assigns named participants, defines the test environment for each cycle, and lists the test cases that will execute. The plan evolves as the engagement progresses; cycles get added, deferred, or compressed based on findings.

Both trace to the signed [FR/NFR set](/requirements-design/functional-nonfunctional-requirements/). Every test case in the plan covers one or more requirements; every requirement has at least one test case verifying it. The mapping between the two is the traceability matrix — the artifact QA produces that lets the team and the client confirm, item by item, that the build was tested against what was sold.

The QA lead owns both documents. They are produced during the [Requirements & Design](/requirements-design/) phase (drafted from the FR/NFR set as it stabilises) and reviewed at the start of [development](/development/) so the team understands what will be tested and how. The strategy is signed off before development starts; the plan crystallises during the last weeks of build and is signed off at QA kickoff. The output flows into [functional and regression testing](/qa-testing/functional-regression-testing/) as the executable test schedule.

## Best practices

**Maintain a traceability matrix from day one.** A traceability matrix maps each FR/NFR to the test cases that verify it. Each test case names the requirement it covers (FR-12, NFR-4); each requirement has a row showing the test cases that exercise it. The matrix is QA's primary defensibility artifact:

- It surfaces requirements that have no tests (a gap in coverage).
- It surfaces tests that do not trace to a requirement (a sign the test is testing something not in scope).
- It enables triage: when a test fails, the requirement it traces to is the conversation, not "the test failed."
- It supports sign-off: the client signs off on FR/NFR coverage by reading the matrix, not by trusting QA.

The matrix lives in the test-management tool (TestRail, Xray, Zephyr, qTest) or in a structured spreadsheet for engagements without dedicated tooling. Without it, "we tested the system" becomes "we tested whatever we thought to test," which is rarely what the client paid for.

**Use risk-based prioritisation to size cycles to budget.** Not every requirement needs the same depth of testing. Risk-based prioritisation classifies requirements:

- **High risk.** Critical user flows, regulated requirements, payment-handling code, integrations with external systems. Full functional + regression + edge-case coverage; automated where possible; manual exploratory in addition.
- **Medium risk.** Standard CRUD operations, well-understood UI patterns, internal admin tools. Functional + regression coverage; mostly automated; light manual review.
- **Low risk.** Static content, internal-only utilities, deprecated paths. Smoke tests only; minimal investment.

The classification happens during strategy authoring, with input from the technical lead and (where relevant) the client's named compliance or security stakeholder. Risk-based prioritisation lets QA fit a credible test programme into engagement budgets that cannot afford uniformly-deep testing.

**Define explicit entry and exit criteria for every test cycle.** Each cycle (functional, regression, performance, security, UAT) has documented entry criteria — what state the build must be in for the cycle to start — and exit criteria — what conditions must be met to declare the cycle complete. Examples:

- **Functional cycle 1 entry:** all in-scope FRs implemented and developer-tested; staging environment provisioned with test data; defect tracker active.
- **Functional cycle 1 exit:** all critical and high-severity defects closed or accepted; all medium defects triaged with target resolution; cycle test report published.
- **UAT entry:** all earlier cycles complete; all blocker bugs closed; client participants briefed and trained.
- **UAT exit:** signed UAT acceptance from the named client signatory; deferred-bugs list documented and accepted.

Without entry/exit criteria, cycles either start before the build is ready (wasting time on bugs the team already knew about) or end without clear sign-off (leaving "are we done" as an open question). The criteria in writing is what lets QA make the call mechanically rather than politically.

**Right-size the strategy to engagement complexity.** A 60-page test strategy on a £50k marketing-site engagement is procurement theatre; a one-page strategy on a £400k regulated-industry platform is malpractice. The strategy's depth matches the engagement's risk profile, the client's procurement requirements, and the test-cycle complexity the plan will execute. The discipline is calibrating, not maximising.

:::caution
Do not produce a test plan that does not trace to FR/NFRs. Test plans authored from "what feels worth testing" rather than from the signed requirements produce sign-off conversations where the client and the agency cannot agree what was actually verified. The traceability is what makes QA defensible — without it, every defect becomes a negotiation about whether it was in scope, and every cycle ends in ambiguity. The traceability matrix is the artifact QA writes its name on; everything else flows from it.
:::

**Plan the deferred-bugs conversation in the strategy, not in UAT.** The strategy names the severity model (critical/high/medium/low or 1–5), the criteria for each, and the agreed disposition path for each severity (must-fix-before-launch, fix-or-defer-with-client-approval, post-launch with target date, indefinitely deferred). When defects appear in cycles, triage applies the agreed model rather than negotiating each defect from scratch. Engagements that defer the conversation until UAT find themselves negotiating severity policy and individual defects simultaneously under deadline pressure.

## Desired outcomes

By the end of test strategy and planning work, the engagement has:

- A signed test strategy covering scope, approach, environments, tooling, severity model, entry/exit criteria, and explicit out-of-scope statements
- A test plan listing each test cycle (functional, regression, performance, security, UAT), the test cases per cycle, named participants, environments, and the schedule
- A traceability matrix mapping every FR and NFR to the test cases that verify it, with no requirements lacking coverage and no tests lacking a requirement
- An agreed definition of test-done: the explicit conditions under which QA declares cycles complete and ratifies the build for [Deployment / Launch](/deployment-launch/)
- A risk-based prioritisation applied across requirements, with high-risk areas receiving deeper coverage and low-risk areas receiving smoke testing only
- A documented deferred-bugs disposition policy, agreed with the client, ready to apply when defects appear in cycles

## What the industry does

**Formal-TMMi vs. lightweight-agency approaches.** Formal-TMMi (Test Maturity Model integration) agencies follow structured industry standards — formal test strategy templates, IEEE 829 test plan structures, defined process maturity levels, ISO 29119 alignment. Trade-off: heavyweight artifact production, procurement-defensible in regulated industries, expensive to apply on engagements that do not require it. Lightweight-agency approaches produce shorter, less-formal artifacts — a 5–10 page test strategy, an issue-tracker-driven test plan, traceability via spreadsheet or in-tool tagging. Trade-off: faster to produce, harder to defend in formal procurement reviews, sufficient for most commercial agency work. Formal-TMMi dominates in regulated industries (defence, healthcare, government, financial-services platforms), in agencies serving clients with formal procurement testing requirements, and in agencies whose differentiation is procurement-defensibility. Lightweight dominates in modern software agencies, product engineering, and startup-velocity engagements. The choice is dictated by the client's procurement environment, not by the agency's preference.

**Tooling-driven vs. document-driven test management.** Tooling-driven agencies use dedicated test-management platforms (TestRail, Xray for Jira, Zephyr Scale, qTest, Polarion) where test cases, test cycles, traceability, and defects all live in linked records. Trade-off: rich traceability, automated reporting, dashboard visibility, requires team-wide tooling fluency, ongoing licensing cost. Document-driven agencies maintain test artifacts as Word, Excel, or Markdown files with manual linkage between requirements, test cases, and defects. Trade-off: lower tooling cost, weaker traceability, harder to scale across long engagements, accessible to clients without test-tool licensing. Tooling-driven dominates in mid-sized and larger agencies, in regulated work, and in long engagements where the artifact volume justifies tool investment; document-driven survives in small agencies, short engagements, and where the client's environment cannot accommodate the agency's preferred tooling.

**Embedded-QA vs. handover-QA cultures.** Embedded-QA agencies position QA leads inside the development team — attending sprint planning, reviewing FRs as they are authored, paired with developers during build. The QA lead sees the system as it grows. Trade-off: strong defect prevention, expensive (one QA per dev team), QA discipline blends into dev culture. Handover-QA agencies treat QA as a separate function that receives the build and tests it. Trade-off: cheaper per-engagement, more independent verification, slower defect feedback, weaker shared understanding of the system. Embedded-QA dominates in modern agencies and product engineering; handover-QA survives in regulated work where procurement requires testing-team independence and in offshore-QA delivery models. Most agencies trend embedded with handover for specific cycles (formal acceptance, security testing, UAT) where independence is a procurement requirement.
