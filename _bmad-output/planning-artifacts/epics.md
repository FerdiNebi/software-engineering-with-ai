---
stepsCompleted: ["step-01-validate-prerequisites", "step-02-design-epics", "step-03-create-stories", "step-04-final-validation"]
status: "ready-for-implementation"
completedAt: "2026-04-24"
inputDocuments:
  - "_bmad-output/planning-artifacts/prd.md"
  - "_bmad-output/planning-artifacts/architecture.md"
  - "_bmad-output/planning-artifacts/ux-design-specification.md"
  - "_bmad-output/implementation-artifacts/spec-site-scaffold.md"
  - "_bmad-output/implementation-artifacts/deferred-work.md"
---

# Software Development with AI - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for *End-to-End Software Engineering with AI*, decomposing the requirements from the PRD, UX Design Specification, and Architecture Decision Document into implementable stories.

**Current state (2026-04-24):** The Astro Starlight walking skeleton is live (see `spec-site-scaffold.md`, status: `done`). 43 empty page stubs exist with the frontmatter schema and 4-H2 template in place. Deploy pipeline (`withastro/action@v3`) is wired to both `main` and `master` with a PR build gate. Explicit sidebar in `astro.config.mjs` matches all 43 slugs. Primary remaining work is **content authoring** (the v1 MVP) plus a small set of custom components and pre-launch hygiene.

## Revision Log

- **2026-05-06 — Epics 10/11/12 added** for the Delivery phase restructure (replaces 7-phase model with 6-phase Delivery-unified model, adds 3-level nesting under Delivery and a new Project Management sub-section). Tracked in `sprint-status.yaml`. Page count rose from 43 → 52.
- **2026-05-07 — Epic 13 added** for post-launch feedback-driven coverage extensions (driven by `Feedback.md` technical-research review). 10 stories: critical drift fixes left from the 2026-05-06 restructure; Discovery FR/NFR wording sweep; 6 new sub-section pages (Delivery Mobilization & Kickoff under PM, Data Migration & Cutover under Deployment / Launch, Hypercare & Warranty + Engagement Closeout under Maintenance, Accessibility Testing under QA, Legal Stack under Pre-Sales); 1 polish story (estimation cross-links + Glossary + Deliverables index reference pages); 1 planning-artifact-update story. Page count rose from 52 → 60. Tracked in `sprint-status.yaml`. Stories are recorded in `sprint-status.yaml` rather than as individual story files (matches the Epic 10/11/12 pattern). Total stories across the project: 73 → 83. Total epics: 12 → 13.

## Requirements Inventory

### Functional Requirements

**Site Navigation**
- FR1: Readers can navigate to any SDLC phase via a persistent sidebar menu
- FR2: Readers can expand any phase to view and access its sub-sections
- FR3: Readers can navigate to the next or previous phase sequentially from any phase page
- FR4: Readers can see their current location within the site structure at all times
- FR5: Readers can access the sidebar navigation on mobile devices via a collapsible menu

**Content Discovery**
- FR6: Readers can search across all site content using built-in search
- FR7: Readers can identify all phases and their order from the sidebar without clicking into any page
- FR8: Readers can access a landing/home page that explains the site's purpose and structure

**Phase Content**
- FR9: Readers can view a phase overview page that explains the full phase before drilling into sub-sections
- FR10: Readers can view a "What happens here" section on each page
- FR11: Readers can view a "Best practices" section with industry-researched standards
- FR12: Readers can view a "Desired outcomes" section listing deliverables, definition of done, and sign-off criteria
- FR13: Readers can view a "What the industry does" section explaining how leading agencies approach the topic
- FR14: Readers can view all four content sections in a consistent structure across every page

**Content Comprehension**
- FR15: Readers can understand each page independently without requiring sequential reading of prior phases
- FR16: Readers can follow contextual links between phases to understand cross-phase handoffs and dependencies
- FR17: Readers can distinguish between phase overview content and sub-section content through clear visual hierarchy

**Sub-Section Navigation**
- FR18: Readers can access dedicated content pages for all 35 sub-sections across all 7 phases
- FR19: Readers can navigate between sub-sections within a phase without returning to the phase overview

**Display & Appearance**
- FR20: Readers can toggle between light and dark mode
- FR21: Readers can view and read content on both desktop and mobile devices
- FR22: Readers can read content without horizontal scrolling on any supported device

**Content Management (Author)**
- FR23: Author can add or edit content by modifying Markdown/MDX files
- FR24: Author can modify the sidebar structure and ordering through framework configuration
- FR25: Author can preview the site locally before deploying
- FR26: Author can deploy the site to GitHub Pages with a single command

### NonFunctional Requirements

**Deployment & Build**
- NFR1: Site builds successfully from a clean clone with `pnpm install && pnpm build` — no additional setup steps
- NFR2: Full site build completes in under 60 seconds
- NFR3: Deployment to GitHub Pages achievable via single command or automatic GitHub Actions trigger on push to main

**Content Rendering**
- NFR4: Content is pre-rendered as static HTML at build time — no runtime SSR, no request-time APIs, no CMS. JavaScript permitted for UI features (search, theme, mobile menu) and interactive content enhancements (dynamic diagrams, explainers, embedded examples). Core page text must remain readable when interactive components fail; JS-only feature parity not required.
- NFR5: Content is readable and navigable on viewports from 320px (mobile) to 2560px (ultrawide) without horizontal scrolling
- NFR6: Dark mode and light mode both render all content legibly with sufficient contrast

**Maintainability**
- NFR7: Adding a new phase or sub-section requires only creating a Markdown file and updating Starlight sidebar configuration — no code changes
- NFR8: Content files are plain Markdown/MDX with no proprietary format or tooling dependency beyond Astro Starlight
- NFR9: Zero runtime dependencies — all content is pre-built at compile time

### Additional Requirements

Technical / infrastructure requirements surfaced by Architecture that drive implementation stories:

**Starter template (already executed; see `spec-site-scaffold.md`):**
- Astro Starlight scaffolded via `pnpm create astro@latest -- --template starlight --typescript strict` (adapted — manual scaffold due to non-empty repo, see `spec-site-scaffold.md` Spec Change Log)
- Base path pinned: `site: 'https://ferdinebi.github.io'`, `base: '/software-engineering-with-ai/'`
- Node pinned to 22 (active LTS) via `.nvmrc`; pnpm pinned via `packageManager` in `package.json` (currently `pnpm@10.33.2`)

**Content-collection contract:**
- Zod schema at `src/content.config.ts` extending Starlight `docsSchema` with `type`, `phase`, `order`, `status` (currently `.optional()` to accommodate splash home — tightening tracked in `deferred-work.md`)
- Pinned frontmatter fields: `title`, `description`, `type` (`phase-overview` | `sub-section`), `phase` (7 kebab slugs), `order`, `lastUpdated`, optional `status`
- Dates use ISO-8601 (`YYYY-MM-DD`)

**Authoring conventions:**
- Every content page contains exactly these four H2 headings, in this order, with these exact strings: `What happens here`, `Best practices`, `Desired outcomes`, `What the industry does`
- No H1 in body (Starlight renders from frontmatter)
- v2 adds a fifth H2 `AI-assisted workflow` — the only sanctioned template extension
- Practitioner voice: second person ("you"); declarative statements, no hedging; agency/consulting frame, never generic SDLC
- Internal links use leading-slash paths (`/discovery/requirements-workshops/`); never hardcode production URL; never use `./foo.md`
- Cross-phase links are inline in prose — not in sidebars, carousels, or footer blocks
- Every phase overview includes at least one forward and one backward cross-phase link in prose; every sub-section includes a cross-phase link where a genuine handoff exists

**Sidebar SSoT:**
- Explicit sidebar array in `astro.config.mjs` — not filesystem-autogenerated
- Slug-to-file match verified at 43/43
- Slugs are **immutable** once deployed; renames require a redirect entry

