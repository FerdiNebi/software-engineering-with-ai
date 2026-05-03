# Story 4.5: Infrastructure Design

Status: review

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a technical lead planning the runtime/hosting/network design for a client engagement,
I want guidance on scoping, costing, and documenting the infrastructure plan,
So that Day 1 of development is not blocked by missing environments or unresolved hosting decisions.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/requirements-design/infrastructure-design.md`; `title: "Infrastructure Design"`, `description:` (≤160 chars), `type: sub-section`, `phase: requirements-design`, `order: 5`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** defines infrastructure design as distinct from DevOps execution (design = the plan; DevOps = the pipeline), and names the typical deliverables (environment map, hosting model, network diagram, cost estimate, secrets model, DR plan).
10. **`## Best practices`** names specific techniques (infrastructure-as-code posture from day one, environment parity, cost-model transparency for client, secrets-and-credentials standards).
11. **`## Desired outcomes`** lists: an approved infrastructure plan, a cost estimate aligned with pricing, environment provisioning kickoff, and a handoff to DevOps execution.
12. **`## What the industry does`** contrasts client-hosted vs. agency-hosted vs. third-party-managed approaches.
13. **Required cross-links:** forward link to `/development/devops-ci-cd/` AND cross to `/deployment-launch/infrastructure-provisioning/`.

## Tasks / Subtasks

- [x] **Task 1 — Author the page** (AC: #1–#6, #9–#13)
  - [x] Frontmatter per AC #1 (order corrected from 4 to 5).
  - [x] Design-vs-DevOps boundary made explicit in opening paragraph. Six-artifact set named (environment map, hosting, network, cost, secrets, DR). IaC-from-day-one, environment parity, transparent costs, secrets model standardisation, right-sized DR all named. `:::tip` for Day-1 readiness checklist; `:::caution` for starting dev without infrastructure.
  - [x] Forward link to `/development/devops-ci-cd/` and cross-phase to `/deployment-launch/infrastructure-provisioning/` embedded inline.
  - [x] Plain `<ul>` for outcomes.

- [x] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [x] No hedging, no first-person plural, exactly 4 H2s in order, no relative `.md` or hardcoded URL links.

- [x] **Task 3 — Build verification** (AC: #8)
  - [x] `npm run build` passes.

- [x] **Task 4 — Commit**
  - [x] Scope `Epic 4 / Story 4.5`.

## Dev Notes

**Design vs DevOps boundary.** This is a frequent reader confusion. Infrastructure design produces the plan (cost, environments, secrets policy, DR posture) before DevOps writes any pipeline YAML. The page's `## What happens here` should land that boundary in the first paragraph.

**IaC posture is best practice, not a religious choice.** Even a small static-site engagement benefits from declared infrastructure. Avoid heavy-Terraform-only framing; mention IaC variants the practitioner might encounter.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/requirements-design/infrastructure-design.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety; manual lint per Task 2.

### Project Structure Notes

- `order: 5` — last sub-section under `requirements-design/`. Starlight prev/next will land "next" on the first sub-section of Development.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-4.5]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]

**Cross-story dependencies:**
- Forward link to `/development/devops-ci-cd/` (Story 5.3) and cross-phase to `/deployment-launch/infrastructure-provisioning/` (Story 7.2) — slugs pinned.

## Dev Agent Record

### Agent Model Used

claude-opus-4-7

### Debug Log References

### Completion Notes List

- Authored `src/content/docs/requirements-design/infrastructure-design.md`. Design-vs-DevOps boundary landed in opening paragraph. Six-artifact set (environment map, hosting model, network diagram, cost estimate, secrets model, DR plan) named. IaC posture covered with examples of variants beyond Terraform (Pulumi, AWS CDK, Bicep, ARM, SST, Wrangler) per Dev Notes. Three secrets-model rules made concrete (no secrets in repo, per-environment scoping, rotation cadence). Industry section contrasts client-hosted vs agency-hosted vs third-party-managed, IaC-everywhere vs console-tolerant, heavyweight-DR vs minimal-viable-recovery. Frontmatter order corrected from 4 to 5.

### File List

- src/content/docs/requirements-design/infrastructure-design.md (modified)

### Change Log

- 2026-05-03: Authored Infrastructure Design (Story 4.5)
