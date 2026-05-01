# Story 8.1: Maintenance & Retainer phase overview

Status: ready-for-dev

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

- [ ] **Task 1 — Author the page** (AC: #1–#7, #10–#13)
  - [ ] Frontmatter per AC #1.
  - [ ] Write the four H2 sections per ACs #10–#12. Frame the lifecycle as a loop in `## What happens here` — Maintenance hands forward to Pre-Sales for follow-on engagements. `<Aside type="caution">` for "informal post-launch support that has no contract — agencies trapped in unbillable on-call."
  - [ ] Embed BOTH required cross-links per AC #13 (both directions are mandatory for this overview).
  - [ ] Plain `<ul>` for outcomes.

- [ ] **Task 2 — Lint pass** (AC: #2, #4, #7, #8)
  - [ ] Hedging → declarative; first-person plural → second person; exactly 4 H2s; no `./` or hardcoded URL links.

- [ ] **Task 3 — Build verification** (AC: #9)
  - [ ] `pnpm build` — succeeds; `dist/maintenance-retainer/index.html` exists.

- [ ] **Task 4 — Commit**
  - [ ] Scope `Epic 8 / Story 8.1`. Suggested: `Author Maintenance & Retainer phase overview (Epic 8 Story 8.1)`.

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

_To be filled by dev-story agent._

### Debug Log References

### Completion Notes List

### File List
