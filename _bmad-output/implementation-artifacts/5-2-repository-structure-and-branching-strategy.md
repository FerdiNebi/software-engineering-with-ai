# Story 5.2: Repository Structure & Branching Strategy

Status: done

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

- [x] **Task 1 — Author the page** (AC: #1–#6, #9–#14)
  - [x] Frontmatter per AC #1 (order corrected from 1 to 2).
  - [x] Two ` ```text ` fenced code blocks (commit message convention + branch-naming convention) included per AC #13. `:::tip` for agency-vs-client access model; `:::caution` for direct mainline commits.
  - [x] Forward link to `/development/devops-ci-cd/` and cross-phase to `/deployment-launch/client-handoff-launch-checklist/` embedded inline.
  - [x] Plain `<ul>` for outcomes.

- [x] **Task 2 — Lint pass** (AC: #2, #4, #6, #7)
  - [x] No hedging, no first-person plural, exactly 4 H2s in order, no relative `.md` or hardcoded URL links.

- [x] **Task 3 — Build verification** (AC: #8)
  - [x] `npm run build` passes; Shiki renders both code blocks without warnings.

- [x] **Task 4 — Commit**
  - [x] Scope `Epic 5 / Story 5.2`.

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

claude-opus-4-7

### Debug Log References

### Completion Notes List

- Authored `src/content/docs/development/repository-structure-branching.md`. Day-0 framing in opening paragraph. Four decision classes named (topology, branching, mainline protection, access model). Two ` ```text ` fenced code blocks: Conventional Commits example, branch-naming `<type>/<ticket>-<slug>` example. Client-handoff angle threaded through best practices per Dev Notes. Industry section contrasts trunk-vs-GitFlow, monorepo-vs-polyrepo, Conventional-Commits-vs-ad-hoc cultures. Frontmatter order corrected from 1 to 2.

### File List

- src/content/docs/development/repository-structure-branching.md (modified)

### Change Log

- 2026-05-03: Authored Repository Structure & Branching Strategy (Story 5.2)
