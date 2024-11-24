// @ts-check
// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import rehypePrettyCode from "rehype-pretty-code";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    mdx({
      syntaxHighlight: false,
      // Todo: implement proper dark mode for code blocks
      rehypePlugins: [rehypePrettyCode],
      remarkRehype: { footnoteLabel: "Footnotes" },
      gfm: false,
    }),
  ],
  vite: {
    ssr: {
      noExternal: ["react-tweet"],
    },
  },
  experimental: {
    contentLayer: true,
  },
});
