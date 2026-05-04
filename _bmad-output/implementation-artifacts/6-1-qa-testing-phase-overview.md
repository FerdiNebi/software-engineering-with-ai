# Story 6.1: QA / Testing phase overview

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a reader entering QA / Testing,
I want an overview of how agency QA is structured and scoped, and how it hands off to Deployment,
So that I understand how quality gates fit between build and launch.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/qa-testing/index.md`; `title: "QA / Testing"`, `description:` (≤160 chars), `type: phase-overview`, `phase: qa-testing`, `order: 1`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Cross-phase links (FR16):** ≥1 forward + ≥1 backward.
7. **Internal links use leading-slash paths only.**
8. **No forbidden patterns.**
9. **Build & schema clean.**

**Topic-specific:**

10. **`## What happens here`** names the 5 sub-sections (Test Strategy & Planning, Functional & Regression Testing, Performance Testing, Security Testing, UAT).
11. **`## Desired outcomes`** lists: passed test cycles against signed acceptance criteria, closed bug list (or explicitly deferred with client sign-off), UAT client sign-off, and a deployment-ready state.
12. **`## What the industry does`** contrasts QA-as-separate-discipline vs. QA-in-dev-team shops.
13. **Required cross-links:** forward link to `/deployment-launch/` AND backward link to `/development/`.

## Tasks / Subtasks

- [x] **Task 1 — Author the page** (AC: #1–#7, #10–#13)
  - [x] Frontmatter per AC #1 (order corrected from 5 to 1).
  - [x] All 5 sub-sections named with leading-slash links. Three-channel triage (bugs, enhancement requests, requirements-ambiguity findings) named per Dev Notes. `:::caution` for QA-as-late-requirements-ambiguity-discovery.
  - [x] Forward link to `/deployment-launch/` and backward to `/development/` embedded inline.
  - [x] Plain `<ul>` for outcomes.

- [x] **Task 2 — Lint pass** (AC: #2, #4, #7, #8)
  - [x] No hedging, no first-person plural, exactly 4 H2s in order, no relative `.md` or hardcoded URL links.

- [x] **Task 3 — Build verification** (AC: #9)
  - [x] `npm run build` passes.

- [x] **Task 4 — Commit**
  - [x] Scope `Epic 6 / Story 6.1`.

## Dev Notes

**QA as discrete discipline vs in-dev-team is a real split.** Some agencies have a QA function; others fold testing entirely into developers. This overview should not pick a side; the contrast in `## What the industry does` covers it.

**Bug-vs-enhancement triage is the agency-specific skill.** Many "bugs" found in QA are actually scope additions. Test cycles need a triage path back to change-control, not to dev's ticket queue.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/qa-testing/index.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 1` — phase-overview slot.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-6.1]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Forward link to `/deployment-launch/` (Story 7.1) and backward to `/development/` (Story 5.1) — slugs pinned.

## Dev Agent Record

### Agent Model Used

claude-opus-4-7

### Debug Log References

### Completion Notes List

- Authored `src/content/docs/qa-testing/index.md`. All 5 sub-sections named. Three-channel triage (bug/enhancement/ambiguity) made explicit per Dev Notes. Industry section contrasts QA-as-separate-discipline vs QA-in-dev-team without picking a side, plus test-cycle-driven vs continuous-testing and manual-first vs automation-first. Frontmatter order corrected from 5 to 1.

### File List

- src/content/docs/qa-testing/index.md (modified)

### Change Log

- 2026-05-03: Authored QA / Testing phase overview (Story 6.1)
