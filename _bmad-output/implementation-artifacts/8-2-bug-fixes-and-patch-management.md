# Story 8.2: Bug Fixes & Patch Management

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a consultant supporting a live client system under a retainer,
I want guidance on classifying bugs, scheduling patches, and avoiding scope creep in a support context,
So that bug-fix work is budgeted, prioritized, and does not accidentally become unpaid feature work.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/maintenance-retainer/bug-fixes-patch-management.md`; `title: "Bug Fixes & Patch Management"`, `description:` (≤160 chars), `type: sub-section`, `phase: maintenance-retainer`, `order: 2`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** defines bug-fix work in the retainer context and distinguishes it from feature work and from incident response.
10. **`## Best practices`** names specific conventions (triage matrix, patch windows, emergency-patch ritual, scope discipline in-ticket, client-visible patch log).
11. **`## Desired outcomes`** lists: running backlog with triage, monthly/quarterly patch report, documented scope-boundary with client.
12. **`## What the industry does`** contrasts structured-SLA vs. best-effort cultures.
13. **Required cross-links:** forward link to `/maintenance-retainer/feature-iteration/` AND backward link to `/qa-testing/functional-regression-testing/` for regression-prevention mechanics.

## Tasks / Subtasks

- [ ] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [ ] Frontmatter per AC #1.
  - [ ] Write the four H2 sections per ACs #9–#12. `<Aside type="caution">` for "client-reported 'bugs' that are actually feature requests; mis-classification leaks scope."
  - [ ] Embed required forward and backward links per AC #13.
  - [ ] Plain `<ul>` for outcomes.

- [ ] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [ ] Hedging → declarative; first-person plural → second person; exactly 4 H2s; no `./` or hardcoded URL links.

- [ ] **Task 3 — Build verification** (AC: #8)
  - [ ] `pnpm build` — succeeds; `dist/maintenance-retainer/bug-fixes-patch-management/index.html` exists.

- [ ] **Task 4 — Commit**
  - [ ] Scope `Epic 8 / Story 8.2`. Suggested: `Author Bug Fixes & Patch Management (Epic 8 Story 8.2)`.

## Dev Notes

**Bug vs feature vs incident is the three-way split.** Many readers will conflate. Bug = previously-shipped behavior is wrong; feature = new behavior requested; incident = production unavailable or degraded. This page is just bugs; Stories 8.3 and 8.4 cover the others. State the split in `## What happens here`.

**Patch log discipline.** Best practices section needs a "client-visible patch log" entry — patches without a log become the agency's word against the client's memory.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/maintenance-retainer/bug-fixes-patch-management.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 2` — first sub-section under `maintenance-retainer/`.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-8.2]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Forward link to `/maintenance-retainer/feature-iteration/` (Story 8.3) and backward to `/qa-testing/functional-regression-testing/` (Story 6.3) — slugs pinned.

## Dev Agent Record

### Agent Model Used

_To be filled by dev-story agent._

### Debug Log References

### Completion Notes List

### File List
