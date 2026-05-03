---
title: DevOps & CI/CD
description: Executing the infrastructure-design plan and operating the pipeline so the client inherits a deployment they can run, not just observe.
type: sub-section
phase: development
order: 3
lastUpdated: 2026-05-03
status: v1
---

## What happens here

DevOps and CI/CD are the execution of the [infrastructure-design plan](/requirements-design/infrastructure-design/) and the ongoing operation of the build-test-deploy pipeline. Infrastructure design produced the plan — environment map, hosting, secrets, DR posture — and DevOps work turns it into actual pipelines, actual environments, and actual deployment runbooks. The output is a pipeline that runs every PR through quality gates, promotes builds across environments, and deploys to production with documented procedures.

A minimum-viable agency pipeline runs eight stages, in order:

```yaml
# Minimum-viable CI/CD pipeline (illustrative)
on:
  pull_request:
  push:
    branches: [main]

jobs:
  lint:
    # eslint, prettier, ruff, tflint — fail loudly on style drift
  test:
    # unit + integration tests; required threshold enforced
  build:
    # build artifact (container, bundle, package) once; promote it onward
  deploy-dev:
    # auto-deploy on every main commit
  integration:
    # exercise the deployed dev environment end-to-end
  deploy-staging:
    # gated on integration green; mirrors production
  deploy-prod:
    # gated on staging soak + manual approval; production cutover
```

Pipelines smaller than this leave gaps the team rediscovers under deadline pressure (no integration tests means production-only bugs; no staging soak means launch-day surprises). Pipelines larger than this are usually carrying tooling for tooling's sake — every additional stage is operational overhead the client inherits at handoff.

DevOps work is owned jointly by the agency's technical lead and a dedicated DevOps or platform engineer (sometimes shared across engagements). Client-side participation is the named infrastructure stakeholder, who reviews the pipeline configuration, validates the environment access model, and confirms the post-handoff runbook is operable. The output is a green pipeline running on every commit, a documented runbook, and an access model the client can credibly operate.

## Best practices

**Build the artifact once and promote it across environments.** A pipeline that rebuilds for each environment is a pipeline that ships different bytes to staging and production — the bug found in staging may not exist in the production build. Build once, store the artifact (container image in a registry, bundle in object storage, package in a private registry), and promote the same artifact through dev → integration → staging → production. Configuration injects per-environment differences; the artifact itself is identical. The discipline is unglamorous and prevents most "but it worked in staging" incidents.

**Treat secrets as managed resources from day one.** Three rules cover the most common pipeline-secrets failures:

- **Never commit secrets to the repo.** Not in `.env` files, not in YAML configs, not in commits. Secrets-management platform (AWS Secrets Manager, HashiCorp Vault, GCP Secret Manager, GitHub Actions encrypted secrets) from kickoff.
- **Per-environment scoped credentials.** The pipeline's production credentials are not accessible from PR builds. Each environment has its own scoped credentials with audit logging.
- **Rotation cadence documented.** Even if rotation is manual in v1, the cadence (90 days, 180 days) is documented and assigned. The client inherits the cadence at handoff.

The cost of a leaked credential is multiples of the cost of disciplined secrets handling. Engagements that ship without disciplined secrets handling are technical-debt landmines that detonate on the post-handoff team.

**Make the pipeline client-accessible from day one.** Pipeline logs, deployment history, secret rotation, and emergency-deploy procedures are all artifacts the client will operate post-handoff. Set up the access model on day one: client engineers have read access to pipeline runs and deployment logs throughout the engagement; agency engineers have write access during delivery, with a documented transition plan to remove agency write access at handoff. Pipelines built in agency-only accounts and migrated at handoff produce a chaotic transition where the client cannot diagnose post-launch incidents because they cannot read the deployment history.

**Document the deployment runbook as you build the pipeline, not at handoff.** A useful runbook covers: how to deploy, how to roll back, how to view logs, how to rotate secrets, how to handle pipeline failures, how to reach agency support during the warranty period. Each entry gets written when the procedure is first run, validated against actual operation. Runbooks written at handoff are written by engineers who have rotated mentally to the next engagement and produce documentation the client cannot follow.

**Enforce mainline gates in CI configuration, not in team agreement.** Required passing checks (lint, test, build, security scan, performance budget) are configured in the platform's branch-protection settings — GitHub branch protection rules, GitLab push rules, Bitbucket merge checks. Configuration is reviewable, version-controlled, and survives team rotation. Team agreements about "we always run tests before merge" do not survive deadline pressure.

