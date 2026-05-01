# Story 2.3: Proposal Writing

Status: ready-for-dev

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

- [ ] **Task 1 — Author the page** (AC: #1, #2, #3, #4, #5, #6, #9, #10, #11, #12, #13)
  - [ ] Set / verify frontmatter at `src/content/docs/pre-sales/proposal-writing.md` per AC #1.
  - [ ] Write the four H2 sections per ACs #9–#12. Use `<Aside type="tip">` for pull-out best practices and `<Aside type="caution">` for the headline anti-pattern (e.g., proposing without scoping-call notes; conflating proposal and SOW).
  - [ ] Embed the required forward and backward links inline in prose per AC #13.
  - [ ] Plain `<ul>` for Desired outcomes (`<OutcomeChecklist>` is gated for Epic 9).

- [ ] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [ ] Replace hedging with declarative phrasing; replace first-person plural with second person.
  - [ ] Confirm exactly 4 H2s in order; no H1; no extra H2; no `./` or hardcoded URL links.

- [ ] **Task 3 — Build verification** (AC: #8)
  - [ ] `pnpm build` — must succeed; page appears at `dist/pre-sales/proposal-writing/index.html`.

- [ ] **Task 4 — Commit** (per CLAUDE.md git rules)
  - [ ] Single commit, scope `Epic 2 / Story 2.3`. Suggested message: `Author Proposal Writing (Epic 2 Story 2.3)`.

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

_To be filled by dev-story agent._

### Debug Log References

### Completion Notes List

### File List
