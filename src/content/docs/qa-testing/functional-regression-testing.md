---
title: Functional & Regression Testing
description: Verifying behaviour against requirements and against prior-passing state — manual vs automation as an ROI conversation, not a religious one.
type: sub-section
phase: qa-testing
order: 3
lastUpdated: 2026-05-03
status: v1
---

## What happens here

Functional and regression testing are the two cycles that exercise the build at the system level against signed acceptance criteria. They answer different questions:

- **Functional testing.** Does the build do what the [requirements](/requirements-design/functional-nonfunctional-requirements/) say it should do? Each functional test case traces to a specific FR and verifies its acceptance criteria. Run when a feature first lands and re-run when it changes.
- **Regression testing.** Does the build still do what it did last cycle? Each regression test case verifies behaviour that has previously passed and protects against unintended changes elsewhere in the codebase breaking it. Run on a frequency proportional to engagement risk — every PR for high-risk paths, every cycle for the rest.

Both cycles complement, rather than replace, the [developer testing](/development/developer-testing/) engineers wrote during build. Developer tests run at the line and contract level inside the codebase; functional and regression tests run at the system level against the deployed application. A defect caught by developer testing is a fast feedback loop; a defect caught by functional or regression testing is a system-level integration issue that the line-level tests could not see.

The automation/manual mix is an ROI decision, not a default — and a default to "automate everything" wastes more agency budget than any other QA mistake. Tests that run repeatedly through a long engagement are worth automating; tests that run once or twice are worth executing manually. The discipline is calibrating per cycle, per test case, per engagement. The output of these cycles is a documented test-execution result, a triaged defect list, and a regression suite that protects shipped functionality without consuming disproportionate cycle time.

## Best practices

**Author test cases directly from requirements.** Each functional test case starts with the FR it covers, names the acceptance criteria from the requirements document, and translates them into testable steps with explicit expected results. The format keeps the test traceable, reviewable, and defensible:

- **Test ID:** TC-1042
- **Covers:** FR-12 (admin can revoke active session within 2 seconds)
- **Preconditions:** logged-in admin, target user with at least one active session
- **Steps:** navigate to user-management; locate the target user; click revoke on the active session; observe within 2 seconds
- **Expected result:** session shown as revoked; subsequent target-user requests using the revoked token return HTTP 401
- **Pass/fail criteria:** all observed behaviours match expected; no unexpected errors

Test cases authored from "what feels worth testing" rather than from requirements produce coverage that no one can defend at sign-off and tests that drift from the contract.

**Apply the automated-smoke + manual-depth model.** A practical default for most agency engagements:

- **Automated smoke suite.** Fast, broad, runs on every PR or every deploy to staging. Covers critical user flows (login, primary feature path, checkout, admin dashboard) at a high level. Catches the regressions that would block UAT or launch.
- **Manual deep cycles.** Cycle-level execution, slower, exercises edge cases, error paths, exploratory testing, visual review, accessibility validation, integration with third-party systems. Catches the issues automated tests miss.

The model matches automation investment to ROI — automate the tests that run hundreds of times across the engagement; execute manually the tests that run once or twice. Pure-automation cultures build elaborate suites that catch fewer bugs per hour invested than the manual-deep cycle would; pure-manual cultures spend cycle time re-executing tests that should have been automated months earlier.

**Prune the regression suite continuously.** A regression test that no longer prevents regressions is noise — it consumes cycle time without producing signal. Three pruning triggers:

- **Tests that have not failed in N consecutive cycles.** N depends on engagement length (5 cycles is typical) and the test's risk class. Long-passing tests for low-risk paths get retired.
- **Tests covering deprecated features.** Once a feature is removed or replaced, its regression tests are removed too. Keeping them produces a suite that tests behaviour the system no longer has.
- **Tests duplicated by other tests.** Two tests that catch the same regressions are redundant; one is removed.

The discipline matters because un-pruned regression suites grow until they take longer to run than the cycles can afford, and the team starts skipping cycles or marking tests `skip` to keep CI green. Both responses are worse than a smaller, well-maintained suite.

**Run a structured bug-triage ritual with the client.** Defects appear during cycles. The triage ritual prevents them from becoming a chaotic backlog:

- **Daily or every-other-day during cycles.** A 30-minute meeting between the QA lead, the agency's delivery lead, and (where possible) the client's named QA stakeholder.
- **Standard triage decisions.** Each defect is classified by severity, assigned to a fix path (immediate, this cycle, next cycle, deferred to post-launch, deferred indefinitely), and assigned to a named owner.
- **Visible defect tracker.** All triage decisions land in a tracker the client can read.

