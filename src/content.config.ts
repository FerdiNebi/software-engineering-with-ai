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

// 2026-06-01 — v2 schema strict mode (Story V2-1.3).
// `tree` is now required on any page that triggers the content-page required-set
// (any page with type/phase/order/tree/aiPageType set). Cross-field rules:
//
//   tree === 'process': type/phase/order required (v1 invariant); aiPageType and
//     deliveryStream forbidden.
//
//   tree === 'ai': aiPageType required. Per-aiPageType rules:
//     - 'landing': phase/order/type forbidden (the tab landing is not phase-bound).
//     - 'phase': phase required and must be a valid phase slug; order required.
//     - 'delivery-stream': phase MUST be 'delivery'; deliveryStream required; order required.
//
// Schema-exempt files (`index.mdx`, `glossary.md`, `deliverables.md`) declare
// none of these fields and pass through untouched.
const tree = z.enum(['process', 'ai']);
const aiPageType = z.enum(['landing', 'phase', 'delivery-stream']);
const deliveryStream = z.enum(['project-management', 'development', 'qa-testing']);

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
            data.order !== undefined ||
            data.tree !== undefined ||
            data.aiPageType !== undefined;
          if (!isContent) return;

          // tree required on every content page
          if (data.tree === undefined) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              path: ['tree'],
              message:
                "Required for non-home, non-reference pages: 'process' or 'ai'.",
            });
            return;
          }

          // process-tree pages: v1 invariant — type/phase/order all required
          if (data.tree === 'process') {
            if (data.aiPageType !== undefined) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ['aiPageType'],
                message: 'Forbidden on process-tree pages.',
              });
            }
            if (data.deliveryStream !== undefined) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ['deliveryStream'],
                message: 'Forbidden on process-tree pages.',
              });
            }
            if (data.type === undefined) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ['type'],
                message:
                  "Required for process-tree pages: 'phase-overview' or 'sub-section'.",
              });
            }
            if (data.phase === undefined) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ['phase'],
                message:
                  'Required for process-tree pages: one of the 6 phase slugs.',
              });
            }
            if (data.order === undefined) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ['order'],
                message:
                  'Required for process-tree pages: integer ordering within the phase.',
              });
            }
            return;
          }

          // ai-tree pages: aiPageType required, type forbidden, per-type rules
          if (data.tree === 'ai') {
            if (data.type !== undefined) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ['type'],
                message:
                  "Forbidden on AI-tree pages — use 'aiPageType' instead.",
              });
            }
            if (data.aiPageType === undefined) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ['aiPageType'],
                message:
                  "Required on AI-tree pages: 'landing', 'phase', or 'delivery-stream'.",
              });
              return;
            }

            if (data.aiPageType === 'landing') {
              if (data.phase !== undefined) {
                ctx.addIssue({
                  code: z.ZodIssueCode.custom,
                  path: ['phase'],
                  message:
                    "Forbidden on AI landing page: the tab landing is not phase-bound.",
                });
              }
              if (data.order !== undefined) {
                ctx.addIssue({
                  code: z.ZodIssueCode.custom,
                  path: ['order'],
                  message:
                    'Forbidden on AI landing page: sits at the root of the AI tree.',
                });
              }
              if (data.deliveryStream !== undefined) {
                ctx.addIssue({
                  code: z.ZodIssueCode.custom,
                  path: ['deliveryStream'],
                  message: 'Forbidden on AI landing page.',
                });
              }
            }

            if (data.aiPageType === 'phase') {
              if (data.phase === undefined) {
                ctx.addIssue({
                  code: z.ZodIssueCode.custom,
                  path: ['phase'],
                  message:
                    "Required on AI phase page: one of the 6 phase slugs.",
                });
              }
              if (data.order === undefined) {
                ctx.addIssue({
                  code: z.ZodIssueCode.custom,
                  path: ['order'],
                  message:
                    'Required on AI phase page: integer ordering in the AI sidebar.',
                });
              }
              if (data.deliveryStream !== undefined) {
                ctx.addIssue({
                  code: z.ZodIssueCode.custom,
                  path: ['deliveryStream'],
                  message:
                    "Forbidden on AI phase page: only delivery-stream pages declare it.",
                });
              }
            }

            if (data.aiPageType === 'delivery-stream') {
              if (data.phase !== 'delivery') {
                ctx.addIssue({
                  code: z.ZodIssueCode.custom,
                  path: ['phase'],
                  message:
                    "Required on AI delivery-stream page: must be 'delivery'.",
                });
              }
              if (data.deliveryStream === undefined) {
                ctx.addIssue({
                  code: z.ZodIssueCode.custom,
                  path: ['deliveryStream'],
                  message:
                    "Required on AI delivery-stream page: 'project-management' | 'development' | 'qa-testing'.",
                });
              }
              if (data.order === undefined) {
                ctx.addIssue({
                  code: z.ZodIssueCode.custom,
                  path: ['order'],
                  message:
                    'Required on AI delivery-stream page: integer ordering in the AI sidebar.',
                });
              }
            }
          }
        }),
    }),
  }),
};
