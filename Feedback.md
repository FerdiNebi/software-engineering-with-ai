# Feedback — End-to-End Software Engineering with AI

**Reviewer:** Claude (Opus 4.7, BMAD technical-research workflow)
**Date:** 2026-05-07
**Scope:** Full-site review of structure, content quality, and SDLC coverage; comparison against authoritative SDLC frameworks (ISO/IEC/IEEE 12207, PMBOK, DSDM, modern agency practice).

---

## Executive summary

Content quality is **strong** — the practitioner voice, cross-phase linking, and 4-section template are consistently delivered across the pages I sampled (Pre-Sales overview, Discovery overview, System Architecture, Delivery overview, Development overview, Incident Response). The agency frame is preserved end-to-end; nothing reads as generic SDLC. The Delivery-as-three-streams restructure is a genuine differentiator and is executed well.

There are three categories of problems that need attention, in order of severity:

1. **Critical: stale doc-and-code drift after the 2026-05-06 Delivery restructure.** The PRD and architecture were updated to a 6-phase model; the home page, the `<PhaseList />` component, `CLAUDE.md`, `README.md`, and the live home copy were not. The home page links to `/development/` and `/qa-testing/` which 404 in the current build. This is the only actively *broken* thing on the site.
2. **High: SDLC-coverage gaps and a phase-boundary inconsistency.** Six lifecycle areas that mature agency engagements depend on are either missing or under-covered: delivery mobilization & kickoff, data migration & cutover, hypercare/warranty, project closeout & final invoice, accessibility (WCAG) as a first-class concern, and contractual layering (MSA / NDA / DPA / change orders) beyond a single SOW page. Plus one cross-page wording inconsistency that makes Discovery and Requirements & Design look like they duplicate FR/NFR work when they actually produce different artifacts at different fidelities.
3. **Medium: structural / IA improvements.** A handful of changes would make the site more useful as a quick reference under pressure (a deliverables-index page, surfacing Project Management on the home page, repo-root hygiene, etc.).

The rest of this document is the detailed punch list.

---

## 1. Critical — stale doc-and-code drift after the 2026-05-06 Delivery restructure

The PRD revision log explicitly states (`_bmad-output/planning-artifacts/prd.md:29`):

> 2026-05-06 — Delivery phase restructure. Replaces the 7-phase model with a 6-phase model where the previous Development and QA / Testing phases are folded into a unified Delivery phase that also adds Project Management as a third concurrent sub-section.

The schema (`src/content.config.ts:13`), the architecture document, and the actual content tree were all updated to the 6-phase model. **Five other places were missed.**

### 1.1 Home page links 404 — `src/components/PhaseList.astro:6-49`

The `<PhaseList />` component on the home page still hard-codes the old 7-phase structure with `slug: 'development'` and `slug: 'qa-testing'`:

```js
// PhaseList.astro:26-41
{ number: 4, slug: 'development', title: 'Development', ... },
{ number: 5, slug: 'qa-testing',  title: 'QA / Testing', ... },
```

The links resolve to `${base}/development/` and `${base}/qa-testing/` which **do not exist in the build** (verified: `dist/development/index.html` is missing; the actual content lives at `dist/delivery/development/index.html`). Anyone landing on the home page and clicking phase 4 or 5 hits a 404.

This is the single most severe issue on the site — the home page is the most-loaded route, and two of its seven primary links are dead.

**Fix:** rewrite `PhaseList.astro` against the current 6-phase model. Two reasonable options:

- **Option A (recommended):** show 6 phases, with phase 4 being "Delivery" (with a one-liner that names the three concurrent streams). Reflects the PRD model exactly.
- **Option B:** show 6 phases but expand Delivery into PM/Dev/QA as a nested second tier on the home page, mirroring the sidebar. Higher information density, slightly more code.

Either way: the slug list must come from the same source of truth as `astro.config.mjs` (or at minimum match it). Drift between the home page and the sidebar is what produced this bug.

### 1.2 Home page copy says "seven phases" — `src/content/docs/index.mdx:9`

> Each of the seven phases below covers what happens, best practices, desired outcomes, and what the industry does.

Should be **six**. This is the only English-prose mention of phase count on the home page, and it's wrong.

