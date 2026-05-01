# Story 4.4: System Architecture

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a technical lead producing the architecture decision document for the engagement,
I want guidance on what architecture deliverables look like at agency scale, how to involve the client, and how to keep the document usable through implementation,
So that architecture decisions are documented, defended, and traceable — not discovered during build.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/requirements-design/system-architecture.md`; `title: "System Architecture"`, `description:` (≤160 chars), `type: sub-section`, `phase: requirements-design`, `order: 4`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** defines system architecture as the phase where NFRs and FRs are mapped to a technical design, and names the typical artifact (ADR-style decision document, component diagram, data-flow diagram, integration map).
10. **`## Best practices`** names specific techniques (ADR format, decision-impact analysis, explicit risks/trade-offs, pattern-consistency rules, client review ritual).
11. **`## Desired outcomes`** lists: a signed architecture decision document, approved technology stack, documented integration boundaries, identified risks with mitigations.
12. **`## What the industry does`** contrasts heavy-UML vs. lightweight-ADR agency styles.
13. **Required cross-links:** forward link to `/requirements-design/infrastructure-design/` AND cross to `/development/`.

## Tasks / Subtasks

- [ ] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [ ] Frontmatter per AC #1.
  - [ ] Write the four H2 sections per ACs #9–#12. `<Aside type="tip">` for the ADR-by-default convention; `<Aside type="caution">` for "architecture decisions discovered during build" (the failure mode this page is here to prevent).
  - [ ] Embed required forward and cross-phase links per AC #13.
  - [ ] Plain `<ul>` for outcomes.

- [ ] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [ ] Hedging → declarative; first-person plural → second person; exactly 4 H2s; no `./` or hardcoded URL links.

- [ ] **Task 3 — Build verification** (AC: #8)
  - [ ] `pnpm build` — succeeds; `dist/requirements-design/system-architecture/index.html` exists.

- [ ] **Task 4 — Commit**
  - [ ] Scope `Epic 4 / Story 4.4`. Suggested: `Author System Architecture (Epic 4 Story 4.4)`.

## Dev Notes

**ADR ≠ UML.** Many readers will assume system architecture means UML diagrams. ADR-first agencies prefer prose with focused diagrams; UML-first agencies prefer notation. This page acknowledges both but should land lightly on the ADR side because that's the lower-overhead pattern that fits agency engagements; defend the choice through `## What the industry does`.

**Diagrams here are aspirational.** Mermaid plugin is gated to Story 9.9. Don't author a diagram in this story; reference what the artifact contains in prose.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/requirements-design/system-architecture.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 4` — between UX/UI (3) and Infrastructure Design (5).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-4.4]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md] — the project's own ADD; tone reference for what an ADR-style doc looks like in practice
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Forward link to `/requirements-design/infrastructure-design/` (Story 4.5) and cross-phase to `/development/` (Story 5.1) — slugs pinned.

## Dev Agent Record

### Agent Model Used

_To be filled by dev-story agent._

### Debug Log References

### Completion Notes List

### File List
