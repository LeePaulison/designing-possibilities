import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export type PostData = {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  category: string;
  image?: string;
};

export type Post = {
  slug: string;
  data: PostData;
  content: string;
};

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    // Default to "Uncategorized" if category is missing or empty
    const category = data.category && data.category.trim() ? data.category : "Uncategorized";

    return {
      slug: fileName.replace(/\.md$/, ""),
      data: {
        title: data.title || "",
        date: data.date || "",
        excerpt: data.excerpt || "",
        tags: data.tags || [],
        category, // Ensured to have a value
        image: data.image || undefined,
      },
      content: matter(fileContents).content,
    };
  });

  return allPosts;
}

export function getPostsByCategory(category: string) {
  const allPosts = getAllPosts();

  return allPosts.filter((post) => {
    const postCategory = post.data.category?.trim() || "Uncategorized"; // Default to "Uncategorized"
    return postCategory.toLowerCase() === category.toLowerCase();
  });
}
