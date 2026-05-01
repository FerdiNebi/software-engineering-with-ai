# Story 9.3: Pre-launch manual accessibility audit

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a reader with accessibility needs arriving at the site,
I want the site to be keyboard-navigable, screen-reader-friendly, and legible in both themes,
So that I can use the reference without assistive-technology regressions.

## Acceptance Criteria

1. **Keyboard-only walkthrough (UX-DR25).** On a real content-populated site (Epics 1–8 at least partially shipped), the author walks through home + one phase overview + one sub-section using keyboard only. Every interactive element (sidebar, search, theme toggle, prev/next, in-page TOC, mobile menu if applicable) is reachable in logical order with a visible focus ring.

2. **VoiceOver smoke test (UX-DR26).** The same three pages are inspected with VoiceOver on macOS. Heading levels are announced in order, sidebar landmarks are named, cross-phase link text is meaningful out of context.

3. **Both-theme contrast pass (UX-DR27).** Both light and dark themes are eyeballed on real content on desktop and mobile. Body text contrast is ≥7:1 (AAA); interactive/UI elements are ≥4.5:1 (AA). No regressions vs. Starlight defaults.

4. **Mobile device test (UX-DR28, UX-DR21).** Tested on one iOS device and one Android device. Sidebar drawer, search, and theme toggle are thumb-operable. Interactive-element touch targets are ≥44×44 CSS px.

5. **Responsive breakpoint sweep (UX-DR29, NFR5).** Viewport widths 320, 375, 768, 1024, 1440, 2560 px loaded in devtools. The same three pages (home + phase overview + sub-section) load at every width; no horizontal scroll appears at any width; content column never exceeds ~75ch.

6. **Findings dispositioned.** Every issue identified during ACs #1–#5 is either:
   - **(a) Fixed** via a small spec / commit landed during or after this story.
   - **(b) Deferred** to a tracked follow-up entry in `_bmad-output/implementation-artifacts/deferred-work.md` with a one-line rationale.
   - **(c) Waived** with a one-line documented justification (rare).

7. **Audit results committed.** Audit notes are committed to the repo, either inline in this story's `Dev Agent Record → Completion Notes List` (preferred for short audits) or as a separate file under `_bmad-output/implementation-artifacts/9-3-accessibility-audit-results.md` (for longer audits with screenshots).

## Tasks / Subtasks

