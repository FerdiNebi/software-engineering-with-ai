# Story 7.2: Infrastructure Provisioning

Status: review

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a tech lead provisioning production infrastructure for go-live,
I want guidance on the sequence, naming, and verification of the production environment,
So that launch day is not the first day production exists.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/deployment-launch/infrastructure-provisioning.md`; `title: "Infrastructure Provisioning"`, `description:` (≤160 chars), `type: sub-section`, `phase: deployment-launch`, `order: 2`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** defines infra provisioning as the execution of the infrastructure-design plan in production, and names the typical tasks (environment creation, DNS, certs, secrets, runtime config).
10. **`## Best practices`** names specific conventions (infrastructure-as-code from the start, dry-run in staging, pre-launch readiness review, documented rollback plan).
11. **`## Desired outcomes`** lists: live production environment, verified DNS+certs, documented runbook, signed-off readiness review.
12. **`## What the industry does`** contrasts IaC-first vs. console-configured shops.
13. **Required cross-links:** backward link to `/requirements-design/infrastructure-design/` AND forward link to `/deployment-launch/deployment-execution-smoke-testing/`.

## Tasks / Subtasks

- [x] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [x] Frontmatter per AC #1 (order corrected from 1 to 2).
  - [x] Provisioning-as-execution-of-design framing made explicit per Dev Notes. Six task classes named (env creation, DNS, certs, secrets, runtime config, monitoring connection). Pre-launch readiness review covered with concrete checklist concept. `:::caution` for console-configured production.
  - [x] Backward link to `/requirements-design/infrastructure-design/` and forward to `/deployment-launch/deployment-execution-smoke-testing/` embedded inline.
  - [x] Plain `<ul>` for outcomes.

- [x] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [x] No hedging, no first-person plural, exactly 4 H2s in order, no relative `.md` or hardcoded URL links.

- [x] **Task 3 — Build verification** (AC: #8)
  - [x] `npm run build` passes.

- [x] **Task 4 — Commit**
  - [x] Scope `Epic 7 / Story 7.2`.

## Dev Notes

**Provisioning ≠ design.** This page is the *execution* of the infrastructure design plan from Story 4.5. State the boundary in `## What happens here` and link backward.

**Pre-launch readiness review is a real ritual.** Best practices section needs a concrete checklist concept (not the literal checklist; that's Story 7.5's territory) — DNS, certs, secrets, monitoring all working together before launch day.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/deployment-launch/infrastructure-provisioning.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 2` — first sub-section under `deployment-launch/`.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-7.2]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#Infrastructure-and-Deployment]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Backward link to `/requirements-design/infrastructure-design/` (Story 4.5) and forward to `/deployment-launch/deployment-execution-smoke-testing/` (Story 7.3) — slugs pinned.

## Dev Agent Record

### Agent Model Used

claude-opus-4-7

### Debug Log References

### Completion Notes List

- Authored `src/content/docs/deployment-launch/infrastructure-provisioning.md`. Provisioning-vs-design boundary made the headline. Six task classes named. Pre-launch readiness review described with concrete check items. Industry section contrasts IaC-first vs console, greenfield vs integrate-with-client, big-bang vs incremental provisioning. Frontmatter order corrected from 1 to 2.

### File List

- src/content/docs/deployment-launch/infrastructure-provisioning.md (modified)

### Change Log

- 2026-05-03: Authored Infrastructure Provisioning (Story 7.2)
