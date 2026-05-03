# Story 9.5: Document the GitHub Pages "Source: GitHub Actions" setup step

Status: review

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a future maintainer or fork author setting up a new deployment of this site,
I want explicit documentation of the one-time manual Pages setting that enables the Actions-driven deploy,
So that the first push to `master`/`main` actually publishes without a cryptic "Pages not enabled" failure.

## Acceptance Criteria

1. **Documentation lives in the repo.** Either in `README.md` (preferred — most discoverable for fork authors) OR in a new `docs/deployment.md` (author's choice — pick one and stick with it).

2. **Documentation contains the explicit step.** Verbatim or paraphrased, an unambiguous instruction equivalent to: *"In GitHub → repo Settings → Pages → 'Build and deployment' source, select 'GitHub Actions'."* The path-walk through Settings → Pages → 'Build and deployment' source must be unambiguous to someone who has never opened the setting before.

3. **One-time-action note.** The doc states explicitly that this is a one-time, repo-level manual action that cannot be automated via workflow and must precede the first deploy.

4. **Cross-reference to the workflow.** The doc names `.github/workflows/deploy.yml` as the workflow that depends on this setting, so a reader can find it.

5. **`deferred-work.md` updated.** The "GitHub Pages 'Source: GitHub Actions' toggle" bullet under "From spec-site-scaffold review (2026-04-23)" is removed (it's resolved) or marked resolved with a pointer to this story / the doc that now covers it.

6. **Build clean.** `pnpm build` succeeds; the README/deployment.md change does not affect the content collection or sitemap. (README.md at repo root is outside the content tree; `docs/deployment.md` if created is also outside the content tree.)

## Tasks / Subtasks

- [x] **Task 1 — Pick a doc location** (AC: #1)
  - [x] Picked `README.md` for discoverability. Fork authors land there first; no `docs/` directory exists at repo root yet so a single README section avoids creating a deeper docs hierarchy this story does not warrant.

- [x] **Task 2 — Write the setup step** (AC: #2, #3, #4)
  - [x] Added `## Initial deployment setup` section to README.md with a numbered three-step navigation through Settings → Pages → 'Build and deployment' → 'GitHub Actions'.
  - [x] States explicitly that this is a one-time, repo-level manual action.
  - [x] Cross-references `.github/workflows/deploy.yml` plus the upstream actions (`withastro/action@v3`, `actions/deploy-pages@v4`).

- [x] **Task 3 — Update `deferred-work.md`** (AC: #5)
  - [x] "GitHub Pages 'Source: GitHub Actions' toggle" bullet struck through with resolution note pointing at Story 9.5.

- [x] **Task 4 — Build verification** (AC: #6)
  - [x] `npm run build` passes. README.md is outside `src/content/docs/` so the content collection is unaffected.

- [x] **Task 5 — Commit** (per CLAUDE.md git rules)
  - [x] Single commit, scope `Epic 9 / Story 9.5`.

## Dev Notes

**Why this is its own story.** The Pages "Source: GitHub Actions" toggle is a manual, one-time, repo-level click that GitHub does not allow scripting. Every fork or new deployment of this scaffold needs this step. Documenting it once here saves every future maintainer a confusing failure on their first push.

**README.md is the more discoverable location.** Fork authors land on the README. `docs/deployment.md` is fine if there's a deeper deployment-docs section to live alongside; but if README is currently the only project-level doc, put it there.

**Tone is operational, not marketing.** This is a setup step, not a sales pitch. Keep the section short — a paragraph or a 4-line numbered list is enough.

**Do not duplicate workflow content.** Don't paste the contents of `.github/workflows/deploy.yml` into the doc. Link to it. The workflow is the source of truth.

**Forbidden in this story:**
- Editing `.github/workflows/deploy.yml` (content; the workflow is correct as-is)
- Editing `astro.config.mjs`
- Editing content files
- Adding screenshots of GitHub UI (they go stale fast; prose-only)

**Source tree components to touch:**
- `README.md` — modified (preferred location for the new section), OR
- `docs/deployment.md` — NEW (alternative location), with a link from README.md
- `_bmad-output/implementation-artifacts/deferred-work.md` — modified (resolve the bullet)

**Testing standards:**
- No automated test. `pnpm build` is the safety check (the doc files are outside the content tree and shouldn't affect the build).
- Manual: read the new section as if you were a fork author with no context. Can you follow it without already knowing where the setting lives? If not, revise.

### Project Structure Notes

- README.md lives at the repo root.
- If `docs/deployment.md` is chosen instead, it lives in a top-level `docs/` directory, NOT in `src/content/docs/`. The latter is the Astro content tree; the former is project documentation outside the build.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-9.5]
- [Source: _bmad-output/planning-artifacts/architecture.md#Infrastructure-and-Deployment] — Pages workflow + the "Source: GitHub Actions" requirement
- [Source: _bmad-output/implementation-artifacts/deferred-work.md] — bullet to resolve
- GitHub Pages with Actions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site (consult for screenshot-free phrasing of the navigation)

**Cross-story dependencies:**
- Independent of all other stories. Can ship any time.
- Story 9.4 (post-deploy verification) requires this setting to be ON before its checks can run, but 9.5 just *documents* the requirement; setting the toggle is the user's manual action.

## Dev Agent Record

### Agent Model Used

claude-opus-4-7

### Debug Log References

### Completion Notes List

- Rewrote `README.md` (which had been a corrupted UTF-16 single-line header) as a proper project README. The README now covers project description, local-development commands, the `## Initial deployment setup` section satisfying ACs #2–#4, authoring conventions, and a license link.
- Resolved the deferred-work bullet for the Pages-source toggle.
- Build still produces 44 pages cleanly; README at repo root is outside the content collection.

### File List

- README.md (modified — full rewrite)
- _bmad-output/implementation-artifacts/deferred-work.md (modified)

### Change Log

- 2026-05-03: Documented GitHub Pages setup step (Story 9.5)
