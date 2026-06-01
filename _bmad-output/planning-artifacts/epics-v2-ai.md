---
stepsCompleted: ["step-01-validate-prerequisites", "step-02-design-epics", "step-03-create-stories", "step-04-final-validation"]
status: "ready-for-implementation"
completedAt: "2026-06-01"
documentVersion: "v2-ai-addition"
parentDocument: "_bmad-output/planning-artifacts/epics.md"
inputDocuments:
  - "_bmad-output/planning-artifacts/prd-v2-ai.md"
  - "_bmad-output/planning-artifacts/architecture-v2-ai.md"
  - "_bmad-output/planning-artifacts/epics.md"
  - "_bmad-output/planning-artifacts/architecture.md"
  - "_bmad-output/planning-artifacts/prd.md"
  - "_bmad-output/planning-artifacts/ux-design-specification.md"
---

# Software Development with AI (v2 — AI Addition) - Epic Breakdown

## Overview

This document provides the v2 epic and story breakdown for the AI addition specified in [`prd-v2-ai.md`](./prd-v2-ai.md). v2 layers a parallel "With AI" content tree onto the v1 site (60 pages) via a top-navigation switch, adding 9 AI pages plus 6 cross-tree discovery callouts on v1 phase overviews.

**Parent docs:** v1 epics live in [`epics.md`](./epics.md) (Epics 1–13, 83 stories, all completed by 2026-05-08). This document is a delta — every story below is **new v2 work**. v2 epic numbering uses the `V2-` prefix to make tree-of-origin unambiguous; v2 epics do not extend v1 epic numbering.

**Current state (2026-06-01):** v1 site live at `ferdinebi.github.io/software-engineering-with-ai/` with 60 pages. v2 PRD committed (64af565). v2 architecture committed (b20704b). No v2 implementation work has started.

## Requirements Inventory

### Functional Requirements

**Site Navigation (extends v1 FR1–FR5)**
- FR-v2-1: Readers can switch between the "Process" tree and the "With AI" tree via a persistent top-navigation control.
- FR-v2-2: The active top-navigation tab is visually distinguishable on desktop and mobile.
- FR-v2-3: Each tab has its own sidebar tree; switching tabs replaces the sidebar with the new tree's contents.
- FR-v2-4: Mobile readers can switch tabs without entering a multi-step menu interaction (one tap to switch).

**AI Content Discovery**
- FR-v2-5: Readers can land on the "With AI" tab landing page and see a brief framing paragraph plus a navigable list of all eight phase/stream AI pages.
- FR-v2-6: Each v1 phase overview page includes a 2–3 sentence "AI in this phase" callout linking forward to the corresponding AI page.
- FR-v2-7: Each AI page includes a back-link to its v1 process counterpart (typically near the top of the page).

