# Story 5.9: Performance Engineering

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a tech lead concerned with performance during a fixed-scope engagement,
I want guidance on where to invest performance work, what baselines to establish, and when to defer,
So that performance meets the signed NFRs without runaway optimization.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/development/performance-engineering.md`; `title: "Performance Engineering"`, `description:` (≤160 chars), `type: sub-section`, `phase: development`, `order: 9`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** frames performance engineering as NFR-driven (not "make it fast"), and names typical techniques (baseline-before-optimize, profile-then-tune, budget-per-FR).
10. **`## Best practices`** names specific conventions (performance budgets on NFRs, CI-level perf regression checks, load-testing in pre-launch, caching layers).
11. **`## Desired outcomes`** lists: signed-off NFR performance numbers met, documented performance budgets, perf-regression detection in CI.
12. **`## What the industry does`** contrasts perf-by-design vs. perf-as-fix-at-end styles.
13. **Required cross-links:** forward link to `/development/technical-documentation/` AND cross to `/qa-testing/performance-testing/`.

## Tasks / Subtasks

- [x] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [x] Frontmatter per AC #1 (order corrected from 8 to 9).
  - [x] NFR-driven framing made the headline per Dev Notes — "no NFR, no perf work" stance landed in opening section. Three techniques (baseline-before-optimise, profile-then-tune, budget-per-FR) named. Performance budgets as testable thresholds, CI regression checks, caching proportional to budget, pre-launch load testing all named. Defer-when discipline framed positively. `:::caution` for premature optimisation.
  - [x] Forward link to `/development/technical-documentation/` and cross-phase to `/qa-testing/performance-testing/` embedded inline.
  - [x] Plain `<ul>` for outcomes.

- [x] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [x] No hedging, no first-person plural, exactly 4 H2s in order, no relative `.md` or hardcoded URL links.

- [x] **Task 3 — Build verification** (AC: #8)
  - [x] `npm run build` passes.

- [x] **Task 4 — Commit**
  - [x] Scope `Epic 5 / Story 5.9`.

## Dev Notes

**NFR-driven framing is the headline.** "Performance" without a budget is a black hole. Tie every technique back to a signed NFR. Best practices section's first paragraph should state: no NFR, no perf work — define the budget first.

**Defer-when discipline.** Knowing when to NOT do perf work is the agency skill; many engineers default to optimizing whatever they touch. Frame deferral as a positive practice, not laziness.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/development/performance-engineering.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 9` — closes the "quality-in-dev" group; next is Technical Documentation (10).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-5.9]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Forward link to `/development/technical-documentation/` (Story 5.10) and cross-phase to `/qa-testing/performance-testing/` (Story 6.4) — slugs pinned.

## Dev Agent Record

### Agent Model Used

claude-opus-4-7

### Debug Log References

### Completion Notes List

- Authored `src/content/docs/development/performance-engineering.md`. NFR-driven headline per Dev Notes. Three techniques covered concretely. Defer-when framed as positive practice with documented-deferral discipline. Industry section contrasts perf-by-design vs perf-as-fix-at-end, synthetic-monitoring-driven vs RUM, caching-eager vs caching-lazy. Frontmatter order corrected from 8 to 9.

### File List

- src/content/docs/development/performance-engineering.md (modified)

### Change Log

- 2026-05-03: Authored Performance Engineering (Story 5.9)
