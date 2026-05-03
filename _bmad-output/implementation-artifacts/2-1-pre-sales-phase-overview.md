# Story 2.1: Pre-Sales phase overview

Status: review

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a reader entering the Pre-Sales phase for the first time,
I want an overview page that explains what Pre-Sales is, what it produces, and how it hands off to Discovery,
So that I understand the full phase before drilling into specific sub-sections.

## Acceptance Criteria

**Shared structural (apply to every content-authoring story; see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):**

1. **File path & frontmatter pinned.** Page lives at `src/content/docs/pre-sales/index.md` with frontmatter: `title: "Pre-Sales & Business Development"`, `description:` (≤160 chars), `type: phase-overview`, `phase: pre-sales`, `order: 1`, `lastUpdated: <ISO date of authoring commit>`, optional `status: 'v1'`. Field order matches the architecture frontmatter contract; unknown fields fail the build.

2. **Four H2s in exact order, no H1.** The body contains exactly these four H2 headings, in this order, with these exact strings: `## What happens here`, `## Best practices`, `## Desired outcomes`, `## What the industry does`. No H1 in the body. No extra H2. H3/H4 are free within sections.

3. **Substantive prose under every H2.** No TODO lines, no placeholder text, no single-sentence sections. Each section reads as practitioner content end-to-end.

4. **Voice & frame.** Second person ("you"); declarative statements (no "typically", "usually", "depending on the organization"); agency/consulting frame throughout — never generic SDLC or product-company language.

5. **Page stands alone (FR15).** A reader who has not read any prior phase page can read this end-to-end and understand it.

6. **Cross-phase links (FR16).** As a phase overview, the page contains at least one inline forward link to a neighbouring phase AND at least one backward link (or to a parent concept) — both as inline prose, not as a sidebar/carousel/footer block.

7. **Internal-link convention.** All internal links use leading-slash paths (e.g. `/discovery/` or `/pre-sales/proposal-writing/`). Never `./foo.md`, never the production URL.

8. **No forbidden patterns.** No marketing hero, newsletter widget, progress badge, stock imagery, gamification, accordion around the 4 H2s, "related articles" carousel, AI chat widget. None reintroduced.

9. **Build & schema.** `pnpm build` runs clean; Zod content-collection schema accepts the page; the page appears in `dist/`.

**Topic-specific:**

10. **`## What happens here` names the 4 sub-sections** (Lead Qualification & Scoping Calls, Proposal Writing, SOW & Contract Drafting, Pricing & Estimation) and frames them as the sequence from first client contact to signed agreement.

11. **`## Desired outcomes` lists at least:** a signed SOW, a pricing commitment, a client-countersigned proposal, and a defined handoff package to Discovery.

12. **`## What the industry does` contrasts at least two agency approaches** (e.g. fixed-price vs. T&M, discovery-included-in-proposal vs. paid-discovery).

13. **Required cross-links:** an inline forward link to `/discovery/` AND a backward/adjacent link to either `/maintenance-retainer/` (for the repeat-client lifecycle loop) or another Pre-Sales sub-section.

## Tasks / Subtasks

