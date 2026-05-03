# Story 9.4: Post-first-deploy live verification

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As the author publishing the site for public consumption,
I want to verify on the real GitHub Pages URL that the core navigation and rendering paths work,
So that the first publicly-shared link does not land on broken affordances.

## Acceptance Criteria

1. **Home page renders cleanly.** Open `https://ferdinebi.github.io/software-engineering-with-ai/` in a fresh browser. The home page renders with the `<PhaseList>` (from Story 1.2), the sidebar shows all 7 numbered phases (from Story 1.1), and no JavaScript errors appear in the browser console.

2. **404 page renders at base path.** Open a deliberately invalid URL under the site (e.g., `https://ferdinebi.github.io/software-engineering-with-ai/this-does-not-exist`). Starlight's default 404 page renders correctly at the base path, not GitHub's generic 404.

3. **Pagefind search works.** Open the search dialog (`/` or `Cmd+K`). Search a known practitioner term from the live content (e.g., "SOW" if Pre-Sales content is shipped, or "monitoring" if Deployment is shipped). The expected page appears in the top results with a preview snippet visible.

4. **Theme toggle persists.** Click the theme toggle to switch from light → dark (or vice versa). The change applies without layout shift. Navigate to one other page; the theme persists.

5. **Sample of 6 internal links resolve under base path.** Click each of the following on the live site and confirm none return a 404:
   - One forward cross-phase link (e.g., from `/pre-sales/` to `/discovery/`)
   - One backward cross-phase link (e.g., from `/discovery/` to `/pre-sales/sow-contract-drafting/`)
   - One sub-section link from the sidebar (e.g., `/pre-sales/lead-qualification-scoping-calls/`)
   - One sub-section link from the in-page TOC (any `## What happens here` heading link from the right rail)
   - One Starlight prev/next link (the "Next" link from any page)
   - One home-page `<PhaseList>` entry click

6. **Verification results dispositioned and committed.** Each AC #1–#5 result is recorded with one of:
   - **Pass** — works as specified.
   - **Fail (blocker)** — blocks public launch; opened as a fix-now issue in `deferred-work.md` or as a follow-up story.
   - **Fail (non-blocker)** — works around it for now, deferred to `deferred-work.md` with a justification.

7. **Verification notes committed.** Results live in this story's `Dev Agent Record → Completion Notes List`, OR in a separate file `_bmad-output/implementation-artifacts/9-4-post-deploy-verification-results.md` if substantial.

8. **Pre-existing `deferred-work.md` "Live post-deploy verification" bullet resolved.** Under "From spec-site-scaffold review (2026-04-23)", that bullet should be removed or marked resolved with a pointer to this story.

## Tasks / Subtasks

