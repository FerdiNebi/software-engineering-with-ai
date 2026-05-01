# Story 3.6: Discovery Deliverables & Sign-Off

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a consultant closing the discovery phase and handing off to Requirements & Design,
I want to know what deliverables constitute "done" for discovery and how to obtain formal sign-off,
So that the engagement transitions with a paper trail and both sides agree on what was produced.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/discovery/discovery-deliverables-signoff.md`; `title: "Discovery Deliverables & Sign-Off"`, `description:` (≤160 chars), `type: sub-section`, `phase: discovery`, `order: 6`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** names the standard discovery deliverable set (requirements document, scope statement, estimate revision, risk register, decisions log, handoff package) and defines "sign-off" as the formal closure ritual.
10. **`## Best practices`** names specific sign-off mechanics (named signatories, scope of sign-off, what sign-off does and does NOT waive, handling sign-off delays).
11. **`## Desired outcomes`** lists: signed discovery deliverables, closed pending questions, documented open risks accepted by the client, and an invoice event.
12. **`## What the industry does`** contrasts formal written sign-off vs. email-confirmation practices.
13. **Required cross-links:** forward link to `/requirements-design/` AND cross-phase backward link to `/pre-sales/sow-contract-drafting/` (where the SOW's acceptance criteria constrain sign-off).

## Tasks / Subtasks

- [ ] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [ ] Frontmatter per AC #1.
  - [ ] Write the four H2 sections per ACs #9–#12. `<Aside type="caution">` for "skipping sign-off because the client said 'looks good' on a call."
  - [ ] Embed required forward and cross-phase links per AC #13.
  - [ ] Plain `<ul>` for outcomes.

- [ ] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [ ] Hedging → declarative; first-person plural → second person; exactly 4 H2s; no `./` or hardcoded URL links.

- [ ] **Task 3 — Build verification** (AC: #8)
  - [ ] `pnpm build` — succeeds; `dist/discovery/discovery-deliverables-signoff/index.html` exists.

- [ ] **Task 4 — Commit**
  - [ ] Scope `Epic 3 / Story 3.6`. Suggested: `Author Discovery Deliverables & Sign-Off (Epic 3 Story 3.6)`.

## Dev Notes

**Sign-off is a ritual, not a vibe.** The page must articulate that sign-off is a discrete, named event with named signatories on named artifacts. Slack messages don't count; email might count if explicit; document signature is the gold standard. Best practices section should give the practitioner a defensible posture without becoming a contract template.

**SOW interaction.** The SOW (from Story 2.4) constrains what sign-off can validly cover. If the SOW says "client signs off on requirements doc by week 6," then this page's process must produce a signable requirements doc by week 6. Make this dependency explicit through the cross-phase link.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/discovery/discovery-deliverables-signoff.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 6` — last sub-section under `discovery/`. Starlight's prev/next will land "next" on the first sub-section of Requirements & Design.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-3.6]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Forward link to `/requirements-design/` (Story 4.1) and cross-phase backward to `/pre-sales/sow-contract-drafting/` (Story 2.4) — both slugs pinned.

## Dev Agent Record

### Agent Model Used

_To be filled by dev-story agent._

### Debug Log References

### Completion Notes List

### File List
