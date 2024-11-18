// src/content/config.ts
import { defineCollection, z, reference } from "astro:content";
import { glob } from "astro/loaders";

const guides = defineCollection({
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

const subguides = defineCollection({
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

// const subguides = defineCollection({
//   loader: glob({
//     pattern: "meta.json",
//     base: "guides/*/*",
//   }),
//   schema: z.object({
//     title: z.string(),
//     description: z.string().optional(),
//     parentGuide: z.string().default((entry) => {
//       const segments = entry.id.split("/");
//       return segments[1]; // Extracts the parent guide name
//     }),
//     // Add other fields from your meta.json
//   }),
// });

// const lessons = defineCollection({
//   loader: glob({
//     pattern: "*.mdx",
//     base: "guides/*/*/*",
//   }),
//   schema: z.object({
//     title: z.string(),
//     // Add other frontmatter fields if any
//     parentSubguide: z.string().default((entry) => {
//       const segments = entry.id.split("/");
//       return `${segments[1]}/${segments[2]}`; // Extracts the parent subguide path
//     }),
//   }),
// });

export const collections = {
  guides,
  subguides,
  //   lessons,
};
