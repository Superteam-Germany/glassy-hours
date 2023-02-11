import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
// import { sitemap } from '@astrojs/sitemap';

import rehypeSlug from "rehype-slug";
import remarkGFM from "remark-gfm";
import remarkSmartypants from "remark-smartypants";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), mdx(), prefetch()],
  output: "static",
  adapter: vercel(),
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "github-dark",
    },
    remarkPlugins: [
      remarkGFM,
      [
        remarkSmartypants,
        {
          dashes: false,
        },
      ],
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
