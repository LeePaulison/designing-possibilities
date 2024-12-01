import { getAllPosts, Post } from "../lib/getPosts";

import PostCard from "@/components/PostCard";

import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Designing Possibilities | Home",
    description:
      "Explore accessibility, front-end development, and design practices with Designing Possibilities, a blog dedicated to inclusive and inspiring web experiences.",
    alternates: {
      canonical: "https://designing-possibilities.vercel.app",
    },
    openGraph: {
      title: "Designing Possibilities | Home",
      description:
        "Explore accessibility, front-end development, and design practices with Designing Possibilities, a blog dedicated to inclusive and inspiring web experiences.",
      url: "https://designing-possibilities.vercel.app",
      images: "/default-image.webp", // Replace with your default image
    },
    twitter: {
      card: "summary_large_image",
      title: "Designing Possibilities | Home",
      description:
        "Explore accessibility, front-end development, and design practices with Designing Possibilities, a blog dedicated to inclusive and inspiring web experiences.",
      images: "/default-image.webp",
    },
  };
};

export default async function HomePage() {
  // Fetch all posts on the server
  const posts: Post[] = getAllPosts();

  return (
    <section className='container mx-auto py-8 px-4'>
      {/* Welcome Section */}
      <div className='bg-light-background dark:bg-dark-background py-20 text-center mb-12 p-2 md:p-4 rounded-lg shadow dark:shadow-dark-primary'>
        <h1
          className='
  text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
  font-serif font-bold
  mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12
  text-center
  text-light-secondary dark:text-dark-secondary
  leading-tight sm:leading-snug md:leading-normal
  tracking-wide sm:tracking-normal md:tracking-tight
'
        >
          Designing Possibilities
        </h1>
        <p className='text-lg font-sans max-w-2xl mx-auto text-light-text dark:text-dark-text'>
          Dive into insightful articles and thoughts on technology, design, and creativity.
        </p>
      </div>

      {/* Blog Post Cards */}
      <div>
        <h2 className='text-4xl font-bold mb-6 text-light-primary dark:text-dark-primary'>Latest Blog Posts</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              slug={post.slug}
              title={post.data.title}
              excerpt={post.data.excerpt}
              date={post.data.date}
              image={post.data.image}
              alt={post.data.alt}
              tags={post.data.tags}
              category={post.data.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
