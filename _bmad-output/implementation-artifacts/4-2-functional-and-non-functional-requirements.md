# Story 4.2: Functional & Non-Functional Requirements

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a consultant producing the formal requirements document for a client engagement,
I want guidance on how to structure, write, and review FRs and NFRs,
So that requirements are testable, unambiguous, and defensible as acceptance criteria.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/requirements-design/functional-nonfunctional-requirements.md`; `title: "Functional & Non-Functional Requirements"`, `description:` (≤160 chars), `type: sub-section`, `phase: requirements-design`, `order: 2`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** defines the distinction between FRs and NFRs and explains where they come from (discovery inputs) and where they go (dev plans, QA test strategy, sign-off criteria).
10. **`## Best practices`** names specific writing conventions (atomic, testable, traceable, numbered, source-attributed) and review techniques.
11. **`## Desired outcomes`** lists: a numbered FR/NFR list, cross-reference matrix to user journeys, agreed acceptance criteria per FR/NFR, and traceability through to test plans.
12. **`## What the industry does`** contrasts ISO/IEEE-formal approaches vs. agile user-story styles.
13. **Required cross-links:** forward link to `/qa-testing/test-strategy-planning/` (traceability to testing) AND backward link to `/discovery/requirements-workshops/`.

## Tasks / Subtasks

- [x] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [x] Frontmatter per AC #1 (order corrected from 1 to 2).
  - [x] FR/NFR distinction made explicit with concrete examples. Atomic-testable-traceable trinity covered as core discipline. Statement template, stable numbering, source attribution, acceptance criteria per requirement all named. `:::tip` for sampled review; `:::caution` for vague NFRs.
  - [x] Forward link to `/qa-testing/test-strategy-planning/` and backward to `/discovery/requirements-workshops/` embedded inline.
  - [x] Plain `<ul>` for outcomes.

- [x] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [x] No hedging, no first-person plural, exactly 4 H2s in order, no relative `.md` or hardcoded URL links.

- [x] **Task 3 — Build verification** (AC: #8)
  - [x] `npm run build` passes.

- [x] **Task 4 — Commit**
  - [x] Scope `Epic 4 / Story 4.2`.

## Dev Notes

**Atomic-testable-traceable is the core spec.** Every FR/NFR must be one thing, must be verifiable in finite time, and must trace back to a discovery input and forward to a test plan. State this trinity in `## Best practices` early and use it as the anchor for the rest of the section.

**Concrete examples — don't ship the page without one or two.** Show what a good FR looks like (`FR-12: A logged-in admin can revoke an active session in <2 seconds`) versus a bad one (`The system shall be secure`). Code fences are fine for FR examples; this is plain Markdown, not a literal language block.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/requirements-design/functional-nonfunctional-requirements.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 2` — first sub-section under `requirements-design/`.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-4.2]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Forward link to `/qa-testing/test-strategy-planning/` (Story 6.2) and backward to `/discovery/requirements-workshops/` (Story 3.3) — slugs pinned.

## Dev Agent Record

### Agent Model Used

claude-opus-4-7

### Debug Log References

### Completion Notes List

- Authored `src/content/docs/requirements-design/functional-nonfunctional-requirements.md`. FR vs NFR distinction with concrete good/bad examples per Dev Notes guidance. Atomic-testable-traceable trinity established early and used as anchor. Concrete examples land in opening section: `FR-12: A logged-in admin can revoke an active session within 2 seconds` versus the bad `The system shall be secure`. Stable-numbering, source-attribution, and per-requirement acceptance criteria covered. Industry section contrasts ISO/IEEE-formal vs agile-user-story, single-document vs tooling-driven, sponsor-only vs cross-functional sign-off. Frontmatter order corrected from 1 to 2.

### File List

- src/content/docs/requirements-design/functional-nonfunctional-requirements.md (modified)

### Change Log

- 2026-05-03: Authored Functional & Non-Functional Requirements (Story 4.2)
