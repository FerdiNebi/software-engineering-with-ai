# Story 5.1: Development phase overview

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a reader entering Development,
I want an overview that frames the 9 dev sub-sections as the agency's delivery mechanics and hands off to QA,
So that I understand what the phase covers before drilling into any one concern.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/development/index.md`; `title: "Development"`, `description:` (≤160 chars), `type: phase-overview`, `phase: development`, `order: 1`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Cross-phase links (FR16):** ≥1 forward + ≥1 backward inline prose link.
7. **Internal links use leading-slash paths only.**
8. **No forbidden patterns.**
9. **Build & schema clean.**

**Topic-specific:**

10. **`## What happens here`** names the 9 sub-sections and groups them: plumbing (Repo + DevOps); build (Backend + Frontend); quality-in-dev (Developer Testing + Code Review + Secure Development + Performance); lifecycle (Technical Documentation).
11. **`## Desired outcomes`** lists: a completed build against the signed requirements, internal quality gates cleared, and a QA-ready handoff.
12. **`## What the industry does`** contrasts feature-factory vs. high-craft agency approaches.
13. **Required cross-links:** forward link to `/qa-testing/` AND backward link to `/requirements-design/`.

## Tasks / Subtasks

- [x] **Task 1 — Author the page** (AC: #1–#7, #10–#13)
  - [x] Frontmatter per AC #1 (order corrected from 4 to 1).
  - [x] Four-bucket grouping (plumbing/build/quality-in-dev/lifecycle) used in `## What happens here` with all 9 sub-sections named and linked. `:::tip` for Day-1 onboarding speed; `:::caution` for treating documentation as write-it-after.
  - [x] Forward link to `/qa-testing/` and backward to `/requirements-design/` embedded inline.
  - [x] Plain `<ul>` for outcomes.

- [x] **Task 2 — Lint pass** (AC: #2, #4, #7, #8)
  - [x] No hedging, no first-person plural, exactly 4 H2s in order, no relative `.md` or hardcoded URL links.

- [x] **Task 3 — Build verification** (AC: #9)
  - [x] `npm run build` passes.

- [x] **Task 4 — Commit**
  - [x] Scope `Epic 5 / Story 5.1`.

## Dev Notes

**Largest epic; explicit scaffolding helps the reader.** With 9 sub-sections, a flat list is overwhelming. The four-bucket grouping (plumbing/build/quality/lifecycle) gives readers a mental map. Use it consistently in `## What happens here` and reference it implicitly in cross-links from other dev sub-sections.

**Don't write the sub-sections' content here.** This overview names them and frames why they're grouped that way. Each sub-section page (5.2–5.10) goes deep on its topic.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/development/index.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 1` is the phase-overview slot; sub-sections start at `order: 2` and run through `order: 10`.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-5.1]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Forward link to `/qa-testing/` (Story 6.1) and backward to `/requirements-design/` (Story 4.1) — slugs pinned.

## Dev Agent Record

### Agent Model Used

claude-opus-4-7

### Debug Log References

### Completion Notes List

- Authored `src/content/docs/development/index.md`. Four-bucket grouping (plumbing/build/quality-in-dev/lifecycle) used as primary scaffold per Dev Notes. All 9 sub-sections named with leading-slash links. Industry section contrasts feature-factory vs high-craft, TDD-strict vs test-as-you-go vs test-after, trunk-based vs GitFlow. Frontmatter order corrected from 4 to 1.

### File List

- src/content/docs/development/index.md (modified)

### Change Log

- 2026-05-03: Authored Development phase overview (Story 5.1)
