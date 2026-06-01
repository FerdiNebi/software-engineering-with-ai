import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import remarkBasePath from './remark-base-path.mjs';
import { processSidebar } from './src/sidebar/process';

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
      components: {
        Header: './src/components/Header.astro',
      },
      // Sidebar is processSidebar only at V2-1.4. The aiSidebar concat is
      // deferred to V2-1.7 because Starlight build-fails on sidebar slugs
      // that point at not-yet-created pages — V2-1.7 lands the landing
      // page + AI stubs and at that point the concat becomes safe.
      sidebar: [...processSidebar],
    }),
    mdx(),
    sitemap(),
  ],
});
