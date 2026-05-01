# Story 7.1: Deployment / Launch phase overview

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a reader entering Deployment / Launch,
I want an overview that covers the mechanics of going live and handing off to Maintenance & Retainer,
So that launch is the end of delivery, not the beginning of unplanned work.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/deployment-launch/index.md`; `title: "Deployment / Launch"`, `description:` (≤160 chars), `type: phase-overview`, `phase: deployment-launch`, `order: 1`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Cross-phase links (FR16):** ≥1 forward + ≥1 backward.
7. **Internal links use leading-slash paths only.**
8. **No forbidden patterns.**
9. **Build & schema clean.**

**Topic-specific:**

10. **`## What happens here`** names the 4 sub-sections (Infrastructure Provisioning, Deployment Execution & Smoke Testing, Monitoring & Observability Setup, Client Handoff & Launch Checklist).
11. **`## Desired outcomes`** lists: live production system, passed smoke tests, operational monitoring, completed handoff, closed engagement invoice.
12. **`## What the industry does`** contrasts big-bang vs. canary launch cultures.
13. **Required cross-links:** forward link to `/maintenance-retainer/` AND backward link to `/qa-testing/user-acceptance-testing/`.

## Tasks / Subtasks

- [ ] **Task 1 — Author the page** (AC: #1–#7, #10–#13)
  - [ ] Frontmatter per AC #1.
  - [ ] Write the four H2 sections per ACs #10–#12. `<Aside type="caution">` for "deployment day discovered as the first time the production environment exists."
  - [ ] Embed required forward and backward links per AC #13.
  - [ ] Plain `<ul>` for outcomes.

- [ ] **Task 2 — Lint pass** (AC: #2, #4, #7, #8)
  - [ ] Hedging → declarative; first-person plural → second person; exactly 4 H2s; no `./` or hardcoded URL links.

- [ ] **Task 3 — Build verification** (AC: #9)
  - [ ] `pnpm build` — succeeds; `dist/deployment-launch/index.html` exists.

- [ ] **Task 4 — Commit**
  - [ ] Scope `Epic 7 / Story 7.1`. Suggested: `Author Deployment / Launch phase overview (Epic 7 Story 7.1)`.

## Dev Notes

**Launch is the END of delivery, not the start of new work.** Frame the phase that way in `## What happens here`. The handoff (Story 7.5) closes the engagement; what comes next is Maintenance & Retainer's domain.

**Big-bang vs canary contrast.** Both are valid; client risk tolerance and infrastructure complexity drive the choice. Don't pick a winner.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/deployment-launch/index.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 1` — phase-overview slot.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-7.1]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Forward link to `/maintenance-retainer/` (Story 8.1) and backward to `/qa-testing/user-acceptance-testing/` (Story 6.6) — slugs pinned.

## Dev Agent Record

### Agent Model Used

_To be filled by dev-story agent._

### Debug Log References

### Completion Notes List

### File List
