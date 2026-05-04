# Story 7.5: Client Handoff & Launch Checklist

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a consultant closing the delivery engagement,
I want a concrete checklist for handoff — credentials, docs, training, acceptance — and guidance on how to close cleanly,
So that the engagement ends with client self-sufficiency and a defensible sign-off.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/deployment-launch/client-handoff-launch-checklist.md`; `title: "Client Handoff & Launch Checklist"`, `description:` (≤160 chars), `type: sub-section`, `phase: deployment-launch`, `order: 5`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** frames handoff as a ritual, names the artifact set (credentials, docs, runbooks, training session, sign-off), and positions it as the gate to retainer.
10. **`## Best practices`** names specific conventions (named handoff meeting, walkthrough of each artifact, knowledge-transfer session recording, explicit acceptance ritual).
11. **`## Desired outcomes`** lists: client has everything needed to operate, signed handoff acceptance, closed invoice, explicit transition to retainer or end-of-engagement.
12. **`## What the industry does`** contrasts formal-handoff vs. "we're here on Slack anyway" cultures.
13. **Required cross-links:** forward link to `/maintenance-retainer/retainer-structure-slas/` AND backward link to `/pre-sales/sow-contract-drafting/` (acceptance-criteria origin).

## Tasks / Subtasks

- [x] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [x] Frontmatter per AC #1 (order corrected from 4 to 5).
  - [x] Six-class artifact set named (credentials, documentation, runbooks, training, acceptance, closing admin). Handoff-as-ritual framing explicit per Dev Notes. Three-relationship-transition options stated (retainer/warranty-only/clean-end). `:::caution` for Slack-channel handoffs.
  - [x] Forward link to `/maintenance-retainer/retainer-structure-slas/` and backward to `/pre-sales/sow-contract-drafting/` embedded inline.
  - [x] Plain `<ul>` for outcomes.

- [x] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [x] No hedging, no first-person plural, exactly 4 H2s in order, no relative `.md` or hardcoded URL links.

- [x] **Task 3 — Build verification** (AC: #8)
  - [x] `npm run build` passes.

- [x] **Task 4 — Commit**
  - [x] Scope `Epic 7 / Story 7.5`.

## Dev Notes

**Handoff is a ritual, not a vibe.** This page is the procedural anchor for ending the delivery engagement. The contrast with "we're here on Slack anyway" cultures is critical — informal handoffs trap agencies in unbilled support work indefinitely.

**Backward link to SOW (Story 2.4) is the acceptance-criteria anchor.** Whatever the SOW said acceptance criteria are, that's what the handoff must satisfy.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/deployment-launch/client-handoff-launch-checklist.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 5` — last sub-section under `deployment-launch/`. Starlight prev/next will land "next" on the first sub-section of Maintenance & Retainer.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-7.5]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Forward link to `/maintenance-retainer/retainer-structure-slas/` (Story 8.5) and backward to `/pre-sales/sow-contract-drafting/` (Story 2.4) — slugs pinned.

## Dev Agent Record

### Agent Model Used

claude-opus-4-7

### Debug Log References

### Completion Notes List

- Authored `src/content/docs/deployment-launch/client-handoff-launch-checklist.md`. Six-class artifact set named. Handoff-as-ritual landed in opening per Dev Notes. Three-relationship-transition options made explicit (retainer / warranty-only / clean end). Industry section contrasts formal-vs-Slack handoffs, single-event vs progressive, warranty-included vs warranty-as-paid-retainer. Frontmatter order corrected from 4 to 5.

### File List

- src/content/docs/deployment-launch/client-handoff-launch-checklist.md (modified)

### Change Log

- 2026-05-03: Authored Client Handoff & Launch Checklist (Story 7.5)
