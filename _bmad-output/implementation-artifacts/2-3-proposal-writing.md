# Story 2.3: Proposal Writing

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a consultant preparing a proposal for a qualified lead,
I want to know what a professional agency proposal contains, how it's structured, and what makes one win or lose,
So that I can produce a proposal that wins the engagement and sets expectations correctly.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/pre-sales/proposal-writing.md`; `title: "Proposal Writing"`, `description:` (≤160 chars), `type: sub-section`, `phase: pre-sales`, `order: 3`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras** — `## What happens here`, `## Best practices`, `## Desired outcomes`, `## What the industry does`.
3. **Substantive prose under every H2** — no TODOs.
4. **Voice & frame** — second person, declarative, agency frame.
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only** (FR16).
7. **No forbidden patterns.**
8. **Build & schema clean** — `pnpm build` succeeds.

**Topic-specific:**

9. **`## What happens here`** defines the proposal as the artifact produced between scoping and SOW, and explicitly distinguishes proposal (sales document, persuasive) from SOW (contractual document, binding).
10. **`## Best practices`** names the standard proposal sections (executive summary, approach, deliverables, team, timeline, pricing, terms), structure/tone guidance, and at least two named anti-patterns.
11. **`## Desired outcomes`** lists at least: a client-countersigned proposal (or feedback + revision loop), a shared understanding of scope, and a clear path to SOW.
12. **`## What the industry does`** contrasts at least two structural approaches (e.g. short-form vs. long-form, fixed-price vs. phased-pricing).
13. **Required cross-links:** forward link to `/pre-sales/sow-contract-drafting/` AND backward link to `/pre-sales/lead-qualification-scoping-calls/`.

## Tasks / Subtasks

- [x] **Task 1 — Author the page** (AC: #1, #2, #3, #4, #5, #6, #9, #10, #11, #12, #13)
  - [x] Frontmatter set per AC #1 (order: 3, type: sub-section).
  - [x] Four H2 sections authored. Proposal vs. SOW distinction explicit. Seven standard sections enumerated. Four anti-patterns named.
  - [x] `:::tip` for prospect-language mirroring; `:::caution` for proposal-without-scoping-notes anti-pattern.
  - [x] Forward link to `/pre-sales/sow-contract-drafting/` and backward link to `/pre-sales/lead-qualification-scoping-calls/` embedded inline.
  - [x] Plain `<ul>` for desired outcomes.

- [x] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [x] No hedging, no first-person plural, exactly 4 H2s in order, no relative `.md` or hardcoded URL links.

- [x] **Task 3 — Build verification** (AC: #8)
  - [x] `npm run build` passes.

- [x] **Task 4 — Commit** (per CLAUDE.md git rules)
  - [x] Single commit, scope `Epic 2 / Story 2.3`.

## Dev Notes

**Scope.** One Markdown file body replaced; frontmatter finalized.

**The proposal/SOW distinction is the hardest pedagogy point.** Many readers (Marcus archetype) conflate the two. `## What happens here` must draw the line clearly: proposal sells the engagement; SOW commits both parties contractually. Story 2.4 (SOW & Contract Drafting) handles the contractual side; do not duplicate that material here.

**Forbidden in this story** (see "Forbidden patterns" in epics.md):
- New files, helpers, components, or assets
- Slug or path changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (all gated for Epic 9)
- Marketing hero, CTA buttons beyond inline links, gamification, stock imagery, accordions around the 4 H2s

**Source tree components to touch:**
- `src/content/docs/pre-sales/proposal-writing.md` — modified (replace stub body, finalize frontmatter)

**Testing standards:**
- No automated test (no test harness yet). `pnpm build` is the schema + 4-H2 + base-path safety check; manual lint per Task 2.

### Project Structure Notes

- `order: 3` reserves the third slot under `pre-sales/`, sandwiching this page between Lead Qualification (`order: 2`) and SOW & Contract Drafting (`order: 4`) for Starlight's sibling sort and prev/next.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-2.3] — full BDD acceptance criteria + topic mandate
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern] — shared structural ACs
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content] — FR9–FR16
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns] — frontmatter, 4-H2, link convention, voice
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns] — slug rules, immutability
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns] — `<Aside>` (UX-DR11)
- [Source: _bmad-output/implementation-artifacts/2-1-pre-sales-phase-overview.md] — sibling overview; tone reference

**Cross-story dependencies:**
- Forward link to `/pre-sales/sow-contract-drafting/` (Story 2.4) resolves at build (slug pinned by scaffold).
- Backward link to `/pre-sales/lead-qualification-scoping-calls/` (Story 2.2) resolves at build.

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

### Completion Notes List

- Authored `src/content/docs/pre-sales/proposal-writing.md`. Proposal/SOW distinction made explicit at the top. Seven proposal sections enumerated. Four anti-patterns named. Short-form vs. long-form and fixed-price vs. phased pricing contrasted. Build verified passing.

### File List

- src/content/docs/pre-sales/proposal-writing.md (modified)

### Change Log

- 2026-05-03: Authored Proposal Writing (Story 2.3)
- 2026-05-04: Code review complete — clean, no patches; status → done

### Review Findings

_Reviewed 2026-05-04. Layers: Acceptance Auditor + lint pass._

- [x] All 13 AC verified: order=3, type=sub-section; 4 H2s in spec order; proposal-vs-SOW distinction landed at top (AC #9); 7 standard sections enumerated (AC #10); 4 named anti-patterns (kitchen-sink, boilerplate, "we'll figure it out", covert SOW); tip + caution callouts present; cross-links to `/pre-sales/sow-contract-drafting/` and `/pre-sales/lead-qualification-scoping-calls/` (AC #13); short-form vs. long-form and fixed-price vs. phased pricing contrasted (AC #12)
