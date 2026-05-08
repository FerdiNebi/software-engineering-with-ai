---
stepsCompleted: ["step-01-init", "step-02-discovery", "step-02b-vision", "step-02c-executive-summary", "step-03-success", "step-04-journeys", "step-05-domain", "step-06-innovation", "step-07-project-type", "step-08-scoping", "step-09-functional", "step-10-nonfunctional", "step-11-polish", "step-12-complete"]
inputDocuments:
  - "_bmad-output/planning-artifacts/prd.md"
  - "_bmad-output/planning-artifacts/architecture.md"
  - "_bmad-output/planning-artifacts/product-brief-Software-Development-with-AI.md"
  - "_bmad-output/planning-artifacts/product-brief-Software-Development-with-AI-distillate.md"
  - "_bmad-output/planning-artifacts/ux-design-specification.md"
  - "Feedback.md"
workflowType: 'prd'
documentVersion: 'v2-ai-addition'
parentDocument: '_bmad-output/planning-artifacts/prd.md'
documentCounts:
  briefs: 2
  research: 0
  brainstorming: 0
  projectDocs: 0
classification:
  projectType: "Web App (static documentation site) — v2 content extension"
  domain: "Education (professional/practitioner reference)"
  complexity: "Low-Medium"
  projectContext: "Brownfield extension to v1 (60-page site live at ferdinebi.github.io/software-engineering-with-ai/)"
mode: "autonomous-creation"
---

# Product Requirements Document (v2 — AI Addition) — End-to-End Software Engineering with AI

**Author:** Ferdi
**Date:** 2026-05-08
**Project Type:** Static documentation site (v2 content extension on v1 foundation)
**Complexity:** Low-Medium (no new runtime, but two-tree IA introduces non-trivial navigation state)
**Project Context:** Brownfield extension. v1 ships 60 pages at `ferdinebi.github.io/software-engineering-with-ai/`. v2 layers an "AI execution" content tree on top without modifying the v1 process tree's voice or structure.
**Parent PRD:** [`prd.md`](./prd.md) (v1 — process content)

**Revisions:**
- 2026-05-08 — Initial v2 PRD created in autonomous BMAD mode following the architectural decision discussion in conversation. v2 supersedes the original PRD's "5th H2 per page" plan with a top-level "With AI" sidebar tree and a coarser granularity (9 AI pages vs. ~48 per-page overlays). See *Architectural Decisions* section for rationale.

## Executive Summary

The v2 addition layers AI-execution guidance onto the v1 process site via a **second top-level sidebar tree** ("With AI") rendered as a peer to the existing process tree under Astro Starlight's `topNav` configuration. The AI tree contains nine pages — one tab-overview landing page, five phase-level pages, and three Delivery sub-stream pages (Project Management, Development, QA / Testing) — each providing tool-agnostic workflow guidance plus battle-tested tool recommendations validated by the author in real client delivery. Each phase overview in the v1 process tree gains a brief two-to-three-sentence "AI in this phase" callout linking to its AI counterpart, but no other v1 page is modified.

The decision to use a parallel tree rather than the v1 PRD's original "5th H2 per page" plan is deliberate. Process content has a long half-life; AI tool content has a short one. Embedding AI guidance in 48 process pages would double maintenance, dilute the practitioner voice the process tree has established, and produce churn on every page each time a featured tool is acquired, renamed, or re-priced. A separate tree confines AI churn to the AI tree, halves authoring volume (nine focused pages instead of forty-eight thin overlays), and structurally enforces the "process-first, then AI" framing the original product brief committed to.

The original PRD distillate's framing remains correct: tool-agnostic guidance first, then specific tool selection from research, then validation against real practice. v2 keeps that discipline and ships fewer, denser pages because agencies in practice select AI tools at the phase level, not the activity level — engineers do not pick a different model for "lead qualification" versus "proposal writing"; they pick one model and run it across all of Pre-Sales with different prompts.

### What Makes v2 Different from a Generic AI-Workflows Site

