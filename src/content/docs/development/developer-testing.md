---
title: Developer Testing
description: Unit and integration tests engineers own — and a coverage posture that fits a commercial engagement, not a 100%-aspiration.
type: sub-section
phase: development
order: 6
lastUpdated: 2026-05-03
status: v1
---

## What happens here

Developer testing is the unit and integration testing engineers own as part of building the system. It runs on every commit and PR; it gates merges into mainline; it is written by the same engineer who wrote the code under test. It is not the same as QA testing, and conflating the two is one of the most expensive misunderstandings in agency engagements.

The clean split between developer testing and QA testing:

- **Developer testing.** Unit tests (functions, modules, classes in isolation) and integration tests (modules collaborating, services calling services, code-against-database). Owned by the engineer who wrote the code. Runs on every commit. Catches bugs at the line and contract level. Lives in the repository alongside the code.
- **[QA testing](/qa-testing/functional-regression-testing/).** System-level testing — functional cycles against signed FRs, regression suites against prior-passing behaviour, end-to-end user-journey verification, performance and security cycles, UAT with the client. Owned by QA. Runs on test cycles, not on every commit. Catches bugs at the system and user level.

Both are necessary; neither replaces the other. A team that ships only developer tests discovers UAT bugs in week 12; a team that defers all testing to QA discovers in week 12 that the build itself is unstable.

The "how much testing" question is commercial, not technical. A 100% line-coverage target costs roughly 30–60% more development time than a 70% target on critical paths; a client who paid for the 70% target gets a different deliverable than a client who paid for 100%. The discipline is being honest about what coverage the engagement was priced against, defending it during build, and surfacing it as a deliverable property at handoff. Engineers who quietly aspire to 100% coverage on engagements priced for 70% blow through margin; engineers who skip tests on engagements priced for thorough coverage produce a deliverable that fails QA.

## Best practices

**Test the contract, not the implementation.** Tests that verify the contract a function or module promises — its inputs, outputs, side effects — are durable. Tests that verify the implementation — what data structures it uses internally, what helper methods it calls — break on every refactor and produce a test suite engineers eventually disable. The discipline is to ask, for each test: would this test still pass if the implementation were rewritten cleanly to satisfy the same contract? If yes, the test is contract-level and worth keeping. If no, the test is implementation-coupled and is producing more friction than safety.

**Use property-based testing for critical paths.** Property-based testing (Hypothesis, fast-check, QuickCheck-style libraries) generates many inputs against a stated property — "for any valid email, parsing then re-formatting produces the same email"; "for any sorted input, my-sort produces a sorted output." Property-based tests catch edge cases that example-based tests miss because they exercise inputs the engineer would not have thought to write. Reserve them for genuinely critical paths (payment flows, security boundaries, data transformations); apply example-based tests elsewhere.

**Avoid over-mocking.** Tests that mock everything become tests that verify the mocks rather than the system. A unit test for a payment-processing function that mocks the payment provider, the database, the queue, and the audit logger is testing nothing about the actual integration. Use real dependencies where the cost is acceptable — in-memory databases for repository tests, real HTTP clients against test fixtures, real queues with synchronous implementations. Mock only at architectural boundaries (third-party APIs, slow external services, irreversible operations like real payments).

**Set a coverage threshold and gate it in CI.** Pick a threshold that matches the engagement's priced coverage posture (typically 70%–85% of statements or branches on application code, often higher on shared libraries and lower on glue code) and enforce it as a CI gate. PRs that drop coverage below the threshold fail. The threshold is documented in `CONTRIBUTING.md` and visible in PR feedback. Without a threshold, coverage drifts down over time as engineers add code under deadline pressure without adding tests.

**Document the test conventions for handoff.** A short section in `CONTRIBUTING.md` covering: test framework, where tests live, naming conventions, mock patterns, fixture management, how to run tests locally, how the CI pipeline runs tests, and the coverage threshold. The client's post-handoff team needs to add tests in the same shape the agency did; without conventions documented, the test suite drifts within months and becomes a debt.

:::caution
Do not pursue 100% coverage targets that the client has not paid for. Over-investment in testing is also a failure mode — coverage above what the engagement priced for consumes development hours that should have produced features and produces test code that the client cannot maintain. The right coverage target is the one the engagement was priced against; if the priced target is too low for the team's quality standards, raise the issue at kickoff or at change-control points, not by quietly delivering more than was bought.
:::

**Anti-patterns to avoid:**

