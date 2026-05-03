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

// superRefine pattern: a page with ANY of `type`, `phase`, `order` is treated as a content
// page and must have ALL three. The splash home (`index.mdx`) has none and is exempt.
export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z
        .object({
          type: z.enum(['phase-overview', 'sub-section']).optional(),
          phase: phaseSlug.optional(),
          order: z.number().int().optional(),
          status: z.enum(['v1', 'v2-ai-ready']).optional(),
        })
        .superRefine((data, ctx) => {
          const isContent =
            data.type !== undefined ||
            data.phase !== undefined ||
            data.order !== undefined;
          if (!isContent) return;
          if (data.type === undefined) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              path: ['type'],
              message:
                "Required for non-home pages: must be 'phase-overview' or 'sub-section'.",
            });
          }
          if (data.phase === undefined) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              path: ['phase'],
              message: 'Required for non-home pages: must be one of the 7 phase slugs.',
            });
          }
          if (data.order === undefined) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              path: ['order'],
              message: 'Required for non-home pages: integer ordering within the phase.',
            });
          }
        }),
    }),
  }),
};