- **Process foundation is already shipped.** v2 lands on a 60-page practitioner-grade process reference. AI workflows are layered onto a documented activity, not invented in isolation. Most AI-workflow content on the internet starts with the tool; this site starts with the activity and adds the tool only when the tool earns its keep.
- **Battle-tested-only rule preserved.** The original PRD's discipline — *"Tool recommendations come from research per phase, not assumed upfront"* and *"Ferdi validates tools against his own practice before including them — no trend-chasing"* — applies to every AI page. A page that lacks battle-tested tool recommendations ships with the tool-agnostic workflow only and a placeholder noting the tool research is in progress. No speculative tool listings.
- **Coarser granularity, deeper pages.** Nine pages can each be 300–500 lines without overwhelming the reader, where 48 thin overlays would produce a fragmented experience. The depth lets the page show a complete workflow end-to-end (intake → execution → handoff) rather than a one-paragraph "use Tool X here" hint.
- **Two-tree IA rather than collapsed-section UX.** The reader's mental model is explicit: process or AI, never a hidden third state. No accordions, no tabs within pages, no "click to expand" interactions that hide the AI content. The reader sees the choice in the top navigation.
- **Independent update cadence.** The process tree updates when agency practice evolves (slow, semi-annual). The AI tree updates when validated tool reality changes (faster, often quarterly). Separating the trees lets the cadences run independently without each disturbing the other's commit history.

## Success Criteria

### User Success

- A senior engineer in any phase of an active engagement can switch to the "With AI" tab, navigate to the corresponding phase page, and find a workflow that names specific tools, specific prompts, and specific gotchas drawn from real delivery.
- A reader who only wants the process never has the AI content forced on them — the v1 tree continues to read cleanly, with the AI content one click away in the top nav rather than embedded in every page.
- A reader landing on a v1 process phase overview sees a tight 2–3 sentence "AI in this phase" callout pointing to the AI tree, with no further AI content on that page or its sub-pages.

### Business Success

- **v2 content shipped:** All nine AI pages have validated tool recommendations from at least one of the author's real client engagements. Pages without validated tools ship with the tool-agnostic workflow plus an explicit "tool research in progress" note rather than speculative listings.
- **Practitioner utility:** Ferdi actively references the AI pages during real delivery and finds the recommendations accurate, current, and worth acting on. Pages whose tool recommendations have grown stale are flagged and revised within the engagement that surfaced the staleness.
- **Public signal:** Organic discovery sustained or improved relative to v1. Specific quality indicator: senior engineers and consulting practitioners reference the AI pages by URL when discussing tooling on social channels.

### Technical Success

- Top-navigation toggles between "Process" (v1 tree) and "With AI" (v2 tree) on desktop and mobile, with the active tab visually distinguished.
- Process-tree URLs unchanged from v1. All 55 v1 cross-links continue to resolve. AI-tree pages live under a clear URL namespace (proposed: `/with-ai/<phase>/` and `/with-ai/delivery/<stream>/`).
- Build time stays under 60 seconds with the additional pages (NFR2 carry-over from v1).
- Mobile sidebar collapses cleanly with both trees represented; switching trees on mobile takes one tap.

### Measurable Outcomes

- All nine AI pages render at v1's content-quality bar (no stubs, no "TODO", no speculative tool lists).
- Each v1 phase overview has its 2–3 sentence "AI in this phase" callout in place, linking forward to the corresponding AI page.
- Build pipeline (`pnpm build`) succeeds against the combined v1 + v2 trees with zero broken links.
- Ferdi has used at least one AI workflow from the AI tree in a live client engagement and found it accurate.

## Product Scope

### v2 — AI Addition (this PRD)

The "With AI" sidebar tree contains **nine pages**, organised as follows:

