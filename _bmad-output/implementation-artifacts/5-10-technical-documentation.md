# Story 5.10: Technical Documentation

Status: review

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As an engineer producing technical documentation as part of client handoff,
I want guidance on what to document, what to deliberately not document, and what format the client can actually use post-handoff,
So that documentation is a real handoff deliverable, not a retrospective exercise.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/development/technical-documentation.md`; `title: "Technical Documentation"`, `description:` (≤160 chars), `type: sub-section`, `phase: development`, `order: 10`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** frames technical documentation as a handoff deliverable (not an internal artifact) and lists the standard set (architecture reference, API reference, operational runbook, onboarding guide, known-issues log).
10. **`## Best practices`** names specific conventions (docs-in-repo, executable-where-possible, reader-calibrated to client team's skill level, last-updated discipline).
11. **`## Desired outcomes`** lists: a doc set checked into the client repo, validated by a client-side reader, and documented update expectations for maintenance phase.
12. **`## What the industry does`** contrasts minimalist-docs vs. exhaustive-docs shops.
13. **Required cross-links:** forward link to QA via `/development/` overview AND cross to `/deployment-launch/client-handoff-launch-checklist/` AND `/maintenance-retainer/`.

## Tasks / Subtasks

- [x] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [x] Frontmatter per AC #1 (order corrected from 9 to 10).
  - [x] Handoff-deliverable framing made the headline. Five-artifact set named (architecture, API, runbook, onboarding, known-issues log). Reader-calibration, executable-documentation, last-updated discipline, deliberate-non-documentation choices all named per Dev Notes. `:::caution` for documentation-for-agency-team.
  - [x] Cross-phase links to `/deployment-launch/client-handoff-launch-checklist/` and `/maintenance-retainer/` embedded inline (kept to two cross-phase links per Dev Notes guidance).
  - [x] Plain `<ul>` for outcomes.

- [x] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [x] No hedging, no first-person plural, exactly 4 H2s in order, no relative `.md` or hardcoded URL links.

- [x] **Task 3 — Build verification** (AC: #8)
  - [x] `npm run build` passes.

- [x] **Task 4 — Commit**
  - [x] Scope `Epic 5 / Story 5.10`.

## Dev Notes

**Reader-calibration is the agency skill.** Documentation for an in-house team that already knows the codebase is different from documentation for a client team inheriting it. Best practices section must address this calibration explicitly.

**What to deliberately NOT document.** Don't generate exhaustive API references that go stale on first edit. Document the why and the boundary; let code generation handle the what.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/development/technical-documentation.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 10` — last sub-section under `development/`. Starlight prev/next will land "next" on the first sub-section of QA / Testing.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-5.10]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Cross-phase forward link to `/deployment-launch/client-handoff-launch-checklist/` (Story 7.5) and `/maintenance-retainer/` (Story 8.1) — slugs pinned.

## Dev Agent Record

### Agent Model Used

claude-opus-4-7

### Debug Log References

### Completion Notes List

- Authored `src/content/docs/development/technical-documentation.md`. Reader-calibration framed as the agency-specific skill per Dev Notes. Three executable-documentation classes named (running code samples, generated reference, tested runbook commands). Three categories of "deliberately do not document" listed (exhaustive hand-maintained API refs, step-by-step UI walkthroughs, internal team process docs). Industry section contrasts minimalist vs exhaustive, docs-as-code vs wiki-driven, generated-reference vs hand-written-reference cultures. Frontmatter order corrected from 9 to 10.

### File List

- src/content/docs/development/technical-documentation.md (modified)

### Change Log

- 2026-05-03: Authored Technical Documentation (Story 5.10)
