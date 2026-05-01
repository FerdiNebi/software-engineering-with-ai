# Story 8.5: Retainer Structure & SLAs

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a consultant proposing or renewing a retainer with a client,
I want guidance on structuring retainers (fixed vs. variable bucket, SLA tiers, exclusions) and drafting the retainer agreement,
So that the ongoing relationship is contractually clean and pricing survives scrutiny.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/maintenance-retainer/retainer-structure-slas.md`; `title: "Retainer Structure & SLAs"`, `description:` (≤160 chars), `type: sub-section`, `phase: maintenance-retainer`, `order: 5`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** defines retainer as the post-launch contract mechanism and names the main structural choices (hours-bucket, feature-allocation, SLA-tiered).
10. **`## Best practices`** names specific conventions (clearly-defined inclusions/exclusions, documented SLA response/resolution targets, escalation path, renewal ritual).
11. **`## Desired outcomes`** lists: signed retainer, agreed SLAs, mutually understood exclusions, renewal calendar.
12. **`## What the industry does`** contrasts defined-bucket retainer vs. open-ended monthly-retainer structures.
13. **Required cross-links:** backward link to `/pre-sales/sow-contract-drafting/` AND forward link to `/pre-sales/` (lifecycle loop for new engagements).

## Tasks / Subtasks

- [ ] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [ ] Frontmatter per AC #1.
  - [ ] Write the four H2 sections per ACs #9–#12. `<Aside type="caution">` for "retainers without explicit exclusions — every ambiguity becomes an unbillable hour."
  - [ ] Embed required backward and forward links per AC #13.
  - [ ] Plain `<ul>` for outcomes.

- [ ] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [ ] Hedging → declarative; first-person plural → second person; exactly 4 H2s; no `./` or hardcoded URL links.

- [ ] **Task 3 — Build verification** (AC: #8)
  - [ ] `pnpm build` — succeeds; `dist/maintenance-retainer/retainer-structure-slas/index.html` exists.

- [ ] **Task 4 — Commit**
  - [ ] Scope `Epic 8 / Story 8.5`. Suggested: `Author Retainer Structure & SLAs (Epic 8 Story 8.5)`.

## Dev Notes

**Inclusions/exclusions are the headline.** A retainer without an exclusions section is an unbillable contract waiting to happen. Best practices section must lead with explicit exclusions discipline.

**Renewal calendar discipline.** Best practices should include a renewal-cadence convention — quarterly check-ins, annual renewal — so the retainer doesn't drift indefinitely.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/maintenance-retainer/retainer-structure-slas.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 5` — last sub-section under `maintenance-retainer/` and the last content sub-section in the entire site (the lifecycle loops back to Pre-Sales via the forward link, but Starlight sidebar order ends here).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-8.5]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Backward link to `/pre-sales/sow-contract-drafting/` (Story 2.4) and forward to `/pre-sales/` (Story 2.1) — slugs pinned. The forward link is the lifecycle-loop closer.

## Dev Agent Record

### Agent Model Used

_To be filled by dev-story agent._

### Debug Log References

### Completion Notes List

### File List
