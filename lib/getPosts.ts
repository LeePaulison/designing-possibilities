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

    return {
      slug: fileName.replace(/\.md$/, ""),
      data: {
        title: data.title || "",
        date: data.date || "",
        excerpt: data.excerpt || "",
        tags: data.tags || [],
        category: data.category || "Uncategorized",
      },
      content: matter(fileContents).content,
    };
  });

  return allPosts;
}

export function getUniqueCategories() {
  const posts = getAllPosts();
  const categories = new Set<string>();

  posts.forEach((post) => {
    if (post.data.category) {
      categories.add(post.data.category);
    }
  });
  return Array.from(categories);
}
