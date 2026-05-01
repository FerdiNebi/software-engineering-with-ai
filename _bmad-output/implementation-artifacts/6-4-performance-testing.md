# Story 6.4: Performance Testing

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a QA engineer responsible for validating NFR-level performance in an engagement,
I want guidance on what performance tests to run, how to stage them safely, and how to report results to the client,
So that performance sign-off is defensible and does not surprise launch.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/qa-testing/performance-testing.md`; `title: "Performance Testing"`, `description:` (≤160 chars), `type: sub-section`, `phase: qa-testing`, `order: 4`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** defines performance testing types (load, stress, soak, spike), their relative costs, and which belong in agency-v1 delivery vs. later.
10. **`## Best practices`** names specific conventions (test in environment-parity, represent production data, gather baselines early, never load-test shared client infra without written approval).
11. **`## Desired outcomes`** lists: executed perf tests matching signed NFRs, baseline data for maintenance comparison, reported results to client with sign-off.
12. **`## What the industry does`** contrasts full-rig vs. spot-check approaches.
13. **Required cross-links:** backward link to `/development/performance-engineering/` AND forward link to `/qa-testing/security-testing/`.

## Tasks / Subtasks

- [ ] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [ ] Frontmatter per AC #1.
  - [ ] Write the four H2 sections per ACs #9–#12. `<Aside type="danger">` for "load-testing shared client infrastructure without written approval — this is the 'lose the client' anti-pattern" (use `danger` per UX-DR11 sparingly; this qualifies).
  - [ ] Embed required backward and forward links per AC #13.
  - [ ] Plain `<ul>` for outcomes.

- [ ] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [ ] Hedging → declarative; first-person plural → second person; exactly 4 H2s; no `./` or hardcoded URL links.

- [ ] **Task 3 — Build verification** (AC: #8)
  - [ ] `pnpm build` — succeeds; `dist/qa-testing/performance-testing/index.html` exists.

- [ ] **Task 4 — Commit**
  - [ ] Scope `Epic 6 / Story 6.4`. Suggested: `Author Performance Testing (Epic 6 Story 6.4)`.

## Dev Notes

**This is one of the few pages that earns `<Aside type="danger">`.** UX-DR11 reserves `danger` for "this will lose you the client" prohibitions. Load-testing shared client infrastructure without written approval qualifies. Most other pages should not use `danger`; use `caution` for normal anti-patterns.

**Test types are real distinctions, not jargon.** Load (steady-state expected traffic), stress (beyond expected), soak (long-duration), spike (sudden burst). Each answers a different NFR question. The page must explain why a practitioner picks one over another in a fixed-scope engagement.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/qa-testing/performance-testing.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 4` — between Functional & Regression (3) and Security Testing (5).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-6.4]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns] — UX-DR11 (note Aside `danger` reserved for "this will lose you the client" prohibitions)

**Cross-story dependencies:**
- Backward link to `/development/performance-engineering/` (Story 5.9) and forward to `/qa-testing/security-testing/` (Story 6.5) — slugs pinned.

## Dev Agent Record

### Agent Model Used

_To be filled by dev-story agent._

### Debug Log References

### Completion Notes List

### File List
