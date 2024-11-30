import { getAllPosts } from "@/lib/getPosts";
import { notFound } from "next/navigation";
import ClientPostPage from "./ClientPostPage";
import { generateMetadata as generatePostMetadata } from "@/lib/generateMetadata";

type PageProps = {
  params: Promise<{
    category: string;
    post: string;
  }>;
};

export async function generateMetadata({ params }: { params: PageProps["params"] }) {
  return generatePostMetadata({ params });
}

export default async function PostPage({ params }: { params: PageProps["params"] }) {
  const { category, post } = await params;

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