1. **`/with-ai/`** — Tab landing / overview page. Names the AI tree's purpose, the battle-tested rule, the tool-agnostic-then-tool-specific framing, and the cross-cutting AI tooling principles that apply across all phases. Lists the eight working pages below as a navigable index.
2. **`/with-ai/pre-sales/`** — AI in Pre-Sales & Business Development. Workflows for: scoping-call notes synthesis, proposal drafting, SOW research and template selection, pricing-estimation calibration against historical engagements.
3. **`/with-ai/discovery/`** — AI in Discovery. Workflows for: stakeholder-interview synthesis (transcript → themes → decisions), workshop facilitation prompts, prototype generation, requirements-document drafting from workshop notes.
4. **`/with-ai/requirements-design/`** — AI in Requirements & Design. Workflows for: FR/NFR drafting from prioritised feature lists, architecture review (ADR drafting and red-teaming), UX generation (wireframes, design-system component generation), infrastructure-plan drafting.
5. **`/with-ai/delivery/project-management/`** — AI in Project Management. Workflows for: status-report generation, backlog grooming, sprint-planning calibration, retro synthesis, change-log drafting.
6. **`/with-ai/delivery/development/`** — AI in Development. The largest AI page. Workflows for: coding-agent loops (Cursor, Claude Code, Copilot, Aider, Cline/RooCode), feature-flag-gated development, AI-assisted code review, AI-pair refactoring, dependency-update automation.
7. **`/with-ai/delivery/qa-testing/`** — AI in QA / Testing. Workflows for: test-case generation from FRs, accessibility scanning at scale, security-finding triage, exploratory-test prompt generation, regression-suite maintenance.
8. **`/with-ai/deployment-launch/`** — AI in Deployment / Launch. Workflows for: runbook generation, cutover-rehearsal scripting, monitoring-config drafting, post-deploy smoke-test generation.
9. **`/with-ai/maintenance-retainer/`** — AI in Maintenance & Retainer. Workflows for: incident triage, post-incident-review drafting, retainer status report generation, hypercare-window prioritisation, engagement-closeout / lessons-learned synthesis.

There is no per-leaf-page AI overlay in v2. The original PRD's "5th H2 per page" plan is **deliberately not implemented**. Instead, the v1 process leaf pages remain unchanged, and only the six v1 phase overviews receive the brief "AI in this phase" callout linking forward to the corresponding AI page.

**Per-page structure for AI pages (proposed template, to be locked at architecture phase):**

1. **What changes when AI is in the loop** — how the activity shifts when AI is assisting; what stays the same (skills, judgement, accountability); what is genuinely different (speed, scale, novel failure modes).
2. **Tool-agnostic workflow** — the workflow as a sequence of operations independent of any specific tool. The reader could execute this against any sufficiently capable AI assistant.
3. **Battle-tested tools and how to use them** — specific tools the author has validated in delivery, with one-paragraph workflows per tool. Tools that have not been validated are not listed.
4. **What is not yet ready** — anti-patterns, immature use cases, hype the agency should resist. Counterbalances the tool list and reinforces the battle-tested rule.
5. **What the industry does** — preserved from v1's voice. How leading agencies are using AI in this phase, with the same trade-off-aware framing v1 uses (e.g., *agentic-loop vs. supervised-completion vs. autocomplete-only cultures*).

The reader of an AI page gets the same scan-and-leave structure they got on v1 pages, with the same four-or-five-section discipline.

### Out of v2 Scope (deferred)

- Per-leaf-page AI overlay (the original 5th-H2 plan) — superseded by the parallel-tree architecture.
- Video walkthroughs of AI workflows — deferred to v3 or beyond.
- Interactive components (live model embed, prompt sandboxes) — explicitly out of scope; the static-build constraint from v1 NFR9 still applies.
- AI-generated content blocks within process pages — out of scope; the process tree's voice rule prohibits AI-marked content.
- A "tool comparison matrix" page — considered and rejected. Comparison matrices age badly; the tool-list-per-phase approach captures only what the author has validated and ages more gracefully.
- Multi-tenancy or per-reader personalisation (e.g., "show me AI workflows for the model I subscribe to") — out of scope; the static-site constraint persists.

### Vision (Future — no commitments)

- A third tree for "Templates and Checklists" (downloadable proposal templates, runbooks, mobilization checklists, etc.) if reader demand surfaces.
- Localisation of v1+v2 content if the audience reach justifies it.
- An RSS feed of "what changed in the AI tree this month" once tool churn is a sustained pattern.

## User Journeys

### Journey 1: Marcus — The New Consulting Engineer Who Needs Process First (Carryover from v1, AI Path)

**Marcus** is the same senior backend engineer from v1 — eight years at a product company, just joined a consultancy, has his first client kickoff in two weeks. v1's job was to teach him the process. v2's job is to give him the AI overlay once he understands what the activity is.

**Opening Scene:** Marcus has worked through v1's Discovery phase. He understands what a stakeholder interview is for, what the workshop produces, what the deliverables sign-off ritual looks like. He has his discovery week scheduled. Now he wants to know: "I've heard the team uses Claude or Cursor for this — what does that actually look like in a workshop?"

