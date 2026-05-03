---
title: Frontend Development
description: Implementing against signed UX/UI design — accessibility-first components, design-token discipline, and a UI that matches what was signed.
type: sub-section
phase: development
order: 5
lastUpdated: 2026-05-03
status: v1
---

## What happens here

Frontend development in an agency engagement is implementation against a signed [UX/UI design](/requirements-design/ux-ui-design/), not design in code. The design system was signed off in Requirements & Design; the frontend's job is to render it accurately, accessibly, and responsively. Engagements that blur this boundary — where engineers redesign components in code, invent interaction patterns the mockups did not specify, or "improve" the visual hierarchy mid-build — produce frontends that do not match the signed design and trigger UAT cycles that are really redesign cycles.

Three failure modes recur in agency frontend work:

- **Design drift.** The shipped UI does not match the signed mockups — different spacing, different colours, different interaction states. Drift accumulates one component at a time and is invisible until the design lead opens the staging URL the day before UAT.
- **Accessibility gaps at QA.** Accessibility is treated as a post-build QA finding rather than a design-time and build-time discipline. WCAG failures discovered in QA cost multiples to fix because they often require redesigning component compositions.
- **Component-library bloat.** Engineers create new components instead of using the ones in the design system, producing a parallel component library full of one-off variants. The client inherits a system the design lead cannot maintain.

Frontend work runs in parallel with [backend development](/development/backend-development/) once the API contract is signed. Frontend engineers consume the agreed [design tokens](/requirements-design/ux-ui-design/) and component library, build against the documented FR/NFR set, and run accessibility validation continuously. The output is a deployed frontend matching the signed design, accessibility-verified during build (not as a QA finding), and accompanied by a component inventory the client can maintain post-handoff.

## Best practices

**Consume design tokens, do not redefine them.** Colours, typography, spacing, radii, and motion live in the design system as named tokens. The frontend imports them — never hard-codes hex values, pixel measurements, or font sizes that already exist as tokens. Hard-coded values produce a UI that drifts from the design system within weeks; token-based code stays consistent because changes happen in one place. Engagements that ship hard-coded values produce a maintenance burden the client cannot absorb.

**Stay aligned with the component library.** The design system enumerated the components — buttons, inputs, cards, modals, navigation patterns. Frontend code uses those components, in those variants, with those props. Need a button that the library doesn't provide? Add it to the library, document it, and use the new entry — do not write a one-off button component in the consuming feature. The discipline keeps the component library coherent and makes the post-handoff component inventory accurate.

**Bake accessibility into commits, not into QA.** Three commit-time disciplines:

- **Automated a11y testing in CI.** Tools like axe-core, pa11y, or Lighthouse CI run against every PR's component renders. Critical violations fail the build; serious violations are tracked. Accessibility regressions are caught at PR review, not at QA.
- **Keyboard navigation as a build-time test.** Every interactive element is keyboard-operable; focus order is logical; focus rings are visible. Keyboard navigation is verified during build, ideally in automated component tests, before any QA cycle.
- **Screen-reader semantics in the components themselves.** ARIA labels, landmark roles, and heading levels are part of the component, not bolted on later. The component library encodes the semantics; consuming code uses the components correctly.

Accessibility-as-commit-time-discipline produces accessible products. Accessibility-as-QA-finding produces accessibility regressions, last-minute remediation, and (in regulated jurisdictions) compliance risk that the engagement was not priced to absorb.

**Test responsive behaviour in development, not in QA.** Every screen is verified at the engagement's documented breakpoints (typically 320px mobile, 768px tablet, 1024px desktop, 1440px ultra-wide) during development. Tools like browser devtools' responsive mode, BrowserStack, or simple browser-window resizing make this trivially fast at PR-review time and slow as a QA cycle. Responsive bugs found in QA almost always require non-trivial CSS rework that pushes downstream test cycles.

**Use the framework's idioms, not against them.** Each frontend framework (React, Vue, Svelte, Solid, Astro, Angular) has idiomatic patterns for state management, data fetching, routing, and component composition. Engagements that use the framework idiomatically produce code that the next team can read; engagements that use the framework against its grain produce a hybrid the next team cannot maintain. If a chosen framework's idioms do not fit the engagement's requirements, the choice was wrong — escalate as an architecture issue, do not fight the framework in code.

:::caution
Do not design in the browser instead of implementing the signed design. The most common dev-side scope creep is engineers improving the UI as they build — better hover states, snappier transitions, more refined spacing. Each individual change feels small; collectively they produce a UI that does not match the signed mockups, and the design lead spends UAT cycles re-litigating the design. If genuine design improvements are needed, raise them as design-change requests through the agreed process; do not commit them silently. The signed design is the contract.
:::

