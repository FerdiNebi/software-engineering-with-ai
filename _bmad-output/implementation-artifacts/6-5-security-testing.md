# Story 6.5: Security Testing

Status: ready-for-dev

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

- [ ] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [ ] Frontmatter per AC #1.
  - [ ] Write the four H2 sections per ACs #9–#12. `<Aside type="caution">` for "treating SAST/DAST output as gospel — false positives are real and triage matters."
  - [ ] Embed required backward and forward links per AC #13.
  - [ ] Plain `<ul>` for outcomes.

- [ ] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [ ] Hedging → declarative; first-person plural → second person; exactly 4 H2s; no `./` or hardcoded URL links.

- [ ] **Task 3 — Build verification** (AC: #8)
  - [ ] `pnpm build` — succeeds; `dist/qa-testing/security-testing/index.html` exists.

- [ ] **Task 4 — Commit**
  - [ ] Scope `Epic 6 / Story 6.5`. Suggested: `Author Security Testing (Epic 6 Story 6.5)`.

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

_To be filled by dev-story agent._

### Debug Log References

### Completion Notes List

### File List
