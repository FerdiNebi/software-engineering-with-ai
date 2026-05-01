# Story 1.2: Replace the home page's default content with a `<PhaseList>` framing

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a first-time visitor on the home page,
I want an immediate, scannable list of the 7 lifecycle phases with a short framing paragraph,
So that I can pick a phase and enter the content without scanning marketing copy or hunting in the sidebar.

## Acceptance Criteria

1. **`<PhaseList>` component exists at `src/components/PhaseList.astro` (UX-DR1, NFR4).** The component renders a semantic `<ol>` of 7 items, each containing an `<a>` wrapping the phase number + title + a one-line description, linking to `/<phase-slug>/` (resolved against the configured `base`). The 7 phase slugs and their order match the registry exactly: `pre-sales`, `discovery`, `requirements-design`, `development`, `qa-testing`, `deployment-launch`, `maintenance-retainer`.

2. **Component is zero-JS.** Pure `.astro` (no `client:*` directive, no React island). All interactivity is native HTML link behavior. Page still reads usefully if any progressive-enhancement layer fails (NFR4).

3. **Keyboard + a11y.** All 7 items are keyboard-tabbable in natural reading order with visible focus rings (Starlight defaults). The `<ol>` announces as an ordered list to screen readers; every link has meaningful text (no "click here", no icon-only links). Link-text contrast meets ≥4.5:1 in both themes (UX-DR19).

4. **Home page rewritten** at `src/content/docs/index.mdx` to contain exactly: (a) a framing paragraph of ≤3 sentences in second-person practitioner voice explaining that the site maps the agency consulting delivery lifecycle and inviting the reader to pick a phase, (b) the imported `<PhaseList />` component, and (c) nothing else — no marketing hero, no CTA button beyond phase links, no feature grid, no stock imagery (UX-DR2 + Forbidden Patterns).

5. **Layout above the fold.** On a 1024×768 viewport the framing paragraph + first 2–3 phase items are visible without scrolling. On mobile (≤767px) the framing paragraph + at least the first phase item are above the fold; sidebar remains one-tap away via the hamburger.

6. **Theme behavior.** `<PhaseList>` inherits Starlight's `--sl-color-*` tokens; both light and dark themes render legibly with no custom theme handling. No custom CSS variable is introduced for this component.

7. **Build passes.** `pnpm build` succeeds, all 43 routes resolve, the home page is among them, and there are no console errors when the home page is loaded.

## Tasks / Subtasks

