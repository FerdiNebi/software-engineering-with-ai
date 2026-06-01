// Process (v1) sidebar tree — six lifecycle phases plus the shared Reference
// group. Consumed by src/components/Sidebar.astro when the current URL is
// NOT under /with-ai/. Per AD-V2-8 in architecture-v2-ai.md.

import { referenceSidebar } from './reference';

export const processSidebar = [
  {
    label: '1. Pre-Sales & Business Development',
    items: [
      { label: 'Overview', slug: 'pre-sales' },
      { label: 'Lead Qualification & Scoping Calls', slug: 'pre-sales/lead-qualification-scoping-calls' },
      { label: 'Proposal Writing', slug: 'pre-sales/proposal-writing' },
      { label: 'SOW & Contract Drafting', slug: 'pre-sales/sow-contract-drafting' },
      { label: 'Pricing & Estimation', slug: 'pre-sales/pricing-estimation' },
      { label: 'NDA / MSA / DPA — the legal stack', slug: 'pre-sales/legal-stack-nda-msa-dpa' },
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
          { label: 'Delivery Mobilization & Kickoff', slug: 'delivery/project-management/delivery-mobilization-kickoff' },
          { label: 'Sprint Planning & Cadence', slug: 'delivery/project-management/sprint-planning-cadence' },
          { label: 'Backlog Management', slug: 'delivery/project-management/backlog-management' },
          { label: 'Estimation & Sprint Slicing', slug: 'delivery/project-management/estimation-sprint-slicing' },
          { label: 'Status Reporting & Stakeholder Communication', slug: 'delivery/project-management/status-reporting-stakeholder-communication' },
          { label: 'Scope Control & Change Management', slug: 'delivery/project-management/scope-control-change-management' },
          { label: 'Risk & Issue Management', slug: 'delivery/project-management/risk-issue-management' },
          { label: 'Retrospectives', slug: 'delivery/project-management/retrospectives' },
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
          { label: 'Accessibility Testing', slug: 'delivery/qa-testing/accessibility-testing' },
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
      { label: 'Data Migration & Cutover', slug: 'deployment-launch/data-migration-cutover' },
      { label: 'Deployment Execution & Smoke Testing', slug: 'deployment-launch/deployment-execution-smoke-testing' },
      { label: 'Monitoring & Observability Setup', slug: 'deployment-launch/monitoring-observability-setup' },
      { label: 'Client Handoff & Launch Checklist', slug: 'deployment-launch/client-handoff-launch-checklist' },
    ],
  },
  {
    label: '6. Maintenance & Retainer',
    items: [
      { label: 'Overview', slug: 'maintenance-retainer' },
      { label: 'Hypercare & Warranty Period', slug: 'maintenance-retainer/hypercare-warranty' },
      { label: 'Bug Fixes & Patch Management', slug: 'maintenance-retainer/bug-fixes-patch-management' },
      { label: 'Feature Iteration', slug: 'maintenance-retainer/feature-iteration' },
      { label: 'Incident Response', slug: 'maintenance-retainer/incident-response' },
      { label: 'Retainer Structure & SLAs', slug: 'maintenance-retainer/retainer-structure-slas' },
      { label: 'Engagement Closeout & Post-Implementation Review', slug: 'maintenance-retainer/engagement-closeout' },
    ],
  },
  referenceSidebar,
];
