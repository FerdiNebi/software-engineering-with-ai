# Story 4.2: Functional & Non-Functional Requirements

Status: ready-for-dev

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

- [ ] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [ ] Frontmatter per AC #1.
  - [ ] Write the four H2 sections per ACs #9–#12. `<Aside type="tip">` for the atomic-testable-traceable rule; `<Aside type="caution">` for "vague NFRs that nobody can sign off on" (e.g., 'system shall be fast').
  - [ ] Embed required forward and backward links per AC #13.
  - [ ] Plain `<ul>` for outcomes.

- [ ] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [ ] Hedging → declarative; first-person plural → second person; exactly 4 H2s; no `./` or hardcoded URL links.

- [ ] **Task 3 — Build verification** (AC: #8)
  - [ ] `pnpm build` — succeeds; `dist/requirements-design/functional-nonfunctional-requirements/index.html` exists.

- [ ] **Task 4 — Commit**
  - [ ] Scope `Epic 4 / Story 4.2`. Suggested: `Author Functional & Non-Functional Requirements (Epic 4 Story 4.2)`.

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

_To be filled by dev-story agent._

### Debug Log References

### Completion Notes List

### File List
