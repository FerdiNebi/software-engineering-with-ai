---
title: Risk & Issue Management
description: The PM-owned living register of what could go wrong (risks) and what already has (issues) — register schema, review cadence, and escalation thresholds.
type: sub-section
phase: delivery
order: 8
lastUpdated: 2026-05-07
status: v1
---

## What happens here

Risk and issue management is the PM-owned discipline of tracking, mitigating, and reporting on engagement fragility. The two terms are not interchangeable: a **risk** is a probabilistic future event that *might* happen and would have a defined impact if it did; an **issue** is a problem that *has already* occurred and is currently affecting the engagement. The PM tracks both, in the same register, but treats them differently — risks need monitoring and mitigation; issues need resolution and escalation.

The risk register is a living document. It is created at engagement kickoff (seeded with risks identified during [discovery](/discovery/) and [Requirements & Design](/requirements-design/)) and updated continuously through delivery. New risks are added when the team identifies them (during refinement, retros, or in flight); existing risks are re-rated when their probability or impact changes; issues are added when realised risks materialise or when fresh problems appear.

A useful register has six fields per row:

- **ID** — sequential identifier (R-01, R-02, …) for stable referencing in status reports and meeting minutes.
- **Description** — the risk or issue, in concrete terms. Not "performance might be an issue" but "API p95 latency may exceed the 200ms NFR under peak load."
- **Probability** — High / Medium / Low (or a numeric scale if the agency uses one).
- **Impact** — High / Medium / Low (or a numeric scale).
- **Owner** — named person responsible for mitigation; not "the team."
- **Mitigation** — the action being taken to reduce probability or impact, with a target date.

The register is reviewed at sprint cadence: every sprint with the team (in retro or in a separate 30-minute risk review), and every month with the client (in steering committee). Review surfaces stale items (close them), re-rates active items, and adds new items from the past sprint's experience.

## Best practices

**Distinguish risks from issues, even when the same item moves between categories.** Mid-engagement, a tracked risk can materialise — at that point it stops being a risk and becomes an issue. The register convention is to mark the risk as "realised → see I-01" and create a new issue entry. The discipline matters because risks need monitoring (they're probabilistic), while issues need resolution (they're real). Mixing the two produces a register where everything is "in progress" and nothing has clear next steps.

**Make the register concrete, not abstract.** "The team might lose a developer" is too abstract to act on; "Senior backend engineer A is at risk of leaving for an external offer; their replacement would take 6+ weeks to onboard fully" is concrete and points at specific mitigations (retention conversation, knowledge-transfer documentation, hire-ahead-of-need decision). Engagements that fill the register with abstract one-liners produce abstract one-line mitigations and no actual risk reduction.

**Review the register at every sprint boundary.** A register that is created at kickoff and never touched again is decoration, not discipline. The PM walks the register every sprint (15–30 minutes with the team in retro, or in a dedicated risk review): which items closed, which need re-rating, which are new. Engagements with disciplined register reviews catch material risks 1–3 sprints before they materialise; engagements without typically discover risks the moment they fire.

:::tip
Track issues with the same field schema as risks (ID, description, probability/impact replaced by severity, owner, mitigation/resolution). Keeping both in one tool — a single Markdown file in the repo, or a single tab in a tracking sheet — produces a unified view that the PM can roll up into the [status report](/delivery/project-management/status-reporting-stakeholder-communication/) without switching context.
:::

:::caution
Do not silently demote risks the client raised. Clients sometimes raise risks during demos or steering committees that the agency assesses as low-probability or low-impact. The discipline is to record them in the register at the agency's assessed rating, with the assessment visible — not to drop them quietly. Engagements that drop client-raised risks produce escalations later when the risk fires and the client says "I told you about that."
:::

**Surface above-threshold risks in every status report.** The [status report](/delivery/project-management/status-reporting-stakeholder-communication/) "Risks and decisions needed" section should include the top 3–5 risks every period, not just when something is going wrong. The pattern normalises the conversation about risk and ensures clients see the engagement-level fragility model the PM and team see. Engagements that surface risks only when something has gone wrong condition the client to read the risk section as "something is wrong" rather than "this is the normal landscape."

**Define escalation thresholds at engagement kickoff.** When does a risk get escalated to a steering committee for client decision? When does an issue get escalated above the named client sponsor? The thresholds are agreed at kickoff and documented in the engagement charter (or equivalent) so the PM has cover to escalate without negotiating timing in the moment. Common thresholds: any High-probability + High-impact risk; any issue that affects a milestone date by more than 1 week; any risk or issue that requires a change order; any client behaviour that the PM judges harmful to the engagement (rare, but the threshold matters most when it's invoked).

**Mitigate to reduce probability OR impact, not both at once.** Mitigations either reduce the chance the risk materialises (e.g. early load testing reduces the probability of a performance NFR miss) or reduce the impact if it does (e.g. graceful-degradation design reduces the impact). Effective mitigations name which of the two they target. Engagements that try to mitigate both axes for every risk burn capacity that should go into delivery.

## Desired outcomes

At every sprint boundary, the engagement has:

- **A current risk register** with every active risk re-rated within the past sprint
- **A mitigation owner and target date** for every risk above an agreed probability × impact threshold
- **An audit trail** of issues that fired and were resolved — captured in the register history, not in Slack messages

Across the engagement, risk and issue management produces:

- **Material risks surfaced 1–3 sprints before they fire** (the dominant value of the discipline)
- **A documented decision trail** when the agency and client chose to accept a risk rather than mitigate it
- **A clean handoff item** at engagement close — the residual risk register hands over to [Maintenance & Retainer](/maintenance-retainer/) where post-launch [incident response](/maintenance-retainer/incident-response/) inherits open issues and any unresolved residual risks

## What the industry does

**Heavy-formal vs. lightweight registers.** Heavy-formal agencies run PMI-style risk registers — full probability × impact matrices with numeric scoring, monthly risk-review meetings, formal mitigation tracking. The model is appropriate for regulated-industry engagements (finance, healthcare, government) and large programmes (£1M+) where audit trails are required. Lightweight agencies run a single Markdown file in the repo with one paragraph per risk and an informal review every sprint. The model is appropriate for most agency engagements between £50k and £500k. The wrong choice in either direction produces friction: heavy-formal on a small engagement consumes PM time that should go to delivery; lightweight on a regulated programme produces audit findings.

**Silent-mitigation vs. transparent-with-client cultures.** Silent-mitigation agencies handle risks internally without surfacing them to the client unless the risk materialises. The model is sometimes well-intentioned ("don't worry the client") but produces escalations when risks fire because the client had no warning. Transparent-with-client agencies surface risks to the client at every status reporting boundary, even when the risk is internal and the mitigation is in flight. The model produces stronger client trust over time and shares the risk-decision burden appropriately. Most mature agencies run transparent-with-client by default and silent-mitigation only on internal-team risks (e.g. a personnel matter the client wouldn't normally see).

**Risk-only vs. risk + issue + dependency tracking.** Some agencies track only risks; some track risks plus issues; some add a third dimension — external dependencies (e.g. waiting on the client's third-party vendor, waiting on a regulatory ruling). The three-dimension model produces the strongest engagement view because dependencies are often the source of risks that the team can't directly mitigate. The trade-off is more PM time in tracking. The two-dimension (risk + issue) model is the practical default for engagements between £100k and £500k; the three-dimension model becomes worth the cost on engagements over £500k or with significant external dependencies.
