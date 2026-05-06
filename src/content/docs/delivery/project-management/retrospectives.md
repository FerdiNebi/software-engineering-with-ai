---
title: Retrospectives
description: Sprint and milestone retros that produce actionable change rather than venting — facilitation formats, psychological safety techniques, and the action-item follow-up loop.
type: sub-section
phase: delivery
order: 8
lastUpdated: 2026-05-06
status: v1
---

## What happens here

A retrospective is a structured conversation, run at sprint or milestone boundaries, where the team reflects on how the work went and decides what to change. The PM facilitates; the team participates; the output is a small set of action items the team owns and works on in the next sprint. Retros are the calibration ritual that converts day-to-day observations into compound improvements over the engagement.

Retros come in two scales. **Sprint retros** happen at the end of every sprint (typically 30–60 minutes), focus on the sprint just closed, and produce 1–3 action items for the next sprint. **Milestone retros** happen at major engagement boundaries (end of a release, end of a phase, halfway through a long engagement) and consume 2–4 hours, sometimes with the client included. Milestone retros look across multiple sprints and surface patterns that single-sprint retros miss.

The PM is the facilitator, not the subject. A retro where the PM is a participant being reviewed is a different conversation — those happen separately, in 1:1s or as part of a leadership review. The retro is the *team's* conversation about its own work, with the PM creating the space and structure for it to happen safely.

The format varies by engagement and team — Start/Stop/Continue, 4Ls (Liked/Learned/Lacked/Longed-for), the sailboat metaphor, mad/sad/glad — but the underlying shape is the same: collect observations, group them, identify themes, agree on actions. Retros that follow a fixed format every sprint produce repetition fatigue; retros that vary format too much fail to build retrospective muscle. The discipline is using 2–3 formats in rotation across the engagement.

## Best practices

**Run retros every sprint, even when nothing is wrong.** The single most-common retro failure mode is "we don't need a retro this sprint, things went fine." Retros that only happen when the team is upset turn into venting sessions because the team has stockpiled grievances. Retros that happen every sprint, on a known cadence, become a normal calibration ritual where small continuous improvements accrue rather than rare large ones. The discipline is putting the retro on the calendar at engagement kickoff and keeping it there.

**Build psychological safety before asking for honest input.** People don't say what they really think if they don't trust the room. Psychological safety in retros means: every voice is heard, no observation is judged, the PM sets the tone by being open about their own mistakes, and what's said in the retro stays in the team. The PM models the pattern by sharing first ("here's what I should have done differently this sprint") before inviting the team. Retros where the PM goes last (or doesn't participate at all) often run shallow because nobody wants to be the first to admit anything.

**Convert observations into owned action items, with sprint-boundary follow-up.** A retro that produces "we should communicate better" has not produced an action item — it's produced an aspiration. A retro that produces "@QA-lead will run a 30-minute test-strategy walkthrough at the start of next sprint" has produced an action item. The format is: a concrete action, a named owner, a sprint-level deadline, and a check-back at the next retro. Retros without follow-up produce repeated action items every sprint because nothing actually changes; retros with follow-up build a track record of small wins that the team can point at.

:::tip
Open the retro with a 5-minute review of the action items from the previous retro: which closed, which are in progress, which dropped. The pattern reinforces that retro outputs matter, builds the muscle of action-item ownership, and prevents the engagement from accumulating an action-item backlog that nobody tracks.
:::

:::caution
Do not include the client in sprint retros. Sprint retros are the team's space for honest internal reflection, including reflection on client-facing problems ("the client is taking 5 days to provide design feedback and it's blocking us"). With the client in the room, the conversation becomes managed and the team self-censors. Milestone retros may include the client (with appropriate framing); sprint retros stay team-internal. If the team needs to surface a client-facing issue, that conversation happens in a separate forum that the PM owns — typically the next [status report](/delivery/project-management/status-reporting-stakeholder-communication/) or a 1:1 with the named client sponsor.
:::

**Keep retros to 30–60 minutes for sprint scale, 2–4 hours for milestone scale.** A 90-minute sprint retro is too long and produces fatigue and dropped attention; a 15-minute retro is too short to surface anything beyond the most surface observations. The discipline is running retros tight enough to respect the team's time and long enough to produce real insight. Milestone retros need more time because they range over more material; even those benefit from explicit time-boxing per section to prevent the discussion from sprawling.

**Vary format every 2–3 sprints to prevent fatigue.** Retro format variation is the difference between a ritual the team engages with and a meeting the team endures. Three formats on rotation (e.g. Start/Stop/Continue for two sprints, 4Ls for two, sailboat for two) keep the conversation fresh while building muscle in each format. Avoid switching every sprint — the team needs at least two iterations of a format to start producing useful observations through it.

## Desired outcomes

Each sprint retro produces:

- **1–3 owned action items** with named owners and a sprint-level deadline
- **A short written record** (often the same Markdown file as the rolling retro log) that names the format used, surfaces the themes, and lists the action items
- **A follow-up check-back** at the next retro showing which action items closed

Across the engagement, retro practice produces:

- **Compound improvement** — sprint 8 runs noticeably better than sprint 1, attributable to the small changes the team made along the way
- **A team capability** in self-reflection that survives the engagement and travels with team members to their next ones
- **A milestone-retro output** at major engagement boundaries that can feed the next phase or the next engagement

## What the industry does

**Every-sprint vs. milestone-only retros.** Most agencies run retros every sprint as a default discipline; some agencies run only milestone retros and rely on continuous informal feedback for in-sprint reflection. The every-sprint model produces stronger compound improvement and stronger psychological safety; the milestone-only model is faster (no per-sprint ceremony cost) and works on engagements with very tight teams. Most engagements over four sprints benefit from per-sprint retros even if they're short (30 minutes); engagements under four sprints sometimes drop sprint retros and rely on a single mid-engagement retro plus a closeout retro.

**Internal-only vs. client-included retros.** The default model is internal-only sprint retros with optional client-included milestone retros. Some agencies (especially those running design-sprint methodologies or trusted long-running relationships) include the client in every retro, framing it as a joint engagement-reflection rather than a team-internal conversation. The model produces stronger client buy-in but suppresses some internal honesty. Most engagements are best served by internal-only at sprint cadence and joint at milestone cadence.

**Written-summary vs. verbal-only outputs.** Written-summary retros produce a short Markdown record (themes, action items, owners) that lives in the project repo. The model produces audit trails and lets new team members see retro history; it costs the PM 15–30 minutes per retro to write up. Verbal-only retros leave no record beyond the agreed action items (which go into the backlog as stories). The model is faster but loses pattern-detection across sprints — the team can't see that "communication with client X" has come up in three retros if there's no written record. Most agencies under £200k/engagement run verbal-only with action-item capture; agencies over that scale produce written summaries that compound over the engagement.
