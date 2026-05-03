---
title: Infrastructure Design
description: Producing the environment, hosting, network, secrets, and DR plan so Day 1 of development is not blocked by missing infrastructure.
type: sub-section
phase: requirements-design
order: 5
lastUpdated: 2026-05-03
status: v1
---

## What happens here

Infrastructure design is the plan; DevOps is the execution of the plan. The two are separate activities, run by overlapping people, with different artifacts. Infrastructure design happens here, in Requirements & Design, and produces a documented plan that the [DevOps & CI/CD](/development/devops-ci-cd/) activity then implements during development. Engagements that conflate the two — typically by skipping the planning artifact and letting infrastructure emerge from whichever YAML the first DevOps engineer writes — discover that decisions about regions, secrets handling, environment counts, and cost models were made by accident rather than by analysis.

The standard infrastructure design deliverable set has six artifacts:

- **Environment map.** A documented list of environments (dev, staging, production, often plus preview/QA), what runs in each, who has access, and how data flows between them. Names the parity discipline — which environments mirror production and which deliberately diverge.
- **Hosting model.** The platform commitment — cloud provider, services used (compute, datastore, queue, cache, CDN), regional and availability-zone strategy. References back to [system architecture](/requirements-design/system-architecture/) decisions.
- **Network diagram.** Shows VPC structure, public/private subnets, load balancers, ingress/egress paths, and the boundaries between the agency's hosted components and any client-side or third-party systems.
- **Cost estimate.** A line-item monthly cost projection for production and non-production environments, with named drivers (compute hours, storage, egress, third-party platform fees) and sensitivity to scale assumptions. The estimate gets reconciled against the engagement's [pricing](/pre-sales/pricing-estimation/) and is the basis for the client's hosting-cost expectation post-handoff.
- **Secrets model.** How secrets and credentials are stored, rotated, accessed, and audited — covering both engagement-time secrets (CI tokens, deployment keys) and runtime secrets (database passwords, API keys, signing keys). Names the secrets-management platform (AWS Secrets Manager, Vault, GCP Secret Manager, etc.) and the access control rules.
- **Disaster-recovery plan.** Documented RTO (recovery time objective) and RPO (recovery point objective), backup strategy, restore procedure, region/zone failover behaviour. Sized to the client's actual recovery requirements, not the cloud provider's marketing brochure.

Participants are the agency's technical lead (often the same person who authored the [system architecture](/requirements-design/system-architecture/)), a dedicated DevOps or platform engineer on infrastructure-heavy engagements, and the client's named infrastructure or platform stakeholder. The output flows forward to [DevOps & CI/CD](/development/devops-ci-cd/), where the plan becomes pipelines and IaC, and to [infrastructure provisioning](/deployment-launch/infrastructure-provisioning/) at deployment-launch time, where the plan executes against production.

## Best practices

**Adopt an infrastructure-as-code posture from day one.** Every environment — even a development sandbox — defined in code (Terraform, Pulumi, AWS CDK, Bicep, ARM, or platform-native equivalents like SST, Serverless Framework, Helm). The discipline pays compounding interest: environments are reproducible, changes are reviewable, drift is detectable, and handoff to the client at end-of-engagement is a repository transfer rather than a knowledge transfer. Even small engagements benefit from minimal IaC — a Cloudflare Pages site has a `wrangler.toml`; a static-site deployment has a Pulumi script for the bucket and CDN. Console-clicked infrastructure is what the team apologises for at handoff.

**Maintain environment parity by default; document deliberate divergence.** Production, staging, and integration environments share the same architecture, the same services, the same configuration shape — only the scale and the data are different. Engagements that let staging diverge from production (smaller instance types, different databases, missing services) discover production-only bugs that staging cannot reproduce. When parity is genuinely impractical (cost-prohibitive scale, third-party sandbox limitations), document the divergence explicitly: "staging uses a single-instance Postgres rather than the production HA cluster; expect transactional-throughput differences only." Implicit divergence is the source of the bugs nobody can debug.

**Make the cost estimate transparent to the client.** A line-item monthly cost projection — compute, storage, egress, third-party platform fees, observability tooling — shared with the client during this phase. The cost commitment becomes part of the SOW or a separate hosting-cost addendum. Surprises post-deployment ("we didn't realise the data egress would cost £4k/month") are how agency-client relationships break in the first quarter of operation. The cost estimate also drives architecture decisions backward: if the projected egress cost is unaffordable, the architecture needs caching or a CDN that the architecture phase did not specify.

**Standardise the secrets model before any code is written.** Three rules cover the most common failure modes:

- **No secrets in repo.** Not in commits, not in `.env` files (which leak), not in CI configs. Secrets-management platform from day one.
- **Per-environment scoped credentials.** Production credentials are not accessible from development environments; each environment has its own scoped credentials with audit logging.
- **Rotation cadence documented.** Even if rotation is manual in v1, the cadence (90 days, 180 days) is documented and assigned. Engagements that skip rotation discover post-handoff that no one knows when credentials were last rotated.

The secrets model is unsexy, low-budget infrastructure work that prevents the most damaging post-handoff incidents. Skip it and the client inherits a security debt the next agency will quote a separate engagement to fix.

