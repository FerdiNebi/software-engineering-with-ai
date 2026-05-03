---
title: UX/UI Design
description: Producing signed-off design artifacts during Requirements & Design so implementation matches design and accessibility is built-in, not bolted on.
type: sub-section
phase: requirements-design
order: 3
lastUpdated: 2026-05-03
status: v1
---

## What happens here

UX/UI design is a Requirements & Design activity, not a Development activity. The signed design package is an input to development, not a deliverable produced during it. Engagements that treat UX/UI as something engineers figure out from FR descriptions ship interfaces that contradict the requirements, drift from the original product vision, and trigger UAT cycles that are really redesign cycles.

The standard UX/UI artifact set covers five layers of fidelity:

- **User flows.** Diagrams that map the steps a user takes through the system to accomplish a task — sign-up flow, checkout flow, admin-revoke-session flow. Lightweight artifacts (often boxes-and-arrows in Figma, Whimsical, or Excalidraw) that surface ordering, branching, and error paths before pixels are committed.
- **Wireframes.** Low-fidelity layouts of each screen showing structure, content hierarchy, and interaction targets — not visual treatment. Wireframes answer "what's on this screen and how does it organise" without committing to colours, typography, or imagery.
- **Mockups.** High-fidelity visual designs of representative screens, applying the brand, typography, colour, and imagery to the wireframes. Mockups answer "what does the finished product look like" for the screens that establish the visual system.
- **Interactive prototypes.** Clickable Figma, Sketch, or ProtoPie prototypes for the flows where interaction matters more than static layout — onboarding, multi-step forms, transitions, or any flow whose behaviour cannot be communicated in still mockups. Used in design reviews and lightweight user testing.
- **Design system or design tokens.** The structured set of components, patterns, and tokens (colours, typography scales, spacing, radii, motion) that delivery implements as a component library. The design system is the durable artifact that survives the engagement; mockups are illustrations of the system, not the system itself.

