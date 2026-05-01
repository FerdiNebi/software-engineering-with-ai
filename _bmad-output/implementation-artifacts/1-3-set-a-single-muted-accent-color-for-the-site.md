# Story 1.3: Set a single muted accent color for the site

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a reader across any page,
I want the site's accent color to feel restrained and practitioner-grade,
So that links, current-page markers, and focus rings reinforce the reference-site aesthetic rather than a marketing feel.

## Acceptance Criteria

1. **One accent value per theme.** Exactly one accent color is defined for light mode and one for dark mode. The proposed defaults from UX-DR5 are `#3b5a6f` (light) and `#8ab4c8` (dark); the author may substitute equivalent muted slate-blue or neutral hues pre-merge but must keep the count at one-per-theme. No third "hover" or "active" accent variant is added.

2. **Override surface is minimal.** Only the accent-related `--sl-color-*` tokens are touched (Starlight's `--sl-color-accent`, `--sl-color-accent-low`, `--sl-color-accent-high`, and any direct text-on-accent token if needed for contrast). All other Starlight palette tokens — gray scale, background, text-default, danger/note/tip — remain Starlight defaults. No secondary palette is introduced.

3. **Delivery mechanism.** The override lands either via `customCss` referencing a file in `src/styles/` (e.g. `src/styles/theme.css`) wired into `astro.config.mjs`, OR inline in `astro.config.mjs` if Starlight's config supports it directly. One mechanism only — do not duplicate across both. If a `src/styles/theme.css` is added, it contains nothing except the accent overrides.

4. **No `<Aside>` extension.** The four built-in `<Aside>` types (`note`, `tip`, `caution`, `danger`) keep their Starlight defaults; their border/icon colors are not re-themed. The new accent is consumed *only* where Starlight already consumes `--sl-color-accent` (links, current-sidebar marker, focus rings, `<Aside type="tip">` border per Starlight's default mapping).

5. **Both themes pass contrast.** Body-text contrast remains ≥7:1 on both themes (UX-DR19 / WCAG AAA body); link-text contrast on top of page background is ≥4.5:1 in both themes (UX-DR18 / AA). Verified with a contrast checker on the rendered site.

6. **No visual side effects.** No gradients, no drop shadows beyond Starlight defaults, no colored block backgrounds, no border-radius changes, no spacing changes. The accent is hue-only.

7. **Build passes; accent renders everywhere.** `pnpm build` succeeds with no CSS parse errors. On the rendered site, the accent appears on: every link (body and sidebar), the current-page marker in the sidebar, the keyboard focus ring on any interactive element, and the `<Aside type="tip">` border on at least one page that contains a tip aside (or, if no tip aside exists yet, this is verified manually by adding one in a scratch page that is reverted before commit).

## Tasks / Subtasks

- [ ] **Task 1 — Decide on delivery surface and add the file (or inline block)** (AC: #1, #2, #3)
  - [ ] If using a CSS file: create `src/styles/theme.css` containing only the accent token overrides for light and dark mode (Starlight uses `:root` for light and `[data-theme='dark']` selector for dark). Wire it via `customCss: ['./src/styles/theme.css']` in `astro.config.mjs` Starlight config.
  - [ ] If using inline `customCss` strings (only if Starlight permits): add the override block directly in `astro.config.mjs` with the same selectors. Pick exactly one of these two approaches.
  - [ ] Confirm only `--sl-color-accent`, `--sl-color-accent-low`, and `--sl-color-accent-high` (and an explicit text-on-accent token only if contrast demands it) are set. Do not redefine any other `--sl-color-*` token.

- [ ] **Task 2 — Pick the actual hex values** (AC: #1, #5)
  - [ ] Start with UX-DR5 proposals (`#3b5a6f` light, `#8ab4c8` dark). If contrast on links over Starlight's default body-bg fails AA in either theme, adjust toward equivalent muted slate-blue values that pass and document the adjustment in commit message.
  - [ ] Compute `--sl-color-accent-low` (background tint) and `--sl-color-accent-high` (deeper variant) as muted derivatives of the chosen accent — do not invent unrelated colors.

- [ ] **Task 3 — Local verification** (AC: #4, #5, #6, #7)
  - [ ] `pnpm build` — must complete without CSS errors; all 43 routes resolve.
  - [ ] Run `pnpm dev` (or preview): inspect a content page in both light and dark themes — confirm the accent appears on links, current-page marker, focus ring; confirm `<Aside type="tip">` border uses the new accent (add a scratch tip aside on a stub page if needed, then revert before commit).
  - [ ] Run a contrast check (axe / WebAIM Contrast Checker / browser devtools) on links and body text on both themes against Starlight's default backgrounds. Body text ≥7:1; links ≥4.5:1.
  - [ ] Sanity scan for unintended side effects: no gradients introduced, no drop-shadow changes, no border-radius changes, `<Aside>` types other than `tip` retain their default colors.

- [ ] **Task 4 — Commit** (per CLAUDE.md git rules)
  - [ ] Single commit, scope `Epic 1 / Story 1.3`. Suggested message: `Set muted slate-blue accent color (Epic 1 Story 1.3)`.

## Dev Notes

**Why one accent only.** UX-DR5 calls for a single muted, practitioner-grade hue. The reference-site aesthetic depends on the absence of marketing-style multi-color palettes. Adding a second accent for hover or active states is out of scope; Starlight's default treatments handle those already.

**Why this is independent from Stories 1.1 and 1.2.** The accent override is purely a token-level CSS change; it does not depend on the home-page rewrite or sidebar numbering. Any of the three Epic 1 stories can ship in any order. If Story 1.2 ships first, the home `<PhaseList>` will pick up the accent automatically (it consumes Starlight tokens by design).

**Forbidden in this story:**
- No webfont change (UX-DR6 — Starlight's default system-font stack stays)
- No spacing token override (`--sl-content-pad-x`, etc.)
- No new `<Aside>` type or color extension
- No second accent for hover / visited / active states beyond what Starlight's default treatment of `--sl-color-accent` already provides
- No gradient, drop-shadow, glow, or texture
- No favicon/logo asset change
- No redirect or asset path change
- No edit to `src/content/docs/` files

**If contrast fails the proposed defaults:** swap to a value that passes. Suggested adjacent options: slightly darker slate `#345266` for light mode, slightly brighter ice-blue `#9bc4d8` for dark mode — but only if the proposed defaults fail. Document the swap in the commit message.

**Source tree components to touch:**
- `astro.config.mjs` — modified (one new line for `customCss`, OR inline override block)
- `src/styles/theme.css` — NEW (only if file-based approach is chosen)

**Testing standards:**
- No automated test added (project has no test harness yet — see `spec-site-scaffold.md`).
- Verification is `pnpm build` for CSS-parse correctness + manual contrast check per Task 3. Pre-launch a11y audit (Story 9.3) does the comprehensive sweep.

### Project Structure Notes

- `src/styles/` is the canonical location for project CSS overrides per architecture.md "File & Folder Structure Patterns". Use it if a file is needed.
- `customCss` in Starlight config accepts an array of paths; mixing file paths and inline strings is permitted but for this story stay with a single approach.
- The override file (if used) must be referenced by relative path from project root in `astro.config.mjs` (e.g., `'./src/styles/theme.css'`).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-1.3] — full BDD acceptance criteria
- [Source: _bmad-output/planning-artifacts/epics.md#UX-Design-Requirements] — UX-DR5 (single accent + Starlight palette discipline), UX-DR6 (no webfont), UX-DR11 (`<Aside>` callout conventions), UX-DR18–19 (contrast targets)
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns] — `src/styles/` location for CSS overrides
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Visual-Design-Foundation] — color system rationale, single-accent stance
- [Source: _bmad-output/planning-artifacts/prd.md#Display-and-Appearance] — FR20 (light/dark toggle), NFR6 (both themes legible)
- [Source: astro.config.mjs] — Starlight config to extend
- Starlight CSS variables reference: https://starlight.astro.build/guides/css-and-tailwind/ (only consult for variable names; do not import any new package)

**Cross-story dependencies:**
- Independent of Stories 1.1 and 1.2; can ship in any order within Epic 1.
- Stories 9.3 (pre-launch a11y audit) and 9.4 (post-deploy verification) will re-validate contrast on real content with this accent applied.

## Dev Agent Record

### Agent Model Used

_To be filled by dev-story agent._

### Debug Log References

### Completion Notes List

### File List
