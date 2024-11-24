import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Category = {
  title: string;
  description: string;
  slug: string;
};

export function getCategories() {
  const filePath = path.join(process.cwd(), "content", "categories.md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  return data.categories;
}
