# Story 5.9: Performance Engineering

Status: ready-for-dev

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

- [ ] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [ ] Frontmatter per AC #1.
  - [ ] Write the four H2 sections per ACs #9–#12. `<Aside type="caution">` for "premature optimization without a profiled baseline."
  - [ ] Embed required forward and cross-phase links per AC #13.
  - [ ] Plain `<ul>` for outcomes.

- [ ] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [ ] Hedging → declarative; first-person plural → second person; exactly 4 H2s; no `./` or hardcoded URL links.

- [ ] **Task 3 — Build verification** (AC: #8)
  - [ ] `pnpm build` — succeeds; `dist/development/performance-engineering/index.html` exists.

- [ ] **Task 4 — Commit**
  - [ ] Scope `Epic 5 / Story 5.9`. Suggested: `Author Performance Engineering (Epic 5 Story 5.9)`.

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

_To be filled by dev-story agent._

### Debug Log References

### Completion Notes List

### File List