- [x] **Task 1 — Author the page** (AC: #1, #2, #3, #4, #5, #6, #7, #10, #11, #12, #13)
  - [x] Set / verify frontmatter at `src/content/docs/pre-sales/index.md` per AC #1.
  - [x] Wrote all four H2 sections with substantive prose, agency frame, second-person voice.
  - [x] Used `:::tip` and `:::caution` Starlight asides for best practices and anti-patterns.
  - [x] Desired outcomes listed as plain `<ul>`.
  - [x] Contrasted fixed-price vs. T&M and discovery-included vs. paid-discovery approaches.
  - [x] Forward link to `/discovery/` and backward link to `/maintenance-retainer/` embedded inline.

- [x] **Task 2 — Lint pass before commit** (AC: #2, #4, #7, #8)
  - [x] No hedging language. No first-person plural. No hardcoded URL. No relative `.md` links. Exactly 4 H2s in order.

- [x] **Task 3 — Build verification** (AC: #9)
  - [x] `npm run build` passes — 44 pages built, no schema errors.

- [x] **Task 4 — Commit** (per CLAUDE.md git rules)
  - [x] Single commit, scope `Epic 2 / Story 2.1`.

## Dev Notes

**Scope.** One Markdown file. No code, no components, no schema or config changes. Existing stub at `src/content/docs/pre-sales/index.md` (created by scaffold) gets its body replaced with substantive prose; frontmatter stays compatible with the content-collection schema.

**4-H2 contract is hard.** Reordering, renaming, omitting, or adding top-level H2s is not permitted in v1 (architecture.md "Markdown heading template (FR14 enforcement)"). v2 may add `## AI-assisted workflow` as a fifth H2 — not in this story.

**Voice cheat sheet:**
- "You qualify the lead" — not "We typically qualify leads."
- "The SOW is signed before kickoff" — not "The SOW is usually signed before kickoff."
- "Agencies running fixed-price engagements front-load risk" — not "Some teams might consider front-loading risk depending on their approach."

**Forbidden in this story:**
- Adding any new file (no helper, no component, no asset)
- Changing the page slug or any sub-section slug (UX-DR3 / architecture.md slug-immutability rule)
- Editing `astro.config.mjs` sidebar
- Introducing a Mermaid diagram (Story 9.9 is the gate)
- Using `<OutcomeChecklist>` (Story 9.6 is the gate; use plain `<ul>` here)
- Using `<PhaseHandoff>` or `<PhaseBadge>` (Stories 9.7, 9.8 are the gates)
- Marketing hero, "Welcome to your journey" copy, CTA buttons beyond inline links
- First-person plural / hedging / generic-SDLC framing

**Source tree components to touch:**
- `src/content/docs/pre-sales/index.md` — modified (replace stub body)

**Testing standards:**
- No automated test added in this story (project has no test harness yet — see `spec-site-scaffold.md`). Verification is `pnpm build` (schema + 4-H2 + base-path link safety) plus manual lint pass per Task 2. Build-time 4-H2 lint is deferred (see `deferred-work.md`).

### Project Structure Notes

- File path is fixed by architecture.md "Content file layout" — `src/content/docs/pre-sales/index.md`. The slug is the directory name; the `index.md` file maps to the bare phase route (`/pre-sales/`).
- Frontmatter `phase: pre-sales` must match exactly one of the 7 pinned slugs (architecture.md "Phase slug list"). `order: 1` reserves this page as the phase overview; sub-section orders begin at 2.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-2.1] — full BDD acceptance criteria
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern] — shared structural ACs that apply to every content story
- [Source: _bmad-output/planning-artifacts/epics.md#Forbidden-patterns] — design guardrails
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content] — FR9 (overview pages), FR10–FR13 (the four sections), FR14 (consistency), FR15 (page stands alone), FR16 (cross-phase links)
- [Source: _bmad-output/planning-artifacts/prd.md#User-Journeys] — Priya's "freelancer scaling up" journey is the primary reader for Pre-Sales
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns] — frontmatter schema, 4-H2 enforcement, internal-link convention, voice rules
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns] — content file layout, phase slug list, slug immutability
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns] — `<Aside>` callout discipline (UX-DR11)

**Cross-story dependencies:**
- This is the first content story; cross-links to `/discovery/` and `/maintenance-retainer/` will resolve at build time even though those phases' overviews are still stubs (slugs are pinned by the scaffold).
- Sub-section stories 2.2–2.5 depend on this overview existing for inbound links from sub-sections back to `/pre-sales/`.

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

### Completion Notes List

- Authored `src/content/docs/pre-sales/index.md` with substantive content across all 4 H2s. Agency/consulting frame throughout. Starlight asides for tip/caution. Cross-links to `/discovery/` and `/maintenance-retainer/`. Build verified passing.

### File List

- src/content/docs/pre-sales/index.md (modified)

### Change Log

- 2026-05-03: Authored Pre-Sales phase overview (Story 2.1)
