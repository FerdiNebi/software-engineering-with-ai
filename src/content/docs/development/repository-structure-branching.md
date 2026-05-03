---
title: Repository Structure & Branching Strategy
description: Day-0 repo decisions — layout, branching, mainline protection, and access model — that the client will inherit at handoff.
type: sub-section
phase: development
order: 2
lastUpdated: 2026-05-03
status: v1
---

## What happens here

Repository structure and branching strategy are Day-0 decisions, not retrofit work. The choices made before the first commit constrain every PR, every CI run, every team rotation, and every client-handoff conversation that follows. Engagements that delay these decisions to "we'll figure it out as we go" inherit whatever the first engineer's local mental model produces — which is rarely the model the team needs three months later.

Four classes of decisions get made and documented in this activity:

- **Repo topology.** Monorepo (one repository contains backend, frontend, infrastructure, shared libraries, sometimes design tokens), or polyrepo (each service or surface in its own repository). Monorepos simplify cross-service refactoring and dependency consistency; polyrepos simplify access control and team independence. The choice depends on engagement size, team structure, and which option the client can credibly operate post-handoff.
- **Branching model.** Trunk-based (small commits to mainline frequently, feature flags for in-progress work) versus GitFlow-style (long-running develop and feature branches, periodic merges to mainline, releases as events). The choice constrains release cadence, CI complexity, and how the team handles in-progress work.
- **Mainline protection rules.** What CI checks must pass to merge, how many reviewers are required, whether linear history is enforced, whether direct commits to mainline are allowed (they should not be).
- **Access model.** Who can read, who can push, who can approve, and how this changes at handoff. Agency-internal repos give engineers freedom; client-handoff repos require the access posture that the client will operate post-handoff to be in place from day one.

The agency's tech lead owns these decisions in consultation with the delivery lead and any client-side technical stakeholder who will inherit the repo. The output is a documented repository convention — typically a `CONTRIBUTING.md` and a section in the project README — that engineers reference throughout the engagement and that becomes part of the client handoff.

## Best practices

**Use Conventional Commits or a similar pinned commit-message convention.** A documented format makes git history scannable, supports automated changelog generation, and reduces the cognitive load of code review. The Conventional Commits spec is the most widely-used:

```text
feat(auth): add session revocation endpoint
fix(checkout): handle empty cart on resume
docs(architecture): record ADR-014 datastore decision
chore(deps): bump pnpm to 10.34.0
```

The format is `type(scope): summary`, where type is one of a small fixed set (feat, fix, docs, chore, refactor, test, ci, perf), scope is the module or surface affected, and summary is imperative-tense and under 72 characters. Adopt it once at engagement kickoff; enforcement via commit-msg hooks is optional but useful in larger teams.

**Adopt a pinned branch-naming convention.** Branch names communicate intent. `<type>/<ticket>-<slug>` is the workable shape:

```text
feat/PROJ-142-session-revocation
fix/PROJ-203-cart-resume-bug
chore/PROJ-310-bump-pnpm
```

Type matches the commit-message types. Ticket reference ties the branch to the issue tracker and makes traceability automatic. Slug is short, kebab-case, and human-readable. Engagements without a branch-name convention end up with branches named `feature-1`, `joes-fix`, and `temp-test` that no one can interpret six weeks later.

**Protect mainline and require PR review.** Mainline (often `main`, sometimes `master`, occasionally `trunk`) is a protected branch. The protection rules at minimum:

- No direct commits — every change goes through a PR.
- Required passing CI checks (lint, format, type, tests, security scan, build).
- At least one approving review from someone other than the author. On handoff-track engagements, at least one review from a client-named engineer.
- Linear history enforced (rebase-and-merge or squash-and-merge, no merge commits) — keeps history bisectable.
- Stale PRs auto-marked or closed after a defined idle period (typically 7–14 days).

The rules are enforced in the platform's branch-protection configuration (GitHub branch protection rules, GitLab push rules, Bitbucket branch permissions), not by team agreement. Configuration is reviewable; team agreement is not.

**Define code-owners for cross-cutting concerns.** A `CODEOWNERS` file (GitHub) or equivalent ensures the right reviewer gets requested automatically. Database migrations require the data lead. Authentication and authorisation changes require the security lead. Public API changes require the technical lead. Without code-owners, sensitive changes get reviewed by whoever is online; with code-owners, the right eyes always see the right diffs.

**Plan the access model for handoff from day one.** The repo's access model has two states: engagement-time and post-handoff. During the engagement, agency engineers have full push access and client engineers may be observers or contributors. At handoff, the client takes ownership of mainline protection, repository administration, and access management. Engagements that defer this until handoff weekend produce a chaotic transition where credentials are reset, branch protections are reconfigured, and CI integrations break. The clean pattern is to document the post-handoff access model from day one and run a dry-run access transition midway through the engagement.

