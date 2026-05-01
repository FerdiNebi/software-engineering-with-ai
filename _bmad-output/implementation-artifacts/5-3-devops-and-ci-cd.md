# Story 5.3: DevOps & CI/CD

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a tech lead establishing the CI/CD pipeline for an engagement,
I want guidance on what a minimum viable pipeline looks like for agency work, how to split agency-owned vs. client-owned pipeline stages, and what gates to enforce,
So that delivery velocity is high and handoff at launch does not leave the client with a pipeline they cannot operate.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/development/devops-ci-cd.md`; `title: "DevOps & CI/CD"`, `description:` (≤160 chars), `type: sub-section`, `phase: development`, `order: 3`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** defines DevOps as the execution of the infrastructure-design plan and the ongoing operation of CI/CD.
10. **`## Best practices`** names specific pipeline stages (lint → test → build → deploy-dev → integration → deploy-staging → deploy-prod), secrets handling, client-accessibility of logs/credentials, and runbook conventions.
11. **`## Desired outcomes`** lists: a green pipeline on first commit, environment promotion path, operational runbook, and client-operable deployment.
12. **`## What the industry does`** contrasts heavyweight-tooling shops vs. "just GitHub Actions" shops.
13. **Page may include a fenced YAML snippet** of a minimum-viable workflow (Shiki highlighting). Optional but encouraged.
14. **Required cross-links:** forward link to `/development/backend-development/` AND cross to `/deployment-launch/deployment-execution-smoke-testing/`.

## Tasks / Subtasks

- [ ] **Task 1 — Author the page** (AC: #1–#6, #9–#14)
  - [ ] Frontmatter per AC #1.
  - [ ] Write the four H2 sections per ACs #9–#12. If including the YAML snippet (AC #13), keep it ≤25 lines and clearly minimum-viable; do not paste a real production workflow.
  - [ ] `<Aside type="caution">` for "credentials handed off as 'I'll DM you the API key.'"
  - [ ] Embed required forward and cross-phase links per AC #14.
  - [ ] Plain `<ul>` for outcomes.

- [ ] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [ ] Hedging → declarative; first-person plural → second person; exactly 4 H2s; no `./` or hardcoded URL links.

- [ ] **Task 3 — Build verification** (AC: #8)
  - [ ] `pnpm build` — succeeds; `dist/development/devops-ci-cd/index.html` exists; YAML fence renders without warnings.

- [ ] **Task 4 — Commit**
  - [ ] Scope `Epic 5 / Story 5.3`. Suggested: `Author DevOps & CI/CD (Epic 5 Story 5.3)`.

## Dev Notes

**Agency-vs-client pipeline split is the headline.** A pipeline the agency understands but the client cannot operate is a handoff failure. Best practices section must address: who has access to logs, who can rotate secrets, who can deploy in an emergency.

**Heavy-tooling vs. just-GitHub-Actions contrast.** Both are valid; the choice depends on the engagement size and the client's existing infrastructure. Frame it as a trade-off, not a religious choice.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets (Shiki is built in)
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/development/devops-ci-cd.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety + Shiki code-fence acceptance; manual lint per Task 2.

### Project Structure Notes

- `order: 3` — pairs with Repository Structure (2) as the "plumbing" group.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-5.3]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#Infrastructure-and-Deployment] — meta: this project's GitHub Actions workflow as a minimum-viable example
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Forward link to `/development/backend-development/` (Story 5.4) and cross-phase to `/deployment-launch/deployment-execution-smoke-testing/` (Story 7.3) — slugs pinned.

## Dev Agent Record

### Agent Model Used

_To be filled by dev-story agent._

### Debug Log References

### Completion Notes List

### File List
