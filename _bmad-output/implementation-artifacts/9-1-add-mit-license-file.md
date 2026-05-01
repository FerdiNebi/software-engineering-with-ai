# Story 9.1: Add MIT LICENSE file

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a reader or contributor arriving at the public repo,
I want a clear, conventional open-source LICENSE file,
So that I understand the terms of use before forking, copying, or referencing the content.

## Acceptance Criteria

1. **LICENSE file at repo root.** Exact filename: `LICENSE` (no extension). Contains the standard MIT License text with the current year (`2026`) and `Ferdi Nebiev` (or the author's preferred attribution) as copyright holder.
2. **`package.json` declares `"license": "MIT"`** in the top-level fields.
3. **GitHub renders the license badge** on the repo page once the LICENSE is committed and pushed (no extra configuration required — GitHub auto-detects MIT from standard text).
4. **`deferred-work.md` updated:** the "LICENSE file (MIT suggested) — Add before public v1 launch" item under "From spec-site-scaffold review (2026-04-23)" is removed (or marked resolved with a pointer to this story's commit).
5. **Build passes** — `pnpm build` succeeds. The LICENSE file is at repo root, not in `src/content/docs/`, so it is *not* a content collection entry; the schema is unaffected.

## Tasks / Subtasks

- [ ] **Task 1 — Add the LICENSE file** (AC: #1)
  - [ ] Create `LICENSE` (no extension) at the repo root.
  - [ ] Paste the standard MIT License text. Year: `2026`. Copyright holder: `Ferdi Nebiev` (confirm preferred attribution before commit if uncertain).

- [ ] **Task 2 — Update `package.json`** (AC: #2)
  - [ ] Add `"license": "MIT"` to the top-level fields in `package.json` (place it between `"private"` and `"packageManager"` to match other agency-style packages, or wherever existing field order suggests).

- [ ] **Task 3 — Update deferred-work.md** (AC: #4)
  - [ ] In `_bmad-output/implementation-artifacts/deferred-work.md`, under "From spec-site-scaffold review (2026-04-23)", remove the LICENSE bullet entirely (it's resolved, not deferred any longer). Alternatively, move it to a "Resolved" section with a link to this story.

- [ ] **Task 4 — Build verification** (AC: #5)
  - [ ] `pnpm build` — must succeed. LICENSE file at root must not break the content-collection schema (it shouldn't, since it's not in `src/content/docs/`).

- [ ] **Task 5 — Commit** (per CLAUDE.md git rules)
  - [ ] Single commit, scope `Epic 9 / Story 9.1`. Suggested message: `Add MIT LICENSE file (Epic 9 Story 9.1)`. Confirm `LICENSE` and `package.json` and `deferred-work.md` are all included in the diff.

## Dev Notes

**Use the canonical MIT text.** Don't paraphrase. The standard text starts `MIT License\n\nCopyright (c) <YEAR> <NAME>\n\nPermission is hereby granted, free of charge, to any person obtaining a copy...`. GitHub's license-detection regex looks for this exact phrasing.

**Year and copyright holder are the only variables.** Year = `2026`. Holder = `Ferdi Nebiev` (per architecture.md attribution; if Ferdi prefers a different attribution at the time of authoring, swap it).

**Forbidden in this story:**
- Editing any content file
- Editing `astro.config.mjs`
- Editing `src/content.config.ts` schema (Story 9.2's territory)
- Adding any other file
- Modifying the existing `_bmad-output/implementation-artifacts/deferred-work.md` entries beyond the LICENSE bullet

**Source tree components to touch:**
- `LICENSE` — NEW (repo root)
- `package.json` — modified (add `"license": "MIT"`)
- `_bmad-output/implementation-artifacts/deferred-work.md` — modified (remove or mark resolved the LICENSE bullet)

**Testing standards:**
- No automated test. `pnpm build` is the safety check (LICENSE at root doesn't enter the content collection); GitHub-rendered badge is verified post-push.

### Project Structure Notes

- Architecture.md "Project Directory Structure" lists `LICENSE` at the repo root. This story creates that file.
- `package.json` already declares `"private": true`. Adding `"license": "MIT"` does not contradict private — it documents the license terms even if the package is not published.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-9.1]
- [Source: _bmad-output/planning-artifacts/architecture.md#Project-Structure-and-Boundaries] — `LICENSE` at repo root
- [Source: _bmad-output/implementation-artifacts/deferred-work.md] — LICENSE bullet to be resolved
- MIT license text (canonical): https://opensource.org/license/mit/ (consult only for the standard text; do not import a generator)

**Cross-story dependencies:**
- None. This is a standalone code/config story.

## Dev Agent Record

### Agent Model Used

_To be filled by dev-story agent._

### Debug Log References

### Completion Notes List

### File List
