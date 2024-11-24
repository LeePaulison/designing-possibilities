import { getAllPosts, Post } from "../lib/getPosts";
import Link from "next/link";

import PostCard from "@/components/ui/PostCard";

export const metadata = {
  title: "My Blog",
  description: "Exploring possibilities through words.",
};

export default async function HomePage() {
  // Fetch all posts on the server
  const posts: Post[] = getAllPosts();

  return (
    <section className='container mx-auto py-8 px-4'>
      {/* Welcome Section */}
      <div className='bg-primary text-primary py-20 text-center mb-12 rounded-lg shadow'>
        <h1 className='text-5xl font-bold mb-4'>Designing Possibilities</h1>
        <p className='text-lg max-w-2xl mx-auto'>
          Dive into insightful articles and thoughts on technology, design, and creativity.
        </p>
      </div>

      {/* Blog Post Cards */}
      <div>
        <h2 className='text-4xl font-bold mb-6 text-primary'>Latest Blog Posts</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              slug={post.slug}
              title={post.data.title}
              excerpt={post.data.excerpt}
              date={post.data.date}
              image={post.data.image}
              tags={post.data.tags}
              category={post.data.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
