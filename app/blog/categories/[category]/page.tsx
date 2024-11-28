import { getCategories, Category } from "@/lib/getCategories";
import { getPostsByCategory } from "@/lib/getPosts";
import PostCard from "@/components/PostCard";

type PageProps = {
  params: Promise<{
    category: string;
  }>;
};

export default async function CategoryPage({ params }: { params: PageProps["params"] }) {
  const { category } = await params;
  const categoryData = getCategories().find((cat: Category) => cat.slug === category);
  const posts = getPostsByCategory(category);

  if (!categoryData) {
    return <p className='text-light-secondary dark:text-dark-secondary text-center mt-8'>Category not found.</p>;
  }

  return (
    <div className='container mx-auto px-4 py-8 max-w-6xl'>
      {/* Category Header */}
      <header className='mb-8'>
        <h1 className='text-3xl font-serif font-bold text-light-primary dark:text-dark-primary mb-4'>
          {categoryData.title}
        </h1>
        <p className='text-light-secondary dark:text-dark-secondary'>{categoryData.description}</p>
      </header>

      {/* Latest Posts in Category */}
      <section className='mb-8'>
        <h2 className='text-2xl font-semibold text-light-secondary dark:text-dark-secondary mb-4'>
          Latest in {categoryData.title}
        </h2>
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
        <h2 className='text-2xl font-semibold text-light-secondary dark:text-dark-secondary mb-4'>All Posts</h2>
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
