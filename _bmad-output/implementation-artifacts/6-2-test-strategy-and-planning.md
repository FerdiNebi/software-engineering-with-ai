# Story 6.2: Test Strategy & Planning

Status: review

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a QA lead starting an agency engagement,
I want guidance on producing a test strategy that traces to signed FR/NFRs and a test plan that fits the engagement's budget,
So that testing is in-scope, traceable, and defensible at sign-off.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/qa-testing/test-strategy-planning.md`; `title: "Test Strategy & Planning"`, `description:` (≤160 chars), `type: sub-section`, `phase: qa-testing`, `order: 2`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** defines test strategy (the why/scope/approach) vs. test plan (the what/when/who), and explains the traceability-to-signed-requirements expectation.
10. **`## Best practices`** names specific conventions (traceability matrix FR→test case, risk-based prioritization, entry/exit criteria per test cycle).
11. **`## Desired outcomes`** lists: signed test strategy, agreed test plan, traceability matrix, agreed definition-of-test-done.
12. **`## What the industry does`** contrasts formal-TMMi vs. lightweight agency approaches.
13. **Required cross-links:** backward link to `/requirements-design/functional-nonfunctional-requirements/` AND forward link to `/qa-testing/functional-regression-testing/`.

## Tasks / Subtasks

- [x] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [x] Frontmatter per AC #1 (order corrected from 1 to 2).
  - [x] Strategy-vs-plan distinction made the headline per Dev Notes. Traceability matrix as defensibility tool covered concretely. Risk-based prioritisation, entry/exit criteria, deferred-bugs disposition all named. `:::caution` for plans-that-don't-trace.
  - [x] Backward link to `/requirements-design/functional-nonfunctional-requirements/` and forward to `/qa-testing/functional-regression-testing/` embedded inline.
  - [x] Plain `<ul>` for outcomes.

- [x] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [x] No hedging, no first-person plural, exactly 4 H2s in order, no relative `.md` or hardcoded URL links.

- [x] **Task 3 — Build verification** (AC: #8)
  - [x] `npm run build` passes.

- [x] **Task 4 — Commit**
  - [x] Scope `Epic 6 / Story 6.2`.

## Dev Notes

**Strategy-vs-plan distinction is the headline.** Many readers will conflate. Strategy is the why and scope (one document); plan is the operational schedule (test cycles, environments, who runs what). Clean split in `## What happens here`.

**Traceability matrix is the agency-defensibility tool.** Without it, "we tested it" becomes "we tested *something*." Best practices section must address how the matrix is built and maintained.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/qa-testing/test-strategy-planning.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 2` — first sub-section under `qa-testing/`.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-6.2]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Backward link to `/requirements-design/functional-nonfunctional-requirements/` (Story 4.2) and forward to `/qa-testing/functional-regression-testing/` (Story 6.3) — slugs pinned.

## Dev Agent Record

### Agent Model Used

claude-opus-4-7

### Debug Log References

### Completion Notes List

- Authored `src/content/docs/qa-testing/test-strategy-planning.md`. Strategy-vs-plan distinction landed in opening section per Dev Notes. Traceability matrix described concretely with named functions (gap detection, scope drift, triage, sign-off). Three-tier risk-based prioritisation shown. Industry section contrasts formal-TMMi vs lightweight, tooling-driven vs document-driven, embedded-QA vs handover-QA. Frontmatter order corrected from 1 to 2.

### File List

- src/content/docs/qa-testing/test-strategy-planning.md (modified)

### Change Log

- 2026-05-03: Authored Test Strategy & Planning (Story 6.2)
