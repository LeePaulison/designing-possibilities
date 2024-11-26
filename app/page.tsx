import { getAllPosts, Post } from "../lib/getPosts";

import PostCard from "@/components/ui/PostCard";

export const metadata = {
  title: "Designing Possibilities",
  description: "Exploring possibilities through words.",
};

export default async function HomePage() {
  // Fetch all posts on the server
  const posts: Post[] = getAllPosts();

  return (
    <section className='container mx-auto py-8 px-4'>
      {/* Welcome Section */}
      <div className='bg-light-background dark:bg-dark-background py-20 text-center mb-12 rounded-lg shadow dark:shadow-dark-primary'>
        <h1 className='text-5xl font-serif font-bold mb-4 text-light-secondary dark:text-dark-secondary'>
          Designing Possibilities
        </h1>
        <p className='text-lg font-sans max-w-2xl mx-auto text-light-text dark:text-dark-text'>
          Dive into insightful articles and thoughts on technology, design, and creativity.
        </p>
      </div>

      {/* Blog Post Cards */}
      <div>
        <h2 className='text-4xl font-bold mb-6 text-light-primary dark:text-dark-primary'>Latest Blog Posts</h2>
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
