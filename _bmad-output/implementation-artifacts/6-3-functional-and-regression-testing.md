# Story 6.3: Functional & Regression Testing

Status: review

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a QA engineer running test cycles,
I want guidance on test-case design, regression suite maintenance, and when manual vs. automated is the right call in an agency context,
So that cycles find real defects without consuming disproportionate budget.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/qa-testing/functional-regression-testing.md`; `title: "Functional & Regression Testing"`, `description:` (≤160 chars), `type: sub-section`, `phase: qa-testing`, `order: 3`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** defines functional testing (against requirements) and regression testing (against prior-passing behavior) and frames automation decisions as ROI-based.
10. **`## Best practices`** names specific conventions (test case authoring from requirements, regression suite pruning, automated smoke + manual depth model, bug-triage ritual with client).
11. **`## Desired outcomes`** lists: executed cycles with documented results, triaged defect list, regression coverage for shipped functionality.
12. **`## What the industry does`** contrasts manual-first vs. automation-first agency QA styles.
13. **Required cross-links:** forward link to `/qa-testing/performance-testing/` AND cross to `/development/developer-testing/`.

## Tasks / Subtasks

- [x] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [x] Frontmatter per AC #1 (order corrected from 2 to 3).
  - [x] Functional vs regression distinction made explicit. Manual-vs-automation framed as ROI conversation per Dev Notes. Automated-smoke + manual-depth model named. Regression-suite pruning covered with three triggers. Bug-triage ritual described concretely. `:::caution` for un-pruned regression suites.
  - [x] Forward link to `/qa-testing/performance-testing/` and cross-phase to `/development/developer-testing/` embedded inline.
  - [x] Plain `<ul>` for outcomes.

- [x] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [x] No hedging, no first-person plural, exactly 4 H2s in order, no relative `.md` or hardcoded URL links.

- [x] **Task 3 — Build verification** (AC: #8)
  - [x] `npm run build` passes.

- [x] **Task 4 — Commit**
  - [x] Scope `Epic 6 / Story 6.3`.

## Dev Notes

**Manual-vs-automated is an ROI conversation.** Best practices must explicitly address: when to write a test once and discard, when to invest in automation, when to decline a test entirely. Don't default to "automate everything."

**Regression suite pruning is real practice.** Tests that no longer prevent regressions are noise. Make this an explicit best-practice.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/qa-testing/functional-regression-testing.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 3` — between Test Strategy & Planning (2) and Performance Testing (4).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-6.3]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Forward link to `/qa-testing/performance-testing/` (Story 6.4) and cross-phase to `/development/developer-testing/` (Story 5.6) — slugs pinned.

## Dev Agent Record

### Agent Model Used

claude-opus-4-7

### Debug Log References

### Completion Notes List

- Authored `src/content/docs/qa-testing/functional-regression-testing.md`. Manual-vs-automated framed as ROI decision per Dev Notes (smoke-automated + manual-depth practical default). Regression-suite pruning covered with three concrete triggers. Test-case authoring template shown. Industry section contrasts manual-first vs automation-first, in-house automation vs record-and-replay, continuous-regression vs cycle-based-regression. Frontmatter order corrected from 2 to 3.

### File List

- src/content/docs/qa-testing/functional-regression-testing.md (modified)

### Change Log

- 2026-05-03: Authored Functional & Regression Testing (Story 6.3)