**Right-size pipeline tooling to engagement and team capacity.** Heavyweight pipeline platforms (Jenkins, GoCD, CircleCI Enterprise, Argo Workflows, full GitOps with Argo CD or Flux) deliver advanced capabilities — sophisticated approval workflows, multi-cluster deployment, complex matrix builds — at the cost of operational overhead. Lighter platforms (GitHub Actions, GitLab CI, CircleCI Free, simple shell scripts) deliver the minimum-viable pipeline at a fraction of the cost. Pick the lightest platform that delivers what the engagement actually needs. Engagements that adopt heavyweight platforms because they sound mature usually under-use them and produce a pipeline the client cannot maintain.

:::caution
Do not hand off credentials with "I'll DM you the API key." Credentials shared via direct messages, email, or chat are credentials that leak. The right pattern: credentials live in the secrets-management platform from day one; the client's named operator is added to the platform's access list before handoff; the agency's access is revoked at handoff. Engagements that hand off credentials informally produce post-handoff scrambles where the client realises they have credentials in three different chat threads and no idea which is current.
:::

**Plan the agency-vs-client split at the pipeline level.** Some pipeline stages are clearly agency-owned during the engagement (build, lint, test); some are clearly handed off (deployment, monitoring, alert routing). Document the split at kickoff: who can trigger a deploy during the engagement, who can during the warranty period, who can after handoff. Without this map, the warranty period becomes a series of "can you deploy this for us?" requests that consume agency capacity for free.

## Desired outcomes

By the end of DevOps and CI/CD setup, the engagement has:

- A green pipeline running on every commit and every PR with required gates: lint, test, build, security scan, deploy-dev, integration, deploy-staging, deploy-prod (manual approval)
- A documented environment promotion path with the same artifact flowing dev → integration → staging → production, configuration-injected per environment
- A documented operational runbook covering deploy, rollback, log access, secret rotation, and incident-response procedures, validated against actual operation
- A client-operable access model: client engineers have appropriate read access throughout, the post-handoff write-access transition is planned and documented, and the secrets-management platform is configured to support handoff without credential rotation chaos
- A secrets-handling posture compliant with the [infrastructure design](/requirements-design/infrastructure-design/) plan: no secrets in repo, per-environment scoping, documented rotation cadence
- A handoff-ready pipeline configuration: documented in `CONTRIBUTING.md`, defined as code in IaC, and operable by the client's named platform engineer post-handoff

## What the industry does

**Heavyweight-tooling vs. "just GitHub Actions" shops.** Heavyweight-tooling agencies adopt sophisticated pipeline platforms (Jenkins with shared libraries, full GitOps with Argo CD or Flux, multi-cluster deployment via Spinnaker, custom Kubernetes operators) — typically driven by engagements that genuinely need the capabilities (multi-region multi-cluster deployments, complex compliance workflows, regulated industries with formal change-management). The pipeline is itself an architecture commitment that the client inherits and must maintain. Light-tooling agencies use whatever is built into the source-control platform — GitHub Actions, GitLab CI, Bitbucket Pipelines — with minimal custom infrastructure. Pipelines are simpler, post-handoff operability is high, and the client can typically operate them without specialised platform engineering. Light-tooling dominates in modern agencies, product engineering, and engagements where post-handoff client operability matters; heavyweight survives in regulated industries, defence, large-enterprise platforms, and engagements where the client already operates the heavyweight tooling and the agency must integrate. The right answer for any engagement is the lightest tooling that meets actual requirements, not the most impressive tooling the agency knows how to operate.

**GitOps vs. push-deploy cultures.** GitOps agencies treat the desired state of every environment as a declarative artifact in a Git repository, with deployment controllers continuously reconciling actual state to declared state (Argo CD, Flux, Pulumi Operator). Roll-back is a `git revert`. Audit is `git log`. Trade-off: requires Kubernetes or compatible substrate, requires team-wide GitOps fluency, adds operational complexity for engagements that do not need it. Push-deploy agencies trigger deployments imperatively — pipeline jobs that execute deployment commands against environments. Simpler, faster to set up, weaker auditability. GitOps is dominant in cloud-native engagements with Kubernetes substrates and operations-heavy clients; push-deploy survives in serverless, PaaS-hosted, and traditional VM-based engagements. Most modern agencies pick GitOps for engagements where the client already operates Kubernetes and push-deploy elsewhere.

**Continuous deployment vs. release-as-event cultures.** Continuous-deployment agencies ship to production on every passing mainline commit — sometimes dozens of deployments per day. Trade-off: requires excellent monitoring, feature flags, and the discipline to catch and revert quickly when something breaks. Release-as-event agencies cut releases on a defined cadence — weekly, sprint-end, monthly — with formal release notes and stakeholder coordination. Trade-off: slower feedback, larger release blast radius, but easier external coordination (mobile apps, partner integrations, regulated launches). Continuous deployment dominates in modern web engagements and product-development work; release-as-event dominates in mobile, regulated, and B2B-platform engagements where releases require external coordination. Both are commercially viable; the choice depends on the engagement's release-coupling reality, not on the agency's preference.