- [ ] **Task 1 — Confirm a deploy has actually happened** (AC: #1)
  - [ ] Verify GitHub Actions has run the `withastro/action@v3` workflow successfully on `master` (or `main`) at least once. Check `https://github.com/<owner>/software-engineering-with-ai/actions` for a green workflow run.
  - [ ] Confirm GitHub Pages "Source: GitHub Actions" toggle is enabled (Story 9.5's domain to *document*; this story just *requires* it to be set so the deploy is visible at the URL).
  - [ ] If no successful deploy yet, this story cannot run — pause until the first deploy lands.

- [ ] **Task 2 — Run AC #1 (home + sidebar + console)**
  - [ ] Open the live URL in a fresh incognito browser window.
  - [ ] Confirm `<PhaseList>` renders (7 numbered items as `<ol>`); confirm sidebar shows `1. ... 7. ...`.
  - [ ] Open browser console (F12). Confirm zero errors and zero warnings related to Pagefind / Starlight.

- [ ] **Task 3 — Run AC #2 (404 at base path)**
  - [ ] Append `/this-does-not-exist` to the base URL. Confirm Starlight's 404 page renders (with the site's chrome — sidebar, search, etc.), not a bare GitHub 404.

- [ ] **Task 4 — Run AC #3 (search)**
  - [ ] Hit `/` or `Cmd+K` to open Pagefind. Search a real term from the live content. Confirm the right page appears in top results with a snippet.

- [ ] **Task 5 — Run AC #4 (theme persistence)**
  - [ ] Toggle theme. Note any layout shift (should be none). Navigate to another page; confirm the theme stays.

- [ ] **Task 6 — Run AC #5 (six-link sample)**
  - [ ] Identify 6 specific links to click ahead of time, write them down. Click each in turn; confirm each resolves correctly under `/software-engineering-with-ai/...`.

- [ ] **Task 7 — Disposition each result** (AC: #6)
  - [ ] For each AC: pass / fail-blocker / fail-non-blocker. Document with a sentence each.
  - [ ] Failed-blockers open a follow-up story (or fix immediately if 1-line). Failed-non-blockers go to `deferred-work.md`.

- [ ] **Task 8 — Update `deferred-work.md`** (AC: #8)
  - [ ] Remove the "Live post-deploy verification" bullet (it's resolved by this story) OR mark it resolved with a pointer.

- [ ] **Task 9 — Commit verification notes** (AC: #7)
  - [ ] Inline notes in `Dev Agent Record → Completion Notes List`, or a separate `9-4-post-deploy-verification-results.md` file.
  - [ ] Single commit, scope `Epic 9 / Story 9.4`. Suggested message: `Post-deploy live verification results (Epic 9 Story 9.4)`. Include `deferred-work.md` change in the same commit.

## Dev Notes

**Live URL must be reachable.** This story requires a successful first deploy. If GitHub Actions hasn't run, or the Pages "Source" setting is wrong (Story 9.5's territory), this story cannot run. Confirm the live URL responds before starting.

**Six-link sample is a sample, not exhaustive.** AC #5 asks for 6 specific link types, not "test every link on the site." A broader broken-link check is deferred (see `deferred-work.md` "Build-time broken-link check"). This story is the post-deploy smoke test.

**Hardcoded base path is the most common failure mode.** A link that works on `pnpm dev` (no base) but fails on the live URL (`/software-engineering-with-ai/...` base) is the canonical "I forgot the leading slash" bug. AC #5 is calibrated to catch this.

**Theme persistence relies on `localStorage`.** Across-page persistence works in Starlight by default; this story is just confirming it didn't regress.

**Forbidden in this story:**
- Editing content files
- Editing `astro.config.mjs`
- Adding any new component
- Replacing Pagefind with another search

**Source tree components to touch:**
- `_bmad-output/implementation-artifacts/9-4-post-first-deploy-live-verification.md` — this story file (audit notes inline)
- `_bmad-output/implementation-artifacts/deferred-work.md` — modified (resolve the bullet)
- Optionally: `_bmad-output/implementation-artifacts/9-4-post-deploy-verification-results.md` — NEW (only for longer audits)
- Code files for fix-nows (rare; if the audit finds a 1-line bug, fix-then-commit; if anything bigger, file as a separate story)

**Testing standards:**
- This story IS the test. Verification is the live-site walkthrough.

### Project Structure Notes

- Audit results file (if used) lives in `_bmad-output/implementation-artifacts/`.
- Per CLAUDE.md, even a manual-test story commits its results.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-9.4]
- [Source: _bmad-output/planning-artifacts/architecture.md#Infrastructure-and-Deployment] — base path config (`base: '/software-engineering-with-ai/'`); Pages workflow shape
- [Source: _bmad-output/planning-artifacts/architecture.md#SEO-404-Accessibility] — Starlight 404 default
- [Source: _bmad-output/planning-artifacts/prd.md#Display-and-Appearance] — FR20 (theme toggle), FR6 (search)
- [Source: _bmad-output/implementation-artifacts/deferred-work.md] — bullet to resolve
- GitHub Pages with Actions docs: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow (consult for the manual-toggle expectation only)

**Cross-story dependencies:**
- **Hard dependency on a successful first deploy.** Story 9.5 documents the manual Pages-source toggle that must be set before the deploy can run. If 9.5 hasn't been done, this story can't run.
- **Soft dependency on Epic 1 stories.** AC #1 requires `<PhaseList>` (1.2) and numbered sidebar (1.1). If those haven't shipped, AC #1 is partial.

## Dev Agent Record

### Agent Model Used

claude-opus-4-7

### Debug Log References

### Completion Notes List

**Status: requires user manual execution after first deploy.**

This story can only run against a successfully deployed live site (GitHub Pages, Source: GitHub Actions). I cannot:
- Trigger or watch a GitHub Actions workflow
- Open the live URL in a browser
- Inspect browser console output
- Operate the Pagefind search UI
- Click theme toggles or watch for layout shift
- Navigate between live pages

**Pre-flight items I can confirm without a live deploy:**
- `astro.config.mjs` has `site: 'https://ferdinebi.github.io'` and `base: '/software-engineering-with-ai/'` set correctly. Build artifacts under `dist/` resolve to the base-path-prefixed structure.
- All internal content links use leading-slash paths only (no relative `.md` links, no hardcoded production URLs); checked across the 35 sub-section pages plus the 7 phase overviews and home `index.mdx`.
- `<PhaseList>` (`src/components/PhaseList.astro`) renders `<ol>` with leading-slash `href={`/${slug}/`}` paths — these will pick up the `base` prefix at build time.
- `dist/<slug>/index.html` produced for all 44 pages on local build; sitemap-index.xml generated.

**Manual portions still pending user execution (the actual ACs):**
- AC #1: Open the live URL after first successful deploy; verify `<PhaseList>`, sidebar, and console are clean.
- AC #2: Hit a deliberately-invalid URL; verify Starlight 404 (not GitHub generic 404).
- AC #3: Open Pagefind; search a known term; verify result + snippet.
- AC #4: Toggle theme; verify no layout shift; navigate; verify persistence.
- AC #5: Click 6 specific link types (forward cross-phase, backward cross-phase, sidebar sub-section, in-page TOC, prev/next, PhaseList entry); verify each resolves under base path.
- AC #6/#7: Disposition and commit findings.
- AC #8: Resolve the `deferred-work.md` "Live post-deploy verification" bullet once verification is run.

**Recommended sequence.** First complete Story 9.5 (document the GitHub Pages "Source: GitHub Actions" toggle). Then ensure that toggle is actually set in repo settings. Then push to `master` so the workflow runs; once green, the live URL becomes reachable. At that point this story's AC #1–#5 can be executed in 15–30 minutes; capture findings inline in this section before flipping to `review`.

**Status left at `ready-for-dev`** in `sprint-status.yaml` — flip to `review` only after the live verification has been run and findings dispositioned.

### File List

- (none modified by the agent — pre-flight static review only)
