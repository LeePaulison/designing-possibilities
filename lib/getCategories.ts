import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getAllPosts } from "./getPosts";

export type Category = {
  title: string;
  description: string;
  slug: string;
};

export function getCategories(): Category[] {
  // Load static categories from categories.md
  const filePath = path.join(process.cwd(), "content", "categories.md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  // Dynamic categories inferred from posts
  const allPosts = getAllPosts();
  const dynamicCategories = new Set(allPosts.map((post) => post.data.category || "Uncategorized"));

  // Merge static categories with dynamically inferred categories
  const mergedCategories = data.categories.map((category: Category) => ({
    title: category.title,
    description: category.description,
    slug: category.slug,
  }));

  // Add "Uncategorized" if it exists in dynamic categories but isn't already listed
  if (
    dynamicCategories.has("Uncategorized") &&
    !mergedCategories.some((cat: Category) => cat.slug === "uncategorized")
  ) {
    mergedCategories.push({
      title: "Uncategorized",
      description: "Posts without a specific category",
      slug: "uncategorized",
    });
  }

  return mergedCategories;
}
