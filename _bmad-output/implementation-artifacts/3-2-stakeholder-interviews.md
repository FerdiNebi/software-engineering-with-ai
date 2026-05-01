# Story 3.2: Stakeholder Interviews

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a consultant kicking off a discovery engagement,
I want to know how to identify, schedule, and conduct stakeholder interviews that produce usable input for requirements workshops,
So that I enter the workshop with context, not cold.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/discovery/stakeholder-interviews.md`; `title: "Stakeholder Interviews"`, `description:` (≤160 chars), `type: sub-section`, `phase: discovery`, `order: 2`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** defines the role of stakeholder interviews, who to interview (sponsor, end-users, integrators, detractors), and positioning relative to workshops.
10. **`## Best practices`** names specific interview techniques (1:1 vs. small-group, open vs. structured, recording conventions) and how to neutralize dominant voices.
11. **`## Desired outcomes`** lists: an interview synthesis, identified stakeholder concerns/constraints, a workshop agenda informed by interview themes, and documented rejected directions.
12. **`## What the industry does`** contrasts interview-heavy vs. workshop-heavy discovery styles.
13. **Required cross-links:** forward link to `/discovery/requirements-workshops/`.

## Tasks / Subtasks

- [ ] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [ ] Frontmatter per AC #1.
  - [ ] Write the four H2 sections per ACs #9–#12. `<Aside type="caution">` for the most common stakeholder-interview pitfall (e.g., interviewing only the sponsor and missing the people who will actually use the system).
  - [ ] Embed forward link per AC #13.
  - [ ] Plain `<ul>` for outcomes.

- [ ] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [ ] Hedging → declarative; first-person plural → second person; exactly 4 H2s; no `./` or hardcoded URL links.

- [ ] **Task 3 — Build verification** (AC: #8)
  - [ ] `pnpm build` — succeeds; `dist/discovery/stakeholder-interviews/index.html` exists.

- [ ] **Task 4 — Commit**
  - [ ] Scope `Epic 3 / Story 3.2`. Suggested: `Author Stakeholder Interviews (Epic 3 Story 3.2)`.

## Dev Notes

**Stakeholder = more than the sponsor.** The page must name end-users, integrators, and detractors as first-class interviewees, not afterthoughts. Many readers will assume "stakeholder" = "the person who pays the bill."

**Recording etiquette.** Best-practices section should address whether/how to record interviews and the consent/legal posture. Keep it practitioner-grade, not legal-template territory.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/discovery/stakeholder-interviews.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 2` — first sub-section under `discovery/`. Starlight will sort it after the overview.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-3.2]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Forward link to `/discovery/requirements-workshops/` (Story 3.3) — slug pinned, resolves at build.

## Dev Agent Record

### Agent Model Used

_To be filled by dev-story agent._

### Debug Log References

### Completion Notes List

### File List
