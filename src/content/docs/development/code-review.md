---
title: Code Review
description: Review-before-merge as both quality gate and knowledge-transfer ritual — running it under delivery pressure without bottlenecking the team.
type: sub-section
phase: development
order: 7
lastUpdated: 2026-05-03
status: v1
---

## What happens here

Code review in an agency engagement does two jobs simultaneously: it is a quality gate that catches design issues, security problems, and correctness mistakes before they land in mainline, and it is the knowledge-transfer mechanism that brings reviewers — including client engineers in handoff scenarios — up to speed on what is being built. Product-company code review optimises mostly for the first; agency code review needs both, because the team rotation at engagement end is total.

Three forces shape agency code review specifically:

- **Delivery pressure is real.** Engagements are time-bounded. Review cycles that take days bottleneck delivery and erode margin. The discipline is making review fast and useful, not making it ceremonial.
- **Knowledge transfer is part of the deliverable.** A repo that the client cannot read post-handoff has not been delivered, regardless of whether the code works. Reviews that include the client's named engineers (where the engagement structure permits) double as onboarding for the post-handoff team.
- **Quality and velocity must coexist.** Trading one for the other produces either over-engineered code shipped late or hastily-merged code with regressions discovered in QA. The discipline is keeping both axes healthy throughout the engagement.

Reviews run on every PR. Mainline is protected (per [Repository Structure & Branching Strategy](/development/repository-structure-branching/)) so no merge happens without review. Required participants depend on engagement structure: at minimum one engineer other than the author; on handoff-track engagements, at least one client-named engineer; on cross-cutting changes, the relevant code-owner. The output is reviewed-before-merge code, a documented review trail in the repo, and reviewers who are increasingly fluent in what the system does — including, ideally, the client's post-handoff team.

## Best practices

**Keep PRs small and reviewable.** A PR under 400 lines of changes gets meaningful review; a PR over 800 lines gets rubber-stamped because the reviewer cannot hold it all in their head. The discipline is splitting work into small, mergeable PRs rather than one large feature-complete PR. Each PR ships a coherent slice — a contract change with its tests, a refactor with its consequence, a feature increment that compiles and passes tests on its own. Engineers who ship a 1500-line PR have not delivered review-able work; they have delivered a problem for the reviewer.

**Use a written review checklist for the engagement.** Reviewers read the same things on every PR — design fit, security concerns, error handling, test coverage, accessibility (for frontend), observability (for backend), API-contract compliance, naming. A short checklist (8–15 items) tuned to the engagement's risk profile keeps reviews consistent across engineers and shifts. The checklist lives in `CONTRIBUTING.md` or in the PR template; it is the artifact that lets a junior reviewer match the standards of a senior reviewer.

**Review for design and risk, not for syntax style.** Lint, format, type checks, and security scans should run in CI as automated gates. By the time a PR is in human review, the mechanical concerns are already passing. Human review focuses on the design — does the change fit the architecture, does it solve the right problem, does it introduce risk the system was not designed to absorb, does it preserve invariants the codebase depends on. Reviewers spending their time on commas and bracket placement are reviewers under-investing in the issues only humans can catch.

**Rotate reviewers across engineers and across the codebase.** Sticky reviewer-author pairings produce knowledge silos — only one reviewer ever sees that engineer's code, and only one engineer ever works in that part of the codebase. The discipline is rotation: any engineer can review any other engineer's work, and reviewer assignments rotate across the team. The knowledge spreads; the post-handoff transition is easier; the system has fewer cliffs of "only one person knows this."

**Include client engineers in review on handoff-track engagements.** Where the engagement structure includes the client taking over the codebase post-handoff, client engineers should be in the review process from week 2 onward. They learn the architecture, the conventions, and the system's tacit knowledge through the diff and through reading the conversation. By handoff, the client engineers have read most of the code that landed; the agency's role is graduating from author to reviewer rather than disappearing on a Friday.

**Maintain comment etiquette as professional discipline.** Review comments live in the repo forever. Sarcastic comments, dismissive comments, and personal-attack comments survive the engagement and become artifacts the next team reads. The discipline is professional, technical, blameless commentary:

- "This pattern works but conflicts with the architecture's stated approach in ADR-007. Suggest aligning with ADR-007 or, if the change is intentional, raising a new ADR."
- "Edge case: empty collection input. Handled in the implementation? Worth a test if not."
- "Consider extracting this to a named function — the inline expression is hard to follow."

Not:

