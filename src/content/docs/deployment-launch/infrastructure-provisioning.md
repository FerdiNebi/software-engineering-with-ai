---
title: Infrastructure Provisioning
description: Executing the infrastructure-design plan in production — IaC-first, rehearsed in staging, ready days before launch day.
type: sub-section
phase: deployment-launch
order: 2
lastUpdated: 2026-05-03
status: v1
---

## What happens here

Infrastructure provisioning is the execution of the [infrastructure design plan](/requirements-design/infrastructure-design/) in production. The design produced the documented commitment — environment topology, hosting model, network design, secrets model, DR posture, cost estimate, Day-1 readiness checklist. Provisioning makes those documents real: production environments come up, DNS resolves, certificates issue, secrets populate, runtime configuration deploys, monitoring connects.

Six task classes typically run during provisioning:

- **Environment creation.** Provisioning the production environment topology — VPC, subnets, security groups, compute clusters, databases, queues, caches, CDN. Driven by IaC (Terraform, Pulumi, AWS CDK, Bicep, ARM, SST, Wrangler) so the work is reviewable, repeatable, and version-controlled.
- **DNS configuration.** Domain records, subdomains, MX records, SPF/DKIM/DMARC for email-sending services. DNS propagation takes time (TTL-dependent), so this happens days ahead of launch, not hours.
- **Certificate issuance.** TLS certificates from Let's Encrypt, ACM, or another CA. Verification methods (DNS, HTTP) tested ahead of time. Wildcards versus per-subdomain decided in [infrastructure design](/requirements-design/infrastructure-design/) and applied here.
- **Secrets population.** Production credentials populated into the secrets-management platform per the secrets model. Rotation calendars activated. Engagement-time secrets that the agency uses (deploy keys, CI tokens) distinct from runtime secrets the production system uses.
- **Runtime configuration.** Per-environment configuration applied — feature flags, rate limits, third-party API endpoints, environment-specific URLs. Version-controlled so the configuration that runs in production is the configuration that was reviewed.
- **Monitoring and observability connection.** Application metrics, structured logs, and distributed tracing flowing into the client's observability platform (Datadog, Grafana Cloud, CloudWatch, Splunk, New Relic). Dashboards configured. Alerts routed but not yet enabled in pager mode.

Provisioning hands forward to [deployment execution and smoke testing](/deployment-launch/deployment-execution-smoke-testing/), where the application code deploys against the provisioned infrastructure. The output is a verified production environment ready for the launch deployment, with all readiness items green and a documented rollback path if launch needs to be aborted.

## Best practices

**Provision via IaC from the first environment.** Production environments defined entirely as code — every resource, every configuration, every named tag — applied via the IaC tool. Console-clicked exceptions accumulate into drift the team cannot reproduce; IaC-first discipline produces environments that recreate cleanly from the repository. The production IaC should be reusable for staging and any future environments — divergence between production IaC and staging IaC is a sign of either ad-hoc production changes or unaccounted-for staging shortcuts. Either way, it produces the production-only bugs that the team cannot reproduce.

**Dry-run the provisioning in a staging environment that mirrors production.** Before production provisioning, the same IaC has been applied at least once to a staging environment with the same topology. The dry-run finds the cloud-provider quirks (regional service availability, account-level quotas, IAM gotchas), the misnamed resources, the DNS-record collisions. Engagements that provision production as the first attempt at running the IaC discover issues during the launch window, with no time to debug under pressure.

**Hold a pre-launch readiness review.** A 60–90 minute review session — typically 3–7 days before the launch window — walking through every item that must be green for launch:

- Production environments provisioned and verified by IaC plan-and-apply.
- DNS records published with documented TTL; propagation verified globally.
- TLS certificates issued and verified; auto-renewal working in staging.
- Production secrets populated and accessible to the deployment pipeline.
- Monitoring dashboards live and showing data from production health checks.
- Alert routing configured and tested with a synthetic alert.
- Documented rollback plan reviewed and signed off by the launch commander.
- On-call rotation aware of the launch window and named contacts confirmed.

The review's output is a written go/no-go-to-go statement. Engagements that skip the readiness review discover gaps during launch when fixing them is most expensive.

**Document and rehearse the rollback plan.** Every launch has a rollback plan — what triggers a rollback, who decides, what the procedure is, how long it takes. The plan is not improvised on the day. It is rehearsed in staging, validated against the pipeline, documented in the runbook, and reviewed at the readiness session. The plan covers the common failure modes (smoke tests fail, error rate spikes, monitoring goes red) and the recovery time for each. Engagements that ship without rehearsed rollback plans find that "we'll just roll back" is a multi-hour incident under pressure.

