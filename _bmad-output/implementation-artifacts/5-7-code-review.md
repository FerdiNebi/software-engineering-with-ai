# Story 5.7: Code Review

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As an engineer participating in agency code review,
I want guidance on what to look for, how to review under delivery pressure, and how to run review across agency + client engineers,
So that review catches real issues without bottlenecking delivery.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/development/code-review.md`; `title: "Code Review"`, `description:` (≤160 chars), `type: sub-section`, `phase: development`, `order: 7`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** frames code review as both quality gate and knowledge-transfer mechanism, important for client-handoff scenarios.
10. **`## Best practices`** names specific conventions (review checklist, size-the-PR-small, reviewer rotation, client-engineer-in-review for handoff engagements, comment etiquette).
11. **`## Desired outcomes`** lists: reviewed-before-merge policy enforced, review comments resolved or deferred with rationale, documented review conventions.
12. **`## What the industry does`** contrasts heavyweight-review vs. trust-based-review shops.
13. **Required cross-links:** forward link to `/development/secure-development-practices/` AND cross to `/qa-testing/`.

## Tasks / Subtasks

- [ ] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [ ] Frontmatter per AC #1.
  - [ ] Write the four H2 sections per ACs #9–#12. `<Aside type="caution">` for "reviewing for syntax style instead of design and risk."
  - [ ] Embed required forward and cross-phase links per AC #13.
  - [ ] Plain `<ul>` for outcomes.

- [ ] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [ ] Hedging → declarative; first-person plural → second person; exactly 4 H2s; no `./` or hardcoded URL links.

- [ ] **Task 3 — Build verification** (AC: #8)
  - [ ] `pnpm build` — succeeds; `dist/development/code-review/index.html` exists.

- [ ] **Task 4 — Commit**
  - [ ] Scope `Epic 5 / Story 5.7`. Suggested: `Author Code Review (Epic 5 Story 5.7)`.

## Dev Notes

**Knowledge-transfer angle is the agency-specific twist.** In product-company contexts code review is a quality gate. In agency contexts it's *also* the mechanism by which client engineers come up to speed on what's being delivered. State both purposes in `## What happens here`.

**Comment etiquette is real best practice.** Tone of comments survives the review by ending up in the repo's history. Frame this as professional discipline, not soft skills.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/development/code-review.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 7` — sits in the "quality-in-dev" group between Developer Testing (6) and Secure Development (8).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-5.7]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Forward link to `/development/secure-development-practices/` (Story 5.8) and cross-phase to `/qa-testing/` (Story 6.1) — slugs pinned.

## Dev Agent Record

### Agent Model Used

_To be filled by dev-story agent._

### Debug Log References

### Completion Notes List

### File List
