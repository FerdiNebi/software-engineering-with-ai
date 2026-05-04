# End-to-End Software Engineering with AI

A free static reference site for senior engineers stepping into consulting and
agency work. It maps the agency / consulting delivery lifecycle — pre-sales
through maintenance — across 7 phases and 35 sub-sections, each on a strict
4-section template:

- **What happens here** — what the phase is, who's involved, what produces it
- **Best practices** — what mature agencies do, and why
- **Desired outcomes** — what "done" looks like, what hands off to the next phase
- **What the industry does** — patterns and trade-offs across agency archetypes

It exists because senior engineers usually know how to ship software but
haven't seen the agency-side process: scoping calls, proposals, SOWs, paid
discovery, handoff packages, retainers. Existing references either cover
skill trees, big-tech product orgs, or beginner SDLC abstractions. None of
them cover what a senior engineer actually does between "we have a lead" and
"the retainer renewed."

Live site: https://ferdinebi.github.io/software-engineering-with-ai/

## Built with AI, end to end

This repository is also a worked example of **shipping a non-trivial codebase
using AI as a primary collaborator**, not just an autocomplete. Every artifact
the project ran on — the brief, the PRD, the architecture, the UX spec, the
epics, the per-story specs, the implementation, the code reviews — lives in
the repo and was produced through Claude (Sonnet 4.6 and Opus 4.7) under the
[BMAD method](https://github.com/bmad-code-org/BMAD-METHOD).

The flow that produced this site:

1. **Product brief** — captured the audience, scope, and constraints
   (`_bmad-output/planning-artifacts/product-brief-*.md`).
2. **PRD** — converted the brief into functional and non-functional
   requirements with explicit user journeys (`prd.md`).
3. **Architecture** — pinned the tech choices, file layout, content
   contract, and enforcement rules (`architecture.md`).
4. **UX design specification** — pinned the visual system, callout
   conventions, accessibility targets, and forbidden patterns
   (`ux-design-specification.md`).
5. **Epics & stories** — broke the PRD into 9 epics and 47 user stories,
   each with bidirectional acceptance criteria, tasks, dev notes, and
   forbidden patterns (`_bmad-output/implementation-artifacts/<n>-<slug>.md`).
6. **Implementation** — one commit per story, with file lists, completion
   notes, and a change log captured back into the story file.
7. **Code review** — adversarial multi-layer review per story (Acceptance
   Auditor + Edge Case Hunter + Blind Hunter pattern), findings triaged into
   patch / defer / dismiss buckets, story status transitioned to `done` only
   when AC were met.

Why this matters for showcasing AI-built work: the value isn't "Claude wrote
markdown." It's that the **discipline around the model** — pinned specs,
explicit acceptance criteria per story, forbidden-pattern lists, an
enforced content template, schema-backed frontmatter, parallel review
layers — is what kept 43 pages on-template and stopped the model drifting
into marketing tone. The artifacts are checked in so the process is
auditable, not just the output.

## Tech stack

- **[Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/)** — static-first
  framework purpose-built for documentation sites; gives sidebar, search,
  dark mode, theming via CSS custom properties, and zero-JS pages by default.
- **MDX** for the home page so an Astro component (`<PhaseList />`) can be
  embedded in markdown without changing extension.
- **Zod content-collection schema** (`src/content.config.ts`) — discriminator
  pattern that requires `type` / `phase` / `order` on every content page
  while exempting the schema-light home, with per-field error messages that
  name the offending file at build time.
- **Custom remark plugin** (`remark-base-path.mjs`) — prefixes the configured
  base path onto inline markdown links so the site works under both
  `/` (local dev) and `/software-engineering-with-ai/` (GitHub Pages
  project-page deploy) without authors having to think about it.
- **GitHub Pages** + **GitHub Actions** for deployment
  (`.github/workflows/deploy.yml`); `withastro/action@v3` builds, then
  `actions/deploy-pages@v4` ships.

No CMS, no auth, no runtime APIs. The whole site is a static build.

## Local development

```bash
pnpm install
pnpm dev       # local dev server with HMR
pnpm build     # static build to ./dist
pnpm preview   # serve the built site locally
```

Node is pinned to 22 (active LTS) via `.nvmrc`; pnpm via `packageManager` in
`package.json` (currently `pnpm@10.33.2`).

## Initial deployment setup

This site deploys to GitHub Pages via the workflow at
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which uses
[`withastro/action@v3`](https://github.com/withastro/action) and
[`actions/deploy-pages@v4`](https://github.com/actions/deploy-pages).

**One-time manual step before the first deploy.** GitHub does not allow this
setting to be scripted from a workflow — it must be set once in the
repository UI before any push to `master` or `main` will publish:

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.

The workflow assumes this setting is already in place. Pushes to
`master`/`main` trigger build-and-deploy; pull requests build but skip
deploy. If the first push fails with a "Pages not enabled" error, the toggle
above has not been set.

This step is a one-time, repo-level action. Forks and new deployments of
this scaffold need to repeat it.

## Authoring conventions

- Content lives in `src/content/docs/<phase-slug>/<page>.md`.
- Each page uses exactly four H2 headings, in order: `What happens here`,
  `Best practices`, `Desired outcomes`, `What the industry does`.
- Frontmatter requires `title`, `description`, `type`, `phase`, `order`,
  `lastUpdated` (ISO date). The home page is exempt by virtue of carrying
  none of `type`/`phase`/`order` (see `src/content.config.ts`).
- Internal links use leading-slash paths
  (`/discovery/requirements-workshops/`); never hardcode the production
  URL; never use `./foo.md`. The remark plugin handles base-path prefixing.
- Voice is practitioner-grade, second person, declarative; agency /
  consulting frame, not generic SDLC.

## Repository layout

```
src/
  components/        Astro components (e.g. PhaseList.astro)
  content/docs/      Markdown content, one folder per phase
  content.config.ts  Zod schema for the content collection
  styles/            Theme overrides (Starlight CSS custom properties)
remark-base-path.mjs Build-time link rewriter for base path
astro.config.mjs     Starlight + sidebar config + remark plugin wiring
.github/workflows/   GitHub Actions deploy pipeline
_bmad-output/        Specs, architecture, epics, stories, code-review trail
_bmad/               BMAD module configuration
```

The `_bmad-output/` tree is the audit trail of how the site was built.
Open `planning-artifacts/` for the brief / PRD / architecture / UX spec, and
`implementation-artifacts/` for the per-story specs and the sprint status.

## License

[MIT](LICENSE) © 2026 Ferdi Nebiev.
