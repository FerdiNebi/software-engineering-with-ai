---
title: Security Testing
description: SAST, DAST, dependency scanning, and pen testing — sized to engagement risk, with triage discipline that distinguishes findings from launch blockers.
type: sub-section
phase: qa-testing
order: 5
lastUpdated: 2026-05-03
status: v1
---

## What happens here

Security testing in QA validates the [secure-development practices](/development/secure-development-practices/) applied during build. It runs four classes of activity, each targeting a different threat surface and each scaled to engagement risk:

- **Static Application Security Testing (SAST).** Scans source code for vulnerabilities — injection patterns, hardcoded secrets, unsafe APIs, taint-flow issues. Runs in CI on every PR; common tools include Snyk Code, Semgrep, SonarQube, GitHub Advanced Security, Checkmarx. Catches issues before code is even deployable.
- **Dynamic Application Security Testing (DAST).** Probes the running application for vulnerabilities — XSS, CSRF, broken authentication, injection that gets through to the deployed system. Runs against staging environments; common tools include OWASP ZAP, Burp Suite, Nuclei, Veracode DAST. Catches issues SAST cannot see because they emerge from runtime behaviour.
- **Dependency scanning.** Audits third-party libraries against known CVE databases. Runs in CI continuously; common tools include Dependabot, Renovate Bot, Snyk Open Source, GitHub Advisory Database, OSV-Scanner. The bulk of real-world vulnerabilities arrive through dependencies, not through agency-written code.
- **Penetration testing.** Manual testing by security specialists who attempt to find exploitable vulnerabilities the automated tools miss — business-logic flaws, authentication bypasses, privilege escalation, complex injection chains. Engaged from a third-party security firm or specialist consultancy. Typically runs once near launch on engagements where the risk profile justifies it.

The "how much" question is risk-proportional. A marketing-site engagement may run only SAST and dependency scanning; a B2B SaaS platform handling moderate PII adds DAST and a lightweight third-party scan; a fintech, health, or regulated platform adds full third-party penetration testing and possibly compliance audits (SOC 2, PCI-DSS, HIPAA assessment). The depth is set by the engagement's threat model (per [secure development practices](/development/secure-development-practices/)) and the client's industry, not by uniform agency policy. The output of these cycles is a documented set of findings, applied remediations, and a client-signed security acceptance position that survives launch.

## Best practices

**Run automated scans continuously, not as one-time pre-launch events.** SAST in CI on every PR; DAST against staging on every deploy or scheduled nightly; dependency scans on every dependency update and every PR. The continuous discipline catches issues at the time of introduction, when the engineer who wrote the code is still in context. Pre-launch-only scans produce findings the team must context-switch back to issues introduced weeks earlier — at multiples of the cost of catching them at PR time.

**Triage findings against CVE risk, not raw count.** A SAST or DAST run on a non-trivial codebase produces hundreds of findings. The vast majority are low-severity, false-positive, or apply to code paths the engagement does not exercise. The discipline is structured triage:

- **Critical/High CVSS, exploitable in deployment context.** Must-fix-before-launch. Block the merge or the launch until remediated.
- **Critical/High CVSS, not exploitable in deployment context.** Document the non-exploitability reasoning, accept as residual risk, document the acceptance.
- **Medium CVSS.** Triage per engagement policy — fix where the cost is reasonable; defer with documented rationale where it is not.
- **Low CVSS, informational findings, false positives.** Suppress in the tool config with documented reasoning.

Triage is human work — automated tooling produces signal, but the decisions require engineering judgement about exploitability and engagement risk. Engagements that treat scanner output as gospel block launches on findings that did not need blocking; engagements that ignore scanner output ship with real vulnerabilities.

**Engage third-party penetration testing pre-launch for regulated clients.** Penetration testing produces signal that automated tools cannot — business-logic vulnerabilities, complex multi-step exploits, design-level weaknesses. The engagement runs 1–3 weeks, costs typically £15k–£60k, and produces a formal findings report. The cycle runs near launch (after the build is feature-complete and stable) so findings reflect the system as it will deploy. Skipping pen testing on engagements where the client's industry expects it (fintech, healthcare, regulated SaaS) leaves the agency exposed to post-launch findings the engagement budget did not absorb.

**Document remediations and accepted residual risks per finding.** Every finding gets an outcome:

- **Remediated.** The fix is identified, applied, verified by re-scan, documented in the report.
- **Risk accepted.** The finding is real, the cost of remediation exceeds the risk, and the client formally accepts the residual risk in writing. Documented with rationale.
- **False positive.** The finding does not represent a real vulnerability. Documented with reasoning, suppressed in tool configuration to prevent re-flagging.
- **Deferred.** The finding will be addressed post-launch by a defined date. Documented with target and owner.

The findings register flows into the security handoff package — the post-handoff team needs the full record, not just the summary, to operate the system safely.