- **The 100%-coverage cargo cult.** Engineers chasing 100% line coverage by adding tests for trivial code (getters, constants, framework boilerplate). Coverage number goes up; product quality does not.
- **The mocked-everything test suite.** Tests that pass on every commit but verify only the mock setup. Catches no real bugs; produces false confidence.
- **The skipped-test bypass.** Tests marked `skip` or `xtest` to make CI green during deadline pressure. Each skipped test is a regression detector that has been disabled; the suite quickly stops protecting the system.
- **The test-after-everything anti-discipline.** Tests deferred to "after the feature works" and then deferred to "after the sprint" and then deferred to "after launch." Tests written after the feature has been shipped are written under different pressures than tests written alongside the code; they tend to be shallower and miss the bugs the engineer would have caught at write-time.

**Run the test suite locally in under five minutes.** A test suite that takes 30 minutes to run is a test suite engineers do not run. Optimise for fast feedback: parallel execution, in-memory databases for unit and most integration tests, dedicated containerised dependencies for the few tests that need real external systems. The CI pipeline can run a slower comprehensive suite; the local-feedback suite must be fast or it gets bypassed.

## Desired outcomes

By the end of developer testing investment in this phase, the engagement has:

- A passing test suite running on every PR and every mainline commit, with required passing checks gating merge
- Critical paths covered with both example-based tests and property-based tests where the path's risk justifies the additional discipline
- A coverage threshold enforced in CI matching the engagement's priced coverage posture, documented in `CONTRIBUTING.md`
- A test suite that runs locally in under five minutes for the typical inner-loop feedback cycle, with a comprehensive cycle reserved for CI
- Mocking practices that mock at architectural boundaries only, with real dependencies used where their cost is acceptable
- Documented test conventions covering framework, layout, naming, mock patterns, and operational procedures — ready for client handoff
- A clean handoff to [QA / Testing](/qa-testing/functional-regression-testing/), where the developer-test suite supports rather than overlaps with system-level QA cycles

## What the industry does

**TDD-strict vs. pragmatic shops.** TDD-strict agencies follow test-driven development as the dominant discipline — tests written before code, red-green-refactor cycles, no production code without a failing test first. Trade-off: produces clean interfaces and high coverage by construction; harder to staff with engineers who deliver consistently under TDD; slower in some early-engagement scenarios. Pragmatic agencies treat TDD as one tool among several — used where it fits (algorithmic work, complex domain logic, contract-heavy code), set aside where it does not (UI exploration, prototyping, simple glue code). Trade-off: faster overall delivery, more variable test quality, requires team discipline to maintain testing rigour without TDD's structural enforcement. TDD-strict survives in agencies with strong functional-programming or domain-driven-design cultures and in regulated engagements where the test discipline is a procurement requirement; pragmatic dominates in modern software agencies because TDD is hard to staff and inconsistent TDD is worse than disciplined non-TDD. Most agencies adopt pragmatic-by-default with a TDD-encouraged stance for engineers who deliver well under it.

**High-coverage-mandated vs. coverage-as-signal cultures.** High-coverage-mandated agencies set a fixed coverage threshold (often 80% or 90%) as a non-negotiable CI gate. Trade-off: produces predictable coverage; risks cargo-cult test-writing on trivial code. Coverage-as-signal agencies track coverage trends without strict thresholds, treating coverage as one signal among many — coverage drops trigger investigation, not a CI failure. Trade-off: more flexible response to genuinely low-coverage code; requires team-wide discipline to prevent coverage drift. Threshold-mandated dominates in larger agencies and regulated work; coverage-as-signal survives in smaller specialised agencies and in TDD-strict cultures where the discipline produces high coverage organically without needing a threshold gate.

**Inverted-pyramid vs. classic-pyramid testing models.** Classic-pyramid agencies write many unit tests, fewer integration tests, fewest end-to-end tests — the test pyramid as defined by Mike Cohn. Trade-off: fast feedback, low test-suite operational cost; misses bugs that only appear at higher integration levels. Inverted-pyramid (or "honeycomb") agencies invest more in integration and contract tests at the expense of unit-test count — the failures most worth catching are integration failures, not function-level bugs. Trade-off: higher test-suite operational cost, slower feedback, but catches the bugs that ship to production. Modern agencies trend toward integration-heavy or honeycomb shapes because well-designed unit tests catch fewer bugs than integration tests for the same effort; classic-pyramid survives in TDD-heavy cultures and in legacy engagements with inherited unit-test investment.
