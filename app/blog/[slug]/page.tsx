// app/blog/[slug]/page.tsx
import { getAllPosts } from '../../../lib/getPosts';
import { parseMarkdown } from '../../../lib/markdownToHtml';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Define a default title and description in case the post data isn't available in `generateMetadata`.
export async function generateMetadata({ params }: Props) {
  const posts = await getAllPosts();
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  return {
    title: post ? post.data.title : 'Post',
    description: post ? post.data.excerpt : 'No description available',
  };
}

export default async function PostPage({ params }: Props) {
  const posts = await getAllPosts();
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const contentHtml = await parseMarkdown(post.content);

  return (
    <article className='container mx-auto px-4'>
      <h1 className='text-4xl font-bold mb-2'>{post.data.title}</h1>
      <p className='text-gray-600'>{post.data.date}</p>
      <div className='prose max-w-none' dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
}