**Right-size the DR plan to the engagement.** A four-hour RTO with a one-hour RPO costs an order of magnitude more than a 24-hour RTO with a 24-hour RPO. The discipline is asking the client what they actually need (not what they will accept) and pricing the architecture against it. Mature clients will trade DR for cost; immature clients will demand DR they cannot afford. Make the trade-off explicit in the design: "We commit to RTO 4h, RPO 1h via cross-region warm standby. Reduces deployment cost by ~40% versus active-active. Client accepts this for the engagement."

:::tip
Document a Day-1 readiness checklist as part of infrastructure design — every environment, every credential, every access grant, every IaC artifact that must exist before engineers can start work. The checklist becomes the gate between Requirements & Design and Development. Engagements that begin development before the checklist is green spend the first sprint either blocked or making decisions that should have been made earlier.
:::

:::caution
Do not start development before the infrastructure plan is signed off and the Day-1 readiness items are in place. Engineers without environments either wait (and the agency burns budget on idle staff) or invent infrastructure ad-hoc (and the system inherits whatever the first engineer's local setup looked like). The cost of a one-week infrastructure-design slip is one week of paused development; the cost of starting development without infrastructure is months of architectural rework when the ad-hoc choices prove untenable. Always pay the planning cost upfront.
:::

**Plan client-handoff infrastructure access from day one.** The infrastructure plan documents the post-handoff state: which credentials transfer to the client, which dashboards the client will operate, which third-party accounts the client owns versus the agency owns, and which services route through which paying entity. Engagements that defer this conversation to handoff hit a 30-day disentanglement period at the end where credentials, billing, and admin rights are migrated under time pressure. Day-1 planning makes handoff a 2-hour ritual rather than a multi-week cleanup.

## Desired outcomes

By the end of infrastructure design, the engagement has:

- An approved infrastructure plan covering environment map, hosting model, network design, secrets model, and disaster-recovery posture
- A cost estimate aligned with engagement pricing, broken down by environment and by line-item driver, shared with the client and accepted as the basis for hosting-cost expectations
- An IaC-posture commitment for the engagement: which IaC tool, which patterns, which conventions for naming and tagging, which review process for infrastructure changes
- A documented secrets model — secrets-management platform, scoping rules, rotation cadence, audit access — applied consistently across environments
- A Day-1 readiness checklist defining the infrastructure state required before development begins, with named owners for each item
- A signed handoff to [DevOps & CI/CD](/development/devops-ci-cd/) and a forward link to [infrastructure provisioning](/deployment-launch/infrastructure-provisioning/) at deployment time, where the plan executes against production

## What the industry does

**Client-hosted vs. agency-hosted vs. third-party-managed approaches.** Client-hosted engagements deploy into the client's existing cloud accounts, often inheriting the client's IAM model, networking conventions, and tooling commitments. The agency builds within these constraints; handoff is the simplest path because the infrastructure already lives where the client operates. Trade-off: the agency must work within whatever maturity (or chaos) the client's environment carries. Agency-hosted engagements provision into the agency's cloud accounts and migrate to the client at handoff. Faster initial setup, more architectural freedom for the agency, but creates a billing-and-access disentanglement at the end of the engagement that always takes longer than expected. Third-party-managed engagements host on platforms like Heroku, Vercel, Netlify, Cloudflare Pages, Render, or Fly.io that abstract most infrastructure decisions. Faster than either alternative for many engagement shapes, lower operational overhead, but ties the client to a vendor and limits architectural flexibility. Client-hosted dominates in enterprise engagements where infrastructure governance is non-negotiable; agency-hosted survives in startup-velocity engagements where infrastructure friction would slow delivery; third-party-managed is increasingly common across small-to-mid agency work where the operational simplicity outweighs the platform lock-in.

**IaC-everywhere vs. console-tolerant cultures.** IaC-everywhere agencies define every resource in code — even ad-hoc dev sandboxes — with no console-clicked exceptions. The discipline produces immutable, reproducible, reviewable infrastructure but adds friction to small changes and requires team-wide IaC fluency. Console-tolerant agencies use IaC for production and staging but allow console clicks for development and one-off experiments. Lower friction; risks production-environment drift if a console change does not propagate back to code. Mature agencies trend toward IaC-everywhere because the cost of a single console-vs-code drift incident exceeds the operational friction; smaller agencies tolerate the trade-off because the team's IaC depth is uneven. The right answer for any engagement is dictated by the team's actual fluency, not by best-practice rhetoric.

**Heavyweight DR posture vs. minimal-viable recovery.** Heavyweight-DR agencies design for active-active multi-region from day one — bidirectional replication, automated failover, RTO/RPO measured in minutes. Common in financial services, healthcare, government, and any client where downtime carries regulatory or contractual penalties. Minimal-viable-recovery agencies design for backup-and-restore — daily backups, manual failover, RTO/RPO measured in hours or a day. Suits commercial engagements where the cost of an outage is bounded and the cost of active-active multi-region would dominate hosting cost. The choice is rarely a one-size-fits-all decision — it is calibrated per engagement to the client's actual revenue exposure during downtime. Pre-emptively designing heavyweight DR for engagements that do not need it inflates infrastructure cost without delivering value; pre-emptively choosing minimal recovery for engagements with regulatory uptime requirements creates compliance risk.
