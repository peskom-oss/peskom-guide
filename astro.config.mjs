// @ts-check
// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import rehypePrettyCode from "rehype-pretty-code";

const isProd = process.env.NODE_ENV === "production";

// https://astro.build/config
export default defineConfig({
  site: isProd ? "https://mysite.com" : "http://localhost:4321",
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
