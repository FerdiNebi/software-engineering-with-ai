# Story 2.4: SOW & Contract Drafting

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a consultant turning a signed proposal into a binding contract,
I want to know what a professional SOW includes, how scope is locked, and what protections both parties need,
So that the delivered engagement matches what was sold and disputes have pre-agreed resolution paths.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/pre-sales/sow-contract-drafting.md`; `title: "SOW & Contract Drafting"`, `description:` (≤160 chars), `type: sub-section`, `phase: pre-sales`, `order: 4`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** defines the SOW as the contract artifact, distinguishes Master Services Agreement (MSA) from SOW, and names typical SOW sections: scope, deliverables, acceptance criteria, payment terms, change control, IP, warranties, termination.
10. **`## Best practices`** names specific drafting conventions (explicit exclusions, named assumptions, documented change-control process, clear acceptance criteria per deliverable). Use `<Aside type="caution">` for the most common SOW pitfall (vague acceptance criteria that the client can stretch indefinitely).
11. **`## Desired outcomes`** lists: a signed SOW, documented scope boundaries, agreed change-control process, and the discovery-phase handoff package.
12. **`## What the industry does`** contrasts fixed-scope, T&M, and hybrid SOW structures.
13. **Required cross-links:** forward link to `/pre-sales/pricing-estimation/` AND cross-phase link to `/discovery/estimation-cost-commitment/` (where post-discovery estimation feeds back into SOW pricing or change control).

## Tasks / Subtasks

- [ ] **Task 1 — Author the page** (AC: #1, #2, #3, #4, #5, #6, #9, #10, #11, #12, #13)
  - [ ] Frontmatter per AC #1.
  - [ ] Write the four H2 sections per ACs #9–#12. The MSA-vs-SOW distinction is a key pedagogy point — make it explicit early in `## What happens here`. Use `<Aside type="caution">` per AC #10.
  - [ ] Embed required forward and cross-phase links per AC #13.
  - [ ] Plain `<ul>` for outcomes.

- [ ] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [ ] Hedging → declarative; first-person plural → second person; exactly 4 H2s; no `./` or hardcoded URL links.
  - [ ] Legal-sounding prose risk: keep voice practitioner-grade; don't drift into legalese. The page is guidance for consultants, not a legal template.

- [ ] **Task 3 — Build verification** (AC: #8)
  - [ ] `pnpm build` — succeeds; `dist/pre-sales/sow-contract-drafting/index.html` exists.

- [ ] **Task 4 — Commit**
  - [ ] Scope `Epic 2 / Story 2.4`. Suggested: `Author SOW & Contract Drafting (Epic 2 Story 2.4)`.

## Dev Notes

**Scope discipline — IP / legal advice.** This page is professional guidance, not legal advice. The SOW sections list (scope, deliverables, payment, IP, etc.) frames *what an SOW typically contains*; do not prescribe specific contract clauses. Add a brief disclaimer line at the foot of `## Best practices` if the author judges it necessary, but do not turn the page into a contract template.

**Cross-phase link discipline.** The cross-phase link to `/discovery/estimation-cost-commitment/` is a real handoff (post-discovery re-estimation may revise SOW pricing or trigger change control), not a manufactured link. Make the prose around the link explain *why* discovery's estimation matters to the SOW.

**Forbidden in this story** (see "Forbidden patterns"):
- New files, helpers, components, or assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (all gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/pre-sales/sow-contract-drafting.md` — modified

**Testing standards:**
- No automated test. `pnpm build` is the schema/4-H2/link-safety check; manual lint per Task 2.

### Project Structure Notes

- `order: 4` keeps SOW between Proposal Writing (3) and Pricing & Estimation (5). The flow is sales doc → contract → price.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-2.4] — full BDD acceptance criteria + topic mandate
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content] — FR9–FR16
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Forward link to `/pre-sales/pricing-estimation/` (Story 2.5) and cross-phase to `/discovery/estimation-cost-commitment/` (Story 3.5) resolve at build.

## Dev Agent Record

### Agent Model Used

_To be filled by dev-story agent._

### Debug Log References

### Completion Notes List

### File List
