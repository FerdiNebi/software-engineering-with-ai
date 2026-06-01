---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8]
lastStep: 8
status: 'complete'
completedAt: '2026-06-01'
inputDocuments:
  - "_bmad-output/planning-artifacts/prd-v2-ai.md"
  - "_bmad-output/planning-artifacts/prd.md"
  - "_bmad-output/planning-artifacts/architecture.md"
  - "_bmad-output/planning-artifacts/product-brief-Software-Development-with-AI.md"
  - "_bmad-output/planning-artifacts/ux-design-specification.md"
  - "src/content.config.ts"
  - "astro.config.mjs"
workflowType: 'architecture'
project_name: 'Software Development with AI'
user_name: 'Ferdi'
date: '2026-06-01'
documentVersion: 'v2-ai-addition'
parentDocument: '_bmad-output/planning-artifacts/architecture.md'
mode: "autonomous-creation"
additionalConstraints:
  - "Brownfield extension: every v1 architectural decision in architecture.md remains in force unless explicitly amended below. This document elaborates v2 deltas only."
  - "PRD source: prd-v2-ai.md (AD-1 through AD-7 captured at PRD level — this document operationalises them)."
  - "No new starter, no new runtime, no new deployment infrastructure. Astro Starlight + GitHub Pages stack persists."
---

# Architecture Decision Document (v2 — AI Addition)

_This document elaborates the architectural decisions required to ship the v2 AI tree as specified in [`prd-v2-ai.md`](./prd-v2-ai.md). It is a delta document — every v1 decision in [`architecture.md`](./architecture.md) remains in force unless explicitly amended here._

## Project Context Analysis

### Requirements Overview (v2 delta)

**Functional Requirements (19 v2 FRs over 4 categories):**

