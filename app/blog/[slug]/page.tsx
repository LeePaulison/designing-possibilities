import { getAllPosts, Post } from '../../../lib/getPosts';
import { remark } from 'remark';
import html from 'remark-html';

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === params.slug);
  return {
    title: post?.data.title || 'Post',
    description: post?.data.excerpt || '',
  };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return <p>Post not found</p>;
  }

  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <article className='container mx-auto px-4'>
      <h1 className='text-4xl font-bold mb-2'>{post.data.title}</h1>
      <p className='text-gray-600'>{post.data.date}</p>
      <div className='prose max-w-none' dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
}
