# Story 2.2: Lead Qualification & Scoping Calls

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a consultant joining an agency who is about to take their first scoping call,
I want guidance on how to qualify a lead, what questions to ask on the call, and what "qualified" looks like,
So that I can distinguish serious prospects from time-wasters and produce the right inputs for a proposal.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** Page lives at `src/content/docs/pre-sales/lead-qualification-scoping-calls.md` with frontmatter: `title: "Lead Qualification & Scoping Calls"`, `description:` (≤160 chars), `type: sub-section`, `phase: pre-sales`, `order: 2`, `lastUpdated: <ISO date of authoring commit>`, optional `status: 'v1'`. Field order matches the architecture frontmatter contract.
2. **Four H2s in exact order, no H1, no extras.** `## What happens here`, `## Best practices`, `## Desired outcomes`, `## What the industry does`. H3/H4 free within sections.
3. **Substantive prose under every H2** — no TODOs, no placeholders, no single-sentence sections.
4. **Voice & frame.** Second person; declarative (no `typically` / `usually` / `depending`); agency/consulting frame.
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only** (FR16); never `./foo.md`, never the production URL.
7. **No forbidden patterns** (no marketing hero, newsletter, gamification, accordion around the 4 H2s, related-articles carousel, AI chat widget, stock imagery).
8. **Build & schema clean.** `pnpm build` succeeds; Zod schema accepts the page; the page appears in `dist/`.

**Topic-specific:**

9. **`## What happens here`** defines lead qualification as the gate between inbound interest and proposal work, and frames the scoping call as the primary qualification instrument.
10. **`## Best practices`** names specific pre-call research tasks, call-structure frameworks (e.g. BANT, MEDDIC, or equivalent), and concrete disqualification criteria.
11. **`## Desired outcomes`** lists at least: a qualify/disqualify decision, a scoping summary ready to feed proposal writing, and an agreed next step (proposal, paid discovery, or polite decline).
12. **`## What the industry does`** contrasts at least two agency approaches (e.g. strict-gate vs. nurture-style qualification).
13. **Required cross-links:** an inline forward link to `/pre-sales/proposal-writing/` AND a cross-phase link to `/discovery/` where discovery-led scoping is referenced.

## Tasks / Subtasks

- [x] **Task 1 — Author the page** (AC: #1, #2, #3, #4, #5, #6, #9, #10, #11, #12, #13)
  - [x] Frontmatter set per AC #1.
  - [x] Four H2 sections authored. `:::tip` for pull-out best practice, `:::caution` for the no-pre-call-research anti-pattern.
  - [x] Forward link to `/pre-sales/proposal-writing/` and cross-phase link to `/discovery/` embedded inline.
  - [x] Desired outcomes as plain `<ul>`.

- [x] **Task 2 — Lint pass before commit** (AC: #2, #4, #6, #7)
  - [x] No hedging, no first-person plural, exactly 4 H2s in order, no relative `.md` or hardcoded URL links.

- [x] **Task 3 — Build verification** (AC: #8)
  - [x] `npm run build` passes — 44 pages built, no schema errors.

- [x] **Task 4 — Commit** (per CLAUDE.md git rules)
  - [x] Single commit, scope `Epic 2 / Story 2.2`.

## Dev Notes

**Scope.** One Markdown file. Body of the existing stub at `src/content/docs/pre-sales/lead-qualification-scoping-calls.md` is replaced with substantive prose; frontmatter values updated to match AC #1.

**Voice cheat sheet:**
- "You qualify the lead before scheduling the call." Not "We typically qualify…"
- "Disqualification is a sales skill, not a failure." Declarative, not hedged.
- "Agencies running BANT-style gates score leads on four axes…" Frame patterns by category, not by company name.

**Forbidden in this story** (also see "Forbidden patterns" in epics.md):
- New files, helpers, components, or assets
- Slug or path changes (slug-immutability rule)
- Edits to `astro.config.mjs` or any other story's content file
- Mermaid (Story 9.9 gate); `<OutcomeChecklist>` (Story 9.6 gate); `<PhaseHandoff>` (Story 9.7 gate); `<PhaseBadge>` (Story 9.8 gate)
- Marketing hero, "Welcome", CTA buttons beyond inline links, newsletter signup, gamification, stock imagery, accordion around the 4 H2s

**Source tree components to touch:**
- `src/content/docs/pre-sales/lead-qualification-scoping-calls.md` — modified (replace stub body, finalize frontmatter)

**Testing standards:**
- No automated test added (project has no test harness yet — see `spec-site-scaffold.md`). Verification is `pnpm build` for schema + base-path link safety, plus the manual lint pass per Task 2. Build-time 4-H2 lint is deferred.

### Project Structure Notes

- File path is fixed by architecture.md "Content file layout".
- Sub-sections under `pre-sales/` start at `order: 2` (overview is `order: 1`); the order field controls sibling sort and Starlight's prev/next traversal in the sidebar.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-2.2] — full BDD acceptance criteria + topic mandate
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern] — shared structural ACs
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content] — FR9–FR16 (page structure, voice, cross-links)
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns] — frontmatter, 4-H2 contract, link convention, voice rules
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns] — slug location, slug immutability
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns] — `<Aside>` discipline (UX-DR11)
- [Source: _bmad-output/implementation-artifacts/2-1-pre-sales-phase-overview.md] — phase overview for inbound link target

**Cross-story dependencies:**
- Forward link to `/pre-sales/proposal-writing/` (Story 2.3) and cross-phase link to `/discovery/` (Story 3.1 phase overview) resolve at build time because slugs are pinned by the scaffold; target pages may still be stubs but routes exist.

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

### Completion Notes List

- Authored `src/content/docs/pre-sales/lead-qualification-scoping-calls.md`. BANT/MEDDIC frameworks named, four qualification axes detailed, scoping-call protocol covered. Build verified passing (44 pages).

### File List

- src/content/docs/pre-sales/lead-qualification-scoping-calls.md (modified)

### Change Log

- 2026-05-03: Authored Lead Qualification & Scoping Calls (Story 2.2)
- 2026-05-04: Code review complete — clean, no patches; status → done

### Review Findings

_Reviewed 2026-05-04. Layers: Acceptance Auditor + lint pass._

- [x] All 13 AC verified: frontmatter pinned (order=2, type=sub-section); exactly 4 H2s in spec order; BANT and MEDDIC named with the four qualification axes; tip + caution callouts present; cross-links to `/pre-sales/proposal-writing/` and `/discovery/` (AC #13); strict-gate vs. nurture-style contrasted (AC #12); qualify/disqualify decision + scoping summary + agreed next step listed in outcomes (AC #11)
