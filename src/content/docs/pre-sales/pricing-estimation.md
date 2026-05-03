---
title: Pricing & Estimation
description: Pricing the engagement, defending the number, and feeding inputs into the SOW without over-committing on ambiguous scope.
type: sub-section
phase: pre-sales
order: 5
lastUpdated: 2026-05-03
status: v1
---

## What happens here

Pricing is the pre-sales activity that converts a qualified opportunity into a defensible commercial number. It is a commitment to the client about what an engagement will cost — not a developer's estimate of how long a task will take. The two are routinely confused, and conflating them is how agencies end up under-quoting on ambiguous scope.

Two flavours of estimation run on parallel tracks during pre-sales:

- **Pricing estimation** is the commercial commitment the agency makes to the prospect. It rolls up effort, risk, margin, and market positioning into a single number (or a small set of numbers across phases). The output is a price range or fixed price that lands in the proposal and, eventually, the [SOW](/pre-sales/sow-contract-drafting/).
- **Developer-task estimation** is the granular sizing of individual work items. It belongs further down the lifecycle — at [Discovery → Estimation & Cost Commitment](/discovery/estimation-cost-commitment/) once requirements are concrete, and at [Discovery → Prototyping & Proof of Concept](/discovery/prototyping-proof-of-concept/) when a specific technical assumption needs validation. Pre-sales pricing draws on developer-estimate intuition but is not the same artifact.

Mature agencies treat the pre-sales price as a starting position that may be revised after discovery. The SOW typically encodes either a phased commitment (fixed-price discovery, then re-estimated delivery) or a change-control mechanism that lets either party trigger a re-price when discovery output diverges from pre-sales assumptions. Either way, the price is anchored at pre-sales, validated in discovery, and locked in the SOW.

The five primary pricing models that agencies use:

- **Fixed price.** A single number for a defined scope. Risk sits with the agency. Best for engagements with concrete, testable deliverables.
- **Time and materials (T&M).** An hourly or daily rate, with optional not-to-exceed cap. Risk sits with the client. Best when scope evolves.
- **Retainer.** A recurring monthly commitment for a defined number of hours or capacity. Used heavily in [Maintenance & Retainer](/maintenance-retainer/retainer-structure-slas/) but increasingly used during delivery for long-running engagements.
- **Value-based.** Price tied to the business outcome rather than the cost of producing the work — a percentage of revenue lift, a per-transaction fee, a cost-savings split. Rare in software agencies because outcomes are hard to attribute and the procurement conversation is heavy.
- **Hybrid.** Fixed-price discovery followed by T&M or fixed-price delivery; or a fixed monthly retainer with overflow billing at T&M rates. Hybrid models split risk between agency and client and are the default in mature agency contracts where scope contains genuine unknowns.

## Best practices

**Use multiple estimation techniques and compare the answers.** A single estimation method is a single point of failure. Rolling up a price from one method without sanity-checking against another usually produces a number that feels right inside the agency and lands wrong with the client. Three techniques apply at pre-sales:

- **Analogy estimation** — anchor against a comparable past engagement. "This looks like the platform integration we did for client X six months ago, which came in at 600 hours; this one is roughly 30% larger because of the additional reporting module." Fast, defensible to leadership, easy to explain. Fails when the agency has no genuinely comparable prior work.
- **Three-point estimation** — produce optimistic, most-likely, and pessimistic numbers, then weight them (PERT: `(optimistic + 4 × most_likely + pessimistic) / 6`). Forces you to articulate uncertainty rather than collapse it into a single point. The spread between optimistic and pessimistic is itself a signal — wide spreads indicate scope ambiguity that should be priced as a discovery phase, not a delivery commitment.
- **Ranged estimates with confidence bands** — quote a range (e.g. £80k–£120k) with a stated confidence level ("80% confidence the engagement lands in this range based on current scope"). Confidence bands are honest with the prospect and protect both parties when discovery refines the number. Mature buyers expect ranges on anything other than the most well-understood scope.

**Pull the right pricing levers when the headline number is too high.** When the client's budget cannot stretch to the price the agency needs, three levers can close the gap without working for free:

- **Team composition.** A smaller team of senior engineers can sometimes deliver in less calendar time than a larger mixed team — and at lower total cost. Conversely, a more junior team at lower rates may fit a tighter budget if the timeline can stretch.
- **Timeline compression.** Compressing a 6-month engagement into 4 months almost always increases price (parallel workstreams, more team members, premium for risk). Stretching the same scope across 8 months reduces concurrent staffing and may reduce price.
- **Risk buffer.** The contingency built into the price reflects scope uncertainty. A higher-buffer price covers the agency on ambiguous scope; a lower-buffer price requires either a phased commitment or a documented assumption set that limits agency exposure.

