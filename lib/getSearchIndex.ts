import { getAllPosts } from "@/lib/getPosts";

export function getSearchIndex() {
  const posts = getAllPosts(); // Fetch posts from Markdown files
  return posts.map((post) => ({
    title: post.data.title,
    description: post.data.excerpt,
    category: post.data.category,
    slug: post.slug, // For linking to the post
  }));
}