:::caution
Do not treat SAST and DAST output as gospel. Modern security scanners produce many findings on any non-trivial codebase, and the false-positive rate is non-trivial — sometimes 30%–50% on initial runs against unfamiliar code. Triage is the engineering work that converts raw output into actionable items. Engagements that block launches on un-triaged scanner findings produce launch delays the engagement was not priced for; engagements that ignore scanner findings ship with real vulnerabilities. The discipline is structured triage with documented decisions, not blind action on either extreme.
:::

**Run security testing in environments that mirror production.** A SAST scan on the source code is independent of environment; DAST and pen testing exercise the deployed system, and the deployment matters. The test environment uses production configuration (TLS settings, security headers, CORS policies, authentication flows), production-equivalent infrastructure, and production-representative data. DAST against a development environment with debug endpoints exposed produces findings irrelevant to production; DAST against a staging environment configured like production produces findings that matter.

**Plan the security sign-off conversation in the test strategy.** The [test strategy](/qa-testing/test-strategy-planning/) names what security findings block launch, what require client risk-acceptance signature, and what can be deferred. Engagements that defer this conversation until findings appear hit launch with simultaneous "fix all this" pressure and "should we delay launch" debate. Strategy-time documentation makes the conversation mechanical: each finding is classified, each classification has a pre-agreed disposition, the disposition is applied.

## Desired outcomes

By the end of security testing in this phase, the engagement has:

- Clean (or risk-accepted) automated scan results: SAST, DAST, and dependency scans complete with critical/high findings either remediated or formally risk-accepted by the client
- Penetration test report (where the engagement included one), with findings triaged, remediations applied, and residual risks documented
- A documented findings-and-remediations register covering every finding, its severity, its disposition, and its post-handoff status
- A client-signed security acceptance position, ratifying that the engagement's security testing produced acceptable results for launch
- An SBOM (where the engagement requires one) generated at build time, archived as a delivery artifact, and ready for the client's ongoing supply-chain monitoring
- A security handoff package: findings register, remediations log, secrets-rotation calendar, dependency-update procedures, security-incident response procedures — flowing into [client handoff](/deployment-launch/client-handoff-launch-checklist/) and [maintenance](/maintenance-retainer/incident-response/)

## What the industry does

**In-house-only vs. third-party-pentest shops.** In-house-only agencies rely on their own SAST/DAST/dependency-scanning tooling and their engineering team's security judgement, with no third-party penetration testing. Trade-off: lower cost, faster cycle, sufficient for low-risk commercial engagements, insufficient for regulated work. Third-party-pentest agencies engage external security firms (specialist boutiques like Doyensec or Trail of Bits, larger firms like NCC Group or Bishop Fox, regional specialists per geography) for formal pen testing pre-launch on engagements where the risk profile justifies it. Trade-off: dramatically higher cost (£15k–£60k typical, more for sophisticated work), independent verification carrying more weight with regulators and procurement, slower cycle. In-house-only dominates in commercial agency work where the engagement risk is bounded; third-party-pentest dominates in fintech, health, government, defence, and regulated SaaS engagements where independent verification is part of the procurement requirement. Most agencies do both — in-house automated for the engagement throughout, third-party pen test pre-launch where the engagement's risk profile demands it.

**Compliance-led vs. threat-model-led security testing.** Compliance-led agencies design security testing around the standards the engagement targets — PCI-DSS for payment processing, HIPAA for health data, SOC 2 for SaaS, ISO 27001 for broad information-security commitments. Trade-off: defensible to auditors, structured artifacts produced, sometimes over-tests for actual threat surface. Threat-model-led agencies design security testing around the engagement's specific threat model — which threats matter, which surfaces are most attractive, which mitigations are weakest. Trade-off: targeted to actual risk, harder to defend to auditors, requires structured threat-modelling discipline. Compliance-led dominates in regulated work where the standard is the contract; threat-model-led dominates in modern security-conscious agencies and product engineering. Mature agencies blend — compliance gives the audit floor, threat modelling fills in what compliance does not cover.

**SAST-heavy vs. DAST-heavy vs. balanced testing portfolios.** SAST-heavy agencies invest most security-testing effort in static analysis — fast feedback, integrated with CI, catches code-level patterns. Trade-off: misses runtime issues, environment-config issues, business-logic flaws. DAST-heavy agencies invest most effort in dynamic testing — exercises the deployed system, catches integration and configuration issues. Trade-off: slower feedback, requires staging environment, misses code-level issues until they manifest at runtime. Balanced portfolios run both — SAST in CI for fast feedback, DAST against staging for runtime issues, plus targeted manual testing for business-logic concerns automated tools cannot perceive. Most modern agencies trend balanced; pure-SAST or pure-DAST survives in agencies that built their tooling investment around one discipline.
