import { getCategories, Category } from "@/lib/getCategories";
import { getPostsByCategory } from "@/lib/getPosts";
import PostCard from "@/components/ui/PostCard";

type Props = {
  params: { category: string };
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
      <h1 className='text-3xl font-bold mb-6'>{categoryData.title}</h1>
      <p className='mb-8'>{categoryData.description}</p>

      {/* Latest Posts in Category */}
      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Latest in {categoryData.title}</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {posts.slice(0, 4).map((post) => (
            <PostCard
              key={post.slug}
              title={post.data.title}
              excerpt={post.data.excerpt}
              date={post.data.date}
              category={post.data.category}
              slug={post.slug}
              image={post.data.image}
              tags={post.data.tags}
            />
          ))}
        </div>
      </section>

      {/* All Posts in Category */}
      <section>
        <h2 className='text-2xl font-semibold mb-4'>All Posts</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              title={post.data.title}
              excerpt={post.data.excerpt}
              date={post.data.date}
              category={post.data.category}
              slug={post.slug}
              image={post.data.image}
              tags={post.data.tags}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
