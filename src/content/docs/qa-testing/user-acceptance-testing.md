---
title: User Acceptance Testing (UAT)
description: Client-executed verification of signed acceptance criteria — structured sessions, disciplined triage, explicit sign-off, no scope creep.
type: sub-section
phase: qa-testing
order: 6
lastUpdated: 2026-05-03
status: v1
---

## What happens here

User Acceptance Testing is the cycle where the client themselves verifies that the build meets the acceptance criteria in the [signed SOW](/pre-sales/sow-contract-drafting/). It is not agency QA in a different costume — the client's own users (or named representatives) execute their own scripts against the deployed system and either accept or document gaps. The agency's role during UAT is to support, triage findings, and drive the cycle to a documented sign-off.

The distinction matters because UAT failures and UAT successes mean different things than QA failures and QA successes:

- **QA failure** is the agency's QA engineer finding a bug. The agency owns the fix.
- **UAT failure** is the client finding the build does not match what they expected. The triage is essential — sometimes the build is wrong (bug, agency owns), sometimes the requirement was ambiguous (clarification), sometimes the client wants something the requirements did not specify (enhancement request, change control).

UAT runs after [functional and regression testing](/qa-testing/functional-regression-testing/), [performance testing](/qa-testing/performance-testing/), and [security testing](/qa-testing/security-testing/) have completed, against a build the agency has signed off as ready. The cycle typically lasts 1–3 weeks depending on engagement size. Participants are named client UAT users (typically 3–8 people representing the actual end-user roles), the agency's delivery lead, and a UAT coordinator from either side. The output is a signed UAT acceptance from the named client signatory, an enhancement-request log fed into change control, and a go/no-go decision for [deployment](/deployment-launch/).

The typical UAT rhythm: kickoff session (briefing, environment walkthrough, test scenarios distributed), execution period (clients run their scripts, log findings to the shared tracker, attend daily triage standups), triage and remediation (agency fixes confirmed bugs, change-control conversation handles enhancement requests, requirements-clarification working sessions handle ambiguities), close-out (final review, deferred-bugs sign-off, formal acceptance signature).

## Best practices

**Run structured UAT sessions, not unstructured exploration.** Each UAT participant gets named scenarios to execute — derived from the signed acceptance criteria, not from "go use the system and tell us what you find." Structured scenarios produce comparable findings across participants, ensure coverage of the contractually-acceptable surface, and make triage tractable. Unstructured exploration produces a long list of opinions ("I don't like the colour of this button") that the team cannot triage against the contract.

**Triage every finding into the right channel.** UAT cycles produce three kinds of findings:

- **Bugs** — the build does not meet a signed FR or NFR. Routed to the agency's defect tracker for fix during the cycle. No change-control conversation needed.
- **Enhancement requests** — the client wants behaviour the requirements did not specify. Routed to change control: priced separately, decided as fix-now / fix-post-launch / fix-as-new-engagement. The agency does not implicitly absorb enhancement requests as "bug fixes."
- **Requirements clarifications** — the requirement could be read multiple ways and the build interpreted it differently than the client expected. Routed to a working session with the requirements author and the client to converge on the interpretation, which is then documented as a requirements clarification.

The triage is the core agency-side discipline of UAT. Engagements that route every UAT finding to the agency's defect tracker produce inflated bug lists, scope creep, and post-launch arguments about what was actually contracted. Engagements with disciplined triage maintain credible defect lists, defensible scope boundaries, and a clean conversation about what flows to change control.

**Time-box the UAT cycle and stick to it.** UAT has a defined duration — typically 1–3 weeks — agreed at engagement kickoff and reflected in the SOW. Open-ended UAT becomes "UAT until the client is happy," which is "UAT forever" in any engagement with continued discovery of new opinions. The discipline is mechanical: kickoff date, end date, triage daily during the window, sign-off ritual on the named end date. UAT slips trigger a documented schedule conversation with the client, not silent extension.

**Hold an explicit sign-off ritual.** UAT ends with a formal sign-off event — a 30–60 minute session where the named client signatory reviews the UAT findings, confirms which were addressed in the cycle, signs off on deferred-bugs disposition, and signs the UAT acceptance document. The artifact is a signed acceptance referring to the named build, the executed scenarios, and the agreed deferral list. Verbal sign-offs ("looks good") dissolve under post-launch pressure; signed artifacts survive.

**Bring real users, not just testers.** UAT participants should be the actual people who will use the system post-launch — admins, end-users, integrators, decision-makers — not surrogate testers from the client's QA team. Real users find issues testers miss because the issues are in the workflow rather than in the feature. Engagements that run UAT with surrogate testers find the surrogate-tester cohort signs off, then real users encounter issues post-launch that should have surfaced in UAT.

