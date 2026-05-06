# Action plan: restructure to 6 phases with a unified Delivery phase

External AI review of the v1 sidebar exposed a real frame issue: v1 reads
sequentially (Development → QA / Testing) when in practice Project Management,
Development, and QA / Testing run *concurrently* throughout delivery. This
plan replaces that split with a single Delivery phase that contains the three
concurrent streams as sub-sections, plus expanded explicit PM coverage.

This is a structural restructure, not a content polish. Old URLs at
`/development/*` and `/qa-testing/*` will break (return 404) — this is an
accepted cost. Architecture's slug-immutability rule is explicitly broken
here and the architecture doc must be updated to record the exception.

The rework will be filed as **new BMAD epics and stories**, not a frontmatter
migration on shipped pages — the existing Epic 5 and Epic 6 stay as a
historical record of what shipped originally; new epics own the new shape.

---

## Target sidebar (after restructure)

6 phases (was 7), with 3-level nesting under Delivery:

```
1. Pre-Sales & Business Development              (unchanged)
2. Discovery                                     (unchanged)
3. Requirements & Design                         (unchanged)
4. Delivery                                      ← NEW phase, replaces 4 + 5
   ├── Project Management                        ← NEW sub-section, has sub-pages
   │   ├── Sprint Planning & Cadence
   │   ├── Backlog Management
   │   ├── Estimation & Sprint Slicing
   │   ├── Status Reporting & Stakeholder Communication
   │   ├── Scope Control & Change Management (delivery-time)
   │   ├── Risk & Issue Management
   │   └── Retrospectives
   ├── Development                               ← was phase 4; now sub-section
   │   ├── Repository Structure & Branching Strategy
   │   ├── DevOps & CI/CD
   │   ├── Backend Development
   │   ├── Frontend Development
   │   ├── Developer Testing
   │   ├── Code Review
   │   ├── Secure Development Practices
   │   ├── Performance Engineering
   │   └── Technical Documentation
   └── QA / Testing                              ← was phase 5; now sub-section
       ├── Test Strategy & Planning
       ├── Functional & Regression Testing
       ├── Performance Testing
       ├── Security Testing
       └── User Acceptance Testing (UAT)
5. Deployment / Launch                           (was phase 6)
6. Maintenance & Retainer                        (was phase 7)
```

The Delivery phase overview page covers *that* the three streams run
concurrently, the cadence that ties them together, and the handoff to
Deployment / Launch.

---

## Migration scope

### Files & paths

- Move `src/content/docs/development/*` → `src/content/docs/delivery/development/*`
  (9 sub-pages + 1 overview).
- Move `src/content/docs/qa-testing/*` → `src/content/docs/delivery/qa-testing/*`
  (5 sub-pages + 1 overview).
- Add `src/content/docs/delivery/index.md` (Delivery phase overview).
- Add `src/content/docs/delivery/project-management/index.md`
  (Project Management sub-section overview).
- Add 7 new pages under `src/content/docs/delivery/project-management/<slug>.md`.

### Schema (`src/content.config.ts`)

- `phaseSlug` enum: replace `development` and `qa-testing` with `delivery`.
  Net change: `['pre-sales', 'discovery', 'requirements-design', 'delivery',
  'deployment-launch', 'maintenance-retainer']` — 6 entries down from 7.
- The 3-level nesting may need a new frontmatter field
  (`subsection: 'project-management' | 'development' | 'qa-testing'`) so the
  schema and the sidebar can express the second hop. Decide during the
  restructure story.

### Sidebar (`astro.config.mjs`)

- Replace the two top-level entries (Development, QA / Testing) with one
  Delivery entry.
- Inside Delivery, three sub-groups (PM, Development, QA / Testing), each
  with its own item list.
- Renumber Deployment / Launch and Maintenance & Retainer labels (5, 6).

### Planning artifacts

- `architecture.md`: update the phase-slug list, the file-and-folder pattern,
  and add an explicit note recording that the slug-immutability rule was
  consciously broken on 2026-05 to support the Delivery restructure.
- `prd.md`: revise the user journey + functional-requirements coverage so
  Delivery is the unit and PM/Dev/QA are streams.
