import { getAllPosts, Post } from "../../lib/getPosts";
import PostCard from "@/components/ui/PostCard";
import Link from "next/link";

export default async function BlogPage() {
  const posts: Post[] = getAllPosts();

  return (
    <section>
      <h1 className='text-4xl font-bold mb-6 text-primary'>All Blog Posts</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            slug={post.slug}
            title={post.data.title}
            excerpt={post.data.excerpt}
            date={post.data.date}
            category={post.data.category}
          />
        ))}
      </div>
    </section>
  );
}
