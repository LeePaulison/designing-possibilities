import { getAllPosts } from "@/lib/getPosts";
import { notFound } from "next/navigation";
import ClientPostPage from "./ClientPostPage";
import { get } from "http";

export default async function PostPage({ params }: { params: { category: string; post: string } }) {
  const { category, post } = await params;

  console.log("Params:", params);

  // Get All Posts
  const posts = getAllPosts();
  // Specific Post
  const postData = posts.find(
    (p) => p.slug.toLowerCase() === post.toLowerCase() && p.data.category.toLowerCase() === category.toLowerCase()
  );

  if (!postData) {
    notFound();
  }

  return <ClientPostPage post={postData} />;
}