- [ ] **Task 1 — Create `src/components/PhaseList.astro`** (AC: #1, #2, #3, #6)
  - [ ] Define a `phases` const inline in the component (or co-located in the same file) with `{ number, slug, title, oneLiner }` for the 7 phases. Order and slugs must match the registry exactly.
  - [ ] Render `<ol>` → 7 `<li>` → 1 `<a href="/{slug}/">` per item, with the number + title + one-liner inside the `<a>`. Use leading-slash hrefs only; never hardcode the production URL.
  - [ ] No `client:*` directive; no script block beyond what Starlight already provides via tokens.
  - [ ] Author one-liners in second-person practitioner voice (e.g., "How agency engagements begin — qualifying leads, writing proposals, drafting SOWs").

- [ ] **Task 2 — Rewrite `src/content/docs/index.mdx`** (AC: #4, #5)
  - [ ] Replace existing body with: framing paragraph (≤3 sentences) + `<PhaseList />` import and use. Remove any other content (no hero, no CTA, no feature grid).
  - [ ] Preserve frontmatter shape (the home page is the schema-light page per scaffold; do not promote it to the full content-collection schema).
  - [ ] Confirm the import path resolves: `import PhaseList from '../../../components/PhaseList.astro';` (or matching path-alias if configured).

- [ ] **Task 3 — Local verification** (AC: #5, #6, #7)
  - [ ] `pnpm build` — must succeed with all 43 routes; no Vite/Astro errors; home page in `dist/`.
  - [ ] `pnpm dev` (or `pnpm preview`): home renders the framing + `<PhaseList>`; clicking each of the 7 items lands on `/<phase-slug>/`. Tab order goes through the 7 items in lifecycle order. Both themes render legibly.
  - [ ] At 1024×768 desktop and ≤767px mobile, confirm above-the-fold expectations from AC #5.
  - [ ] Run an axe / Lighthouse a11y check on the rendered home page; flag any violation back into this story before merge.

- [ ] **Task 4 — Commit** (per CLAUDE.md git rules)
  - [ ] Single commit, scope `Epic 1 / Story 1.2`. Suggested message: `Add <PhaseList> home-page framing (Epic 1 Story 1.2)`.

## Dev Notes

**Scope.** This story creates one new component file and rewrites one existing content file. No sidebar config changes, no theme/CSS work, no schema changes. The home page already had its splash template removed (commit `d925863`); this story replaces the now-empty home with the practitioner-facing phase list.

**Phase one-liners — voice & length.** Each one-liner is one short sentence (≤14 words), second-person, declarative, agency-frame. Examples (author may refine):
- `1. Pre-Sales & Business Development` — *How agency engagements begin: qualifying leads, writing proposals, drafting SOWs, pricing.*
- `2. Discovery` — *Stakeholder interviews, workshops, prototypes, and the sign-off that closes discovery.*
- `3. Requirements & Design` — *Convert discovery output into FR/NFRs, UX, architecture, and infra plans.*
- `4. Development` — *Repos, CI/CD, backend, frontend, testing, review, security, performance, docs.*
- `5. QA / Testing` — *Test strategy, functional/regression, performance, security, and UAT.*
- `6. Deployment / Launch` — *Provision, deploy, smoke, monitor, hand off the live system.*
- `7. Maintenance & Retainer` — *Patch management, feature iteration, incident response, retainers and SLAs.*

These are starting points; refine to match the framing paragraph's tone before merge.

**Component shape (zero-JS reference):**

```astro
---
const phases = [
  { number: 1, slug: 'pre-sales', title: 'Pre-Sales & Business Development', oneLiner: '...' },
  { number: 2, slug: 'discovery', title: 'Discovery', oneLiner: '...' },
  // ...7 total
];
---
<ol class="phase-list">
  {phases.map(p => (
    <li>
      <a href={`/${p.slug}/`}>
        <span class="phase-number">{p.number}.</span>
        <span class="phase-title">{p.title}</span>
        <span class="phase-oneliner">{p.oneLiner}</span>
      </a>
    </li>
  ))}
</ol>
```

Style with scoped `<style>` if needed, but prefer Starlight tokens; do not introduce a new accent color (Story 1.3 owns that).

**Forbidden in this story:**
- No island / hydration directive (`client:load`, `client:idle`, etc.)
- No new dependency (no React, Vue, Svelte; no icon library)
- No image asset on the home page
- No "Welcome" or marketing copy in the framing paragraph
- No CTA button styling — links are plain `<a>` styled by Starlight
- No edit to `astro.config.mjs` sidebar (Story 1.1 already numbered the labels)
- No accent-color override (Story 1.3)
- No phase registry helper module (`src/data/phases.ts` etc.) — premature abstraction; keep `phases` inline. Stories 9.7/9.8 may extract one if their gates fire.

**Source tree components to touch:**
- `src/components/PhaseList.astro` — NEW
- `src/content/docs/index.mdx` — modified (rewrite body)

**Testing standards:**
- No automated test added (project has no test harness yet — see `spec-site-scaffold.md`). Verification is `pnpm build` + manual visual check + axe/Lighthouse a11y check per Task 3.

### Project Structure Notes

- Component naming follows architecture.md Code Patterns: `PascalCase.astro` for `.astro` components. Place at `src/components/` per architecture File & Folder Structure (the `islands/` subfolder is reserved for hydrated components — `<PhaseList>` is zero-JS so it stays in `src/components/`).
- Home page lives at `src/content/docs/index.mdx` per the architecture content-file layout. Keep `.mdx` so JSX import syntax for the component works without changing the file extension.
- Phase-slug registry is the canonical 7 slugs from architecture.md "Phase slug list" — must match `astro.config.mjs` sidebar order. Story 1.1's numbering relies on the same order.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-1.2] — full BDD acceptance criteria
- [Source: _bmad-output/planning-artifacts/epics.md#UX-Design-Requirements] — UX-DR1 (`<PhaseList>` zero-JS, semantic `<ol>`), UX-DR2 (no marketing hero, framing-paragraph rule), UX-DR12 (link patterns), UX-DR18–19 (a11y / contrast)
- [Source: _bmad-output/planning-artifacts/epics.md#Forbidden-patterns] — design guardrails (no marketing hero, no newsletter, no gamification, no stock illustrations)
- [Source: _bmad-output/planning-artifacts/prd.md#Functional-Requirements] — FR8 (landing/home page), FR17 (phase-vs-subsection differentiation)
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns] — component file layout, phase slug list, `.astro` vs island gating (NFR4 revised)
- [Source: _bmad-output/planning-artifacts/architecture.md#Code-Patterns] — `PascalCase.astro` naming, absolute import aliases
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Visual-Design-Foundation] — Starlight token consumption pattern (`--sl-color-*`)
- [Source: _bmad-output/implementation-artifacts/1-1-number-the-phase-labels-in-the-sidebar.md] — sibling story; numbering pattern in sidebar must match `<PhaseList>` numbering
- [Source: astro.config.mjs] — current sidebar with the prefixed labels (post-1.1)

**Recent git context:**
- `ddb93d7` Close code review of Story 1.1 — defers 6 items to deferred-work.md
- `fe8338a` Number the phase labels in the sidebar (Story 1.1) — sidebar now reads `1.` … `7.`
- `d925863` Remove splash template from home page to show sidebar — left the home page intentionally bare; this story fills it back in with the practitioner framing.

**Cross-story dependencies:**
- Depends on Story 1.1 (already done) — sidebar numbering pattern that the home `<PhaseList>` must mirror.
- Does NOT depend on Story 1.3 (accent color); both consume the same Starlight tokens, no ordering required.

## Dev Agent Record

### Agent Model Used

_To be filled by dev-story agent._

### Debug Log References

### Completion Notes List

### File List
