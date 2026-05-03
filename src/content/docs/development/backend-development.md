---
title: Backend Development
description: Agency-specific backend concerns — contract-first APIs, migration discipline, and observability the client can operate post-handoff.
type: sub-section
phase: development
order: 4
lastUpdated: 2026-05-03
status: v1
---

## What happens here

Backend development in an agency engagement is not generic backend engineering. The differences from product-company backend work are load-bearing for how the code is shaped:

- **Short engagement scope.** A product-company backend is built once and evolved continuously over years; an agency backend is built in weeks and handed over to a different team at the end. Code that requires deep institutional context to maintain is code the client cannot operate post-handoff.
- **Contract-first APIs.** A product-company team can negotiate API contracts informally because the same engineers own both sides. An agency engagement typically has a different team owning the frontend (or the integration partners or the client's downstream systems), so the API contract is a formal artifact with versioning, documentation, and contract tests.
- **Client-ownable code style.** A product-company backend can use whatever conventions the team agreed; an agency backend has to be in conventions a future team can pick up. That usually means well-known frameworks, conventional file layouts, standard logging and observability patterns, and absence of clever idioms that require a tour to understand.
- **Observability as deliverable.** A product-company team operates their own backend and tunes observability for their own needs; an agency team builds observability as a deliverable the client's ops team will use. Dashboards, alerts, and runbooks are artifacts of the engagement, not internal tooling.

Backend work runs in parallel with [frontend development](/development/frontend-development/) once the [system architecture](/requirements-design/system-architecture/) is signed and APIs are agreed in contract form. Backend engineers own the API surface, the data model, the business logic, the integration points with third-party systems, and the operational hooks (logging, metrics, tracing) that make the system observable. The output is a deployable backend tested against the signed FR/NFR set, with documented APIs and operational artifacts that flow into the [QA / Testing](/qa-testing/) phase and the eventual client handoff.

## Best practices

**Adopt API versioning from the first endpoint.** Every API has a version in the path, header, or content negotiation (`/api/v1/...`, `Accept: application/vnd.client.v1+json`, etc.) chosen at kickoff and applied consistently. Versioned-from-day-one APIs handle breaking changes without coordinating client-side updates as emergency releases; un-versioned APIs trap the team into never breaking the contract or breaking it implicitly. Even on engagements with a single client of the API, version the surface — the cost is small and the optionality is large.

**Run contract tests across the API boundary.** A contract test verifies that the backend produces what the frontend expects and that the frontend consumes what the backend produces. Tools like Pact, OpenAPI-driven test suites, or hand-rolled contract tests over a shared schema catch the integration breakages that traditional unit and integration tests miss. Contract tests live in CI and run on every backend PR and every frontend PR; either side breaking the contract fails the build of the side that broke it. Engagements without contract tests rediscover integration bugs in QA at multiples of the cost of catching them at PR time.

**Treat database migrations as signed code.** Migrations are the most dangerous code in the system — running, reversible only with care, and frequently the cause of production incidents. Three rules:

- **Forward-only migrations.** Each migration is a one-way transformation that can be safely re-run; rollbacks are handled by forward migrations that undo the previous one, not by reverse migrations that may not be safe.
- **One migration per change.** Migrations are atomic and reviewable. Bundling three schema changes into one migration produces a script that nobody can review carefully.
- **Idempotent and tested.** Each migration runs cleanly twice. CI tests the migration against a fresh database and against a database with prior migrations applied. Migrations that pass once and fail on re-run are landmines waiting for a deployment to step on them.

**Build observability as a first-class deliverable.** Three layers, each shipped from day one:

- **Structured logs.** Every log line is JSON, includes the request ID, and uses a consistent set of severity levels and field names. The client's log aggregation platform (Datadog, Loki, CloudWatch, Splunk) consumes them without per-service parsing.
- **Metrics with named dashboards.** Latency, error rate, throughput, and any domain-specific metrics published to the metrics platform with documented dashboards the client's ops team can read. SLO-aligned metrics where SLOs were defined in NFRs.
- **Distributed tracing.** Every request gets a trace ID propagated across services and logged. Production incidents are debuggable by trace correlation, not by log archaeology.

Observability is the artifact that lets the client run the system without the agency. Skipping it produces a backend the client can deploy but cannot diagnose, which produces a long warranty period of "can you look at this?" requests that consume agency capacity for free.

**Document the data model in the repo.** Every table, every column, every foreign-key relationship documented alongside the migration that created it — typically a `docs/data-model.md` or per-domain README. Engineers joining mid-engagement and the client's post-handoff team both need to understand the data model without paging the original engineer. Schema diagrams (text-based or generated) supplement but do not replace the prose.

**Use well-known frameworks and conventional layouts.** A bespoke architecture using novel patterns may be elegant for the engineers who built it; it is debt for the team that inherits it. Prefer well-known frameworks (Express + standard middleware, Django, Rails, Spring Boot, ASP.NET Core, Phoenix, Laravel) and conventional folder layouts (the framework's recommended structure) unless there is a documented reason in an [ADR](/requirements-design/system-architecture/) to deviate. Cleverness costs the client.

:::caution
Do not ship an undocumented API to client integrators. APIs without OpenAPI/Swagger documentation, request/response examples, error catalogues, and authentication guidance are APIs the integrators cannot integrate against without paging the agency. Documented APIs reduce post-handoff support cost dramatically and are part of the deliverable, not a nice-to-have. If the engagement does not budget for API documentation, scope it back in or accept that the support cost will appear elsewhere.
:::

**Anti-patterns to avoid:**

- **The clever-architecture backend.** A backend whose architecture only one engineer can explain. The client cannot operate it; the team that inherits it rewrites major parts.
- **The unobservable backend.** Code that runs but cannot be diagnosed in production. Production incidents become escalations to the agency engineers who happen to have local context.
- **The single-environment backend.** Code tested only in the developer's local environment, with hard-coded assumptions about hostnames, ports, and credentials. Production deployments produce surprises that are obvious in retrospect.
- **The all-the-features framework.** Adopting a framework that promises to do everything but locks in a specific architecture the client cannot maintain post-handoff. The client inherits a maintenance burden disproportionate to the engagement scope.

## Desired outcomes

By the end of backend development, the engagement has:

- A deployable backend tested against the signed FR/NFR set, with passing unit and integration tests in CI and a green pipeline through staging
- Documented APIs (OpenAPI or equivalent specification) covering every public endpoint, error catalogue, authentication model, and rate-limit behaviour — sufficient for client integrators to integrate without paging the agency
- A versioned API surface and a documented compatibility commitment for the engagement and warranty period
- A documented data model — schema, relationships, migration history — checked into the repo alongside the code
- Observability deliverables: structured logs to the client's platform, metrics with documented dashboards, distributed tracing across services, and SLO-aligned monitoring where NFRs defined SLOs
- A contract-test suite running across the API boundary, gating both backend and frontend merges to prevent integration drift
- Operational-readiness artifacts: deployment runbook entries, alert routing, incident-response procedures, all sized to the client's [retainer](/maintenance-retainer/) capacity

## What the industry does

**Monolith-first vs. microservice agency styles.** Monolith-first agencies build a single deployable backend for most engagements — one repository, one runtime, one deployment, one database. Operationally simple; cheap to maintain; refactors to services later if scaling demands. Trade-off: tighter coupling, slower per-feature deployment, scale ceilings on shared resources. Microservice agencies decompose the backend into multiple services from day one — each service owns a bounded context, has its own data store, deploys independently. Trade-off: dramatically higher operational complexity (per-service CI/CD, per-service observability, inter-service contracts), much higher cost-to-deliver, only justified by genuine scale or organisational reasons. Modern software agencies trend strongly monolith-first because microservices are too expensive to operate at agency-engagement scale; microservices survive in engagements where the client already operates a microservice platform and the deliverable must integrate, or where the engagement scope genuinely exceeds monolith reasonable bounds. The default for any new engagement is monolith-first; microservices need an explicit ADR with named justification.

**Contract-first vs. code-first API workflows.** Contract-first agencies write the API specification (OpenAPI, AsyncAPI, GraphQL SDL) before any code. The contract is reviewed, signed off, and used to generate stubs, mocks, and contract tests. Backend and frontend can develop in parallel against the agreed contract. Trade-off: more upfront design effort; produces a documented API as a side effect; harder to deviate mid-implementation. Code-first agencies write backend code that produces the API surface, then generate documentation from it (Swagger annotations, FastAPI auto-docs). Trade-off: faster to start; the contract drifts whenever code drifts; frontend has to wait for code to exist or work against incomplete documentation. Contract-first dominates in engagements with separate backend and frontend teams, in API-product engagements, and in regulated work where the API spec is itself a deliverable; code-first survives in single-team engagements where the team can negotiate informally and where the API surface is small or internal.

**Vertical-slice vs. layer-by-layer development cultures.** Vertical-slice agencies deliver complete features end-to-end (UI through API through database) one feature at a time, integrating across layers as each feature lands. Demo-able from day one; faster client feedback loops; harder to produce architecturally consistent layers. Layer-by-layer agencies build the data layer first, then the API layer, then the UI — each layer signed off before the next starts. Slower to demo; produces more consistent layers; harder to validate end-to-end behaviour until late in the engagement. Vertical-slice dominates in modern Agile agencies and product engineering; layer-by-layer survives in regulated engagements with formal phase gates and in engagements where the team is structured by discipline rather than by feature ownership. Most agencies trend vertical-slice because the demo-frequency wins client confidence and surfaces integration issues early.
