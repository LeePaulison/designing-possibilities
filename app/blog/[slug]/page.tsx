import { fetchPosts } from "@/app/actions/getPosts";
import { notFound } from "next/navigation";
import ClientPostPage from "./ClientPostPage";

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  // Fetch posts on the server
  const posts = await fetchPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <ClientPostPage post={post} />;
}
