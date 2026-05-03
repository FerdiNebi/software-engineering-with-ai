# Story 3.4: Prototyping & Proof of Concept

Status: review

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a consultant validating a risky requirement before committing to a delivery estimate,
I want to know when a prototype or POC is justified, how to scope it, and how to run it inside discovery,
So that I surface unknowns before they become fixed-price commitments.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/discovery/prototyping-proof-of-concept.md`; `title: "Prototyping & Proof of Concept"`, `description:` (≤160 chars), `type: sub-section`, `phase: discovery`, `order: 4`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** defines the purpose (de-risk a technical, UX, or integration assumption), distinguishes prototype (UX) from POC (technical feasibility), and positions the activity relative to estimation.
10. **`## Best practices`** names specific techniques (time-box strictly, scope narrowly, write the question before building, throw-away posture, document findings).
11. **`## Desired outcomes`** lists: documented findings (does-it-work / does-it-not / with-which-trade-offs), an updated risk register, and often a revised estimate input.
12. **`## What the industry does`** contrasts time-boxed spike vs. full-fidelity prototype approaches.
13. **Required cross-links:** forward link to `/discovery/estimation-cost-commitment/`.

## Tasks / Subtasks

- [x] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [x] Frontmatter per AC #1 (order corrected from 3 to 4).
  - [x] Prototype-vs-POC distinction made explicit. Time-box, narrow scope, write-the-question-first, throw-away posture, written findings all named. `:::tip` for ≥3 user testers; `:::caution` for productionizing POC code.
  - [x] Forward link to `/discovery/estimation-cost-commitment/` embedded inline.
  - [x] Plain `<ul>` for outcomes.

- [x] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [x] No hedging, no first-person plural, exactly 4 H2s in order, no relative `.md` or hardcoded URL links.

- [x] **Task 3 — Build verification** (AC: #8)
  - [x] `npm run build` passes.

- [x] **Task 4 — Commit**
  - [x] Scope `Epic 3 / Story 3.4`.

## Dev Notes

**Prototype vs POC pedagogy.** Many readers conflate. The clean split: prototype answers UX questions ("how should this feel?"); POC answers technical questions ("can this integration even work in 2 weeks?"). Both are time-boxed and disposable. State this in `## What happens here`.

**Throw-away posture.** Best practices must include the discipline of throwing away POC code rather than productionizing it. This is the single most common discovery-to-build trap.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/discovery/prototyping-proof-of-concept.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 4` — between Requirements Workshops (3) and Estimation & Cost Commitment (5).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-3.4]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Forward link to `/discovery/estimation-cost-commitment/` (Story 3.5) — slug pinned.

## Dev Agent Record

### Agent Model Used

claude-opus-4-7

### Debug Log References

### Completion Notes List

- Authored `src/content/docs/discovery/prototyping-proof-of-concept.md`. Prototype (UX) vs POC (technical) cleanly distinguished. Five practices named (write-question-first, time-box strictly, scope to riskiest unknown, throw-away posture, document findings). `:::tip` for external user testing; `:::caution` for productionizing POC code (the most common discovery-to-build trap). Three anti-patterns named (POC-becomes-MVP, infinite spike, POC-by-committee). Industry section contrasts time-boxed-vs-full-fidelity, disposable-vs-stepping-stone, internal-only-vs-user-tested. Frontmatter order corrected from 3 to 4.

### File List

- src/content/docs/discovery/prototyping-proof-of-concept.md (modified)

### Change Log

- 2026-05-03: Authored Prototyping & Proof of Concept (Story 3.4)