- `epics.md`: append the new epics for this restructure.
- `sprint-status.yaml`: add the new stories.

---

## Epic plan

Three epics, in this order:

### Epic 10 — Delivery restructure (mechanical move)

Moves files, updates schema and sidebar, refreshes planning artifacts, ships
the Delivery overview page. **Does not** rewrite content on the moved pages
beyond frontmatter (`phase`/`order`/possibly `subsection`).

Stories (estimate):
- 10.1 Update `phaseSlug` enum + add subsection field if needed
- 10.2 Move Development pages into `src/content/docs/delivery/development/`
- 10.3 Move QA / Testing pages into `src/content/docs/delivery/qa-testing/`
- 10.4 Author Delivery phase overview (`/delivery/`)
- 10.5 Update `astro.config.mjs` sidebar to 3-level nesting
- 10.6 Update `architecture.md` (phase list + slug-immutability note)
- 10.7 Update `prd.md` (Delivery framing, user-journey edits)
- 10.8 Build verification + cross-link audit (every existing internal link
  to `/development/*` and `/qa-testing/*` updated to the new paths)

### Epic 11 — Project Management sub-section content

Authors the PM sub-section overview plus the 7 activity sub-pages, each on
the standard 4-section template.

Stories (one per page):
- 11.1 PM sub-section overview (`/delivery/project-management/`)
- 11.2 Sprint Planning & Cadence
- 11.3 Backlog Management
- 11.4 Estimation & Sprint Slicing
- 11.5 Status Reporting & Stakeholder Communication
- 11.6 Scope Control & Change Management (delivery-time)
- 11.7 Risk & Issue Management
- 11.8 Retrospectives

### Epic 12 — Cross-page edits surfaced by the restructure

Likely required, scope confirmed during Epic 10 build:
- Tighten PM mentions in `/pre-sales/sow-contract-drafting/` to point at
  delivery-time scope control rather than re-explaining it.
- Update `/maintenance-retainer/retainer-structure-slas/` and
  `/maintenance-retainer/incident-response/` cross-links to the new
  PM/Development/QA paths.
- Audit Deployment / Launch and Maintenance & Retainer for stale phase
  references (e.g. "in QA / Testing" prose now refers to a sub-section, not
  a phase).

---

## Open questions / decisions deferred to story-creation time

1. **Subsection frontmatter field?** Whether to add a `subsection` field to
   the Zod schema, or rely on the file path to encode the second hop.
   Decide in story 10.1.
2. **PM sub-page list — final count and order.** The 7 listed above is a
   first-draft set; refine in Epic 11 planning.
3. **Project Management framing.** The PM sub-section overview should
   explicitly position PM as the *commercial product* clients pay for in
   agency engagements (per the original review's framing), distinct from
   the engineering practices in Development and the validation practices
   in QA / Testing.

---

## Rejected — do not reopen

- **Discovery Kickoff & Delivery Setup as a separate sub-section.**
  Administrative content too thin for a 4-section page; if it surfaces a
  real reader gap, fold a paragraph into the Discovery overview.
- **Data, Migration & Integration Planning as a separate sub-section.**
  Already covered implicitly by `/requirements-design/system-architecture/`
  and `/requirements-design/infrastructure-design/`.
- **Post-Launch Hypercare as a separate sub-section.** Already covered by
  `/maintenance-retainer/bug-fixes-patch-management/`.
- **"Release Readiness & Go-Live Planning" as a separate sub-section.**
  Already covered by `/deployment-launch/client-handoff-launch-checklist/`.
- **Label-only renames** (`Client Handoff & Launch Checklist`,
  `Requirements & Design`, `QA / Testing`, `Deployment / Launch`).
  Cosmetic; not worth the churn.
- **10-phase top-level restructure.** This 6-phase restructure achieves the
  underlying goal (making the lifecycle agency-realistic) without inflating
  the top level.
- **Project Management as a top-level phase.** Folded into Delivery as a
  sub-section instead.
- **Backlog Definition under Requirements & Design.** Folded into PM as the
  Backlog Management sub-page instead.

---

Source review (kept for traceability): the original ChatGPT feedback document
is in this repo's git history at the previous version of this file.
