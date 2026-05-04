# Story 5.3: DevOps & CI/CD

Status: done

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

- [x] **Task 1 — Author the page** (AC: #1–#6, #9–#14)
  - [x] Frontmatter per AC #1 (order corrected from 2 to 3).
  - [x] Single ` ```yaml ` minimum-viable workflow snippet (~17 lines, illustrative comments) included per AC #13. Eight pipeline stages (lint→test→build→deploy-dev→integration→deploy-staging→deploy-prod) named. `:::caution` for DM-the-API-key handoff.
  - [x] Forward link to `/development/backend-development/` and cross-phase to `/deployment-launch/deployment-execution-smoke-testing/` embedded inline.
  - [x] Plain `<ul>` for outcomes.

- [x] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [x] No hedging, no first-person plural, exactly 4 H2s in order, no relative `.md` or hardcoded URL links.

- [x] **Task 3 — Build verification** (AC: #8)
  - [x] `npm run build` passes; YAML fence renders without warnings.

- [x] **Task 4 — Commit**
  - [x] Scope `Epic 5 / Story 5.3`.

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

claude-opus-4-7

### Debug Log References

### Completion Notes List

- Authored `src/content/docs/development/devops-ci-cd.md`. Eight-stage MV pipeline shown as illustrative ` ```yaml ` snippet. Build-once-promote-everywhere, secrets-as-managed-resources, client-accessibility-from-day-one, runbook-as-you-build all named as best practices. Agency-vs-client pipeline split made explicit per Dev Notes. Industry section contrasts heavyweight-vs-light tooling, GitOps-vs-push-deploy, continuous-deployment-vs-release-as-event. Frontmatter order corrected from 2 to 3.

### File List

- src/content/docs/development/devops-ci-cd.md (modified)

### Change Log

- 2026-05-03: Authored DevOps & CI/CD (Story 5.3)
