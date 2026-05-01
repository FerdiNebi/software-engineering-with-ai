# Story 5.5: Frontend Development

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a frontend engineer delivering for an agency client,
I want guidance on the agency-specific concerns — implementing against signed UX/UI design, component-library discipline, and accessibility-bake-in at build time,
So that the delivered UI matches the signed design and accessibility is not a late-stage surprise.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/development/frontend-development.md`; `title: "Frontend Development"`, `description:` (≤160 chars), `type: sub-section`, `phase: development`, `order: 5`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** frames agency-frontend as implementing against a signed UX/UI deliverable and states the common handoff problems (design drift, accessibility gaps at QA, component-library bloat).
10. **`## Best practices`** names specific conventions (component-library alignment, design-token consumption, a11y at commit-time, responsive testing in dev).
11. **`## Desired outcomes`** lists: a deployed frontend matching signed design, a11y-verified at dev time, and a component inventory for client handoff.
12. **`## What the industry does`** contrasts framework-prescriptive shops vs. framework-agnostic shops.
13. **Required cross-links:** backward link to `/requirements-design/ux-ui-design/` AND forward link to `/development/developer-testing/`.

## Tasks / Subtasks

- [ ] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [ ] Frontmatter per AC #1.
  - [ ] Write the four H2 sections per ACs #9–#12. `<Aside type="caution">` for "designing in the browser instead of implementing the signed design" — common dev-side scope creep.
  - [ ] Embed required backward and forward links per AC #13.
  - [ ] Plain `<ul>` for outcomes.

- [ ] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [ ] Hedging → declarative; first-person plural → second person; exactly 4 H2s; no `./` or hardcoded URL links.

- [ ] **Task 3 — Build verification** (AC: #8)
  - [ ] `pnpm build` — succeeds; `dist/development/frontend-development/index.html` exists.

- [ ] **Task 4 — Commit**
  - [ ] Scope `Epic 5 / Story 5.5`. Suggested: `Author Frontend Development (Epic 5 Story 5.5)`.

## Dev Notes

**Implementing-not-designing is the headline.** Frontend developers in agency engagements implement against signed UX/UI deliverables. Designing in the browser belongs to the requirements-design phase. State this in `## What happens here`.

**Framework-prescriptive vs framework-agnostic is real.** Some agencies always ship React; others pick the stack per engagement. Frame both honestly; don't take a side.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/development/frontend-development.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 5` — pairs with Backend Development (4) in the "build" group.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-5.5]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Backward link to `/requirements-design/ux-ui-design/` (Story 4.3) and forward to `/development/developer-testing/` (Story 5.6) — slugs pinned.

## Dev Agent Record

### Agent Model Used

_To be filled by dev-story agent._

### Debug Log References

### Completion Notes List

### File List
