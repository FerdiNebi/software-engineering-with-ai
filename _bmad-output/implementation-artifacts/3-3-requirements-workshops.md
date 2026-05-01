# Story 3.3: Requirements Workshops

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As Marcus prepping for his first requirements workshop,
I want to know what happens in the room, how to facilitate it, and what to produce,
So that I walk in with an agenda and walk out with signed deliverables, not just notes.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/discovery/requirements-workshops.md`; `title: "Requirements Workshops"`, `description:` (≤160 chars), `type: sub-section`, `phase: discovery`, `order: 3`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** defines the workshop's purpose (convert interview themes + stakeholder input into concrete requirements), typical duration/format, and participants.
10. **`## Best practices`** names specific facilitation techniques (pre-read 48h ahead, explicit agenda, documented decisions in-session, parking-lot for out-of-scope items) and at least two anti-patterns. Include `<Aside type="tip">` for one named technique and `<Aside type="caution">` for one anti-pattern.
11. **`## Desired outcomes`** lists: documented functional and non-functional requirements, prioritized feature list, agreed scope exclusions, risks/assumptions log, and a signed workshop summary.
12. **`## What the industry does`** contrasts single-workshop vs. series-of-workshops approaches and in-person vs. remote facilitation.
13. **Required cross-links:** forward link to `/discovery/prototyping-proof-of-concept/` OR `/discovery/discovery-deliverables-signoff/` AND cross-phase link to `/requirements-design/functional-nonfunctional-requirements/`.

## Tasks / Subtasks

- [ ] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [ ] Frontmatter per AC #1.
  - [ ] Write the four H2 sections per ACs #9–#12.
  - [ ] Embed required forward and cross-phase links per AC #13.
  - [ ] Plain `<ul>` for outcomes.

- [ ] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [ ] Hedging → declarative; first-person plural → second person; exactly 4 H2s; no `./` or hardcoded URL links.

- [ ] **Task 3 — Build verification** (AC: #8)
  - [ ] `pnpm build` — succeeds; `dist/discovery/requirements-workshops/index.html` exists.

- [ ] **Task 4 — Commit**
  - [ ] Scope `Epic 3 / Story 3.3`. Suggested: `Author Requirements Workshops (Epic 3 Story 3.3)`.

## Dev Notes

**Workshop != requirements doc.** A common reader misconception. The workshop produces *inputs* for the requirements doc; the doc itself lives in Requirements & Design (Story 4.2). Make this distinction explicit in `## What happens here`.

**Facilitation guidance must be concrete.** Pre-read times, agenda templates, parking-lot conventions — name them. Avoid vague advice ("be a good facilitator").

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/discovery/requirements-workshops.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 3` — sandwiched between Stakeholder Interviews (2) and Prototyping & POC (4), reflecting the typical discovery flow.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-3.3]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Cross-phase link to `/requirements-design/functional-nonfunctional-requirements/` (Story 4.2) — slug pinned, resolves at build.

## Dev Agent Record

### Agent Model Used

_To be filled by dev-story agent._

### Debug Log References

### Completion Notes List

### File List
