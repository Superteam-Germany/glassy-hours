import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import prefetch from '@astrojs/prefetch';
// import { sitemap } from '@astrojs/sitemap';

import rehypeSlug from 'rehype-slug';
import remarkGFM from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';
// import { sitemap } from './integrations/sitemap';


export default defineConfig({
  integrations: [tailwind(), svelte(), mdx(), prefetch()],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: "github-dark",
    },
    // shikiConfig: { theme },
    remarkPlugins: [
      // These are here because setting custom plugins disables the default plugins
      remarkGFM,
      [remarkSmartypants, { dashes: false }],
      // Add our custom plugin that marks links to fallback language pages
      // remarkFallbackLang(),
    ],
    rehypePlugins: [
      rehypeSlug,
      // This adds links to headings
      // [rehypeAutolinkHeadings, autolinkConfig],
      // Tweak GFM task list syntax
      // rehypeTasklistEnhancer(),
      // Translates the autolink headings anchors
      // rehypei18nAutolinkHeadings(),
    ],
  },

});