Participants are the agency's UX lead (or designer), the technical lead (for buildability review), and named client stakeholders — typically the sponsor for direction, an end-user representative for validation, and the client's designer or brand owner where one exists. Design runs in parallel with [FR/NFR work](/requirements-design/functional-nonfunctional-requirements/) and [system architecture](/requirements-design/system-architecture/), with design constraints shaping requirements and architecture decisions in turn (a real-time chat requirement constrains the layout; an architecture's mobile-first commitment constrains the visual system). The output hands off to [frontend development](/development/frontend-development/) for implementation and to [UAT](/qa-testing/user-acceptance-testing/) for client validation.

## Best practices

**Establish the design-review cadence at kickoff.** Each artifact category gets one or two named review cycles before sign-off, with a stated reviewer and review window. Typical cadence: user flows reviewed in week 1; wireframes in weeks 2–3; mockups in weeks 3–4; design system documented in week 4–5. Each cycle has a 5-business-day review window, a 3-day revision window, then sign-off. Open-ended review on design artifacts is the leading cause of design phases that overrun and compress development.

**Version-control design files like code.** Design files belong in a structured tool (Figma, Sketch with cloud storage, Penpot) where every screen has a stable URL, version history is preserved, and changes are reviewable by stakeholders without copy-paste exports. Naming conventions matter: `[engagement-code] / [feature] / [screen]` is the workable shape. Loose files in shared drives and decks-of-screenshots-as-design-spec produce delivery teams that build against versions of the design that the designer has since revised.

**Bake accessibility into the design, not into the QA checklist.** WCAG 2.2 Level AA considerations belong in the design system, not in a late-stage QA pass. Three design-time disciplines:

- **Contrast tokens.** Colour tokens are validated against WCAG contrast minimums before they enter the system; non-compliant pairings are removed, not flagged for "future review."
- **Touch-target sizes.** Interactive elements have minimum 44×44 CSS-pixel targets in the design system, not just at QA. The design system enforces it; designers cannot accidentally violate it.
- **Keyboard and screen-reader patterns.** Components designed with the keyboard tab order, focus rings, and ARIA semantics specified — not left to engineers to invent at build time.

Accessibility-as-design-constraint produces accessible products. Accessibility-as-QA-finding produces accessibility regressions, last-minute remediation, and litigation risk on engagements where the client's compliance posture matters.

**Hand off design tokens, not just mockups.** A dev-ready handoff package contains: the design files (linked, not exported), a documented design token set (often as JSON or a Style Dictionary input), an asset export inventory (icons, images, fonts), an interaction-patterns document covering states (hover, focus, active, disabled, error), and a component inventory mapping each design component to its build counterpart. Engineers given only mockups will reverse-engineer the design system from screenshots and produce inconsistent implementations — design tokens are what make the implementation predictable.

:::tip
Run a buildability review with engineers before design sign-off, not after. A 60-minute session where the technical lead and one frontend engineer walk through the mockups and design system catches the layout patterns that depend on impossible CSS, the interactions that require unbounded animation budgets, and the components that conflict with the chosen frontend framework. Catching these before sign-off avoids the design-revision-during-build pattern that wrecks engagement margins.
:::

:::caution
Do not treat accessibility as a QA finding to be addressed after the design is signed off. Accessibility regressions discovered in QA almost always require redesigning the affected screens — the colour choices, contrast levels, focus patterns, and component compositions are downstream of the design system. The cost of fixing accessibility post-design is multiples of the cost of designing for it from day one. If the engagement targets WCAG 2.2 AA (the legal standard in most jurisdictions), the design system encodes it. Anything less is a known regression deferred.
:::

**Validate at least three flows with real users before sign-off.** A design reviewed only by the agency team and the client sponsor produces sponsor-shaped design. Three short user-test sessions on the highest-stakes flows (typically onboarding, checkout, or the primary task flow) surfaces interaction failures and language confusions that internal review never catches. Recruitment can be informal — three target-user proxies, recruited via the client's existing audience or via remote-testing tools (Maze, UserTesting). The validation cost is small; the value is high.

**Anti-patterns to avoid:**

- **The decks-as-spec design.** A 60-slide PowerPoint of screen images presented as the design spec. Engineers cannot extract the design system from a deck; the spec drifts the moment a slide gets revised.
- **The component-by-component design.** A design system invented bottom-up, one button and one input at a time, without thinking about the higher-level layouts and patterns. Produces a component library that does not compose into actual screens.
- **The "we'll figure that interaction out in dev" mockup.** Static mockups of flows where the interaction is the design, with no prototype or specified behaviour. Engineers either invent the interaction (and break the design vision) or escalate every interaction question to the designer mid-sprint (and slow delivery).

## Desired outcomes

By the end of UX/UI design, the engagement has:

- A signed-off set of user flows, wireframes, mockups, and interactive prototypes covering every in-scope feature and every flow named in the FR set
- A documented design system — colour tokens, typography scale, spacing scale, motion tokens, component inventory, accessibility patterns — at fidelity sufficient for development to implement without inventing pieces
- An interaction-patterns document covering states, transitions, error treatments, empty states, loading states, and keyboard/screen-reader behaviour for every component
- A dev-ready handoff package: linked design files (Figma or equivalent), exported design tokens, an asset export inventory, and a component-inventory mapping each design component to its build counterpart
- An accessibility commitment built into the design system at WCAG 2.2 Level AA (or whichever compliance standard the engagement targets), validated with both automated tooling and at least one manual review pass
- Validation findings from at least one round of user testing on the highest-stakes flows, incorporated into the signed-off designs

## What the industry does

**Full-fidelity-up-front vs. build-in-parallel-with-dev approaches.** Full-fidelity agencies invest 3–8 weeks producing complete design packages — every screen, every state, every interaction — before development starts. Engineers implement against a fixed design and design issues that surface during build go through change control. Trade-off: predictable build, fewer design-vs-code conflicts, but high upfront cost and risk of designing screens that turn out to be unnecessary or built-incorrectly. Build-in-parallel agencies produce design at lower fidelity (user flows, wireframes, a partial mockup set) and complete the design layer-by-layer alongside development — the next sprint's screens get high-fidelity treatment a sprint or two before they are needed. Lower upfront cost, design adapts to learning during build, but requires close designer-engineer collaboration and produces less-defensible artifacts. Full-fidelity-up-front dominates in fixed-price engagements, brand-led work, and engagements where the client needs sign-off-able artifacts; build-in-parallel dominates in T&M product engagements and longstanding agency-client relationships where the design conversation is continuous.

**Bespoke design-system vs. reused-system models.** Some agencies build a bespoke design system per engagement — every component designed from scratch to fit the client's brand. Maximises visual differentiation; expensive in design hours; produces a system the client can rarely maintain post-handoff. Other agencies build on top of an off-the-shelf design system (Material Design, Carbon, Polaris, Tailwind UI, Radix) and theme it for the client. Faster to ship, more maintainable post-handoff, but visually less distinctive and less suitable for clients with strong brand requirements. Bespoke dominates in design-led agencies and brand-driven engagements; off-the-shelf dominates in product-development engagements and engagements where time-to-market matters more than visual differentiation. The hybrid pattern — off-the-shelf foundation plus a curated bespoke layer for high-visibility components — is increasingly common.

**Design-handoff tools vs. exported-document handoff.** Modern handoff happens in tools designed for it: Figma's Dev Mode, Zeplin, Storybook with linked design tokens. Engineers click on a component and see the spacing, colours, and interaction notes inline. Older handoff used exported PDFs, screenshots, or Photoshop slices. Tool-based handoff dramatically reduces the cost and error rate of build vs. design fidelity but requires the client to either accept the agency's tool choice or run a parallel exported document for their internal needs. Tool-based handoff dominates in mid-size and modern agencies; exported-document handoff survives in enterprise engagements with strict tooling constraints and in sectors where the design package is itself a contract artifact.
