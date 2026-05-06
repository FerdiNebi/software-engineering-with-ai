import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import remarkBasePath from './remark-base-path.mjs';

const base = '/software-engineering-with-ai/';

export default defineConfig({
  site: 'https://ferdinebi.github.io',
  base,
  markdown: {
    remarkPlugins: [[remarkBasePath, { base }]],
  },
  integrations: [
    starlight({
      title: 'End-to-End Software Engineering with AI',
      description:
        'The agency and consulting delivery lifecycle for senior software engineers — pre-sales through maintenance.',
      customCss: ['./src/styles/theme.css'],
      sidebar: [
        {
          label: '1. Pre-Sales & Business Development',
          items: [
            { label: 'Overview', slug: 'pre-sales' },
            { label: 'Lead Qualification & Scoping Calls', slug: 'pre-sales/lead-qualification-scoping-calls' },
            { label: 'Proposal Writing', slug: 'pre-sales/proposal-writing' },
            { label: 'SOW & Contract Drafting', slug: 'pre-sales/sow-contract-drafting' },
            { label: 'Pricing & Estimation', slug: 'pre-sales/pricing-estimation' },
          ],
        },
        {
          label: '2. Discovery',
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
          label: '3. Requirements & Design',
          items: [
            { label: 'Overview', slug: 'requirements-design' },
            { label: 'Functional & Non-Functional Requirements', slug: 'requirements-design/functional-nonfunctional-requirements' },
            { label: 'UX/UI Design', slug: 'requirements-design/ux-ui-design' },
            { label: 'System Architecture', slug: 'requirements-design/system-architecture' },
            { label: 'Infrastructure Design', slug: 'requirements-design/infrastructure-design' },
          ],
        },
        {
          label: '4. Delivery',
          items: [
            { label: 'Overview', slug: 'delivery' },
            {
              label: 'Project Management',
              items: [
                { label: 'Overview', slug: 'delivery/project-management' },
                { label: 'Sprint Planning & Cadence', slug: 'delivery/project-management/sprint-planning-cadence' },
              ],
            },
            {
              label: 'Development',
              items: [
                { label: 'Overview', slug: 'delivery/development' },
                { label: 'Repository Structure & Branching Strategy', slug: 'delivery/development/repository-structure-branching' },
                { label: 'DevOps & CI/CD', slug: 'delivery/development/devops-ci-cd' },
                { label: 'Backend Development', slug: 'delivery/development/backend-development' },
                { label: 'Frontend Development', slug: 'delivery/development/frontend-development' },
                { label: 'Developer Testing', slug: 'delivery/development/developer-testing' },
                { label: 'Code Review', slug: 'delivery/development/code-review' },
                { label: 'Secure Development Practices', slug: 'delivery/development/secure-development-practices' },
                { label: 'Performance Engineering', slug: 'delivery/development/performance-engineering' },
                { label: 'Technical Documentation', slug: 'delivery/development/technical-documentation' },
              ],
            },
            {
              label: 'QA / Testing',
              items: [
                { label: 'Overview', slug: 'delivery/qa-testing' },
                { label: 'Test Strategy & Planning', slug: 'delivery/qa-testing/test-strategy-planning' },
                { label: 'Functional & Regression Testing', slug: 'delivery/qa-testing/functional-regression-testing' },
                { label: 'Performance Testing', slug: 'delivery/qa-testing/performance-testing' },
                { label: 'Security Testing', slug: 'delivery/qa-testing/security-testing' },
                { label: 'User Acceptance Testing (UAT)', slug: 'delivery/qa-testing/user-acceptance-testing' },
              ],
            },
          ],
        },
        {
          label: '5. Deployment / Launch',
          items: [
            { label: 'Overview', slug: 'deployment-launch' },
            { label: 'Infrastructure Provisioning', slug: 'deployment-launch/infrastructure-provisioning' },
            { label: 'Deployment Execution & Smoke Testing', slug: 'deployment-launch/deployment-execution-smoke-testing' },
            { label: 'Monitoring & Observability Setup', slug: 'deployment-launch/monitoring-observability-setup' },
            { label: 'Client Handoff & Launch Checklist', slug: 'deployment-launch/client-handoff-launch-checklist' },
          ],
        },
        {
          label: '6. Maintenance & Retainer',
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