- **Site Navigation extension (FR-v2-1 – FR-v2-4):** Top-navigation control toggles between the v1 *Process* tree and the new *With AI* tree. Each tab has its own sidebar tree; switching tabs replaces the sidebar. Desktop and mobile both first-class. Mobile switch is one tap.
- **AI Content Discovery (FR-v2-5 – FR-v2-7):** Tab landing page at `/with-ai/`. Each v1 phase overview gains a 2–3 sentence "AI in this phase" callout linking forward. Each AI page back-links to its v1 process counterpart.
- **AI Page Content (FR-v2-8 – FR-v2-13):** Five H2 sections per AI page: *What changes when AI is in the loop / Tool-agnostic workflow / Battle-tested tools and how to use them / What is not yet ready / What the industry does*. Section structure consistent across every AI page.
- **AI Content Comprehension (FR-v2-14 – FR-v2-16):** AI pages stand alone (Priya's cherry-picking carries over). Contextual links between AI pages express cross-phase AI handoffs. Battle-tested versus open-research is visually distinguishable.
- **Content Management (FR-v2-17 – FR-v2-19):** Markdown/MDX editing only; sidebar via `astro.config.mjs`; individual tool listings updatable without touching section structure.

**Non-Functional Requirements (16 v2 NFRs over 5 categories):**

- **Build & Deploy (NFR-v2-1 – NFR-v2-3):** v1 NFR1–NFR3 carryover. Full v1+v2 build under 60s. Existing GitHub Actions pipeline; no new infrastructure.
- **Content Rendering (NFR-v2-4 – NFR-v2-7):** Static-first at build time. Top-navigation must work without JavaScript (CSS-derived active state from URL prefix). All v2 pages render legibly 320–2560px. Light and dark themes maintain v1 contrast budget.
- **Maintainability (NFR-v2-8 – NFR-v2-10):** Adding a new AI page is a Markdown edit + sidebar entry — no code changes. v2 content uses the same MD/MDX format as v1 with the Zod schema extended (`tree: 'process' | 'ai'` discriminator). Zero runtime dependencies preserved.
- **Cross-Tree Integrity (NFR-v2-11 – NFR-v2-13):** v1 process URLs unchanged. AI pages link back to process counterparts; link integrity verified at build time (manual at first, build-time link-checker remains a deferred enhancement). Zod schema enforces `tree` declaration — misplaced pages fail the build.
- **Voice & Editorial (NFR-v2-14 – NFR-v2-16):** Same practitioner voice as v1 — second person, declarative, agency frame, no hedging. Battle-tested rule elevated from convention to NFR — no unvalidated tool may ship. `lastUpdated` bumps on tool listing change, not just workflow change; >9-month-stale tool lists trigger content review.

**Scale & Complexity (v2 delta):**

- Content inventory: 60 v1 pages remain; v2 adds 9 AI pages (1 tab landing + 5 phase pages + 3 Delivery sub-stream pages). Total page count at v2 completion: **69 pages** (Starlight emits +1 for the built-in 404 → 70 HTML files in `dist/`).
- Primary domain: static documentation site (unchanged from v1).
- Complexity level: **low-medium** (v1 was "low"; the +0.5 step comes from the two-tree IA introducing routing-aware sidebar selection and a custom Header override — not a category shift).
- Estimated architectural components added: (1) custom Header.astro component for the top-nav UI; (2) custom Sidebar.astro component for routing-aware sidebar selection (or alternatively, a config-function approach — locked in §3 below); (3) Zod schema extension with `tree` discriminator; (4) split sidebar configuration in `astro.config.mjs`; (5) `with-ai/` content sub-tree.

### Technical Constraints & Dependencies (v2 delta)

- **Astro Starlight stays.** No framework swap. v2 reuses the same `@astrojs/starlight` integration, the same `withastro/action@v3` deployment, the same Node 22 / pnpm 10.33.2 pinning, the same base path (`/software-engineering-with-ai/`).
- **No new runtime dependencies.** The two-tree IA is achieved with Starlight's built-in component-override surface — no plugins, no client-side framework adoption, no edge-runtime work.
- **Browser support carries over.** No new browser-API surface introduced; the top-nav is HTML + CSS, JS optional.
- **Sidebar single-source-of-truth (v1 NFR7) amended.** The SSoT principle persists but the source is now split into two named exports (`processSidebar`, `aiSidebar`) consumed by the sidebar-selection mechanism. This is a refinement of the SSoT, not a violation.
- **Slug-immutability rule.** The v1 rule (slugs are immutable after deployment) applies to all `/with-ai/...` URLs from creation. The 2026-05-06 exception (Delivery restructure) does **not** create a precedent — the default remains immutability.

### Cross-Cutting Concerns Identified (v2 delta)

- **Routing-aware sidebar selection.** A single Starlight instance must render different sidebar trees depending on whether the current URL is under `/with-ai/` or not. Selection happens at request time (per page render), not at build time — Starlight builds the sidebar per page during static generation.
- **Top-nav active-state derivation.** Active tab indicator must come from URL prefix (URL starts with `/with-ai/` → "With AI" tab active, else "Process" tab active). No JavaScript dependency.
- **Cross-tree link integrity.** v2 introduces hundreds of new cross-links (process → AI callouts, AI → process back-links, AI → AI cross-phase). Build-time link validation remains manual in v2 (carryover of v1's deferred link-checker), but a `with-ai-link-audit.md` checklist is added to the content-review ritual.
- **Frontmatter tree discrimination.** Every non-home, non-reference page now declares `tree: 'process' | 'ai'`. The home page (`index.mdx`) and the two cross-lifecycle reference pages (`glossary.md`, `deliverables.md`) remain schema-exempt — they belong to neither tree. The `with-ai/index.md` tab landing page declares `tree: 'ai'` but uses a new `aiPageType: 'landing'` field to distinguish it from working pages.
- **Mobile sidebar tree switch.** Starlight's mobile menu currently renders one sidebar. v2's mobile switch must surface the active tab inside the mobile menu without breaking Starlight's responsive defaults — handled by the Header.astro override component.
- **Build-output growth.** Adding 9 pages with image-light content is a +15% increase in `dist/` page count. NFR-v2-2 (build under 60s) has comfortable headroom (v1 baseline 12–22s at 60 pages; v2 estimate 14–25s at 69 pages on the same hardware).

## Starter Template Evaluation

### Decision: No new starter; v1 starter persists

**Rationale:** v1 was scaffolded from `pnpm create astro@latest -- --template starlight --typescript strict`. v2 introduces no framework shift, no new runtime, and no new build step. The v1 starter remains the canonical starting point; v2 work is an in-place extension of the existing project.

**Implication:** No initialization story is needed for v2. The first v2 implementation story is the schema extension (see §3 below), not a fresh scaffold.

**Versions confirmed (as of v2 architecture date 2026-06-01):**

- `astro` — latest pinned in `package.json` at v2 commencement (current main branch state).
- `@astrojs/starlight` — latest pinned in `package.json` at v2 commencement.
- `@astrojs/mdx` — latest pinned (used for `index.mdx` home and proposed for richer AI pages with embedded components).
- `@astrojs/sitemap` — latest pinned.
- `node` — 22 LTS (per `.nvmrc`).
- `pnpm` — 10.33.2 (per `packageManager` in `package.json`).

**Plugin additions:** none required for v2. Specifically:

- No "tabs" plugin — top-nav is a custom Header.astro override using plain HTML/CSS.
- No JS-runtime sidebar plugin — sidebar selection is build-time-resolvable per Astro page.
- No version-switcher integration — although Starlight's version-switcher pattern is conceptually close, v2 does not adopt it. The "Process vs With AI" axis is a content-namespace switch, not a version switch; reusing the version-switcher widget would falsely signal that v1 is stale and v2 is current.

## Core Architectural Decisions

### Decision Priority Analysis

**Critical decisions (block v2 implementation):**

- AD-V2-1: Sidebar split with routing-aware selection.
- AD-V2-2: Custom Header.astro for top-nav UI.
- AD-V2-3: Frontmatter schema extension — `tree` discriminator + `aiPageType` qualifier.
- AD-V2-4: URL namespace `/with-ai/...` and file-layout convention under `src/content/docs/with-ai/`.

**Important decisions (shape v2 architecture):**

- AD-V2-5: Active-tab state derivation purely from URL prefix.
- AD-V2-6: Per-phase-overview "AI in this phase" callout as a shared Astro component (single source of callout markup).
- AD-V2-7: AI page MDX-by-default policy (vs. v1's Markdown-by-default) because AI pages link to many tools and use embedded `<details>` collapsibles for tool deep-dives.
- AD-V2-8: Sidebar-config module split (`astro.config.mjs` thinner; sidebar data moves to `src/sidebar/` for two named exports).

**Deferred decisions (post-v2 or on demand):**

- AD-V2-9: Tool-listing component (`<BattleTested>`) for structured rendering of "tool name + how to use + validation date". Defer to first AI page authored if Markdown rendering is sufficient; introduce a component only if Markdown drift surfaces.
- AD-V2-10: Build-time cross-tree link checker. Defer to post-v2 — same trigger as v1's deferred link-checker.

### AD-V2-1: Sidebar split with routing-aware selection (operationalises AD-6)

**Decision:** Replace the single `sidebar: [...]` array in `astro.config.mjs` with a routing-aware mechanism that returns the *process* sidebar for any URL not under `/with-ai/` and the *AI* sidebar for any URL that is.

**Mechanism: Sidebar as Starlight component override.**

- A custom `src/components/Sidebar.astro` overrides Starlight's default sidebar.
- The component reads `Astro.url.pathname` and the configured base path.
- If `pathname.startsWith(base + 'with-ai/')` → render the AI sidebar tree.
- Else → render the Process sidebar tree.
- Both sidebar trees are imported from `src/sidebar/process.ts` and `src/sidebar/ai.ts` as plain TypeScript modules exporting Starlight-compatible `SidebarItem[]` arrays.
- The Starlight default sidebar styling (caret, indent, current-page highlighting) is preserved by composing Starlight's `<SidebarSublist>` primitive inside the override.

**Why this over the alternatives:**

- **Versus a single concatenated sidebar with both trees visible:** rejected — pollutes the sidebar with the inactive tree and forces every reader to scroll past content they don't want.
- **Versus CSS-hidden inactive tree (`display: none` on the wrong-tree groups):** rejected — leaks inactive-tree markup into the HTML payload, defeats Pagefind scope, harms SEO (links exist in DOM but are invisible), and creates a class of "render bugs" where CSS fails and both trees flash.
- **Versus per-collection separate Starlight instances:** rejected — Starlight does not support two instances in one site; even if hackable, it would duplicate the header and break theming.
- **Versus middleware-based sidebar injection:** considered — viable, but Starlight component override is the documented extension surface. Middleware approach reserved as fallback if the component-override path hits a Starlight API constraint.

**Component override registration (in `astro.config.mjs`):**

```js
starlight({
  // ...existing...
  components: {
    Sidebar: './src/components/Sidebar.astro',
    Header: './src/components/Header.astro',
  },
  // sidebar field still set, used as the merged source the override consumes
  sidebar: [...processSidebar, ...aiSidebar],
})
```

The `sidebar` array fed to Starlight still contains both trees (necessary so Starlight builds prev/next nav for AI-tree pages). The custom Sidebar.astro filters which subset to render. The merge order is `process` first, then `ai` — chosen so the natural Pagefind ordering keeps Process content surfaces first in the default index.

### AD-V2-2: Custom Header.astro for top-nav UI (operationalises AD-6)

**Decision:** Override Starlight's `Header` slot with `src/components/Header.astro` to render the top-navigation control above the existing search/theme-toggle row.

**UI specification:**

- Two top-nav links rendered as a horizontal pair, left-aligned next to the site title (or below the title on narrow viewports).
  - **Process** → `/` (the v1 tree root).
  - **With AI** → `/with-ai/` (the v2 tree root).
- Active-tab indicator: bottom border (or pill background) on the link whose URL prefix matches the current page. Visible against both light and dark themes; meets the v1 contrast budget (NFR-v2-7).
- Mobile: the two links remain visible inside the mobile header bar (not buried inside the hamburger menu). One tap to switch — satisfies FR-v2-4.
- No JavaScript required. Active state is computed at render time from `Astro.url.pathname`.

**Composition with Starlight defaults:**

- The custom Header.astro renders the original Starlight header markup (site title, search trigger, theme toggle, social icons) via `<starlight-header-default />` or by composing the Starlight sub-components (`<SiteTitle />`, `<Search />`, `<ThemeSelect />`, `<SocialIcons />`). It inserts the top-nav as a sibling region, not a replacement.
- The two top-nav links use plain `<a>` elements with leading-slash hrefs. The remark-base-path plugin (already in v1) rewrites them at build time to include the GitHub Pages base path.

### AD-V2-3: Frontmatter schema extension — `tree` discriminator + `aiPageType` qualifier (operationalises AD-7 indirectly)

**Decision:** Extend the existing Zod schema in `src/content.config.ts` with two new fields:

- `tree: 'process' | 'ai'` — required for any page that already requires `type`/`phase`/`order`. Defaults to undefined; the `superRefine` rule pulls `tree` into the same required-set as `type`/`phase`/`order`.
- `aiPageType: 'landing' | 'phase' | 'delivery-stream'` — optional, only meaningful when `tree === 'ai'`. The `superRefine` rule enforces:
  - If `tree === 'ai'`, `aiPageType` is required.
  - If `tree === 'process'`, `aiPageType` must be undefined (extra-strict rejection — prevents accidental field bleed across trees).
  - If `aiPageType === 'landing'`, `phase` is forbidden (the AI tab landing is not phase-bound) and `order` is forbidden (it sits at the root of the AI tree).
  - If `aiPageType === 'phase'`, `phase` is required and must be a valid phase slug; the page lives at `with-ai/<phase>.md` or `with-ai/<phase>.mdx`.
  - If `aiPageType === 'delivery-stream'`, `phase: 'delivery'` is required and a new `deliveryStream: 'project-management' | 'development' | 'qa-testing'` field is required; the page lives at `with-ai/delivery/<stream>.md` or `.mdx`.

**Why `deliveryStream` instead of relying on file path alone (the v1 approach):**

- The v1 sub-section identity is encoded purely in file path (`delivery/development/foo.md`). v2 has only one page per Delivery stream (`with-ai/delivery/development.md`), so file-path encoding still works — but the v2 sidebar tree's `aiPageType: 'delivery-stream'` group needs a discriminator field for sidebar grouping. Encoding `deliveryStream` in frontmatter keeps the sidebar build a pure data transform rather than a path-parsing exercise.
- This is a deliberate departure from v1's file-path-only convention (documented in v1 architecture.md story 10.1, 2026-05-06). The departure is scoped to the AI tree; v1 pages continue to rely on file-path encoding.

**Final schema shape:**

```ts
const aiPageType = z.enum(['landing', 'phase', 'delivery-stream']);
const deliveryStream = z.enum(['project-management', 'development', 'qa-testing']);
const tree = z.enum(['process', 'ai']);

const extend = z
  .object({
    type: z.enum(['phase-overview', 'sub-section']).optional(),
    phase: phaseSlug.optional(),
    order: z.number().int().optional(),
    status: z.enum(['v1', 'v2-ai-ready']).optional(),
    tree: tree.optional(),
    aiPageType: aiPageType.optional(),
    deliveryStream: deliveryStream.optional(),
  })
  .superRefine((data, ctx) => {
    const isContent =
      data.type !== undefined ||
      data.phase !== undefined ||
      data.order !== undefined ||
      data.tree !== undefined ||
      data.aiPageType !== undefined;
    if (!isContent) return;

    // tree is required for all content pages
    if (data.tree === undefined) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['tree'],
        message: "Required for non-home, non-reference pages: 'process' or 'ai'." });
    }

    // process-tree pages: existing v1 rules apply unchanged
    if (data.tree === 'process') {
      if (data.aiPageType !== undefined) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['aiPageType'],
          message: "Forbidden on process-tree pages." });
      }
      if (data.deliveryStream !== undefined) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['deliveryStream'],
          message: "Forbidden on process-tree pages." });
      }
      // v1 required-set
      if (data.type === undefined) {/* same as v1 issue */}
      if (data.phase === undefined) {/* same as v1 issue */}
      if (data.order === undefined) {/* same as v1 issue */}
    }

    // ai-tree pages: new rules
    if (data.tree === 'ai') {
      if (data.aiPageType === undefined) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['aiPageType'],
          message: "Required on AI-tree pages: 'landing', 'phase', or 'delivery-stream'." });
      }
      if (data.aiPageType === 'landing') {
        if (data.phase !== undefined || data.order !== undefined || data.type !== undefined) {
          ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['phase'],
            message: "AI landing page must not declare phase/order/type." });
        }
      }
      if (data.aiPageType === 'phase') {
        if (data.phase === undefined) {/* required */}
        if (data.order === undefined) {/* required for sibling sort */}
      }
      if (data.aiPageType === 'delivery-stream') {
        if (data.phase !== 'delivery') {/* must be delivery */}
        if (data.deliveryStream === undefined) {/* required */}
        if (data.order === undefined) {/* required */}
      }
    }
  });
```

The 2026-05-06 schema-exemption rule for `glossary.md` and `deliverables.md` (no `phase`/`type`/`order` fields) carries forward unchanged. Those two reference pages also do not declare `tree`. The two reference pages remain accessible from both trees via the Reference sidebar group, which appears at the bottom of both Process and AI sidebars (decision in AD-V2-8 below).

### AD-V2-4: URL namespace `/with-ai/...` and file-layout convention (operationalises AD-7)

**Decision:**

```
src/content/docs/with-ai/
├── index.mdx                                   # Tab landing (aiPageType: 'landing')
├── pre-sales.mdx                                # phase: pre-sales
├── discovery.mdx                                # phase: discovery
├── requirements-design.mdx                      # phase: requirements-design
├── deployment-launch.mdx                        # phase: deployment-launch
├── maintenance-retainer.mdx                     # phase: maintenance-retainer
└── delivery/
    ├── project-management.mdx                   # deliveryStream: project-management
    ├── development.mdx                          # deliveryStream: development
    └── qa-testing.mdx                           # deliveryStream: qa-testing
```

**URL → file mapping (Starlight auto-derives):**

| URL | File |
|---|---|
| `/with-ai/` | `with-ai/index.mdx` |
| `/with-ai/pre-sales/` | `with-ai/pre-sales.mdx` |
| `/with-ai/discovery/` | `with-ai/discovery.mdx` |
| `/with-ai/requirements-design/` | `with-ai/requirements-design.mdx` |
| `/with-ai/delivery/project-management/` | `with-ai/delivery/project-management.mdx` |
| `/with-ai/delivery/development/` | `with-ai/delivery/development.mdx` |
| `/with-ai/delivery/qa-testing/` | `with-ai/delivery/qa-testing.mdx` |
| `/with-ai/deployment-launch/` | `with-ai/deployment-launch.mdx` |
| `/with-ai/maintenance-retainer/` | `with-ai/maintenance-retainer.mdx` |

**File extension choice:** `.mdx` (not `.md`) for every AI page. Justified by:

- The "Battle-tested tools" section is expected to use `<details>` collapsibles, callout components, and possibly a shared `<ToolCard>` component (deferred per AD-V2-9). MDX is required for component imports.
- The tab landing page (`with-ai/index.mdx`) already needs MDX to render a navigable phase grid (mirroring v1's `index.mdx` PhaseList component).
- Using `.mdx` uniformly across the AI tree avoids per-file extension decisions and keeps cross-link conventions identical.

**Slug-immutability:** all `/with-ai/...` slugs are immutable from the date of first deployment. The 2026-05-06 Delivery-restructure exception does not apply prospectively. Any future rename requires either a redirect entry in `astro.config.mjs` or an explicit exception logged in the architecture revision section.

### AD-V2-5: Active-tab state derived from URL prefix

**Decision:** The active tab in the top-nav is derived at render time from `Astro.url.pathname`:

```ts
const aiPrefix = base + 'with-ai/';
const isAiTree = Astro.url.pathname.startsWith(aiPrefix);
```

Where `base` is `/software-engineering-with-ai/` (the configured GitHub Pages base). The check uses `pathname.startsWith(aiPrefix)` and **not** an exact-match — `/with-ai/`, `/with-ai/`, `/with-ai/discovery/`, `/with-ai/delivery/development/` all activate the "With AI" tab.

**Edge cases:**

- The two reference pages (`/glossary/` and `/deliverables/`) are tree-agnostic. When viewed from either tree, the URL does not start with `/with-ai/`, so the Process tab will appear active. This is acceptable — the reference pages are reached primarily from the Reference sidebar group which appears at the bottom of both trees, so readers do not lose orientation.
- A planned redirect for the home page (`/`) under the AI tree (e.g. `/with-ai`) → `/with-ai/`: handled by Starlight's default trailing-slash redirect behaviour.

### AD-V2-6: "AI in this phase" callout as a shared Astro component

**Decision:** Add `src/components/AiCallout.astro` — a small banner-style component rendered near the top of each v1 phase overview page. The component takes one prop (`href: string` — the URL of the corresponding AI page) and renders a fixed-format 2–3 sentence callout pointing to the AI tree.

**Why a component, not inline Markdown:**

- The callout text is intentionally short and uniform across phases. A shared component guarantees the format does not drift across the six phase overviews.
- Future changes to the callout (e.g., adding a "What you'll find there" line) happen in one place.
- The callout's visual styling (background, border, icon) lives in a single CSS scope.

**Usage on each v1 phase overview page (e.g. `discovery/index.md` → upgrade to `.mdx`, or use MDX-in-Markdown via `<a>` if avoiding extension change):**

If the phase overview files remain `.md`, the callout is rendered as a plain blockquote with frontmatter-aware link generation handled by the remark-base-path plugin:

```markdown
> **AI in this phase.** AI assistance in [Discovery](/with-ai/discovery/) compresses interview-synthesis and workshop-prep cycles, but the workshop itself remains human-led. See the AI tree for battle-tested tools and the workflows the agency has standardised on.
```

Decision: **keep phase overview files as `.md` and use a Markdown blockquote pattern.** Reason — converting six existing `.md` files to `.mdx` to enable component import creates v1-tree churn (file extension changes are visible in git history and require a sweep). The blockquote pattern produces the same outcome with no v1 file extension changes. The "single source of truth for the callout markup" goal is preserved by treating the callout as a **content snippet** stored in `src/snippets/ai-callout-<phase>.md` and inlined into each phase overview via MDX `import` — only adopted if the blockquote pattern shows drift after first publication.

**Revised rule:** v2 ships the callout as an inline Markdown blockquote in each `<phase>/index.md`. The blockquote text is reviewed for uniformity at PR-review time. If drift is observed in the first 90 days, AD-V2-6 escalates to the snippet-import pattern.

### AD-V2-7: AI pages are MDX by default

**Decision:** Every page under `src/content/docs/with-ai/` uses `.mdx`, not `.md`. Confirmed in AD-V2-4 above; restated here as a content-authoring rule.

**Implication:** The first AI implementation story scaffolds the `with-ai/` directory with `.mdx` files containing the section skeleton (the five H2s, frontmatter, back-link to process counterpart) — even before tool research is complete. Pages that haven't yet had tool research replace section 3 ("Battle-tested tools and how to use them") with a placeholder note: *"Tool research is in progress; this page will list battle-tested tool recommendations as they are validated in real delivery."*

### AD-V2-8: Sidebar configuration module split

**Decision:** Move sidebar data out of `astro.config.mjs` into:

- `src/sidebar/process.ts` — exports `processSidebar: StarlightSidebarItem[]` (the six phase groups + Reference group).
- `src/sidebar/ai.ts` — exports `aiSidebar: StarlightSidebarItem[]` (the AI tree groups: landing implicit + five phases + Delivery sub-group + Reference group).
- `astro.config.mjs` imports both modules and concatenates: `sidebar: [...processSidebar, ...aiSidebar]`. The custom Sidebar.astro consumes the URL and renders the right subset.

**Why two modules over one file with both arrays:**

- Each tree is large (process: 6 groups, 60 pages; AI: 6 groups, 9 pages). Splitting into modules keeps each file scannable.
- The two trees update on independent cadences (v1 update: semi-annual; v2 tool listings: quarterly). Separate modules localise git churn — a quarterly AI tool refresh touches only `src/sidebar/ai.ts`, not `astro.config.mjs`.
- The Reference sidebar group appears at the bottom of both trees. To keep it a single source of truth, a third module — `src/sidebar/reference.ts` — exports `referenceSidebar` and is imported by both `process.ts` and `ai.ts`.

**Reference sidebar group structure (shared):**

```ts
// src/sidebar/reference.ts
export const referenceSidebar = {
  label: 'Reference',
  items: [
    { label: 'Deliverables across the lifecycle', slug: 'deliverables' },
    { label: 'Glossary', slug: 'glossary' },
  ],
};
```

The Reference group is appended to both `processSidebar` and `aiSidebar` as the last item, so glossary and deliverables are reachable from both trees without re-routing.

## Implementation Patterns & Consistency Rules

### Pattern Categories Defined (v2 delta)

v2 introduces no new pattern categories beyond what v1 documented. The v1 patterns (frontmatter, headings, internal links, file layout, components, imports, Git workflow) carry forward unchanged with the following additions/amendments.

### Content Authoring Patterns (v2 amendments)

**Frontmatter for AI-tree pages (new):**

```yaml
---
title: "AI in Discovery"
description: "Battle-tested AI workflows for Discovery — interview synthesis, workshop prep, prototype generation, deliverable drafting."
tree: "ai"
aiPageType: "phase"
phase: "discovery"
order: 2
lastUpdated: 2026-06-01
---
```

**Frontmatter for AI tab landing (new):**

```yaml
---
title: "Software Engineering with AI"
description: "The AI execution layer across the agency lifecycle — tool-agnostic workflows plus battle-tested tools validated in real delivery."
tree: "ai"
aiPageType: "landing"
lastUpdated: 2026-06-01
---
```

**Frontmatter for AI Delivery sub-stream pages (new):**

```yaml
---
title: "AI in Development"
description: "Battle-tested AI workflows for the development sub-stream of Delivery — agentic coding loops, AI-assisted review, dependency automation."
tree: "ai"
aiPageType: "delivery-stream"
phase: "delivery"
deliveryStream: "development"
order: 2
lastUpdated: 2026-06-01
---
```

**Frontmatter for v1 process pages (amended — `tree: 'process'` added):**

```yaml
---
title: "Requirements Workshops"
description: "How to run collaborative requirements-gathering sessions with client stakeholders."
type: "sub-section"
phase: "discovery"
order: 2
tree: "process"
lastUpdated: 2026-04-20
---
```

**Migration approach:** the schema rule treats `tree` as required only when other content fields are present. To roll this out without breaking the v1 build at the moment of schema change:

1. Land schema extension making `tree` optional initially (zero-impact deploy).
2. Sweep all 60 v1 pages adding `tree: 'process'` via a scripted edit.
3. Promote `tree` to required (rule pulls it into the existing required-set).

Story sequencing: schema-permissive deploy → frontmatter sweep PR → schema-strict deploy. Each step is independently revertible.

**Markdown heading template for AI pages (FR-v2-8 to FR-v2-13 enforcement):**

Every AI working page contains exactly these five H2 headings, in this order, with these exact strings:

```markdown
## What changes when AI is in the loop
## Tool-agnostic workflow
## Battle-tested tools and how to use them
## What is not yet ready
## What the industry does
```

- The AI tab landing (`with-ai/index.mdx`) is template-exempt — it is structurally an index, not a content page. Same exemption v1 home page enjoys.
- No H1 in body — Starlight renders title from frontmatter.
- Section 3 ("Battle-tested tools…") may be replaced with a placeholder note when no validated tools are listed yet — see AD-V2-7. The placeholder text is uniform across pages: *"Tool research is in progress; this page will list battle-tested tool recommendations as they are validated in real delivery."*

**Internal-link convention for cross-tree links:**

- Process page → AI page: `[See the AI workflow](/with-ai/discovery/)`. Leading slash; Starlight resolves against `base`.
- AI page → Process page (back-link near top of page): `[Process reference: Discovery](/discovery/)`.
- AI page → AI page (cross-phase handoff): `[Pre-Sales AI workflow](/with-ai/pre-sales/)`.
- Never hardcode the full GitHub Pages URL.
- Never use relative `../` between trees.

**Content tone & voice (NFR-v2-14):**

- Same practitioner voice as v1. Second person, declarative, no hedging.
- Tool recommendations are stated as the author's experience: *"Use Otter for live transcription; the speaker-diarisation is the best you can get for the price."* Not *"Otter is generally considered a good transcription tool."*
- The "What is not yet ready" section names anti-patterns concretely, not abstractly: *"Don't feed a 100-FR document into a chat window; use a structured prompt that processes 10 FRs at a time."*

### Battle-tested-rule enforcement (NFR-v2-15)

**Pattern:** Every tool listed in section 3 of any AI page must have a documented validation trail. The validation trail lives **outside the published site** — in a private editorial log (`docs/with-ai-validation-log.md`, gitignored if public sharing of client identifiers is sensitive; or a private Notion table).

**Validation entry structure:**

| Tool | First validated | Engagement (anonymised) | What was tested | Outcome |
|---|---|---|---|---|
| Otter | 2025-11-12 | Series-B fintech, discovery week | Speaker-diarised transcription of 4 stakeholder interviews | Synthesis time cut from 6h to 1.5h; speaker attribution accurate enough to quote |
| Claude (4.5 Sonnet) | 2025-10-08 | Public-sector RFP response | Proposal-section drafting from win-themes brief | First-draft quality reduced editing time ~60% |

**Editorial rule:** No tool may appear on a published AI page without an entry in the validation log. PR review for AI-page changes blocks merge if the validation log lacks the listed tools.

**Staleness rule (NFR-v2-16):** A tool entry > 9 months old without a refresh validation entry is flagged in the next content-review cycle. Tools that fail revalidation are removed from the published page (with a note in the validation log explaining why) — they are not silently kept.

### File & Folder Structure Patterns (v2 amendments)

**Content file layout (full v2 picture):**

```
src/content/docs/
├── index.mdx                                   # v1 home (unchanged)
├── glossary.md                                 # cross-lifecycle reference (unchanged)
├── deliverables.md                             # cross-lifecycle reference (unchanged)
├── pre-sales/                                  # v1 — unchanged file structure, `tree: 'process'` added to each frontmatter
├── discovery/                                  # v1 — unchanged structure, `tree: 'process'` added
├── requirements-design/                        # v1 — unchanged structure, `tree: 'process'` added
├── delivery/                                   # v1 — unchanged structure, `tree: 'process'` added
├── deployment-launch/                          # v1 — unchanged structure, `tree: 'process'` added
├── maintenance-retainer/                       # v1 — unchanged structure, `tree: 'process'` added
└── with-ai/                                    # NEW v2 tree
    ├── index.mdx                               # tab landing — aiPageType: 'landing'
    ├── pre-sales.mdx                            # aiPageType: 'phase', phase: 'pre-sales'
    ├── discovery.mdx                            # aiPageType: 'phase', phase: 'discovery'
    ├── requirements-design.mdx                  # aiPageType: 'phase', phase: 'requirements-design'
    ├── deployment-launch.mdx                    # aiPageType: 'phase', phase: 'deployment-launch'
    ├── maintenance-retainer.mdx                 # aiPageType: 'phase', phase: 'maintenance-retainer'
    └── delivery/
        ├── project-management.mdx              # aiPageType: 'delivery-stream', deliveryStream: 'project-management'
        ├── development.mdx                     # aiPageType: 'delivery-stream', deliveryStream: 'development'
        └── qa-testing.mdx                      # aiPageType: 'delivery-stream', deliveryStream: 'qa-testing'
```

**Page count check (post-v2):** 60 v1 pages + 9 v2 pages = **69 pages**. Starlight emits an additional 404 → 70 HTML files in `dist/`.

**Component/code file layout (v2 amendments):**

```
src/
├── components/
│   ├── Header.astro                            # NEW v2 — top-nav override (Starlight components.Header)
│   ├── Sidebar.astro                           # NEW v2 — routing-aware sidebar override (Starlight components.Sidebar)
│   ├── AiCallout.astro                         # OPTIONAL v2 — only if Markdown-blockquote pattern drifts (see AD-V2-6)
│   ├── PhaseList.astro                         # v1 — used on home; unchanged in v2
│   └── islands/                                # v1 — empty in v1, expected empty in v2 (no client-side framework adoption)
├── sidebar/                                    # NEW v2 directory
│   ├── process.ts                              # NEW v2 — exports processSidebar
│   ├── ai.ts                                   # NEW v2 — exports aiSidebar
│   └── reference.ts                            # NEW v2 — exports referenceSidebar (shared)
├── content.config.ts                            # MODIFIED v2 — adds tree, aiPageType, deliveryStream
├── styles/
│   └── theme.css                                # v1 — extended with .top-nav and .ai-callout styles
└── ...
```

### Code Patterns (v2 amendments)

**Component naming:** `Header.astro`, `Sidebar.astro`, `AiCallout.astro` — PascalCase, matching v1's `PhaseList.astro` convention.

**Sidebar module shape:**

```ts
// src/sidebar/process.ts
import { referenceSidebar } from './reference';
import type { StarlightUserConfig } from '@astrojs/starlight/types';

export const processSidebar: NonNullable<StarlightUserConfig['sidebar']> = [
  { label: '1. Pre-Sales & Business Development', items: [/* ... */] },
  { label: '2. Discovery', items: [/* ... */] },
  // ... other 4 phase groups ...
  referenceSidebar,
];
```

```ts
// src/sidebar/ai.ts
import { referenceSidebar } from './reference';

export const aiSidebar = [
  {
    label: 'With AI',
    items: [
      { label: 'Overview', slug: 'with-ai' },
      { label: 'Pre-Sales', slug: 'with-ai/pre-sales' },
      { label: 'Discovery', slug: 'with-ai/discovery' },
      { label: 'Requirements & Design', slug: 'with-ai/requirements-design' },
      {
        label: 'Delivery',
        items: [
          { label: 'Project Management', slug: 'with-ai/delivery/project-management' },
          { label: 'Development', slug: 'with-ai/delivery/development' },
          { label: 'QA / Testing', slug: 'with-ai/delivery/qa-testing' },
        ],
      },
      { label: 'Deployment / Launch', slug: 'with-ai/deployment-launch' },
      { label: 'Maintenance & Retainer', slug: 'with-ai/maintenance-retainer' },
    ],
  },
  referenceSidebar,
];
```

**Sidebar.astro override skeleton:**

```astro
---
// src/components/Sidebar.astro
import Default from '@astrojs/starlight/components/Sidebar.astro';
import { processSidebar } from '../sidebar/process';
import { aiSidebar } from '../sidebar/ai';

const base = import.meta.env.BASE_URL;
const aiPrefix = base.replace(/\/?$/, '/') + 'with-ai/';
const isAiTree = Astro.url.pathname.startsWith(aiPrefix);
const sidebar = isAiTree ? aiSidebar : processSidebar;
---

<Default {...Astro.props} sidebar={sidebar} />
```

Note: the exact Starlight prop-passing surface for component overrides is verified at first implementation story; if `<Default sidebar={sidebar} />` is not the correct prop shape, the override re-implements the sidebar list rendering using Starlight's `<SidebarSublist>` primitive.

**Header.astro override skeleton:**

```astro
---
// src/components/Header.astro
import Default from '@astrojs/starlight/components/Header.astro';

const base = import.meta.env.BASE_URL;
const aiPrefix = base.replace(/\/?$/, '/') + 'with-ai/';
const isAiTree = Astro.url.pathname.startsWith(aiPrefix);
---

<div class="top-nav" role="navigation" aria-label="Tree switch">
  <a href={base} class:list={['top-nav-link', { active: !isAiTree }]}>Process</a>
  <a href={aiPrefix} class:list={['top-nav-link', { active: isAiTree }]}>With AI</a>
</div>
<Default {...Astro.props} />
```

### Git & Workflow Patterns (v2 additions)

- **Branch strategy:** v1 conventions unchanged. v2 feature branches: `feat/v2-<short-name>` for infrastructure work (e.g., `feat/v2-sidebar-split`), `content/with-ai-<phase>` for AI page authoring.
- **Commit scope:** new `content(with-ai):` scope for AI page content commits. Existing `feat:` and `chore:` scopes used for infrastructure.
- **CI gate:** every PR runs `pnpm build`. v2 introduces no new CI steps; the existing build catches schema violations from the extended Zod rules.

### Enforcement Guidelines (v2 amendments)

**All AI agents MUST:**

- Declare `tree` on every non-home, non-reference page.
- Declare `aiPageType` on every AI-tree page; declare `deliveryStream` on every `aiPageType: 'delivery-stream'` page.
- Use `.mdx` for all `src/content/docs/with-ai/...` pages.
- Use the five-H2 AI page template exactly as documented; substitute the placeholder for section 3 only when no validated tools are listed.
- Place all sidebar data in `src/sidebar/*.ts` modules; do not inline new sidebar items in `astro.config.mjs`.
- Use the leading-slash link convention for all cross-tree links.
- Add a validation log entry before adding a tool to a published AI page.

**Pattern enforcement:**

- **Schema-level (build time):** Zod schema rejects bad frontmatter; build fails on missing `tree`/`aiPageType`/`deliveryStream` where required.
- **Convention-level (PR review):** five-H2 heading conformance, battle-tested rule, voice rule.
- **Editorial-level (out of repo):** validation log, dated entries, refresh cadence.

## Project Structure & Boundaries (v2 amendments)

### Architectural Boundaries (v2 additions)

**Tree boundary (NEW):**

- Process-tree content: anything not under `src/content/docs/with-ai/`.
- AI-tree content: anything under `src/content/docs/with-ai/`.
- Reference content (tree-agnostic): `src/content/docs/glossary.md`, `src/content/docs/deliverables.md`.
- Mixing trees within a single file is forbidden — no embed-AI-content-in-process-page, no embed-process-content-in-AI-page. Cross-references are links, not content embeds.

**Sidebar boundary (NEW):**

- Sidebar data lives in `src/sidebar/*.ts`. `astro.config.mjs` imports and composes; it never carries sidebar data inline (after the v2 split).
- The Reference group lives in `src/sidebar/reference.ts` and is imported by both `process.ts` and `ai.ts`. Modifications to Reference happen in one place.

**Component override boundary (NEW):**

- Starlight component overrides live in `src/components/Header.astro` and `src/components/Sidebar.astro`.
- Overrides must compose Starlight defaults (not replace them wholesale) so that Starlight upstream improvements (theming, accessibility, mobile responsiveness) continue to apply.
- An override that re-implements a Starlight subsystem (e.g., a sidebar that does not use Starlight primitives) is rejected at PR review.

### Requirements to Structure Mapping (v2)

**v2 FR Category → Primary Location:**

| FR category | Primary location | Notes |
|---|---|---|
| FR-v2-1 – FR-v2-4 (top-nav, tree switch) | `src/components/Header.astro` + `src/components/Sidebar.astro` | Two Starlight component overrides; URL-prefix-derived active state |
| FR-v2-5 (tab landing) | `src/content/docs/with-ai/index.mdx` | MDX index with navigable phase grid |
| FR-v2-6 (callout on v1 phase overviews) | 6 phase overview `.md` files (inline blockquote pattern) | Snippet-import escalation deferred to AD-V2-6 follow-up |
| FR-v2-7 (back-link from AI pages) | Convention — top-of-page link in each AI `.mdx` | PR-review enforced |
| FR-v2-8 – FR-v2-13 (5-section template) | Markdown body of AI `.mdx` files | Heading template enforced by authoring convention; remark-lint deferred |
| FR-v2-14 (stand-alone AI pages) | Authoring convention | Same Priya-cherry-pick standard as v1 |
| FR-v2-15 (cross-phase AI links) | Authoring convention; inline links in AI page bodies | |
| FR-v2-16 (validated vs research-pending distinction) | Section 3 vs placeholder text + frontmatter `status` field carryover | Status field already in v1 schema |
| FR-v2-17 (Markdown editing) | `src/content/docs/with-ai/*.mdx` | Same path as v1 |
| FR-v2-18 (sidebar config) | `src/sidebar/*.ts` | Module split; `astro.config.mjs` composes |
| FR-v2-19 (tool listing edits) | Inline within Section 3 of each AI page | No component dependency for v2 |

**v2 NFR → Location:**

| NFR | Location | Notes |
|---|---|---|
| NFR-v2-1 (clean-clone build) | `package.json` + `pnpm-lock.yaml` | Unchanged from v1 |
| NFR-v2-2 (<60s build) | Astro/Vite pipeline | Adds ~2-3s for 9 pages; ample headroom |
| NFR-v2-3 (existing CI/CD) | `.github/workflows/deploy.yml` | Unchanged |
| NFR-v2-4 (static-first, no runtime LLM) | Starlight SSG | Unchanged |
| NFR-v2-5 (top-nav works without JS) | `Header.astro` CSS-only active state | Pure HTML/CSS implementation |
| NFR-v2-6 (responsive 320–2560px) | Starlight default + Header.astro CSS | Header CSS must hold up at narrow widths |
| NFR-v2-7 (light/dark contrast) | `src/styles/theme.css` for new components | New `.top-nav-link` and `.top-nav-link.active` rules |
| NFR-v2-8 (add page = Markdown + config) | `src/content/docs/with-ai/*.mdx` + `src/sidebar/ai.ts` | Two-file change |
| NFR-v2-9 (Markdown/MDX + Zod extension) | `src/content.config.ts` | Schema extension lands as documented in AD-V2-3 |
| NFR-v2-10 (zero runtime deps) | Static build | Unchanged |
| NFR-v2-11 (v1 URLs unchanged) | No v1 file moves; v1 sidebar slugs unchanged | Verified at first build of v2 |
| NFR-v2-12 (cross-tree link integrity) | Manual at first; deferred build-time check | Same deferred-link-checker as v1 |
| NFR-v2-13 (schema enforces tree discriminator) | `src/content.config.ts` superRefine | Build fails on missing `tree` for content pages |
| NFR-v2-14 (voice continuity) | PR-review enforcement | No code; editorial |
| NFR-v2-15 (battle-tested rule) | Validation log + PR-review | No code; editorial NFR |
| NFR-v2-16 (lastUpdated freshness) | Frontmatter discipline + 9-month review trigger | Editorial |

### Integration Points (v2 additions)

**Internal communication:**

- **Sidebar modules ↔ Astro config:** `astro.config.mjs` imports from `src/sidebar/*.ts` at build time. TypeScript type-checks the imports against Starlight's `StarlightUserConfig['sidebar']` shape.
- **Component overrides ↔ Starlight runtime:** `src/components/Sidebar.astro` and `Header.astro` are registered in the Starlight integration `components` field. Starlight invokes them at page-render time with the same prop surface as the defaults.
- **Schema ↔ Content:** `src/content.config.ts` validates every `.md` and `.mdx` file in the docs collection at build time. AI-tree pages fail loudly if `tree`/`aiPageType`/`deliveryStream` are missing or contradict each other.

**External integrations:** none added in v2. No new analytics, no new CDN, no new third-party scripts.

### Development Workflow Integration (v2 amendments)

- `pnpm dev` works against v1+v2 content from one server. Hot reload works across both trees.
- `pnpm build` produces a single `dist/` containing both trees. No build flag, no separate pipeline.
- Local testing of the top-nav switch: visit `http://localhost:4321/software-engineering-with-ai/` → click "With AI" → verify URL changes to `/with-ai/` and sidebar swaps.

## Architecture Validation Results

### Coherence Validation ✅

**Decision compatibility:**

- AD-V2-1 (sidebar split) and AD-V2-8 (sidebar config modules) compose cleanly — the Sidebar.astro override consumes the two named exports.
- AD-V2-3 (schema extension) does not affect v1 pages until the frontmatter sweep (Story V2-2 in the proposed sequence) adds `tree: 'process'`; the schema lands permissively first.
- AD-V2-4 (URL namespace) and AD-V2-5 (active-state derivation) reinforce each other — the same URL prefix drives both routing and UI state.
- AD-V2-6 (callout pattern) and AD-V2-4 do not interact — callouts go on v1 phase overviews, not AI pages.
- AD-V2-7 (.mdx default) and the file layout in AD-V2-4 are self-consistent.

**Pattern consistency:**

- All v2 patterns (frontmatter shape, heading template, link conventions, file naming) extend v1 patterns rather than contradict them.
- The Reference sidebar group is the single point of cross-tree reuse — handled cleanly by the shared module pattern.

**Structure alignment:**

- The `src/content/docs/with-ai/` tree matches the URL convention `/with-ai/...`.
- The `src/sidebar/` directory matches the SSoT principle while splitting authorship cadences.
- The `src/components/` additions match v1's component naming.

### Requirements Coverage Validation ✅

**v2 Functional Requirements coverage (19/19):**

| FR | Covered by |
|---|---|
| FR-v2-1 (top-nav toggle) | Header.astro |
| FR-v2-2 (active tab visible) | URL-derived `.active` class + theme.css styling |
| FR-v2-3 (sidebar swap per tab) | Sidebar.astro routing-aware selection |
| FR-v2-4 (one-tap mobile switch) | Header.astro mobile-visible top-nav design |
| FR-v2-5 (tab landing page) | `src/content/docs/with-ai/index.mdx` |
| FR-v2-6 (AI callout on v1 phase overviews) | Inline blockquote in 6 `<phase>/index.md` files |
| FR-v2-7 (back-link from AI pages) | Authoring convention: top-of-page link in each AI `.mdx` |
| FR-v2-8 to FR-v2-13 (5-section template) | Authoring convention enforced by PR review |
| FR-v2-14 (stand-alone AI pages) | Authoring convention |
| FR-v2-15 (cross-phase AI links) | Inline content |
| FR-v2-16 (validated vs research-pending) | Placeholder text + frontmatter `status` field |
| FR-v2-17 (Markdown editing path) | `src/content/docs/with-ai/*.mdx` |
| FR-v2-18 (sidebar via config) | `src/sidebar/ai.ts` |
| FR-v2-19 (tool listing edits) | Inline within Section 3 |

**v2 Non-Functional Requirements coverage (16/16):** See *Requirements to Structure Mapping* table above. All NFRs traced to a location and mechanism.

### Implementation Readiness Validation ✅

**Decision completeness:**

- All four critical v2 decisions (sidebar split, Header override, schema extension, URL namespace) are specified with file paths, component names, prop shapes, and TypeScript module structure.
- The two-step schema rollout (permissive deploy → frontmatter sweep → strict deploy) is sequenced.

**Structure completeness:**

- File layout for both `src/content/docs/with-ai/` and `src/sidebar/` is explicit.
- Component locations and override registration in `astro.config.mjs` are specified.

**Pattern completeness:**

- Frontmatter shape, heading template, link conventions, validation log structure, and enforcement gates are documented.

### Gap Analysis Results

**Critical gaps:** None. v2 implementation can begin.

**Important gaps (addressed, with mitigation):**

- **Starlight component override prop surface verification.** The Sidebar.astro skeleton in AD-V2-1 passes a `sidebar` prop to `<Default />`. The exact Starlight prop API is verified at first implementation story; fallback is to re-implement the sidebar list using Starlight primitives (`<SidebarSublist>`).
- **Five-H2 AI template enforcement is convention-only in v2.** Same mitigation as v1's four-H2 template — PR review, plus a remark-lint upgrade path if drift is observed.
- **Cross-tree link integrity is manual in v2.** Same mitigation as v1 — manual review plus deferred build-time link-checker. v2 adds a manual `with-ai-link-audit.md` checklist used during content review.

**Nice-to-have gaps (explicitly deferred, acceptable for v2):**

- `<BattleTested>` component for structured tool-listing rendering (AD-V2-9 — defer to first observed drift).
- Build-time validation that each AI page has at least one back-link to its process counterpart (manual at first).
- Build-time validation that the validation log contains entries for every tool listed in a published AI page (editorial gate at first).
- Top-nav animation on tab switch (out of scope; static is acceptable).
- Per-AI-page reading time estimate (out of scope; v1 doesn't have it either).

### Validation Issues Addressed

None requiring architectural changes. Known soft-spots (heading-template lint deferral, link-check deferral, validation-log automation deferral) documented as accepted risks with clear post-v2 upgrade paths.

### Architecture Completeness Checklist

**✅ Requirements Analysis**

- [x] v2 PRD context thoroughly analysed (19 FRs + 16 NFRs)
- [x] v2 scale and complexity assessed (low-medium; +9 pages; +2 component overrides; +schema extension)
- [x] v2 technical constraints identified (no new starter, no new runtime, no new infrastructure)
- [x] v2 cross-cutting concerns mapped (routing-aware sidebar, top-nav active-state, cross-tree links, frontmatter tree discrimination, mobile switch, build-output growth)

**✅ Architectural Decisions**

- [x] All seven PRD-level architectural decisions (AD-1 through AD-7 in prd-v2-ai.md) operationalised
- [x] AD-V2-1 through AD-V2-8 documented with file paths and component shapes
- [x] AD-V2-9 and AD-V2-10 explicitly deferred with trigger conditions
- [x] Versions of all dependencies pinned to current `package.json` state

**✅ Implementation Patterns**

- [x] Frontmatter shapes documented for all four AI page types (landing, phase, delivery-stream, plus v1 process pages)
- [x] Five-H2 AI page heading template specified verbatim
- [x] Link conventions for cross-tree links documented
- [x] Battle-tested rule operationalised with validation log structure
- [x] Sidebar module pattern documented with code skeletons
- [x] Component override patterns documented with `.astro` skeletons

**✅ Project Structure**

- [x] Complete v2 directory structure defined (file paths for all 9 new AI pages, 3 new sidebar modules, 2-3 new components)
- [x] Component boundaries amended (Header.astro, Sidebar.astro as Starlight overrides)
- [x] Integration points documented (sidebar modules ↔ config; overrides ↔ Starlight runtime; schema ↔ content)
- [x] v2 requirements-to-structure mapping complete (19 FRs, 16 NFRs all traced)

### Architecture Readiness Assessment

**Overall Status:** READY FOR IMPLEMENTATION

**Confidence Level:** High

**Key strengths:**

- Brownfield-extension architecture; v1 surface unchanged except for the deliberate frontmatter sweep adding `tree: 'process'` and the inline AI callout on six phase overviews.
- No new framework, no new runtime, no new build step, no new deployment infrastructure.
- Two Starlight component overrides (Header, Sidebar) cover the entirety of the new IA mechanism. Both are small (< 100 lines each estimated).
- Schema extension is additive and rolls out in two steps (permissive → strict) with a known-safe sweep PR in between.
- Sidebar module split improves maintainability rather than compromising it — the SSoT is split into named modules, each with a clear authorship cadence.
- Battle-tested rule is operationalised at editorial level (validation log) rather than code level — appropriate to the editorial discipline being enforced.

**Areas of acknowledged risk:**

- Starlight component override prop API: verified at first implementation story. Fallback path (re-implement sidebar using Starlight primitives) is documented.
- AI tool churn: the architecture localises churn to `src/sidebar/ai.ts` + nine `.mdx` files, but the churn itself is a content concern, not an architecture concern.
- Reference pages (`glossary.md`, `deliverables.md`) appearing in both trees while showing the Process tab active when visited: deliberate trade-off; reference content is tree-agnostic and the Reference sidebar group is reachable from both trees.

**Areas for future enhancement:**

- `<BattleTested>` component for structured tool-listing rendering (deferred per AD-V2-9).
- Build-time cross-tree link checker (carryover from v1 deferred list).
- Build-time validation that the validation log contains entries for every tool listed (editorial-to-automation upgrade path).
- Remark-lint rule enforcing the five-H2 AI template (parallel to v1's deferred four-H2 lint).
- Active-state animation on tab switch — minor UX polish; static is acceptable.
- Pagefind scope-per-tree (currently the search index is single-scope; readers searching from the AI tree may get process results; acceptable trade-off but flagged for future review).

### Implementation Handoff

**AI agent guidelines:**

- Follow this document for all v2 architectural questions. For v1 questions, refer to [`architecture.md`](./architecture.md).
- Use implementation patterns documented in this file for all v2 authoring and coding tasks.
- Respect the tree boundary: no content embeds across trees; cross-references are links only.
- When a v2 decision is genuinely undocumented, refer to the v1 architecture document for parallel guidance, and flag the gap for the author before improvising.

**First implementation priority (proposed Story V2-1):**

Schema extension landing — permissive mode.

1. Edit `src/content.config.ts` to add `tree`, `aiPageType`, `deliveryStream` fields as optional.
2. Verify `pnpm build` passes (no existing content changes, so no v1 page should fail).
3. Commit and push.

**Second implementation priority (proposed Story V2-2):**

Frontmatter sweep — add `tree: 'process'` to all 60 v1 content pages.

1. Scripted edit (e.g., a one-shot Node script or a Find-Replace pass) that inserts the `tree: 'process'` line into each phase-bound page's frontmatter.
2. Verify `pnpm build` passes.
3. Commit and push.

**Third implementation priority (proposed Story V2-3):**

Schema promotion to strict — `tree` becomes required for content pages.

1. Edit `src/content.config.ts` superRefine rule to require `tree`.
2. Verify `pnpm build` passes (all 60 v1 pages now have it).
3. Commit and push.

**Fourth implementation priority (proposed Story V2-4):**

Sidebar module split — extract sidebar data from `astro.config.mjs` into `src/sidebar/*.ts`.

1. Create `src/sidebar/process.ts`, `src/sidebar/ai.ts` (initially exporting an empty array or only the Reference group), `src/sidebar/reference.ts`.
2. Move v1 sidebar groups from `astro.config.mjs` into `process.ts`.
3. `astro.config.mjs` imports both and concatenates.
4. Verify `pnpm build` passes; URLs unchanged.

**Fifth implementation priority (proposed Story V2-5):**

Custom Header.astro + Sidebar.astro overrides.

1. Create `src/components/Header.astro` with top-nav UI and URL-prefix active state.
2. Create `src/components/Sidebar.astro` with routing-aware sidebar selection.
3. Register both in `starlight()` integration `components` field.
4. Add `.top-nav` CSS rules to `src/styles/theme.css`.
5. Verify desktop and mobile top-nav rendering.

**Sixth and onward (Stories V2-6 through V2-14):**

Per-page AI content authoring. Sequencing follows the prd-v2-ai.md proposed tranche order: tab landing + Pre-Sales first (proves the architecture); then Discovery + Requirements & Design; then Delivery sub-streams (PM, Dev, QA); then Deployment + Maintenance. Each AI page is one story.

**Final implementation priority (proposed Story V2-15):**

"AI in this phase" callouts on the six v1 phase overview pages. Inline blockquote pattern; one-line PR per phase or batched into one PR with six file edits. Verifies the cross-tree discovery path.

## Cross-References

- [`prd-v2-ai.md`](./prd-v2-ai.md) — v2 PRD; defines the nine pages and the seven PRD-level architectural decisions this document operationalises.
- [`architecture.md`](./architecture.md) — v1 architecture; every decision there remains in force unless explicitly amended in this document.
- [`prd.md`](./prd.md) — v1 PRD; original product framing.
- [`product-brief-Software-Development-with-AI.md`](./product-brief-Software-Development-with-AI.md) — original product brief; the AI layer was first conceived here as a per-page 5th H2 (later superseded by the two-tree IA in v2).
- v2 Epics document — *to be authored next*. This architecture provides the story breakdown above (V2-1 through V2-15) which the epics document will expand into sprint-ready stories.
