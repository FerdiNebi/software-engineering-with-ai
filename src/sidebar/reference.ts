// Shared "Reference" sidebar group — appears at the bottom of both the
// Process and the With-AI sidebar trees. Single source of truth so the
// Glossary and Deliverables entries are identical across both trees.
// Per AD-V2-8 in architecture-v2-ai.md.

export const referenceSidebar = {
  label: 'Reference',
  items: [
    { label: 'Deliverables across the lifecycle', slug: 'deliverables' },
    { label: 'Glossary', slug: 'glossary' },
  ],
};
