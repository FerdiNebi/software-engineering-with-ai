---
title: "Product Brief Distillate: End-to-End Software Engineering with AI"
type: llm-distillate
source: "product-brief-Software-Development-with-AI.md"
created: "2026-03-27"
purpose: "Token-efficient context for downstream PRD creation"
---

# Product Brief Distillate: End-to-End Software Engineering with AI

## Core Identity

- **Product name:** End-to-End Software Engineering with AI
- **Type:** Static educational reference website
- **Author/owner:** Ferdi — Senior Software Developer
- **Primary purpose:** Personal working reference for delivering client projects; secondary purpose is public sharing
- **Frame:** Software agency/consulting delivery lifecycle, not product company or academic SDLC
- **Audience:** Senior software engineers stepping into consulting/agency roles; technically strong, process-light

## The Problem Being Solved

- Senior engineers know how to code but don't know the agency delivery process: pre-sales, discovery facilitation, SOW writing, scoping, client sign-off at each phase
- No existing resource covers the full consulting lifecycle for senior engineers: roadmap.sh = skill trees only; Pragmatic Engineer = Big Tech product companies; Udemy SDLC = beginners/abstract; Fireship = tech stack tutorials
- AI coding tools raise the stakes — engineers expected to move faster, but process knowledge hasn't kept pace
- Pre-sales and client communication are invisible in all existing educational content despite consuming significant senior engineer time

## SDLC Phases Confirmed In Scope

Ordered sidebar navigation, top to bottom:

1. **Pre-Sales & Business Development** — explicitly included; covers scoping calls, proposals, SOW drafting, contract negotiation
2. **Discovery** — often sold as a separate paid engagement before full contract; stakeholder interviews, PRD workshops, prototype, cost estimation
3. **Requirements & Design** — functional/non-functional requirements, UX/UI, system architecture, API contracts, infra design
4. **Development** — iterative sprints; contains sub-sections (see below)
5. **QA / Testing** — functional, regression, performance, security, UAT
6. **Deployment / Launch** — infra provisioning, pipeline execution, smoke testing, monitoring setup, client handoff
7. **Maintenance & Retainer** — bug fixes, feature iteration, incident response, retainer structure

### Development Sub-Sections (ordered)

- Frontend development
- Backend development
- Code review
- Testing
- Security validation
- Performance validation
- DevOps
- Repository structure & AI agent setup

## Per-Phase Content Structure

Each phase page contains these sections:
1. What happens here (description, goals, stakeholders)
2. Best practices (industry-researched, not opinionated)
3. Desired outcomes (deliverables, "done" definition, sign-off criteria)
4. What the industry does (how leading agencies approach this phase)
5. AI-assisted workflow — tools, sequence, how-to *(v2 only)*

## Content Creation Approach

- Content written by LLM agents doing extensive per-topic research, then reviewed and curated by Ferdi
- No runtime API calls — all content pre-built into the static site
- Tool recommendations come from research per phase, not assumed upfront
- Ferdi validates tools against his own practice before including them — no trend-chasing
- AI workflows: tool-agnostic guidance first (what to do), then specific tool selection from research

## Tech Stack Decisions

- **Deployment:** GitHub Pages — confirmed choice
- **Update model:** Git repo, static site only, no CMS or runtime infra
- **Preferred style reference:** docs.astro.build (sidebar navigation, clean docs aesthetic)
- **Framework candidates from research:**
  - **Astro Starlight** — purpose-built for docs, MDX support, built-in sidebar/search/dark mode, GitHub Pages template exists (`30DaysOf/astro-starlight-ghpages`), allows interactive components via islands; requires Node.js
  - **MkDocs + Material** — Markdown-first, used by FastAPI/OpenAI/Netflix, `mkdocs gh-deploy` in one command, zero JS framework knowledge needed; Python dependency, limited interactivity
  - **Docusaurus** — best for versioning/Algolia/React component-heavy sites; heavier than needed for v1
  - **VitePress** — minimal, Vue-based, excellent performance; MIT course example exists
- No framework decision locked yet — this is a PRD/architecture decision

## Versioning & Roadmap

### v1 — Foundation (MVP)
- Sidebar with ALL phases present
- Full content for each phase covering the **traditional (non-AI) approach** — not a stub, a complete resource
- No videos
- No AI workflow sections yet
- This version is already a standalone, complete reference on its own

### v2 — AI Layer
- Each phase gains AI workflow section
- Tools researched per phase, step-by-step guidance
- Video examples for select tool workflows (deferred, not committed)

