# Deferred Work

Items surfaced during quick-dev cycles that were not in scope for the originating spec. Pick up when a related spec comes around, or address in a dedicated cleanup cycle.

## From spec-site-scaffold review (2026-04-23)

- **GitHub Pages "Source: GitHub Actions" toggle** — must be enabled manually in repo Settings → Pages before the first workflow deploy succeeds. User action only; not scriptable without a separate Pages-management API call.
- ~~**LICENSE file** — architecture.md suggested MIT. Add before public v1 launch.~~ **Resolved by Epic 9 Story 9.1** — MIT LICENSE added at repo root with copyright `2026 Ferdi Nebiev`; `package.json` declares `"license": "MIT"`.
- **Live post-deploy verification** — after first successful merge to `master`/`main`:
  - 404 page serves correctly at base path `/software-engineering-with-ai/`
  - Dark-mode toggle renders legibly
  - Pagefind search works on-site
  - Internal sidebar links resolve with base path
- **Tighten content-collection schema** — promote `type`, `phase`, `order` from `.optional()` to required-for-non-home via `z.discriminatedUnion` or `superRefine`. Currently a convention gap, not a build-time check. Trigger: first content PR that lands without one of these fields.
- **Build-time 4-H2 heading template lint** — architecture.md flags this as a post-v1 upgrade (remark-lint). Not needed until content drift is observed.
- **Build-time broken-link check** — `astro-broken-link-checker` or equivalent. Deferred per architecture.md.

## From: code review of 1-1-number-the-phase-labels-in-the-sidebar (2026-05-01)

- **Pagefind indexing of prefixed phase labels** — verify post-deploy that searching `1`, `2`, etc. doesn't surface spurious sidebar matches. Likely benign (sidebar is short and finite); acceptable trade-off if observed.
- **Sidebar collapse-state persistence churn** — Starlight's localStorage key for collapse state may be the label string; returning visitors will see all 7 phases re-collapsed on first visit after the numbering deploys. One-time UX papercut, no action needed unless complaints surface.
- **Screen-reader announcement of `N. ` prefix** — feed into Story 9.3 (pre-launch manual accessibility audit). Decide whether to (a) accept "one dot Pre-Sales…" as the screen-reader output, or (b) set explicit `attrs: { 'aria-label': '…' }` on each sidebar group to strip the prefix from the accessible name.
- **Mobile label wrap at 320px** — confirm `'7. Maintenance & Retainer'` (the longest label) doesn't two-line wrap at the NFR5 lower bound during the AC #4 user visual check.
- **sprint-status `last_updated` timestamp granularity** — pre-existing pattern: file uses date-only `YYYY-MM-DD`. Same-day transitions are indistinguishable from initial generation. Switch to ISO 8601 if intra-day audit ever becomes needed.
- **i18n-safety of "N. " ordinal prefixes** — site is English-only today (no `locales` configured). If i18n is ever added, extract phase numbering into per-locale strings rather than hardcoding `1. ` … `7. ` in the base sidebar.
