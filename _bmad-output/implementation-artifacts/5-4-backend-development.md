# Story 5.4: Backend Development

Status: review

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

- [x] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [x] Frontmatter per AC #1 (order corrected from 3 to 4).
  - [x] Agency-specific framing in opening (short scope, contract-first, client-ownable, observability-as-deliverable). API versioning, contract tests, migration discipline, observability, conventional frameworks all named. `:::caution` for undocumented APIs.
  - [x] Forward link to `/development/frontend-development/` and cross-phase to `/requirements-design/system-architecture/` embedded inline.
  - [x] Plain `<ul>` for outcomes.

- [x] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [x] No hedging, no first-person plural, exactly 4 H2s in order, no relative `.md` or hardcoded URL links.

- [x] **Task 3 — Build verification** (AC: #8)
  - [x] `npm run build` passes.

- [x] **Task 4 — Commit**
  - [x] Scope `Epic 5 / Story 5.4`.

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

claude-opus-4-7

### Debug Log References

### Completion Notes List

- Authored `src/content/docs/development/backend-development.md`. Opening section explicitly distinguishes agency backend from product-company backend (per Dev Notes guidance). Three-layer observability deliverable (structured logs, metrics with named dashboards, distributed tracing) covered concretely. Three-rule migration discipline named. Industry section contrasts monolith-vs-microservice, contract-first-vs-code-first APIs, vertical-slice-vs-layer-by-layer. Frontmatter order corrected from 3 to 4.

### File List

- src/content/docs/development/backend-development.md (modified)

### Change Log

- 2026-05-03: Authored Backend Development (Story 5.4)
