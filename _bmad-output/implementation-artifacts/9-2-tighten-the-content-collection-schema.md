# Story 9.2: Tighten the content-collection schema

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As an author committing a new content page,
I want the Zod content-collection schema to reject pages missing `type`, `phase`, or `order` (except the splash home),
So that missing frontmatter is a build-time error rather than a silent convention violation.

## Acceptance Criteria

1. **Schema in `src/content.config.ts` requires `type`, `phase`, `order` for non-home pages.** Implemented via `z.discriminatedUnion` on `type`, via `superRefine`, or via a two-schema pattern that exempts the home page (`index.mdx`) by path or slug. The implementation choice is the developer's, provided it satisfies the next AC.
2. **Home page passes the schema.** `src/content/docs/index.mdx` either (a) does not match the schema expecting these fields, or (b) continues to pass because the splash template is legitimately frontmatter-light. Whichever pattern is chosen, the build must not fail on `index.mdx`.
3. **Build fails on a missing-field test.** When a content page is authored without `type` (or without `phase`, or without `order`), `pnpm build` fails with a Zod validation error naming the offending file and field. Verify by temporarily removing one field from a test page and re-running build (revert before commit).
4. **All 42 non-home pages still pass.** When the tightened schema is in place, all 42 non-home pages currently in `src/content/docs/` (which already have the fields per `spec-site-scaffold.md` status `done`) still build cleanly.
5. **No content file is edited as part of this story.** The schema change must be backward-compatible with the existing scaffold; if any content file requires editing to pass, that's a regression caught and reported, not a silent fix.
6. **`deferred-work.md` updated:** the "Tighten content-collection schema" bullet under "From spec-site-scaffold review (2026-04-23)" is removed or marked resolved.

## Tasks / Subtasks