### 1.3 `CLAUDE.md` describes the deprecated structure — `CLAUDE.md:12`

> v1 delivers 43 Markdown-authored pages (1 home + 7 SDLC phase overviews + 35 sub-sections)

Actual current count: **52 pages** (1 home + 6 phase overviews + 3 Delivery sub-section overviews + 42 leaf pages). Verified via `Get-ChildItem -Recurse src\content\docs -Filter '*.md*' | Measure-Object` returns 52.

Because `CLAUDE.md` is loaded into every Claude Code session as system context, leaving it stale will cause future agent runs to plan against the wrong structure (e.g. computing remaining work, generating new stories, or auditing coverage).

**Fix:** update the paragraph to "v1 delivers 52 Markdown-authored pages (1 home + 6 SDLC phase overviews + 3 Delivery sub-section overviews + 42 leaf sub-sections), each following a strict 4-section template…"

### 1.4 `README.md` describes the deprecated structure — `README.md:5-7, 16, 28-31`

> It maps the agency / consulting delivery lifecycle — pre-sales through maintenance — across 7 phases and 35 sub-sections, each on a strict 4-section template:

Same issue as `CLAUDE.md`. README is the public-facing description of the project; the number is wrong, and a curious reader who counts the sidebar will notice.

**Fix:** update both the headline ("6 phases / 41 leaf sub-sections + 3 Delivery sub-section overviews") and the BMAD methodology paragraph (line 44 references "9 epics and 47 user stories" — the implementation-artifacts directory now contains items numbered through 12.x, so the epic count and total story count both need a refresh).

### 1.5 Sub-section overview `order` collisions

`src/content/docs/delivery/{project-management,development,qa-testing}/index.md` all have `order: 1`. Today the sidebar is explicit (`astro.config.mjs`) so this works in practice, but if anyone later removes the explicit sidebar entries and relies on auto-ordering, the three overviews will sort non-deterministically.

**Fix (low priority):** either give them distinct orders (PM=1, Dev=2, QA=3 to match sidebar), or document that frontmatter `order` is intentionally ignored under `delivery/` because the sidebar is the SSoT.

---

## 2. High — SDLC coverage gaps

The site covers the seven major phases of the agency lifecycle well, but six common activities are either missing entirely or buried inside another sub-section. None of these is a v1-blocker, but they are the gaps a senior engineer stepping into consulting actually hits in their first 12 months and cannot find on this site.

### 2.1 Delivery Mobilization & Kickoff — missing entirely

There is a real activity at the moment the team is funded to build that the site jumps over: the engagement mobilizes. Engineers are allocated, repos provisioned, CI/CD scaffolded, sprint cadence set, RACI confirmed, and a delivery kickoff meeting is run with the full client team. The site goes from `requirements-design/index.md` (signed designs) straight into `delivery/project-management/sprint-planning-cadence.md` (sprint 1 starts). The mobilization activity that bridges them is not on the site.

**When does this happen?** The *full* team mobilization happens at the moment the **delivery SOW is signed**. Whether that is before or after R&D depends on contract structure:

- **R&D is paid as part of Delivery** (single SOW covers R&D + build sprints) — mobilization happens *before* R&D; R&D is effectively Sprint 0 of Delivery and the team is fully mobilized for the whole phase.
- **R&D is its own paid milestone between Discovery and Delivery** (separate contract) — only a small R&D-team mobilization (tech lead, UX lead, no engineers) happens at the Discovery → R&D seam; full mobilization happens *after* R&D once the delivery/build SOW is signed.
- **R&D and Delivery are one SOW with R&D as a stage gate within it** (common middle ground) — mobilization happens once at SOW signing; the team engages from R&D onward, with engineering capacity throttled until R&D sign-off unblocks build sprints.

This is *not* the same as the smaller "Discovery kickoff" that happens when the discovery SOW is signed at the end of Pre-Sales. That earlier event is a 1–2 day allocation for a 2–3 person team (delivery lead, tech lead, sometimes UX) and is arguably implicit in `discovery/stakeholder-interviews.md` already; it does not need its own page.