:::caution
Do not accept UAT feedback as "bug" without triage. Many of the most contentious UAT findings are enhancement requests in bug clothing — "this should also do X" or "we'd prefer Y instead." Routing them to the bug tracker and silently fixing them produces scope creep that erodes margin, sets a precedent that the client cannot help but exploit, and creates sign-off conversations where the client expects bug-pace responses to feature-scope work. The discipline is mechanical: every finding goes through triage; enhancement requests go to change control; only verified bugs against signed acceptance criteria become bug-tracker entries.
:::

**Document deferred bugs and accept their resolution path before sign-off.** Not every defect found in UAT gets fixed before launch. Some are minor, some have workarounds, some would push the launch date. The discipline is signed deferral: each deferred bug is documented with severity, business impact, workaround, and resolution timeline (post-launch within warranty, post-launch via change request, indefinitely deferred). The client signs off on the deferral list as part of UAT closure. Engagements that ship with un-discussed deferred bugs find them re-litigated as production incidents.

**Plan the go/no-go conversation in advance.** UAT's primary output is a go/no-go decision for deployment. The criteria for go are stated in writing before UAT starts: signed UAT acceptance, all critical/high bugs closed, deferred-bugs list approved by the client, performance and security cycles already passed. The conversation at the close of UAT is mechanical: have the criteria been met or not? Engagements that improvise the go/no-go conversation discover at the last moment that the criteria were never explicit, and the launch becomes a debate.

## Desired outcomes

By the end of UAT, the engagement has:

- Documented UAT cycles with named participants, executed scenarios, and findings logged in a shared tracker visible to both teams
- Signed UAT acceptance from the named client signatory, ratifying that the build meets the contractually agreed acceptance criteria
- An enhancement-request log fed into change control, with each entry priced and dispositioned (in this engagement / next engagement / deferred / declined)
- A documented deferred-bugs list, signed by the client, with each entry naming severity, workaround, and resolution path
- A go/no-go decision for [Deployment / Launch](/deployment-launch/) made against pre-agreed criteria, with the decision and rationale documented
- A handoff package combining UAT artifacts (sign-off document, executed-scenarios log, deferred-bugs list, enhancement-request log) flowing into [client handoff and launch checklist](/deployment-launch/client-handoff-launch-checklist/)

## What the industry does

**Formal UAT vs. "send it to the client and see what breaks" cultures.** Formal-UAT agencies treat UAT as a structured cycle with named participants, scripted scenarios, daily triage standups, formal sign-off ritual, signed artifact. Trade-off: predictable schedule, defensible artifact, occasional client-side resistance to the structure. Send-it-to-the-client agencies deploy to a staging URL, share access with the client, and "let them poke at it for a couple of weeks." Trade-off: low ceremony, no artifact, no defensible record, scope-creep magnet, dramatically higher risk of post-launch arguments. Formal-UAT dominates in mid-sized and larger engagements, in regulated work, and in agencies with mature delivery practices; send-it-to-the-client survives in startup-velocity engagements and in agencies whose engineering culture has not built UAT discipline. Formal-UAT is the only viable model for engagements over £50k or for clients with formal procurement processes.

**Single-sign-off vs. progressive-acceptance models.** Single-sign-off agencies hold one UAT acceptance event at the close of the cycle. Trade-off: defensible, one signature artifact, all findings rolled into one decision. Progressive-acceptance agencies sign off per-feature or per-milestone — the dashboard module accepted week 14, the admin module accepted week 16, the customer-facing module accepted week 18. Trade-off: flexible, accommodates clients with rolling availability, requires more administrative discipline, weaker single-document handoff. Single-sign-off dominates in fixed-price engagements; progressive-acceptance survives in T&M engagements and longer-running platforms where modules ship at different cadences. Most agencies use single-sign-off as default and progressive-acceptance only when the engagement structure genuinely calls for it.

**Agency-runs-UAT vs. client-runs-UAT cultures.** Agency-runs-UAT cultures see the agency drafting UAT scenarios, training UAT participants, running the daily standups, and producing the cycle reports. Trade-off: fast cycle, predictable execution, less independent verification — the agency is closer to "running its own UAT" than "the client is testing." Client-runs-UAT cultures see the client owning scenario authoring, participant management, and findings logging, with the agency in support and triage roles only. Trade-off: more independent verification, slower cycle, requires the client to have UAT-execution capacity, more authentic acceptance signal. Agency-runs-UAT dominates in commercial engagements where the client is not equipped to run UAT independently; client-runs-UAT dominates in enterprise engagements where the client has dedicated test management and in regulated work where independent client testing is part of the procurement requirement.
