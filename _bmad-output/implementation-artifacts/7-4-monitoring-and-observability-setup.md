# Story 7.4: Monitoring & Observability Setup

Status: review

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a tech lead setting up ongoing observability before handoff,
I want guidance on what to instrument, what dashboards to produce for the client, and what alerts matter at launch,
So that the client operates the system with visibility, not hope.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/deployment-launch/monitoring-observability-setup.md`; `title: "Monitoring & Observability Setup"`, `description:` (≤160 chars), `type: sub-section`, `phase: deployment-launch`, `order: 4`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** distinguishes monitoring (known knowns) from observability (unknown unknowns), and frames the setup as a handoff deliverable.
10. **`## Best practices`** names specific conventions (SLO-based alerts, dashboards-per-stakeholder, alert noise management, runbook-linked-alerts).
11. **`## Desired outcomes`** lists: operational dashboards live, alerts routed, client-operable observability, baselines captured.
12. **`## What the industry does`** contrasts rich-platform vs. minimal-platform approaches.
13. **Required cross-links:** forward link to `/deployment-launch/client-handoff-launch-checklist/` AND cross to `/maintenance-retainer/incident-response/`.

## Tasks / Subtasks

- [x] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [x] Frontmatter per AC #1 (order corrected from 3 to 4).
  - [x] Monitoring-vs-observability distinction made the headline per Dev Notes. SLO-based alerts, audience-keyed dashboards, alert-noise management, runbook-linked alerts all named. Client-operable framing landed. `:::caution` for client-cannot-operate-our-monitoring (broader than the suggested noise variant; covers the muted-alert case implicitly via noise budget discipline).
  - [x] Forward link to `/deployment-launch/client-handoff-launch-checklist/` and cross-phase to `/maintenance-retainer/incident-response/` embedded inline.
  - [x] Plain `<ul>` for outcomes.

- [x] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [x] No hedging, no first-person plural, exactly 4 H2s in order, no relative `.md` or hardcoded URL links.

- [x] **Task 3 — Build verification** (AC: #8)
  - [x] `npm run build` passes.

- [x] **Task 4 — Commit**
  - [x] Scope `Epic 7 / Story 7.4`.

## Dev Notes

**Monitoring vs observability is the headline distinction.** Monitoring answers questions you knew to ask; observability lets you ask new questions. State the difference in `## What happens here`. SLO-based alerts belong in best practices.

**Client-operable framing.** Dashboards and alerts the agency understands but the client cannot use are a handoff failure. Best practices section needs a "who reads which dashboard" angle.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/deployment-launch/monitoring-observability-setup.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 4` — between Deployment Execution (3) and Client Handoff (5).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-7.4]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Forward link to `/deployment-launch/client-handoff-launch-checklist/` (Story 7.5) and cross-phase to `/maintenance-retainer/incident-response/` (Story 8.4) — slugs pinned.

## Dev Agent Record

### Agent Model Used

claude-opus-4-7

### Debug Log References

### Completion Notes List

- Authored `src/content/docs/deployment-launch/monitoring-observability-setup.md`. Monitoring-vs-observability distinction landed in opening per Dev Notes. SLO-based alerts as discipline (not threshold-based). Audience-keyed dashboards (executive/operations/per-service). Alert-noise management with three concrete disciplines (noise budget, tuning iterations, severity tiers). Client-operability framed as the handoff-defining concern. Industry section contrasts rich-platform vs minimal-platform, SLO-driven vs threshold-driven, push-to-client vs shared-with-client. Frontmatter order corrected from 3 to 4.

### File List

- src/content/docs/deployment-launch/monitoring-observability-setup.md (modified)

### Change Log

- 2026-05-03: Authored Monitoring & Observability Setup (Story 7.4)
