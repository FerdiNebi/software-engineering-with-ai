---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8]
lastStep: 8
status: 'complete'
completedAt: '2026-04-20'
inputDocuments:
  - "prd.md"
  - "product-brief-Software-Development-with-AI.md"
  - "product-brief-Software-Development-with-AI-distillate.md"
workflowType: 'architecture'
project_name: 'Software Development with AI'
user_name: 'Ferdi'
date: '2026-04-20'
additionalConstraints:
  - "Deployment target: GitHub Pages (confirmed by user 2026-04-20)"
  - "NFR4 amended 2026-04-20 in PRD: static-first at build time with JS permitted for UI and interactive content enhancements (e.g. dynamic diagrams)"
---

# Architecture Decision Document

_This document builds collaboratively through step-by-step discovery. Sections are appended as we work through each architectural decision together._

## Project Context Analysis

### Requirements Overview

**Functional Requirements (26 total, 7 categories):**

- **Site Navigation (FR1–FR5):** Persistent sidebar, expandable phases, sequential prev/next, location breadcrumb, mobile collapsible menu.
- **Content Discovery (FR6–FR8):** Built-in full-text search, visible phase ordering in sidebar, landing page.
- **Phase Content (FR9–FR14):** Strict 4-section template on every page — *What happens here*, *Best practices*, *Desired outcomes*, *What the industry does*. Template consistency is a hard requirement, not stylistic preference (critical for the training-outline use case in Journey 3).
- **Content Comprehension (FR15–FR17):** Pages stand alone (Priya's cherry-picking journey), contextual cross-phase links, clear visual hierarchy between phase overview and sub-section pages.
- **Sub-Section Navigation (FR18–FR19):** 35 dedicated sub-section pages, sibling navigation without returning to overview.
- **Display (FR20–FR22):** Toggleable dark/light mode, responsive desktop + mobile, no horizontal scrolling.
- **Content Management (FR23–FR26):** Author edits Markdown/MDX, configures sidebar via framework config, previews locally, deploys with one command.

**Non-Functional Requirements (9 total):**

- **Build & deploy (NFR1–NFR3):** `npm install && npm run build` from clean clone; build under 60s; one-command or auto GitHub Actions deploy on push to `main`.
- **Rendering (NFR4–NFR6):** Content is pre-rendered as static HTML at build time (no runtime SSR, no request-time APIs, no CMS). **JavaScript is permitted** for both UI features (search, theme toggle, mobile menu) and for interactive content enhancements (dynamic diagrams, expandable explainers, embedded interactive examples). Core page text must remain readable when interactive components fail. Viewport support 320px–2560px without horizontal scroll; dark/light modes both legible with sufficient contrast.
- **Maintainability (NFR7–NFR9):** New phase/sub-section requires only a new Markdown file + config entry (no code changes); plain Markdown/MDX with no proprietary format; zero runtime dependencies.

**Scale & Complexity:**

- Content inventory: 43 pages at v1 launch (1 home + 7 phase overviews + 35 sub-sections).
- Primary domain: static documentation site.
- Complexity level: **low** (PRD classification; content-driven, minimal technical surface area).
- Estimated architectural components: single static site build + GitHub Actions deploy pipeline + Markdown/MDX content tree + sidebar config + (v2-ready) interactive-component layer for in-page diagrams/explainers.

### Technical Constraints & Dependencies

- **Deployment target: GitHub Pages** (user-confirmed 2026-04-20). Project-scoped URL confirmed as `ferdinebi.github.io/software-engineering-with-ai/` (repo: `FerdiNebi/software-engineering-with-ai`). Base-path handling required in framework config and internal links.
- **Zero runtime dependencies** (NFR9): no server functions, no API routes, no databases, no runtime LLM calls. All content pre-built at compile time.
- **Static-first rendering with JS-enhanced interactivity** (NFR4, revised 2026-04-20): pages must be SSG with core text readable without JS, but the architecture must actively support client-side interactive components (islands/MDX components) for content enhancements such as dynamic diagrams. This upgrades interactivity from a tolerated exception to a first-class concern and shapes the framework decision.
- **Authoring-first maintainability** (NFR7, FR23, FR24): framework config must express sidebar as declarative data, not code; Markdown/MDX files must be portable with no proprietary extensions.
- **Framework decision open** per PRD/distillate: Astro Starlight (lead candidate), MkDocs Material, Docusaurus, VitePress. The revised NFR4 strengthens the case for island/component-capable frameworks (Astro, Docusaurus, VitePress) and weakens the case for MkDocs Material for interactive content.
- **v2 extensibility**: each page must accommodate a 5th "AI-assisted workflow" section without template churn. The interactive-component capability also supports embedded AI-workflow demos in v2.

### Cross-Cutting Concerns Identified

- **Page-template consistency enforcement** (FR14): the 4-section template must be guaranteed across 43 pages. Likely enforced through Markdown authoring conventions + optional lint, not runtime logic.
- **Sidebar configuration as single source of truth** (FR2, FR7, FR24, NFR7): navigation order, grouping, and labels live in one config file consumed by both rendering and IA.
- **Cross-phase linking conventions** (FR16): stable internal URL scheme so inter-phase links survive content reorganization. Likely driven by content-collection slugs.
- **Theming (light/dark)** (FR20, NFR6): handled by the framework's built-in theme system; custom tokens only if brand palette is defined (none yet).
- **GitHub Pages base-path handling**: affects asset URLs, internal links, sitemap generation, and any future search indexing.
- **Interactive-component strategy** (NFR4 revised): need a convention for where interactive widgets live (co-located vs. central), how they're authored (MDX import vs. shortcode vs. framework component), and how they degrade when the script fails to load. To be decided in a later step.
- **Content pipeline (out-of-band)**: LLM-drafted Markdown reviewed by the author, committed via Git. Not an architectural concern for the runtime but drives the authoring-experience requirement (preview + validation before publish).
- **v2 forward-compatibility slot**: architectural decisions today must not foreclose adding the AI-workflow section per page in v2.

## Starter Template Evaluation

### Primary Technology Domain

Static documentation site — Node/TypeScript ecosystem, deployed as pre-rendered HTML/CSS/JS to GitHub Pages. No backend, no runtime API, no database.

### Starter Options Considered

Three Node-based documentation-site frameworks evaluated against the PRD:

**Astro Starlight** — documentation theme built on Astro's islands architecture. Framework-agnostic interactivity (React/Vue/Svelte/Solid/Preact/Alpine), zero-JS-by-default rendering, Pagefind static search, Zod-typed content collections, MDX + Markdoc support. Astro was acquired by Cloudflare in January 2026 — strong maintenance signal. Official GitHub Pages deployment via `withastro/action`.

**Docusaurus** (v3.9.2) — React-based documentation SSG by Meta. Mature plugin ecosystem, built-in versioning, MDX v3 (stricter JSX). Requires React commitment for any interactive content. Heavier than needed for a 43-page content-first site with no versioning requirement.

**VitePress** — Vue + Vite-based. Each Markdown page is also a Vue SFC, enabling inline Vue interactivity. Fastest build and dev server (Vite 7). Minimalistic philosophy. Locks interactive content to Vue.

### Selected Starter: Astro Starlight

**Rationale for Selection:**

- **Zero UI-framework lock-in.** User has no prior framework experience and expects future interactive content (e.g. dynamic diagrams). Starlight's islands architecture allows picking the right tool per widget (Mermaid, D3, vanilla JS, or any supported framework) without committing the whole site to one UI framework today.
- **Islands architecture is a native match for the revised NFR4** (static-first rendering with JS-permitted interactive enhancements). Content pages are zero-JS HTML by default; interactive components hydrate independently and degrade gracefully.
- **All FR-level navigation and display requirements are met out of the box** — sidebar (FR1–5), full-text search via Pagefind (FR6), dark/light theme toggle (FR20), responsive mobile (FR5, FR21–22), sequential prev/next (FR3), breadcrumb (FR4), MDX authoring (FR23). No custom UI engineering for v1.
- **Zod-schema content collections** provide a mechanism to enforce the strict 4-section template (FR14) at build time, turning template consistency from convention into a buildable guardrail.
- **Official GitHub Pages deployment** via `withastro/action` satisfies NFR3 (auto-deploy on push to `main`) with minimal workflow config.
- **Build performance** easily under the 60s target (NFR2) at 43 pages on Astro's Vite pipeline.

**Initialization Command:**

```bash
pnpm create astro@latest -- --template starlight --typescript strict
```

(npm equivalent: `npm create astro@latest -- --template starlight`)

**Architectural Decisions Provided by Starter:**

**Language & Runtime:**
- TypeScript with strict mode enabled
- Node.js 20 LTS (or active LTS at scaffold time)
- Package manager: pnpm (recommended) or npm

**Styling Solution:**
- Starlight's built-in CSS system with CSS custom properties for light/dark themes
- Framework defaults accepted for v1 (per PRD user decision 2026-04-20); custom CSS added later if brand palette is defined

**Build Tooling:**
- Astro build pipeline (Vite under the hood)
- Static HTML output suitable for any CDN
- Official `withastro/action` GitHub Action for Pages deployment

**Testing Framework:**
- None scaffolded by default; testing scope for v1 is content-integrity checks (broken links, template conformance) rather than unit tests — to be decided in a later architectural decision step

**Code Organization:**
- Content in `src/content/docs/` organized by phase (one folder per SDLC phase)
- Sidebar config centralized in `astro.config.mjs` (single source of truth per FR24, NFR7)
- Shared interactive components in `src/components/` (for future dynamic diagrams)
- Assets in `src/assets/` for optimized images

**Development Experience:**
- `pnpm dev` for local preview with hot reload (FR25)
- `pnpm build` for production build (NFR1)
- Pagefind index generated automatically during build
- Content-collection type generation provides IntelliSense for frontmatter in authoring

**Note:** Project initialization using this command should be the first implementation story.

## Core Architectural Decisions

### Decision Priority Analysis

**Critical Decisions (Block Implementation):**
- Content collection schema + file layout (A1–A3)
- Sidebar strategy — explicit in config (B1)
- Base-path handling for GitHub Pages (D3)
- CI/CD workflow — `withastro/action@v3` on push to `main` (D1–D2)

**Important Decisions (Shape Architecture):**
- Islands-first interactivity policy (C1–C4)
- Mermaid as leading candidate for diagrams (C2) — plugin locked at first use
- Node/pnpm version pinning via `.nvmrc` and `packageManager` (D4)
- `@astrojs/sitemap` integration (E1)

**Deferred Decisions (Post-MVP or on demand):**
- Build-time 4-section template linting (A4) — add if drift observed
- React islands (C3) — add only when first widget needs them
- Branded 404, OpenGraph images, WCAG audit, PR preview deploys, analytics
- Build-time broken-link check

### Data Architecture

Not applicable — the product has no database, no runtime data store, and no CMS. Content *is* the data, authored as Markdown/MDX files and pre-rendered to static HTML at build time.

**Content model (equivalent role):**
- Astro content collections with Zod schemas typing all frontmatter (A1)
- Two collection schemas: `phase-overview` and `sub-section`, differentiated by the `type` discriminant
- Required frontmatter: `title`, `description`, `phase`, `order`, `lastUpdated`; optional `status` for v2 AI-section readiness
- URL slugs derived from file paths; stable once published (A3)

### Authentication & Security

Not applicable — the site is public, read-only, has no user accounts, no form submissions, no cookies, no sessions, no API endpoints.

**Security defaults preserved:**
- HTTPS enforced by GitHub Pages
- No third-party scripts in v1 (no analytics, no chat widgets)
- Any future interactive component ships with SRI where applicable and explicit CSP consideration

### API & Communication Patterns

Not applicable — no runtime API.

**Internal "contract" equivalent:**
- Content collection Zod schemas are the internal contract between authors and the build
- No cross-service communication; single static build artifact deployed as-is

### Frontend Architecture

- **Routing:** File-based, provided by Astro/Starlight. One route per Markdown file under `src/content/docs/`. 43 routes at v1 (1 home + 7 phase overviews + 35 sub-sections).
- **State management:** None — content is static; no client-side state.
- **Component architecture:** `.astro` components by default. React islands allowed for interactive widgets when `.astro` isn't sufficient (C3). Component files in `src/components/`.
- **Interactive-component policy (C1–C4):** static-first, hydrate selectively via islands, always degrade gracefully so core text renders without JS. Mermaid is the leading candidate for diagrams; plugin selection deferred to first-use.
- **Sidebar as single source of truth (B1–B3):** explicit config in `astro.config.mjs`, not filesystem-autogenerated. Phase ordering is product-driven.
- **Bundle optimization:** Astro defaults — zero JS on content pages, island-scoped JS only.

### Infrastructure & Deployment

- **Hosting:** GitHub Pages (project-scoped URL: `https://ferdinebi.github.io/software-engineering-with-ai/`)
- **Repo:** `FerdiNebi/software-engineering-with-ai` (confirmed 2026-04-20 from git remote)
- **CI/CD:** GitHub Actions with `withastro/action@v3`; Pages source set to "GitHub Actions" (D1)
- **Trigger:** push to `main` → build → deploy (D2)
- **Base path:** set in `astro.config.mjs` — `site: 'https://ferdinebi.github.io'`, `base: '/software-engineering-with-ai/'`. All internal links relative or base-path-aware (D3)
- **Node version:** 20 LTS (or active LTS at scaffold time), pinned via `.nvmrc` (D4)
- **Package manager:** pnpm, pinned via `packageManager` field in `package.json` (D4)
- **Environment configuration:** no env vars required in v1 (D5)
- **Monitoring / observability:** none required (static content site, no runtime)
- **Scaling:** GitHub Pages CDN handles scaling; no action required

### SEO, 404, Accessibility

- `@astrojs/sitemap` integration enabled (E1)
- 404 page: Starlight default (E2)
- OpenGraph images: deferred (E3)
- Analytics: none in v1 (E4)
- Accessibility: Starlight defaults relied upon; contrast validated during content review (F1–F2)

### Decision Impact Analysis

**Implementation Sequence:**
1. Scaffold with `pnpm create astro@latest -- --template starlight --typescript strict`
2. Configure base path and `site` in `astro.config.mjs` for GitHub Pages
3. Define content collection schemas (phase-overview + sub-section)
4. Create 43 empty content files matching file-layout convention
5. Define explicit sidebar in `astro.config.mjs` pointing at all 43 pages
6. Add `@astrojs/sitemap` integration
7. Add GitHub Actions workflow using `withastro/action@v3`
8. Pin Node (.nvmrc) and pnpm (packageManager)
9. Verify initial build + deploy to GitHub Pages
10. Begin content authoring per the 4-section template

**Cross-Component Dependencies:**
- Sidebar config depends on file layout being stable (A2 ↔ B1)
- Base path affects every internal link — must be set before content authoring starts (D3)
- Content schema must be defined before any meaningful content is drafted (A1 ↔ content pipeline G1)
- Interactive-component plugin choice (C2) can be deferred but the islands-first policy (C1) shapes all future widget authoring

## Implementation Patterns & Consistency Rules

### Pattern Categories Defined

**Critical Conflict Points Identified:**
7 areas where AI agents could drift and produce inconsistent output — all content-, layout-, or authoring-related. Runtime-logic conflict points (database, API, state, events, errors) are not applicable to this static site.

**Not Applicable (Runtime-Absent Categories):**
- Database/table/column naming, migrations, indexing
- REST/GraphQL endpoint naming, route parameters, header conventions
- API response/error wrapper formats, date/status code conventions
- Event system naming and payload structures
- State management, action naming, selector patterns
- Runtime error handling, retry logic, loading states, authentication flows

### Content Authoring Patterns

**Frontmatter schema (pinned):**

```yaml
---
title: "Discovery"                            # string, required, sentence-case, human-readable
description: "One-sentence page summary."     # string, required, ≤160 chars for meta-description
type: "phase-overview" | "sub-section"        # discriminant; required
phase: "pre-sales" | "discovery" | ...         # kebab-case phase slug; required
order: 2                                       # integer, required, controls sibling sort order
lastUpdated: 2026-04-20                       # ISO date, required, updated on any content change
status: "v1" | "v2-ai-ready"                  # optional; for v2 AI-section readiness tracking
---
```

- Fields appear in the order above. Unknown fields are a build error (Zod schema).
- Dates use ISO-8601 (`YYYY-MM-DD`), never locale-formatted.
- `phase` slug values are pinned to the 7 phase kebab identifiers (see File & Folder Structure below) — misspellings fail the build.

**Markdown heading template (FR14 enforcement):**

Every content page contains exactly these four H2 headings, in this order, with these exact strings:

```markdown
## What happens here
## Best practices
## Desired outcomes
## What the industry does
```

- No H1 in the body — Starlight renders the page title from frontmatter.
- H3/H4 are free within each H2 section.
- Reordering, renaming, omitting, or adding top-level H2s is not permitted in v1. v2 may add `## AI-assisted workflow` as a fifth H2 (after the existing four).

**Internal-link convention (FR16, base-path safety):**

- Use Starlight's relative-link resolution: write `](/discovery/requirements-workshops/)` with leading slash; Starlight resolves against the configured `base`.
- Never hardcode `https://ferdinebi.github.io/software-engineering-with-ai/...` — breaks the site at any base-path change.
- Never use `./foo.md` or `../bar.md` — these break after file moves.
- Cross-phase links are encouraged (FR16) — every phase page should link forward and backward to its neighbors in the SDLC.

**Content tone & voice (style, not technical):**

- Practitioner voice: second person ("you"), not first-person plural ("we").
- Declarative statements over hedging ("The SOW is signed before kickoff" not "The SOW is typically signed before kickoff, depending on the organization").
- Agency/consulting frame — never reframe as generic SDLC or product-company process.

### File & Folder Structure Patterns

**Content file layout:**

```
src/content/docs/
├── index.mdx                                  # landing/home page
├── pre-sales/
│   ├── index.md                               # phase overview
│   ├── lead-qualification-scoping-calls.md    # sub-section
│   ├── proposal-writing.md
│   ├── sow-contract-drafting.md
│   └── pricing-estimation.md
├── discovery/
│   ├── index.md
│   └── ...
└── maintenance-retainer/
    ├── index.md
    └── ...
```

**Phase slug list (fixed, 7 entries):**

1. `pre-sales`
2. `discovery`
3. `requirements-design`
4. `development`
5. `qa-testing`
6. `deployment-launch`
7. `maintenance-retainer`

**Sub-section slug rules:**

- Lowercase ASCII, kebab-case, no leading/trailing hyphens, no double hyphens.
- Derived from the sub-section title but shortened where natural (e.g. "SOW & Contract Drafting" → `sow-contract-drafting`; drop articles, symbols, and connector words).
- Once committed and deployed, slugs are **immutable**. Renames require a redirect config entry, not a rename.

**Component/code file layout:**

```
src/
├── components/                                # shared .astro components (zero JS by default)
│   └── islands/                               # framework-based components (React, etc.) — only when .astro insufficient
├── assets/                                    # optimized images (use src/assets/ via Astro image integration)
├── styles/                                    # custom CSS (only if Starlight defaults are overridden)
└── content/
    ├── docs/                                  # content tree (see above)
    └── config.ts                              # Zod schema for content collections
```

- Images that need optimization: `src/assets/` (imported via `<Image>` or `astro:assets`).
- Raw static files (favicons, downloadable PDFs): `public/` — bypasses the build pipeline.
- Never place content images in `public/` — they'll ship unoptimized and break responsive rendering.

### Code Patterns

**TypeScript naming:**

- Component files: `PascalCase.astro` (e.g. `PhaseNav.astro`) — Astro convention.
- Utility/helper modules: `kebab-case.ts` (e.g. `phase-slugs.ts`).
- Variables, functions: `camelCase`.
- Types, interfaces: `PascalCase`.
- Constants: `UPPER_SNAKE_CASE` only for genuine constants; `camelCase` for configured defaults.

**`.astro` vs island component gating (NFR4 revised):**

Default to `.astro` (zero JS). Escalate to a hydrated island **only if all three** hold:

1. The widget genuinely requires client-side interactivity (animation, user input, dynamic data fetch from a build-time JSON file).
2. The interaction can't be reasonably achieved with `<details>`, CSS, or a small inline `<script>` block in the `.astro` file.
3. The page still reads usefully when the island fails to hydrate.

If any of the three fails, keep it in `.astro`. Diagrams authored in Mermaid text do **not** require an island — the Starlight Mermaid plugin handles rendering during build.

**Imports:**

- Absolute imports via path aliases (`@components/...`, `@content/...`) — configured in `tsconfig.json`. Never deep relative (`../../../`).
- Astro and Starlight imports from their published package names (`astro:content`, `@astrojs/starlight/...`).

### Git & Workflow Patterns

- **Branch strategy:** `main` is the deploy branch. Feature/content branches follow `content/<phase-slug>-<brief>` or `feat/<brief>`. Merge via PR to `main`.
- **Commit convention:** Conventional Commits (`content:`, `feat:`, `fix:`, `chore:`, `docs:`). Content changes use `content:` scope.
- **CI gate:** every PR runs a production build; merge is blocked on build failure.
- **Deploy:** automatic on push to `main` via `withastro/action@v3`.

### Enforcement Guidelines

**All AI Agents MUST:**

- Validate every content file against the Zod content-collection schema before committing.
- Produce the exact four H2 headings in the specified order on every content page (FR14).
- Use the pinned 7 phase slugs; never invent new ones without updating the sidebar config and redirect list.
- Use Starlight's relative-link helper for all internal links.
- Place images in `src/assets/`, not `public/`, unless the image is a static file that bypasses optimization.
- Default interactive components to `.astro`. Justify any escalation to React island in the PR description.
- Never hardcode the production base URL.

**Pattern Enforcement:**

- **Schema-level (build time):** Zod content-collection schema rejects bad frontmatter — the build fails and CI blocks merge.
- **Convention-level (PR review):** heading conformance, link conventions, slug discipline — author-reviewed in the content PR.
- **Post-v1 (optional):** add a `remark-lint` rule that verifies each page's H2 set matches the template — upgrade from convention to build-enforced if drift is observed.

**Pattern Updates:**

- Amendments to any pattern in this section require a corresponding update in `architecture.md` (this file) and a note in the PRD revisions log.
- Heading template (FR14) is locked for v1. v2 may add a fifth H2; that is the only sanctioned change.

### Pattern Examples

**Good — frontmatter and headings:**

```markdown
---
title: "Requirements Workshops"
description: "How to run collaborative requirements-gathering sessions with client stakeholders."
type: "sub-section"
phase: "discovery"
order: 2
lastUpdated: 2026-04-20
---

## What happens here
Requirements workshops bring together...

## Best practices
Run a pre-read 48 hours in advance...

## Desired outcomes
A signed-off requirements document with...

## What the industry does
Most agencies structure workshops as...
```

**Good — cross-phase link:**

```markdown
See [Pricing & Estimation](/pre-sales/pricing-estimation/) for how scope locks affect cost commitments.
```

**Anti-patterns (rejected):**

- Renaming the H2 "What happens here" to "Overview" or "Introduction" (breaks FR14 and any future lint rule)
- Hardcoding `https://ferdi.github.io/software-engineering-with-ai/discovery/...` in internal links
- Placing `diagram-process.png` in `public/` for use inside a phase page
- Adding an H1 inside the Markdown body (duplicates the title Starlight generates)
- Creating `src/components/RequirementsDiagram.tsx` as a React component when the diagram is a static Mermaid graph
- Spelling phase slugs differently across files (`pre_sales`, `PreSales`, `presales`)
- Renaming an existing slug after content has been deployed (breaks cross-phase links)

## Project Structure & Boundaries

### Complete Project Directory Structure

```
software-engineering-with-ai/
├── CLAUDE.md                                   # guidance for future Claude Code sessions
├── README.md                                   # public-facing repo description
├── LICENSE                                     # open-source license (MIT, suggested)
├── package.json                                # dependencies + packageManager (pnpm pin)
├── pnpm-lock.yaml                              # reproducible installs
├── astro.config.mjs                            # Astro + Starlight config; sidebar SSoT; base + site
├── tsconfig.json                               # TypeScript strict config + path aliases
├── .nvmrc                                      # Node 20 LTS version pin
├── .gitignore                                  # node_modules, dist, .astro, .env, etc.
├── .gitattributes                              # enforce LF line endings for markdown
├── .editorconfig                               # editor defaults (indent, charset, EOL)
├── _bmad/                                      # BMAD methodology install (do not edit manually)
├── _bmad-output/                               # BMAD planning + implementation artifacts
│   ├── planning-artifacts/
│   │   ├── product-brief-Software-Development-with-AI.md
│   │   ├── product-brief-Software-Development-with-AI-distillate.md
│   │   ├── prd.md
│   │   └── architecture.md
│   └── implementation-artifacts/               # stories, sprint docs (BMAD-generated)
├── .github/
│   └── workflows/
│       └── deploy.yml                          # build + deploy to GitHub Pages on push to main
├── docs/                                       # project-level engineering docs (sharded, optional)
├── src/
│   ├── content/
│   │   ├── config.ts                           # Zod schemas for content collections (phase-overview, sub-section)
│   │   └── docs/
│   │       ├── index.mdx                       # landing/home page (FR8)
│   │       ├── pre-sales/
│   │       │   ├── index.md                    # phase overview (FR9)
│   │       │   ├── lead-qualification-scoping-calls.md
│   │       │   ├── proposal-writing.md
│   │       │   ├── sow-contract-drafting.md
│   │       │   └── pricing-estimation.md
│   │       ├── discovery/
│   │       │   ├── index.md
│   │       │   ├── stakeholder-interviews.md
│   │       │   ├── requirements-workshops.md
│   │       │   ├── prototyping-proof-of-concept.md
│   │       │   ├── estimation-cost-commitment.md
│   │       │   └── discovery-deliverables-signoff.md
│   │       ├── requirements-design/
│   │       │   ├── index.md
│   │       │   ├── functional-nonfunctional-requirements.md
│   │       │   ├── ux-ui-design.md
│   │       │   ├── system-architecture.md
│   │       │   └── infrastructure-design.md
│   │       ├── development/
│   │       │   ├── index.md
│   │       │   ├── repository-structure-branching.md
│   │       │   ├── devops-ci-cd.md
│   │       │   ├── backend-development.md
│   │       │   ├── frontend-development.md
│   │       │   ├── developer-testing.md
│   │       │   ├── code-review.md
│   │       │   ├── secure-development-practices.md
│   │       │   ├── performance-engineering.md
│   │       │   └── technical-documentation.md
│   │       ├── qa-testing/
│   │       │   ├── index.md
│   │       │   ├── test-strategy-planning.md
│   │       │   ├── functional-regression-testing.md
│   │       │   ├── performance-testing.md
│   │       │   ├── security-testing.md
│   │       │   └── user-acceptance-testing.md
│   │       ├── deployment-launch/
│   │       │   ├── index.md
│   │       │   ├── infrastructure-provisioning.md
│   │       │   ├── deployment-execution-smoke-testing.md
│   │       │   ├── monitoring-observability-setup.md
│   │       │   └── client-handoff-launch-checklist.md
│   │       └── maintenance-retainer/
│   │           ├── index.md
│   │           ├── bug-fixes-patch-management.md
│   │           ├── feature-iteration.md
│   │           ├── incident-response.md
│   │           └── retainer-structure-slas.md
│   ├── components/                             # shared .astro components (zero JS by default)
│   │   └── islands/                            # framework islands (React, etc.) — empty in v1
│   ├── assets/                                 # optimized images; imported via astro:assets
│   ├── styles/                                 # custom CSS (empty in v1; Starlight defaults)
│   └── env.d.ts                                # Astro TypeScript ambient types
├── public/                                     # static files served as-is (bypass optimization)
│   ├── favicon.svg
│   └── robots.txt
└── dist/                                       # build output (gitignored; produced by `pnpm build`)
```

**Page count check:** 1 home (`index.mdx`) + 7 phase overviews (`<phase>/index.md`) + 35 sub-sections = **43 pages**, matching the PRD.

### Architectural Boundaries

**Content vs. code boundary:**
- Anything a writer edits lives under `src/content/docs/`.
- Anything a developer edits lives under `src/components/`, `src/styles/`, `src/content/config.ts`, `astro.config.mjs`, or root config files.
- No shared state between the two boundaries except the Zod schema in `src/content/config.ts` — this is the only contract authors and developers share.

**Config vs. content boundary:**
- `astro.config.mjs` owns navigation order, integrations, site/base URLs, and any global site behavior. It is the **single source of truth for navigation** (FR24, NFR7).
- Markdown files own page content and per-page metadata (frontmatter only).
- No navigation data duplicated across content files.

**Source vs. build-output boundary:**
- `src/` + `public/` are the inputs.
- `dist/` is the build output; never committed; regenerated on every build.
- `.astro/` is a build cache; never committed.

**Deploy boundary:**
- GitHub Actions builds `dist/` and publishes it to GitHub Pages.
- No manual deploy path in v1. No preview deploys. No other environments.

**Interactive-component boundary (NFR4 revised):**
- `.astro` components: default, zero JS, live in `src/components/`.
- Framework islands (React, etc.): opt-in per component, live in `src/components/islands/`. Empty in v1.
- Mermaid diagrams: authored as fenced code blocks in Markdown; handled by a Starlight community plugin at build time — no component files needed.

### Requirements to Structure Mapping

**FR Category → Primary Location:**

| FR category | Primary location | Notes |
|---|---|---|
| Site Navigation (FR1–FR5) | `astro.config.mjs` (sidebar) + Starlight runtime | Sidebar declared explicitly; prev/next and breadcrumb from Starlight defaults |
| Content Discovery (FR6–FR8) | Pagefind (built-in) + `src/content/docs/index.mdx` | Search index built automatically; landing page is `index.mdx` |
| Phase Content (FR9–FR14) | `src/content/docs/<phase>/*.md` + `src/content/config.ts` | 4-section template enforced by authoring convention; frontmatter by Zod schema |
| Content Comprehension (FR15–FR17) | Content files (internal cross-links) | Cross-phase links written into Markdown; visual hierarchy from Starlight templates |
| Sub-Section Navigation (FR18–FR19) | `astro.config.mjs` (sidebar) | Sibling ordering derives from sidebar config |
| Display (FR20–FR22) | Starlight theme (no code needed in v1) | Dark/light toggle, responsive, no-horizontal-scroll — all framework defaults |
| Content Management (FR23–FR26) | Markdown files + `astro.config.mjs` + `package.json` scripts + `.github/workflows/deploy.yml` | Author edits Markdown; sidebar via config; previews via `pnpm dev`; deploys via CI |

**NFR → Location:**

| NFR | Location | Notes |
|---|---|---|
| NFR1 (clean-clone build) | `package.json` scripts + `pnpm-lock.yaml` | `pnpm install && pnpm build` works from clean clone |
| NFR2 (build <60s) | Astro/Vite pipeline; monitor via CI log | No custom action needed until drift observed |
| NFR3 (1-command deploy) | `.github/workflows/deploy.yml` | Auto-deploys on push to `main` via `withastro/action@v3` |
| NFR4 (static-first rendering, JS permitted for islands) | Starlight SSG + `src/components/islands/` | Core text renders without JS; islands hydrate on demand |
| NFR5 (responsive 320–2560px) | Starlight theme defaults | No custom CSS needed v1 |
| NFR6 (dark/light contrast) | Starlight theme | Verified via content-review eye check |
| NFR7 (new page = Markdown + config entry) | `src/content/docs/` + `astro.config.mjs` sidebar | No code changes to add pages |
| NFR8 (plain Markdown/MDX, no proprietary format) | `src/content/docs/` | MDX used only when component imports needed; plain `.md` otherwise |
| NFR9 (zero runtime dependencies) | Static build artifact | Enforced by architecture; no server code exists |

**Cross-Cutting Concerns:**

| Concern | Location | Mechanism |
|---|---|---|
| Template consistency (FR14) | `src/content/config.ts` (frontmatter) + authoring convention (headings) | Zod schema for frontmatter; headings by discipline in v1, optional remark-lint in v2 |
| Sidebar SSoT | `astro.config.mjs` | Explicit sidebar array — not autogen |
| Cross-phase links (FR16) | Inside Markdown files | Leading-slash relative links resolved by Starlight against `base` |
| Base-path handling | `astro.config.mjs` (`site` + `base`) | Read by Starlight link helpers and asset URLs automatically |
| Content pipeline | Off-repo (LLM drafts) → Git PR → CI → Pages | Not an in-repo concern beyond the PR workflow |

### Integration Points

**Internal Communication:**
- **Authors ↔ Build:** Zod schema in `src/content/config.ts` validates every content file at build time. Build fails if frontmatter violates schema — CI blocks merge.
- **Config ↔ Content:** Sidebar entries in `astro.config.mjs` reference slugs that must exist under `src/content/docs/`. Mismatches surface as 404s during build verification.
- **Components ↔ Content:** MDX files may import components from `src/components/` via path aliases. Plain `.md` files cannot; upgrading a page from `.md` to `.mdx` is a deliberate authorial choice.

**External Integrations:**
- **None in v1.** No analytics, no comment system, no external content fetch, no CMS webhook, no API calls at build or runtime.
- **GitHub Pages** is the only external system touched — deploy target only.

**Data Flow:**
1. Author edits Markdown in `src/content/docs/` (locally or via GitHub web editor).
2. Author opens PR → CI runs `pnpm build` against the branch → build fails on schema/lint errors.
3. PR merged to `main` → `.github/workflows/deploy.yml` triggers → builds `dist/` → uploads via `withastro/action@v3`.
4. GitHub Pages serves `dist/` from the repo's Pages endpoint.
5. Reader loads a page → static HTML served → Pagefind search index loaded on demand → interactive islands (if any) hydrate progressively.

### File Organization Patterns

**Configuration Files:**
- Root level: all project-wide config (`astro.config.mjs`, `tsconfig.json`, `package.json`, `.nvmrc`, `.gitignore`, `.editorconfig`).
- No nested config under `src/`.
- GitHub-specific config under `.github/`.
- BMAD methodology files strictly under `_bmad/` and `_bmad-output/`.

**Source Organization:**
- `src/content/` — authored content and its schema. The center of the product.
- `src/components/` — shared presentational components (`.astro`).
- `src/components/islands/` — interactive framework components (empty in v1).
- `src/assets/` — optimized images, imported into content.
- `src/styles/` — custom CSS, only if Starlight defaults insufficient (empty in v1).

**Test Organization:**
- No dedicated test directory in v1. The "test" is the build: if `pnpm build` succeeds, the schema passed and all referenced slugs resolve.
- Future: if content-integrity tests are added, `tests/` at root with Vitest.

**Asset Organization:**
- Optimized content images: `src/assets/<phase>/<descriptive-name>.png` (kebab-case, grouped by phase).
- Raw static files (favicon, robots.txt, future PDFs): `public/`.
- Diagrams authored in Mermaid: inline Markdown fenced code blocks — no file.

### Development Workflow Integration

**Development Server Structure:**
- `pnpm dev` starts Astro dev server with hot-reload on any change to `src/` or `astro.config.mjs`.
- Dev URL: `http://localhost:4321/<base>/` (matches production base-path behavior).

**Build Process Structure:**
- `pnpm build` runs Astro production build → validates all content collections → generates static HTML/CSS/JS under `dist/` → generates Pagefind search index.
- Build output is deterministic: same inputs → same outputs. Safe to run repeatedly in CI.

**Deployment Structure:**
- `.github/workflows/deploy.yml` runs on push to `main`:
  1. Checkout repo
  2. Setup pnpm + Node (from `.nvmrc`)
  3. `pnpm install --frozen-lockfile`
  4. `pnpm build`
  5. `withastro/action@v3` publishes `dist/` to GitHub Pages
- No separate staging environment in v1. Every merge is a production deploy.

## Architecture Validation Results

### Coherence Validation ✅

**Decision Compatibility:**
All technology choices compose cleanly — Astro Starlight, pnpm, TypeScript strict, `withastro/action@v3`, and GitHub Pages are officially tested together. The islands-first interactivity policy (step 4, C1–C4) aligns with the revised NFR4 (static-first, JS permitted for enhancements). Zod content collections are Astro-native. Pagefind is Starlight-native. No version or behavior conflicts.

**Pattern Consistency:**
Step-5 patterns (frontmatter schema, heading template, slug rules, link conventions, component placement, islands gating) all reinforce step-4 decisions. Naming conventions match Astro/TypeScript idioms. Sidebar-as-SSoT in step 4 is enforced by the `astro.config.mjs` pattern in step 5 and the file layout in step 6.

**Structure Alignment:**
The step-6 directory tree exactly supports the step-4 decisions: 43 content files under `src/content/docs/` (matching FR18, PRD count), `src/content/config.ts` holding the Zod schemas, `src/components/islands/` reserved for escalated interactivity (NFR4 revised), `.github/workflows/deploy.yml` wiring the CI/CD decisions (D1–D2). Boundaries (content vs. code, config vs. content, source vs. build, deploy) are explicit and non-overlapping.

### Requirements Coverage Validation ✅

**Functional Requirements Coverage (26/26):**

| FR category | Covered by |
|---|---|
| FR1–FR5 (Navigation) | Starlight sidebar/prev-next/breadcrumb/mobile-menu + explicit `astro.config.mjs` sidebar |
| FR6 (Search) | Pagefind (Starlight built-in) |
| FR7 (Phase ordering) | Explicit sidebar array in `astro.config.mjs` |
| FR8 (Landing page) | `src/content/docs/index.mdx` |
| FR9 (Phase overviews) | `<phase>/index.md` per phase |
| FR10–FR13 (4 content sections) | Markdown H2 template pinned in step 5 |
| FR14 (Template consistency) | Frontmatter via Zod + headings via authoring convention (v1); remark-lint upgrade path documented for v2 |
| FR15 (Stand-alone pages) | Authoring convention |
| FR16 (Cross-phase links) | Relative leading-slash links resolved against `base` |
| FR17 (Visual hierarchy) | Starlight template differentiates phase index vs. sub-section |
| FR18 (35 sub-section pages) | File layout in step 6 |
| FR19 (Sibling navigation) | Sidebar-order-driven prev/next within phase group |
| FR20 (Dark/light toggle) | Starlight default |
| FR21–FR22 (Responsive, no h-scroll) | Starlight default |
| FR23 (Markdown authoring) | `src/content/docs/` tree |
| FR24 (Sidebar via config) | `astro.config.mjs` |
| FR25 (Local preview) | `pnpm dev` |
| FR26 (One-command deploy) | GitHub Actions auto-deploy on push to `main` |

**Non-Functional Requirements Coverage (9/9):**

| NFR | Covered by |
|---|---|
| NFR1 (clean-clone build) | `package.json` + `pnpm-lock.yaml`; `pnpm install && pnpm build` |
| NFR2 (<60s build) | Astro/Vite pipeline; CI log monitoring |
| NFR3 (1-command or auto deploy) | `.github/workflows/deploy.yml` + `withastro/action@v3` |
| NFR4 (static-first + JS-permitted interactivity) | Astro SSG + islands architecture + `src/components/islands/` |
| NFR5 (320–2560px responsive) | Starlight default |
| NFR6 (dark/light contrast) | Starlight default + content-review verification |
| NFR7 (new page = Markdown + config entry) | File layout + sidebar config |
| NFR8 (plain Markdown/MDX) | No proprietary extensions used |
| NFR9 (zero runtime dependencies) | Static build artifact; no server code exists |

### Implementation Readiness Validation ✅

**Decision Completeness:**
All critical decisions documented with specific versions and locations. Starter init command pinned (`pnpm create astro@latest -- --template starlight --typescript strict`). The step-4 "Implementation Sequence" enumerates 10 concrete scaffolding steps in order.

**Structure Completeness:**
Directory tree is explicit and complete. All 43 content files listed by name with slugs matching step-5 slug rules. Root config files enumerated. CI workflow location specified.

**Pattern Completeness:**
All identified conflict points addressed: frontmatter (Zod), headings (template + authoring convention), slugs (kebab-case + immutability), internal links (relative + base-path safe), component placement (`.astro` vs. `islands/`), asset placement (`src/assets/` vs. `public/`), imports (path aliases), Git/branch/commit conventions.

### Gap Analysis Results

**Critical gaps:** None. Implementation can begin.

**Important gaps (addressed, with mitigation):**
- **FR14 heading template enforcement is convention-only in v1** — no build-time lint. Mitigated by Zod-schema frontmatter, PR review discipline, and a documented remark-lint upgrade path if drift is observed post-v1.
- **Broken-link checking (FR16 rot) is manual in v1** — no build-time check. Mitigated by immutable-slug policy, PR review, and a deferred `astro-broken-link-checker` integration as a post-v1 option.

**Nice-to-have gaps (explicitly deferred, acceptable for v1):**
- Branded 404 page — Starlight default used
- OpenGraph / social-card images
- Formal WCAG audit
- PR preview deploys
- Analytics
- `pnpm astro check` as a dedicated CI step separate from `pnpm build`

**Implementation-time blocker (resolved 2026-04-20):**
- Previously flagged: `site` and `base` values in `astro.config.mjs` could not be filled in until the exact GitHub repo name was chosen.
- **Resolved:** Repo is `FerdiNebi/software-engineering-with-ai` (confirmed from git remote). `site: 'https://ferdinebi.github.io'`, `base: '/software-engineering-with-ai/'`. No outstanding blockers.

### Validation Issues Addressed

None requiring architectural changes. Two known soft-spots (FR14 lint deferral, link-check deferral) documented as accepted risks with clear post-v1 upgrade paths.

### Architecture Completeness Checklist

**✅ Requirements Analysis**
- [x] Project context thoroughly analyzed (PRD, brief, distillate)
- [x] Scale and complexity assessed (43 pages, Low complexity)
- [x] Technical constraints identified (GitHub Pages, revised NFR4, no backend)
- [x] Cross-cutting concerns mapped (template, sidebar SSoT, base path, links, interactivity)

**✅ Architectural Decisions**
- [x] Critical decisions documented with versions (Astro Starlight, TS strict, Node 20 LTS, pnpm, `withastro/action@v3`)
- [x] Technology stack fully specified
- [x] Integration patterns defined (build-time Zod contract; CI/CD via GitHub Actions)
- [x] Performance considerations addressed (static build, Vite pipeline, Pagefind)

**✅ Implementation Patterns**
- [x] Naming conventions established (slugs, frontmatter fields, components, files)
- [x] Structure patterns defined (`src/content/docs/` layout, component placement)
- [x] Communication patterns specified (authors↔build via Zod; config↔content via sidebar)
- [x] Process patterns documented (Git flow, commit convention, CI gate)

**✅ Project Structure**
- [x] Complete directory structure defined (all 43 content files + full tree)
- [x] Component boundaries established (.astro vs. islands; content vs. code)
- [x] Integration points mapped (internal and external)
- [x] Requirements-to-structure mapping complete

### Architecture Readiness Assessment

**Overall Status:** READY FOR IMPLEMENTATION

**Confidence Level:** High

**Key Strengths:**
- Perfect alignment between the revised NFR4 and Astro's islands architecture — the architecture *wants* to do exactly what the product needs.
- Content-collection Zod schema turns the most common drift risk (frontmatter shape) into a build-time failure.
- Low architectural surface area: single static build artifact, no runtime services, no auth, no data layer. Very few places for things to go wrong.
- Starter template provides ~90% of v1 functionality; remaining work is mostly content authoring, not code.
- Explicit sidebar-as-SSoT prevents navigation drift.
- Immutable-slug policy protects cross-phase links (FR16).

**Areas for Future Enhancement:**
- Build-time enforcement of the 4-section heading template (remark-lint plugin) — upgrade from convention to guardrail.
- Build-time broken-link check (`astro-broken-link-checker` or equivalent).
- Formal accessibility audit + branded 404 + OpenGraph images before a public launch push.
- PR preview deploys if content-review throughput becomes a bottleneck.
- `pnpm astro check` as a separate CI step for earlier TypeScript/content-schema error surfacing.
- Analytics (only if organic-discovery signal becomes important and a privacy-respecting option is chosen).

### Implementation Handoff

**AI Agent Guidelines:**
- Follow all architectural decisions exactly as documented in this file.
- Use implementation patterns from the "Implementation Patterns & Consistency Rules" section for every authoring and coding task.
- Respect project structure and boundaries from the "Project Structure & Boundaries" section.
- Refer to this document first for any architectural question before improvising.
- When a decision is genuinely not documented, flag it for the author rather than making an ad-hoc choice.

**First Implementation Priority:**

```bash
pnpm create astro@latest -- --template starlight --typescript strict
```

Then the 10-step implementation sequence from the "Core Architectural Decisions → Decision Impact Analysis" section:

1. Scaffold with the command above
2. Configure `site` and `base` in `astro.config.mjs` for GitHub Pages
3. Define content collection schemas (phase-overview + sub-section) in `src/content/config.ts`
4. Create 43 empty content files matching the file-layout convention
5. Define explicit sidebar in `astro.config.mjs` pointing at all 43 pages
6. Add `@astrojs/sitemap` integration
7. Add `.github/workflows/deploy.yml` using `withastro/action@v3`
8. Pin Node (`.nvmrc`) and pnpm (`packageManager` in `package.json`)
9. Verify initial build + deploy to GitHub Pages
10. Begin content authoring per the 4-section template