### Beyond (no commitments)
- Community contributions via GitHub PRs
- Interactive elements: workflow templates, downloadable checklists
- Possible expansion: project pricing, team hiring, employee-to-consultant transition

## Scope Signals (In / Out / Deferred)

| Item | Status | Notes |
|------|--------|-------|
| Pre-sales phase | IN | Explicitly requested |
| All SDLC phases in sidebar | IN v1 | |
| Traditional (non-AI) content | IN v1 | Complete, not placeholder |
| AI workflow sections | IN v2 | |
| Example videos | DEFERRED | Mentioned for v2, not committed |
| Runtime API calls | OUT | Static only |
| Monetization | OUT | No intent currently |
| Community features | DEFERRED | Post-v1 |
| Versioning of content | OUT for now | Git history serves as implicit versioning |

## Competitive Intelligence (from research)

- **roadmap.sh** — 313k GitHub stars; zero coverage of agency/consulting lifecycle or client-facing skills; purely individual tech skill trees
- **The Pragmatic Engineer** — ~$200/year paid newsletter; Big Tech + product company focus; no consulting lifecycle; no AI tooling for delivery
- **Swizec Teller** — "Senior Mindset" book/blog; mindset only, no workflow depth
- **Fireship.io** — short-form video + courses; tech-stack specific, no end-to-end process
- **Udemy SDLC courses** — beginner/PM audience; abstract waterfall/agile; no AI, no agency frame
- **Coursera SDLC Specialization** (U. Minnesota) — academic framing; beginners; no AI tooling
- **Shape Up** (Basecamp) — free online book; covers shaping/betting/building; no pre-sales, no client context; product company frame
- **Dual-Track Agile** (SVPG) — good for product companies; agencies struggle to implement due to fixed-deliverable client expectations

## AI Tools Landscape by Phase (from research, for v2 content seeding)

**Pre-Sales / Discovery / Requirements**
- WriteMyPrd — AI PRD generation from rough inputs
- Notion AI — meeting summarization, requirement drafting
- aqua — voice-based requirement narration, test case generation
- GitHub Spec Kit (2025, open source) — requirements → plans → task breakdowns for coding agents

**Architecture**
- Claude — strongest for architectural reasoning, RFC drafting, system design review
- IBM Engineering Requirements Management — enterprise/regulated industries

**Development**
- GitHub Copilot — dominant in enterprise; 20M users; "Copilot Coding Agent" takes issue → codes → opens PR
- Cursor — most broadly adopted individual/small team; Composer for multi-file; diff-and-approve loop
- Windsurf (Codeium) — #1 LogRocket ranking Feb 2026; Cascade agent reads files, makes changes, runs tests autonomously; ~200k token context via RAG
- Claude Code — terminal-based; launched May 2025; 46% "most loved" rating; strongest for deep reasoning, large refactors
- Aider — CLI, open source; large-scale refactoring
- Cline/RooCode — IDE-integrated agents for multi-file development

**Prototyping / UI**
- Vercel v0 — frontend UI generation, production-ready React; frontend only
- Bolt.new — full-stack browser prototype; fastest to working demo; struggles with complex business logic
- Lovable — full-stack + Supabase; GitHub sync; $20M ARR in 2 months; security vulnerability found April 2025
- Replit Agent — best full-stack capability; smoothest MVP-to-production path

**Autonomous Agents**
- Devin 2.0 (Cognition) — PR merge rate 67%; $20/month (Core); best for security fixes (20x efficiency), migrations (10-14x faster), test generation (50-60% → 80-90% coverage); adopted by Goldman Sachs, Ramp, Nubank
- OpenHands — open source Devin alternative; large-scale refactoring

**Key research finding for v2 framing:** AI-assisted code defect rates grew 4x alongside productivity gains — reinforces need for strong code review, testing, and security phases.

## Open Questions (unresolved)

- Framework selection (Astro Starlight vs MkDocs Material) — decision for PRD/architecture phase
- Whether to invite community contributions explicitly in v1 (open issue, no decision)
- Long-term vision beyond v2 — Ferdi has no strong opinion yet; leave open

## Rejected Ideas / Explicit Exclusions

- **Runtime API calls** — explicitly excluded; all content pre-built
- **Trend-chasing content updates** — explicitly rejected; Ferdi updates when he has battle-tested something himself
- **Tool-specific content without validation** — tools must be proven in practice before being featured
- **Monetization** — not a current consideration
- **Videos in v1** — deferred to v2