- [ ] **Task 1 — Pre-flight: confirm enough content exists to audit meaningfully** (AC: #1)
  - [ ] Verify Epics 1, plus at least one of 2–8 (typically 2 Pre-Sales is shipped first), have at least the phase overview + 1 sub-section authored with substantive prose. If the site is still all stubs, the audit has nothing to find — pause this story until content is ready.
  - [ ] If proceeding, choose the three pages explicitly: home (`/`), one phase overview (e.g., `/pre-sales/`), one sub-section (e.g., `/pre-sales/proposal-writing/`). Document the choice in completion notes.

- [ ] **Task 2 — Keyboard walkthrough** (AC: #1)
  - [ ] On desktop, with the site running via `corepack pnpm preview`, tab through each of the three pages from a fresh load. Note focus order, focus visibility, and any element you can't reach with keyboard alone.
  - [ ] Test both light and dark themes (focus rings must be visible in both).

- [ ] **Task 3 — VoiceOver smoke test** (AC: #2)
  - [ ] Enable VoiceOver on macOS (`Cmd+F5`). Walk the same three pages. Note heading-level announcements, landmark naming, and link-text quality.
  - [ ] If a Linux/Windows-only environment, use Orca or NVDA respectively and document the substitution. The intent of UX-DR26 is "smoke test with one screen reader on at least one platform."

- [ ] **Task 4 — Contrast eyeball** (AC: #3)
  - [ ] Use a contrast checker (axe DevTools, WebAIM Contrast Checker, or browser devtools color contrast). Sample body text and link text on both themes on desktop and mobile widths.
  - [ ] Pay specific attention to the accent color from Story 1.3 — its contrast vs. body background must meet AA on links and AAA on body text.

- [ ] **Task 5 — Mobile device test** (AC: #4)
  - [ ] On a real iOS device, load the three pages, tap-test the sidebar drawer, search, and theme toggle. Note any sub-44×44 touch targets.
  - [ ] Repeat on a real Android device. If only one device is available, document the substitution.

- [ ] **Task 6 — Responsive sweep** (AC: #5)
  - [ ] Open Chrome/Firefox devtools device toolbar. Load each of the three pages at each of: 320, 375, 768, 1024, 1440, 2560 px. Confirm no horizontal scroll appears at any width and the content column does not exceed ~75ch.

- [ ] **Task 7 — Disposition every finding** (AC: #6)
  - [ ] For each issue: decide fix-now vs. defer vs. waive. Apply or open the right action.
  - [ ] Append deferred items to `deferred-work.md` under a new heading `## From: pre-launch a11y audit (2026-XX-XX)` with one-line rationale per item.
  - [ ] Apply fix-now items inline if small (typo-grade) or open a separate story if substantial (out of scope for this audit story).

- [ ] **Task 8 — Commit audit results** (AC: #7)
  - [ ] Write findings into this story's `Dev Agent Record → Completion Notes List` (preferred for short audits) OR create `_bmad-output/implementation-artifacts/9-3-accessibility-audit-results.md` for longer audits with screenshots.
  - [ ] Single commit, scope `Epic 9 / Story 9.3`. Suggested message: `Pre-launch a11y audit results (Epic 9 Story 9.3)`. Include any deferred-work additions in the same commit.

## Dev Notes

**This story is fundamentally a manual-test story.** Most of the work happens in a browser and on real devices, not in code. The "implementation" is the audit notes; the value is the deferred-work-or-fix decisions on each finding.

**Pre-flight matters.** A11y audit on a stub site finds nothing meaningful. Confirm enough content exists before running the audit. If the project has fewer than ~5 substantive content pages live, defer this story.

**Severity-proportional disposition.** Not every finding is a launch blocker. Per AC #6:
- Blockers (e.g., sidebar unreachable by keyboard, link text says "click here") — fix or block launch.
- Improvements (e.g., focus ring color could be punchier in dark mode) — defer.
- Out-of-scope (e.g., "the site needs a screen-reader skip link to footer that doesn't exist yet") — waive with justification, file as a v2 enhancement if relevant.

**The Story 1.1 code review surfaced a related defer item.** "Screen-reader announcement of `N. ` prefix" is already in `deferred-work.md`. Decide here whether to fix it (set `aria-label` on each sidebar group) or accept it (announces "one dot Pre-Sales" — sub-optimal but understandable). Document the decision.

**Forbidden in this story:**
- Adding new content pages or new components (the audit reports findings; new components are separate gated stories)
- Editing more than ~10 lines of code as a "fix-now" — anything bigger should be a separate story so it's reviewed on its own terms
- Skipping the negative-test ACs because "looks fine on my machine" — the breakpoint sweep, VoiceOver pass, and mobile-device test are required, not optional

**Source tree components to touch:**
- `_bmad-output/implementation-artifacts/9-3-number-the-phase-labels-in-the-sidebar.md` — this story file (Dev Agent Record gets the audit notes)
- `_bmad-output/implementation-artifacts/deferred-work.md` — modified (any deferred findings appended)
- Optionally: `_bmad-output/implementation-artifacts/9-3-accessibility-audit-results.md` — NEW (only if audit notes are too large for inline)
- Code files that small fix-nows touch (rare) — discretion of the developer running the audit

**Testing standards:**
- This story IS the test. There is no automated test for this story; the audit *is* the verification.
- Future a11y CI integration (axe-core in CI) is out of scope for v1; tracked in `deferred-work.md` if not already.

### Project Structure Notes

- The audit notes file (if used) lives in `_bmad-output/implementation-artifacts/` alongside other implementation artifacts.
- Per CLAUDE.md, this is a discrete BMAD milestone — even a manual-test story commits its results.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story-9.3]
- [Source: _bmad-output/planning-artifacts/epics.md#UX-Design-Requirements] — UX-DR18 (WCAG 2.2 AA target), UX-DR19 (contrast targets), UX-DR20 (keyboard + focus), UX-DR21 (touch target ≥44×44), UX-DR22 (`<html lang="en">`), UX-DR23 (reduced motion), UX-DR24 (Mermaid alt text — only if Story 9.9 is in play), UX-DR25–UX-DR29 (the manual-test set this story executes)
- [Source: _bmad-output/planning-artifacts/prd.md#Display-and-Appearance] — NFR5 (320–2560 px responsive), NFR6 (both themes legible)
- [Source: _bmad-output/implementation-artifacts/deferred-work.md] — existing a11y-related defers
- [Source: _bmad-output/implementation-artifacts/1-1-number-the-phase-labels-in-the-sidebar.md] — Review Findings section flagged "Screen-reader announcement of `N. ` prefix" as a defer; decide here

**Cross-story dependencies:**
- **Soft dependency on Stories 1.1, 1.2, 1.3 (Epic 1).** The audit depends on the sidebar numbering, home `<PhaseList>`, and accent color all being in place — without them the audit is incomplete.
- **Soft dependency on at least one Epic (2–8) shipping content.** A site with all stub content is not auditable for the things that matter.
- Independent of Stories 9.1, 9.2, 9.4, 9.5 — those can ship in any order around this one.

## Dev Agent Record

### Agent Model Used

_To be filled by dev-story agent._

### Debug Log References

### Completion Notes List

### File List
