---
title: Secure Development Practices
description: Sizing security work to the engagement — secrets, dependencies, and threat-model depth proportional to client risk, not a one-size-fits-all rulebook.
type: sub-section
phase: development
order: 8
lastUpdated: 2026-05-03
status: v1
---

## What happens here

Secure development is a shared-responsibility activity that runs across every phase of an agency engagement. The depth of the work is calibrated to the client's actual risk posture, not applied as a uniform standard. A fintech platform handling payment instructions and a marketing site handling no PII have different threat surfaces, different regulatory exposures, and different reasonable security investments. Engagements that apply the same secure-development effort to both either over-invest on the marketing site (eroding margin) or under-invest on the fintech platform (creating compliance and litigation risk).

Five threat surfaces matter for almost every agency engagement:

- **Secrets and credentials.** Anything a stolen value would unlock — API keys, database passwords, signing keys, OAuth client secrets.
- **Dependencies.** Third-party libraries the system pulls in, each carrying its own evolving vulnerability surface.
- **Authentication and authorisation.** How the system identifies users, decides what they can access, and resists impersonation.
- **Input handling and injection vectors.** SQL injection, XSS, command injection, deserialization vulnerabilities — the classic OWASP Top 10 concerns.
- **Data exposure.** What the system logs, returns in error messages, exposes via public endpoints, or stores without encryption.

The depth of investment scales with the client's industry: marketing-site engagements need disciplined dependency hygiene, secrets management, and basic OWASP discipline; fintech, health, and government engagements need formal threat modelling, third-party penetration testing, SBOM production, and explicit compliance posture (SOC 2, PCI-DSS, HIPAA, ISO 27001) per the regulatory regime. Secure-development practices in this phase land the build-time disciplines; [security testing](/qa-testing/security-testing/) in QA validates them at system level; [client handoff](/deployment-launch/client-handoff-launch-checklist/) transfers the security posture to the client's ongoing operation.

## Best practices

**Run secrets-scanning in CI from day one.** Pre-commit hooks (gitleaks, trufflehog, detect-secrets) and CI pipeline scans catch secrets before they land in repo history. Once a secret is in git history, removing it is expensive — rewriting history breaks every clone, and rotation is the only safe response. The discipline is preventing the commit, not cleaning up after it. Combined with the [DevOps & CI/CD](/development/devops-ci-cd/) secrets posture (no secrets in repo, secrets-management platform from kickoff, per-environment scoping), secrets become managed resources rather than committed artifacts.

**Keep dependencies updated on a documented cadence.** Three rules cover the majority of dependency-related incidents:

- **Automated dependency updates.** Renovate, Dependabot, or equivalent opens PRs for dependency bumps continuously. Engineers triage them; the bot does the toil.
- **Critical security updates merged within an SLA.** Critical CVEs in production dependencies merged within 7 days; high severity within 30 days; documented in `CONTRIBUTING.md`.
- **SBOM produced where the engagement demands it.** Software Bill of Materials (CycloneDX, SPDX format) generated at build time and shipped as a delivery artifact in regulated industries and where the client's procurement requires it.

Engagements without a dependency-update cadence ship with critical CVEs by the time launch arrives — vulnerabilities discovered during the engagement that nobody assigned ownership of. Engagements with the cadence in place need to triage, not respond to surprises.

**Size the threat model to the engagement.** Threat modelling is the activity of asking, structurally, what could go wrong with the system. Three depth tiers:

- **Lightweight (most engagements).** A 30-minute team session at the start of [system architecture](/requirements-design/system-architecture/) walking through the OWASP Top 10 against the system's surfaces. Documented as a one-pager. Sufficient for marketing sites, internal tools, low-PII applications.
- **Structured STRIDE (mid-risk engagements).** A more rigorous walkthrough using the STRIDE framework (Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege) per major system component. Documented as a section in the architecture document. Suitable for B2B SaaS, e-commerce, applications handling moderate PII.
- **Formal threat modelling (high-risk engagements).** Dedicated threat-modelling sessions, often facilitated by a security specialist, with formal threat catalogues, mitigations mapped to architecture decisions, and re-modelling at major architecture changes. Required for fintech, health, government, defence, and any engagement where the client's compliance posture demands it.

The discipline is matching the threat-model depth to the engagement risk — not skipping it because the client did not ask for one (every engagement gets at least the lightweight tier) and not over-investing where the engagement does not need it.

**Apply OWASP Top 10 discipline as a baseline.** Every backend code review checks for OWASP Top 10 categories: injection, broken authentication, sensitive data exposure, XML external entities, broken access control, security misconfiguration, XSS, insecure deserialization, vulnerable components, insufficient logging. The discipline is not memorising the list — it is having reviewers actively check for the named categories on every PR. The reviewer's checklist (per [Code Review](/development/code-review/)) names them; the lint and security-scan tooling catches the categories that can be caught automatically.

