# Story 4.3: UX/UI Design

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a consultant owning the UX/UI deliverables for an engagement,
I want to know what design artifacts to produce, how to review them with the client, and how to hand them off to development,
So that implementation matches design and design sign-off does not unravel during build.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/requirements-design/ux-ui-design.md`; `title: "UX/UI Design"`, `description:` (≤160 chars), `type: sub-section`, `phase: requirements-design`, `order: 3`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** defines UX/UI as a Requirements & Design activity (not a Development activity) and names the standard artifact set (user flows, wireframes, mockups, interactive prototypes, design system tokens).
10. **`## Best practices`** names specific design-review cadences, version-control conventions for design files, component-library handoff practices, and accessibility bake-in (WCAG considerations at design time, not as a QA afterthought).
11. **`## Desired outcomes`** lists: signed-off design deliverables, a design system or component inventory, documented interaction patterns, and a dev-ready handoff (Figma/Sketch spec, asset exports, design tokens).
12. **`## What the industry does`** contrasts full-fidelity-up-front vs. build-in-parallel-with-dev approaches.
13. **Required cross-links:** forward link to `/development/frontend-development/` AND cross to `/qa-testing/user-acceptance-testing/`.

## Tasks / Subtasks

- [x] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [x] Frontmatter per AC #1 (order corrected from 2 to 3).
  - [x] UX/UI as Requirements & Design activity made explicit. Five-layer artifact set (flows, wireframes, mockups, prototypes, design system/tokens) named. Accessibility-as-design-time-discipline covered with three concrete techniques (contrast tokens, touch targets, keyboard/screen-reader patterns). `:::tip` for buildability review; `:::caution` for accessibility-as-QA-finding.
  - [x] Forward link to `/development/frontend-development/` and cross-phase to `/qa-testing/user-acceptance-testing/` embedded inline.
  - [x] Plain `<ul>` for outcomes.

- [x] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [x] No hedging, no first-person plural, exactly 4 H2s in order, no relative `.md` or hardcoded URL links.

- [x] **Task 3 — Build verification** (AC: #8)
  - [x] `npm run build` passes.

- [x] **Task 4 — Commit**
  - [x] Scope `Epic 4 / Story 4.3`.

## Dev Notes

**UX/UI ownership boundary.** The page must establish that UX/UI deliverables are signed off in *this* phase, not invented during build. The single biggest agency-delivery failure mode is mid-build design drift; best practices section must address it.

**A11y as design-time discipline.** WCAG considerations belong here, not in QA. Design tokens + component library decisions should already encode accessibility.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/requirements-design/ux-ui-design.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 3` — between FR/NFR (2) and System Architecture (4) in the sibling order.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-4.3]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md] — meta-relevant: this story's content references UX/UI agency practice; the doc itself is a UX spec for *this* site, not for a generic engagement
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns] — `<Aside>` (UX-DR11)

**Cross-story dependencies:**
- Forward link to `/development/frontend-development/` (Story 5.5) and cross-phase to `/qa-testing/user-acceptance-testing/` (Story 6.6) — slugs pinned.

## Dev Agent Record

### Agent Model Used

claude-opus-4-7

### Debug Log References

### Completion Notes List

- Authored `src/content/docs/requirements-design/ux-ui-design.md`. UX/UI ownership boundary established in opening paragraph (per Dev Notes guidance) — design signed off here, not invented during build. Five-layer artifact set named. Accessibility framed as design-time discipline with three concrete techniques (contrast tokens, touch targets, keyboard/screen-reader patterns). Industry section contrasts full-fidelity-vs-parallel, bespoke-vs-reused systems, tool-based-vs-exported handoff. Frontmatter order corrected from 2 to 3.

### File List

- src/content/docs/requirements-design/ux-ui-design.md (modified)

### Change Log

- 2026-05-03: Authored UX/UI Design (Story 4.3)