**Recommendation:** add a sub-section at the start of **Delivery → Project Management** — *"Delivery Mobilization & Kickoff"* (positioned as `order: 2`, before *Sprint Planning & Cadence*). The page should cover all three contracting patterns explicitly rather than picking one. Suggested 4-section content:

- **What happens here** — team allocation, account/tooling setup, RACI confirmation, delivery kickoff meeting agenda; and an explicit note that this activity is contract-shape-dependent and may sit before, during, or after R&D.
- **Best practices** — the mobilization checklist, the difference between a kickoff meeting and a stakeholder interview, the difference between a *discovery* kickoff and a *delivery* kickoff, the case for under-30-minute Day-1 onboarding (currently a tip inside `delivery/development/index.md:51` — probably belongs here instead, with a back-reference from Development).
- **Desired outcomes** — confirmed RACI, provisioned tooling and access, scheduled sprint cadence and ceremonies, client-signed kickoff minutes, named escalation paths.
- **What the industry does** — full-mobilization-then-sprint vs. mobilization-overlapping-with-R&D vs. lean/just-in-time provisioning; high-touch full-day kickoff workshop vs. 60-minute kickoff call; onshore vs. distributed mobilization differences.

### 2.2 Data Migration & Cutover Planning — missing entirely

The Deployment / Launch phase has *Infrastructure Provisioning, Deployment Execution & Smoke Testing, Monitoring & Observability Setup, and Client Handoff & Launch Checklist*. None of those covers the activity that dominates many agency engagements: **moving data and users from a legacy system to the new one on a defined cutover window.**

This is a major omission for the exact audience the site serves. Agencies replacing client legacy systems (CRM rebuilds, e-commerce platform migrations, ERP rollouts, internal-tool replacements) live or die on cutover discipline: migration scripts, dry runs, freeze windows, rollback criteria, the cutover runbook, parallel-run vs. big-bang strategies, post-cutover reconciliation.

**Recommendation:** add a sub-section to Deployment / Launch — **"Data Migration & Cutover"** — covering migration design, cutover-window planning, dry runs / cutover rehearsals, rollback criteria, and parallel-run vs. big-bang trade-offs. Industry sources call out that "the best-case scenario is two or three data and cutover rehearsals before going live, especially when the project is large, decentralized and involves different stakeholders in different time zones" — which is the kind of practitioner detail the site's voice does well.

### 2.3 Hypercare / Warranty period — missing as a distinct activity

The site treats the post-launch period as either *Deployment / Launch → Client Handoff* or *Maintenance & Retainer → Bug Fixes*. There is no name or page for the **2–4 week hypercare period** between launch and the start of the formal retainer, where the agency is still on the hook for stability under whatever the original contract covered (warranty/defect liability), with elevated response and a daily standup with the client.

This is a real commercial structure: most fixed-price SOWs include a defect-liability or warranty period, and most retainers don't start counting until that window ends. Engineers entering consulting need to know what they owe the client between go-live and Day-30, what the client is entitled to ask for free vs. what counts as a change request, and how to gate the transition into the retainer.

**Recommendation:** either add a sub-section to Maintenance & Retainer — **"Hypercare & Warranty Period"** — or add it to Deployment / Launch as the bridge between launch and retainer. I'd put it in Maintenance & Retainer since it's where the *post-launch* commercial mechanics live and the retainer page is its natural neighbor.

### 2.4 Project Closeout / Final Invoice / Post-Implementation Review — missing

The site covers retrospectives at the *sprint* level (`delivery/project-management/retrospectives.md`) but has no equivalent for the **engagement-level closeout** — the formal ritual that ends a fixed-price engagement: final acceptance sign-off, final invoice, lessons-learned session with the client, post-implementation review (typically 30–90 days after go-live), and the formal handover artifact set.

In PMBOK and DSDM terms, this is "Closing" / "Post-Project". In agency terms, this is the conversation that decides whether you keep the client and earn the retainer renewal, or whether the engagement ends in a dispute. It belongs on the site.

**Recommendation:** add a sub-section to Maintenance & Retainer — **"Engagement Closeout & Post-Implementation Review"** — covering the closeout checklist, lessons-learned facilitation, the post-implementation review timing (typically 30–90 days post-launch), the difference between a sprint retro and an engagement retro, and the artifacts that make retainer renewal vs. contract close clean.

