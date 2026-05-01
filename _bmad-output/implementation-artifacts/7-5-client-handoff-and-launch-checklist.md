# Story 7.5: Client Handoff & Launch Checklist

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a consultant closing the delivery engagement,
I want a concrete checklist for handoff — credentials, docs, training, acceptance — and guidance on how to close cleanly,
So that the engagement ends with client self-sufficiency and a defensible sign-off.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/deployment-launch/client-handoff-launch-checklist.md`; `title: "Client Handoff & Launch Checklist"`, `description:` (≤160 chars), `type: sub-section`, `phase: deployment-launch`, `order: 5`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** frames handoff as a ritual, names the artifact set (credentials, docs, runbooks, training session, sign-off), and positions it as the gate to retainer.
10. **`## Best practices`** names specific conventions (named handoff meeting, walkthrough of each artifact, knowledge-transfer session recording, explicit acceptance ritual).
11. **`## Desired outcomes`** lists: client has everything needed to operate, signed handoff acceptance, closed invoice, explicit transition to retainer or end-of-engagement.
12. **`## What the industry does`** contrasts formal-handoff vs. "we're here on Slack anyway" cultures.
13. **Required cross-links:** forward link to `/maintenance-retainer/retainer-structure-slas/` AND backward link to `/pre-sales/sow-contract-drafting/` (acceptance-criteria origin).

## Tasks / Subtasks

- [ ] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [ ] Frontmatter per AC #1.
  - [ ] Write the four H2 sections per ACs #9–#12. `<Aside type="caution">` for "Slack-channel handoffs that never officially end — the agency stays on retainer-without-retainer."
  - [ ] Embed required forward and backward links per AC #13.
  - [ ] Plain `<ul>` for outcomes.

- [ ] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [ ] Hedging → declarative; first-person plural → second person; exactly 4 H2s; no `./` or hardcoded URL links.

- [ ] **Task 3 — Build verification** (AC: #8)
  - [ ] `pnpm build` — succeeds; `dist/deployment-launch/client-handoff-launch-checklist/index.html` exists.

- [ ] **Task 4 — Commit**
  - [ ] Scope `Epic 7 / Story 7.5`. Suggested: `Author Client Handoff & Launch Checklist (Epic 7 Story 7.5)`.

## Dev Notes

**Handoff is a ritual, not a vibe.** This page is the procedural anchor for ending the delivery engagement. The contrast with "we're here on Slack anyway" cultures is critical — informal handoffs trap agencies in unbilled support work indefinitely.

**Backward link to SOW (Story 2.4) is the acceptance-criteria anchor.** Whatever the SOW said acceptance criteria are, that's what the handoff must satisfy.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/deployment-launch/client-handoff-launch-checklist.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 5` — last sub-section under `deployment-launch/`. Starlight prev/next will land "next" on the first sub-section of Maintenance & Retainer.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-7.5]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Forward link to `/maintenance-retainer/retainer-structure-slas/` (Story 8.5) and backward to `/pre-sales/sow-contract-drafting/` (Story 2.4) — slugs pinned.

## Dev Agent Record

### Agent Model Used

_To be filled by dev-story agent._

### Debug Log References

### Completion Notes List

### File List
