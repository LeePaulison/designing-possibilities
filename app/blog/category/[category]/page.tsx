import { getAllPosts, getUniqueCategories } from "@/lib/getPosts";
import DefaultLayout from "@/components/DefaultLayout";

type Props = {
  params: {
    category: string;
  };
};

export async function generateStaticParams() {
  const categories = getUniqueCategories();
  return categories.map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  return {
    title: `Category: ${category} - Designing Possibilities`,
    description: `Browse all posts in the ${category} category.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const posts = getAllPosts().filter((post) => post.data.category === category);

  return (
    <DefaultLayout>
      <div>
        <h1 className='text-3xl font-bold mb-4'>Posts in "{category}"</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug} className='mb-4'>
              <a href={`/blog/${post.slug}`} className='text-amber-500'>
                <h2 className='text-xl font-semibold'>{post.data.title}</h2>
              </a>
              <p className='text-stone-700'>{post.data.excerpt}</p>
              <p className='text-sm text-stone-500'>{post.data.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </DefaultLayout>
  );
}
