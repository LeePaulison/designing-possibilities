import { getAllPosts, Post } from '../../lib/getPosts';
import Link from 'next/link';

export default async function Blog() {
  const posts: Post[] = await getAllPosts();

  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-4xl font-bold mb-8'>Blog</h1>
      <ul>
        {posts.map(({ slug, data }) => (
          <li key={slug} className='mb-4'>
            <Link href={`/blog/${slug}`} className='text-xl font-semibold text-blue-600 hover:underline'>
              {data.title}
            </Link>
            <p className='text-gray-600'>{data.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
