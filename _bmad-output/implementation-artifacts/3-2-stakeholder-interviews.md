# Story 3.2: Stakeholder Interviews

Status: review

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

- [x] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [x] Frontmatter per AC #1 (order corrected from 1 to 2).
  - [x] Four H2s authored. Sponsor/end-user/integrator/detractor stakeholder taxonomy made explicit. 1:1, small-group, paired-consultant formats covered. Recording etiquette addressed. `:::tip` for the closing "what are we not asking" prompt; `:::caution` for sponsor-only-interview anti-pattern.
  - [x] Forward link to `/discovery/requirements-workshops/` embedded inline.
  - [x] Plain `<ul>` for outcomes.

- [x] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [x] No hedging, no first-person plural, exactly 4 H2s in order, no relative `.md` or hardcoded URL links.

- [x] **Task 3 — Build verification** (AC: #8)
  - [x] `npm run build` passes.

- [x] **Task 4 — Commit**
  - [x] Scope `Epic 3 / Story 3.2`.

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

claude-opus-4-7

### Debug Log References

### Completion Notes List

- Authored `src/content/docs/discovery/stakeholder-interviews.md`. Stakeholder taxonomy (sponsor/end-users/integrators/detractors) named in the opening section. Three interview formats (1:1, small-group, paired-consultant) and three dominant-voice neutralization techniques covered. Recording etiquette section addresses consent, fallback to dual note-takers. `:::tip` and `:::caution` placed within Best practices. Industry section contrasts interview-heavy-vs-workshop-heavy, practitioner-led-vs-researcher-led, and recording-default-vs-notes-only cultures. Forward link to `/discovery/requirements-workshops/`. Frontmatter order corrected to 2 (was 1 in placeholder). Build passes.

### File List

- src/content/docs/discovery/stakeholder-interviews.md (modified)

### Change Log

- 2026-05-03: Authored Stakeholder Interviews (Story 3.2)
