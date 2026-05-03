---
title: Technical Documentation
description: Documentation as a handoff deliverable — written for the client team inheriting the system, not for the agency engineers who already know it.
type: sub-section
phase: development
order: 10
lastUpdated: 2026-05-03
status: v1
---

## What happens here

Technical documentation in an agency engagement is a handoff deliverable, not an internal artifact. The client inherits the system at the end of the engagement; if they cannot operate, extend, or debug it without paging the agency, the documentation has not done its job. Engagements that defer documentation to the closing days produce shallow, error-prone documents written under deadline pressure by engineers who have rotated mentally to the next engagement. The pattern is unmistakable: documents that exist, that nobody reads, that the client replaces within six months.

The standard handoff documentation set has five artifacts:

- **Architecture reference.** The collected ADRs (per [System Architecture](/requirements-design/system-architecture/)), component diagram, data-flow diagram, and integration map. Tells a new engineer how the system is shaped and why.
- **API reference.** The OpenAPI specification, error catalogue, authentication model, rate-limit behaviour. Tells integrators how to consume the system without paging the agency.
- **Operational runbook.** Deployment procedures, rollback procedures, secrets-rotation calendar, common-failure responses, escalation contacts. Tells the client's ops team how to keep the system running and what to do when it breaks.
- **Onboarding guide.** Local development setup, where to find what in the codebase, conventions in use, the path from `git clone` to a running, testable system. Tells the next engineer how to be productive on the codebase in their first week.
- **Known-issues log.** Documented residual bugs, accepted limitations, deferred features, and items the client agreed to address post-handoff. Tells the post-handoff team what they inherited rather than discovered.

Documentation work runs continuously through development, not as a closing task. Each ADR is written when the decision is made; each API endpoint is documented as it ships; each runbook entry is written the first time the procedure is run. The output is a doc set checked into the client repository alongside the code, validated by a client-side reader before handoff, with documented update expectations carrying forward into [Maintenance & Retainer](/maintenance-retainer/) and [client handoff](/deployment-launch/client-handoff-launch-checklist/).

## Best practices

**Keep documentation in the repository alongside the code.** Documentation in shared drives, wikis, or external tools drifts the moment code changes. Documentation in the same repository as the code travels with the code, can be updated in the same PR, and is reviewable against the changes it describes. The discipline is `docs/` at the repo root containing all documentation, organised by audience (architecture, ops, onboarding, API). Engagements that maintain documentation outside the repo discover at handoff that none of it matches the code that was actually shipped.

**Calibrate the reader to the client team's skill level.** Documentation written for the agency's senior engineers (assumed familiarity with the architecture, the framework, the platform, the codebase conventions) is documentation the client's post-handoff team cannot read. The discipline is reader-calibration: write for someone with the skills the client team actually has. If the client's team is junior on the framework, the architecture document explains the framework's concepts; if the client's team is experienced, the document references the framework's conventions without explaining them. Calibration matters more than length — a 30-page document calibrated for the wrong reader is worse than a 5-page document calibrated correctly.

**Make documentation executable where possible.** Three classes of executable documentation:

- **Code samples that run.** Sample API calls in the API reference are tested in CI; broken samples fail the build. Sample integrations in the architecture document are checked into a `examples/` directory.
- **Generated reference where it stays current.** OpenAPI spec generated from code (or hand-written and contract-tested against code), schema diagrams generated from migrations, type documentation generated from source. Generated documentation cannot drift; hand-written reference docs always do.
- **Tested commands in runbooks.** Deployment commands in the runbook are tested in CI as part of the deploy pipeline. A runbook that says "run `make deploy-staging`" without that command being part of CI is a runbook that breaks the moment the underlying script changes.

Executable documentation is documentation that stays current. Static documentation requires human discipline to maintain; humans under deadline pressure stop maintaining it.

**Maintain a `last-updated` discipline on every document.** Each document carries a date or commit reference indicating when it was last reviewed against current state. Documents over six months stale are flagged for review. The discipline matters because old documentation that looks current is worse than missing documentation — the reader trusts it, and the trust is misplaced. Stale-flag indicators (`Last verified: 2026-05-03 against commit abc1234`) communicate the document's reliability honestly.

**Write the onboarding guide first; validate with a real new engineer.** A new engineer joining the team in week 4 attempts to set up locally using only the onboarding guide. Whatever fails — missing dependencies, undocumented environment variables, broken instructions — gets fixed in the guide before they ask the team. The exercise produces a guide that actually works because the failure modes have been encountered and corrected. Onboarding guides written from the existing team's memory miss everything the team has internalised; onboarding guides validated with real new engineers miss far less.

