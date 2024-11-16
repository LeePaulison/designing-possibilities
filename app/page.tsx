import { getAllPosts, Post } from "../lib/getPosts";
import Link from "next/link";

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
        <h1 className='text-5xl font-bold mb-4'>Welcome to My Blog</h1>
        <p className='text-lg max-w-2xl mx-auto'>
          Dive into insightful articles and thoughts on technology, design, and creativity.
        </p>
      </div>

      {/* Blog Post Cards */}
      <div>
        <h2 className='text-4xl font-bold mb-6 text-primary'>Latest Blog Posts</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {posts.map((post) => (
            <div key={post.slug} className='border rounded-lg p-4 shadow hover:shadow-lg'>
              <h3 className='text-2xl font-semibold mb-2 text-secondary'>{post.data.title}</h3>
              <p className='text-sm text-primary'>{post.data.date}</p>
              <p className='mt-2 text-primary'>{post.data.excerpt}</p>
              {post.data.tags && (
                <div className='mt-4 flex gap-2'>
                  {post.data.tags.map((tag) => (
                    <span key={tag} className='bg-primary text-primary px-2 py-1 rounded text-sm'>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <Link href={`/blog/${post.slug}`} className='text-primary hover:underline mt-4 block'>
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
