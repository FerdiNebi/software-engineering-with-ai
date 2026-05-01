# Story 5.10: Technical Documentation

Status: ready-for-dev

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

- [ ] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [ ] Frontmatter per AC #1.
  - [ ] Write the four H2 sections per ACs #9–#12. `<Aside type="caution">` for "documentation written for the agency's own team, not for the client receiving the handoff."
  - [ ] Embed required forward and cross-phase links per AC #13. Three cross-links here is the maximum the page should carry; don't add more.
  - [ ] Plain `<ul>` for outcomes.

- [ ] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [ ] Hedging → declarative; first-person plural → second person; exactly 4 H2s; no `./` or hardcoded URL links.

- [ ] **Task 3 — Build verification** (AC: #8)
  - [ ] `pnpm build` — succeeds; `dist/development/technical-documentation/index.html` exists.

- [ ] **Task 4 — Commit**
  - [ ] Scope `Epic 5 / Story 5.10`. Suggested: `Author Technical Documentation (Epic 5 Story 5.10)`.

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

_To be filled by dev-story agent._

### Debug Log References

### Completion Notes List

### File List