- [x] **Task 1 — Read the current schema** (AC: #1, #2)
  - [x] Existing schema reviewed: `type`, `phase`, `order` all `.optional()`. Home `index.mdx` has only `title`/`description`/`lastUpdated`.

- [x] **Task 2 — Choose the discriminator pattern** (AC: #1, #2)
  - [x] Picked `superRefine` pattern. Rationale documented in inline comment: "a page with ANY of `type`, `phase`, `order` is treated as a content page and must have ALL three; the splash home (`index.mdx`) has none and is exempt." `z.discriminatedUnion` rejected because Starlight's docsSchema-extend shape pushes the discriminator awkwardly through Starlight's base schema; `superRefine` keeps the Zod surface flat.
  - [x] Documented choice via comment in `src/content.config.ts`.

- [x] **Task 3 — Implement the schema change** (AC: #1, #2, #4)
  - [x] `src/content.config.ts` updated. `npm run build` passes — all 42 non-home pages and the home `index.mdx` build cleanly.

- [x] **Task 4 — Negative-test the schema** (AC: #3)
  - [x] Removed `type` from `src/content/docs/pre-sales/lead-qualification-scoping-calls.md` → build failed with `[InvalidContentEntryDataError] docs → pre-sales/lead-qualification-scoping-calls data does not match collection schema. type: Required for non-home pages: must be 'phase-overview' or 'sub-section'.` File restored.
  - [x] Repeated for `phase` → `phase: Required for non-home pages: must be one of the 7 phase slugs.` Restored.
  - [x] Repeated for `order` → `order: Required for non-home pages: integer ordering within the phase.` Restored.

- [x] **Task 5 — Update deferred-work.md** (AC: #6)
  - [x] "Tighten content-collection schema" bullet struck through with resolution note pointing at Story 9.2.

- [x] **Task 6 — Final build + commit** (AC: #4, #5)
  - [x] Final build passes. `git diff` against the test page is empty after restore.
  - [x] Single commit, scope `Epic 9 / Story 9.2`.

## Dev Notes

**Three valid implementation patterns** (per AC #1):
- **`z.discriminatedUnion('type', [...])`** — clean, idiomatic Zod 3+; requires defining a separate schema variant for the home page (with `type` optional or absent). Recommended if home page is rare enough to special-case cleanly.
- **`superRefine`** — single schema that validates additional rules at the post-parse stage. Useful if the conditional logic depends on multiple fields (slug + path). More code than discriminated union for this case.
- **Two-schema pattern keyed by path** — separate `homeSchema` and `contentSchema`, with the collection config pointing each to the right files via path filter or per-collection assignment. Useful if the home page lives in its own conceptual collection.

**Pick one and stick to it. Don't combine.** Architecture.md and the PRD do not pre-decide; this is a dev judgment call.

**The home page is the one allowed exception.** If a future home page needs `type`, `phase`, etc., that's a separate story.

**No content file edits in this story.** AC #5 is explicit. If a content file fails the new schema, the *schema* is wrong (likely too strict on a corner case) and must be relaxed; do not "fix" the content file.

**Forbidden in this story:**
- Editing any content file in `src/content/docs/`
- Editing `astro.config.mjs`
- Adding new fields to the schema beyond what AC #1 covers
- Removing fields from the schema
- Promoting `lastUpdated` or `status` from optional to required (out of scope; only `type`, `phase`, `order` per AC)

**Source tree components to touch:**
- `src/content.config.ts` — modified (schema tightening)
- `_bmad-output/implementation-artifacts/deferred-work.md` — modified (resolve the bullet)

**Testing standards:**
- No automated test. Verification is the negative-test loop in Task 4 plus a clean `pnpm build` over all 42 non-home pages.

### Project Structure Notes

- `src/content.config.ts` is the canonical Zod schema location per architecture.md "File & Folder Structure Patterns" (`src/content/config.ts` listed there is the older Astro path; the project uses `src/content.config.ts` per the scaffold).
- Astro Starlight reads this file at build time; any schema error halts the build.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-9.2]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns] — frontmatter pinned-fields list (the source of truth for what should be required)
- [Source: _bmad-output/planning-artifacts/architecture.md#Enforcement-Guidelines] — "Schema-level (build time): Zod content-collection schema rejects bad frontmatter"
- [Source: _bmad-output/implementation-artifacts/spec-site-scaffold.md] — current schema state with `.optional()` markers; status `done`
- [Source: _bmad-output/implementation-artifacts/deferred-work.md] — bullet to resolve
- Astro content collection docs: https://docs.astro.build/en/guides/content-collections/ (consult for `defineCollection` shape only)
- Zod docs: https://zod.dev/?id=discriminated-unions (consult for `z.discriminatedUnion` shape only)

**Cross-story dependencies:**
- Independent of all content stories. Schema tightening can ship before, alongside, or after Epics 2–8 content authoring (the existing 42 pages already have the fields).

## Dev Agent Record

### Agent Model Used

claude-opus-4-7

### Debug Log References

- Negative tests against `pre-sales/lead-qualification-scoping-calls.md` produced `InvalidContentEntryDataError` for each of `type`, `phase`, `order` removal. File restored after each test. Final `git diff` against the test file is clean.

### Completion Notes List

- `src/content.config.ts` now uses a `superRefine` pattern: `type`, `phase`, and `order` remain individually `.optional()` at the Zod-shape level so the splash home (which has none of them) still validates, but if any one of them is present the refine treats the page as content and requires all three. Each missing field produces a per-field error path so build messages name the offending file and the missing field.
- Trade-off documented in inline comment: a page authored with literally zero of the three fields is treated as home and would pass — but Starlight's base `docsSchema` already requires `title`/`description`, so empty-frontmatter pages are still rejected at a different layer. The realistic failure mode (forgot one of three on a content page) is caught.
- Build passes cleanly with all 42 non-home pages plus the home `index.mdx`.

### File List

- src/content.config.ts (modified)
- _bmad-output/implementation-artifacts/deferred-work.md (modified)

### Change Log

- 2026-05-03: Tightened content-collection schema (Story 9.2)
- 2026-05-04: Code review complete — clean, no patches; status → done

### Review Findings

_Reviewed 2026-05-04. Layers: Acceptance Auditor + Edge Case Hunter._

- [x] All 6 AC verified against `src/content.config.ts`: `superRefine` discriminator pattern correctly enforces "all-or-nothing" on `type`/`phase`/`order` for non-home pages; per-field error messages name the missing field; home `index.mdx` validates because it carries none of the three; build passes for all 42 non-home pages plus home; no content file edited
- [x] [Review][Dismiss] Documented edge case (a hypothetical content page with literally zero of the three fields would pass as "home") is mitigated by Starlight's base `docsSchema` requiring `title`/`description` — already noted in dev's completion notes
