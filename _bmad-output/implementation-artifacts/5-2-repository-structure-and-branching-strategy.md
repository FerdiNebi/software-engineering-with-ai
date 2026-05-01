# Story 5.2: Repository Structure & Branching Strategy

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a tech lead setting up the repo for a new engagement,
I want guidance on how agencies structure client repos, what branching strategy to adopt, and how to hand off source to the client at launch,
So that the repo is navigable, CI-friendly, and transferable.

## Acceptance Criteria

**Shared structural** (also see epics.md "Shared Content-Story Acceptance-Criteria Pattern"):

1. **File path & frontmatter pinned.** `src/content/docs/development/repository-structure-branching.md`; `title: "Repository Structure & Branching Strategy"`, `description:` (≤160 chars), `type: sub-section`, `phase: development`, `order: 2`, `lastUpdated: <ISO>`, optional `status: 'v1'`.
2. **Four H2s in exact order, no H1, no extras.**
3. **Substantive prose under every H2.**
4. **Voice & frame.**
5. **Page stands alone (FR15).**
6. **Internal links use leading-slash paths only.**
7. **No forbidden patterns.**
8. **Build & schema clean.**

**Topic-specific:**

9. **`## What happens here`** defines repo setup as a Day-0 activity (not retrofit) and names the standard decisions (monorepo vs. polyrepo, trunk-based vs. GitFlow, mainline protection rules, client-handoff vs. agency-internal repos).
10. **`## Best practices`** names specific conventions (branch naming, commit message convention, protected branches, PR templates, code-owners, access model for client vs. agency contributors).
11. **`## Desired outcomes`** lists: a live repo with working branch protections, documented branching strategy, a client-handoff-ready structure, and CI hooks present.
12. **`## What the industry does`** contrasts trunk-based vs. GitFlow-style shops.
13. **Page includes a code fence** showing an example branch-name or commit-message convention (Shiki highlighting).
14. **Required cross-links:** forward link to `/development/devops-ci-cd/` AND cross to `/deployment-launch/client-handoff-launch-checklist/`.

## Tasks / Subtasks

- [ ] **Task 1 — Author the page** (AC: #1–#6, #9–#14)
  - [ ] Frontmatter per AC #1.
  - [ ] Write the four H2 sections per ACs #9–#12. Include at least one fenced code block per AC #13 (e.g., a branch-naming convention or commit-message example). Use ` ```text ` or ` ```bash ` for the fence language tag — Shiki picks a highlighter automatically.
  - [ ] `<Aside type="tip">` for the agency-vs-client access model; `<Aside type="caution">` for "main-branch direct commits."
  - [ ] Embed required forward and cross-phase links per AC #14.
  - [ ] Plain `<ul>` for outcomes.

- [ ] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [ ] Hedging → declarative; first-person plural → second person; exactly 4 H2s; no `./` or hardcoded URL links.

- [ ] **Task 3 — Build verification** (AC: #8)
  - [ ] `pnpm build` — succeeds; `dist/development/repository-structure-branching/index.html` exists; the code fence renders without warnings.

- [ ] **Task 4 — Commit**
  - [ ] Scope `Epic 5 / Story 5.2`. Suggested: `Author Repository Structure & Branching Strategy (Epic 5 Story 5.2)`.

## Dev Notes

**Code fence is mandatory here (AC #13).** Almost every other content page is prose-only; this is the first that *must* show a code example. Keep the fence small (≤10 lines) and don't pretend to be a comprehensive reference.

**Client-handoff posture is the differentiator.** Generic SDLC content treats branching as a team-internal concern. Agency-specific concern: the repo will leave the agency at handoff. Branch protections, code-owners, access models all need a "what changes at handoff" angle.

**Forbidden in this story** (see "Forbidden patterns"):
- New files / components / assets (the Shiki code fence is built into Starlight; no plugin needed)
- Slug changes
- `<OutcomeChecklist>` / `<PhaseHandoff>` / `<PhaseBadge>` / Mermaid (gated for Epic 9)
- Marketing hero, CTA buttons, gamification, stock imagery, accordions

**Source tree components to touch:**
- `src/content/docs/development/repository-structure-branching.md` — modified

**Testing standards:**
- No automated test. `pnpm build` for schema/4-H2/link safety + Shiki code-fence acceptance; manual lint per Task 2.

### Project Structure Notes

- `order: 2` — first sub-section under `development/`, opens the "plumbing" pair (Repo + DevOps).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-5.2]
- [Source: _bmad-output/planning-artifacts/epics.md#Shared-Content-Story-Acceptance-Criteria-Pattern]
- [Source: _bmad-output/planning-artifacts/prd.md#Phase-Content]
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Authoring-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#File-and-Folder-Structure-Patterns]
- [Source: _bmad-output/planning-artifacts/architecture.md#Git-and-Workflow-Patterns] — meta: this project's own conventions; reference for how an agency-style repo can be documented in plain Markdown
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Callouts-and-content-patterns]
- Starlight Shiki code-block reference: https://starlight.astro.build/guides/authoring-content/#code-blocks (only consult for fence syntax; no plugin install)

**Cross-story dependencies:**
- Forward link to `/development/devops-ci-cd/` (Story 5.3) and cross-phase to `/deployment-launch/client-handoff-launch-checklist/` (Story 7.5) — slugs pinned.

## Dev Agent Record

### Agent Model Used

_To be filled by dev-story agent._

### Debug Log References

### Completion Notes List

### File List
