import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import remarkBasePath from './remark-base-path.mjs';
import { processSidebar } from './src/sidebar/process';
import { aiSidebar } from './src/sidebar/ai';

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
        Sidebar: './src/components/Sidebar.astro',
      },
      // Both trees concatenated. The routing-aware Sidebar.astro override
      // (V2-1.6) reads the current URL and renders only the relevant
      // subset; the concatenated form ensures Starlight still builds
      // prev/next navigation for AI-tree pages.
      sidebar: [...processSidebar, ...aiSidebar],
    }),
    mdx(),
    sitemap(),
  ],
});
