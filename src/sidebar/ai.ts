// With-AI (v2) sidebar tree — one group containing the 9 AI pages
// (landing + 5 phases + 3 Delivery sub-streams) plus the shared Reference
// group. Consumed by src/components/Sidebar.astro when the current URL is
// under /with-ai/. Per AD-V2-8 in architecture-v2-ai.md.
//
// Note: AI phase labels are NOT numbered (unlike the process tree). The AI
// tree is a lens onto the lifecycle, not a sequence — readers cherry-pick
// per UX-DR-v2-4.

import { referenceSidebar } from './reference';

export const aiSidebar = [
  {
    label: 'With AI',
    items: [
      { label: 'Overview', slug: 'with-ai' },
      { label: 'Pre-Sales', slug: 'with-ai/pre-sales' },
      { label: 'Discovery', slug: 'with-ai/discovery' },
      { label: 'Requirements & Design', slug: 'with-ai/requirements-design' },
      {
        label: 'Delivery',
        items: [
          { label: 'Project Management', slug: 'with-ai/delivery/project-management' },
          { label: 'Development', slug: 'with-ai/delivery/development' },
          { label: 'QA / Testing', slug: 'with-ai/delivery/qa-testing' },
        ],
      },
      { label: 'Deployment / Launch', slug: 'with-ai/deployment-launch' },
      { label: 'Maintenance & Retainer', slug: 'with-ai/maintenance-retainer' },
    ],
  },
  referenceSidebar,
];