:::caution
Do not write documentation for the agency's own team rather than for the client receiving the handoff. Documentation that assumes the reader already knows the architecture, has access to the agency's tooling, knows where the agency stores artifacts, or refers to internal terminology is documentation the client cannot use. The most common form is the runbook that says "deploy via the standard process" — standard for whom? The agency, who knows. The client, who does not. The fix is mechanical: read every document as if you arrived at the codebase yesterday with no agency context. Whatever does not make sense gets rewritten until it does.
:::

**Choose what to deliberately not document.** Three categories rarely justify the documentation cost:

- **Exhaustive API references hand-maintained.** Generate them from code or schema; do not hand-maintain. Hand-maintained API references go stale on the first edit.
- **Step-by-step UI walkthroughs.** Screenshots get out of date the moment the UI changes. Document the model, not the UI; the UI is self-documenting if the model is clear.
- **Internal-only how-the-team-works documents.** The client does not need to know the team's sprint cadence, ticket-grooming process, or stand-up schedule. Document what the system is and how to operate it; not how the agency built it.

Documentation has a maintenance cost; documents the team will not maintain produce false confidence. The discipline is the courage to leave things undocumented when the documentation cost exceeds the value.

## Desired outcomes

By the end of technical documentation work in this phase, the engagement has:

- A complete documentation set checked into the client repository under `docs/`: architecture reference, API reference, operational runbook, onboarding guide, known-issues log
- Documentation validated by a client-side reader before handoff — typically a one-hour walkthrough where a named client engineer attempts to use each document and any issues are corrected
- Executable documentation where possible: tested code samples, generated reference docs, runbook commands exercised in CI
- A `last-updated` discipline applied across every document, with stale-flag indicators visible to readers
- Documented update expectations for the [maintenance phase](/maintenance-retainer/): who maintains the docs post-handoff, how they get updated when code changes, what the agency commits to during the warranty period
- An onboarding path validated with at least one real new engineer (or the equivalent — a client engineer attempting first setup) and updated to reflect what they encountered
- A handoff package referenced from [client handoff and launch checklist](/deployment-launch/client-handoff-launch-checklist/), where the documentation set is one of the named deliverables

## What the industry does

**Minimalist-docs vs. exhaustive-docs shops.** Minimalist-docs agencies produce the smallest documentation set the client can credibly operate from — typically a one-page architecture overview, ADRs, an operational runbook, and an onboarding guide. Trade-off: low maintenance burden, fast to produce, less defensible in formal handoff reviews, requires reader-fluent client teams. Exhaustive-docs agencies produce comprehensive documentation: detailed architecture diagrams at multiple levels of zoom, complete API references, extensive runbook procedures, troubleshooting guides for known failure modes, glossaries. Trade-off: high authoring cost, often unread, frequently out of date by handoff, defensible in regulated and procurement-heavy work. Minimalist dominates in modern agencies and product engineering, where the client can typically read code and the documentation supplements rather than replaces code reading; exhaustive survives in regulated industries (defence, healthcare, government), in offshore-handoff scenarios where the receiving team is less code-fluent, and in engagements where the documentation is itself a procurement artifact.

**Docs-as-code vs. wiki-driven cultures.** Docs-as-code agencies treat documentation as source artifacts in the repository — Markdown files, MDX, AsciiDoc, reStructuredText — version-controlled, PR-reviewed, deployed via the same pipelines as the code. Trade-off: documentation discipline matches code discipline, lower drift, harder to author for non-engineer contributors. Wiki-driven agencies maintain documentation in dedicated wiki tools (Confluence, Notion, Slab, GitBook) outside the repo. Trade-off: easier authoring, accessible to non-engineers, drifts faster from code, harder to validate against current behaviour. Docs-as-code dominates in modern engineering agencies and any engagement where engineers own the docs; wiki-driven survives in agencies with mixed-discipline contributors and in client environments where the wiki is the corporate norm. Most modern agencies trend docs-as-code with selective use of wiki tools for non-technical content (project plans, stakeholder communications, meeting notes).

**Generated-reference vs. hand-written-reference cultures.** Generated-reference agencies produce reference documentation from source — OpenAPI specs from code annotations, schema diagrams from migration files, type documentation from source files. Trade-off: stays current automatically, requires tooling investment, generated docs sometimes lack narrative context. Hand-written-reference agencies write reference docs as standalone artifacts maintained alongside code. Trade-off: better narrative quality, drifts on every code change unless actively maintained, high maintenance burden. Modern agencies trend strongly generated for reference docs (API references, schema docs, type docs) and hand-written for narrative docs (architecture overviews, ADRs, runbooks); pure hand-written reference survives in slow-changing systems and in agencies that have not invested in generation tooling.
