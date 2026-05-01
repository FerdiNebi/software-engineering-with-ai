# Story 7.3: Deployment Execution & Smoke Testing

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a tech lead running the launch-day deployment,
I want guidance on the deployment sequence, smoke-test checklist, and go/no-go decision points,
So that go-live is a planned event with explicit gates, not a hope.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/deployment-launch/deployment-execution-smoke-testing.md`; `title: "Deployment Execution & Smoke Testing"`, `description:` (≤160 chars), `type: sub-section`, `phase: deployment-launch`, `order: 3`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** defines the launch-day sequence (final build, cutover, smoke, monitor, confirm, communicate) and names typical go/no-go gates.
10. **`## Best practices`** names specific conventions (rehearsal in staging, named commander, documented smoke-test script, rollback-criteria-defined-in-advance, launch-window communication).
11. **`## Desired outcomes`** lists: successful deployment, passed smoke tests, confirmed stakeholder notifications, monitoring shows green.
12. **`## What the industry does`** contrasts go-live-as-event vs. deploy-continuously cultures.
13. **Required cross-links:** backward link to `/development/devops-ci-cd/` AND forward link to `/deployment-launch/monitoring-observability-setup/`.

## Tasks / Subtasks

- [ ] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [ ] Frontmatter per AC #1.
  - [ ] Write the four H2 sections per ACs #9–#12. `<Aside type="caution">` for "no rollback plan or rollback plan only-discussed-not-rehearsed."
  - [ ] Embed required backward and forward links per AC #13.
  - [ ] Plain `<ul>` for outcomes.

- [ ] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [ ] Hedging → declarative; first-person plural → second person; exactly 4 H2s; no `./` or hardcoded URL links.

- [ ] **Task 3 — Build verification** (AC: #8)
  - [ ] `pnpm build` — succeeds; `dist/deployment-launch/deployment-execution-smoke-testing/index.html` exists.

- [ ] **Task 4 — Commit**
  - [ ] Scope `Epic 7 / Story 7.3`. Suggested: `Author Deployment Execution & Smoke Testing (Epic 7 Story 7.3)`.

## Dev Notes

**Named commander is real practice.** Launch-day chaos is preventable; a single person making call-it/scrub-it decisions is the discipline. Best practices must include this role explicitly.

**Smoke-test script discipline.** Smoke tests at deploy time are NOT regression suites — they're a fast checklist confirming the live system answers basic queries. Frame the size of the script (5–10 minutes) and what belongs vs. doesn't.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/deployment-launch/deployment-execution-smoke-testing.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 3` — between Infrastructure Provisioning (2) and Monitoring & Observability Setup (4).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-7.3]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Backward link to `/development/devops-ci-cd/` (Story 5.3) and forward to `/deployment-launch/monitoring-observability-setup/` (Story 7.4) — slugs pinned.

## Dev Agent Record

### Agent Model Used

_To be filled by dev-story agent._

### Debug Log References

### Completion Notes List

### File List
