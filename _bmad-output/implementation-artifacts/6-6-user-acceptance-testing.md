# Story 6.6: User Acceptance Testing

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a consultant running UAT with a client,
I want guidance on how to structure UAT, how to manage client feedback, and how to drive UAT to sign-off without scope creep,
So that UAT closes with client acceptance rather than spiraling into re-work.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/qa-testing/user-acceptance-testing.md`; `title: "User Acceptance Testing (UAT)"`, `description:` (≤160 chars), `type: sub-section`, `phase: qa-testing`, `order: 6`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** defines UAT as client-executed verification of signed acceptance criteria (not agency QA in another costume) and names the typical UAT rhythm.
10. **`## Best practices`** names specific conventions (structured UAT sessions, in-scope vs. enhancement-request triage, time-boxed cycles, explicit sign-off ritual).
11. **`## Desired outcomes`** lists: documented UAT cycles, signed UAT acceptance, enhancement-request log fed into change-control, go/no-go decision for deployment.
12. **`## What the industry does`** contrasts formal UAT vs. "send it to the client and see what breaks" cultures.
13. **Required cross-links:** forward link to `/deployment-launch/client-handoff-launch-checklist/` AND backward link to `/pre-sales/sow-contract-drafting/` (acceptance criteria origin).

## Tasks / Subtasks

- [ ] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [ ] Frontmatter per AC #1.
  - [ ] Write the four H2 sections per ACs #9–#12. `<Aside type="caution">` for "client UAT feedback that is enhancement disguised as 'bug' — must triage to change-control, not bug list."
  - [ ] Embed required forward and backward links per AC #13.
  - [ ] Plain `<ul>` for outcomes.

- [ ] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [ ] Hedging → declarative; first-person plural → second person; exactly 4 H2s; no `./` or hardcoded URL links.

- [ ] **Task 3 — Build verification** (AC: #8)
  - [ ] `pnpm build` — succeeds; `dist/qa-testing/user-acceptance-testing/index.html` exists.

- [ ] **Task 4 — Commit**
  - [ ] Scope `Epic 6 / Story 6.6`. Suggested: `Author UAT (Epic 6 Story 6.6)`.

## Dev Notes

**UAT is not "agency QA again."** UAT is the client running their own scripts against the signed acceptance criteria. This distinction is the headline of `## What happens here`.

**SOW backlink anchors the discipline.** UAT sign-off is bounded by what the SOW (Story 2.4) said acceptance criteria are. The backward link makes this concrete.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/qa-testing/user-acceptance-testing.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 6` — last sub-section under `qa-testing/`. Starlight prev/next will land "next" on the first sub-section of Deployment / Launch.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-6.6]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Forward link to `/deployment-launch/client-handoff-launch-checklist/` (Story 7.5) and backward to `/pre-sales/sow-contract-drafting/` (Story 2.4) — slugs pinned.

## Dev Agent Record

### Agent Model Used

_To be filled by dev-story agent._

### Debug Log References

### Completion Notes List

### File List
