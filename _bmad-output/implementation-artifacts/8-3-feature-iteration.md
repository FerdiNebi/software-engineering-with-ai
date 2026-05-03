# Story 8.3: Feature Iteration

Status: review

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a consultant handling post-launch feature requests within a retainer,
I want guidance on intake, scoping, and mini-SOW creation for features that exceed retainer budget,
So that feature work is either in-retainer or converted into a fresh engagement cleanly.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/maintenance-retainer/feature-iteration.md`; `title: "Feature Iteration"`, `description:` (≤160 chars), `type: sub-section`, `phase: maintenance-retainer`, `order: 3`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** defines feature iteration in retainer (small additive change) vs. new engagement (needs its own pre-sales loop), and names the triage mechanics.
10. **`## Best practices`** names specific conventions (intake queue, change-request form, mini-SOW template, re-pricing threshold, client-visible roadmap).
11. **`## Desired outcomes`** lists: a running feature-request intake, in-retainer vs. out-of-retainer decisions documented, renewed pre-sales cycle when work warrants it.
12. **`## What the industry does`** contrasts fixed-bucket retainer vs. elastic-retainer structures.
13. **Required cross-links:** forward link to `/pre-sales/` (for upsize conversions) AND backward link to `/maintenance-retainer/bug-fixes-patch-management/`.

## Tasks / Subtasks

- [x] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [x] Frontmatter per AC #1 (order corrected from 2 to 3).
  - [x] Re-pricing threshold made explicit per Dev Notes with three concrete examples (hours, calendar, architectural). Lifecycle loop to Pre-Sales framed as positive expansion. Intake queue, change-request form, mini-SOW pattern, client-visible roadmap, quarterly conversations all named. `:::caution` for compounding small features.
  - [x] Forward link to `/pre-sales/` and backward to `/maintenance-retainer/bug-fixes-patch-management/` embedded inline.
  - [x] Plain `<ul>` for outcomes.

- [x] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [x] No hedging, no first-person plural, exactly 4 H2s in order, no relative `.md` or hardcoded URL links.

- [x] **Task 3 — Build verification** (AC: #8)
  - [x] `npm run build` passes.

- [x] **Task 4 — Commit**
  - [x] Scope `Epic 8 / Story 8.3`.

## Dev Notes

**Re-pricing threshold is the agency-defense mechanism.** When does a "small feature" cross the line into a new engagement? Best practices section must give the practitioner the language and the threshold conversation with the client.

**The forward link to `/pre-sales/` is a structural feature.** Feature work that exceeds retainer budget loops back to Pre-Sales — that's the lifecycle's design. Make this loop explicit in prose, not just as an inline link.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/maintenance-retainer/feature-iteration.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 3` — between Bug Fixes & Patch Management (2) and Incident Response (4).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-8.3]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Forward link to `/pre-sales/` (Story 2.1) and backward to `/maintenance-retainer/bug-fixes-patch-management/` (Story 8.2) — slugs pinned.

## Dev Agent Record

### Agent Model Used

claude-opus-4-7

### Debug Log References

### Completion Notes List

- Authored `src/content/docs/maintenance-retainer/feature-iteration.md`. Re-pricing threshold made the agency-defense mechanism per Dev Notes. Pre-Sales loop framed as positive expansion of the relationship. Mini-SOW pattern named for in-between work. Industry section contrasts fixed-bucket vs elastic retainer, feature-iteration-only vs roadmap-driven, self-serve-mini-SOW vs full-Pre-Sales-for-everything. Frontmatter order corrected from 2 to 3.

### File List

- src/content/docs/maintenance-retainer/feature-iteration.md (modified)

### Change Log

- 2026-05-03: Authored Feature Iteration (Story 8.3)
