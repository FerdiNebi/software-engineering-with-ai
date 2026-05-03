# Story 2.5: Pricing & Estimation

Status: review

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a consultant quoting a prospective engagement,
I want to understand agency pricing models, estimation techniques, and how to defend a price,
So that I can price engagements profitably without losing qualified prospects on sticker shock or over-committing.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/pre-sales/pricing-estimation.md`; `title: "Pricing & Estimation"`, `description:` (≤160 chars), `type: sub-section`, `phase: pre-sales`, `order: 5`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** defines pricing as a pre-sales activity (separate from developer-side estimation, which lives in `/discovery/estimation-cost-commitment/` and `/discovery/prototyping-proof-of-concept/`). Names the primary pricing models: fixed, time-and-materials (T&M), retainer, value-based, hybrid.
10. **`## Best practices`** names specific estimation techniques applicable at pre-sales — analogy estimation, three-point estimation, ranged estimates with confidence bands — and pricing levers (team composition, timeline compression, risk buffer). Include a `<Aside type="tip">` on showing a price range when the discovery is yet to come.
11. **`## Desired outcomes`** lists: a defensible price, a risk-adjusted timeline, documented assumptions, and inputs for the SOW pricing section.
12. **`## What the industry does`** contrasts at least two approaches (e.g., high-margin boutique vs. high-volume shop; discovery-first vs. proposal-first pricing).
13. **Required cross-links:** link to `/discovery/estimation-cost-commitment/` (post-discovery re-estimation loop) AND `/pre-sales/sow-contract-drafting/` (where price lands in the SOW).

## Tasks / Subtasks

- [x] **Task 1 — Author the page** (AC: #1, #2, #3, #4, #5, #6, #9, #10, #11, #12, #13)
  - [x] Frontmatter per AC #1 (order: 5).
  - [x] Four H2s authored. Pre-sales pricing vs. developer-task estimation distinguished early. Five pricing models (fixed, T&M, retainer, value-based, hybrid) named. Three estimation techniques (analogy, three-point/PERT, ranged with confidence) covered. `:::tip` for the discovery-led ranged-estimate pattern, `:::caution` for discount erosion.
  - [x] Cross-links to `/discovery/estimation-cost-commitment/`, `/discovery/prototyping-proof-of-concept/`, `/pre-sales/sow-contract-drafting/`, `/maintenance-retainer/retainer-structure-slas/` embedded inline.
  - [x] Plain `<ul>` for outcomes.

- [x] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [x] No hedging, no first-person plural, exactly 4 H2s in order, no relative `.md` or hardcoded URL links.

- [x] **Task 3 — Build verification** (AC: #8)
  - [x] `npm run build` passes; `dist/pre-sales/pricing-estimation/index.html` generated.

- [x] **Task 4 — Commit**
  - [x] Scope `Epic 2 / Story 2.5`.

## Dev Notes

**Distinction to defend.** Pre-sales pricing ≠ developer-task estimation. Many readers will confuse them. `## What happens here` should land this distinction in the first paragraph: pricing is a commercial commitment to the client; developer estimation lives in discovery and development phases.

**No spreadsheet templates.** This page is conceptual guidance, not a calculator. Do not embed pricing matrices or sample dollar amounts (out of scope; ages poorly).

**Forbidden in this story** (see "Forbidden patterns"):
- New files, helpers, components, or assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/pre-sales/pricing-estimation.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 5` is the last sibling under `pre-sales/`. Starlight's prev/next will land "next" on the first sub-section of Discovery (`/discovery/`).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-2.5] — full BDD acceptance criteria + topic mandate
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Cross-phase link to `/discovery/estimation-cost-commitment/` (Story 3.5) resolves at build (slug pinned).
- Backward link target `/pre-sales/sow-contract-drafting/` (Story 2.4) resolves at build.

## Dev Agent Record

### Agent Model Used

claude-opus-4-7

### Debug Log References

### Completion Notes List

- Authored `src/content/docs/pre-sales/pricing-estimation.md`. Pricing-vs-developer-estimation distinction landed in opening paragraphs. Five pricing models (fixed, T&M, retainer, value-based, hybrid) named. Three estimation techniques (analogy, three-point/PERT, ranged with confidence bands) covered with concrete formula. Three pricing levers (team composition, timeline compression, risk buffer) explained. `:::tip` covers the discovery-led range-narrowing pattern; `:::caution` warns against discount erosion. Industry section contrasts boutique-vs-volume, discovery-first-vs-proposal-first, cost-plus-vs-value-based, headline-fixed-vs-phased. Build passes with 44 pages.

### File List

- src/content/docs/pre-sales/pricing-estimation.md (modified)

### Change Log

- 2026-05-03: Authored Pricing & Estimation (Story 2.5)