**Rising Action:** Marcus clicks the "With AI" tab in the top navigation. He sees the same six-phase shape he learned in the Process tree, plus the three Delivery sub-streams. He clicks Discovery. The page opens with a "What changes when AI is in the loop" section that names the genuine shifts — interviews can be transcribed and synthesised in minutes rather than hours, but the synthesis is only as good as the prompt and the team still needs to verify themes against the room. He reads the tool-agnostic workflow, then the battle-tested tools: Otter and Granola for transcription, Claude for synthesis, the agency's own Notion templates for capturing decisions.

**Climax:** Marcus realises that the AI page does not replace the process page; it tells him *what changes* when AI is involved. The list of "what is not yet ready" reassures him — AI cannot facilitate a workshop, cannot read body language, cannot decide whether the sponsor is hesitating because of cost or because of internal politics. He learns where AI helps and where the human judgement his role exists for is non-negotiable.

**Resolution:** Marcus runs his discovery workshop with the team's recommended transcription tool, runs the synthesis prompt the AI page named, and lands the workshop summary with the sponsor inside 24 hours. Without v2, he would have either run an AI-free discovery (slower than the team norm) or improvised a tool stack that did not match what the team uses.

---

### Journey 2: Priya — The Freelancer Who Already Knows the Process and Wants the Tooling (Carryover from v1, AI Path)

**Priya** is the same freelancer scaling up from v1. She knows the process — she has been delivering for three years. What she needs to know is what tools the agency-grade practitioners are using right now, because she does not have a team to learn from.

**Opening Scene:** Priya is mid-engagement on a £75k fintech rebuild. She is producing the FR/NFR document and finds herself drafting requirements line-by-line. She knows there are AI tools that can help, but she cannot tell which ones are worth her time and which ones are hype.

**Rising Action:** Priya goes directly to the "With AI" tab and clicks Requirements & Design. She does not read the process page — she already wrote it from memory. The AI page names the workflow she wants: feed the prioritised feature list into a focused prompt, get a draft FR/NFR catalogue back, hand-edit for atomic-testable-traceable discipline, run an adversarial pass to find ambiguities, sign off. The page names two tools she has heard of (Claude and an FR-template tool the author validated), one tool she has not (a structured-spec generator), and one anti-pattern she had been about to commit (using a chat interface for a 100-FR document).

**Climax:** Priya cherry-picks the workflow. She skips the tool she does not have access to, uses Claude with the prompt the AI page gives her, and produces a 90-FR draft in an afternoon. Hand-editing takes another day. The total is two days of focused work for what would have been a week of line-by-line drafting.

**Resolution:** Priya bookmarks the AI Requirements & Design page. She also clicks back to v1's Functional & Non-Functional Requirements page once during the engagement to remind herself of the atomic-testable-traceable trinity she had not internalised. The two trees serve her differently — the process tree is reference, the AI tree is execution.

---

### Journey 3: Ferdi — The Trainer Running a v2 Session (Carryover from v1, AI Path)

**Ferdi** is preparing the second of two training sessions for his consultancy's junior-to-mid engineers. The first session covered the process using v1. The second session covers the AI execution layer using v2. The two sessions are deliberately separate.

**Opening Scene:** Ferdi opens the site, clicks the "With AI" tab, and starts at the AI overview page. He tells the group: "Last week we covered the process. This week we cover the AI overlay. Same lifecycle, different lens. The point is to know where AI helps, where it doesn't, and which tools the team has battle-tested."

**Rising Action:** Ferdi navigates phase-by-phase using the AI pages as his outline. The "What changes when AI is in the loop" section opens each module. The "battle-tested tools" section produces the live demo — Ferdi shows each tool against a real engagement artefact (with client identifiers redacted). The "what is not yet ready" section produces the disagreements he wants the room to have — engineers push back on what he has flagged as immature, and the conversation calibrates.

**Climax:** When the group reaches the Development AI page, the demo extends to forty-five minutes — the page is the largest and the tool stack is the densest. Ferdi shows agentic loops in Cursor and Claude Code on a real refactor, names the failure modes he has hit, and gives the engineers the prompt patterns the team has standardised on. The page becomes the team's reference for the agentic-development discipline.