:::tip
When discovery has not yet happened, quote a range rather than a fixed number — and say why. "We estimate this engagement at £90k–£140k. The range reflects scope uncertainty around the legacy data migration; a one-week paid discovery would let us narrow the range to a fixed price." Prospects who would reject a fixed £140k will often accept a £90k–£140k range plus a £15k discovery, because the path to certainty is concrete.
:::

**Document every pricing assumption in writing.** Pricing assumes things — team availability, client-side stakeholder availability, third-party API stability, scope boundaries, response-time expectations on client deliverables. Each assumption is a future change-control trigger if it proves false. Capture them in the proposal's pricing section and carry them forward into the SOW. Undocumented pricing assumptions are how agencies end up doing free work because the client "thought that was included."

**Anti-patterns to avoid:**

- **Round-numbering down to win the deal.** Quoting £95k when the bottom-up estimate is £108k because £100k feels like a psychological barrier. The deal is then unprofitable from day one and the team takes the pain.
- **Pricing on capacity rather than value.** Quoting based on "we have two engineers free next month" rather than the real cost of delivery. When capacity changes, the price has no defensible basis.
- **Single-number fixed price on ambiguous scope.** Quoting a single fixed number for an engagement where requirements are only partially known. The right answer is a phased commitment with a paid discovery.
- **Letting the client price the engagement.** Asking "what's your budget?" and quoting that number. The agency has no defensible margin and the client correctly senses the price was not derived from the work.

:::caution
Discounts erode trust. A 20% discount offered without a corresponding scope reduction signals to the prospect that the original price was inflated. If a price needs to come down, reduce scope, lengthen timeline, or change team composition — and document the change in writing. Never discount the same scope twice; the client will assume there is more room every time.
:::

## Desired outcomes

By the end of pre-sales pricing, both parties have:

- A defensible price (fixed number, range, or phased commitment) backed by a documented estimation method
- A risk-adjusted timeline that reflects scope confidence and team capacity, not just calendar arithmetic
- A documented set of pricing assumptions that survive forward into the proposal and the [SOW](/pre-sales/sow-contract-drafting/)
- The pricing input for the SOW's payment terms, milestone schedule, and change-control triggers
- An internal record of how the price was derived (estimation methods used, comparators referenced, sensitivity to scope changes) that can be revisited when the client pushes back

## What the industry does

**High-margin boutique vs. high-volume shop.** Boutique agencies — small teams, senior engineers, named principals — price at a premium per hour and win on perceived expertise and outcome quality. Their rate cards are 1.5×–2× the high-volume market and they do not compete on price. High-volume shops — larger teams, mixed seniority, often with offshore capacity — price at lower rates and win on throughput and procurement-friendly proposals. Both models are commercially viable; the discipline is choosing one and holding the line. Agencies that try to compete on both quality *and* price usually find themselves losing margin on every engagement.

**Discovery-first vs. proposal-first pricing.** Discovery-first agencies decline to quote delivery on ambiguous scope. The first commercial commitment is a fixed-price discovery (typically £10k–£30k for a one- to three-week engagement); delivery pricing is set after discovery using its outputs. This model is honest and reduces under-quoting risk, but it asks the prospect to make two commitment decisions rather than one and slows the sales cycle. Proposal-first agencies quote delivery upfront based on the scoping call alone, absorbing risk into a contingency buffer (typically 15%–30% of the bottom-up estimate). Quicker to close, but more vulnerable to scope surprises. Discovery-first wins for enterprise transformations and high-uncertainty technical work; proposal-first wins for well-understood scopes (marketing site builds, mobile app MVPs against documented APIs, platform integrations).

**Cost-plus vs. value-based pricing.** Most software agencies price as cost-plus: roll up effort, multiply by loaded hourly rate, add margin and contingency. The price reflects the cost of production. A small minority of agencies price value-based: tie the price to the business outcome (a percentage of incremental revenue, a per-transaction fee, a cost-savings share). Value-based pricing produces dramatically higher margins when it works but requires the buyer to accept attribution methodology and the agency to take on outcome risk. It is most common in agencies with deep domain specialisation (e-commerce conversion-rate optimisation, ad-tech, fraud detection) where outcomes are measurable and attributable. Most general software agencies stay cost-plus because the overhead of negotiating value-based contracts exceeds the premium for engagements under £500k.

**Headline-fixed vs. phased pricing.** In mature markets where scope is well-understood (Salesforce implementation, ServiceNow rollouts, established platform integrations), agencies trend toward phased pricing — fixed-price discovery, fixed-price MVP, optional follow-on phases. The buyer gets predictability per phase; the agency gets re-pricing rights between phases. In emerging markets where conversion speed matters more than predictability (early-stage product agencies, growth-stage MVP shops), agencies trend toward headline-fixed prices because they convert faster and the deal economics absorb the occasional under-quote. The right model is the one the buyer's procurement process can accept; arguing the buyer into your preferred model is usually a sign you should not be bidding.
