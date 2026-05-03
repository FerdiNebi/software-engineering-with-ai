# Story 8.4: Incident Response

Status: review

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a tech lead on-call for a retainer client during an incident,
I want guidance on triage, communication with the client, and post-incident review,
So that incidents are resolved, reported, and learned from without damaging the client relationship.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/maintenance-retainer/incident-response.md`; `title: "Incident Response"`, `description:` (≤160 chars), `type: sub-section`, `phase: maintenance-retainer`, `order: 4`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** defines incident response as a distinct activity from bug-fix work (time-bounded, client-visible, SLO-driven).
10. **`## Best practices`** names specific conventions (severity matrix, named incident commander, comms cadence with client, post-incident review ritual, learning-log).
11. **`## Desired outcomes`** lists: resolved incident, client-signed post-incident review, SLA compliance reported, corrective actions tracked.
12. **`## What the industry does`** contrasts formal-IR-program vs. ad-hoc shops.
13. **Required cross-links:** backward link to `/deployment-launch/monitoring-observability-setup/` AND forward link to `/maintenance-retainer/retainer-structure-slas/`.

## Tasks / Subtasks

- [x] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [x] Frontmatter per AC #1 (order corrected from 3 to 4).
  - [x] Incident-vs-bug-vs-feature three-way split completed per Dev Notes. Four-tier severity matrix described concretely. Named incident commander, communication cadence, post-incident review with corrective-action tracking, learning log all named. `:::caution` for incident-response without commander.
  - [x] Backward link to `/deployment-launch/monitoring-observability-setup/` and forward to `/maintenance-retainer/retainer-structure-slas/` embedded inline.
  - [x] Plain `<ul>` for outcomes.

- [x] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [x] No hedging, no first-person plural, exactly 4 H2s in order, no relative `.md` or hardcoded URL links.

- [x] **Task 3 — Build verification** (AC: #8)
  - [x] `npm run build` passes.

- [x] **Task 4 — Commit**
  - [x] Scope `Epic 8 / Story 8.4`.

## Dev Notes

**Incident ≠ bug. Incident ≠ feature.** This page completes the three-way split started in Story 8.2. Incident is time-bounded, client-visible, and graded by severity against SLO. State this in `## What happens here`.

**Post-incident review is the learning artifact.** Best practices section must include the review ritual — without it, the agency repeats the same incident on different clients.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/maintenance-retainer/incident-response.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 4` — between Feature Iteration (3) and Retainer Structure & SLAs (5).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-8.4]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Backward link to `/deployment-launch/monitoring-observability-setup/` (Story 7.4) and forward to `/maintenance-retainer/retainer-structure-slas/` (Story 8.5) — slugs pinned.

## Dev Agent Record

### Agent Model Used

claude-opus-4-7

### Debug Log References

### Completion Notes List

- Authored `src/content/docs/maintenance-retainer/incident-response.md`. Four-phase IR framing (detect/triage/resolve/review). Four-tier severity matrix concrete. Blameless post-incident review and corrective-action tracking named per Dev Notes (post-incident review as the learning artifact). Industry section contrasts formal-IR-program vs ad-hoc, status-page vs direct-channel communication, blameless-review vs accountability-review. Frontmatter order corrected from 3 to 4.

### File List

- src/content/docs/maintenance-retainer/incident-response.md (modified)

### Change Log

- 2026-05-03: Authored Incident Response (Story 8.4)