Engagements that defer triage until the cycle ends produce a defect list that takes longer to triage than to test the build originally; engagements that triage continuously keep the list manageable and the conversation ongoing.

:::caution
Do not let regression suites grow without pruning until they are too slow to run before merge. The slow regression cycle is the symptom; the cause is treating every test ever written as permanently load-bearing. Pruning is part of test-suite maintenance, not optional cleanup. Engagements with un-pruned suites either skip cycles (defeating the purpose) or merge under longer feedback loops than the engagement can afford. The discipline is mechanical: every cycle reviews the suite for retirement candidates.
:::

**Document cycle results as test reports.** Each cycle produces a written report: cycles executed, test cases passed/failed/skipped, defects raised, severity distribution, comparison to prior cycles, recommendations for the next cycle. The reports are the artifacts that defend the test programme at sign-off. Verbal summaries dissolve under pressure; written reports survive.

**Calibrate cycle scope to engagement budget.** Not every cycle exercises every test case. Risk-based prioritisation (per the [test strategy](/qa-testing/test-strategy-planning/)) selects which test cases run in which cycles — full regression on the last cycle before launch, smoke regression on intermediate cycles, full functional only when features land that affect those tests. Engagements that run full regression on every cycle either burn through budget or compress cycle scope so much that the cycles do not catch enough.

## Desired outcomes

By the end of functional and regression testing investment, the engagement has:

- Executed test cycles with documented results, traced to specific FR/NFRs and to the test cases that exercise them
- A triaged defect list with each finding classified by severity, assigned to a fix path, and tracked to closure or formal deferral
- An automated regression suite covering the critical paths and high-risk areas, with documented pruning to keep cycle time bounded
- Manual-deep cycles applied to UX-sensitive flows, exploratory testing, and integration paths where automation would miss the issues
- A documented bug-triage ritual operating throughout cycles, producing client-visible decisions and credible status reporting
- Test reports per cycle, archived as deliverables, defending the cycle's coverage and findings at engagement sign-off
- A handoff state where [performance testing](/qa-testing/performance-testing/) and [security testing](/qa-testing/security-testing/) cycles can run against a build that has cleared functional and regression cycles

## What the industry does

**Manual-first vs. automation-first agency QA styles.** Manual-first agencies invest most cycle hours in manual execution — exploratory testing, structured manual cycles, screen-by-screen verification. Trade-off: catches UX issues, visual regressions, and edge cases automation misses; expensive per cycle; slow regression loop. Automation-first agencies invest in automation infrastructure (Playwright, Cypress, Selenium, custom test harnesses) and treat manual testing as exception-handling for things that cannot be automated. Trade-off: fast feedback, scales across long engagements, requires automation engineering skill, blind to issues automation cannot perceive. Manual-first dominates in agencies serving clients who do not invest in test infrastructure, in UX-heavy engagements, and in short engagements where automation ROI is negative. Automation-first dominates in product engineering, long engagements, and modern agency work where automation skills are part of the QA bench. Most agencies blend with the ratio set per engagement — typically 60–80% automated for regression and smoke, 20–40% manual for exploratory and UX-sensitive flows.

**In-house automation vs. record-and-replay tooling.** In-house automation agencies write their own test suites in code (TypeScript with Playwright, Java with Selenium, Python with pytest+Selenium). The suites live in the repo, evolve with the codebase, and require engineering skill to maintain. Trade-off: durable, customisable, requires automation engineers, higher initial cost. Record-and-replay agencies use tooling that records UI interactions and replays them as tests (Mabl, TestCraft, the older era of Selenium IDE, modern AI-assisted record-and-replay). Trade-off: low skill barrier, fast initial creation, brittle to UI changes, harder to debug failing tests. In-house automation dominates in modern agencies and product engineering; record-and-replay survives in agencies whose QA bench lacks automation engineers and in clients who require non-engineering staff to maintain test suites post-handoff.

**Continuous-regression vs. cycle-based-regression cultures.** Continuous-regression agencies run the regression suite on every PR or every merge, with results visible in pull requests. Trade-off: catches regressions immediately, requires fast suites or selective execution, integrates testing into developer workflow. Cycle-based-regression agencies run regression suites on a schedule (nightly, weekly, per-cycle). Trade-off: slower feedback, more tolerance for slow suites, weaker integration with developer workflow. Continuous-regression dominates in modern agencies with strong CI culture and in shorter engagements where the cycle frequency justifies the investment; cycle-based-regression survives in regulated work with formal cycle gates and in engagements where the regression suite cannot fit in a CI feedback loop.
