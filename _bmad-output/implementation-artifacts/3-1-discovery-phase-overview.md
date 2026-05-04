# Story 3.1: Discovery phase overview

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a reader entering Discovery for the first time (often Marcus's scenario),
I want an overview page that explains what Discovery is, what it produces, and how it hands off to Requirements & Design,
So that I understand the full phase before prepping for my first client workshop.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/discovery/index.md`; `title: "Discovery"`, `description:` (≤160 chars), `type: phase-overview`, `phase: discovery`, `order: 1`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Cross-phase links (FR16):** ≥1 forward + ≥1 backward inline prose link.
7. **Internal links use leading-slash paths only.**
8. **No forbidden patterns.**
9. **Build & schema clean.**

**Topic-specific:**

10. **`## What happens here`** names the 5 sub-sections (Stakeholder Interviews, Requirements Workshops, Prototyping & POC, Estimation & Cost Commitment, Discovery Deliverables & Sign-Off) and frames them as the sequence from signed SOW to handoff into implementation planning.
11. **`## Desired outcomes`** lists at least: validated requirements, a sign-off document, a refined estimate that may or may not match Pre-Sales pricing, and a handoff package to Requirements & Design.
12. **`## What the industry does`** contrasts paid-discovery vs. included-discovery models and time-boxed vs. open-ended approaches.
13. **Required cross-links:** forward link to `/requirements-design/` AND backward link to `/pre-sales/sow-contract-drafting/`.

## Tasks / Subtasks

- [x] **Task 1 — Author the page** (AC: #1–#7, #10–#13)
  - [x] Frontmatter per AC #1.
  - [x] Four H2s authored. All 5 sub-sections named with cross-links. `:::tip` for the workshop pre-read pattern; `:::caution` for the workshop-without-interviews anti-pattern.
  - [x] Forward link to `/requirements-design/` and backward link to `/pre-sales/sow-contract-drafting/` embedded inline.
  - [x] Plain `<ul>` for outcomes.

- [x] **Task 2 — Lint pass** (AC: #2, #4, #7, #8)
  - [x] No hedging, no first-person plural, exactly 4 H2s in order, no relative `.md` or hardcoded URL links.

- [x] **Task 3 — Build verification** (AC: #9)
  - [x] `npm run build` passes.

- [x] **Task 4 — Commit**
  - [x] Scope `Epic 3 / Story 3.1`.

## Dev Notes

**Reader archetype focus.** Marcus is the primary reader for this overview — new consulting engineer prepping for his first discovery engagement. Frame `## What happens here` so he can visualize the next 2–6 weeks of work.

**Re-estimation realism.** The handoff to Requirements & Design carries a refined estimate that may revise pre-sales pricing. Don't sugar-coat: discovery's job includes telling the client when the original number is wrong. Story 3.5 (Estimation & Cost Commitment) handles the mechanics; this overview just acknowledges the loop.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/discovery/index.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 1` reserves the phase-overview slot; sub-sections begin at `order: 2`.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-3.1] — full BDD acceptance criteria + topic mandate
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content] — FR9–FR16
- [Source: _bmad-output/planning-artifacts/prd.md#User-Journeys] — Marcus's journey
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]
- [Source: _bmad-output/implementation-artifacts/2-1-pre-sales-phase-overview.md] — sibling phase overview; tone/structure reference

**Cross-story dependencies:**
- Forward link to `/requirements-design/` (Story 4.1) and backward to `/pre-sales/sow-contract-drafting/` (Story 2.4) — slugs pinned by scaffold; both resolve at build.

## Dev Agent Record

### Agent Model Used

claude-opus-4-7

### Debug Log References

### Completion Notes List

- Authored `src/content/docs/discovery/index.md`. Phase framed as bridge from signed SOW to validated spec. All 5 sub-sections named in opening paragraph with leading-slash links. Re-estimation loop framed as a feature, not a problem (per Dev Notes guidance). `:::tip` for pre-read; `:::caution` for workshop-without-interviews. Industry section contrasts paid-vs-included discovery, time-boxed-vs-open-ended, heavyweight-vs-lightweight specs, and gateway-vs-continuous models. Build passes.

### File List

- src/content/docs/discovery/index.md (modified)

### Change Log

- 2026-05-03: Authored Discovery phase overview (Story 3.1)
