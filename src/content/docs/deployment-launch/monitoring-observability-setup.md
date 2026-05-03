---
title: Monitoring & Observability Setup
description: Dashboards, alerts, and runbook-linked notifications as a client-operable handoff deliverable — not internal-only tooling.
type: sub-section
phase: deployment-launch
order: 4
lastUpdated: 2026-05-03
status: v1
---

## What happens here

Monitoring and observability setup produces the operational visibility the client will use to run the system after the agency leaves. It is a handoff deliverable, not an internal artifact. The discipline that distinguishes the two is whether the dashboards and alerts make sense to the client's named operators without an agency engineer translating them.

Monitoring and observability are different — and the difference matters for what gets built:

- **Monitoring** answers known questions. "Is the API up? What is the error rate? How many active users right now?" Monitoring exists for questions you knew to ask in advance — health checks, performance metrics, business KPIs, error counts. Configured as dashboards and alert rules with thresholds you set during this phase.
- **Observability** lets you ask new questions later. "Why did this specific user's checkout fail at 14:32 yesterday? What changed in the request pattern when latency spiked? Which downstream service was the bottleneck?" Observability is the instrumentation that supports debugging unforeseen issues — distributed traces with correlation IDs, structured logs queryable across services, high-cardinality metrics. Configured as data sources the client can query, not pre-built dashboards alone.

Both are necessary; neither replaces the other. A system with monitoring but no observability shows when something is wrong but cannot explain what; a system with observability but no monitoring requires someone to actively look before issues are noticed.

The instrumentation comes from work done during [development](/development/backend-development/) and [DevOps & CI/CD](/development/devops-ci-cd/) — structured logs, metrics emission, distributed tracing already flowing. This phase wires the data into the platforms the client will operate (Datadog, Grafana Cloud, CloudWatch, Splunk, New Relic, Honeycomb), produces dashboards keyed to the audience reading them, configures alerts that route through the client's incident-management workflow, and captures launch-time baselines for post-launch comparison. The output flows forward to [client handoff](/deployment-launch/client-handoff-launch-checklist/) as a named deliverable, and to [incident response](/maintenance-retainer/incident-response/) as the operational substrate.

## Best practices

**Set alerts based on Service Level Objectives, not raw metrics.** Alerts on "CPU above 80%" produce noise — high CPU may or may not indicate a problem. Alerts on SLO violations ("error budget consumed at 2x normal rate," "p99 latency exceeded budget by 50% over 10 minutes," "checkout success rate below 98% for 5 minutes") produce signal — they fire when the system is missing a documented commitment. SLO-based alerts are derived from the [signed performance NFRs](/requirements-design/functional-nonfunctional-requirements/) and the engagement's reliability commitments, not from intuition about which metrics seem important.

**Build dashboards per stakeholder, not per data source.** A single dashboard showing every metric the system emits is a dashboard nobody reads. The discipline is audience-keyed dashboards:

- **Executive/client dashboard.** Active users, business KPIs, uptime percentage, recent incidents. The dashboard the client checks once a week to confirm the system is healthy.
- **Operations dashboard.** Error rate, latency percentiles, throughput, queue depths, dependency health. The dashboard the client's on-call engineer checks during incidents.
- **Per-service or per-component dashboards.** Service-specific metrics (per backend service, per frontend route, per integration). Dashboards engineers consult when debugging specific concerns.

Three to six dashboards covering distinct audiences beat one dashboard with sixty panels. Each dashboard has a stated purpose, named owner, and review cadence to prune outdated panels.

**Manage alert noise actively.** A muted alert is a deleted alert — once the client's team starts ignoring an alert that fires too often, the alert produces no value. Three disciplines:

- **Noise budget.** Each on-call rotation has a budget for how many alerts can fire per shift before the noise erodes the team's response. Track alert volume; if a single alert fires more than 10 times per shift, it is too noisy.
- **Alert tuning iterations.** First-week-post-launch is when noise issues surface — thresholds set theoretically miss real-world distributions. Plan for tuning iterations during the warranty period, not just at launch.
- **Severity discipline.** Critical alerts page someone immediately; warnings go to a queue for daytime review; informational alerts go to dashboards only. Three tiers cover most situations; more produces complexity.

**Link every alert to a runbook entry.** Each alert has a documented response — what the alert means, what to check first, what immediate actions to take, when to escalate. The runbook entry is linked from the alert notification (URL in the alert body, message attachment, or page-to-runbook integration). On-call engineers receive an alert and follow the linked runbook; they do not page senior engineers to figure out what the alert means.

