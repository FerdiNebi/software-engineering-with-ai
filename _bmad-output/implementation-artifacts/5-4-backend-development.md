# Story 5.4: Backend Development

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a backend engineer owning an agency delivery,
I want guidance on the agency-specific concerns of backend work — API contracts with frontend, data-model discipline under client scope changes, and logging/observability hooks that the client's ops team will use,
So that backend code is delivered in a shape that survives handoff.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/development/backend-development.md`; `title: "Backend Development"`, `description:` (≤160 chars), `type: sub-section`, `phase: development`, `order: 4`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** frames backend-in-agency as distinct from product-company backend (short-engagement scope, contract-first APIs, client-ownable code style) rather than generic backend coding advice.
10. **`## Best practices`** names specific conventions (API versioning, contract tests with frontend, migration discipline, observability-as-deliverable).
11. **`## Desired outcomes`** lists: deployable backend against signed FRs/NFRs, documented APIs for client or integration partners, and operational-readiness deliverables.
12. **`## What the industry does`** contrasts monolith-first vs. microservice agency styles AND contract-first vs. code-first API workflows.
13. **Required cross-links:** forward link to `/development/frontend-development/` OR `/development/developer-testing/` AND cross to `/requirements-design/system-architecture/`.

## Tasks / Subtasks

- [ ] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [ ] Frontmatter per AC #1.
  - [ ] Write the four H2 sections per ACs #9–#12. `<Aside type="caution">` for "shipping an undocumented API to client integrators."
  - [ ] Embed required forward and cross-phase links per AC #13.
  - [ ] Plain `<ul>` for outcomes.

- [ ] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [ ] Hedging → declarative; first-person plural → second person; exactly 4 H2s; no `./` or hardcoded URL links.

- [ ] **Task 3 — Build verification** (AC: #8)
  - [ ] `pnpm build` — succeeds; `dist/development/backend-development/index.html` exists.

- [ ] **Task 4 — Commit**
  - [ ] Scope `Epic 5 / Story 5.4`. Suggested: `Author Backend Development (Epic 5 Story 5.4)`.

## Dev Notes

**The page is NOT generic backend tutorials.** Resist the urge to cover "what is REST" or "how databases work." Frame is agency-specific concerns: contract-first API discipline, observability as a deliverable, code style the client will inherit. Generic backend material belongs elsewhere.

**Observability-as-deliverable is the agency twist.** A backend that the client cannot operate without the agency on retainer is not really delivered. Best practices section must surface logging/metrics/tracing as artifacts the client gets, not just code patterns.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/development/backend-development.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 4` — opens the "build" group (Backend + Frontend).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-5.4]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Forward link to `/development/frontend-development/` (Story 5.5) or `/development/developer-testing/` (Story 5.6) and cross-phase to `/requirements-design/system-architecture/` (Story 4.4) — slugs pinned.

## Dev Agent Record

### Agent Model Used

_To be filled by dev-story agent._

### Debug Log References

### Completion Notes List

### File List
