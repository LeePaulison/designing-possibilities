import { getPostsByCategory } from "@/lib/getPosts";
import { getCategories } from "@/lib/getCategories";

type Props = {
  params: { category: string };
};

type Category = {
  slug: string;
  title: string;
  description: string;
};

export default function CategoryPage({ params }: Props) {
  const { category } = params;
  const categoryData = getCategories().find((cat: Category) => cat.slug === category);
  const posts = getPostsByCategory(category);

  if (!categoryData) {
    return <p>Category not found.</p>;
  }

  return (
    <div>
      <h1 className='text-3xl font-bold mb-4'>{categoryData.title}</h1>
      <p className='mb-6'>{categoryData.description}</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {posts.map((post) => (
          <div key={post.slug} className='p-4 border rounded shadow-md'>
            <h2 className='text-xl font-semibold mb-2'>
              <a href={`/blog/${post.slug}`} className='hover:underline text-amber-500'>
                {post.data.title}
              </a>
            </h2>
            <p className='text-sm text-stone-500'>{post.data.date}</p>
            <p>{post.data.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