**Provision early, harden continuously, freeze close to launch.** Production environments come up days or weeks before launch — early enough to debug provisioning issues without time pressure, late enough that the configuration matches what will go live. As launch approaches, changes to production configuration narrow to fixes only; new resources, naming changes, or topology adjustments freeze. The freeze gives the team confidence the environment they tested matches the environment they launch into. Engagements that change production configuration on launch day are launching into infrastructure they have not validated.

:::caution
Do not provision production by clicking around the cloud console with no IaC backup. Console-configured production environments are environments the team cannot reproduce, cannot review, cannot audit, and cannot hand off cleanly. The discipline is mechanical: every production resource has a corresponding IaC artifact, even if the IaC was reverse-engineered from existing resources via tools like Terraformer or Pulumi import. Engagements that ship console-configured production hand the client a system that they cannot rebuild without paging the agency engineer who originally clicked it together.
:::

**Stage credentials transition for handoff.** The credentials the agency uses for engagement-time provisioning (cloud account access, deploy keys, CI tokens) are different from the credentials the client will use post-handoff. Both sets are populated and tested before launch — the client's named operators have access to dashboards, the deployment pipeline runs under credentials that survive handoff, secret rotation works for whichever party owns each secret. Engagements that defer this transition to the handoff event find themselves rotating credentials under time pressure, which is when secrets get DM'd.

## Desired outcomes

By the end of infrastructure provisioning, the engagement has:

- A live production environment provisioned via reviewed and version-controlled IaC, with no console-only resources outside the IaC repository
- Verified DNS records propagated globally, TLS certificates issued with auto-renewal working, secrets populated and accessible
- A documented operational runbook covering deploy, rollback, secrets rotation, common-incident response — referencing the production environment that was provisioned, not a generic template
- A signed-off pre-launch readiness review confirming every check item is green, with the launch commander explicitly approving go-to-go status
- A rehearsed and documented rollback plan, validated against the pipeline, ready to invoke during the launch window
- A production-credentials transition plan covering both engagement-time and post-handoff access, tested before launch and ready for the formal [handoff](/deployment-launch/client-handoff-launch-checklist/)

## What the industry does

**IaC-first vs. console-configured shops.** IaC-first agencies provision every production resource via Terraform, Pulumi, AWS CDK, Bicep, or platform-native equivalents — every change is a PR, every environment is reproducible, every audit is a `git log`. Trade-off: requires team-wide IaC fluency, slower for small one-off changes, dramatically better operational outcomes. Console-configured agencies provision via the cloud platform's web UI and document the result post-hoc (or not at all). Trade-off: faster for simple environments, dramatically worse handoff and reproducibility, common in small-scale or short-engagement work where the operational cost is bounded. Modern agencies trend strongly IaC-first because the cost of a single console-only resource that nobody can reproduce exceeds the friction of IaC discipline; console-configured survives in agencies whose teams have not invested in IaC tooling and in engagements where the client explicitly does not want IaC investment.

**Greenfield vs. integrate-with-client-infrastructure provisioning patterns.** Greenfield agencies provision into a dedicated cloud account or tenancy created for the engagement. Trade-off: full control, clean naming, no inherited constraints, requires creating new accounts/billing for every engagement. Integration agencies provision into the client's existing cloud accounts using the client's established naming, IAM, and tagging conventions. Trade-off: inherits the client's infrastructure maturity (or chaos), simpler handoff because resources already live where the client operates, harder for the agency to maintain consistency across engagements. Greenfield dominates in startup-velocity engagements and in clients with no existing cloud presence; integration dominates in enterprise engagements and in clients with established cloud governance. Most mid-sized agencies do both depending on the engagement's procurement and infrastructure context.

**Big-bang provisioning vs. incremental promotion patterns.** Big-bang provisioning brings up the entire production topology at once — all environments, all services, all configuration. Trade-off: simple to coordinate, faster, riskier when things do not work. Incremental promotion brings up production in stages — networking and IAM first, then datastores, then compute, then external endpoints — with verification at each stage. Trade-off: slower, much lower risk because issues are isolated to the stage that introduced them, requires the IaC to support partial application. Most agencies use big-bang for small environments and incremental for complex ones; the choice scales with topology size and the team's tolerance for launch risk.