**Resolution:** The training session runs for ninety minutes using only the AI tree. The engineers leave with a tool stack to use on their next engagement, a list of patterns to avoid, and the knowledge that the AI tree is updated when the team's practice changes. Ferdi has the training material pre-built; he does not improvise tooling guidance per session.

---

### Journey Requirements Summary

| Capability | Revealed By | Priority |
|---|---|---|
| **Top-navigation toggle between Process and With-AI trees** | All journeys — reader chooses which lens to apply | MVP |
| **Tab landing page for With-AI tree** | Marcus, Ferdi — needs an entry point that frames the tree's purpose | MVP |
| **Phase-level AI pages mirroring process phases** | Marcus, Priya — uses the same mental model as the process tree | MVP |
| **Three Delivery sub-stream AI pages (PM/Dev/QA)** | Priya (Dev path), Ferdi (full training) — the streams use materially different tool stacks | MVP |
| **Battle-tested tool listings only** | Priya — needs trustworthy recommendations, not hype | MVP |
| **Tool-agnostic workflow first, tool-specific recipe second** | Marcus, Ferdi — workflows survive tool churn | MVP |
| **"What is not yet ready" section** | Ferdi (training calibration), Marcus (avoiding malpractice) | MVP |
| **2–3 sentence "AI in this phase" callout on each v1 process phase overview** | Marcus — discovers the AI tree from inside the Process tree | MVP |
| **Cross-link from each AI page back to its process counterpart** | All journeys — readers oscillate between process and execution | MVP |
| **Mobile-friendly tree switching** | Priya, Ferdi (mid-engagement reference) | MVP |

## Architectural Decisions Captured in This PRD

The following architectural decisions are documented here at PRD level so they cannot be silently revised during implementation. They will be re-confirmed and elaborated in the v2 architecture document.

### AD-1: Two-tree IA via top navigation, not per-page overlay

**Decision:** v2 ships as a parallel "With AI" sidebar tree at the same hierarchical level as the v1 process tree, accessed via Astro Starlight's top-navigation feature. The original PRD's "5th H2 per page" plan is superseded.

**Rationale:** Process content has a long half-life (years); AI tool content has a short one (months to quarters). Embedding AI content in 48 process pages would produce churn on every page each time a tool is acquired, renamed, or deprecated, polluting commit history and the practitioner-voice that v1 has established. A separate tree confines AI churn to AI files. The top-navigation framing also visibly reinforces the original brief's "process-first, then AI" sequencing — readers see the choice rather than infer it from page structure.

### AD-2: Coarser granularity than v1 (~9 AI pages, not 48)

**Decision:** The AI tree contains nine pages — one tab landing, five phase pages, and three Delivery sub-stream pages. There is no AI page per v1 leaf.

**Rationale:** Agencies in practice select AI tools at the phase level, not the activity level. An engineer does not select a different model for "lead qualification" versus "proposal writing"; they select one model and run it across all of Pre-Sales with different prompts. Forty-eight thin per-leaf overlays would fragment the experience without adding meaningful information. Nine focused pages, each 300–500 lines, can carry a complete workflow end-to-end (intake → execution → handoff) — the depth that earns the page its keep.

### AD-3: Battle-tested-only tool recommendations

**Decision:** No tool appears on an AI page until the author has validated it in a real client engagement. Pages without validated tools ship with tool-agnostic workflow plus an explicit "tool research in progress" note. No speculative tool listings.

**Rationale:** This is a carryover of the original PRD's discipline (*"Ferdi validates tools against his own practice before including them — no trend-chasing"*). v2 makes the discipline explicit at PRD level so that future contributions cannot ship aspirational tool lists. The site's differentiation in a hype-saturated space is the practitioner filter.

### AD-4: Process tree is read-only with respect to AI content

**Decision:** v2 modifies the v1 process tree only by adding a 2–3 sentence "AI in this phase" callout on each of the six phase overview pages. No leaf process page is modified. No FR/NFR is added to v1.

**Rationale:** v1's voice and structure are the value the site has established. Adding AI content into the process tree would dilute the voice by inverting the original brief's "process-first" framing. The forward-link from each phase overview is the minimum signal a process-tree reader needs to discover the AI tree exists.

### AD-5: Phase-level AI page template parallels v1's four-section discipline

