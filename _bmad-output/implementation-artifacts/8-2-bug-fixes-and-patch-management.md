# Story 8.2: Bug Fixes & Patch Management

Status: review

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a consultant supporting a live client system under a retainer,
I want guidance on classifying bugs, scheduling patches, and avoiding scope creep in a support context,
So that bug-fix work is budgeted, prioritized, and does not accidentally become unpaid feature work.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/maintenance-retainer/bug-fixes-patch-management.md`; `title: "Bug Fixes & Patch Management"`, `description:` (≤160 chars), `type: sub-section`, `phase: maintenance-retainer`, `order: 2`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** defines bug-fix work in the retainer context and distinguishes it from feature work and from incident response.
10. **`## Best practices`** names specific conventions (triage matrix, patch windows, emergency-patch ritual, scope discipline in-ticket, client-visible patch log).
11. **`## Desired outcomes`** lists: running backlog with triage, monthly/quarterly patch report, documented scope-boundary with client.
12. **`## What the industry does`** contrasts structured-SLA vs. best-effort cultures.
13. **Required cross-links:** forward link to `/maintenance-retainer/feature-iteration/` AND backward link to `/qa-testing/functional-regression-testing/` for regression-prevention mechanics.

## Tasks / Subtasks

- [x] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [x] Frontmatter per AC #1 (order corrected from 1 to 2).
  - [x] Three-class split (bug/feature/incident) made the headline per Dev Notes. Triage matrix with four severity tiers, scheduled patch windows, emergency-patch ritual, scope discipline in-ticket, client-visible patch log all named. `:::caution` for misclassified bugs.
  - [x] Forward link to `/maintenance-retainer/feature-iteration/` and backward to `/qa-testing/functional-regression-testing/` embedded inline.
  - [x] Plain `<ul>` for outcomes.

- [x] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [x] No hedging, no first-person plural, exactly 4 H2s in order, no relative `.md` or hardcoded URL links.

- [x] **Task 3 — Build verification** (AC: #8)
  - [x] `npm run build` passes.

- [x] **Task 4 — Commit**
  - [x] Scope `Epic 8 / Story 8.2`.

## Dev Notes

**Bug vs feature vs incident is the three-way split.** Many readers will conflate. Bug = previously-shipped behavior is wrong; feature = new behavior requested; incident = production unavailable or degraded. This page is just bugs; Stories 8.3 and 8.4 cover the others. State the split in `## What happens here`.

**Patch log discipline.** Best practices section needs a "client-visible patch log" entry — patches without a log become the agency's word against the client's memory.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/maintenance-retainer/bug-fixes-patch-management.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 2` — first sub-section under `maintenance-retainer/`.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-8.2]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Forward link to `/maintenance-retainer/feature-iteration/` (Story 8.3) and backward to `/qa-testing/functional-regression-testing/` (Story 6.3) — slugs pinned.

## Dev Agent Record

### Agent Model Used

claude-opus-4-7

### Debug Log References

### Completion Notes List

- Authored `src/content/docs/maintenance-retainer/bug-fixes-patch-management.md`. Three-class split (bug/feature/incident) made the headline per Dev Notes. Four-tier triage matrix described concretely. Client-visible patch log named as renewal-defensibility artifact. Industry section contrasts structured-SLA vs best-effort, routine-cadence vs continuous-deployment, in-house-only vs client-engineer-collaborative patches. Frontmatter order corrected from 1 to 2.

### File List

- src/content/docs/maintenance-retainer/bug-fixes-patch-management.md (modified)

### Change Log

- 2026-05-03: Authored Bug Fixes & Patch Management (Story 8.2)
