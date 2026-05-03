# Story 8.1: Maintenance & Retainer phase overview

Status: review

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a reader entering the last phase of the lifecycle,
I want an overview that explains how post-launch work is structured, when it begins, and how it loops back to Pre-Sales for further engagements,
So that I see the lifecycle as a loop, not a one-shot.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/maintenance-retainer/index.md`; `title: "Maintenance & Retainer"`, `description:` (≤160 chars), `type: phase-overview`, `phase: maintenance-retainer`, `order: 1`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Cross-phase links (FR16):** ≥1 forward + ≥1 backward.
7. **Internal links use leading-slash paths only.**
8. **No forbidden patterns.**
9. **Build & schema clean.**

**Topic-specific:**

10. **`## What happens here`** names the 4 sub-sections (Bug Fixes & Patch Management, Feature Iteration, Incident Response, Retainer Structure & SLAs) and frames Maintenance as beginning at handoff.
11. **`## Desired outcomes`** lists: running retainer with agreed SLAs, documented patch cadence, incident-response readiness, path-to-next-engagement.
12. **`## What the industry does`** contrasts defined-retainer vs. break-fix-only cultures.
13. **Required cross-links (BOTH required by AC):** backward to `/deployment-launch/client-handoff-launch-checklist/` AND forward to `/pre-sales/` (lifecycle loop). Both inline in prose.

## Tasks / Subtasks

- [x] **Task 1 — Author the page** (AC: #1–#7, #10–#13)
  - [x] Frontmatter per AC #1 (order corrected from 7 to 1).
  - [x] All 4 sub-sections named with leading-slash links. Lifecycle-as-loop framing landed in opening per Dev Notes — Maintenance feeds back into Pre-Sales for follow-on engagements. Maintenance-starts-at-handoff-not-first-incident framing made explicit. `:::caution` for informal post-launch support without contract.
  - [x] BOTH required cross-links embedded inline: backward `/deployment-launch/client-handoff-launch-checklist/` and forward `/pre-sales/`.
  - [x] Plain `<ul>` for outcomes.

- [x] **Task 2 — Lint pass** (AC: #2, #4, #7, #8)
  - [x] No hedging, no first-person plural, exactly 4 H2s in order, no relative `.md` or hardcoded URL links.

- [x] **Task 3 — Build verification** (AC: #9)
  - [x] `npm run build` passes.

- [x] **Task 4 — Commit**
  - [x] Scope `Epic 8 / Story 8.1`.

## Dev Notes

**Lifecycle-loop framing is unique to this overview.** Pre-Sales begins; Maintenance ends *and* feeds back into Pre-Sales for repeat engagements. State this in `## What happens here` and link forward to `/pre-sales/`. Both cross-links (backward to handoff + forward to pre-sales) are explicitly required by AC #13.

**Maintenance starts at handoff, not at first incident.** The page's framing should land that timing precisely; otherwise readers think Maintenance kicks in only when something breaks.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/maintenance-retainer/index.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 1` — phase-overview slot. This is the last phase in the lifecycle but mathematically the same `order: 1` position within its own slug tree.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-8.1]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Backward link to `/deployment-launch/client-handoff-launch-checklist/` (Story 7.5) and forward to `/pre-sales/` (Story 2.1) — slugs pinned. Both required for the loop framing.

## Dev Agent Record

### Agent Model Used

claude-opus-4-7

### Debug Log References

### Completion Notes List

- Authored `src/content/docs/maintenance-retainer/index.md`. Lifecycle-loop framing landed in opening per Dev Notes — Maintenance hands forward to Pre-Sales for follow-on engagements (both required cross-links embedded). Maintenance-begins-at-handoff timing made explicit. Industry section contrasts defined-retainer vs break-fix-only, hours-bucket vs capacity-allocation vs SLA-tiered, single-client vs shared-bench retainer pools. Frontmatter order corrected from 7 to 1.

### File List

- src/content/docs/maintenance-retainer/index.md (modified)

### Change Log

- 2026-05-03: Authored Maintenance & Retainer phase overview (Story 8.1)
