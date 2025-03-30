// @ts-check
// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import rehypePrettyCode from "rehype-pretty-code";

import { remarkModifiedTime } from "./src/plugins/remark-modified-time";
import { remarkReadingTime } from "./src/plugins/remark-reading-time";

import tailwindcss from "@tailwindcss/vite";

const isProd = process.env.NODE_ENV === "production";

// https://astro.build/config
export default defineConfig({
  site: isProd ? "http://localhost:4321" : "http://localhost:4321",
  integrations: [
    react(),
    mdx({
      syntaxHighlight: false,
      // Todo: implement proper dark mode for code blocks
      rehypePlugins: [rehypePrettyCode],
      remarkPlugins: [remarkModifiedTime, remarkReadingTime],
      remarkRehype: { footnoteLabel: "Footnotes" },
      gfm: false,
    }),
  ],
  vite: {
    ssr: {
      noExternal: ["react-tweet"],
    },
    plugins: [tailwindcss()],
  },
});
