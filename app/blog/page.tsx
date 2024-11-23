import { getAllPosts, Post } from "../../lib/getPosts";
import Link from "next/link";
import DefaultLayout from "@/components/DefaultLayout";

export default async function BlogPage() {
  const posts: Post[] = getAllPosts();

  return (
    <DefaultLayout>
      <section>
        <h1 className='text-4xl font-bold mb-6 text-primary'>All Blog Posts</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {posts.map((post) => (
            <div key={post.slug} className='border rounded-lg p-4 shadow hover:shadow-lg bg-neutral-light'>
              <h2 className='text-2xl font-semibold mb-2 text-primary'>{post.data.title}</h2>
              <p className='text-sm text-neutral-dark'>{post.data.date}</p>
              <p className='mt-2 text-neutral-dark'>{post.data.excerpt}</p>
              {post.data.tags && (
                <div className='mt-4 flex gap-2'>
                  {post.data.tags.map((tag) => (
                    <span key={tag} className='bg-primary-light text-primary-dark px-2 py-1 rounded text-sm'>
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
      </section>
    </DefaultLayout>
  );
}
