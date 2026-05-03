# Story 6.5: Security Testing

Status: review

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a QA engineer responsible for security validation on agency engagements,
I want guidance on where to invest security testing (static, dynamic, pen test) proportional to engagement risk, and how to handle findings,
So that security sign-off is proportionate and findings do not block launch unreasonably.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/qa-testing/security-testing.md`; `title: "Security Testing"`, `description:` (≤160 chars), `type: sub-section`, `phase: qa-testing`, `order: 5`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** defines the main security-testing activities (SAST, DAST, dependency scan, pen test) and frames the "how much" question by engagement risk.
10. **`## Best practices`** names specific conventions (scan in CI, triage-with-CVE-risk, pen test pre-launch for regulated clients, documented exceptions).
11. **`## Desired outcomes`** lists: clean (or risk-accepted) scan results, documented findings/remediations, client-signed security acceptance.
12. **`## What the industry does`** contrasts in-house-only vs. third-party-pentest shops.
13. **Required cross-links:** backward link to `/development/secure-development-practices/` AND forward link to `/qa-testing/user-acceptance-testing/`.

## Tasks / Subtasks

- [x] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [x] Frontmatter per AC #1 (order corrected from 4 to 5).
  - [x] Four-activity set named (SAST, DAST, dependency scanning, pen test). Risk-proportional framing per Dev Notes — pen test recommended for regulated clients, not for low-risk engagements. Triage with four dispositions (remediated/risk-accepted/false-positive/deferred). `:::caution` for treating scanner output as gospel.
  - [x] Backward link to `/development/secure-development-practices/` and forward to `/qa-testing/user-acceptance-testing/` embedded inline.
  - [x] Plain `<ul>` for outcomes.

- [x] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [x] No hedging, no first-person plural, exactly 4 H2s in order, no relative `.md` or hardcoded URL links.

- [x] **Task 3 — Build verification** (AC: #8)
  - [x] `npm run build` passes.

- [x] **Task 4 — Commit**
  - [x] Scope `Epic 6 / Story 6.5`.

## Dev Notes

**Risk-proportional framing.** Marketing-site engagements rarely need a pen test; fintech engagements always do. Best practices section must explicitly help the practitioner scale security testing to the engagement's actual risk.

**Triage-with-CVE-risk discipline.** Not every scanner finding is a launch blocker. Best practices section needs to address how to triage and how to document risk-accepted findings.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/qa-testing/security-testing.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 5` — between Performance Testing (4) and UAT (6).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-6.5]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Backward link to `/development/secure-development-practices/` (Story 5.8) and forward to `/qa-testing/user-acceptance-testing/` (Story 6.6) — slugs pinned.

## Dev Agent Record

### Agent Model Used

claude-opus-4-7

### Debug Log References

### Completion Notes List

- Authored `src/content/docs/qa-testing/security-testing.md`. Four-activity set with risk-proportional sizing per Dev Notes. Triage discipline named with four dispositions. Industry section contrasts in-house-only vs third-party-pentest, compliance-led vs threat-model-led, SAST-heavy vs DAST-heavy vs balanced portfolios. Frontmatter order corrected from 4 to 5.

### File List

- src/content/docs/qa-testing/security-testing.md (modified)

### Change Log

- 2026-05-03: Authored Security Testing (Story 6.5)
