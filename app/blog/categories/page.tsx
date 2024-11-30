import { getCategories, Category } from "@/lib/getCategories";
import { getAllPosts, Post } from "@/lib/getPosts";
import Link from "next/link";
import { Metadata } from "next";

import PostCard from "@/components/PostCard";

export const generateMetadata = (): Metadata => {
  return {
    title: "Designing Possibilities | Categories",
    description:
      "Browse categories on Designing Possibilities to explore posts about accessibility, front-end development, and web design practices.",
    alternates: {
      canonical: "https://designing-possibilities.vercel.app/categories",
    },
    openGraph: {
      title: "Designing Possibilities | Categories",
      description:
        "Browse categories on Designing Possibilities to explore posts about accessibility, front-end development, and web design practices.",
      url: "https://designing-possibilities.vercel.app/categories",
      images: "/default-image.webp", // Replace with your default image
    },
    twitter: {
      card: "summary_large_image",
      title: "Designing Possibilities | Categories",
      description:
        "Browse categories on Designing Possibilities to explore posts about accessibility, front-end development, and web design practices.",
      images: "/default-image.webp",
    },
  };
};

export default function CategoriesPage() {
  const categories = getCategories();
  const latestPosts = getAllPosts().slice(0, 4); // Latest 4 posts

  return (
    <div className='container mx-auto px-4 py-8 max-w-6xl'>
      <h1 className='text-3xl font-serif font-bold text-light-primary dark:text-dark-primary mb-6'>Categories</h1>

      {/* Latest Posts Section */}
      <section className='mb-8'>
        <h2 className='text-2xl font-semibold text-light-secondary dark:text-dark-secondary mb-4'>Latest Posts</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {latestPosts.map((post: Post) => (
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

      {/* Categories Section */}
      <section>
        <h2 className='text-2xl font-semibold text-light-secondary dark:text-dark-secondary mb-4'>
          Explore Categories
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {categories.map((category: Category) => (
            <div
              key={category.slug}
              className='p-4 border border-light-secondary dark:border-dark-secondary bg-light-background dark:bg-dark-background rounded shadow-md hover:shadow-md hover:dark:shadow-dark-primary transition'
            >
              <h3 className='text-xl font-serif font-bold text-light-primary dark:text-dark-primary mb-2'>
                <Link
                  href={`/blog/categories/${category.slug}`}
                  className='hover:underline text-light-accent dark:text-dark-accent'
                >
                  {category.title}
                </Link>
              </h3>
              <p className='text-light-secondary dark:text-dark-secondary'>{category.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