**Encode authorisation in the architecture, not as scattered checks.** Authorisation logic distributed across controllers, services, and templates produces gaps the team did not intend. The discipline is centralising authorisation — middleware, policy engines (OPA, Cedar), framework-native auth integration — so the question "is this user allowed to access this resource" has one answer in one place. Engagements that scatter authorisation checks discover at QA that some endpoints check and others do not; the cost of fixing is multiples of the cost of designing centrally from the start.

:::caution
Do not skip the threat model because the client did not ask for one. Secure-by-default is part of the deliverable, not an upsell. Engagements that ship with no documented threat model carry baked-in vulnerabilities into the client's estate, and the client discovers them via incidents post-launch — at significantly higher cost than an hour of threat modelling during build. Even the lightweight 30-minute tier is non-negotiable; it is part of professional delivery, not a separate scope item.
:::

**Plan the security handoff alongside the engagement, not at handoff.** Documented threat model, dependency-update procedure, secrets-rotation calendar, security-incident response procedure — all artifacts the client inherits. Building these alongside the engagement (as documentation lands continuously) produces handoff-ready artifacts. Building them in the closing days produces shallow documents that do not survive contact with a real incident.

## Desired outcomes

By the end of secure development investment in this phase, the engagement has:

- No hardcoded secrets in the repository — verified by automated scanning in CI and pre-commit hooks
- A documented dependency-update cadence with critical-CVE SLAs, automated update PRs running continuously, and an SBOM produced at build time where the engagement requires it
- A documented threat model sized to the engagement (lightweight, STRIDE, or formal) with mitigations mapped to architecture decisions
- An OWASP Top 10 baseline applied through code review, automated security scanning in CI, and reviewer checklists
- A centralised authorisation model — middleware, policy engine, or framework-native — rather than scattered access checks
- A documented security posture for handoff: threat model, dependency procedures, rotation calendar, incident-response procedures, and any compliance artifacts (SOC 2, PCI, HIPAA documentation as applicable)
- A clean pass through [QA security testing](/qa-testing/security-testing/) — automated SAST/DAST/dependency scans clean (or risk-accepted), with documented residual-risk acceptance from the client

## What the industry does

**Heavy-compliance shops vs. general-agency security practices.** Heavy-compliance agencies specialise in regulated industries (financial services, healthcare, defence, government) where compliance is the dominant security driver. They invest in formal certifications (SOC 2, ISO 27001, PCI-DSS, HIPAA), maintain dedicated security teams, run formal threat modelling on every engagement, produce SBOMs and audit trails as standard deliverables, and price engagements with compliance-related effort baked in. Trade-off: higher per-engagement cost, slower delivery, mandatory in regulated work, dramatically over-invested for unregulated work. General-agency security practices apply secrets management, dependency hygiene, OWASP Top 10 discipline, and lightweight threat modelling — the build-time security tier that protects most engagements without the overhead of formal compliance. Trade-off: appropriate to commercial work, insufficient for regulated work, fast enough to fit normal engagement margins. Heavy-compliance shops dominate in regulated procurement; general-agency practices dominate in commercial agency work. The choice is rarely a matter of agency preference — it is dictated by the engagement's regulatory environment.

**SAST/DAST-in-CI vs. third-party-pentest cultures.** SAST-in-CI agencies run static analysis (Snyk, Semgrep, SonarQube, GitHub Advanced Security) and DAST (OWASP ZAP, Burp Suite, Nuclei) as automated CI gates on every PR or merge. Trade-off: catches a high percentage of common issues automatically, fast feedback to engineers, requires the team to maintain the tooling. Third-party-pentest agencies rely on engaging a specialist firm to perform manual penetration testing pre-launch. Trade-off: catches sophisticated issues that automated tooling misses, expensive (often £15k–£60k per engagement), slower feedback (results come once, near launch). Most modern agencies do both — automated SAST/DAST throughout the engagement plus a third-party pen test for high-risk launches. Pure SAST-only is sufficient for low-risk commercial work; pure pen-test-only is insufficient (catches issues only at launch when fix cost is highest); the hybrid is increasingly the agency standard.

**Security-as-engineer-discipline vs. dedicated-security-engineer cultures.** Security-as-engineer-discipline agencies expect every engineer to apply secure-development practices as part of their normal work — secrets discipline, dependency awareness, OWASP-top-10 review. Trade-off: scales naturally; depends on engineering culture being uniformly strong; expert-level security skills sit in shared responsibility rather than a named role. Dedicated-security-engineer agencies have a named security engineer (or security lead) on each engagement who runs threat modelling, reviews security-critical PRs, owns the secrets posture, and produces the security artifacts. Trade-off: deeper expertise on each engagement, higher per-engagement cost, named owner who can be a bottleneck. Larger agencies and regulated work trend dedicated-security-engineer; smaller agencies and commercial work trend security-as-engineer-discipline. The right model is dictated by engagement size, risk profile, and the agency's hiring economics.
