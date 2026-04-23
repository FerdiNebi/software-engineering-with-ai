import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://ferdinebi.github.io',
  base: '/software-engineering-with-ai/',
  integrations: [
    starlight({
      title: 'End-to-End Software Engineering with AI',
      description:
        'The agency and consulting delivery lifecycle for senior software engineers — pre-sales through maintenance.',
      sidebar: [
        {
          label: 'Pre-Sales & Business Development',
          items: [
            { label: 'Overview', slug: 'pre-sales' },
            { label: 'Lead Qualification & Scoping Calls', slug: 'pre-sales/lead-qualification-scoping-calls' },
            { label: 'Proposal Writing', slug: 'pre-sales/proposal-writing' },
            { label: 'SOW & Contract Drafting', slug: 'pre-sales/sow-contract-drafting' },
            { label: 'Pricing & Estimation', slug: 'pre-sales/pricing-estimation' },
          ],
        },
        {
          label: 'Discovery',
          items: [
            { label: 'Overview', slug: 'discovery' },
            { label: 'Stakeholder Interviews', slug: 'discovery/stakeholder-interviews' },
            { label: 'Requirements Workshops', slug: 'discovery/requirements-workshops' },
            { label: 'Prototyping & Proof of Concept', slug: 'discovery/prototyping-proof-of-concept' },
            { label: 'Estimation & Cost Commitment', slug: 'discovery/estimation-cost-commitment' },
            { label: 'Discovery Deliverables & Sign-Off', slug: 'discovery/discovery-deliverables-signoff' },
          ],
        },
        {
          label: 'Requirements & Design',
          items: [
            { label: 'Overview', slug: 'requirements-design' },
            { label: 'Functional & Non-Functional Requirements', slug: 'requirements-design/functional-nonfunctional-requirements' },
            { label: 'UX/UI Design', slug: 'requirements-design/ux-ui-design' },
            { label: 'System Architecture', slug: 'requirements-design/system-architecture' },
            { label: 'Infrastructure Design', slug: 'requirements-design/infrastructure-design' },
          ],
        },
        {
          label: 'Development',
          items: [
            { label: 'Overview', slug: 'development' },
            { label: 'Repository Structure & Branching Strategy', slug: 'development/repository-structure-branching' },
            { label: 'DevOps & CI/CD', slug: 'development/devops-ci-cd' },
            { label: 'Backend Development', slug: 'development/backend-development' },
            { label: 'Frontend Development', slug: 'development/frontend-development' },
            { label: 'Developer Testing', slug: 'development/developer-testing' },
            { label: 'Code Review', slug: 'development/code-review' },
            { label: 'Secure Development Practices', slug: 'development/secure-development-practices' },
            { label: 'Performance Engineering', slug: 'development/performance-engineering' },
            { label: 'Technical Documentation', slug: 'development/technical-documentation' },
          ],
        },
        {
          label: 'QA / Testing',
          items: [
            { label: 'Overview', slug: 'qa-testing' },
            { label: 'Test Strategy & Planning', slug: 'qa-testing/test-strategy-planning' },
            { label: 'Functional & Regression Testing', slug: 'qa-testing/functional-regression-testing' },
            { label: 'Performance Testing', slug: 'qa-testing/performance-testing' },
            { label: 'Security Testing', slug: 'qa-testing/security-testing' },
            { label: 'User Acceptance Testing (UAT)', slug: 'qa-testing/user-acceptance-testing' },
          ],
        },
        {
          label: 'Deployment / Launch',
          items: [
            { label: 'Overview', slug: 'deployment-launch' },
            { label: 'Infrastructure Provisioning', slug: 'deployment-launch/infrastructure-provisioning' },
            { label: 'Deployment Execution & Smoke Testing', slug: 'deployment-launch/deployment-execution-smoke-testing' },
            { label: 'Monitoring & Observability Setup', slug: 'deployment-launch/monitoring-observability-setup' },
            { label: 'Client Handoff & Launch Checklist', slug: 'deployment-launch/client-handoff-launch-checklist' },
          ],
        },
        {
          label: 'Maintenance & Retainer',
          items: [
            { label: 'Overview', slug: 'maintenance-retainer' },
            { label: 'Bug Fixes & Patch Management', slug: 'maintenance-retainer/bug-fixes-patch-management' },
            { label: 'Feature Iteration', slug: 'maintenance-retainer/feature-iteration' },
            { label: 'Incident Response', slug: 'maintenance-retainer/incident-response' },
            { label: 'Retainer Structure & SLAs', slug: 'maintenance-retainer/retainer-structure-slas' },
          ],
        },
      ],
    }),
    mdx(),
    sitemap(),
  ],
});
