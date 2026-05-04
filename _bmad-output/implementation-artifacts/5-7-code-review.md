# Story 5.7: Code Review

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As an engineer participating in agency code review,
I want guidance on what to look for, how to review under delivery pressure, and how to run review across agency + client engineers,
So that review catches real issues without bottlenecking delivery.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/development/code-review.md`; `title: "Code Review"`, `description:` (≤160 chars), `type: sub-section`, `phase: development`, `order: 7`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** frames code review as both quality gate and knowledge-transfer mechanism, important for client-handoff scenarios.
10. **`## Best practices`** names specific conventions (review checklist, size-the-PR-small, reviewer rotation, client-engineer-in-review for handoff engagements, comment etiquette).
11. **`## Desired outcomes`** lists: reviewed-before-merge policy enforced, review comments resolved or deferred with rationale, documented review conventions.
12. **`## What the industry does`** contrasts heavyweight-review vs. trust-based-review shops.
13. **Required cross-links:** forward link to `/development/secure-development-practices/` AND cross to `/qa-testing/`.

## Tasks / Subtasks

- [x] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [x] Frontmatter per AC #1 (order corrected from 6 to 7).
  - [x] Both quality-gate AND knowledge-transfer purposes named in opening (per Dev Notes). PR-size discipline, written checklist, design-and-risk focus, reviewer rotation, client-engineer-in-review, comment etiquette all named. `:::caution` for syntax-style review.
  - [x] Forward link to `/development/secure-development-practices/` and cross-phase to `/qa-testing/` embedded inline.
  - [x] Plain `<ul>` for outcomes.

- [x] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [x] No hedging, no first-person plural, exactly 4 H2s in order, no relative `.md` or hardcoded URL links.

- [x] **Task 3 — Build verification** (AC: #8)
  - [x] `npm run build` passes.

- [x] **Task 4 — Commit**
  - [x] Scope `Epic 5 / Story 5.7`.

## Dev Notes

**Knowledge-transfer angle is the agency-specific twist.** In product-company contexts code review is a quality gate. In agency contexts it's *also* the mechanism by which client engineers come up to speed on what's being delivered. State both purposes in `## What happens here`.

**Comment etiquette is real best practice.** Tone of comments survives the review by ending up in the repo's history. Frame this as professional discipline, not soft skills.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/development/code-review.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 7` — sits in the "quality-in-dev" group between Developer Testing (6) and Secure Development (8).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-5.7]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Forward link to `/development/secure-development-practices/` (Story 5.8) and cross-phase to `/qa-testing/` (Story 6.1) — slugs pinned.

## Dev Agent Record

### Agent Model Used

claude-opus-4-7

### Debug Log References

### Completion Notes List

- Authored `src/content/docs/development/code-review.md`. Both purposes (quality gate + knowledge transfer) framed in opening per Dev Notes guidance. Comment etiquette as professional discipline covered with concrete good/bad examples. Industry section contrasts heavyweight-vs-trust-based review, synchronous-vs-asynchronous, author-engaged-vs-silent-author cultures. Frontmatter order corrected from 6 to 7.

### File List

- src/content/docs/development/code-review.md (modified)

### Change Log

- 2026-05-03: Authored Code Review (Story 5.7)