**Decision:** AI pages use a five-section template: *What changes when AI is in the loop / Tool-agnostic workflow / Battle-tested tools and how to use them / What is not yet ready / What the industry does*. The fifth section ("What the industry does") preserves v1's signature trade-off-aware framing.

**Rationale:** Template consistency is one of v1's defining qualities. Carrying it into v2 means readers do not relearn the page structure when crossing trees. The new "What is not yet ready" section is the AI-tree counterweight to v1's *Best practices* discipline — it names what the agency should resist as deliberately as the process tree names what the agency should adopt.

### AD-6: Astro Starlight `topNav` is the technical mechanism

**Decision:** The two trees are rendered as separate Starlight sidebar trees, each scoped to a top-navigation entry. Top-nav configuration lives in `astro.config.mjs` next to the existing sidebar configuration.

**Rationale:** Starlight supports this natively (Cloudflare and Vercel docs use the same pattern). No new framework, no new build step, no new runtime dependencies. The slug-immutability rule from v1's architecture applies to the new `/with-ai/...` namespace from creation.

### AD-7: AI page URL namespace under `/with-ai/`

**Decision:** All AI tree pages live under `/with-ai/`. Phase pages: `/with-ai/<phase-slug>/`. Delivery sub-stream pages: `/with-ai/delivery/<stream-slug>/`. Tab landing: `/with-ai/`.

**Rationale:** Keeps the URL structure parallel to v1 while making the tree distinction visible in every URL. Reader sees `/discovery/` versus `/with-ai/discovery/` and the meaning is unambiguous. Search engines index the two trees as related content.

## Functional Requirements

### Site Navigation (extends FR1–FR5 from v1)

- FR-v2-1: Readers can switch between the "Process" tree and the "With AI" tree via a persistent top navigation control.
- FR-v2-2: The active top-navigation tab is visually distinguishable on desktop and mobile.
- FR-v2-3: Each tab has its own sidebar tree; switching tabs replaces the sidebar with the new tree's contents.
- FR-v2-4: Mobile readers can switch tabs without entering a multi-step menu interaction (one tap to switch).

### AI Content Discovery

- FR-v2-5: Readers can land on the "With AI" tab landing page and see a brief framing paragraph plus a navigable list of all eight phase/stream AI pages.
- FR-v2-6: Each v1 phase overview page includes a 2–3 sentence "AI in this phase" callout linking forward to the corresponding AI page.
- FR-v2-7: Each AI page includes a back-link to its v1 process counterpart (typically near the top of the page).

### AI Page Content