- "What were you thinking?"
- "This is wrong."
- "lol no."

The author is the engineer's colleague, not their adversary; the code is the artifact under review, not the engineer.

**Resolve every comment, even by deferral.** Each comment gets a response: addressed in the diff, deferred with rationale ("good catch — tracked as TICKET-123 for the next iteration; merging this PR as-is per the agreed scope"), or pushed back ("respectfully disagree — the explicit nullability handling is required by the calling contract"). PRs merging with unresolved comments leave invisible technical debt and signal to the team that comments are optional. The discipline is mechanical: no merge while comments are unresolved.

:::caution
Do not review for syntax style when CI already enforces it. Reviewer time spent on commas, indentation, line length, and import order is reviewer time stolen from design-and-risk concerns the team genuinely needs human judgement on. Configure the linter, formatter, and type checker as CI gates, and direct human review at what only humans can do — the design fit, the security model, the maintainability, the architectural drift. Engagements that review for style produce reviewers who burn out on bike-shedding and PRs that get merged without anyone catching the actual risks.
:::

**Time-box review cycles.** A PR opened by 5pm gets first-pass review by the next morning. PRs blocking other work get same-day review on a rotating named-reviewer schedule. Engineers who ship a PR and walk away for two days while it ages produce a delivery cadence that works for nobody. Setting expectations on review SLAs at kickoff and treating them as commitments — not aspirations — keeps the team's velocity intact.

## Desired outcomes

By the end of the engagement, the code review practice has produced:

- A reviewed-before-merge policy enforced via mainline protection rules — no commits to mainline that bypass review
- A documented review trail in the repo — every PR has at least one approving review, with comments and resolutions visible in history
- A maintained review checklist tuned to the engagement's risk profile, used consistently across reviewers
- A rotation pattern across reviewers and engineers, breaking down knowledge silos and spreading codebase familiarity
- Client engineers (on handoff-track engagements) fluent in the codebase by handoff, having read the diffs throughout development
- A culture of professional comment etiquette that survives team rotation and produces a repo history the post-handoff team can read without wincing
- Resolved-or-deferred-with-rationale review comments on every merged PR, with no invisible technical debt slipping into mainline

## What the industry does

**Heavyweight-review vs. trust-based-review shops.** Heavyweight-review agencies require multiple approvals (often two engineer approvals plus a security or domain-owner approval on sensitive PRs), formal review checklists, sometimes synchronous review meetings for high-stakes changes. Trade-off: catches more issues; slows delivery; produces a thorough audit trail; common in regulated industries (finance, healthcare, defence). Trust-based-review agencies require one approval from any team member, with rapid turn-around, and rely on automated CI gates and team culture to maintain quality. Trade-off: faster delivery; lower per-PR catch rate; relies on the team's engineering culture being strong enough to maintain standards informally. Heavyweight-review dominates in regulated work and in agencies where the engagement contracts demand auditable review processes; trust-based-review dominates in modern software agencies, product engineering, and engagements where velocity is a primary success metric.

**Synchronous (in-meeting) vs. asynchronous (in-tool) review cultures.** Synchronous-review agencies hold periodic review meetings (sometimes daily, sometimes per-PR for high-stakes changes) where reviewers walk through the diff with the author. Trade-off: high knowledge transfer, fast resolution of complex feedback, expensive in calendar time. Asynchronous-review agencies use the source-control platform's review tooling (GitHub PRs, GitLab MRs, Bitbucket PRs, Phabricator) with comments and resolution happening in writing. Trade-off: time-zone friendly, lower calendar cost, slower resolution of complex back-and-forth. Synchronous review survives in co-located agencies and in engagements where the team works the same hours; asynchronous dominates in distributed agencies and in modern remote-first work. Most agencies use asynchronous-default with synchronous escalation for the rare PRs that need it.

**Author-attends-review vs. silent-author cultures.** Author-attends-review cultures expect the PR author to actively engage with reviewer comments, push back where appropriate, defend design choices, and discuss alternatives. Trade-off: more useful review conversations; requires authors to be available for the review window; slower for authors who context-switch across many PRs. Silent-author cultures treat reviews as the reviewer's monologue with the author either accepting or rejecting feedback in commits, no in-thread discussion. Trade-off: faster mechanically, but produces reviews where genuine design disagreements never get resolved and ship as merged. Author-engagement is the modern default in mid-sized agencies; silent-author survives in larger, throughput-optimised shops where the team is structured against active in-review discussion.
