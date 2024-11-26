import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  // Get all content
  const curriculums = await getCollection("curriculums");
  const categories = await getCollection("categories");
  const subcategories = await getCollection("subcategories");

  // Transform curriculum entries into RSS items
  const curriculumItems = curriculums.map((post) => ({
    title: post.data.title,
    description: post.body,
    link: `/guides/${post.data.category}/${post.data.subcategory}/${post.data.slug}`,
    pubDate: new Date(),
  }));

  // Transform category entries
  const categoryItems = categories.map((category) => ({
    title: category.data.name,
    description: category.data.description,
    link: category.data.link,
    pubDate: new Date(),
  }));

  // Transform subcategory entries
  const subcategoryItems = subcategories.map((subcategory) => ({
    title: subcategory.data.name,
    description: subcategory.data.description,
    link: subcategory.data.link,
    pubDate: new Date(),
  }));

  // Combine all items
  const allItems = [...curriculumItems, ...categoryItems, ...subcategoryItems];

  return rss({
    title: "Peskom Guide",
    description:
      "Panduan belajar programming untuk para sarjana komedi lulusan IT gak bisa ngoding",
    site: context.site,
    items: allItems,
    customData: `<language>ID-id</language>`,
  });
}