:::tip
Mirror the agency-vs-client access model in the repo from kickoff. Agency contributors push to feature branches; client contributors push to feature branches; everyone goes through the same PR review. The access model is not a quality difference — it is a permission difference that matters at handoff. Engagements where agency engineers commit directly to mainline produce a repo that the client cannot adopt without rebuilding the workflow.
:::

:::caution
Do not allow direct commits to mainline, ever. Even by the technical lead. Even for "trivial" changes. Direct commits bypass CI checks, skip review, defeat traceability, and signal to the rest of the team that the rules are negotiable. The first time a direct commit lands in mainline is the moment the team's discipline starts eroding. Mainline protection is not a process suggestion; it is a contract the team enforces unanimously.
:::

**Document the conventions in `CONTRIBUTING.md`.** A short document at the repo root covering: branching model, branch-name format, commit-message format, PR template expectations, review-and-merge process, code-owners summary, local development setup, and any agency-specific conventions (architecture for ADRs, location for runbooks, naming for IaC modules). The document is the artifact that survives team rotation and travels to the client at handoff.

## Desired outcomes

By the end of repository setup, the engagement has:

- A live repository with mainline protection rules configured: required CI checks, required approvals, no direct commits, enforced linear history
- A documented branching strategy (trunk-based or GitFlow), branch-naming convention, and commit-message convention — captured in `CONTRIBUTING.md` and applied consistently from the first PR
- A `CODEOWNERS` file or equivalent ensuring the right reviewer is requested automatically for cross-cutting concerns
- A documented access model for engagement-time and post-handoff states, with a dry-run plan for the transition
- CI hooks wired to mainline protection — every PR triggers the configured checks before merge is permitted
- A repository structure ready for client handoff: documented conventions, no agency-internal references hard-coded, IaC and runbooks alongside the application code, and a top-level README that lets a new contributor go from clone to running system

## What the industry does

**Trunk-based vs. GitFlow-style shops.** Trunk-based agencies merge small commits to mainline multiple times per day, using feature flags to hide in-progress work and keeping the mainline always-deployable. Optimised for continuous delivery, fast feedback, minimal merge conflicts, and engagement velocity. Trade-off: requires team discipline around small PRs and feature-flag hygiene; works poorly when releases are large external events. GitFlow-style agencies maintain long-running develop and feature branches, with periodic releases promoted from develop to mainline. Optimised for releases-as-events, formal release notes, and clearly-bounded "what's going to production." Trade-off: heavier merge overhead, bigger PRs, slower feedback cycle. Trunk-based dominates in modern software agencies, product engineering, and any engagement with continuous deployment; GitFlow survives in regulated industries, enterprise B2B platforms with formal release calendars, and engagements where releases require external coordination (mobile app store submissions, partner integrations with formal launch dates). Most agencies pick one and apply it across all engagements; agencies that mix approaches confuse their engineers when they rotate between projects.

**Monorepo vs. polyrepo cultures.** Monorepo agencies put backend, frontend, infrastructure, and shared libraries in one repository. Cross-service refactoring is a single PR; dependency consistency is automatic; CI complexity is higher and tooling (Nx, Turborepo, Bazel, Lerna, pnpm workspaces) becomes load-bearing. Polyrepo agencies maintain a separate repository per service, library, or surface. Each repo has independent CI, independent dependencies, and independent versioning; cross-cutting changes require coordinated PRs across repos. Monorepo dominates in modern agencies and in engagements where the deliverables interact heavily (a tightly-coupled product); polyrepo dominates in engagements where deliverables are independent (separate microservices owned by different teams) and in handoff scenarios where the client wants per-component repositories. The choice is a function of engagement coupling, team capacity for monorepo tooling, and client preference at handoff.

**Conventional Commits / changelog automation vs. ad-hoc commit messages.** Convention-driven agencies use Conventional Commits with automated changelog generation (semantic-release, changesets, release-please) and tagged versioning that emerges from the commit history. Trade-off: small upfront learning curve; produces release notes and version numbers automatically without retrospective work. Ad-hoc-commit agencies write commit messages in whatever style suits the moment and produce changelogs by hand at release time (or not at all). Trade-off: zero ceremony; inconsistent history; manual release-note writing under deadline pressure. Convention-driven dominates in modern agencies and in engagements that ship versioned libraries or platforms; ad-hoc survives in short engagements and in agencies whose teams have not adopted the discipline. The cost-benefit favours convention-driven for any engagement over four weeks or with any external release process.