**CI / deploy:**
- `.github/workflows/deploy.yml` uses `withastro/action@v3` + `actions/deploy-pages@v4`
- Triggers on push to both `main` and `master` (repo's default is `master`); PRs build but skip deploy
- Pages "Source: GitHub Actions" toggle: manual repo-settings action (deferred, see `deferred-work.md`)

**Phase slug registry (fixed, 7 entries):**
1. `pre-sales`
2. `discovery`
3. `requirements-design`
4. `development`
5. `qa-testing`
6. `deployment-launch`
7. `maintenance-retainer`

**v2 forward-compatibility:**
- Each page architecture must accommodate a 5th `AI-assisted workflow` H2 section in v2 without template churn
- Interactive-component (island) layer reserved at `src/components/islands/` — empty in v1
- `<AIWorkflowSection>` component deferred to v2

**Carried from `deferred-work.md` (touch during or after related stories):**
- GitHub Pages "Source: GitHub Actions" toggle — manual user action before first workflow deploy
- LICENSE file (MIT suggested) — gate for public v1 launch
- Post-deploy live verification — 404 at base path, dark-mode legibility, Pagefind works, sidebar links resolve with base path
- Tighten content-collection schema — promote `type`, `phase`, `order` from `.optional()` to required-for-non-home via `z.discriminatedUnion` or `superRefine`
- Build-time 4-H2 heading template lint (remark-lint) — post-v1 upgrade
- Build-time broken-link check (`astro-broken-link-checker` or equivalent) — post-v1

### UX Design Requirements

**Home page & first-impression**
- UX-DR1: Replace Starlight's default `splash` hero on the home page with a custom `<PhaseList>` component — a numbered, linkable list of the 7 phases as `<ol>` with semantic `<a>` wrapping each item. Rationale: the sidebar is the product; the home page must make the 7-phase lifecycle immediately scannable even for users who haven't registered the sidebar. (Currently: scaffold removed the splash template to show the sidebar — `<PhaseList>` not yet implemented.)
- UX-DR2: Home page includes a concise framing paragraph (no "Welcome to your journey" marketing copy) plus the `<PhaseList>`. No hero imagery, no CTAs, no feature grids.

**Sidebar structural customization**
- UX-DR3: Sidebar renders phase labels with number prefixes: `1. Pre-Sales & Business Development`, `2. Discovery`, …, `7. Maintenance & Retainer`. Sub-sections are NOT numbered. Single sidebar customization per UX spec step 9 D1.
- UX-DR4: Current phase group auto-expanded; other phases collapsed by default on desktop (Starlight default behavior — verify).

**Visual theme**
- UX-DR5: Override Starlight's default accent color with a single muted, practitioner-grade hue (proposed: `#3b5a6f` light / `#8ab4c8` dark — author may swap pre-launch). All other `--sl-color-*` tokens remain Starlight defaults. No secondary palette, no custom warning/success/error colors beyond Starlight's `Aside` defaults. Delivered via `customCss` in `astro.config.mjs` or minimal `src/styles/theme.css`.
- UX-DR6: No custom webfont. Starlight's default system-font stack retained.

**Content components (opt-in / gap-fill)**
- UX-DR7: `<OutcomeChecklist>` component — visual-anchor wrapper for the *Desired outcomes* section. Renders a scannable `<ul role="list">` of outcome statements with visual weight that signals "this is what 'done' looks like." Compact (sub-section) and expanded (phase overview) variants. **Phase 1 (v1) — only if plain Markdown `<ul>` tests as insufficiently scannable during first content review.**
- UX-DR8: `<PhaseHandoff>` component — bottom-of-page block on each phase overview showing the previous and next phase with a one-line "what's handed off" summary. `<nav aria-label="Phase handoff">` landmark. First-phase (no prev) and last-phase (no next) variants. **Phase 2 — only if inline prose cross-phase links test as insufficient.**
- UX-DR9: `<PhaseBadge>` component — small label near breadcrumb or page title showing `Phase 3: Requirements & Design`. Derived from frontmatter `phase` slug. **Phase 2 — only if breadcrumb alone tests as insufficient for orientation.**

**Diagram rendering**
- UX-DR10: Mermaid diagram rendering (flowchart, sequence, state) via a community Starlight/remark Mermaid plugin, rendered as SVG at build time. Used for lifecycle handoff visuals in v1 phase overviews (e.g. the 3 journey flowcharts already in the UX spec). Generated SVG annotated with `<title>` / `<desc>` where feasible. **v1-or-v2 scope decision: defer unless a phase overview story genuinely needs a diagram.**

**Callouts & content patterns**
- UX-DR11: Starlight `<Aside>` callout conventions — `note` (neutral deliverable/outcome anchor, "see also"), `tip` (best-practice pull-out within `## Best practices`), `caution` (common mistake / anti-pattern within `## Best practices`), `danger` (hard prohibition, reserved for "this will lose you the client"). No custom callout types.
- UX-DR12: Link patterns — internal links underlined with accent color, visible focus ring, no icon. External links (rare) same styling plus Starlight's default external-link indicator. Descriptive link text only — never "click here."

**Search**
- UX-DR13: Pagefind search result preview shows page title + first-line snippet from `## What happens here`. Accessed via command palette (`/` or `Cmd+K`/`Ctrl+K`) on desktop; search icon on mobile. Starlight defaults retained.

**Responsive layout**
- UX-DR14: Desktop (≥1024px) — three-column shell: left sidebar (~18rem fixed) + content column (max-width ~48rem / ~75ch) + right in-page TOC (~14rem). Content column does NOT grow past ~75ch even at 2560px; extra horizontal space appears as letterboxing.
- UX-DR15: Tablet (768–1023px) — sidebar collapsible via toggle; in-page TOC Starlight-default (inline-or-rail).
- UX-DR16: Mobile (320–767px) — single column; sidebar behind hamburger; in-page TOC collapsible at top; breadcrumb may drop "Home" segment on narrow viewports.
- UX-DR17: No custom breakpoints in v1; use Starlight defaults (0–767 / 768–1023 / 1024+).

**Accessibility**
- UX-DR18: WCAG 2.2 Level AA compliance across both themes, both input modalities, both primary device classes. AA (not AAA) per UX spec rationale.
- UX-DR19: Body text meets or exceeds 7:1 (AAA) in both themes; interactive/UI elements meet ≥4.5:1 (AA).
- UX-DR20: All interactive elements keyboard-operable with visible focus rings; skip-to-content link present (Starlight default).
- UX-DR21: Touch targets ≥44×44 CSS pixels on mobile for all interactive elements.
- UX-DR22: `<html lang="en">` set via Astro config.
- UX-DR23: `prefers-reduced-motion` honored (Starlight default; no custom animation added in v1 that would require explicit handling).
- UX-DR24: Mermaid diagrams (if added) include visible or screen-reader-accessible text alternative.

**Pre-launch manual testing**
- UX-DR25: Keyboard-only navigation walkthrough of home + one phase overview + one sub-section. All interactive elements reachable in logical order.
- UX-DR26: VoiceOver (macOS) smoke test on same three pages. Headings announced correctly; sidebar landmarks sensible; cross-phase links descriptive.
- UX-DR27: Both themes eyeballed for contrast on desktop and mobile.
- UX-DR28: Mobile device test — one iOS, one Android. Sidebar drawer, search, theme toggle thumb-operable.
- UX-DR29: Responsive test across 320 / 375 / 768 / 1024 / 1440 / 2560 px in devtools. No horizontal scroll at any width.

**Forbidden patterns (design guardrails — stories must not reintroduce)**
- No marketing hero, newsletter gates, "join the community" banners
- No AI chat widget or floating "ask me" bubble
- No gamified progress indicators (page-count, streaks, badges)
- No stock illustrations, 3D characters, gradient backgrounds
- No accordions or reveals for the main 4 H2 sections — template visibility is the scaffold
- No "related articles" carousels
- No autoplay animations or scroll-triggered reveals beyond framework defaults

### FR Coverage Map

**Already satisfied by scaffold** (`spec-site-scaffold.md`, status: `done`):

- FR1–FR5 (navigation stack) — Starlight defaults + explicit sidebar in `astro.config.mjs`
- FR6 (search) — Pagefind (Starlight built-in)
- FR19 (sibling sub-section nav) — Starlight prev/next from sidebar order
- FR20 (dark/light toggle) — Starlight default
- FR21 (desktop + mobile) — Starlight default
- FR22 (no horizontal scroll) — Starlight default (validated further in Epic 9)
- FR23 (Markdown authoring) — `src/content/docs/` tree
- FR24 (sidebar via config) — explicit array in `astro.config.mjs`
- FR25 (local preview) — `pnpm dev`
- FR26 (one-command deploy) — `.github/workflows/deploy.yml` + `withastro/action@v3`
- NFR1 (clean-clone build) — `package.json` + `pnpm-lock.yaml`
- NFR2 (<60s build) — Vite pipeline; actual ~6s
- NFR3 (auto-deploy on push to main/master) — GitHub Actions workflow
- NFR4 (static-first, JS for enhancements) — Astro SSG + islands policy
- NFR7 (new page = Markdown + config entry) — file layout + sidebar config
- NFR8 (plain Markdown/MDX, no proprietary format) — authored as-is
- NFR9 (zero runtime dependencies) — static build artifact

**Net-new in this epic set:**

| FR / NFR | Epic | How it's delivered |
|---|---|---|
| FR7 (phase ordering visible in sidebar) | Epic 1 | Sidebar phase labels get `1.`–`7.` number prefix (UX-DR3) |
| FR8 (landing/home page) | Epic 1 | `<PhaseList>` home component + framing paragraph (UX-DR1, UX-DR2) |
| FR9 (phase overview pages) | Epics 2–8 | One overview story per epic |
| FR10 (*What happens here*) | Epics 2–8 | Section authored on every page |
| FR11 (*Best practices*) | Epics 2–8 | Section authored on every page |
| FR12 (*Desired outcomes*) | Epics 2–8 | Section authored on every page |
| FR13 (*What the industry does*) | Epics 2–8 | Section authored on every page |
| FR14 (4-section consistency across 43 pages) | Epics 1–8 + Epic 9 | Authored per page; reinforced by PR review; optional remark-lint deferred |
| FR15 (pages stand alone) | Epics 2–8 | Author discipline per sub-section; acceptance criterion on every story |
| FR16 (cross-phase links) | Epics 2–8 | Inline prose links — ≥1 forward + backward link per phase overview; per-handoff link on sub-sections where relevant |
| FR17 (phase overview vs. sub-section visual hierarchy) | Epic 1 + Epic 9 | Sidebar numbering + breadcrumb; `<PhaseBadge>` escalation if content review surfaces a gap |
| FR18 (35 sub-section pages) | Epics 2–8 | 4+5+4+9+5+4+4 = 35 sub-section stories |
| NFR5 (320–2560px responsive) | Epic 9 | Pre-launch manual breakpoint test (UX-DR29) |
| NFR6 (dark/light contrast) | Epic 9 | Pre-launch eyeball test on both themes with real content (UX-DR27) |

## Epic List

### Epic 1: Home-page Lifecycle Framing

**Goal:** A first-time visitor lands on the home page and, within 10 seconds, understands that the site maps the 7-phase agency consulting lifecycle and can identify which phase they want to enter. The sidebar is numbered, the home page leads with the phase list (not a splash hero), and the accent color is settled.

**User outcome:** Marcus/Priya/Ferdi on their first visit see the lifecycle as a map, not a menu, and pick a phase without cognitive friction.

**FRs covered:** FR7, FR8, FR17 (partial — phase vs. sub-section differentiation via breadcrumb + numbering)
**UX-DRs covered:** UX-DR1, UX-DR2, UX-DR3, UX-DR5, UX-DR6 (implicit — no webfont added)

**Implementation notes:**
- `<PhaseList>` is a zero-JS `.astro` component per UX spec (UX-DR1)
- Phase numbering in `astro.config.mjs` sidebar labels — one-line edit per phase
- Accent color override via `customCss` in `astro.config.mjs` or minimal `src/styles/theme.css`
- Unblocks content authoring — best to ship before 43 content pages, so content reviewers evaluate against the final framing

**Standalone:** Yes — does not require any content epic. Home page renders usefully even with all sub-pages as stubs.

### Epic 2: Pre-Sales & Business Development Content

**Goal:** A reader navigating Pre-Sales can learn how agency engagements begin — how to qualify leads, scope calls, write proposals, draft SOWs, and price engagements — before a single line of code is written. Priya (freelancer scaling up) uses this epic as her primary reference for the business side of client work.

**User outcome:** Pre-Sales phase overview + 4 sub-sections are complete, research-backed, practitioner-voiced, and cross-linked within and across phases (especially Discovery which Pre-Sales hands off to).

**FRs covered:** FR9, FR10, FR11, FR12, FR13, FR14, FR15, FR16, FR18 (partial — 4 sub-sections)

**Implementation notes:**
- 5 stories: Pre-Sales overview + Lead Qualification & Scoping Calls + Proposal Writing + SOW & Contract Drafting + Pricing & Estimation
- Each story writes all four H2 sections for one page; `lastUpdated` set on commit
- Cross-phase handoff links: Pre-Sales → Discovery (forward); Pre-Sales overview → Maintenance & Retainer (for repeat-client context)

**Standalone:** Yes — Priya's cherry-pick journey proves a completed Pre-Sales section has standalone value even if Discovery through Maintenance are still stubs.

### Epic 3: Discovery Content

**Goal:** A reader navigating Discovery can learn how agencies run stakeholder interviews, requirements workshops, prototyping, estimation, and deliverable sign-off. Marcus (new consulting engineer prepping for his first discovery workshop) uses this epic as his walkthrough.

**User outcome:** Discovery phase overview + 5 sub-sections are complete and cross-linked. Marcus can read any sub-section (e.g. Requirements Workshops) and understand what he's producing, what best practice looks like, and what sign-off looks like.

**FRs covered:** FR9, FR10, FR11, FR12, FR13, FR14, FR15, FR16, FR18 (partial — 5 sub-sections)

**Implementation notes:**
- 6 stories: Discovery overview + Stakeholder Interviews + Requirements Workshops + Prototyping & POC + Estimation & Cost Commitment + Discovery Deliverables & Sign-Off
- Cross-phase handoff links: Discovery → Requirements & Design (forward); Discovery → Pre-Sales (backward; e.g. scope locked in the SOW)

**Standalone:** Yes.

### Epic 4: Requirements & Design Content

**Goal:** A reader can learn how FR/NFR capture, UX/UI design, system architecture, and infrastructure design fit into agency delivery between discovery and implementation.

**User outcome:** Requirements & Design phase overview + 4 sub-sections complete and cross-linked.

**FRs covered:** FR9–FR16, FR18 (partial — 4 sub-sections)

**Implementation notes:**
- 5 stories: overview + Functional & Non-Functional Requirements + UX/UI Design + System Architecture + Infrastructure Design
- Cross-phase handoff links: → Development (forward); → Discovery (backward)

**Standalone:** Yes.

### Epic 5: Development Content

**Goal:** A reader can learn how agencies structure development work — repos, CI/CD, backend, frontend, developer testing, code review, secure development, performance engineering, and technical documentation. This epic is the largest and most likely to be referenced repeatedly during active engagements.

**User outcome:** Development phase overview + 9 sub-sections complete and cross-linked.

**FRs covered:** FR9–FR16, FR18 (partial — 9 sub-sections; largest share of FR18)

**Implementation notes:**
- 10 stories: overview + Repository Structure & Branching + DevOps & CI/CD + Backend Development + Frontend Development + Developer Testing + Code Review + Secure Development Practices + Performance Engineering + Technical Documentation
- Largest epic — may merit splitting mid-sprint into `5a` (overview + 4 subs) and `5b` (remaining 5 subs) if sprint cadence demands. For v1 planning, keep as one epic.
- Cross-phase handoff links: → QA / Testing (forward); → Requirements & Design (backward)
- The only epic where code-snippet discipline matters — DevOps and Repository Structure pages will include CLI blocks; Shiki syntax highlighting is Starlight default

**Standalone:** Yes — each sub-section stands alone and the epic delivers regardless of whether QA or later phases are written.

### Epic 6: QA / Testing Content

**Goal:** A reader can learn how agencies plan and execute QA — test strategy, functional/regression, performance, security, and UAT.

**User outcome:** QA / Testing phase overview + 5 sub-sections complete and cross-linked.

**FRs covered:** FR9–FR16, FR18 (partial — 5 sub-sections)

**Implementation notes:**
- 6 stories: overview + Test Strategy & Planning + Functional & Regression Testing + Performance Testing + Security Testing + User Acceptance Testing
- Cross-phase handoff links: → Deployment / Launch (forward); → Development (backward)

**Standalone:** Yes.

### Epic 7: Deployment / Launch Content

**Goal:** A reader can learn how agencies handle infrastructure provisioning, deployment, smoke testing, monitoring setup, and client handoff — the mechanics of going live.

**User outcome:** Deployment / Launch phase overview + 4 sub-sections complete and cross-linked.

**FRs covered:** FR9–FR16, FR18 (partial — 4 sub-sections)

**Implementation notes:**
- 5 stories: overview + Infrastructure Provisioning + Deployment Execution & Smoke Testing + Monitoring & Observability Setup + Client Handoff & Launch Checklist
- Cross-phase handoff links: → Maintenance & Retainer (forward); → QA / Testing (backward)

**Standalone:** Yes.

### Epic 8: Maintenance & Retainer Content

**Goal:** A reader can learn how agencies structure post-launch work — patch management, feature iteration, incident response, and retainer/SLA arrangements. Closes the lifecycle loop and hands back to Pre-Sales for repeat engagements.

**User outcome:** Maintenance & Retainer phase overview + 4 sub-sections complete and cross-linked.

**FRs covered:** FR9–FR16, FR18 (partial — 4 sub-sections; completes the 35-sub-section count)

**Implementation notes:**
- 5 stories: overview + Bug Fixes & Patch Management + Feature Iteration + Incident Response + Retainer Structure & SLAs
- Cross-phase handoff links: overview forward to Pre-Sales (the lifecycle loops); backward to Deployment / Launch

**Standalone:** Yes.

### Epic 9: v1 Launch Readiness

**Goal:** With all 43 pages written, the site is legally clean, accessibility-verified, and proven on a real first-deploy before being publicized.

**User outcome:** A first-time visitor at public launch encounters a polished, accessible, MIT-licensed reference with working 404, legible dark mode, working search, working base-path links, and no reintroduced marketing-hero / signup-gate / gamification anti-patterns.

**FRs covered:** FR14 (4-section consistency audit), FR17 (finalize overview-vs-subsection differentiation), FR22 (no-h-scroll audit)
**NFRs covered:** NFR5, NFR6
**UX-DRs covered:** UX-DR18–UX-DR29 (accessibility + pre-launch testing)
**Deferred-work items folded in:** LICENSE, schema tightening, post-deploy verification, Pages "Source: GitHub Actions" toggle documentation

**Implementation notes — stories:**
- Add MIT LICENSE file (gate for public launch per `deferred-work.md`)
- Tighten content-collection schema — promote `type`, `phase`, `order` from `.optional()` to required-for-non-home via `z.discriminatedUnion` or `superRefine`
- Pre-launch manual accessibility testing — keyboard walkthrough, VoiceOver smoke, both-theme contrast, iOS + Android device, breakpoint responsive test (UX-DR25–UX-DR29)
- Post-first-deploy live verification — 404 at base path, dark-mode legibility, Pagefind works, sidebar links resolve with base path (from `deferred-work.md`)
- Document GitHub Pages "Source: GitHub Actions" manual toggle (user action, not scriptable)
- **Gated gap-fill stories** (only added to this epic if content review surfaces need during Epics 2–8):
  - `<OutcomeChecklist>` component (if plain Markdown list tests as insufficiently scannable)
  - `<PhaseHandoff>` component (if inline prose cross-phase links test as insufficient)
  - `<PhaseBadge>` component (if breadcrumb alone tests as insufficient for orientation)
  - Mermaid plugin integration (if any phase overview author needs a diagram)

**Standalone:** Depends on Epics 2–8 being at least partially written (accessibility and dark-mode verification require real content to be meaningful). First-deploy verification is a one-shot "run it once after the first content ships" rather than a pre-requisite.

**Dependency note:** Epic 9 is the only epic with a soft dependency on prior epics — it audits and polishes what they produce. Schema tightening and LICENSE can ship any time; the testing/verification stories require content to audit.

---

## Shared Content-Story Acceptance-Criteria Pattern

Epics 2–8 each ship one story per content page. All of those stories inherit the following **shared structural acceptance criteria**. Individual story blocks below list only the **topic-specific acceptance criteria** that differ page-to-page. Build, schema, template, and voice criteria are not re-copied per story — they apply uniformly.

**Shared structural ACs (applied to every content-authoring story):**

- **Given** the page file at the pinned slug, **When** `pnpm build` runs, **Then** the Zod content-collection schema passes with no errors and the page is included in the built `dist/` output.
- **Given** the page's frontmatter, **When** inspected, **Then** it contains exactly the pinned fields (`title`, `description`, `type`, `phase`, `order`, `lastUpdated`, optional `status: 'v1'`) with the correct values for this phase and page role; `lastUpdated` is set to the authoring commit date in ISO-8601 format.
- **Given** the rendered page body, **When** inspected, **Then** it contains exactly four H2 headings in this order: `What happens here`, `Best practices`, `Desired outcomes`, `What the industry does`. No H1 appears in the Markdown body. No extra H2s.
- **Given** each H2 section, **When** read, **Then** the body under it is substantive prose (not a TODO line); no placeholder text remains.
- **Given** a reader opens the page cold, **When** they read it end-to-end, **Then** they can follow it without having read any prior phase page (FR15 — page stands alone).
- **Given** the page is a phase overview, **When** inspected, **Then** it contains at least one inline prose link forward to a neighbouring phase AND at least one backward link (or to a parent concept) per FR16; **And** when it is a sub-section, **Then** it contains at least one cross-phase inline prose link where a genuine delivery handoff exists (no manufactured links).
- **Given** any internal link on the page, **When** the site is built and deployed, **Then** the link resolves correctly under the configured `base` (`/software-engineering-with-ai/`) — achieved by using leading-slash paths, never hardcoded URLs, never `./foo.md`.
- **Given** the page voice, **When** read, **Then** it uses second person ("you"), declarative statements (no "typically," "usually," "depending on"), and the agency/consulting frame (never generic SDLC or product-company language).
- **Given** any forbidden design pattern (marketing hero, newsletter widget, progress badge, stock imagery, gamification, accordion around the 4 H2s, related-articles carousel), **When** PR reviewed, **Then** none appear on the page.

Any story may add **additional** ACs (for topic-specific deliverables, unique cross-links, or phase-handoff claims). It **may not** weaken or waive the shared ACs.

---

## Epic 1: Home-page Lifecycle Framing

_Goal repeated for inline read: A first-time visitor lands on the home page and, within 10 seconds, understands the 7-phase agency consulting lifecycle. Sidebar is numbered; home leads with a phase list (not splash hero); accent is settled._

### Story 1.1: Number the phase labels in the sidebar

As a first-time visitor,
I want the sidebar's 7 phases to be visibly ordered and numbered,
So that I read the sidebar as a lifecycle map, not as a flat menu.

**Acceptance Criteria:**

**Given** the sidebar config in `astro.config.mjs`, **When** inspected, **Then** each of the 7 phase group labels has a numeric prefix matching its lifecycle order: `1. Pre-Sales & Business Development`, `2. Discovery`, `3. Requirements & Design`, `4. Development`, `5. QA / Testing`, `6. Deployment / Launch`, `7. Maintenance & Retainer`.
**And** sub-section labels under each phase have NO number prefix (UX-DR3 — phases only).
**And** phase order in the config matches the PRD's declared lifecycle order.

**Given** the rendered sidebar on desktop and mobile, **When** inspected, **Then** the numeric prefix is visibly displayed as part of each phase label (not stripped by Starlight).
**And** the numbering survives both light and dark themes with no contrast regression.
**And** the current-phase highlight and collapse-expand behavior continues to work unchanged.

**Given** the build, **When** `pnpm build` runs, **Then** it succeeds with no sidebar-config errors and all 43 page routes resolve.

### Story 1.2: Replace the home page's default content with a `<PhaseList>` framing

As a first-time visitor on the home page,
I want an immediate, scannable list of the 7 lifecycle phases with a short framing paragraph,
So that I can pick a phase and enter the content without scanning marketing copy or hunting in the sidebar.

**Acceptance Criteria:**

**Given** a `<PhaseList>` component at `src/components/PhaseList.astro`, **When** inspected, **Then** it renders a semantic `<ol>` of 7 items, each containing an `<a>` wrapping the phase number + title + one-line description, linking to `/<phase-slug>/` (resolved against `base`).
**And** the component is a zero-JS `.astro` component (no hydration, no framework island) per UX-DR1 and the NFR4 policy.
**And** all 7 items are keyboard-tabbable in natural order with visible focus rings.

**Given** the home page `src/content/docs/index.mdx`, **When** inspected, **Then** it includes (a) a framing paragraph of ≤3 sentences explaining that the site maps the agency consulting delivery lifecycle and inviting the reader to pick a phase, (b) the `<PhaseList>` component, and (c) nothing else — no marketing hero, no CTA button beyond phase links, no feature grid, no stock imagery.
**And** the framing paragraph uses second-person practitioner voice per the authoring conventions.

**Given** the rendered home page, **When** loaded on desktop, **Then** the sidebar is visible (already true post-scaffold) AND the phase list is visible without scrolling at 1024px+ viewport height.
**And** on mobile, the phase list appears above the fold after the framing paragraph; sidebar remains one-tap away.

**Given** both light and dark themes, **When** toggled, **Then** the `<PhaseList>` inherits Starlight's `--sl-color-*` tokens and remains legible in both with no custom theme handling.

**Given** an accessibility audit of the home page, **When** run, **Then** headings are in order, the `<PhaseList>` announces as an ordered list to screen readers, every link has meaningful text, and color contrast on links meets ≥4.5:1.

### Story 1.3: Set a single muted accent color for the site

As a reader across any page,
I want the site's accent color to feel restrained and practitioner-grade,
So that links, current-page markers, and focus rings reinforce the reference-site aesthetic rather than a marketing feel.

**Acceptance Criteria:**

**Given** the accent color override, **When** inspected in `astro.config.mjs` (`customCss`) or `src/styles/theme.css`, **Then** exactly one accent value is defined for light mode and one for dark mode (UX-DR5 proposed defaults: `#3b5a6f` light, `#8ab4c8` dark — author may substitute equivalent muted slate-blue or neutral hue pre-merge).
**And** only the accent-related `--sl-color-*` tokens are overridden; all other Starlight palette tokens remain defaults.
**And** no secondary palette, no warning/success/error color extensions beyond Starlight's `<Aside>` defaults are introduced (UX-DR5).

**Given** both themes, **When** a content page is viewed, **Then** links, sidebar current-page marker, focus rings, and `<Aside type="tip">` border use the new accent value.
**And** body-text contrast remains ≥7:1 on both themes; link-text contrast ≥4.5:1 (UX-DR18–19).
**And** no gradients, drop shadows beyond Starlight defaults, or colored background blocks are introduced.

**Given** the build, **When** `pnpm build` runs, **Then** it succeeds with no CSS parse errors and the accent token renders on every route.

---

## Epic 2: Pre-Sales & Business Development Content

_Goal repeated: A reader navigating Pre-Sales can learn how agency engagements begin — lead qualification, proposals, SOW drafting, pricing — before code is written._

### Story 2.1: Pre-Sales phase overview

As a reader entering the Pre-Sales phase for the first time,
I want an overview page that explains what Pre-Sales is, what it produces, and how it hands off to Discovery,
So that I understand the full phase before drilling into specific sub-sections.

**Topic-specific Acceptance Criteria** (in addition to shared structural ACs):

**Given** the overview content, **When** read, **Then** `## What happens here` names the 4 sub-sections (Lead Qualification & Scoping Calls, Proposal Writing, SOW & Contract Drafting, Pricing & Estimation) and frames them as the sequence from first client contact to signed agreement.
**And** `## Desired outcomes` lists at least: a signed SOW, a pricing commitment, a client-countersigned proposal, and a defined handoff package to Discovery.
**And** `## What the industry does` contrasts at least two agency approaches (e.g. fixed-price vs. T&M, discovery-included-in-proposal vs. paid-discovery).
**And** the page includes a forward link to `/discovery/` and a backward/adjacent link either to `/maintenance-retainer/` (for repeat-client lifecycle loop) or another Pre-Sales sub-section.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/pre-sales/index.md` with frontmatter `type: phase-overview`, `phase: pre-sales`, `order: 1`.

### Story 2.2: Lead Qualification & Scoping Calls

As a consultant joining an agency who is about to take their first scoping call,
I want guidance on how to qualify a lead, what questions to ask on the call, and what "qualified" looks like,
So that I can distinguish serious prospects from time-wasters and produce the right inputs for a proposal.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it defines lead qualification as the gate between inbound interest and proposal work, and frames the scoping call as the primary qualification instrument.
**And** `## Best practices` names specific pre-call research tasks, call-structure frameworks (e.g. BANT, MEDDIC, or equivalent), and disqualification criteria.
**And** `## Desired outcomes` lists: a qualify/disqualify decision, a scoping summary ready to feed into proposal writing, and an agreed next step (proposal, paid discovery, or polite decline).
**And** `## What the industry does` contrasts at least two agency approaches (e.g. strict-gate vs. nurture-style qualification).
**And** the page includes an inline forward link to `/pre-sales/proposal-writing/` and a cross-phase link to `/discovery/` where discovery-led scoping is referenced.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/pre-sales/lead-qualification-scoping-calls.md` with frontmatter `type: sub-section`, `phase: pre-sales`, `order: 2`.

### Story 2.3: Proposal Writing

As a consultant preparing a proposal for a qualified lead,
I want to know what a professional agency proposal contains, how it's structured, and what makes one win or lose,
So that I can produce a proposal that wins the engagement and sets expectations correctly.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it defines the proposal as the artifact produced between scoping and SOW, and distinguishes proposal from SOW (proposal = sales document; SOW = contractual document).
**And** `## Best practices` names the standard proposal sections (executive summary, approach, deliverables, team, timeline, pricing, terms), structure/tone guidance, and anti-patterns.
**And** `## Desired outcomes` lists: a client-countersigned proposal (or feedback + revision loop), a shared understanding of scope, and a clear path to SOW.
**And** `## What the industry does` contrasts short-form vs. long-form proposal approaches or fixed-price vs. phased-pricing structures.
**And** the page links forward to `/pre-sales/sow-contract-drafting/` and backward to `/pre-sales/lead-qualification-scoping-calls/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/pre-sales/proposal-writing.md` with frontmatter `type: sub-section`, `phase: pre-sales`, `order: 3`.

### Story 2.4: SOW & Contract Drafting

As a consultant turning a signed proposal into a binding contract,
I want to know what a professional SOW includes, how scope is locked, and what protections both parties need,
So that the delivered engagement matches what was sold and disputes have pre-agreed resolution paths.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it defines the SOW as the contract artifact, distinguishes MSA from SOW, and names typical SOW sections (scope, deliverables, acceptance criteria, payment terms, change control, IP, warranties, termination).
**And** `## Best practices` names specific drafting conventions (explicit exclusions, named assumptions, documented change-control process, clear acceptance criteria per deliverable).
**And** `## Desired outcomes` lists: a signed SOW, documented scope boundaries, agreed change-control process, and the discovery-phase handoff package.
**And** `## What the industry does` contrasts fixed-scope, T&M, and hybrid SOW structures.
**And** the page links forward to `/pre-sales/pricing-estimation/` and cross-phase to `/discovery/estimation-cost-commitment/` where estimation feeds SOW pricing.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/pre-sales/sow-contract-drafting.md` with frontmatter `type: sub-section`, `phase: pre-sales`, `order: 4`.

### Story 2.5: Pricing & Estimation

As a consultant quoting a prospective engagement,
I want to understand agency pricing models, estimation techniques, and how to defend a price,
So that I can price engagements profitably without losing qualified prospects on sticker shock or over-committing.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it defines pricing as a pre-sales activity (separate from developer-side estimation) and names the primary pricing models (fixed, T&M, retainer, value-based, hybrid).
**And** `## Best practices` names specific estimation techniques applicable at pre-sales (analogy, three-point, ranged-estimate with confidence bands) and pricing levers (team composition, timeline compression, risk buffer).
**And** `## Desired outcomes` lists: a defensible price, a risk-adjusted timeline, documented assumptions, and inputs for the SOW pricing section.
**And** `## What the industry does` contrasts at least two approaches (e.g. high-margin boutique vs. high-volume shop; discovery-first vs. proposal-first pricing).
**And** the page links to `/discovery/estimation-cost-commitment/` for the post-discovery re-estimation loop and to `/pre-sales/sow-contract-drafting/` for how price lands in the SOW.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/pre-sales/pricing-estimation.md` with frontmatter `type: sub-section`, `phase: pre-sales`, `order: 5`.

---

## Epic 3: Discovery Content

_Goal repeated: A reader navigating Discovery learns to run stakeholder interviews, workshops, POCs, estimation, and sign-off._

### Story 3.1: Discovery phase overview

As a reader entering Discovery for the first time (often Marcus's scenario),
I want an overview page that explains what Discovery is, what it produces, and how it hands off to Requirements & Design,
So that I understand the full phase before prepping for my first client workshop.

**Topic-specific Acceptance Criteria:**

**Given** the overview content, **When** read, **Then** `## What happens here` names the 5 sub-sections (Stakeholder Interviews, Requirements Workshops, Prototyping & POC, Estimation & Cost Commitment, Discovery Deliverables & Sign-Off) and frames them as the sequence from signed SOW to handoff into implementation planning.
**And** `## Desired outcomes` lists: validated requirements, a sign-off document, a refined estimate that may or may not match Pre-Sales pricing, and a handoff package to Requirements & Design.
**And** `## What the industry does` contrasts paid-discovery vs. included-discovery models and time-boxed vs. open-ended approaches.
**And** the page includes a forward link to `/requirements-design/` and a backward link to `/pre-sales/sow-contract-drafting/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/discovery/index.md` with frontmatter `type: phase-overview`, `phase: discovery`, `order: 1`.

### Story 3.2: Stakeholder Interviews

As a consultant kicking off a discovery engagement,
I want to know how to identify, schedule, and conduct stakeholder interviews that produce usable input for requirements workshops,
So that I enter the workshop with context, not cold.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it defines the role of stakeholder interviews, who to interview (sponsor, end-users, integrators, detractors), and positioning relative to workshops.
**And** `## Best practices` names specific interview techniques (1:1 vs. small-group, open vs. structured, recording conventions) and how to neutralize dominant voices.
**And** `## Desired outcomes` lists: an interview synthesis, identified stakeholder concerns/constraints, a workshop agenda informed by interview themes, and documented rejected-directions.
**And** `## What the industry does` contrasts interview-heavy vs. workshop-heavy discovery styles.
**And** the page links forward to `/discovery/requirements-workshops/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/discovery/stakeholder-interviews.md` with frontmatter `type: sub-section`, `phase: discovery`, `order: 2`.

### Story 3.3: Requirements Workshops

As Marcus prepping for his first requirements workshop,
I want to know what happens in the room, how to facilitate it, and what to produce,
So that I walk in with an agenda and walk out with signed deliverables, not just notes.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it defines the workshop's purpose (convert interview themes + stakeholder input into concrete requirements), typical duration/format, and participants.
**And** `## Best practices` names specific facilitation techniques (pre-read 48h ahead, explicit agenda, documented decisions in-session, parking-lot for out-of-scope items) and anti-patterns.
**And** `## Desired outcomes` lists: documented functional and non-functional requirements, prioritized feature list, agreed scope exclusions, risks/assumptions log, and a signed workshop summary.
**And** `## What the industry does` contrasts single-workshop vs. series-of-workshops approaches and in-person vs. remote facilitation.
**And** the page links forward to `/discovery/prototyping-proof-of-concept/` or `/discovery/discovery-deliverables-signoff/` and cross-phase to `/requirements-design/functional-nonfunctional-requirements/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/discovery/requirements-workshops.md` with frontmatter `type: sub-section`, `phase: discovery`, `order: 3`.

### Story 3.4: Prototyping & Proof of Concept

As a consultant validating a risky requirement before committing to a delivery estimate,
I want to know when a prototype or POC is justified, how to scope it, and how to run it inside discovery,
So that I surface unknowns before they become fixed-price commitments.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it defines the purpose (de-risk a technical, UX, or integration assumption), distinguishes prototype (UX) from POC (technical feasibility), and positions the activity relative to estimation.
**And** `## Best practices` names specific techniques (time-box strictly, scope narrowly, write the question before building, throw-away posture, document findings).
**And** `## Desired outcomes` lists: documented findings (does-it-work / does-it-not / with-which-trade-offs), an updated risk register, and often a revised estimate input.
**And** `## What the industry does` contrasts time-boxed spike vs. full-fidelity prototype approaches.
**And** the page links forward to `/discovery/estimation-cost-commitment/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/discovery/prototyping-proof-of-concept.md` with frontmatter `type: sub-section`, `phase: discovery`, `order: 4`.

### Story 3.5: Estimation & Cost Commitment

As a consultant producing a discovery-phase estimate that will either confirm or revise the pre-sales price,
I want to know how to estimate at this stage, how to handle variance from the pre-sales number, and how to commit,
So that the estimate is defensible, the client is informed, and commitment is made with open eyes.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it defines discovery-phase estimation as distinct from pre-sales pricing, and explains the typical re-estimation outcomes (confirmed, raised, lowered, or scope-adjusted).
**And** `## Best practices` names specific techniques (bottom-up by task, reference-class forecasting, explicit range with confidence, sizing relative to prototype findings).
**And** `## Desired outcomes` lists: a refined estimate with confidence band, a reconciliation against pre-sales pricing, a commitment path (accept / renegotiate / pause), and the input for the Requirements & Design phase.
**And** `## What the industry does` contrasts agencies that re-price freely after discovery vs. those that hold the pre-sales price absolute.
**And** the page links back to `/pre-sales/pricing-estimation/` and forward to `/discovery/discovery-deliverables-signoff/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/discovery/estimation-cost-commitment.md` with frontmatter `type: sub-section`, `phase: discovery`, `order: 5`.

### Story 3.6: Discovery Deliverables & Sign-Off

As a consultant closing the discovery phase and handing off to Requirements & Design,
I want to know what deliverables constitute "done" for discovery and how to obtain formal sign-off,
So that the engagement transitions with a paper trail and both sides agree on what was produced.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it names the standard discovery deliverable set (requirements document, scope statement, estimate revision, risk register, decisions log, handoff package) and defines "sign-off" as the formal closure ritual.
**And** `## Best practices` names specific sign-off mechanics (named signatories, scope of sign-off, what sign-off does and does NOT waive, handling sign-off delays).
**And** `## Desired outcomes` lists: signed discovery deliverables, closed pending questions, documented open risks accepted by the client, and an invoice event.
**And** `## What the industry does` contrasts formal written sign-off vs. email-confirmation practices.
**And** the page links forward to `/requirements-design/` and cross-phase back to `/pre-sales/sow-contract-drafting/` for how the SOW's acceptance criteria constrain sign-off.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/discovery/discovery-deliverables-signoff.md` with frontmatter `type: sub-section`, `phase: discovery`, `order: 6`.

---

## Epic 4: Requirements & Design Content

_Goal repeated: A reader can learn how FR/NFR capture, UX/UI design, system architecture, and infrastructure design fit between discovery and implementation._

### Story 4.1: Requirements & Design phase overview

As a reader entering Requirements & Design,
I want an overview that explains how this phase converts discovery output into an implementable design,
So that I understand what to produce before engineers start coding.

**Topic-specific Acceptance Criteria:**

**Given** the overview, **When** read, **Then** `## What happens here` names the 4 sub-sections (Functional & Non-Functional Requirements, UX/UI Design, System Architecture, Infrastructure Design) and frames this phase as the bridge between discovery deliverables and development.
**And** `## Desired outcomes` lists: finalized FR/NFR set, UX deliverables ready for development, an architecture decision document, infrastructure plan, and a development-ready handoff.
**And** `## What the industry does` contrasts agencies that front-load design vs. those that design-as-they-build.
**And** the page links forward to `/development/` and backward to `/discovery/discovery-deliverables-signoff/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/requirements-design/index.md` with frontmatter `type: phase-overview`, `phase: requirements-design`, `order: 1`.

### Story 4.2: Functional & Non-Functional Requirements

As a consultant producing the formal requirements document for a client engagement,
I want guidance on how to structure, write, and review FRs and NFRs,
So that requirements are testable, unambiguous, and defensible as acceptance criteria.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it defines the distinction between FRs and NFRs and explains where they come from (discovery inputs) and where they go (dev plans, QA test strategy, sign-off criteria).
**And** `## Best practices` names specific writing conventions (atomic, testable, traceable, numbered, source-attributed) and review techniques.
**And** `## Desired outcomes` lists: a numbered FR/NFR list, cross-reference matrix to user journeys, agreed acceptance criteria per FR/NFR, and traceability through to test plans.
**And** `## What the industry does` contrasts ISO/IEEE-formal approaches vs. agile user-story styles.
**And** the page links to `/qa-testing/test-strategy-planning/` (traceability to testing) and back to `/discovery/requirements-workshops/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/requirements-design/functional-nonfunctional-requirements.md` with frontmatter `type: sub-section`, `phase: requirements-design`, `order: 2`.

### Story 4.3: UX/UI Design

As a consultant owning the UX/UI deliverables for an engagement,
I want to know what design artifacts to produce, how to review them with the client, and how to hand them off to development,
So that implementation matches design and design sign-off does not unravel during build.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it defines UX/UI as an Requirements-&-Design activity (not a Development activity) and names the standard artifact set (user flows, wireframes, mockups, interactive prototypes, design system tokens).
**And** `## Best practices` names specific design-review cadences, version-control conventions for design files, component-library handoff practices, and accessibility bake-in (WCAG considerations at design time, not as a QA afterthought).
**And** `## Desired outcomes` lists: signed-off design deliverables, a design system or component inventory, documented interaction patterns, and a dev-ready handoff (Figma/Sketch spec, asset exports, design tokens).
**And** `## What the industry does` contrasts full-fidelity-up-front vs. build-in-parallel-with-dev approaches.
**And** the page links forward to `/development/frontend-development/` and cross to `/qa-testing/user-acceptance-testing/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/requirements-design/ux-ui-design.md` with frontmatter `type: sub-section`, `phase: requirements-design`, `order: 3`.

### Story 4.4: System Architecture

As a technical lead producing the architecture decision document for the engagement,
I want guidance on what architecture deliverables look like at agency scale, how to involve the client, and how to keep the document usable through implementation,
So that architecture decisions are documented, defended, and traceable — not discovered during build.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it defines system architecture as the phase where NFRs and FRs are mapped to a technical design, and names the typical artifact (ADR-style decision document, component diagram, data-flow diagram, integration map).
**And** `## Best practices` names specific techniques (ADR format, decision-impact analysis, explicit risks/trade-offs, pattern-consistency rules, client review ritual).
**And** `## Desired outcomes` lists: a signed architecture decision document, approved technology stack, documented integration boundaries, identified risks with mitigations.
**And** `## What the industry does` contrasts heavy-UML vs. lightweight-ADR agency styles.
**And** the page links forward to `/requirements-design/infrastructure-design/` and cross to `/development/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/requirements-design/system-architecture.md` with frontmatter `type: sub-section`, `phase: requirements-design`, `order: 4`.

### Story 4.5: Infrastructure Design

As a technical lead planning the runtime/hosting/network design for a client engagement,
I want guidance on scoping, costing, and documenting the infrastructure plan,
So that Day 1 of development is not blocked by missing environments or unresolved hosting decisions.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it defines infrastructure design as distinct from DevOps execution (design = the plan; DevOps = the pipeline), and names the typical deliverables (environment map, hosting model, network diagram, cost estimate, secrets model, DR plan).
**And** `## Best practices` names specific techniques (infrastructure-as-code posture from day one, environment parity, cost-model transparency for client, secrets-and-credentials standards).
**And** `## Desired outcomes` lists: an approved infrastructure plan, a cost estimate aligned with pricing, environment provisioning kickoff, and a handoff to DevOps execution.
**And** `## What the industry does` contrasts client-hosted vs. agency-hosted vs. third-party-managed approaches.
**And** the page links forward to `/development/devops-ci-cd/` and cross to `/deployment-launch/infrastructure-provisioning/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/requirements-design/infrastructure-design.md` with frontmatter `type: sub-section`, `phase: requirements-design`, `order: 5`.

---

## Epic 5: Development Content

_Goal repeated: A reader can learn how agencies structure development work across repo, CI/CD, backend, frontend, testing, review, security, performance, and documentation._

### Story 5.1: Development phase overview

As a reader entering Development,
I want an overview that frames the 9 dev sub-sections as the agency's delivery mechanics and hands off to QA,
So that I understand what the phase covers before drilling into any one concern.

**Topic-specific Acceptance Criteria:**

**Given** the overview, **When** read, **Then** `## What happens here` names the 9 sub-sections and groups them (plumbing: Repo + DevOps; build: Backend + Frontend; quality-in-dev: Developer Testing + Code Review + Secure Development + Performance; lifecycle: Technical Documentation).
**And** `## Desired outcomes` lists: a completed build against the signed requirements, internal quality gates cleared, and a QA-ready handoff.
**And** `## What the industry does` contrasts feature-factory vs. high-craft agency approaches.
**And** the page links forward to `/qa-testing/` and backward to `/requirements-design/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/development/index.md` with frontmatter `type: phase-overview`, `phase: development`, `order: 1`.

### Story 5.2: Repository Structure & Branching Strategy

As a tech lead setting up the repo for a new engagement,
I want guidance on how agencies structure client repos, what branching strategy to adopt, and how to hand off source to the client at launch,
So that the repo is navigable, CI-friendly, and transferable.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it defines repo setup as a Day-0 activity (not retrofit) and names the standard decisions (monorepo vs. polyrepo, trunk-based vs. GitFlow, mainline protection rules, client-handoff vs. agency-internal repos).
**And** `## Best practices` names specific conventions (branch naming, commit message convention, protected branches, PR templates, code-owners, access model for client vs. agency contributors).
**And** `## Desired outcomes` lists: a live repo with working branch protections, documented branching strategy, a client-handoff-ready structure, and CI hooks present.
**And** `## What the industry does` contrasts trunk-based vs. GitFlow-style shops.
**And** the page includes a code fence showing an example branch-name or commit-message convention (Shiki highlighting).
**And** the page links forward to `/development/devops-ci-cd/` and cross to `/deployment-launch/client-handoff-launch-checklist/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/development/repository-structure-branching.md` with frontmatter `type: sub-section`, `phase: development`, `order: 2`.

### Story 5.3: DevOps & CI/CD

As a tech lead establishing the CI/CD pipeline for an engagement,
I want guidance on what a minimum viable pipeline looks like for agency work, how to split agency-owned vs. client-owned pipeline stages, and what gates to enforce,
So that delivery velocity is high and handoff at launch does not leave the client with a pipeline they cannot operate.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it defines DevOps as the execution of the infrastructure-design plan and the ongoing operation of CI/CD.
**And** `## Best practices` names specific pipeline stages (lint → test → build → deploy-dev → integration → deploy-staging → deploy-prod), secrets handling, client-accessibility of logs/credentials, and runbook conventions.
**And** `## Desired outcomes` lists: a green pipeline on first commit, environment promotion path, operational runbook, and client-operable deployment.
**And** `## What the industry does` contrasts heavyweight-tooling shops vs. "just GitHub Actions" shops.
**And** the page may include a fenced YAML snippet of a minimum-viable workflow (Shiki highlighting).
**And** the page links forward to `/development/backend-development/` and cross to `/deployment-launch/deployment-execution-smoke-testing/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/development/devops-ci-cd.md` with frontmatter `type: sub-section`, `phase: development`, `order: 3`.

### Story 5.4: Backend Development

As a backend engineer owning an agency delivery,
I want guidance on the agency-specific concerns of backend work — API contracts with frontend, data-model discipline under client scope changes, and logging/observability hooks that the client's ops team will use,
So that backend code is delivered in a shape that survives handoff.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it frames backend-in-agency as distinct from product-company backend (short-engagement scope, contract-first APIs, client-ownable code style) rather than generic backend coding advice.
**And** `## Best practices` names specific conventions (API versioning, contract tests with frontend, migration discipline, observability-as-deliverable).
**And** `## Desired outcomes` lists: deployable backend against signed FRs/NFRs, documented APIs for client or integration partners, and operational-readiness deliverables.
**And** `## What the industry does` contrasts monolith-first vs. microservice agency styles and contract-first vs. code-first API workflows.
**And** the page links forward to `/development/frontend-development/` or `/development/developer-testing/` and cross to `/requirements-design/system-architecture/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/development/backend-development.md` with frontmatter `type: sub-section`, `phase: development`, `order: 4`.

### Story 5.5: Frontend Development

As a frontend engineer delivering for an agency client,
I want guidance on the agency-specific concerns — implementing against signed UX/UI design, component-library discipline, and accessibility-bake-in at build time,
So that the delivered UI matches the signed design and accessibility is not a late-stage surprise.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it frames agency-frontend as implementing against a signed UX/UI deliverable and states the common handoff problems (design drift, accessibility gaps at QA, component-library bloat).
**And** `## Best practices` names specific conventions (component-library alignment, design-token consumption, a11y at commit-time, responsive testing in dev).
**And** `## Desired outcomes` lists: a deployed frontend matching signed design, a11y-verified at dev time, and a component inventory for client handoff.
**And** `## What the industry does` contrasts framework-prescriptive shops vs. framework-agnostic shops.
**And** the page links back to `/requirements-design/ux-ui-design/` and forward to `/development/developer-testing/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/development/frontend-development.md` with frontmatter `type: sub-section`, `phase: development`, `order: 5`.

### Story 5.6: Developer Testing

As an engineer writing tests during delivery,
I want guidance on what "developer testing" means in an agency context (unit/integration, not QA) and what coverage posture to take under fixed-scope pressure,
So that the delivery ships tested without over-investing where the client has not paid for rigor.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it distinguishes developer testing (unit + integration, owned by the engineer) from QA testing (system-level, owned by QA), and frames the "how much testing" question as a commercial one.
**And** `## Best practices` names specific conventions (test-the-contract, property-based for critical paths, avoiding over-mocking, commit-gate coverage threshold).
**And** `## Desired outcomes` lists: a passing test suite at merge, covered critical paths, documented test conventions for client handoff.
**And** `## What the industry does` contrasts TDD-strict shops vs. pragmatic agencies.
**And** the page links forward to `/development/code-review/` and cross to `/qa-testing/functional-regression-testing/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/development/developer-testing.md` with frontmatter `type: sub-section`, `phase: development`, `order: 6`.

### Story 5.7: Code Review

As an engineer participating in agency code review,
I want guidance on what to look for, how to review under delivery pressure, and how to run review across agency + client engineers,
So that review catches real issues without bottlenecking delivery.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it frames code review as both quality gate and knowledge-transfer mechanism, important for client-handoff scenarios.
**And** `## Best practices` names specific conventions (review checklist, size-the-PR-small, reviewer rotation, client-engineer-in-review for handoff engagements, comment etiquette).
**And** `## Desired outcomes` lists: reviewed-before-merge policy enforced, review comments resolved or deferred with rationale, documented review conventions.
**And** `## What the industry does` contrasts heavyweight-review vs. trust-based-review shops.
**And** the page links forward to `/development/secure-development-practices/` and cross to `/qa-testing/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/development/code-review.md` with frontmatter `type: sub-section`, `phase: development`, `order: 7`.

### Story 5.8: Secure Development Practices

As an engineer delivering for a client whose risk posture differs from a product company's,
I want guidance on secure-development practices sized for agency engagements — secrets management, dependency hygiene, and threat-model depth commensurate with the client's industry,
So that delivered code does not carry baked-in vulnerabilities into the client's estate.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it frames secure development as a shared-responsibility activity across the engagement, varying by client industry (fintech/health vs. marketing site).
**And** `## Best practices` names specific conventions (secrets scanning, SBOM, dep-update cadence, threat-model proportional to engagement size, OWASP-top-10 discipline).
**And** `## Desired outcomes` lists: no hardcoded secrets in repo, clean dep-audit, documented threat model for risky engagements, handoff-ready security posture.
**And** `## What the industry does` contrasts heavy-compliance shops vs. general-agency security practices.
**And** the page links forward to `/development/performance-engineering/` and cross to `/qa-testing/security-testing/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/development/secure-development-practices.md` with frontmatter `type: sub-section`, `phase: development`, `order: 8`.

### Story 5.9: Performance Engineering

As a tech lead concerned with performance during a fixed-scope engagement,
I want guidance on where to invest performance work, what baselines to establish, and when to defer,
So that performance meets the signed NFRs without runaway optimization.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it frames performance engineering as NFR-driven (not "make it fast"), and names typical techniques (baseline-before-optimize, profile-then-tune, budget-per-FR).
**And** `## Best practices` names specific conventions (performance budgets on NFRs, CI-level perf regression checks, load-testing in pre-launch, caching layers).
**And** `## Desired outcomes` lists: signed-off NFR performance numbers met, documented performance budgets, perf-regression detection in CI.
**And** `## What the industry does` contrasts perf-by-design vs. perf-as-fix-at-end styles.
**And** the page links forward to `/development/technical-documentation/` and cross to `/qa-testing/performance-testing/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/development/performance-engineering.md` with frontmatter `type: sub-section`, `phase: development`, `order: 9`.

### Story 5.10: Technical Documentation

As an engineer producing technical documentation as part of client handoff,
I want guidance on what to document, what to deliberately not document, and what format the client can actually use post-handoff,
So that documentation is a real handoff deliverable, not a retrospective exercise.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it frames technical documentation as a handoff deliverable (not an internal artifact) and lists the standard set (architecture reference, API reference, operational runbook, onboarding guide, known-issues log).
**And** `## Best practices` names specific conventions (docs-in-repo, executable-where-possible, reader-calibrated to client team's skill level, last-updated discipline).
**And** `## Desired outcomes` lists: a doc set checked into the client repo, validated by a client-side reader, and documented update expectations for maintenance phase.
**And** `## What the industry does` contrasts minimalist-docs vs. exhaustive-docs shops.
**And** the page links forward to the QA phase via the `/development/` overview and cross to `/deployment-launch/client-handoff-launch-checklist/` and `/maintenance-retainer/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/development/technical-documentation.md` with frontmatter `type: sub-section`, `phase: development`, `order: 10`.

---

## Epic 6: QA / Testing Content

_Goal repeated: A reader can learn how agencies plan and execute QA — test strategy, functional/regression, performance, security, UAT._

### Story 6.1: QA / Testing phase overview

As a reader entering QA / Testing,
I want an overview of how agency QA is structured and scoped, and how it hands off to Deployment,
So that I understand how quality gates fit between build and launch.

**Topic-specific Acceptance Criteria:**

**Given** the overview, **When** read, **Then** `## What happens here` names the 5 sub-sections (Test Strategy & Planning, Functional & Regression Testing, Performance Testing, Security Testing, UAT).
**And** `## Desired outcomes` lists: passed test cycles against signed acceptance criteria, closed bug list (or explicitly deferred with client sign-off), UAT client sign-off, and a deployment-ready state.
**And** `## What the industry does` contrasts QA-as-separate-discipline vs. QA-in-dev-team shops.
**And** the page links forward to `/deployment-launch/` and backward to `/development/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/qa-testing/index.md` with frontmatter `type: phase-overview`, `phase: qa-testing`, `order: 1`.

### Story 6.2: Test Strategy & Planning

As a QA lead starting an agency engagement,
I want guidance on producing a test strategy that traces to signed FR/NFRs and a test plan that fits the engagement's budget,
So that testing is in-scope, traceable, and defensible at sign-off.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it defines test strategy (the why/scope/approach) vs. test plan (the what/when/who), and explains the traceability-to-signed-requirements expectation.
**And** `## Best practices` names specific conventions (traceability matrix FR→test case, risk-based prioritization, entry/exit criteria per test cycle).
**And** `## Desired outcomes` lists: signed test strategy, agreed test plan, traceability matrix, agreed definition-of-test-done.
**And** `## What the industry does` contrasts formal-TMMi vs. lightweight agency approaches.
**And** the page links back to `/requirements-design/functional-nonfunctional-requirements/` and forward to `/qa-testing/functional-regression-testing/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/qa-testing/test-strategy-planning.md` with frontmatter `type: sub-section`, `phase: qa-testing`, `order: 2`.

### Story 6.3: Functional & Regression Testing

As a QA engineer running test cycles,
I want guidance on test-case design, regression suite maintenance, and when manual vs. automated is the right call in an agency context,
So that cycles find real defects without consuming disproportionate budget.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it defines functional testing (against requirements) and regression testing (against prior-passing behavior) and frames automation decisions as ROI-based.
**And** `## Best practices` names specific conventions (test case authoring from requirements, regression suite pruning, automated smoke + manual depth model, bug-triage ritual with client).
**And** `## Desired outcomes` lists: executed cycles with documented results, triaged defect list, regression coverage for shipped functionality.
**And** `## What the industry does` contrasts manual-first vs. automation-first agency QA styles.
**And** the page links forward to `/qa-testing/performance-testing/` and cross to `/development/developer-testing/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/qa-testing/functional-regression-testing.md` with frontmatter `type: sub-section`, `phase: qa-testing`, `order: 3`.

### Story 6.4: Performance Testing

As a QA engineer responsible for validating NFR-level performance in an engagement,
I want guidance on what performance tests to run, how to stage them safely, and how to report results to the client,
So that performance sign-off is defensible and does not surprise launch.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it defines performance testing types (load, stress, soak, spike), their relative costs, and which belong in agency-v1 delivery vs. later.
**And** `## Best practices` names specific conventions (test in environment-parity, represent production data, gather baselines early, never load-test shared client infra without written approval).
**And** `## Desired outcomes` lists: executed perf tests matching signed NFRs, baseline data for maintenance comparison, reported results to client with sign-off.
**And** `## What the industry does` contrasts full-rig vs. spot-check approaches.
**And** the page links back to `/development/performance-engineering/` and forward to `/qa-testing/security-testing/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/qa-testing/performance-testing.md` with frontmatter `type: sub-section`, `phase: qa-testing`, `order: 4`.

### Story 6.5: Security Testing

As a QA engineer responsible for security validation on agency engagements,
I want guidance on where to invest security testing (static, dynamic, pen test) proportional to engagement risk, and how to handle findings,
So that security sign-off is proportionate and findings do not block launch unreasonably.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it defines the main security-testing activities (SAST, DAST, dependency scan, pen test) and frames the "how much" question by engagement risk.
**And** `## Best practices` names specific conventions (scan in CI, triage-with-CVE-risk, pen test pre-launch for regulated clients, documented exceptions).
**And** `## Desired outcomes` lists: clean (or risk-accepted) scan results, documented findings/remediations, client-signed security acceptance.
**And** `## What the industry does` contrasts in-house-only vs. third-party-pentest shops.
**And** the page links back to `/development/secure-development-practices/` and forward to `/qa-testing/user-acceptance-testing/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/qa-testing/security-testing.md` with frontmatter `type: sub-section`, `phase: qa-testing`, `order: 5`.

### Story 6.6: User Acceptance Testing

As a consultant running UAT with a client,
I want guidance on how to structure UAT, how to manage client feedback, and how to drive UAT to sign-off without scope creep,
So that UAT closes with client acceptance rather than spiraling into re-work.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it defines UAT as client-executed verification of signed acceptance criteria (not agency QA in another costume) and names the typical UAT rhythm.
**And** `## Best practices` names specific conventions (structured UAT sessions, in-scope vs. enhancement-request triage, time-boxed cycles, explicit sign-off ritual).
**And** `## Desired outcomes` lists: documented UAT cycles, signed UAT acceptance, enhancement-request log fed into change-control, go/no-go decision for deployment.
**And** `## What the industry does` contrasts formal UAT vs. "send it to the client and see what breaks" cultures.
**And** the page links forward to `/deployment-launch/client-handoff-launch-checklist/` and back to `/pre-sales/sow-contract-drafting/` (acceptance criteria origin).

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/qa-testing/user-acceptance-testing.md` with frontmatter `type: sub-section`, `phase: qa-testing`, `order: 6`.

---

## Epic 7: Deployment / Launch Content

_Goal repeated: A reader can learn how agencies handle infra provisioning, deployment, smoke testing, monitoring setup, and client handoff._

### Story 7.1: Deployment / Launch phase overview

As a reader entering Deployment / Launch,
I want an overview that covers the mechanics of going live and handing off to Maintenance & Retainer,
So that launch is the end of delivery, not the beginning of unplanned work.

**Topic-specific Acceptance Criteria:**

**Given** the overview, **When** read, **Then** `## What happens here` names the 4 sub-sections (Infrastructure Provisioning, Deployment Execution & Smoke Testing, Monitoring & Observability Setup, Client Handoff & Launch Checklist).
**And** `## Desired outcomes` lists: live production system, passed smoke tests, operational monitoring, completed handoff, closed engagement invoice.
**And** `## What the industry does` contrasts big-bang vs. canary launch cultures.
**And** the page links forward to `/maintenance-retainer/` and backward to `/qa-testing/user-acceptance-testing/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/deployment-launch/index.md` with frontmatter `type: phase-overview`, `phase: deployment-launch`, `order: 1`.

### Story 7.2: Infrastructure Provisioning

As a tech lead provisioning production infrastructure for go-live,
I want guidance on the sequence, naming, and verification of the production environment,
So that launch day is not the first day production exists.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it defines infra provisioning as the execution of the infrastructure-design plan in production, and names the typical tasks (environment creation, DNS, certs, secrets, runtime config).
**And** `## Best practices` names specific conventions (infrastructure-as-code from the start, dry-run in staging, pre-launch readiness review, documented rollback plan).
**And** `## Desired outcomes` lists: live production environment, verified DNS+certs, documented runbook, signed-off readiness review.
**And** `## What the industry does` contrasts IaC-first vs. console-configured shops.
**And** the page links back to `/requirements-design/infrastructure-design/` and forward to `/deployment-launch/deployment-execution-smoke-testing/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/deployment-launch/infrastructure-provisioning.md` with frontmatter `type: sub-section`, `phase: deployment-launch`, `order: 2`.

### Story 7.3: Deployment Execution & Smoke Testing

As a tech lead running the launch-day deployment,
I want guidance on the deployment sequence, smoke-test checklist, and go/no-go decision points,
So that go-live is a planned event with explicit gates, not a hope.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it defines the launch-day sequence (final build, cutover, smoke, monitor, confirm, communicate) and names typical go/no-go gates.
**And** `## Best practices` names specific conventions (rehearsal in staging, named commander, documented smoke-test script, rollback-criteria-defined-in-advance, launch-window communication).
**And** `## Desired outcomes` lists: successful deployment, passed smoke tests, confirmed stakeholder notifications, monitoring shows green.
**And** `## What the industry does` contrasts go-live-as-event vs. deploy-continuously cultures.
**And** the page links back to `/development/devops-ci-cd/` and forward to `/deployment-launch/monitoring-observability-setup/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/deployment-launch/deployment-execution-smoke-testing.md` with frontmatter `type: sub-section`, `phase: deployment-launch`, `order: 3`.

### Story 7.4: Monitoring & Observability Setup

As a tech lead setting up ongoing observability before handoff,
I want guidance on what to instrument, what dashboards to produce for the client, and what alerts matter at launch,
So that the client operates the system with visibility, not hope.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it distinguishes monitoring (known knowns) from observability (unknown unknowns), and frames the setup as a handoff deliverable.
**And** `## Best practices` names specific conventions (SLO-based alerts, dashboards-per-stakeholder, alert noise management, runbook-linked-alerts).
**And** `## Desired outcomes` lists: operational dashboards live, alerts routed, client-operable observability, baselines captured.
**And** `## What the industry does` contrasts rich-platform vs. minimal-platform approaches.
**And** the page links forward to `/deployment-launch/client-handoff-launch-checklist/` and cross to `/maintenance-retainer/incident-response/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/deployment-launch/monitoring-observability-setup.md` with frontmatter `type: sub-section`, `phase: deployment-launch`, `order: 4`.

### Story 7.5: Client Handoff & Launch Checklist

As a consultant closing the delivery engagement,
I want a concrete checklist for handoff — credentials, docs, training, acceptance — and guidance on how to close cleanly,
So that the engagement ends with client self-sufficiency and a defensible sign-off.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it frames handoff as a ritual, names the artifact set (credentials, docs, runbooks, training session, sign-off), and positions it as the gate to retainer.
**And** `## Best practices` names specific conventions (named handoff meeting, walkthrough of each artifact, knowledge-transfer session recording, explicit acceptance ritual).
**And** `## Desired outcomes` lists: client has everything needed to operate, signed handoff acceptance, closed invoice, explicit transition to retainer or end-of-engagement.
**And** `## What the industry does` contrasts formal-handoff vs. "we're here on Slack anyway" cultures.
**And** the page links forward to `/maintenance-retainer/retainer-structure-slas/` and back to `/pre-sales/sow-contract-drafting/` (acceptance-criteria origin).

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/deployment-launch/client-handoff-launch-checklist.md` with frontmatter `type: sub-section`, `phase: deployment-launch`, `order: 5`.

---

## Epic 8: Maintenance & Retainer Content

_Goal repeated: A reader can learn how agencies structure post-launch work — patch management, feature iteration, incident response, retainer/SLAs._

### Story 8.1: Maintenance & Retainer phase overview

As a reader entering the last phase of the lifecycle,
I want an overview that explains how post-launch work is structured, when it begins, and how it loops back to Pre-Sales for further engagements,
So that I see the lifecycle as a loop, not a one-shot.

**Topic-specific Acceptance Criteria:**

**Given** the overview, **When** read, **Then** `## What happens here` names the 4 sub-sections (Bug Fixes & Patch Management, Feature Iteration, Incident Response, Retainer Structure & SLAs) and frames Maintenance as beginning at handoff.
**And** `## Desired outcomes` lists: running retainer with agreed SLAs, documented patch cadence, incident-response readiness, path-to-next-engagement.
**And** `## What the industry does` contrasts defined-retainer vs. break-fix-only cultures.
**And** the page links back to `/deployment-launch/client-handoff-launch-checklist/` and forward to `/pre-sales/` (lifecycle loop) — both cross-phase links are required.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/maintenance-retainer/index.md` with frontmatter `type: phase-overview`, `phase: maintenance-retainer`, `order: 1`.

### Story 8.2: Bug Fixes & Patch Management

As a consultant supporting a live client system under a retainer,
I want guidance on classifying bugs, scheduling patches, and avoiding scope creep in a support context,
So that bug-fix work is budgeted, prioritized, and does not accidentally become unpaid feature work.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it defines bug-fix work in the retainer context and distinguishes it from feature work and from incident response.
**And** `## Best practices` names specific conventions (triage matrix, patch windows, emergency-patch ritual, scope discipline in-ticket, client-visible patch log).
**And** `## Desired outcomes` lists: running backlog with triage, monthly/quarterly patch report, documented scope-boundary with client.
**And** `## What the industry does` contrasts structured-SLA vs. best-effort cultures.
**And** the page links forward to `/maintenance-retainer/feature-iteration/` and back to `/qa-testing/functional-regression-testing/` for regression-prevention mechanics.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/maintenance-retainer/bug-fixes-patch-management.md` with frontmatter `type: sub-section`, `phase: maintenance-retainer`, `order: 2`.

### Story 8.3: Feature Iteration

As a consultant handling post-launch feature requests within a retainer,
I want guidance on intake, scoping, and mini-SOW creation for features that exceed retainer budget,
So that feature work is either in-retainer or converted into a fresh engagement cleanly.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it defines feature iteration in retainer (small additive change) vs. new engagement (needs its own pre-sales loop), and names the triage mechanics.
**And** `## Best practices` names specific conventions (intake queue, change-request form, mini-SOW template, re-pricing threshold, client-visible roadmap).
**And** `## Desired outcomes` lists: a running feature-request intake, in-retainer vs. out-of-retainer decisions documented, renewed pre-sales cycle when work warrants it.
**And** `## What the industry does` contrasts fixed-bucket retainer vs. elastic-retainer structures.
**And** the page links forward to `/pre-sales/` (for upsize conversions) and back to `/maintenance-retainer/bug-fixes-patch-management/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/maintenance-retainer/feature-iteration.md` with frontmatter `type: sub-section`, `phase: maintenance-retainer`, `order: 3`.

### Story 8.4: Incident Response

As a tech lead on-call for a retainer client during an incident,
I want guidance on triage, communication with the client, and post-incident review,
So that incidents are resolved, reported, and learned from without damaging the client relationship.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it defines incident response as a distinct activity from bug-fix work (time-bounded, client-visible, SLO-driven).
**And** `## Best practices` names specific conventions (severity matrix, named incident commander, comms cadence with client, post-incident review ritual, learning-log).
**And** `## Desired outcomes` lists: resolved incident, client-signed post-incident review, SLA compliance reported, corrective actions tracked.
**And** `## What the industry does` contrasts formal-IR-program vs. ad-hoc shops.
**And** the page links back to `/deployment-launch/monitoring-observability-setup/` and forward to `/maintenance-retainer/retainer-structure-slas/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/maintenance-retainer/incident-response.md` with frontmatter `type: sub-section`, `phase: maintenance-retainer`, `order: 4`.

### Story 8.5: Retainer Structure & SLAs

As a consultant proposing or renewing a retainer with a client,
I want guidance on structuring retainers (fixed vs. variable bucket, SLA tiers, exclusions) and drafting the retainer agreement,
So that the ongoing relationship is contractually clean and pricing survives scrutiny.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it defines retainer as the post-launch contract mechanism and names the main structural choices (hours-bucket, feature-allocation, SLA-tiered).
**And** `## Best practices` names specific conventions (clearly-defined inclusions/exclusions, documented SLA response/resolution targets, escalation path, renewal ritual).
**And** `## Desired outcomes` lists: signed retainer, agreed SLAs, mutually understood exclusions, renewal calendar.
**And** `## What the industry does` contrasts defined-bucket retainer vs. open-ended monthly-retainer structures.
**And** the page links back to `/pre-sales/sow-contract-drafting/` and forward to `/pre-sales/` (lifecycle loop for new engagements).

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/maintenance-retainer/retainer-structure-slas.md` with frontmatter `type: sub-section`, `phase: maintenance-retainer`, `order: 5`.

---

## Epic 9: v1 Launch Readiness

_Goal repeated: With all 43 pages written, the site is legally clean, accessibility-verified, and proven on a real first-deploy before being publicized._

### Story 9.1: Add MIT LICENSE file

As a reader or contributor arriving at the public repo,
I want a clear, conventional open-source LICENSE file,
So that I understand the terms of use before forking, copying, or referencing the content.

**Acceptance Criteria:**

**Given** a LICENSE file at the repo root, **When** inspected, **Then** it contains the standard MIT License text with the current year and `Ferdi Nebiev` (or the author's preferred attribution) as copyright holder.
**And** the file is named exactly `LICENSE` (no extension) — matches the architecture.md project-directory spec.
**And** `package.json` declares `"license": "MIT"`.

**Given** the repo on GitHub, **When** viewed via the web UI after commit, **Then** GitHub automatically renders the license badge on the repo page.

### Story 9.2: Tighten the content-collection schema

As an author committing a new content page,
I want the Zod content-collection schema to reject pages missing `type`, `phase`, or `order` (except the splash home),
So that missing frontmatter is a build-time error rather than a silent convention violation.

**Acceptance Criteria:**

**Given** the schema in `src/content.config.ts`, **When** inspected, **Then** `type`, `phase`, and `order` are required for non-home pages — implemented via `z.discriminatedUnion` on `type`, via `superRefine`, or via a two-schema pattern that exempts the home page by path or slug.
**And** the home page (`index.mdx`) either (a) does not match the schema expecting these fields, or (b) continues to pass because the splash template is legitimately frontmatter-light.

**Given** a content page authored without `type`, **When** `pnpm build` runs, **Then** the build fails with a schema-validation error naming the offending file and field.
**And** when all required fields are present, **Then** the build succeeds as before.

**Given** the existing 43 pages, **When** the tightened schema is deployed, **Then** all 42 non-home pages still pass (they already have the fields, verified during scaffold).

### Story 9.3: Pre-launch manual accessibility audit

As a reader with accessibility needs arriving at the site,
I want the site to be keyboard-navigable, screen-reader-friendly, and legible in both themes,
So that I can use the reference without assistive-technology regressions.

**Acceptance Criteria:**

**Given** a real content-populated site (Epics 1–8 at least partially shipped), **When** the author walks through the home + one phase overview + one sub-section using keyboard only, **Then** every interactive element (sidebar, search, theme toggle, prev/next, in-page TOC, mobile menu if applicable) is reachable in logical order with a visible focus ring (UX-DR25).

**Given** the same three pages, **When** inspected with VoiceOver (macOS), **Then** heading levels are announced in order, sidebar landmarks are named, cross-phase link text is meaningful out of context (UX-DR26).

**Given** both light and dark themes on desktop and mobile, **When** eyeballed on real content, **Then** body text contrast is ≥7:1 (AAA); interactive/UI elements are ≥4.5:1 (AA); no regressions vs. Starlight defaults (UX-DR27).

**Given** one iOS device and one Android device, **When** tested, **Then** sidebar drawer, search, and theme toggle are thumb-operable and interactive-element touch targets are ≥44×44 CSS px (UX-DR28, UX-DR21).

**Given** viewport widths 320 / 375 / 768 / 1024 / 1440 / 2560 px in devtools, **When** the same three pages are loaded, **Then** no horizontal scroll appears at any width, and the content column never exceeds ~75ch (UX-DR29, NFR5).

**Given** findings from this audit, **When** issues are identified, **Then** each is either (a) fixed via a small spec, (b) deferred to a tracked follow-up in `deferred-work.md` with rationale, or (c) waived with documented justification. Audit results are committed to the repo under `_bmad-output/implementation-artifacts/` or as an inline note in this story's outcome.

### Story 9.4: Post-first-deploy live verification

As the author publishing the site for public consumption,
I want to verify on the real GitHub Pages URL that the core navigation and rendering paths work,
So that the first publicly-shared link does not land on broken affordances.

**Acceptance Criteria:**

**Given** the live site at `https://ferdinebi.github.io/software-engineering-with-ai/`, **When** opened, **Then** the home page renders with the `<PhaseList>`, sidebar shows all 7 numbered phases, and no console errors appear.

**Given** a deliberately invalid URL under the site, **When** opened, **Then** Starlight's default 404 page renders correctly at the base path.

**Given** Pagefind's search dialog, **When** a known practitioner term from the content is searched, **Then** the expected page appears in the top results with a preview snippet visible.

**Given** the theme toggle, **When** clicked, **Then** dark/light mode applies without layout shift and persists across at least one page navigation.

**Given** a sample of at least 6 internal links (one forward cross-phase, one backward cross-phase, one sub-section from sidebar, one sub-section from in-page TOC, one prev/next, one home-page `<PhaseList>` entry), **When** clicked on the live site, **Then** all 6 resolve correctly with the configured `base` prefix and do not 404.

**Given** verification results, **When** any fail, **Then** the failure is triaged as blocker (block public launch) or non-blocker (fix post-launch with tracking). Verification notes are committed to the repo.

### Story 9.5: Document the GitHub Pages "Source: GitHub Actions" setup step

As a future maintainer or fork author setting up a new deployment of this site,
I want explicit documentation of the one-time manual Pages setting that enables the Actions-driven deploy,
So that the first push to `master`/`main` actually publishes without a cryptic "Pages not enabled" failure.

**Acceptance Criteria:**

**Given** the repo's README.md (or `docs/deployment.md`, author's choice), **When** inspected, **Then** it contains an explicit step: "In GitHub → repo Settings → Pages → 'Build and deployment' source, select 'GitHub Actions'."
**And** the doc notes that this is a one-time repo-level action that cannot be automated via workflow and must precede the first deploy.
**And** the doc cross-references `.github/workflows/deploy.yml` as the workflow that assumes this setting.

**Given** `_bmad-output/implementation-artifacts/deferred-work.md`, **When** this story is closed, **Then** the "GitHub Pages 'Source: GitHub Actions' toggle" item is marked resolved (or removed) with a pointer to the new documentation.

### Story 9.6: `<OutcomeChecklist>` component (CONDITIONAL)

> **Gate:** Added to the sprint only if content review during Epics 2–8 surfaces that the plain Markdown `<ul>` under `## Desired outcomes` does not test as sufficiently scannable. If `<ul>` is sufficient, this story is skipped and the condition documented in the retrospective.

As a reader scanning for sign-off or deliverable criteria on any page,
I want the *Desired outcomes* section to be visually anchored so I can locate it in seconds,
So that my scan-for-outcomes loop is under 5 seconds regardless of page length (per UX spec success criterion).

**Acceptance Criteria:**

**Given** a new `<OutcomeChecklist>` component at `src/components/OutcomeChecklist.astro`, **When** inspected, **Then** it wraps a `<ul role="list">` with a visual treatment that makes the block scan-anchored (border, background tint keyed to Starlight token, or equivalent).
**And** the component is zero-JS (`.astro`, no hydration) and static (not a form-semantic interactive checklist).
**And** it supports `compact` (sub-section) and `expanded` (phase overview) variants.

**Given** at least 3 representative content pages (one phase overview + two sub-sections), **When** the component replaces the plain `<ul>` in their *Desired outcomes* sections, **Then** the pages still build, the content is unchanged, and contrast stays ≥7:1 in both themes.

**Given** an accessibility check on the component, **When** run, **Then** screen readers announce the list and its items correctly; no interactive-semantic leakage (no checkboxes, no form elements).

### Story 9.7: `<PhaseHandoff>` component (CONDITIONAL)

> **Gate:** Added only if content review concludes that inline prose cross-phase links do NOT sufficiently carry the forward/backward handoff signal on phase overview pages.

As a reader on a phase overview page,
I want a clearly-labeled handoff block at the bottom showing "what comes before / what comes after" with one-line summaries,
So that I understand the phase's position in the lifecycle without hunting through prose.

**Acceptance Criteria:**

**Given** a new `<PhaseHandoff>` component at `src/components/PhaseHandoff.astro`, **When** inspected, **Then** it renders a `<nav aria-label="Phase handoff">` landmark with previous-phase + next-phase cards/links and a one-line summary of what's handed off in each direction.
**And** it supports first-phase (no previous) and last-phase (no next) variants gracefully.
**And** it is zero-JS.

**Given** the 7 phase overview pages, **When** the component is added, **Then** each overview renders the handoff block without breaking existing inline cross-phase links (both can co-exist).
**And** screen-reader announcement is correct (landmark named; no duplicate-link confusion).

### Story 9.8: `<PhaseBadge>` component (CONDITIONAL)

> **Gate:** Added only if content review concludes that Starlight's breadcrumb alone does NOT sufficiently signal phase context at a glance.

As a reader landing mid-phase from a search or cross-phase link,
I want a compact visual badge near the page title that shows "Phase N: Phase Name,"
So that my orientation to current-phase is instant, not scan-dependent.

**Acceptance Criteria:**

**Given** a new `<PhaseBadge>` component at `src/components/PhaseBadge.astro`, **When** inspected, **Then** it derives the phase number + phase title from the page's frontmatter `phase` slug via a small phase registry and renders a compact label near the page title area.
**And** it is purely decorative for screen readers (breadcrumb already announces the location); badge uses `aria-hidden="true"` or equivalent.
**And** it respects both themes and the accent-color override from Story 1.3.

**Given** the 43 content pages, **When** the badge is enabled globally (via layout override or include), **Then** every content page renders the badge, the splash home does not render it, and no page layout breaks.

### Story 9.9: Mermaid diagram rendering support (CONDITIONAL)

> **Gate:** Added only if at least one phase overview author decides a Mermaid flowchart/sequence diagram is the right representation for a handoff or lifecycle visualization in v1. Otherwise deferred to v2.

As a content author writing a phase overview that includes a lifecycle handoff visual,
I want to author a Mermaid fenced code block directly in Markdown and have it rendered as SVG at build time,
So that I can produce diagrams without leaving the content tree or introducing an island.

**Acceptance Criteria:**

**Given** a community Starlight/remark Mermaid plugin selected and pinned in `package.json`, **When** integrated in `astro.config.mjs`, **Then** ` ```mermaid ` fenced blocks in any content Markdown file are rendered as inline SVG at build time.
**And** the plugin does NOT require a framework island — diagram rendering is build-time only (NFR4 compliance for static-first).

**Given** a rendered Mermaid diagram, **When** inspected, **Then** the generated SVG carries `<title>` / `<desc>` where feasible, and the source Mermaid text remains accessible as a fallback for screen-reader users (UX-DR24).
**And** contrast of diagram lines/nodes is legible in both themes.

**Given** the build, **When** `pnpm build` runs, **Then** build time stays under the 60s NFR2 target with Mermaid diagrams present.
**And** the three journey flowcharts already in `ux-design-specification.md` can be authored into at least one v1 phase overview as a reference implementation.

---

## Epic 10: Delivery phase restructure (mechanical move)

_Goal: Replace the 7-phase model with a 6-phase model where Delivery unifies Project Management, Development, and QA / Testing as concurrent sub-sections. Mechanical move only — no rewriting of moved-page content beyond frontmatter and inline cross-link updates. Authored content for the new Project Management sub-section ships in Epic 11._

**User outcome:** Sidebar reflects the corrected lifecycle (PM/Dev/QA running concurrently inside Delivery, not sequentially), the Delivery overview names this concurrency explicitly, and the build passes after every existing internal link to `/development/*` or `/qa-testing/*` has been rewritten to its new `/delivery/*` path.

**FRs covered:** FR2 (sidebar expand/collapse — now with second hop), FR7 (phase ordering — 6 phases visible), FR9 (Delivery overview), FR16 (cross-phase links no longer broken)
**NFRs covered:** NFR1 (clean-clone build still passes), NFR7 (new content added via Markdown + sidebar config — 3-level nesting is the same mechanism)
**UX-DRs covered:** UX-DR3 (sidebar numbering — phases now 1–6 instead of 1–7)

**Implementation notes:**

- This epic is a **planning-artifact change + file moves + sidebar edit**, not a content rewrite. The 9 Development pages and 5 QA / Testing pages keep their authored content verbatim. Only their file paths, frontmatter `phase` slug, and any inline links pointing at moved siblings change.
- The Delivery phase overview page (story 10.4) is *new* content that must explain the concurrency model and cadence handoff to Deployment. It is the only authored page in this epic.
- The `phaseSlug` Zod enum drops from 7 to 6 entries — `development` and `qa-testing` are removed and `delivery` is added. The schema may also gain a `subsection` field (decided in story 10.1).
- Sidebar adopts 3-level nesting under Delivery via Starlight's nested `items:` arrays. PM, Development, and QA / Testing are sub-groups rather than top-level entries.
- `architecture.md` and `prd.md` both already reflect the restructure (committed pre-Epic-10 as planning-artifact updates); this epic's story 10.6/10.7 simply cross-check those edits against the implementation and add any missed details.
- **Slug-immutability exception** has been recorded in `architecture.md`. Old `/development/*` and `/qa-testing/*` URLs will 404 — no redirects added.

**Standalone:** Yes — all moved-page content survives intact. The site is fully usable after Epic 10 ships even if Epic 11 hasn't started; the only "missing" thing is the Project Management sub-section content (which appears in the sidebar as overview-only with leaf-page stubs).

### Story 10.1: Update `phaseSlug` enum + decide subsection encoding

As a content-collection author,
I want the Zod schema in `src/content.config.ts` to enforce the 6-phase model and the 3-level nesting under Delivery,
So that frontmatter on every moved or new page is build-validated against the post-restructure shape.

**Acceptance Criteria:**

**Given** `src/content.config.ts`, **When** inspected, **Then** the `phaseSlug` enum contains exactly the 6 entries `['pre-sales', 'discovery', 'requirements-design', 'delivery', 'deployment-launch', 'maintenance-retainer']` — `development` and `qa-testing` are removed.

**Given** the schema, **When** inspected, **Then** **either** (a) a `subsection` Zod enum field is added with values `['project-management', 'development', 'qa-testing']`, allowed only when `phase === 'delivery'`, OR (b) the schema deliberately omits `subsection` and relies on file-path encoding alone — the choice is documented inline in the schema file as a one-line comment with the date and rationale. Pick whichever yields the simpler sidebar wiring without sacrificing build-time guarantees.

**Given** the existing 41 non-home pages (post-Epic 10 file moves), **When** `pnpm build` runs, **Then** all pass schema validation; `phase` values match the 6 new slugs; if `subsection` is enforced, every page under `delivery/` has a valid `subsection` value.

**Given** an attempted build of a content page with `phase: development`, **When** `pnpm build` runs, **Then** the build fails with a schema-validation error naming the file and the now-invalid slug.

### Story 10.2: Move Development pages into `src/content/docs/delivery/development/`

As an agent restructuring the content tree,
I want every page under `src/content/docs/development/` moved to `src/content/docs/delivery/development/` with frontmatter updated,
So that the Development sub-section lives inside Delivery and the schema (post-10.1) accepts every page.

**Acceptance Criteria:**

**Given** `src/content/docs/development/`, **When** inspected after this story, **Then** the directory **does not exist** (or is empty); all 10 files (1 overview + 9 sub-pages) have moved to `src/content/docs/delivery/development/`.

**Given** every moved file, **When** inspected, **Then** frontmatter `phase: development` has been changed to `phase: delivery`; if story 10.1 introduced `subsection`, every file has `subsection: development`. `lastUpdated` is bumped to the move-commit date. All other authored content (body prose, headings, links *to other Delivery sub-pages*) is preserved verbatim except for inline link updates handled in 10.8.

**Given** `pnpm build`, **When** run, **Then** every moved page renders at its new URL (`/delivery/development/<slug>/`).

### Story 10.3: Move QA / Testing pages into `src/content/docs/delivery/qa-testing/`

As an agent restructuring the content tree,
I want every page under `src/content/docs/qa-testing/` moved to `src/content/docs/delivery/qa-testing/` with frontmatter updated,
So that the QA / Testing sub-section lives inside Delivery and the schema accepts every page.

**Acceptance Criteria:**

**Given** `src/content/docs/qa-testing/`, **When** inspected after this story, **Then** the directory **does not exist** (or is empty); all 6 files (1 overview + 5 sub-pages) have moved to `src/content/docs/delivery/qa-testing/`.

**Given** every moved file, **When** inspected, **Then** frontmatter `phase: qa-testing` has been changed to `phase: delivery`; if story 10.1 introduced `subsection`, every file has `subsection: qa-testing`. `lastUpdated` is bumped to the move-commit date. Authored content is preserved verbatim except for inline link updates handled in 10.8.

**Given** `pnpm build`, **When** run, **Then** every moved page renders at its new URL (`/delivery/qa-testing/<slug>/`).

### Story 10.4: Author the Delivery phase overview

As a reader entering the Delivery phase for the first time,
I want an overview that explains the three concurrent streams (Project Management, Development, QA / Testing), the cadence that ties them together, and the handoff to Deployment / Launch,
So that I understand why Delivery is a *single phase with three streams* instead of three separate phases run sequentially.

**Topic-specific Acceptance Criteria** (in addition to shared structural ACs):

**Given** the overview content, **When** read, **Then** `## What happens here` explicitly names the three sub-sections and frames them as **concurrent**, not sequential — calling out that the older "Dev finishes, then QA starts" model is wrong for agency engagements.
**And** `## Best practices` describes the cadence that ties the three streams together (sprint cadence, definition of done that requires Dev + QA both green, PM-led demos and stakeholder communication interlocking with sprint boundaries).
**And** `## Desired outcomes` lists at least: a tested release candidate, a sign-off-ready artifact, a PM-owned change log + risk register, and a documented handoff package to Deployment / Launch.
**And** `## What the industry does` contrasts at least two delivery cadences (e.g. classic Scrum vs. Kanban-with-release-trains, or onsite-PM vs. fractional-PM agency models).
**And** the page includes a forward link to `/deployment-launch/` and a backward link to `/requirements-design/`. It also links to all three Delivery sub-section overviews (`/delivery/project-management/`, `/delivery/development/`, `/delivery/qa-testing/`).

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/delivery/index.md` with frontmatter `type: phase-overview`, `phase: delivery`, `order: 1`. It does NOT have a `subsection` field (the overview itself sits at the phase root, not inside any sub-section).

### Story 10.5: Update `astro.config.mjs` sidebar to 3-level nesting

As a reader scanning the sidebar,
I want the Delivery phase to render as a single top-level entry containing three nested sub-groups (PM, Development, QA / Testing) — each with its own item list,
So that the sidebar mirrors the corrected lifecycle and the 7-phase ordering becomes a 6-phase ordering.

**Acceptance Criteria:**

**Given** the sidebar config in `astro.config.mjs`, **When** inspected, **Then** there are exactly 6 top-level entries with the labels `1. Pre-Sales & Business Development`, `2. Discovery`, `3. Requirements & Design`, `4. Delivery`, `5. Deployment / Launch`, `6. Maintenance & Retainer`.
**And** the Delivery entry contains a nested `items:` array with three sub-groups labeled `Project Management`, `Development`, `QA / Testing` (no leading number prefix on sub-section labels — UX-DR3).
**And** each sub-group has its own `items:` array listing the sub-section overview as `Overview` plus every leaf page in author-decided order.
**And** the previous top-level `4. Development` and `5. QA / Testing` groups are removed.

**Given** `pnpm build`, **When** run, **Then** the build passes; every sidebar slug resolves to an existing content file; no 404s in the sidebar.

**Given** the rendered sidebar on desktop and mobile, **When** inspected, **Then** the Delivery entry expands to show three nested sub-groups; each sub-group expands to show its leaf pages; current-page highlight and collapse behavior work across all nesting levels in both themes.

### Story 10.6: Update `architecture.md` (post-implementation cross-check)

As a future agent reading the architecture artifact,
I want `architecture.md` to accurately reflect the implemented restructure (including any deviations made during stories 10.1–10.5),
So that the planning artifact and the implementation stay in sync.

**Acceptance Criteria:**

**Given** the changes already committed to `architecture.md` ahead of Epic 10 (phase-slug list reduced to 6, slug-immutability exception recorded, file-and-folder pattern updated, frontmatter `subsection` field documented), **When** cross-checked against the actual implementation produced by stories 10.1–10.5, **Then** any deviations are reconciled — either the implementation is corrected to match the spec, or the spec is updated to record the chosen alternative with a one-line rationale.

**Given** the full architecture file, **When** searched, **Then** no references to `phase: development` or `phase: qa-testing` remain except in historical notes explicitly marked as pre-2026-05-06.

### Story 10.7: Update `prd.md` (post-implementation cross-check)

As a future agent reading the PRD,
I want `prd.md` to accurately reflect the implemented restructure (sidebar shape, page counts, journeys),
So that the planning artifact and the implementation stay in sync.

**Acceptance Criteria:**

**Given** the changes already committed to `prd.md` ahead of Epic 10 (sidebar listing reframed around 6 phases with Delivery sub-sections, page count updated to 51, journeys revised, executive summary updated), **When** cross-checked against the implementation, **Then** any drift is reconciled — implementation corrected to match the spec, or spec updated to record the chosen alternative.

**Given** the full PRD, **When** searched, **Then** no references to "7 phases" or "43 pages" remain (except in the revisions log explicitly marked as pre-restructure historical context).

### Story 10.8: Build verification + cross-link audit

As a reader following an internal link from any page,
I want every `/development/*` and `/qa-testing/*` link rewritten to its new `/delivery/development/*` or `/delivery/qa-testing/*` path,
So that no internal link 404s after the restructure.

**Acceptance Criteria:**

**Given** the entire `src/content/docs/` tree post-moves, **When** searched for `/development/` and `/qa-testing/` link patterns, **Then** every match has been rewritten to its new path under `/delivery/`. Exception: the moved pages themselves may legitimately reference *external* URLs containing those substrings; review each match and only rewrite internal links.

**Given** `pnpm build`, **When** run, **Then** the build passes with zero schema violations and zero broken sidebar slugs.

**Given** a manual spot-check of the live Delivery overview, three Delivery sub-section overviews, and at least 4 leaf pages, **When** opened in the dev server, **Then** every visible internal link resolves to an existing page (no 404).

**Given** `_bmad-output/implementation-artifacts/sprint-status.yaml`, **When** Epic 10 closes, **Then** `epic-10` is marked `done` and stories 10.1–10.8 are all `done`.

---

## Epic 11: Project Management sub-section content

_Goal: Author the Project Management sub-section overview plus 7 leaf pages, each on the standard 4-section template. PM is the commercial product agencies sell — distinct from the engineering practices in Development and the validation practices in QA / Testing._

**User outcome:** Project Management sub-section is complete and cross-linked. A reader (Priya formalising her freelance offering, or Marcus understanding what his PM does on the engagement) can drill into any PM leaf page and learn what it is, how to do it well, what "done" looks like, and how leading agencies approach it.

**FRs covered:** FR9 (sub-section overview), FR10–FR14 (4-section template), FR15 (stand-alone pages), FR16 (cross-phase + cross-stream links), FR18 (adds 7 leaf pages to the corpus)

**Implementation notes:**

- 8 stories: PM sub-section overview + 7 leaf pages on the activity list (Sprint Planning & Cadence, Backlog Management, Estimation & Sprint Slicing, Status Reporting & Stakeholder Communication, Scope Control & Change Management, Risk & Issue Management, Retrospectives).
- Every PM page must position PM as the **commercial product** clients pay for in agency engagements — distinct from PM-as-internal-discipline at product companies. Cross-link to Pre-Sales (where PM scope is sold), to Development and QA / Testing (where PM coordinates), and to Deployment / Launch (where PM owns handoff).
- The Backlog Management page must explicitly distinguish *delivery-time backlog management* from *Requirements & Design's backlog framing*. Cross-link both ways.
- The Scope Control & Change Management page explicitly handles *delivery-time* scope control and links to Pre-Sales SOW change-control as the contractual root.
- Each story inherits the shared structural ACs (frontmatter, 4 H2s, voice, no forbidden patterns, base-path-safe links).

**Standalone:** Yes — each leaf page stands alone. The sub-section is shippable in any order, but the sub-section overview is most useful authored first so subsequent leaf pages can reference it.

### Story 11.1: Project Management sub-section overview

As a reader entering the Project Management sub-section under Delivery,
I want an overview that explains why PM is a sub-section of Delivery (not a separate phase) and what the 7 leaf pages collectively cover,
So that I understand PM as a commercial product running concurrently with Development and QA / Testing.

**Topic-specific Acceptance Criteria:**

**Given** the overview, **When** read, **Then** `## What happens here` names the 7 leaf pages, frames PM as a **commercial product** clients pay for in agency engagements, and explicitly distinguishes agency PM from product-company PM (no roadmap-owner mandate; cadence + stakeholder communication + scope control are the deliverables).
**And** `## Best practices` describes the PM cadence that ties Development and QA / Testing together (sprint planning, demo, retro), the artifacts PM owns (status report, change log, risk register, retro outputs), and the anti-pattern of "PM = note-taker."
**And** `## Desired outcomes` lists the artifacts PM is expected to produce across the engagement (status reports, change-control records, risk register, retro outputs).
**And** `## What the industry does` contrasts agency PM models (e.g. dedicated PM per engagement vs. fractional PM, billable PM vs. blended-into-team-rate, onshore PM vs. nearshore).
**And** the page links forward to all 7 PM leaf pages, sideways to `/delivery/development/` and `/delivery/qa-testing/`, and backward to `/pre-sales/sow-contract-drafting/` (PM scope is sold here) and `/pre-sales/pricing-estimation/` (PM is priced here).

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/delivery/project-management/index.md` with frontmatter `type: sub-section`, `phase: delivery`, `order: 1`; if the schema requires `subsection`, then `subsection: project-management`.

### Story 11.2: Sprint Planning & Cadence

As a PM running an agency engagement,
I want guidance on sprint planning rituals, cadence selection (1-week vs. 2-week vs. continuous), and how to interlock with Dev/QA streams,
So that the engagement runs at a predictable cadence and stakeholders know what's coming.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it defines the sprint as the heartbeat of agency delivery, names typical durations, and explains what each ritual produces (planning, daily, review, retro).
**And** `## Best practices` names specific facilitation techniques (planning capacity rules, definition-of-ready, definition-of-done involving Dev + QA), how to handle mid-sprint scope intrusion, and stakeholder-visibility expectations.
**And** `## Desired outcomes` lists: a sprint commitment the team can defend, a stakeholder-visible plan, an audit trail of what was committed vs. delivered.
**And** `## What the industry does` contrasts agency cadences (Scrum-by-the-book vs. Kanban-with-release-train vs. hybrid), and how billing model (T&M vs. fixed-price) shapes cadence choice.
**And** the page links to `/delivery/project-management/backlog-management/` (planning input), `/delivery/project-management/estimation-sprint-slicing/` (slicing for sprint fit), and `/delivery/development/` + `/delivery/qa-testing/` (the two streams whose work fills the sprint).

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/delivery/project-management/sprint-planning-cadence.md` with frontmatter `type: sub-section`, `phase: delivery`, `order: 2`, plus `subsection: project-management` if schema requires.

### Story 11.3: Backlog Management

As a PM stewarding the backlog mid-engagement,
I want to know how to keep the backlog ordered, refined, and sized to fit upcoming sprints,
So that planning sessions are productive and the team isn't blocked on missing detail.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it defines delivery-time backlog management as distinct from Requirements & Design's initial requirements capture (it explicitly cross-links to `/requirements-design/functional-nonfunctional-requirements/`), and frames the PM as the backlog steward — not the sole author.
**And** `## Best practices` names refinement cadence (separate from sprint planning), prioritisation frameworks (RICE, MoSCoW, value-vs-effort), DoR (definition of ready), and the anti-pattern of "feature dump that no one refines."
**And** `## Desired outcomes` lists: a refined top-of-backlog 1–2 sprints ahead, a ranked backlog the client can defend, traceability from backlog item to original requirement.
**And** `## What the industry does` contrasts tooling-led approaches (Jira-heavy) vs. lightweight (single source-of-truth list), and full-team refinement vs. PM+lead refinement.
**And** the page links to `/delivery/project-management/scope-control-change-management/` (backlog changes that breach SOW), `/delivery/project-management/sprint-planning-cadence/`, and `/requirements-design/functional-nonfunctional-requirements/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/delivery/project-management/backlog-management.md` with frontmatter `type: sub-section`, `phase: delivery`, `order: 3`, plus `subsection: project-management` if schema requires.

### Story 11.4: Estimation & Sprint Slicing

As a PM working with the team to size and slice work,
I want to know how to slice large items into sprint-sized pieces, calibrate estimates over time, and surface estimation drift to stakeholders,
So that sprints are achievable and the gap between Pre-Sales pricing and delivery reality is visible early.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it defines delivery-time estimation as distinct from Pre-Sales pricing (cross-links to `/pre-sales/pricing-estimation/`) and Discovery cost commitment (cross-links to `/discovery/estimation-cost-commitment/`), and frames it as the calibration loop that closes the gap between sold scope and shippable scope.
**And** `## Best practices` names slicing techniques (vertical slices, INVEST, splitting on workflow steps), estimation styles (story points, T-shirt, hours-with-confidence-band), and how to calibrate after the first 2–3 sprints.
**And** `## Desired outcomes` lists: sprint-sized items at the top of the backlog, a velocity baseline by sprint 3, an early signal when actual velocity diverges from the SOW pricing assumption.
**And** `## What the industry does` contrasts story-point cultures vs. hour-based agencies, and reference-class forecasting vs. team-judgement estimation.
**And** the page links to `/delivery/project-management/sprint-planning-cadence/`, `/delivery/project-management/risk-issue-management/` (estimation drift is a risk), and `/pre-sales/pricing-estimation/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/delivery/project-management/estimation-sprint-slicing.md` with frontmatter `type: sub-section`, `phase: delivery`, `order: 4`, plus `subsection: project-management` if schema requires.

### Story 11.5: Status Reporting & Stakeholder Communication

As a PM owning the client conversation,
I want to know how to structure status updates, what cadence is right, and how to communicate bad news without losing trust,
So that the client is never surprised and the delivery team isn't shielded from accountability.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it defines status reporting as the PM-owned client-visible artifact and frames stakeholder communication as PM's primary deliverable — not an admin task.
**And** `## Best practices` names report structure (RAG status, scope/schedule/budget against baseline, top risks, decisions needed), cadence options (weekly written + monthly steering), and the bad-news playbook (early, factual, with a proposed mitigation).
**And** `## Desired outcomes` lists: a weekly status artifact the client can forward up to their leadership, a steering-committee record for major decisions, no surprise escalations.
**And** `## What the industry does` contrasts written-first agencies (everything in writing) vs. meeting-first agencies (status by call), and named-RAG vs. narrative-only formats.
**And** the page links to `/delivery/project-management/risk-issue-management/` (risks are reported in status), `/delivery/project-management/scope-control-change-management/` (scope changes are surfaced in status), and `/maintenance-retainer/retainer-structure-slas/` (post-launch reporting often re-uses delivery-time templates).

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/delivery/project-management/status-reporting-stakeholder-communication.md` with frontmatter `type: sub-section`, `phase: delivery`, `order: 5`, plus `subsection: project-management` if schema requires.

### Story 11.6: Scope Control & Change Management (delivery-time)

As a PM holding the line on scope mid-engagement,
I want a documented change-control flow that ties delivery-time scope changes back to the SOW,
So that scope creep doesn't silently consume budget and every change has a paper trail.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it defines delivery-time scope control as the live enforcement of the SOW change-control clause (cross-links to `/pre-sales/sow-contract-drafting/`), frames PM as the gatekeeper, and distinguishes "in-scope refinement" from "change request."
**And** `## Best practices` names the change-control flow (request → impact assessment → client decision → change order → backlog update), the impact-assessment template (cost, schedule, risk), and the anti-pattern of "we'll squeeze it in."
**And** `## Desired outcomes` lists: a change log the client co-owns, no unbilled scope expansion, no surprised stakeholders at end-of-sprint demos.
**And** `## What the industry does` contrasts strict-control agencies (every change billed) vs. relationship-led agencies (small changes absorbed; large changes formally controlled).
**And** the page links to `/pre-sales/sow-contract-drafting/`, `/delivery/project-management/backlog-management/`, and `/delivery/project-management/status-reporting-stakeholder-communication/`.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/delivery/project-management/scope-control-change-management.md` with frontmatter `type: sub-section`, `phase: delivery`, `order: 6`, plus `subsection: project-management` if schema requires.

### Story 11.7: Risk & Issue Management

As a PM tracking what could (or did) go wrong,
I want to know how to maintain a risk register, distinguish risks from issues, and run mitigation conversations,
So that surprises are reduced and the team has a shared view of fragility.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it defines risk vs. issue (probabilistic future event vs. realised problem), frames the register as a living document the PM owns, and describes the cadence for reviewing it.
**And** `## Best practices` names a register schema (description, probability, impact, owner, mitigation, trigger), review cadence (weekly with team, monthly with client), and escalation thresholds.
**And** `## Desired outcomes` lists: a current risk register at any sprint boundary, a mitigation owner for every above-threshold risk, an audit trail of issues that did fire and how they were resolved.
**And** `## What the industry does` contrasts heavy-formal agencies (PMI-style) vs. lightweight (a Markdown file in the repo), and silent-mitigation cultures vs. transparent-with-client cultures.
**And** the page links to `/delivery/project-management/status-reporting-stakeholder-communication/` (risks are reported), `/delivery/project-management/estimation-sprint-slicing/` (estimation drift is a risk), and `/maintenance-retainer/incident-response/` (post-launch issue handling).

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/delivery/project-management/risk-issue-management.md` with frontmatter `type: sub-section`, `phase: delivery`, `order: 7`, plus `subsection: project-management` if schema requires.

### Story 11.8: Retrospectives

As a PM running team retros at sprint or milestone boundaries,
I want to know how to facilitate a retro that produces actionable change, not just venting,
So that the engagement gets faster and calmer over time instead of accumulating frustration.

**Topic-specific Acceptance Criteria:**

**Given** `## What happens here`, **When** read, **Then** it defines retrospectives as both team-internal (improvement loop) and client-visible (milestone retros), and frames the PM as the facilitator who is *not* the subject of the retro.
**And** `## Best practices` names facilitation formats (Start/Stop/Continue, 4Ls, sailboat), psychological-safety techniques, and how to convert observations into owned action items with sprint-boundary follow-up.
**And** `## Desired outcomes` lists: 1–3 actionable improvements per retro, owners assigned, follow-up at the next retro to close the loop.
**And** `## What the industry does` contrasts every-sprint retros vs. milestone retros, internal-only vs. client-included formats, and written-summary vs. verbal-only outputs.
**And** the page links to `/delivery/project-management/sprint-planning-cadence/` (retro feeds next sprint's planning) and `/maintenance-retainer/feature-iteration/` (post-launch retros are a similar pattern).

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/delivery/project-management/retrospectives.md` with frontmatter `type: sub-section`, `phase: delivery`, `order: 8`, plus `subsection: project-management` if schema requires.

---

## Epic 12: Cross-page edits surfaced by the restructure

_Goal: Tighten cross-page references that became stale or under-specified after the Delivery restructure. PM is now a first-class sub-section, so pages that previously alluded to it can now cross-link instead of re-explain. Pages that referenced "the QA / Testing phase" now correctly reference the QA / Testing sub-section under Delivery._

**User outcome:** Any reader following an internal cross-reference from outside Delivery into a Delivery topic lands on the right page with framing that matches the new IA. No page contains the dead-language "QA / Testing phase" or "Development phase" as a top-level construct.

**FRs covered:** FR16 (cross-phase links remain accurate), FR17 (visual hierarchy unchanged but cross-references updated)

**Implementation notes:**

- Scope is small but spread across multiple pages. Confirm during Epic 10 build whether all three stories below are needed; some may collapse into 10.8.
- Each story is mostly inline-prose surgery — reword phrasing, swap link targets, no structural rewrites.

**Standalone:** Yes, but most useful after Epics 10 + 11 are complete (so the new PM links resolve).

### Story 12.1: Tighten PM mentions in Pre-Sales

As a Pre-Sales reader on `sow-contract-drafting` or `pricing-estimation`,
I want any reference to project management at delivery time to point at the new PM sub-section instead of re-explaining it,
So that Pre-Sales pages stay focused on the commercial artefacts and PM-the-product gets explained where it lives.

**Acceptance Criteria:**

**Given** `src/content/docs/pre-sales/sow-contract-drafting.md` and `src/content/docs/pre-sales/pricing-estimation.md`, **When** searched for prose discussing change control, status reporting, sprint cadence, or PM as a product, **Then** any inline re-explanation longer than ~2 sentences has been replaced by a one-sentence link to the corresponding PM leaf page (`/delivery/project-management/scope-control-change-management/`, `/delivery/project-management/status-reporting-stakeholder-communication/`, `/delivery/project-management/sprint-planning-cadence/`, or `/delivery/project-management/`).

**Given** both pages, **When** read post-edit, **Then** they continue to read coherently as Pre-Sales pages — the PM topic is referenced, not redundantly re-taught.

**Given** `pnpm build`, **When** run, **Then** all new links resolve and no schema/build errors appear.

### Story 12.2: Update Maintenance & Retainer cross-links

As a reader on `retainer-structure-slas` or `incident-response`,
I want references to delivery-time PM, Development, or QA / Testing to point at their new `/delivery/...` paths,
So that no link from Maintenance & Retainer 404s after the restructure.

**Acceptance Criteria:**

**Given** `src/content/docs/maintenance-retainer/retainer-structure-slas.md` and `src/content/docs/maintenance-retainer/incident-response.md`, **When** searched for `/development/` and `/qa-testing/` link patterns, **Then** every match has been rewritten to its new `/delivery/development/` or `/delivery/qa-testing/` path.

**Given** the same pages, **When** searched for inline references to "PM," "project manager," "sprint cadence," or "status reports," **Then** at least one inline link to the relevant PM leaf page has been added where the reference is substantive (not a passing mention).

**Given** `pnpm build`, **When** run, **Then** all updated links resolve.

### Story 12.3: Audit Deployment / Launch and Maintenance & Retainer for stale phase references

As a future reader of any post-Delivery phase,
I want any prose that says "in QA / Testing" or "in the Development phase" rephrased to refer to the corresponding sub-section under Delivery,
So that the IA implied by the prose matches the IA implied by the sidebar.

**Acceptance Criteria:**

**Given** every page under `src/content/docs/deployment-launch/` and `src/content/docs/maintenance-retainer/`, **When** searched for the literal strings "QA / Testing phase," "Development phase," "in QA," "in Development," "during QA," "during Development," and similar phase-level constructions, **Then** each match is reviewed and rephrased to refer to the corresponding sub-section (e.g. "the QA / Testing sub-section of Delivery" or simply "QA / Testing within Delivery") OR confirmed as already correct.

**Given** the same pages, **When** searched for `/development/` and `/qa-testing/` link patterns, **Then** every match has been rewritten to its new `/delivery/...` path.

**Given** `pnpm build`, **When** run, **Then** all updated links resolve and no schema/build errors appear.

**Given** `_bmad-output/implementation-artifacts/sprint-status.yaml`, **When** Epic 12 closes, **Then** `epic-12` is marked `done` and stories 12.1–12.3 are all `done`.
