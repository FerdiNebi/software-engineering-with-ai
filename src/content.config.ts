import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

const phaseSlug = z.enum([
  'pre-sales',
  'discovery',
  'requirements-design',
  'development',
  'qa-testing',
  'deployment-launch',
  'maintenance-retainer',
]);

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        type: z.enum(['phase-overview', 'sub-section']).optional(),
        phase: phaseSlug.optional(),
        order: z.number().int().optional(),
        status: z.enum(['v1', 'v2-ai-ready']).optional(),
      }),
    }),
  }),
};
