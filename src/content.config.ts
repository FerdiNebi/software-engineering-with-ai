import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// 2026-05-06 — Delivery restructure: 7-phase model collapsed to 6 phases.
// `development` and `qa-testing` were removed and `delivery` was added; the
// previous top-level phases now live as sub-sections under `delivery/`.
// Decision: rely on file-path encoding for the sub-section second hop rather
// than adding a `subsection` Zod field. Reason: file path is already unambiguous
// (`delivery/development/foo.md` → development sub-section); a Zod field would
// only duplicate that signal and introduce a cross-field validity rule that
// must hold for `phase: delivery` only. Sidebar wiring is unaffected.
const phaseSlug = z.enum([
  'pre-sales',
  'discovery',
  'requirements-design',
  'delivery',
  'deployment-launch',
  'maintenance-retainer',
]);

// 2026-06-01 — v2 schema extension (Story V2-1.1, permissive landing).
// Adds three new optional fields for the AI tree: `tree`, `aiPageType`,
// `deliveryStream`. None is required yet — v1 pages without `tree` continue
// to build. The strict rules (require `tree` for content pages, cross-field
// constraints between `aiPageType`/`phase`/`deliveryStream`) land in Story
// V2-1.3 after the v1 sweep (V2-1.2) has added `tree: 'process'` to all
// existing content pages.
const tree = z.enum(['process', 'ai']);
const aiPageType = z.enum(['landing', 'phase', 'delivery-stream']);
const deliveryStream = z.enum(['project-management', 'development', 'qa-testing']);

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
          tree: tree.optional(),
          aiPageType: aiPageType.optional(),
          deliveryStream: deliveryStream.optional(),
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
              message: 'Required for non-home pages: must be one of the 6 phase slugs.',
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
