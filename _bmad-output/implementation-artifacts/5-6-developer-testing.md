# Story 5.6: Developer Testing

Status: ready-for-dev

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

- [ ] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [ ] Frontmatter per AC #1.
  - [ ] Write the four H2 sections per ACs #9–#12. `<Aside type="caution">` for "100%-coverage targets that the client hasn't paid for" — over-investment is also a failure mode.
  - [ ] Embed required forward and cross-phase links per AC #13.
  - [ ] Plain `<ul>` for outcomes.

- [ ] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [ ] Hedging → declarative; first-person plural → second person; exactly 4 H2s; no `./` or hardcoded URL links.

- [ ] **Task 3 — Build verification** (AC: #8)
  - [ ] `pnpm build` — succeeds; `dist/development/developer-testing/index.html` exists.

- [ ] **Task 4 — Commit**
  - [ ] Scope `Epic 5 / Story 5.6`. Suggested: `Author Developer Testing (Epic 5 Story 5.6)`.

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

_To be filled by dev-story agent._

### Debug Log References

### Completion Notes List

### File List