**Maintain a component inventory throughout development.** A documented list of every component used or created during the engagement — name, purpose, location in the codebase, design-system reference, accessibility notes — updated continuously, not at handoff. The inventory becomes the artifact that lets the client maintain the frontend post-handoff. Engagements without a maintained inventory produce a handoff document that is either incomplete or written under deadline pressure.

**Run a design review before merging high-fidelity surfaces.** New screens or major component changes get a 15-minute review from the design lead (or a delegate) before merge. Catches the drift that automated checks cannot — wrong shadow, slightly-off spacing, a component used out-of-character. The review is short, the cost is small, and it prevents the staging-URL-the-day-before-UAT discovery cycle that destroys engagement margins.

**Anti-patterns to avoid:**

- **The bespoke-component frontend.** A frontend full of one-off components written instead of using the design system. Produces a parallel design system the client cannot maintain.
- **The accessibility-deferred frontend.** A frontend where accessibility is "we'll fix it in QA" rather than a build-time discipline. Produces a launch with known regressions and (in regulated jurisdictions) compliance risk.
- **The framework-against-the-grain frontend.** A frontend using a popular framework via patterns that work against the framework's idioms. Produces code the next team cannot read.

## Desired outcomes

By the end of frontend development, the engagement has:

- A deployed frontend matching the signed UX/UI design — visual fidelity, interaction patterns, transitions, and edge-state handling all consistent with the mockups
- Accessibility verified at build time: automated a11y checks running in CI, keyboard navigation tested in component tests, screen-reader semantics encoded in the component library
- Responsive behaviour verified at the documented breakpoints — no horizontal scroll at any width, layout transitions handled, touch targets sized for mobile
- A component inventory documenting every component used or built, mapped back to the design system, with location, purpose, and accessibility notes — ready for client handoff
- Design tokens consumed consistently throughout the codebase, with no hard-coded values for colours, typography, or spacing that exist as tokens
- Frontend code aligned with the chosen framework's idioms — readable by the next team, maintainable by the client, and free of bespoke patterns that require institutional context to navigate
- A passing test suite covering critical user flows and component-level interactions, ready for [developer testing](/development/developer-testing/) to extend with broader unit and integration coverage

## What the industry does

**Framework-prescriptive vs. framework-agnostic shops.** Framework-prescriptive agencies pick a frontend stack — usually React or Next.js, sometimes Vue/Nuxt or Angular — and apply it to every engagement. The team is deeply expert in that stack; tooling is shared across engagements; component libraries are reused; onboarding is fast. Trade-off: every engagement carries the prescribed framework's complexity even when a lighter stack would fit better. Framework-agnostic agencies pick the stack per engagement based on the requirements — Next.js for SSR-heavy work, Astro for content-heavy sites, vanilla TypeScript or Lit for embed widgets, React Native for mobile. Trade-off: less per-stack expertise depth; higher cognitive load on the team rotating between engagements; richer fit between stack and engagement. Framework-prescriptive dominates in mid-sized and larger agencies where team coherence matters; framework-agnostic survives in smaller specialised agencies and in engagements where the client already operates a specific stack the agency must integrate with. Most agencies sit on the prescriptive end with a small set of approved frameworks, picking the closest match per engagement rather than fully agnostic.

**Component-library-driven vs. utility-first vs. atomic-CSS development cultures.** Component-library-driven agencies use mature component libraries (Material UI, Chakra, shadcn/ui, Polaris) and theme them per engagement. Trade-off: fast initial velocity, less per-engagement design expressiveness, ties the engagement to the library's evolution. Utility-first agencies build with utility CSS frameworks (Tailwind CSS) and assemble components per engagement from primitives. Trade-off: high design expressiveness, requires team-wide utility-CSS fluency, can produce inconsistent components without governance. Atomic-CSS or hand-rolled-CSS agencies write CSS from scratch with naming conventions (BEM, CSS Modules) and minimal framework dependency. Trade-off: maximum control, slowest initial velocity, surviving in agencies with strong CSS culture or in engagements with strict performance budgets. Modern agencies trend toward shadcn/ui-style copy-as-you-go component libraries with utility CSS underneath; longstanding agencies often have established Material UI or Chakra commitments; specialty shops still hand-roll CSS where the engagement demands it.

**Server-rendered-first vs. client-rendered-first cultures.** Server-rendered-first agencies build with SSR/SSG frameworks (Next.js, Nuxt, SvelteKit, Astro, Remix) where most pages render on the server. Trade-off: better SEO, faster first paint, more complex deployment topology. Client-rendered-first agencies build SPAs (Create React App-style architectures, Vue with vue-cli, Angular CLI). Trade-off: simpler deployment, faster client-side navigation, slower first paint, weaker SEO. The pendulum swung from CSR-default in 2015 to SSR-default in 2024; most modern agencies trend SSR-first because SEO and first-paint performance matter on most engagements. CSR-first survives in internal-tool engagements, behind-auth applications where SEO is irrelevant, and engagements with complex client-side state where SSR adds more complexity than it saves.
