# Story 3.5: Estimation & Cost Commitment

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a consultant producing a discovery-phase estimate that will either confirm or revise the pre-sales price,
I want to know how to estimate at this stage, how to handle variance from the pre-sales number, and how to commit,
So that the estimate is defensible, the client is informed, and commitment is made with open eyes.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/discovery/estimation-cost-commitment.md`; `title: "Estimation & Cost Commitment"`, `description:` (≤160 chars), `type: sub-section`, `phase: discovery`, `order: 5`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** defines discovery-phase estimation as distinct from pre-sales pricing, and explains the typical re-estimation outcomes (confirmed, raised, lowered, or scope-adjusted).
10. **`## Best practices`** names specific techniques (bottom-up by task, reference-class forecasting, explicit range with confidence, sizing relative to prototype findings).
11. **`## Desired outcomes`** lists: a refined estimate with confidence band, a reconciliation against pre-sales pricing, a commitment path (accept / renegotiate / pause), and the input for the Requirements & Design phase.
12. **`## What the industry does`** contrasts agencies that re-price freely after discovery vs. those that hold the pre-sales price absolute.
13. **Required cross-links:** backward link to `/pre-sales/pricing-estimation/` AND forward link to `/discovery/discovery-deliverables-signoff/`.

## Tasks / Subtasks

- [ ] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [ ] Frontmatter per AC #1.
  - [ ] Write the four H2 sections per ACs #9–#12. `<Aside type="caution">` for "estimation that ignores prototype findings."
  - [ ] Embed required backward and forward links per AC #13.
  - [ ] Plain `<ul>` for outcomes.

- [ ] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [ ] Hedging → declarative; first-person plural → second person; exactly 4 H2s; no `./` or hardcoded URL links.

- [ ] **Task 3 — Build verification** (AC: #8)
  - [ ] `pnpm build` — succeeds; `dist/discovery/estimation-cost-commitment/index.html` exists.

- [ ] **Task 4 — Commit**
  - [ ] Scope `Epic 3 / Story 3.5`. Suggested: `Author Estimation & Cost Commitment (Epic 3 Story 3.5)`.

## Dev Notes

**Discovery-stage estimation ≠ pre-sales pricing ≠ developer-task estimation.** Three different activities, three different audiences. This page is the *middle* of those three:
- Pre-sales pricing (Story 2.5): "what shall I quote the prospect?"
- Discovery estimation (this story): "now that we've interviewed and prototyped, what's it really going to take?"
- Developer estimation (Epic 5 implicitly): "how much time does this specific feature need from me?"

State the three-tier model explicitly in `## What happens here`.

**Renegotiation realism.** When discovery finds the pre-sales number was wrong, you have to tell the client. Best practices section must address this conversation honestly, not euphemistically.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/discovery/estimation-cost-commitment.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 5` — between Prototyping & POC (4) and Discovery Deliverables & Sign-Off (6).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-3.5]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Backward link to `/pre-sales/pricing-estimation/` (Story 2.5) — already created.
- Forward link to `/discovery/discovery-deliverables-signoff/` (Story 3.6) — slug pinned.

## Dev Agent Record

### Agent Model Used

_To be filled by dev-story agent._

### Debug Log References

### Completion Notes List

### File List