- FR-v2-8: Readers can view a "What changes when AI is in the loop" section on each AI page.
- FR-v2-9: Readers can view a "Tool-agnostic workflow" section on each AI page.
- FR-v2-10: Readers can view a "Battle-tested tools and how to use them" section on each AI page (or, if no validated tools are yet listed, an explicit "tool research in progress" placeholder).
- FR-v2-11: Readers can view a "What is not yet ready" section on each AI page that names anti-patterns and immature use cases.
- FR-v2-12: Readers can view a "What the industry does" section on each AI page (parallel to v1's section of the same name).
- FR-v2-13: Readers can view all five AI page sections in a consistent structure across every AI page.

### AI Content Comprehension

- FR-v2-14: Readers can understand each AI page independently without requiring sequential reading of the process tree (Priya's cherry-picking journey carries over).
- FR-v2-15: Readers can follow contextual links between AI pages to understand cross-phase AI handoffs (e.g., interview synthesis output flowing into requirements drafting input).
- FR-v2-16: Readers can identify which tool recommendations are battle-tested by the author versus which are open research items.

### Content Management (Author)

- FR-v2-17: Author can add or edit AI content by modifying Markdown/MDX files under `src/content/docs/with-ai/`.
- FR-v2-18: Author can update the top-navigation labels and the AI sidebar tree through framework configuration in `astro.config.mjs`.
- FR-v2-19: Author can update individual tool listings on an AI page without modifying the page's section structure.

## Non-Functional Requirements

### Build and Deployment

- NFR-v2-1: Site continues to build successfully from a clean clone with `pnpm install && pnpm build` (carryover from v1 NFR1).
- NFR-v2-2: Full site build with v1+v2 content completes in under 60 seconds (carryover from v1 NFR2).
- NFR-v2-3: Deployment continues to use the existing GitHub Actions pipeline; no new deployment infrastructure is added.

### Content Rendering

- NFR-v2-4: All v2 content is pre-rendered as static HTML at build time (carryover from v1 NFR4). No runtime LLM calls, no model embeds, no API key handling. JS islands permitted under v1's existing islands-first policy if a future widget genuinely requires hydration.
- NFR-v2-5: Top navigation is rendered as static HTML and works without JavaScript (the active tab can be CSS-derived from URL prefix).
- NFR-v2-6: All v2 pages render legibly on viewports from 320px to 2560px without horizontal scroll (carryover from v1 NFR5).
- NFR-v2-7: Both light and dark themes render v2 content with the same contrast budget v1 commits to (carryover from v1 NFR6).

### Maintainability

- NFR-v2-8: Adding a new AI page or updating tool listings requires only Markdown edits and (for new pages) a sidebar configuration entry — no code changes (parallel to v1 NFR7).
- NFR-v2-9: AI tree content files use the same Markdown/MDX format as v1, with the same Zod-typed frontmatter schema extended to include AI-specific fields (e.g., `tree: 'process' | 'ai'` discriminator). No proprietary format.
- NFR-v2-10: Zero runtime dependencies (carryover from v1 NFR9).

### Cross-Tree Integrity

- NFR-v2-11: All v1 process-tree URLs continue to resolve unchanged (no breaking changes to existing routes).
- NFR-v2-12: All v2 AI-tree pages link back to their v1 process counterparts and vice versa, with link integrity verified at build time (manual at first; build-time link checker is a deferred enhancement carrying over from v1's deferred items).
- NFR-v2-13: The Zod content-collection schema enforces that AI-tree pages declare `tree: 'ai'` (or equivalent discriminator) and process-tree pages declare `tree: 'process'`, so misplaced pages fail the build.

### Voice and Editorial

- NFR-v2-14: AI pages use the same practitioner voice as v1: second person, declarative, agency frame. The voice rule does not relax on the AI tree.
- NFR-v2-15: AI pages do not feature any tool the author has not validated in a real engagement. The "battle-tested" rule is an editorial NFR, not just a guideline.
- NFR-v2-16: AI pages are dated (`lastUpdated` frontmatter) and update frequency is expected to exceed process-tree update frequency. Stale dates (>9 months for a tools-list page) are a content-review trigger.

## Scoping & Risk

### MVP Strategy

**Approach:** Content-driven MVP, identical in spirit to v1. Technical surface area is small (one new sidebar tree, one top-navigation control, ~9 new pages, 6 callout edits to existing pages). The MVP succeeds when the AI tree ships with validated content and the top-navigation works on both desktop and mobile.

**Resource Requirements:** Solo author (Ferdi) plus AI agents for content drafting, with author validation against real engagements before any tool recommendation ships. No team required.

### Risk Mitigation

**Tool Churn (primary risk).** AI tooling moves fast. A page authored in May can be partly stale by November. Mitigations: (1) the battle-tested rule reduces churn risk because validated tools tend to persist longer in the author's practice; (2) the separate tree confines updates to a small file count rather than touching the whole site; (3) the AI page template separates *workflow* from *tools*, so a tool change does not require rewriting the workflow.

**Reader Confusion with Two Trees.** New readers may not immediately understand they have a tree choice. Mitigations: (1) the homepage explicitly names the two trees and points readers; (2) each phase overview's "AI in this phase" callout is a discoverability path from inside the process tree; (3) the top-navigation is always visible.

**Authoring Burden.** Nine new pages plus six callouts is non-trivial. Mitigations: (1) the coarser granularity decision already cut authoring volume by ~80% relative to the original 48-page-overlay plan; (2) the page template provides scaffolding so each page is a fill-in exercise rather than a blank-page exercise; (3) pages can ship tool-agnostic-workflow-only initially and be enriched as tool validation completes.

**v1 Voice Erosion.** Adding any AI content to v1 process pages risks eroding the practitioner voice. Mitigation: the only v1 modification permitted is a 2–3 sentence callout on phase overview pages; no leaf page is touched, no new sections are added to existing pages, no tool names appear in v1.

**Top-Navigation Browser Compatibility.** Astro Starlight's top-navigation feature must render correctly across the v1-supported browsers. Mitigation: Starlight's documented browser-support matrix is verified at first implementation; any gap surfaces as a v2 architecture decision.

### Sequencing Risk

The PRD specifies nine pages but does not require all nine to ship together. A reasonable sequencing is:

1. Tab landing page + top-navigation infrastructure + Pre-Sales AI page (proves the architecture).
2. Discovery + Requirements & Design AI pages (extends to second and third phases).
3. Delivery sub-stream pages — PM, Dev, QA — in that order (Dev is largest; PM is most-frequently-referenced).
4. Deployment + Maintenance AI pages (closes the lifecycle).

Each release is independently shippable and independently usable. Readers who land on the AI tab during a partial roll-out see the available pages plus a "more pages in progress" note on the landing page.

## Implementation Considerations

### File Layout (proposed; to be locked at v2 architecture phase)

```
src/content/docs/
├── with-ai/
│   ├── index.md                                     # Tab landing page
│   ├── pre-sales.md                                  # AI in Pre-Sales
│   ├── discovery.md                                  # AI in Discovery
│   ├── requirements-design.md                        # AI in Requirements & Design
│   ├── delivery/
│   │   ├── project-management.md                     # AI in PM
│   │   ├── development.md                            # AI in Development
│   │   └── qa-testing.md                             # AI in QA / Testing
│   ├── deployment-launch.md                          # AI in Deployment / Launch
│   └── maintenance-retainer.md                       # AI in Maintenance & Retainer
└── (existing v1 tree unchanged)
```

### Sidebar and Top-Nav Configuration (proposed)

`astro.config.mjs` gains a `topNav` (or equivalent Starlight construct) that renders two top-level entries:

- **Process** — points to the v1 sidebar tree (rooted at `/`).
- **With AI** — points to a separate sidebar tree rooted at `/with-ai/`.

Each tree's sidebar configuration is isolated; switching trees rebuilds the sidebar from the new tree's config. The PhaseList component on the home page remains under the Process tab.

### Frontmatter Schema Extension (proposed)

The Zod schema at `src/content.config.ts` extends to add a `tree` discriminator: `tree: 'process' | 'ai'`. AI pages declare `tree: 'ai'`; v1 pages declare `tree: 'process'`. The home and reference pages remain schema-exempt as today.

A separate `aiPageType` field (`landing | phase | delivery-stream`) may further constrain the AI tree's structure.

### Content Authoring Conventions

- AI pages use the same MD/MDX format as v1.
- The five-section H2 template (*What changes when AI is in the loop / Tool-agnostic workflow / Battle-tested tools and how to use them / What is not yet ready / What the industry does*) is the AI-page equivalent of v1's four-section template.
- Each AI page's `lastUpdated` is bumped on any tool listing change, not just on workflow changes — readers should be able to gauge tool-list freshness from the date.
- Cross-links between AI and process trees use leading-slash paths (`/with-ai/discovery/` from process side; `/discovery/` from AI side) and are resolved through the existing remark-base-path plugin.

### Testing and Validation

- Build-time validation: every AI page declares `tree: 'ai'`; every link from an AI page to a process page resolves.
- Editorial validation: every battle-tested tool listing has a documented validation trail (engagement reference, date, what was tested).
- Manual pre-launch validation (parallel to v1's UX-DR25–UX-DR29): keyboard-only navigation through the top-nav switch; screen-reader smoke test; mobile tree-switching on iOS and Android.

## Cross-References

- v1 PRD: [`prd.md`](./prd.md) — covers the 60-page process tree this PRD builds on.
- v1 Architecture: [`architecture.md`](./architecture.md) — the islands-first / Zod-schema / sidebar-SSoT decisions all carry forward.
- Product Brief: [`product-brief-Software-Development-with-AI.md`](./product-brief-Software-Development-with-AI.md) — original framing of the AI layer (originally specified as "5th H2 per page"; this PRD revises that decision).
- Feedback.md (project root): the technical-research review that surfaced the architectural-decision discussion this PRD records.
- v2 Architecture: *to be authored next*. This PRD captures the architectural decisions at PRD level; the architecture document elaborates them with framework specifics, plugin selections, and pattern-consistency rules.