**Capture baselines at launch and across the warranty period.** Performance, error rates, traffic patterns, business KPIs — all captured immediately post-launch as the baseline. Subsequent observations compare against the baseline; significant deviation triggers investigation. Engagements that ship without captured baselines find post-launch performance drift that nobody can attribute (was the system always this slow?).

:::caution
Do not build dashboards and alerts that the client cannot operate. Alerts routed to the agency's PagerDuty rotation rather than the client's; dashboards in the agency's Grafana account rather than the client's; secrets in the agency's password manager rather than the client's tooling — all of these produce a handoff where the client takes ownership of a system whose monitoring lives in the agency's tooling. The first time the client tries to operate the system independently, they discover the monitoring is invisible to them. The discipline is mechanical: every dashboard, every alert, every credential lives in tooling the client owns and operates from day one. The agency uses the same tooling during the engagement.
:::

**Document the observability strategy as a handoff artifact.** A short document covering: which platforms host which data; how to access dashboards; how to add new alerts; the runbook structure; the SLO list and current burn rates; the on-call rotation handoff procedure. The document lives in the [technical documentation](/development/technical-documentation/) set; without it, the client inherits dashboards they can read and alerts they receive without understanding the system the observability describes.

## Desired outcomes

By the end of monitoring and observability setup, the engagement has:

- Operational dashboards live in the client's observability platform — executive, operations, and per-service tiers — each with documented audience and ownership
- Alerts routed to the client's incident-management workflow (PagerDuty, OpsGenie, Slack channels, Teams), with severity tiers and runbook links configured
- Client-operable observability: every dashboard, alert, and credential lives in tooling the client owns and accesses from day one
- Baseline data captured immediately post-launch — performance, error rates, traffic, business KPIs — archived for post-launch comparison and capacity planning
- SLO definitions documented, with current burn rates visible and alert thresholds derived from SLO commitments rather than from raw metric thresholds
- A documented observability handoff package ready for [client handoff](/deployment-launch/client-handoff-launch-checklist/) and feeding [incident response](/maintenance-retainer/incident-response/) procedures

## What the industry does

**Rich-platform vs. minimal-platform approaches.** Rich-platform agencies adopt comprehensive observability platforms (Datadog, New Relic, Dynatrace, Splunk Observability Cloud) that bundle metrics, logs, tracing, RUM, synthetic monitoring, security signals, and infrastructure monitoring in a single tool. Trade-off: powerful, integrated, dramatically reduces tool-switching during incidents, expensive, ties the engagement to the platform's pricing model. Minimal-platform agencies use focused tools per concern — Prometheus and Grafana for metrics, Loki or CloudWatch Logs for logs, Tempo or Jaeger for tracing, custom dashboards for business KPIs. Trade-off: lower per-seat cost, requires operational expertise to integrate the tools, more flexibility for clients with existing tooling commitments. Rich-platform dominates in mid-sized engagements and clients without strong existing observability tooling; minimal-platform survives in cost-sensitive engagements, clients with established Prometheus/Grafana stacks, and engagements where the agency's expertise lies in open-source observability.

**SLO-driven vs. threshold-driven alerting cultures.** SLO-driven agencies define service level objectives derived from NFRs (99.9% availability, p95 under 500ms, error rate under 0.5%) and alert on SLO burn — when the error budget is being consumed faster than the SLO allows over a measurement window. Trade-off: alerts represent real impact on the user experience; lower noise; requires SLO-modelling discipline. Threshold-driven agencies set alerts on raw metric thresholds (CPU > 80%, errors > 100/min, latency > 1s). Trade-off: easier to author, prone to noise, fires on conditions that may not represent user impact. SLO-driven dominates in modern observability cultures and in engagements with explicit reliability commitments; threshold-driven survives in simpler engagements and in agencies whose teams have not adopted SLO discipline. Most modern agencies trend SLO-driven for the alerts that page someone, threshold-driven for warnings that go to dashboards only.

**Push-to-client vs. shared-with-client observability ownership models.** Push-to-client agencies set up observability in the client's accounts from day one — client owns the platform, agency operates it during engagement, ownership transition at handoff is administrative. Trade-off: clean handoff, ties the agency to the client's tooling choice, requires client to provide platform access early. Shared-with-client agencies operate observability in agency accounts during the engagement and migrate to client accounts at handoff. Trade-off: agency tooling choice, painful migration at handoff (dashboards, alerts, credentials all transfer), often produces handoff incidents from migration glitches. Push-to-client dominates in modern agencies because the migration cost of shared-with-client almost always exceeds the friction of working in the client's tooling; shared-with-client survives in agencies with strong tooling investments they want to apply across engagements.
