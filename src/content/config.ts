// src/content/config.ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const categories = defineCollection({
  loader: glob({
    pattern: "*/*.json",
    base: "src/guides", // Base is relative to src/content/
  }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    link: z.string(),
  }),
});

const subcategories = defineCollection({
  loader: glob({
    pattern: "*/*/*.json",
    base: "src/guides",
  }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    link: z.string(),
  }),
});

const curriculums = defineCollection({
  loader: glob({
    pattern: "**/*.mdx",
    base: "./src/guides",
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.string(),
    subcategory: z.string(),
    curriculum: z.string(),
  }),
});

export const collections = {
  categories,
  subcategories,
  curriculums,
};