**AI Page Content**
- FR-v2-8: Readers can view a "What changes when AI is in the loop" section on each AI page.
- FR-v2-9: Readers can view a "Tool-agnostic workflow" section on each AI page.
- FR-v2-10: Readers can view a "Battle-tested tools and how to use them" section on each AI page (or, if no validated tools are yet listed, an explicit "tool research in progress" placeholder).
- FR-v2-11: Readers can view a "What is not yet ready" section on each AI page that names anti-patterns and immature use cases.
- FR-v2-12: Readers can view a "What the industry does" section on each AI page (parallel to v1's section of the same name).
- FR-v2-13: Readers can view all five AI page sections in a consistent structure across every AI page.

**AI Content Comprehension**
- FR-v2-14: Readers can understand each AI page independently without requiring sequential reading of the process tree (Priya's cherry-picking journey carries over).
- FR-v2-15: Readers can follow contextual links between AI pages to understand cross-phase AI handoffs (e.g., interview synthesis output flowing into requirements drafting input).
- FR-v2-16: Readers can identify which tool recommendations are battle-tested by the author versus which are open research items.

**Content Management (Author)**
- FR-v2-17: Author can add or edit AI content by modifying Markdown/MDX files under `src/content/docs/with-ai/`.
- FR-v2-18: Author can update the top-navigation labels and the AI sidebar tree through framework configuration in `astro.config.mjs`.
- FR-v2-19: Author can update individual tool listings on an AI page without modifying the page's section structure.

### NonFunctional Requirements

**Build and Deployment**
- NFR-v2-1: Site continues to build successfully from a clean clone with `pnpm install && pnpm build` (carryover from v1 NFR1).
- NFR-v2-2: Full site build with v1+v2 content completes in under 60 seconds (carryover from v1 NFR2).
- NFR-v2-3: Deployment continues to use the existing GitHub Actions pipeline; no new deployment infrastructure is added.

**Content Rendering**
- NFR-v2-4: All v2 content is pre-rendered as static HTML at build time. No runtime LLM calls, no model embeds, no API key handling.
- NFR-v2-5: Top navigation is rendered as static HTML and works without JavaScript (the active tab can be CSS-derived from URL prefix).
- NFR-v2-6: All v2 pages render legibly on viewports from 320px to 2560px without horizontal scroll.
- NFR-v2-7: Both light and dark themes render v2 content with the same contrast budget v1 commits to.

**Maintainability**
- NFR-v2-8: Adding a new AI page or updating tool listings requires only Markdown edits and (for new pages) a sidebar configuration entry — no code changes.
- NFR-v2-9: AI tree content files use the same Markdown/MDX format as v1, with the same Zod-typed frontmatter schema extended to include AI-specific fields. No proprietary format.
- NFR-v2-10: Zero runtime dependencies (carryover from v1 NFR9).

**Cross-Tree Integrity**
- NFR-v2-11: All v1 process-tree URLs continue to resolve unchanged (no breaking changes to existing routes).
- NFR-v2-12: All v2 AI-tree pages link back to their v1 process counterparts and vice versa, with link integrity verified at build time (manual at first; build-time link checker is a deferred enhancement).
- NFR-v2-13: The Zod content-collection schema enforces that AI-tree pages declare `tree: 'ai'` (or equivalent discriminator) and process-tree pages declare `tree: 'process'`, so misplaced pages fail the build.

**Voice and Editorial**
- NFR-v2-14: AI pages use the same practitioner voice as v1: second person, declarative, agency frame. The voice rule does not relax on the AI tree.
- NFR-v2-15: AI pages do not feature any tool the author has not validated in a real engagement. The "battle-tested" rule is an editorial NFR, not just a guideline.
- NFR-v2-16: AI pages are dated (`lastUpdated` frontmatter) and update frequency is expected to exceed process-tree update frequency. Stale dates (>9 months for a tools-list page) are a content-review trigger.

### Additional Requirements

Technical / infrastructure requirements surfaced by [`architecture-v2-ai.md`](./architecture-v2-ai.md) that drive implementation stories:

**Schema extension (AD-V2-3):**
- Extend Zod schema at `src/content.config.ts` with `tree: 'process' | 'ai'`, `aiPageType: 'landing' | 'phase' | 'delivery-stream'`, `deliveryStream: 'project-management' | 'development' | 'qa-testing'`.
- Two-step rollout sequenced: permissive deploy → frontmatter sweep → strict deploy. Each step independently revertible.
- `superRefine` cross-field rules enforce: `tree` required on all content pages; `aiPageType` forbidden when `tree === 'process'`; `aiPageType` required when `tree === 'ai'`; per-type field constraints (landing/phase/delivery-stream).

**Sidebar config split (AD-V2-8):**
- Sidebar data moves from inline `astro.config.mjs` array to three modules: `src/sidebar/process.ts`, `src/sidebar/ai.ts`, `src/sidebar/reference.ts`.
- The Reference group (Glossary + Deliverables) is exported once from `reference.ts` and imported by both `process.ts` and `ai.ts` — appears at the bottom of both trees.
- `astro.config.mjs` imports the modules and concatenates into the `sidebar` field.

**Custom Starlight overrides (AD-V2-1, AD-V2-2):**
- `src/components/Header.astro` overrides Starlight's default header — adds top-nav UI (Process / With AI links) above the existing search + theme toggle row.
- `src/components/Sidebar.astro` overrides Starlight's default sidebar — reads `Astro.url.pathname` and renders `processSidebar` or `aiSidebar` based on URL prefix.
- Active-tab state derived purely from URL prefix (`pathname.startsWith(base + 'with-ai/')`). No JavaScript dependency.
- Both overrides compose Starlight defaults via `import Default from '@astrojs/starlight/components/<Component>.astro'` — they do not replace Starlight subsystems wholesale.

**URL namespace + file layout (AD-V2-4):**
- AI pages live at `src/content/docs/with-ai/`. URLs are `/with-ai/<phase>/` for phase pages, `/with-ai/delivery/<stream>/` for delivery sub-streams.
- All AI pages use `.mdx` (not `.md`) — supports future `<BattleTested>` component import without per-page extension flips.
- Slug-immutability rule applies from first deployment for all `/with-ai/...` URLs.

**v1 phase overview callout pattern (AD-V2-6):**
- "AI in this phase" callout authored as inline Markdown blockquote on each `<phase>/index.md`.
- Uniform format reviewed at PR time. Snippet-import escalation deferred to drift-observed trigger.

**Battle-tested rule operationalisation (NFR-v2-15):**
- Editorial gate: validation log (outside repo) records date, engagement, what was tested, outcome for every tool listed on a published AI page.
- PR review for AI-page changes blocks merge if validation log lacks the listed tools.
- Tool entries > 9 months without refresh are flagged in next content review (NFR-v2-16).

**Tree boundary rule (architectural):**
- No cross-tree content embeds. Cross-references between process and AI trees are links, never inline content.
- Reference pages (`glossary.md`, `deliverables.md`) are tree-agnostic — neither declares `tree`; both appear in the Reference sidebar group at the bottom of both trees.

### UX Design Requirements

v2 inherits the v1 UX-DRs (UX-DR1–UX-DR29) unchanged. v2-specific UX requirements layered on top:

**Top-navigation (new in v2)**
- UX-DR-v2-1: Top-navigation strip renders two links (`Process` → `/`, `With AI` → `/with-ai/`) as a horizontal pair next to the site title on desktop; remains visible (not hidden in hamburger) on mobile. One-tap mobile switching.
- UX-DR-v2-2: Active tab indicator visible against both light and dark themes. Active state derived from URL prefix at render time. Bottom border, pill background, or equivalent — final visual choice locked at first implementation but must meet WCAG 2.2 AA contrast.
- UX-DR-v2-3: Top-navigation is keyboard-tabbable in natural reading order. Focus rings visible in both themes.

**AI tree sidebar (new in v2)**
- UX-DR-v2-4: AI sidebar groups labelled without numbering (unlike v1's process tree which numbers phase groups 1–6). The AI tree is read as a lens onto the lifecycle, not a sequence — so phase labels are plain ("Pre-Sales", "Discovery") not numbered.
- UX-DR-v2-5: AI tab landing page (`/with-ai/`) renders as a phase-list grid similar to v1's home `<PhaseList>` but pointing at the 8 working AI pages (5 phases + 3 delivery sub-streams). Reuses or extends v1's PhaseList component pattern; no new framework adoption.
- UX-DR-v2-6: Reference sidebar group (Glossary + Deliverables) appears at the bottom of both trees. Identical entries in both — handled by importing the shared module.

**AI page structure (new in v2)**
- UX-DR-v2-7: Each AI page displays an inline back-link to its v1 process counterpart near the top of the page (above section 1 or as a frontmatter-rendered subtitle). Format: `← Process reference: <Phase Name>`.
- UX-DR-v2-8: AI pages use the same Starlight `<Aside>` callout conventions as v1 — `note`, `tip`, `caution`, `danger` — no new callout types.
- UX-DR-v2-9: Battle-tested tool listings render as a consistent pattern (proposed: H3 per tool, then prose; deferred component `<BattleTested>` per AD-V2-9 — only adopted if Markdown rendering drifts in practice).

**v1 phase overview callout (new in v2)**
- UX-DR-v2-10: "AI in this phase" callout rendered as a Markdown blockquote at the top of each v1 phase overview, after the page title and any existing intro paragraph. Uniform 2–3 sentence format across all six callouts.
- UX-DR-v2-11: Callout uses the same accent color and link styling as the rest of the v1 voice — no special icon, no marketing tone, no banner styling. Reader's eye finds it because it's a blockquote, not because it's loud.

**Forbidden patterns (v2 carries v1 forbidden patterns + adds)**
- No "ask the AI" floating chat widget on any page (v2 or v1).
- No tool comparison matrix page (rejected at PRD level — matrices age badly).
- No video embeds in v2 (deferred to v3+).
- No per-leaf-page AI overlay anywhere in v1 tree (superseded by two-tree IA).
- No tool listed without a validation-log entry (NFR-v2-15).

### FR Coverage Map

**Already satisfied by v1** (every v1 FR continues to function; v2 amends none):

All 26 v1 FRs and 9 v1 NFRs remain in force. v2 modifies v1 only by (a) adding `tree: 'process'` to all v1 page frontmatter (Story V2-1.2 sweep) and (b) adding inline blockquote callouts to six phase overview pages (Epic V2-10).

**Net-new v2 coverage:**

| FR / NFR | Epic | How it's delivered |
|---|---|---|
| FR-v2-1 (top-nav toggle) | Epic V2-1 | Header.astro override |
| FR-v2-2 (active tab visible) | Epic V2-1 | URL-derived `.active` CSS class + theme.css |
| FR-v2-3 (sidebar swap per tab) | Epic V2-1 | Sidebar.astro routing-aware override |
| FR-v2-4 (one-tap mobile switch) | Epic V2-1 | Mobile-visible top-nav design |
| FR-v2-5 (tab landing page) | Epic V2-1 | `with-ai/index.mdx` |
| FR-v2-6 (AI callout on v1 phase overviews) | Epic V2-10 | Inline blockquote on each of 6 phase overviews |
| FR-v2-7 (back-link from AI pages) | Epics V2-2 to V2-9 | Authoring convention — included on each AI page |
| FR-v2-8 to FR-v2-13 (5-section template) | Epics V2-2 to V2-9 | Authored per AI page |
| FR-v2-14 (stand-alone AI pages) | Epics V2-2 to V2-9 | Authoring discipline; AC on every content story |
| FR-v2-15 (cross-phase AI links) | Epics V2-2 to V2-9 | Inline content links |
| FR-v2-16 (validated vs research-pending) | Epics V2-2 to V2-9 | Section 3 vs placeholder + frontmatter `status` |
| FR-v2-17 (Markdown editing) | Epics V2-2 to V2-9 | `src/content/docs/with-ai/*.mdx` |
| FR-v2-18 (sidebar via config) | Epic V2-1 | `src/sidebar/ai.ts` |
| FR-v2-19 (tool listing edits) | Epics V2-2 to V2-9 | Inline within Section 3 |
| NFR-v2-1 to NFR-v2-3 (build/deploy) | Epic V2-1 | Verified at first v2 build |
| NFR-v2-4 (static-first) | Epic V2-1 | Starlight SSG unchanged |
| NFR-v2-5 (top-nav without JS) | Epic V2-1 | CSS-only active state |
| NFR-v2-6 (320–2560px responsive) | Epic V2-1 | Header.astro CSS holds at narrow widths |
| NFR-v2-7 (light/dark contrast) | Epic V2-1 | New theme.css rules verified in both themes |
| NFR-v2-8 (Markdown + config to add page) | Epics V2-2 to V2-9 | Each AI page = MDX file + one sidebar entry |
| NFR-v2-9 (Markdown/MDX + schema extension) | Epic V2-1 | Schema extension lands first |
| NFR-v2-10 (zero runtime deps) | Epic V2-1 | No new runtime dependencies added |
| NFR-v2-11 (v1 URLs unchanged) | Epic V2-1 | Frontmatter sweep does not change slugs |
| NFR-v2-12 (cross-tree link integrity) | Epics V2-2 to V2-10 | Manual link audit during content review |
| NFR-v2-13 (schema enforces tree) | Epic V2-1 | superRefine rule in strict-mode story |
| NFR-v2-14 (voice continuity) | Epics V2-2 to V2-9 | PR review enforcement |
| NFR-v2-15 (battle-tested rule) | Epics V2-2 to V2-9 | Validation log + PR-review gate |
| NFR-v2-16 (lastUpdated freshness) | Epics V2-2 to V2-9 | Frontmatter discipline per story |

## Epic List

### Epic V2-1: Two-tree Navigation Foundation

**Goal:** A reader visiting the site can switch between the Process (v1) and With AI (v2) trees via a persistent top-navigation control. The sidebar swaps with the tab. The AI tab landing page renders. The schema enforces tree discrimination. The infrastructure proves the two-tree IA works end-to-end.

**User outcome:** Marcus visits the site, sees a "With AI" tab in the top navigation, clicks it, lands on the AI overview page, sees the AI sidebar with all 8 working AI pages, and recognises that v2 is a peer tree to v1 — not buried inside it.

**FRs covered:** FR-v2-1, FR-v2-2, FR-v2-3, FR-v2-4, FR-v2-5, FR-v2-18
**NFRs covered:** NFR-v2-5, NFR-v2-9, NFR-v2-11, NFR-v2-13
**UX-DRs covered:** UX-DR-v2-1, UX-DR-v2-2, UX-DR-v2-3, UX-DR-v2-4, UX-DR-v2-5, UX-DR-v2-6

**Implementation notes:**
- 7 stories: schema-permissive landing → frontmatter sweep → schema-strict → sidebar module split → Header override → Sidebar override → tab landing page.
- Two-step schema rollout deliberately sequenced; each step independently revertible.
- Tab landing page proves the architecture works — should ship as part of this epic, not deferred to a content epic.

**Standalone:** No — Epic V2-1 ships with only one AI content page (the tab landing). When V2-1 lands, readers clicking through to specific phases get blank shells. That is acceptable: Epic V2-1 is infrastructure validation, and the landing page explicitly notes that working pages are rolling out. Epics V2-2 through V2-9 each fill in one working page.

### Epic V2-2: AI in Pre-Sales

**Goal:** A reader on the "With AI" tab can navigate to Pre-Sales and find a complete AI workflow — what changes when AI is in the loop, the tool-agnostic workflow, battle-tested tools (or research-in-progress placeholder), what is not yet ready, and what the industry does. Priya, mid-engagement and writing a proposal, uses this page as her reference.

**User outcome:** `with-ai/pre-sales.mdx` is complete, all five H2 sections written, back-link to `/pre-sales/` in place, cross-link to `/with-ai/discovery/` for the handoff to Discovery.

**FRs covered:** FR-v2-7, FR-v2-8, FR-v2-9, FR-v2-10, FR-v2-11, FR-v2-12, FR-v2-13, FR-v2-14, FR-v2-15, FR-v2-16

**Implementation notes:**
- 1 story: author `with-ai/pre-sales.mdx`.
- If no battle-tested tools are yet validated for Pre-Sales at story-execution time, section 3 ships with the standard placeholder note; the story is still complete because the workflow is documented.
- Cross-link: forward to `/with-ai/discovery/` (handoff); backward to v1 `/pre-sales/`.

**Standalone:** Yes — Priya's cherry-pick journey is exactly this scenario.

### Epic V2-3: AI in Discovery

**Goal:** A reader navigating "With AI → Discovery" finds the AI workflow for the Discovery phase — interview synthesis, workshop prep, prototype generation, deliverable drafting.

**User outcome:** `with-ai/discovery.mdx` complete with all five sections. Marcus's journey from `prd-v2-ai.md` is satisfied.

**FRs covered:** FR-v2-7 to FR-v2-16 (same five-section coverage as Pre-Sales).

**Implementation notes:**
- 1 story: author `with-ai/discovery.mdx`.
- Cross-link: forward to `/with-ai/requirements-design/`; backward to v1 `/discovery/`.
- Synergy with `/with-ai/pre-sales/`: the proposal-draft handoff to discovery-interview-synthesis is a natural AI-to-AI handoff worth naming.

**Standalone:** Yes.

### Epic V2-4: AI in Requirements & Design

**Goal:** A reader navigating "With AI → Requirements & Design" finds the AI workflow for FR/NFR drafting, architecture review, UX generation, and infrastructure planning.

**User outcome:** `with-ai/requirements-design.mdx` complete with all five sections.

**FRs covered:** FR-v2-7 to FR-v2-16.

**Implementation notes:**
- 1 story: author `with-ai/requirements-design.mdx`.
- Cross-link: forward to `/with-ai/delivery/development/` (where requirements drive build); backward to `/with-ai/discovery/`.
- Anti-pattern to name in section 4: feeding 100+ FRs into a chat interface in one shot.

**Standalone:** Yes.

### Epic V2-5: AI in Project Management (Delivery sub-stream)

**Goal:** A reader navigating "With AI → Delivery → Project Management" finds the AI workflow for status reports, backlog grooming, sprint-planning calibration, retro synthesis, change-log drafting.

**User outcome:** `with-ai/delivery/project-management.mdx` complete.

**FRs covered:** FR-v2-7 to FR-v2-16.

**Implementation notes:**
- 1 story: author `with-ai/delivery/project-management.mdx`.
- Cross-link: forward to `/with-ai/delivery/development/` and `/with-ai/delivery/qa-testing/` (concurrent sub-streams); backward to v1 `/delivery/project-management/`.
- PM workflows are the most-frequently-referenced AI page per `prd-v2-ai.md` Journey 3 (Ferdi's training session).

**Standalone:** Yes.

### Epic V2-6: AI in Development (Delivery sub-stream)

**Goal:** A reader navigating "With AI → Delivery → Development" finds the AI workflow for agentic coding loops (Cursor, Claude Code, Copilot, Aider, Cline/RooCode), feature-flag-gated development, AI-assisted code review, AI-pair refactoring, dependency-update automation.

**User outcome:** `with-ai/delivery/development.mdx` complete. This is the largest AI page and the densest tool stack — per `prd-v2-ai.md` Journey 3, Ferdi's training session devotes 45 minutes to this page alone.

**FRs covered:** FR-v2-7 to FR-v2-16.

**Implementation notes:**
- 1 story: author `with-ai/delivery/development.mdx`.
- Battle-tested tool listings are densest here. Validation log will likely have the most entries for tools listed on this page.
- Section 4 ("What is not yet ready") names specific anti-patterns: blind merge of agentic-loop output, agents touching production deploys, etc.
- Cross-link: backward to v1 `/delivery/development/`; cross-link to `/with-ai/delivery/qa-testing/` for the dev→QA handoff.

**Standalone:** Yes.

### Epic V2-7: AI in QA / Testing (Delivery sub-stream)

**Goal:** A reader navigating "With AI → Delivery → QA / Testing" finds the AI workflow for test-case generation from FRs, accessibility scanning at scale, security-finding triage, exploratory-test prompt generation, regression-suite maintenance.

**User outcome:** `with-ai/delivery/qa-testing.mdx` complete.

**FRs covered:** FR-v2-7 to FR-v2-16.

**Implementation notes:**
- 1 story: author `with-ai/delivery/qa-testing.mdx`.
- Cross-link: backward to v1 `/delivery/qa-testing/`; cross-link to `/with-ai/delivery/development/` for the QA→dev finding-feedback loop.
- Section 4 names anti-patterns: trusting AI-generated tests without human review, AI-only accessibility passes that miss screen-reader nuance.

**Standalone:** Yes.

### Epic V2-8: AI in Deployment / Launch

**Goal:** A reader navigating "With AI → Deployment / Launch" finds the AI workflow for runbook generation, cutover-rehearsal scripting, monitoring-config drafting, post-deploy smoke-test generation.

**User outcome:** `with-ai/deployment-launch.mdx` complete.

**FRs covered:** FR-v2-7 to FR-v2-16.

**Implementation notes:**
- 1 story: author `with-ai/deployment-launch.mdx`.
- Cross-link: forward to `/with-ai/maintenance-retainer/`; backward to v1 `/deployment-launch/`.
- Section 4 names anti-patterns: AI-generated runbooks not validated against the actual infrastructure; AI cutover scripts run without dry-run.

**Standalone:** Yes.

### Epic V2-9: AI in Maintenance & Retainer

**Goal:** A reader navigating "With AI → Maintenance & Retainer" finds the AI workflow for incident triage, post-incident-review drafting, retainer status reports, hypercare-window prioritisation, engagement-closeout / lessons-learned synthesis.

**User outcome:** `with-ai/maintenance-retainer.mdx` complete. Closes the v2 lifecycle loop.

**FRs covered:** FR-v2-7 to FR-v2-16.

**Implementation notes:**
- 1 story: author `with-ai/maintenance-retainer.mdx`.
- Cross-link: backward to v1 `/maintenance-retainer/`; cross-link forward to `/with-ai/pre-sales/` (the lifecycle loops for repeat engagements).
- Section 4 names anti-patterns: AI-only incident triage without on-call human verification; closeout summaries that omit politically sensitive lessons.

**Standalone:** Yes.

### Epic V2-10: AI Callouts on v1 Phase Overviews

**Goal:** A reader exploring the v1 process tree discovers the parallel AI tree from inside the process content — each v1 phase overview (Pre-Sales, Discovery, Requirements & Design, Delivery, Deployment / Launch, Maintenance & Retainer) has a 2–3 sentence "AI in this phase" callout linking forward to the corresponding AI page.

**User outcome:** Marcus's journey — process-first, then discover the AI tree — is fully wired. From every v1 phase overview, the reader sees a single, uniform blockquote pointing at the AI tree without disrupting the v1 voice.

**FRs covered:** FR-v2-6
**NFRs covered:** NFR-v2-11 (v1 URLs unchanged; only frontmatter and inline blockquote added)
**UX-DRs covered:** UX-DR-v2-10, UX-DR-v2-11

**Implementation notes:**
- 1 story batched across 6 phase overviews (6 ACs, one per phase).
- Callouts are 2–3 sentences each. Uniform format across all 6.
- Delivery's callout is the only non-trivial one — Delivery has 3 AI sub-stream pages (PM, Dev, QA), so the callout points to all three rather than a single AI page.
- No new component introduced; inline Markdown blockquote pattern (AD-V2-6). Snippet-import escalation only triggered post-publication if drift is observed.

**Standalone:** Yes, but lower value unless Epics V2-2 through V2-9 have already shipped — readers clicking through would land on pages that don't yet exist. Recommended sequence: ship Epic V2-10 last, after all AI pages exist.

**Dependency note:** Soft dependency on each phase's AI page existing. A reasonable variation is to add the callout to each v1 phase overview at the moment its corresponding AI page ships — i.e. fold the callout into the per-page content epic. Decision: keep as a separate epic for clean PR boundaries; if multi-phase sprints prefer the per-page approach, Epic V2-10 can be dissolved at story scheduling time.

---

## Shared Content-Story Acceptance-Criteria Pattern (v2 AI Pages)

Epics V2-2 through V2-9 each ship one story per AI content page. All of those stories inherit the following **shared structural acceptance criteria**. Individual story blocks below list only the **topic-specific acceptance criteria** that differ page-to-page. Build, schema, template, voice, and link criteria are not re-copied per story.

**Shared structural ACs (applied to every AI-page-authoring story):**

- **Given** the page file at `src/content/docs/with-ai/<path>.mdx`, **When** `pnpm build` runs, **Then** the Zod content-collection schema passes with no errors and the page is included in the built `dist/` output.
- **Given** the page's frontmatter, **When** inspected, **Then** it contains exactly the pinned fields for its `aiPageType` per AD-V2-3 — `title`, `description`, `tree: 'ai'`, `aiPageType`, `phase` (for phase or delivery-stream types), `deliveryStream` (for delivery-stream type), `order`, `lastUpdated` — with `lastUpdated` set to the authoring commit date in ISO-8601 format.
- **Given** the rendered page body, **When** inspected, **Then** it contains exactly five H2 headings in this order: `What changes when AI is in the loop`, `Tool-agnostic workflow`, `Battle-tested tools and how to use them`, `What is not yet ready`, `What the industry does`. No H1 in body. No extra H2s.
- **Given** the page's section 3 ("Battle-tested tools and how to use them"), **When** inspected, **Then** either (a) it contains one or more tool entries, each with a documented validation-log entry visible to the reviewer, OR (b) it contains the uniform placeholder note: *"Tool research is in progress; this page will list battle-tested tool recommendations as they are validated in real delivery."* No speculative tool listings.
- **Given** each H2 section, **When** read, **Then** the body under it is substantive prose (not a TODO line); no placeholder text remains except the section-3 placeholder option above.
- **Given** a reader opens the page cold without first reading the v1 process page, **When** they read it end-to-end, **Then** they can follow it without prior process-tree context (FR-v2-14 — page stands alone).
- **Given** the page, **When** inspected, **Then** it includes a back-link to its v1 process counterpart near the top (above section 1) using the leading-slash link convention: `[← Process reference: <Phase Name>](/<phase-slug>/)` or `[← Process reference: <Sub-stream Name>](/delivery/<stream-slug>/)`.
- **Given** the page, **When** inspected, **Then** it includes at least one inline cross-link forward to a neighbouring AI page (or to multiple where the handoff is multi-directional — e.g. PM page → Dev page AND QA page) and, where the lifecycle has a backward predecessor, at least one cross-link backward to it (FR-v2-15).
- **Given** any internal link on the page, **When** the site is built and deployed, **Then** the link resolves correctly under the configured `base` (`/software-engineering-with-ai/`) — achieved by using leading-slash paths, never hardcoded URLs, never `./foo.mdx`.
- **Given** the page voice, **When** read, **Then** it uses second person ("you"), declarative statements (no "typically," "usually," "depending on"), and the agency/consulting frame (NFR-v2-14).
- **Given** any tool named in section 3, **When** PR reviewed, **Then** the validation log contains a corresponding entry naming the tool, the engagement it was validated in, the date, what was tested, and the outcome (NFR-v2-15).
- **Given** any forbidden v2 pattern (AI chat widget, tool comparison matrix, video embed, per-leaf AI overlay, unvalidated tool listing), **When** PR reviewed, **Then** none appear on the page.

Any AI-page story may add **additional** ACs for topic-specific deliverables, unique cross-links, or phase-specific anti-patterns. It **may not** weaken or waive the shared ACs.

---

## Epic V2-1: Two-tree Navigation Foundation

_Goal repeated: Reader can switch between Process and With AI trees via top-nav. Sidebar swaps with tab. AI tab landing renders. Schema enforces tree discrimination._

### Story V2-1.1: Extend Zod schema with tree, aiPageType, deliveryStream fields (permissive)

As the v2 implementation team,
I want the Zod content-collection schema to accept the new `tree`, `aiPageType`, and `deliveryStream` fields as optional,
So that v2 content can declare its tree without breaking v1 pages that have not yet been swept.

**Acceptance Criteria:**

**Given** `src/content.config.ts`, **When** inspected, **Then** the `extend` schema declares three new optional fields: `tree: z.enum(['process', 'ai']).optional()`, `aiPageType: z.enum(['landing', 'phase', 'delivery-stream']).optional()`, `deliveryStream: z.enum(['project-management', 'development', 'qa-testing']).optional()`.
**And** the existing `superRefine` rule is preserved and the existing required-set behaviour (type/phase/order required together) continues to hold.
**And** none of the three new fields is required at this story's completion — they are permissive landing only.

**Given** the build, **When** `pnpm build` runs against the v1 content tree (no v1 frontmatter changes yet), **Then** it succeeds with zero schema errors and all 60 v1 pages render unchanged.
**And** the build time remains under 60 seconds (NFR-v2-2).
**And** the site visually renders identically to before this story (no v1 page touches its rendering — only the schema's tolerance broadened).

**Given** the schema source file, **When** read, **Then** an inline comment documents this as the v2 schema's permissive-landing step, with a pointer to Story V2-1.3 where the schema becomes strict.

### Story V2-1.2: Sweep v1 content pages to declare tree: 'process' in frontmatter

As the v2 implementation team,
I want every v1 phase-bound content page to declare `tree: 'process'` in its frontmatter,
So that the schema can be tightened in Story V2-1.3 without breaking the v1 build.

**Acceptance Criteria:**

**Given** all 60 v1 content files (excluding `index.mdx`, `glossary.md`, `deliverables.md` — those three remain schema-exempt and tree-agnostic), **When** inspected, **Then** each file's frontmatter contains the line `tree: process` (or `tree: 'process'`), inserted before the existing `lastUpdated` line in a uniform field order.
**And** all six phase overview files (`<phase>/index.md`), all 48 leaf sub-section pages, and all three Delivery sub-section overview files (`delivery/<stream>/index.md`) are included.
**And** the schema-exempt files (`index.mdx`, `glossary.md`, `deliverables.md`) are NOT modified — they remain tree-agnostic.

**Given** the build, **When** `pnpm build` runs, **Then** it succeeds with zero errors and all 60 pages render unchanged.
**And** `lastUpdated` is NOT bumped on these pages — this is a schema-discriminator addition, not a content change (the existing `lastUpdated` dates remain).

**Given** the sweep PR, **When** reviewed, **Then** the diff shows uniform frontmatter additions across all 60 files with no incidental edits to content body, headings, or other frontmatter fields.

### Story V2-1.3: Promote tree to required in schema (strict mode)

As the v2 implementation team,
I want the Zod schema to require `tree` on every content page (in the same required-set as `type`/`phase`/`order`),
So that any future content page must declare its tree-of-origin before it can ship.

**Acceptance Criteria:**

**Given** `src/content.config.ts`, **When** inspected, **Then** the `superRefine` rule has been extended to require `tree` on any page that already triggers the content-page required-set (i.e., any page with `type`/`phase`/`order` set OR with `tree`/`aiPageType` set).
**And** the rule rejects with a clear message — `"Required for non-home, non-reference pages: 'process' or 'ai'."` — when `tree` is missing on a content page.
**And** the rule enforces (per AD-V2-3): `aiPageType` is forbidden when `tree === 'process'`; `aiPageType` is required when `tree === 'ai'`; per-`aiPageType` field constraints (landing has no phase/order; phase requires phase + order; delivery-stream requires phase === 'delivery' + deliveryStream + order).

**Given** the build, **When** `pnpm build` runs against the v1 content tree (post-sweep from V2-1.2), **Then** it succeeds with zero errors — all 60 pages now satisfy the strict schema.
**And** if any phase-bound page were stripped of `tree: process` artificially, the build would fail with the rejection message above (verified via a deliberate failure test in the story PR).

**Given** the strict schema, **When** an AI-tree page is later authored without `aiPageType`, **Then** the build fails before deploy — the strict mode catches the gap (verified by a positive test in the story PR: a `with-ai/test-fixture.mdx` declaring `tree: ai` without `aiPageType` fails the build, then is removed before merge).

### Story V2-1.4: Split sidebar config into src/sidebar/{process,ai,reference}.ts modules

As the v2 implementation team,
I want the sidebar data to live in three named modules (`process.ts`, `ai.ts`, `reference.ts`) instead of inline in `astro.config.mjs`,
So that the two trees can be updated on independent cadences and the Reference group is a single source of truth shared by both.

**Acceptance Criteria:**

**Given** `src/sidebar/process.ts`, **When** inspected, **Then** it exports `processSidebar: StarlightUserConfig['sidebar']` containing the six existing v1 phase groups (1. Pre-Sales through 6. Maintenance & Retainer) with all their existing items and slug references unchanged from the current `astro.config.mjs` definition.
**And** the Reference group is NOT inlined in `process.ts` — it is imported from `./reference` and appended as the last entry.

**Given** `src/sidebar/ai.ts`, **When** inspected, **Then** it exports `aiSidebar` containing one top-level group labelled "With AI" with the eight working AI pages (5 phases + 3 delivery sub-streams) plus the Overview entry pointing at `with-ai`, organised as documented in [`architecture-v2-ai.md`](./architecture-v2-ai.md) AD-V2-8.
**And** the Reference group is imported from `./reference` and appended as the last entry, identical to `process.ts`'s usage.

**Given** `src/sidebar/reference.ts`, **When** inspected, **Then** it exports `referenceSidebar` with the label "Reference" and two items: Deliverables (slug `deliverables`) and Glossary (slug `glossary`).

**Given** `astro.config.mjs`, **When** inspected, **Then** it imports `processSidebar` and `aiSidebar` and the Starlight `sidebar` field is set to `[...processSidebar, ...aiSidebar]` (process first, AI second).
**And** the previous inline sidebar array has been removed entirely — no sidebar data remains inline in `astro.config.mjs`.

**Given** the build, **When** `pnpm build` runs, **Then** it succeeds and all 60 v1 URLs resolve unchanged.
**And** the rendered sidebar at this story's completion still shows both trees concatenated (Sidebar.astro override lands in V2-1.6) — the user-visible sidebar swap is not yet wired, but the data is restructured.

### Story V2-1.5: Build Header.astro top-nav override

As a reader on any page,
I want a persistent top-navigation strip with Process and With AI tabs visible above the existing site title row,
So that I can see and switch between the two trees from any page on the site.

**Acceptance Criteria:**

**Given** `src/components/Header.astro`, **When** inspected, **Then** it imports the Starlight default header via `import Default from '@astrojs/starlight/components/Header.astro'` (or composes Starlight's header primitives if the default-export shape differs at first implementation).
**And** it renders a `<div class="top-nav" role="navigation" aria-label="Tree switch">` containing two `<a>` elements: "Process" pointing at the base URL and "With AI" pointing at `<base>/with-ai/`.
**And** it derives `isAiTree` from `Astro.url.pathname.startsWith(<base> + 'with-ai/')` and assigns the `active` CSS class to the matching link.
**And** it composes the Starlight default Header below the top-nav so existing search/theme/social UI continues to function unchanged.

**Given** `astro.config.mjs`, **When** inspected, **Then** the Starlight `components` field includes `Header: './src/components/Header.astro'`.

**Given** `src/styles/theme.css`, **When** inspected, **Then** it includes new rules for `.top-nav`, `.top-nav-link`, and `.top-nav-link.active` — providing horizontal layout, a visible active-state indicator (bottom border or pill), keyboard focus rings, and contrast meeting WCAG 2.2 AA in both light and dark themes (UX-DR-v2-2, UX-DR-v2-3).

**Given** the rendered top-nav, **When** a reader visits `/` (or any v1 process URL), **Then** the "Process" tab is visibly active and the "With AI" tab is inactive (but visible and clickable).
**And** when the reader visits `/with-ai/` (or any URL beginning with `/with-ai/`), the "With AI" tab is visibly active and the "Process" tab is inactive.
**And** the active-state derivation requires no JavaScript — disabling JS in the browser still shows the correct active tab (NFR-v2-5).

**Given** the rendered top-nav on mobile (320–767px viewport), **When** inspected, **Then** both tabs are visible inside the header bar (not hidden inside the hamburger menu), and tapping either tab navigates without an intermediate menu interaction (FR-v2-4, UX-DR-v2-1).

**Given** the build, **When** `pnpm build` runs, **Then** it succeeds and the top-nav renders on every page across both trees.

### Story V2-1.6: Build Sidebar.astro routing-aware override

As a reader switching between Process and With AI trees,
I want the sidebar to swap from the Process tree's six phase groups to the AI tree's one "With AI" group (plus the shared Reference group) when I click the With AI tab,
So that the sidebar reflects the tree I'm currently in and doesn't pollute me with the inactive tree's contents.

**Acceptance Criteria:**

**Given** `src/components/Sidebar.astro`, **When** inspected, **Then** it imports `processSidebar` and `aiSidebar` from `src/sidebar/process.ts` and `src/sidebar/ai.ts` respectively, and computes `isAiTree` from `Astro.url.pathname.startsWith(<base> + 'with-ai/')`.
**And** it renders the AI sidebar tree when `isAiTree === true` and the Process sidebar tree otherwise.
**And** it composes Starlight's sidebar primitives — either by passing the chosen sidebar to a `Default` component or by rendering Starlight's `<SidebarSublist>` directly — so theming, current-page highlighting, and collapse-expand behaviour all continue to function.

**Given** `astro.config.mjs`, **When** inspected, **Then** the Starlight `components` field includes `Sidebar: './src/components/Sidebar.astro'`.

**Given** a reader on any v1 process page, **When** they open the sidebar (desktop) or hamburger menu (mobile), **Then** they see the six numbered v1 phase groups plus the Reference group.
**And** the inactive AI tree's entries do NOT appear in the rendered sidebar HTML (verified by inspecting the DOM — no CSS-hidden leftovers).

**Given** a reader on `/with-ai/` or any AI-tree page, **When** they open the sidebar, **Then** they see the "With AI" group with 8 entries (Overview + 5 phases + 3 sub-stream entries nested under "Delivery") plus the Reference group.
**And** the inactive Process tree's entries do NOT appear in the rendered sidebar HTML.

**Given** the build, **When** `pnpm build` runs, **Then** it succeeds and every page in both trees renders the correct sidebar for its tree.
**And** Pagefind search continues to index all pages from both trees (search is single-scope and intentionally crosses trees; this is acknowledged in the architecture's deferred-enhancement list and is acceptable for v2).

### Story V2-1.7: Author the With-AI tab landing page

As a reader who has just clicked the "With AI" tab for the first time,
I want a landing page that frames the AI tree's purpose, names the battle-tested rule, and gives me a navigable list of the eight working AI pages,
So that I understand what the AI tree is, what discipline it follows, and where to go next.

**Acceptance Criteria:**

**Given** `src/content/docs/with-ai/index.mdx`, **When** inspected, **Then** it contains frontmatter declaring `tree: 'ai'`, `aiPageType: 'landing'`, `title`, `description`, and `lastUpdated`. No `phase`, no `order`, no `type`.
**And** the schema (post-V2-1.3) passes the file with no errors.

**Given** the rendered landing page, **When** read, **Then** it includes (a) a framing paragraph of ≤3 sentences naming the AI tree's purpose (process-first, AI-second; battle-tested only; tool-agnostic workflows then tool-specific recipes), (b) an explicit one-paragraph statement of the battle-tested rule (no tool listed without author validation), and (c) a navigable list of the eight working AI pages — Pre-Sales, Discovery, Requirements & Design, then a "Delivery" header with Project Management / Development / QA / Testing nested, then Deployment / Launch and Maintenance & Retainer.
**And** the navigable list points at the eight target URLs using leading-slash links resolved against `base` (`/with-ai/pre-sales/`, `/with-ai/discovery/`, etc.).
**And** the page does NOT carry the five-H2 AI page template — it is structurally an index, not a content page (UX-DR-v2-5; same exemption v1's `index.mdx` enjoys).
**And** the page voice is the same practitioner second-person voice as v1.

**Given** the rendered landing page at this story's completion, **When** a reader clicks any of the eight links, **Then** they land on a placeholder page or a 404 (because Epics V2-2 through V2-9 have not yet shipped). The landing page includes a tight note: "Working pages are rolling out incrementally; check back as the AI tree fills in." This note is removed in the last of Epics V2-2 through V2-9 to ship.
**And** the page header (Starlight breadcrumb area) displays the AI tab as active per the URL-prefix rule.

**Given** the build, **When** `pnpm build` runs, **Then** it succeeds and `/with-ai/` resolves to the rendered landing page.

---

## Epic V2-2: AI in Pre-Sales

_Goal repeated: Reader on the With AI tab finds a complete AI workflow for the Pre-Sales phase — what changes, tool-agnostic workflow, battle-tested tools (or placeholder), what isn't ready, what the industry does._

### Story V2-2.1: Author AI in Pre-Sales

As a consultant preparing a proposal for a qualified lead,
I want an AI workflow page that names what AI changes about Pre-Sales, the tool-agnostic workflow for using AI in scoping/proposal/SOW/pricing tasks, the specific battle-tested tools to use, what's not yet ready, and what the agency industry does,
So that I can cherry-pick the AI workflow into my proposal-writing process without having to invent the recipe.

**Topic-specific Acceptance Criteria** (in addition to shared structural ACs):

**Given** section 1 ("What changes when AI is in the loop"), **When** read, **Then** it names at least three Pre-Sales activities where AI shifts the dynamic (e.g., scoping-call note synthesis, proposal-section drafting, SOW-template selection, pricing-calibration against historical engagements) and explicitly states what does NOT change (judgement on whether the lead is qualified, trust-building in the first call, the agency's pricing strategy).

**Given** section 2 ("Tool-agnostic workflow"), **When** read, **Then** it describes the full Pre-Sales-with-AI loop end-to-end — intake (scoping-call notes + lead-qualification context) → execution (proposal section drafting, SOW template fill, pricing calibration) → handoff (artefacts ready for Discovery prep). The workflow is described independently of any specific AI tool — the reader could execute it against any sufficiently capable AI assistant.

**Given** section 3 ("Battle-tested tools and how to use them"), **When** read, **Then** either (a) it lists tools the author has validated with a one-paragraph workflow per tool — e.g., transcription tool for scoping-call notes, conversational model for proposal drafting, document-grounded model for SOW template selection — each tool backed by a validation log entry, OR (b) it carries the standard "tool research in progress" placeholder if no Pre-Sales tools have yet been validated.

**Given** section 4 ("What is not yet ready"), **When** read, **Then** it names at least three Pre-Sales AI anti-patterns or immature uses (e.g., AI generating SOW legal terms unsupervised, AI replacing human judgement on lead qualification, AI-generated proposal sent to client without senior review).

**Given** section 5 ("What the industry does"), **When** read, **Then** it contrasts at least two agency approaches to AI in Pre-Sales (e.g., AI-augmented vs. AI-restricted-to-internal-only-drafts; tool-stack-standardised vs. consultant-discretion).

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/with-ai/pre-sales.mdx` with frontmatter `tree: 'ai'`, `aiPageType: 'phase'`, `phase: 'pre-sales'`, `order: 2` (1 is the landing page's implicit slot in the sidebar).

**Given** the back-link and forward-link conventions, **When** inspected, **Then** the page includes near its top a back-link `[← Process reference: Pre-Sales](/pre-sales/)` and a forward cross-tree link to `/with-ai/discovery/` somewhere in section 2 or section 5 framing the handoff from Pre-Sales-with-AI to Discovery-with-AI.

---

## Epic V2-3: AI in Discovery

_Goal repeated: Reader on the With AI tab finds a complete AI workflow for Discovery — interview synthesis, workshop prep, prototype generation, deliverable drafting._

### Story V2-3.1: Author AI in Discovery

As a consultant kicking off a discovery engagement (Marcus's scenario),
I want an AI workflow page that names what AI changes about Discovery, the tool-agnostic workflow for using AI in interviews/workshops/prototyping/deliverables, the battle-tested tools, what's not yet ready, and what the industry does,
So that I run my discovery week using the team's standardised tool stack instead of improvising.

**Topic-specific Acceptance Criteria:**

**Given** section 1, **When** read, **Then** it names what AI shifts in Discovery (interview-synthesis time, workshop-prep depth, prototype generation speed) AND what stays human-led (the workshop room itself, the body-language reading, the stakeholder-conflict mediation).

**Given** section 2, **When** read, **Then** it describes the Discovery-with-AI loop end-to-end — pre-interview research → live interview/workshop conduct → post-session synthesis → deliverable draft → sign-off prep. Tool-agnostic.

**Given** section 3, **When** read, **Then** it either lists battle-tested tools (e.g., transcription/diarisation tool for interview recording, synthesis model for theme extraction, prototype-generation tool for clickable mocks, template-grounded model for deliverable drafting) with one-paragraph workflows each, OR carries the standard placeholder.

**Given** section 4, **When** read, **Then** it names anti-patterns: AI facilitation of the actual workshop, AI summarisation without human verification of theme accuracy, AI-generated prototypes mistaken for validated UX.

**Given** section 5, **When** read, **Then** it contrasts at least two industry approaches.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/with-ai/discovery.mdx` with frontmatter `tree: 'ai'`, `aiPageType: 'phase'`, `phase: 'discovery'`, `order: 3`.

**Given** cross-links, **When** inspected, **Then** back-link `[← Process reference: Discovery](/discovery/)` near top; forward cross-tree link to `/with-ai/requirements-design/` and at least one cross-tree handoff link to `/with-ai/pre-sales/` (where Pre-Sales-with-AI output becomes Discovery-with-AI input).

---

## Epic V2-4: AI in Requirements & Design

_Goal repeated: Reader finds AI workflow for FR/NFR drafting, architecture review, UX generation, infrastructure planning._

### Story V2-4.1: Author AI in Requirements & Design

As a consultant producing FRs/NFRs and design artefacts after Discovery (Priya's scenario),
I want an AI workflow page that names what AI changes for requirements/design tasks, the tool-agnostic workflow, the battle-tested tools, what isn't yet ready, and what the industry does,
So that I can produce a 90-FR document in two days instead of a week without falling into the chat-window-with-100-FRs anti-pattern.

**Topic-specific Acceptance Criteria:**

**Given** section 1, **When** read, **Then** it names what AI shifts (FR-drafting speed from prioritised feature lists, ADR red-teaming, UX wireframe generation, infrastructure-plan templating) AND what stays human-led (architecture judgement on trade-offs, stakeholder alignment on UX direction, infrastructure cost approval).

**Given** section 2, **When** read, **Then** it describes the Requirements-and-Design-with-AI loop — prioritised feature list intake → FR/NFR draft → adversarial-pass review → architecture sketch → red-team review → UX generation → infrastructure plan. Tool-agnostic.

**Given** section 3, **When** read, **Then** it either lists battle-tested tools (e.g., structured-FR-spec generator, conversational model for ADR red-teaming, design-system component generator, infrastructure-as-code drafter) with one-paragraph workflows each, OR carries the placeholder.

**Given** section 4, **When** read, **Then** section 4 explicitly names: feeding a 100+ FR document into a chat window in one shot; AI-only ADR generation without architect review; using AI-generated wireframes as final design without UX validation; AI infrastructure plans without security review.

**Given** section 5, **When** read, **Then** it contrasts at least two industry approaches.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/with-ai/requirements-design.mdx` with frontmatter `tree: 'ai'`, `aiPageType: 'phase'`, `phase: 'requirements-design'`, `order: 4`.

**Given** cross-links, **When** inspected, **Then** back-link `[← Process reference: Requirements & Design](/requirements-design/)`; forward cross-tree link to `/with-ai/delivery/development/` (and ideally `/with-ai/delivery/qa-testing/` for test-generation handoff); backward cross-tree link to `/with-ai/discovery/`.

---

## Epic V2-5: AI in Project Management (Delivery sub-stream)

_Goal repeated: Reader finds AI workflow for status reports, backlog grooming, sprint planning, retros, change logs._

### Story V2-5.1: Author AI in Project Management

As a project manager running a Delivery engagement,
I want an AI workflow page that names what AI changes for PM tasks, the tool-agnostic workflow, the battle-tested tools, what isn't ready, and what the industry does,
So that my weekly status reports, retro syntheses, and backlog grooming are AI-assisted in line with team practice.

**Topic-specific Acceptance Criteria:**

**Given** section 1, **When** read, **Then** it names what AI shifts (status report drafting, backlog refinement against acceptance criteria, sprint-planning calibration against historical velocity, retro theme extraction, change-log generation) AND what stays human-led (sponsor escalations, risk judgement calls, team-dynamics calls).

**Given** section 2, **When** read, **Then** it describes the PM-with-AI weekly rhythm — backlog refinement → sprint planning → execution monitoring → status report → retro → change log. Tool-agnostic.

**Given** section 3, **When** read, **Then** battle-tested tools listed (or placeholder).

**Given** section 4, **When** read, **Then** anti-patterns named: AI generating status reports without PM verification of sponsor-sensitive items; AI retro synthesis that flattens controversial themes; AI sprint plans not validated against actual team capacity.

**Given** section 5, **When** read, **Then** contrasts at least two industry approaches.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/with-ai/delivery/project-management.mdx` with frontmatter `tree: 'ai'`, `aiPageType: 'delivery-stream'`, `phase: 'delivery'`, `deliveryStream: 'project-management'`, `order: 5`.

**Given** cross-links, **When** inspected, **Then** back-link `[← Process reference: Project Management](/delivery/project-management/)`; forward cross-tree link to `/with-ai/delivery/development/` AND `/with-ai/delivery/qa-testing/` (PM is concurrent with both); backward cross-tree link to `/with-ai/requirements-design/`.

---

## Epic V2-6: AI in Development (Delivery sub-stream)

_Goal repeated: Reader finds AI workflow for agentic coding loops, AI-assisted review, dependency automation. Densest tool stack on the site._

### Story V2-6.1: Author AI in Development

As an engineer working in active Delivery (the heaviest user of AI in the site),
I want an AI workflow page that names what AI changes for development, the tool-agnostic workflow (agentic loops vs. supervised completion vs. autocomplete), the battle-tested tools (Cursor, Claude Code, Copilot, Aider, Cline/RooCode, etc.), what isn't yet ready, and what the industry does,
So that the agency has a single reference for how engineers should run AI-augmented development without the hype distorting practice.

**Topic-specific Acceptance Criteria:**

**Given** section 1, **When** read, **Then** it names what AI shifts in development (agentic coding loops, feature-flag-gated rollouts, AI-assisted review, AI-pair refactoring, dependency-update automation) AND what stays human-led (architectural decisions inside the loop, production deploy approvals, security-sensitive code review).

**Given** section 2, **When** read, **Then** the tool-agnostic workflow names the three intensity bands — autocomplete-only / supervised-completion / agentic-loop — and describes each end-to-end. Defines the conditions under which each band is appropriate.

**Given** section 3, **When** read, **Then** it lists battle-tested tools (or placeholder). If listed, at minimum it covers the agentic-loop band (e.g., Cursor, Claude Code, Aider, Cline/RooCode), the supervised-completion band, and the dependency-automation band. Each tool entry includes the engagement-validated workflow.

**Given** section 4, **When** read, **Then** anti-patterns named: blind merge of agentic-loop output without diff review; agents touching production deploys; AI-generated tests merged without human assertion review; agentic loops on security-sensitive code without architect sign-off; using a model that is not in the team's standardised stack.

**Given** section 5, **When** read, **Then** contrasts at least three industry cultures (e.g., autocomplete-only firms, agentic-loop-default firms, mixed-discipline firms).

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/with-ai/delivery/development.mdx` with frontmatter `tree: 'ai'`, `aiPageType: 'delivery-stream'`, `phase: 'delivery'`, `deliveryStream: 'development'`, `order: 6`.

**Given** cross-links, **When** inspected, **Then** back-link `[← Process reference: Development](/delivery/development/)`; forward cross-tree link to `/with-ai/delivery/qa-testing/` (dev → QA handoff); cross-link to `/with-ai/delivery/project-management/` (concurrent stream); backward cross-tree link to `/with-ai/requirements-design/`.

**Given** the page length, **When** measured, **Then** the page may exceed 500 lines (the densest AI page; per prd-v2-ai.md AD-2, this is acceptable — depth earns its keep). Page navigability is supported by Starlight's right-rail TOC.

---

## Epic V2-7: AI in QA / Testing (Delivery sub-stream)

_Goal repeated: Reader finds AI workflow for test generation, accessibility scanning, security triage, exploratory tests, regression suite maintenance._

### Story V2-7.1: Author AI in QA / Testing

As a QA engineer running test design for a Delivery engagement,
I want an AI workflow page that names what AI changes for testing, the tool-agnostic workflow, the battle-tested tools, what isn't yet ready, and what the industry does,
So that AI augments test generation and triage without my QA discipline degrading into AI-rubber-stamping.

**Topic-specific Acceptance Criteria:**

**Given** section 1, **When** read, **Then** it names what AI shifts (test-case generation from FRs, accessibility scanning at scale, security-finding triage, exploratory-test prompt generation, regression-suite maintenance) AND what stays human-led (exploratory testing intuition, accessibility nuance beyond automated scans, threat-model design).

**Given** section 2, **When** read, **Then** the QA-with-AI workflow loop described end-to-end — FR intake → test-case generation → human review → execution → triage → regression-suite update. Tool-agnostic.

**Given** section 3, **When** read, **Then** battle-tested tools listed (or placeholder).

**Given** section 4, **When** read, **Then** anti-patterns named: trusting AI-generated tests without human assertion review; AI-only accessibility passes that miss screen-reader nuance; AI security triage that auto-closes findings without engineer verification; AI regression-suite updates that delete tests judged "redundant".

**Given** section 5, **When** read, **Then** contrasts at least two industry approaches.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/with-ai/delivery/qa-testing.mdx` with frontmatter `tree: 'ai'`, `aiPageType: 'delivery-stream'`, `phase: 'delivery'`, `deliveryStream: 'qa-testing'`, `order: 7`.

**Given** cross-links, **When** inspected, **Then** back-link `[← Process reference: QA / Testing](/delivery/qa-testing/)`; cross-link to `/with-ai/delivery/development/` for the QA → dev finding-feedback loop; cross-link to `/with-ai/delivery/project-management/`; backward cross-tree link to `/with-ai/requirements-design/`.

---

## Epic V2-8: AI in Deployment / Launch

_Goal repeated: Reader finds AI workflow for runbook generation, cutover-rehearsal scripting, monitoring-config drafting, smoke-test generation._

### Story V2-8.1: Author AI in Deployment / Launch

As an engineer leading a deployment / launch,
I want an AI workflow page that names what AI changes for launch tasks, the tool-agnostic workflow, the battle-tested tools, what isn't yet ready, and what the industry does,
So that runbook and monitoring config drafting are AI-accelerated without skipping the dry-run discipline that prevents production incidents.

**Topic-specific Acceptance Criteria:**

**Given** section 1, **When** read, **Then** what AI shifts (runbook generation, cutover-rehearsal scripting, monitoring-config drafting, post-deploy smoke-test generation) AND what stays human-led (the cutover go/no-go call, the rollback decision, the client-facing comms).

**Given** section 2, **When** read, **Then** describes the deployment-with-AI workflow — pre-cutover (runbook drafting + dry-run scripting) → cutover execution (AI runs status checks, humans run the go/no-go) → post-cutover (smoke tests + monitoring verification).

**Given** section 3, **When** read, **Then** battle-tested tools listed (or placeholder).

**Given** section 4, **When** read, **Then** anti-patterns named: AI-generated runbooks not validated against the actual infrastructure; AI cutover scripts run without dry-run; AI monitoring configs that miss the right SLO targets; AI smoke tests that don't cover business-critical flows.

**Given** section 5, **When** read, **Then** contrasts at least two industry approaches.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/with-ai/deployment-launch.mdx` with frontmatter `tree: 'ai'`, `aiPageType: 'phase'`, `phase: 'deployment-launch'`, `order: 8`.

**Given** cross-links, **When** inspected, **Then** back-link `[← Process reference: Deployment / Launch](/deployment-launch/)`; forward cross-tree link to `/with-ai/maintenance-retainer/`; backward cross-tree link to `/with-ai/delivery/qa-testing/`.

---

## Epic V2-9: AI in Maintenance & Retainer

_Goal repeated: Reader finds AI workflow for incident triage, post-incident-review drafting, retainer status reports, hypercare prioritisation, closeout synthesis._

### Story V2-9.1: Author AI in Maintenance & Retainer

As an on-call engineer or retainer lead in the maintenance phase,
I want an AI workflow page that names what AI changes for maintenance and retainer work, the tool-agnostic workflow, the battle-tested tools, what isn't yet ready, and what the industry does,
So that incident triage and engagement-closeout artefacts are AI-accelerated without losing the editorial judgement that closeout documents demand.

**Topic-specific Acceptance Criteria:**

**Given** section 1, **When** read, **Then** what AI shifts (incident triage, post-incident-review drafting, retainer status reports, hypercare-window prioritisation, engagement-closeout synthesis) AND what stays human-led (the on-call go/no-go on production, the political nuance of a PIR, the client-facing closeout narrative).

**Given** section 2, **When** read, **Then** the maintenance-with-AI workflow described — incident detection → AI triage → human verification → fix → PIR drafting → retainer status report → closeout synthesis.

**Given** section 3, **When** read, **Then** battle-tested tools listed (or placeholder).

**Given** section 4, **When** read, **Then** anti-patterns named: AI-only incident triage without on-call human verification; AI PIRs that omit politically sensitive lessons; AI closeout summaries that fail to surface what the agency would do differently.

**Given** section 5, **When** read, **Then** contrasts at least two industry approaches.

**Given** the page file, **When** inspected, **Then** it is at `src/content/docs/with-ai/maintenance-retainer.mdx` with frontmatter `tree: 'ai'`, `aiPageType: 'phase'`, `phase: 'maintenance-retainer'`, `order: 9`.

**Given** cross-links, **When** inspected, **Then** back-link `[← Process reference: Maintenance & Retainer](/maintenance-retainer/)`; forward cross-tree link to `/with-ai/pre-sales/` (the lifecycle loops for repeat engagements); backward cross-tree link to `/with-ai/deployment-launch/`.

---

## Epic V2-10: AI Callouts on v1 Phase Overviews

_Goal repeated: Reader exploring the v1 process tree discovers the AI tree from inside the content — each of the six v1 phase overviews has a 2–3 sentence "AI in this phase" callout linking forward._

### Story V2-10.1: Add AI callouts to all six v1 phase overviews

As a reader on a v1 phase overview page (Marcus's discovery path),
I want a brief, uniform 2–3 sentence callout near the top of the page pointing me to the corresponding AI tree page,
So that I discover the AI tree from inside the process content without the AI content leaking into the rest of the v1 page.

**Acceptance Criteria:**

**Given** `src/content/docs/pre-sales/index.md`, **When** inspected, **Then** it contains a Markdown blockquote ≤3 sentences near the top of the page (above the existing intro paragraph or just after the title): naming AI's role in Pre-Sales succinctly and linking to `/with-ai/pre-sales/`. The blockquote is the only new content on the page.
**And** `lastUpdated` is bumped to the authoring commit date (the only frontmatter change beyond the existing `tree: 'process'` line added in Story V2-1.2).

**Given** `src/content/docs/discovery/index.md`, **When** inspected, **Then** a Markdown blockquote of the same shape is present, linking to `/with-ai/discovery/`.

**Given** `src/content/docs/requirements-design/index.md`, **When** inspected, **Then** a Markdown blockquote is present, linking to `/with-ai/requirements-design/`.

**Given** `src/content/docs/delivery/index.md`, **When** inspected, **Then** a Markdown blockquote is present. Because Delivery has three AI sub-stream pages (not one), the callout links forward to all three: `/with-ai/delivery/project-management/`, `/with-ai/delivery/development/`, and `/with-ai/delivery/qa-testing/`. Format: either three short links inline or a tight enumerated list of three within the blockquote.

**Given** `src/content/docs/deployment-launch/index.md`, **When** inspected, **Then** a Markdown blockquote is present, linking to `/with-ai/deployment-launch/`.

**Given** `src/content/docs/maintenance-retainer/index.md`, **When** inspected, **Then** a Markdown blockquote is present, linking to `/with-ai/maintenance-retainer/`.

**Given** all six callouts, **When** compared side-by-side, **Then** they share a uniform 2–3 sentence shape — naming what AI changes in that phase, optionally naming what stays human-led, and inviting the reader forward to the AI page. No callout is materially longer or shorter than the others. No callout uses marketing tone, banner styling, or special icons. All six use the same accent and link styling as the rest of the v1 voice.

**Given** the build, **When** `pnpm build` runs, **Then** it succeeds and all six callouts render correctly under the configured `base` path.
**And** all six callout links resolve at runtime (verified post-deploy when Epics V2-2 through V2-9 have shipped).

**Given** the rest of each phase overview page, **When** inspected, **Then** no other content has been modified beyond the callout addition and `lastUpdated` bump — the v1 voice, structure, four-H2 template, and existing prose are unchanged (NFR-v2-11).

---

## Implementation Sequencing

The 10 epics are arranged in the natural implementation order. Two viable schedules:

**Conservative schedule (foundation-first, content-second, callouts-last):**

1. Epic V2-1 (7 stories) — foundation lands first; AI landing renders even though working pages are stubs.
2. Epic V2-2 (Pre-Sales) — proves the architecture against real content.
3. Epic V2-3, V2-4 — extends to 2nd and 3rd phases.
4. Epic V2-5, V2-6, V2-7 — Delivery sub-streams, in PM → Dev → QA order (PM is most-referenced; Dev is largest).
5. Epic V2-8, V2-9 — closes the lifecycle.
6. Epic V2-10 — cross-tree discovery callouts on v1 phase overviews. Lands last so every link resolves.

**Aggressive schedule (per-phase callout coupling):**

Same as above except Epic V2-10's six stories are folded into Epics V2-2 through V2-9 at the moment each AI page ships — i.e. the Pre-Sales v1 callout lands at the moment `with-ai/pre-sales.mdx` lands. This produces tighter PR boundaries but requires that the callout text be authored at AI-page authoring time rather than as a separate batched pass. Either schedule satisfies the FRs.

## Validation Summary

**FR coverage:** All 19 v2 FRs (FR-v2-1 through FR-v2-19) mapped to epics in the FR Coverage Map table above. No FR is uncovered.

**NFR coverage:** All 16 v2 NFRs mapped to epics. NFRs split across infrastructure (Epic V2-1 covers most build/deploy/schema/contrast NFRs) and content discipline (Epics V2-2 to V2-9 cover voice, battle-tested, lastUpdated NFRs).

**UX-DR coverage:** UX-DR-v2-1 through UX-DR-v2-11 all mapped. v1 UX-DRs (UX-DR1 through UX-DR29) carry over unchanged — v2 does not amend them.

**Story sizing:** Stories range from one-file schema edits (V2-1.1, V2-1.3) to substantial content-authoring (V2-6.1 Development is the largest single content story). Each story is completable by a single dev agent in one focused session. No story has a forward dependency on a later story within the same epic. Epic V2-10 is the only epic with a soft dependency on earlier epics — its links resolve correctly only once Epics V2-2 to V2-9 have shipped, hence the recommendation to ship V2-10 last.

**Dependency-free within epic:** Epic V2-1's 7 stories are sequential (V2-1.1 → V2-1.2 → V2-1.3 → V2-1.4 → V2-1.5 → V2-1.6 → V2-1.7), but each story is independently completable once its predecessor lands. No story in V2-1 references a future story's output. Content epics (V2-2 through V2-9) have one story each — no within-epic dependencies. Epic V2-10's six callouts are independently completable, batched into one story for PR cleanliness.

**Battle-tested rule operationalisation:** Each content story's shared ACs include the validation-log gate. PR review for any AI content story blocks merge if listed tools lack validation log entries.

**Architecture compliance:** Every story traces back to AD-V2-1 through AD-V2-8 in [`architecture-v2-ai.md`](./architecture-v2-ai.md). No story introduces architectural surface area beyond what the architecture document sanctioned.

---

## Cross-References

- v2 PRD: [`prd-v2-ai.md`](./prd-v2-ai.md) — defines the 19 FRs, 16 NFRs, and 7 PRD-level architectural decisions (AD-1 through AD-7).
- v2 Architecture: [`architecture-v2-ai.md`](./architecture-v2-ai.md) — operationalises the 7 PRD ADs into 8 implementation-level ADs (AD-V2-1 through AD-V2-8) plus 2 deferred (AD-V2-9, AD-V2-10).
- v1 Epics: [`epics.md`](./epics.md) — Epics 1–13, 83 stories, all completed by 2026-05-08.
- v1 PRD: [`prd.md`](./prd.md) — original product framing.
- v1 Architecture: [`architecture.md`](./architecture.md) — every v1 decision remains in force.
- Sprint Status: `_bmad-output/implementation-artifacts/sprint-status.yaml` — v2 epics and stories to be added when implementation kicks off.
