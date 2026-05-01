# Story 9.2: Tighten the content-collection schema

Status: ready-for-dev

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

- [ ] **Task 1 — Read the current schema** (AC: #1, #2)
  - [ ] Read `src/content.config.ts` in full to understand the current Zod shape and the `.optional()` markers on `type`, `phase`, `order`.
  - [ ] Read `src/content/docs/index.mdx` to understand what frontmatter it currently has and what fields are missing/extra.

- [ ] **Task 2 — Choose the discriminator pattern** (AC: #1, #2)
  - [ ] Pick one of: (a) `z.discriminatedUnion('type', [phaseOverviewSchema, subSectionSchema, homeSchema])`; (b) single schema with `superRefine` that requires fields when `slug !== 'index'`; (c) two-schema pattern keyed by the page's path or slug.
  - [ ] Document the choice in a one-line comment in `src/content.config.ts`. Architecture.md does NOT pre-decide which pattern; this is a dev judgment call within the AC's permitted set.

- [ ] **Task 3 — Implement the schema change** (AC: #1, #2, #4)
  - [ ] Update `src/content.config.ts` per the chosen pattern. Promote `type`, `phase`, `order` from `.optional()` to required-for-non-home.
  - [ ] Run `pnpm build` to confirm all 42 non-home pages still pass. If any fail, that's a regression — fix the SCHEMA (not the content) so pre-existing passing pages continue to pass.

- [ ] **Task 4 — Negative-test the schema** (AC: #3)
  - [ ] Pick one sub-section page (e.g., `src/content/docs/pre-sales/lead-qualification-scoping-calls.md`). Temporarily remove its `type` field. Run `pnpm build` — expect a Zod validation error naming the file and field. Restore the file. Repeat for `phase` and `order`.
  - [ ] Document each negative-test result in the commit message ("verified missing-`type`/`phase`/`order` each produce a Zod error naming the file").

- [ ] **Task 5 — Update deferred-work.md** (AC: #6)
  - [ ] Remove the "Tighten content-collection schema" bullet from `_bmad-output/implementation-artifacts/deferred-work.md`, or move it to a "Resolved" section with a pointer to this story's commit.

- [ ] **Task 6 — Final build + commit** (AC: #4, #5)
  - [ ] `pnpm build` clean.
  - [ ] Confirm `git diff` includes only `src/content.config.ts` and `_bmad-output/implementation-artifacts/deferred-work.md`. Any content-file edits in the diff is a regression — investigate before committing.
  - [ ] Single commit, scope `Epic 9 / Story 9.2`. Suggested message: `Tighten content-collection schema — require type/phase/order on non-home pages (Epic 9 Story 9.2)`.

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

_To be filled by dev-story agent._

### Debug Log References

### Completion Notes List

### File List