### 2.5 Accessibility (WCAG) — under-covered

The Delivery sub-section has dedicated pages for *Security Testing*, *Performance Testing*, *Functional & Regression Testing*, and *UAT*, but accessibility is not treated as a first-class testing or design concern. There is one mention in `requirements-design/ux-ui-design.md` (haven't read it in this audit but it shows up by file name) and that's it.

For senior engineers in consulting, accessibility is increasingly contractual:

- WCAG 2.2 AA is the practical bar for client engagements in regulated industries (healthcare, finance, government), the EU (EAA went into force 2025), and any UK public-sector contract
- US ADA case law continues to expand digital-accessibility liability
- Most enterprise client SOWs now include an accessibility-conformance clause

**Recommendation:** at minimum, add an "Accessibility Testing" page under QA / Testing alongside Security Testing. Optionally also add an "Accessibility-by-Design" sub-section (or insert content) under Requirements & Design's UX/UI Design page. Cover: WCAG levels (A, AA, AAA), automated tooling (axe, Pa11y, Lighthouse), manual audit cadence, VPATs, and the contractual implications of accessibility commitments in the SOW.

### 2.6 Contract layering (MSA / NDA / DPA / Change Orders) — collapsed into a single page

`pre-sales/sow-contract-drafting.md` exists, and `pre-sales/index.md` correctly distinguishes proposals from SOWs. But the page family doesn't surface that real engagements run on a *layered* contract structure:

- **NDA** — signed before the scoping call
- **MSA** (Master Service Agreement) — signed once, the umbrella legal contract between agency and client
- **SOW** — one per engagement, executed under the MSA, defines the specific scope/price/timeline
- **DPA** (Data Processing Agreement) — required under GDPR / UK GDPR / many state privacy laws when the agency processes personal data on the client's behalf
- **Change Orders** — formal SOW amendments executed during delivery to add or modify scope (different from the *operational* change-control flow on the PM page, which is about backlog impact assessment)

Without the layering, the SOW page reads as if it's *the* contract. In practice, most agencies have an MSA signed once with each client and many SOWs underneath it. Senior engineers will see this on every engagement and currently can't find guidance on it.

**Recommendation:** either expand the SOW page to cover the full layered stack (it's a longer page but the topic is contiguous) or split into two: **"SOW & Contract Drafting"** + **"NDA / MSA / DPA — the legal stack"**. The latter is cleaner because it lets each contract type get the depth it needs (and DPA/GDPR has enough specifics to fill its own page).

### 2.7 Estimation appears in two places, with no cross-link

There's an *Estimation & Cost Commitment* page under Discovery (`discovery/estimation-cost-commitment.md`) and an *Estimation & Sprint Slicing* page under Delivery → Project Management (`delivery/project-management/estimation-sprint-slicing.md`). They cover different things but a reader looking for "estimation" will land on one and not realize the other exists.

There's also **Pricing & Estimation** under Pre-Sales (`pre-sales/pricing-estimation.md`). So the site has *three* estimation-adjacent pages.

**Recommendation:** ensure each of the three pages has explicit cross-links to the other two in the *What happens here* section, framing them as "the same activity at three points in the lifecycle: pre-sales pricing under uncertainty → discovery re-estimate against scope → delivery-time sprint estimation against backlog items." Currently they read as if they're independent topics.

### 2.8 Discovery overview overclaims FR/NFR production — phase boundary is fuzzy

`discovery/index.md:53` describes Discovery's output as:

> A documented set of validated **functional and non-functional requirements** ready for formal specification in Requirements & Design

This pre-claims the FR/NFR artifact and reads as if Discovery is doing FR/NFR work. The R&D FR/NFR page is more precise — `requirements-design/functional-nonfunctional-requirements.md:13` describes Discovery's output as a *"prioritised feature list and constraint catalogue"*, not FRs/NFRs:

> They convert the *prioritised feature list and constraint catalogue* produced by [requirements workshops](/discovery/requirements-workshops/) into atomic, numbered statements that delivery, QA, and the client can each defend against without ambiguity.

So the two pages disagree about what Discovery actually produces. The Discovery overview makes the two phases look like they're duplicating effort, when in fact they're producing different artifacts at different fidelities for different audiences:

- **Discovery output** — validated, prioritised feature list and constraint catalogue, signed by the client *business sponsor*. Lives in workshop notes, decisions logs, scope statements. Optimised for the gate where the client decides whether to proceed past Discovery.
- **R&D output** — atomic, numbered, testable, traceable FR-N / NFR-N statements with measurable thresholds and acceptance criteria, signed by the client *technical stakeholder*. Lives in a structured catalogue (document or tool). Optimised as the build target for engineers and the test target for QA.

The discipline is real, the R&D page articulates it correctly, and it earns its keep in fixed-price / regulated / enterprise engagements where the FR/NFR document is itself a contract artifact and where Discovery sign-off is a separate commercial gate. But the Discovery overview's wording undermines all of that.

**Fix:** tighten the Discovery overview's *Desired outcomes* line to match the R&D framing. Suggested rewrite of `discovery/index.md:53`:

> A documented, prioritised feature list and constraint catalogue, validated against stakeholder interviews and workshop decisions, ready for formal FR/NFR specification in [Requirements & Design](/requirements-design/functional-nonfunctional-requirements/)

While editing, sweep the rest of `discovery/index.md` and the Discovery sub-section pages for the same overclaim and align on the language. The principle to apply consistently: **Discovery validates needs and prioritises them; R&D specifies them as atomic, testable, traceable, signable artifacts.**

This is a one-line edit (plus a sweep) that removes a real cross-page inconsistency and makes the *why both phases exist* defensible to a sceptical reader.

---

## 3. Medium — structural / IA improvements

### 3.1 Project Management is invisible from the home page

In the current `<PhaseList />`, Project Management is not a top-level entry. It only surfaces when a user expands Delivery in the sidebar. This is a regression from the PRD's Priya journey (`prd.md:174-184`), which explicitly calls out Project Management as a top-level concern for a freelancer scaling up.

**Recommendation:** when fixing `<PhaseList />` (item 1.1 above), include a one-line callout under the Delivery entry naming the three streams: *"Three concurrent streams: Project Management, Development, QA / Testing."* That single line lets a Priya-type user see PM exists without clicking. The alternative — promoting PM to a peer of Pre-Sales etc. — would contradict the PRD's deliberate Delivery-as-unit framing.

### 3.2 No deliverables index / no "what do I owe the client at each gate" page

The site has *Desired outcomes* on every page, but they're scattered across 52 files. A senior engineer trying to figure out "what's the complete list of artifacts I'm contractually expected to produce on a typical engagement" has no single page to land on.

This is a classic high-utility reference page that the audience would actually bookmark. It's also cheap to build — it's mostly a roll-up of content already written.

**Recommendation:** add a top-level **"Deliverables across the lifecycle"** page (linked from the home page or from a "Reference" section) — a single table or list grouping every named deliverable by phase, with a one-line description and a link back to the page where it's specified. Optional but high-impact.

### 3.3 No glossary / no defined-terms page

The site uses agency-specific jargon comfortably (BANT, SOW, ADR, Sev-1, RACI, hypercare, T&M, fixed-price, RFP). The voice rule is "declarative statements, no hedging" which is great, but a glossary page would catch readers who don't know one term and would otherwise bounce.

**Recommendation:** add a glossary page (`src/content/docs/glossary.md` at the root, linked from the home page footer or sidebar). Single-page, alphabetical, one-line definitions, with links to where each term is used. Low effort, meaningful payoff for the Marcus persona (Journey 1 in the PRD) who is new to consulting jargon.

### 3.4 Repo-root has loose working files

`feedback-from-chat-gpt.md`, `Questions-and-comments.md`, `example-ideas.md`, and `backlog.md` (untracked) sit alongside the canonical `README.md` and `CLAUDE.md` in the repo root. These look like working notes that should either be moved into `_bmad-output/` (for project-history items) or `.gitignore`d (for personal scratch).

**Recommendation:** move project-history items into `_bmad-output/notes/` (or similar) and either delete or gitignore the rest. Keeps the repo root scannable.

### 3.5 The Pricing & Estimation / Estimation & Cost Commitment / Estimation & Sprint Slicing nomenclature is confusing

Three pages, three subtly different names, all about estimation. Even with the cross-linking suggested in 2.7, the names alone make it hard to remember which is which.

**Optional rename suggestion:**

- `pre-sales/pricing-estimation.md` → "Pricing & Pre-Sales Estimation"
- `discovery/estimation-cost-commitment.md` → "Discovery Re-Estimation & Cost Commitment"
- `delivery/project-management/estimation-sprint-slicing.md` → "Sprint Estimation & Story Slicing"

This is a slug-immutability decision per architecture.md, so renames would need redirect entries. Treat as an "if you ever do a v1.x cleanup" item, not a v1 fix.

### 3.6 No "first read" / "where do I start" path on the home page

The home page is a phase list. That works for the trainer (Ferdi, Journey 3) and the freelancer who knows which phase she needs (Priya, Journey 2). It works less well for the *Marcus* persona — the senior engineer who has never seen the agency lifecycle and doesn't know which phase to click first.

**Recommendation:** add one or two sentences under the framing paragraph: *"New to consulting? Start with Pre-Sales and read in order — the lifecycle is sequential. Looking for a specific topic? Use the sidebar or search."* Tiny copy change, removes ambiguity for the new-to-consulting reader.

### 3.7 The home page is the only page that doesn't list deliverables

Every other page has a *Desired outcomes* section. The home page does not have an equivalent. A reader leaves the home page with no idea what they'll have learned by the end. Combined with 3.6, this is the home page underselling itself.

**Recommendation:** add a 3–4 bullet "what you'll get from reading this site" block to the home page. Low effort.

---

## 4. Things that are *not* problems (calling out for clarity)

After reading several pages in detail, I want to be explicit about what's **good** so the recommendations above don't read as a generic critique:

- **Voice is excellent.** Practitioner-grade, declarative, second-person, no marketing tone, no SDLC abstraction drift. The voice rule from `architecture.md:296-300` is being followed faithfully.
- **The 4-section template is rigorously applied** on every page sampled — *What happens here, Best practices, Desired outcomes, What the industry does* in that order, every time. The Zod schema enforces frontmatter; authoring discipline enforces the headings. This is exactly what the PRD asked for.
- **Cross-phase linking is doing its job.** The Delivery overview links forward to Deployment / Launch, backward to Requirements & Design, and laterally to its three streams. The Discovery overview links to Pre-Sales (SOW handoff in) and Requirements & Design (handoff out). The discipline holds.
- **The Delivery-as-three-streams restructure is the right call** and is executed well in `delivery/index.md`. Most agency-process content treats Development and QA as sequential phases; this site explicitly rejects that, which is one of its real differentiators.
- **The "What the industry does" section is the most distinctive part of the site.** Most SDLC content tells you *one* way to do things; this site consistently surfaces 2–4 archetypes per topic with their trade-offs (e.g. *paid discovery vs. included discovery*, *trunk-based vs. GitFlow*, *blameless vs. accountability post-incident*). That's the section a senior engineer would actually screenshot. Keep doing this.
- **Architecture decisions are well-motivated** — the islands-first interactivity policy, the Zod-schema content collection, the slug-immutability rule (with the documented 2026-05-06 exception), the explicit sidebar SSoT in `astro.config.mjs`. The architecture doc reads like decisions, not aspirations.
- **The BMAD-driven artifact trail in `_bmad-output/`** is genuinely a feature, not just process. Anyone evaluating "does AI-built work hold up under real review" can read brief → PRD → architecture → epics → per-story specs → code-review notes and see the discipline. The README's framing of this is accurate.

---

## 5. Factual / accuracy notes (minor)

I read these pages closely and didn't find any factual errors that need correction. Two opinion-presented-as-fact statements that are within the site's voice but worth a sanity-check:

- **`discovery/index.md:25`** — *"The agency invoices on the discovery milestone (typically 15%–30% of total engagement value)…"*  This range is industry-typical for boutique-to-mid-sized agencies but is on the high end for enterprise/T&M shops. Fine as-is given the site's declarative voice; flag only if you ever want to soften.
- **`maintenance-retainer/incident-response.md:39`** — *"Run a post-incident review within 5–10 business days."* Modern SRE practice (Google SRE book, Atlassian, Pagerduty) typically argues for *24–72 hours* while the incident is fresh, with 5–10 business days being the upper bound for closing the corrective-action artifact. Worth verifying against your own preference; either reading is defensible.

Neither is wrong. Both are calibrations rather than corrections.

---

## 6. Suggested priority order for action

If this gets prioritized into a future sprint:

**Must-fix before any further v1 work** (an hour or two total):
1. Update `<PhaseList />` to the 6-phase model (item 1.1) — fixes the only broken links on the live site.
2. Update `index.mdx` from "seven phases" to "six phases" (item 1.2).
3. Update `CLAUDE.md` and `README.md` to the 52-page count and 6-phase model (items 1.3, 1.4).

**Quick content fix** (one-line edit + sweep, ~30 minutes):
4. Tighten the Discovery overview's FR/NFR wording to match the R&D page (item 2.8). This is the cheapest item with the highest clarity payoff — it removes the apparent Discovery/R&D duplication without writing a single new page.

**High-value v1.x content additions** (one sub-section each, ~half a day each given the existing template):
5. Delivery Mobilization & Kickoff (item 2.1)
6. Data Migration & Cutover (item 2.2)
7. Engagement Closeout & Post-Implementation Review (item 2.4)
8. Hypercare & Warranty Period (item 2.3)
9. Accessibility Testing (item 2.5)
10. Contract layering / NDA / MSA / DPA expansion (item 2.6)

**Polish (do whenever):**
11. Cross-link the three estimation pages (item 2.7)
12. Deliverables index (item 3.2)
13. Glossary (item 3.3)
14. Home-page first-read guidance (items 3.6, 3.7)
15. Repo-root cleanup (item 3.4)

The first three items together remove the only thing on the site that's currently *wrong*. Everything else is *additive*.

---

## Sources consulted

- [Why Businesses Need a Strong Software Development Life Cycle in 2026 — EITBiz](https://www.eitbiz.com/blog/why-businesses-need-a-strong-software-development-life-cycle-in-2026/)
- [Evolve Your SDLC into a Solution Delivery Lifecycle — Info-Tech Research Group](https://www.infotech.com/research/ss/evolve-your-software-development-lifecycle-into-a-solution-delivery-lifecycle)
- [Software Delivery: Lifecycle & 10 Best Practices — Trigyn](https://www.trigyn.com/insights/software-delivery-process-lifecycle-and-10-best-practices-for-faster-releases)
- [Project Closeout: 8 Steps + Best Practices — BCS ProSoft](https://www.bcsprosoft.com/project-closeout/)
- [How to ensure smooth project closure and handover — PRINCE2](https://www.prince2.com/usa/blog/project-closure-and-handover)
- [7 Steps to Kick Off Every Consulting Project Perfectly — David A. Fields](https://davidafields.com/7-steps-to-kick-off-every-consulting-project-perfectly/)
- [Data Migration Cutover: Expert Strategies — KPMG](https://kpmg.com/ch/en/insights/data-analytics/data-migration-cutover.html)
- [Cutover Planning: A Step by Step Guide to Mastery — Enov8](https://www.enov8.com/blog/mastering-the-art-of-cutover-planning-a-step-by-step-guide/)
- [Ultimate List of 22 Must-Know SaaS Contracts and Documents — AMST Legal](https://amstlegal.com/ultimate-list-of-22-must-know-saas-contracts-and-documents/)
- [Due Diligence Questionnaire: Complete Guide — SmartRoom](https://smartroom.com/blog/due-diligence/due-diligence-questionnaire/)
- [WCAG Accessibility Audit Services — AccessibleWeb](https://accessibleweb.com/services/wcag-accessibility-audits/)
- [SaaS Accessibility Legal Compliance: ADA, EAA & WCAG — Accessibility.Works](https://www.accessibility.works/blog/saas-cloud-software-ada-compliance-wcag-testing-auditing/)
- ISO/IEC/IEEE 12207:2017 — *Systems and software engineering — Software life cycle processes* (offline reference)
- PMBOK Guide, 7th Edition — PMI (offline reference)
- DSDM Agile Project Framework — Agile Business Consortium (offline reference)
