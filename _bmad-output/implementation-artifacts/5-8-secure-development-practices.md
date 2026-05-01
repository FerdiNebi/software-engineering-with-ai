# Story 5.8: Secure Development Practices

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As an engineer delivering for a client whose risk posture differs from a product company's,
I want guidance on secure-development practices sized for agency engagements — secrets management, dependency hygiene, and threat-model depth commensurate with the client's industry,
So that delivered code does not carry baked-in vulnerabilities into the client's estate.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/development/secure-development-practices.md`; `title: "Secure Development Practices"`, `description:` (≤160 chars), `type: sub-section`, `phase: development`, `order: 8`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** frames secure development as a shared-responsibility activity across the engagement, varying by client industry (fintech/health vs. marketing site).
10. **`## Best practices`** names specific conventions (secrets scanning, SBOM, dep-update cadence, threat-model proportional to engagement size, OWASP-top-10 discipline).
11. **`## Desired outcomes`** lists: no hardcoded secrets in repo, clean dep-audit, documented threat model for risky engagements, handoff-ready security posture.
12. **`## What the industry does`** contrasts heavy-compliance shops vs. general-agency security practices.
13. **Required cross-links:** forward link to `/development/performance-engineering/` AND cross to `/qa-testing/security-testing/`.

## Tasks / Subtasks

- [ ] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [ ] Frontmatter per AC #1.
  - [ ] Write the four H2 sections per ACs #9–#12. `<Aside type="caution">` for "skipping a threat model because the client didn't ask for one — secure-by-default is part of the deliverable."
  - [ ] Embed required forward and cross-phase links per AC #13.
  - [ ] Plain `<ul>` for outcomes.

- [ ] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [ ] Hedging → declarative; first-person plural → second person; exactly 4 H2s; no `./` or hardcoded URL links.

- [ ] **Task 3 — Build verification** (AC: #8)
  - [ ] `pnpm build` — succeeds; `dist/development/secure-development-practices/index.html` exists.

- [ ] **Task 4 — Commit**
  - [ ] Scope `Epic 5 / Story 5.8`. Suggested: `Author Secure Development Practices (Epic 5 Story 5.8)`.

## Dev Notes

**Industry-proportional threat modeling is the agency-specific framing.** A marketing-site engagement does not need the threat model a fintech engagement does. Best practices section must explicitly help the practitioner *scale* security work to the client's actual risk posture, not apply blanket high-effort security to every engagement.

**Page is professional guidance, not OWASP cheat sheet.** Don't catalog every vulnerability class; reference OWASP Top 10 as the trusted external pointer and stay at the practitioner-discipline level.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/development/secure-development-practices.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 8` — pairs with Performance Engineering (9) in the "quality-in-dev" group.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-5.8]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#Authentication-and-Security] — meta: this project's own (minimal) security posture
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Forward link to `/development/performance-engineering/` (Story 5.9) and cross-phase to `/qa-testing/security-testing/` (Story 6.5) — slugs pinned.

## Dev Agent Record

### Agent Model Used

_To be filled by dev-story agent._

### Debug Log References

### Completion Notes List

### File List
