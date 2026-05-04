# Story 5.6: Developer Testing

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As an engineer writing tests during delivery,
I want guidance on what "developer testing" means in an agency context (unit/integration, not QA) and what coverage posture to take under fixed-scope pressure,
So that the delivery ships tested without over-investing where the client has not paid for rigor.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/development/developer-testing.md`; `title: "Developer Testing"`, `description:` (≤160 chars), `type: sub-section`, `phase: development`, `order: 6`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** distinguishes developer testing (unit + integration, owned by the engineer) from QA testing (system-level, owned by QA), and frames the "how much testing" question as a commercial one.
10. **`## Best practices`** names specific conventions (test-the-contract, property-based for critical paths, avoiding over-mocking, commit-gate coverage threshold).
11. **`## Desired outcomes`** lists: a passing test suite at merge, covered critical paths, documented test conventions for client handoff.
12. **`## What the industry does`** contrasts TDD-strict shops vs. pragmatic agencies.
13. **Required cross-links:** forward link to `/development/code-review/` AND cross to `/qa-testing/functional-regression-testing/`.

## Tasks / Subtasks

- [x] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [x] Frontmatter per AC #1 (order corrected from 5 to 6).
  - [x] Developer-vs-QA boundary made explicit per Dev Notes. Test-the-contract, property-based for critical paths, avoid over-mocking, coverage threshold gate all named. Commercial framing of coverage decisions covered. `:::caution` for over-investment.
  - [x] Forward link to `/development/code-review/` and cross-phase to `/qa-testing/functional-regression-testing/` embedded inline.
  - [x] Plain `<ul>` for outcomes.

- [x] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [x] No hedging, no first-person plural, exactly 4 H2s in order, no relative `.md` or hardcoded URL links.

- [x] **Task 3 — Build verification** (AC: #8)
  - [x] `npm run build` passes.

- [x] **Task 4 — Commit**
  - [x] Scope `Epic 5 / Story 5.6`.

## Dev Notes

**Developer-vs-QA boundary.** Many readers will conflate. Clean split:
- Developer testing — owned by the engineer at the line/contract level (unit, integration); runs on every commit.
- QA testing — owned by QA at the system/user-journey level (functional, regression, performance, security, UAT); runs on test cycles.
Land this distinction in `## What happens here`.

**The commercial framing matters.** Coverage targets are pricing decisions, not quality decisions. Best practices section should give the practitioner the language to discuss "how much testing" with project leads honestly.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/development/developer-testing.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 6` — opens the "quality-in-dev" group (Developer Testing, Code Review, Secure Development, Performance).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-5.6]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Forward link to `/development/code-review/` (Story 5.7) and cross-phase to `/qa-testing/functional-regression-testing/` (Story 6.3) — slugs pinned.

## Dev Agent Record

### Agent Model Used

claude-opus-4-7

### Debug Log References

### Completion Notes List

- Authored `src/content/docs/development/developer-testing.md`. Developer-vs-QA boundary made load-bearing in opening section. Commercial framing ("how much testing is a pricing decision, not a quality decision") explicit per Dev Notes. Five practices named (test the contract, property-based on critical paths, avoid over-mocking, coverage threshold gate, document test conventions). Industry section contrasts TDD-strict vs pragmatic, threshold-mandated vs coverage-as-signal, classic-pyramid vs inverted-pyramid. Frontmatter order corrected from 5 to 6.

### File List

- src/content/docs/development/developer-testing.md (modified)

### Change Log

- 2026-05-03: Authored Developer Testing (Story 5.6)
