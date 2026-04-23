# Deferred Work

Items surfaced during quick-dev cycles that were not in scope for the originating spec. Pick up when a related spec comes around, or address in a dedicated cleanup cycle.

## From spec-site-scaffold review (2026-04-23)

- **GitHub Pages "Source: GitHub Actions" toggle** — must be enabled manually in repo Settings → Pages before the first workflow deploy succeeds. User action only; not scriptable without a separate Pages-management API call.
- **LICENSE file** — architecture.md suggested MIT. Add before public v1 launch.
- **Live post-deploy verification** — after first successful merge to `master`/`main`:
  - 404 page serves correctly at base path `/software-engineering-with-ai/`
  - Dark-mode toggle renders legibly
  - Pagefind search works on-site
  - Internal sidebar links resolve with base path
- **Tighten content-collection schema** — promote `type`, `phase`, `order` from `.optional()` to required-for-non-home via `z.discriminatedUnion` or `superRefine`. Currently a convention gap, not a build-time check. Trigger: first content PR that lands without one of these fields.
- **Build-time 4-H2 heading template lint** — architecture.md flags this as a post-v1 upgrade (remark-lint). Not needed until content drift is observed.
- **Build-time broken-link check** — `astro-broken-link-checker` or equivalent. Deferred per architecture.md.
