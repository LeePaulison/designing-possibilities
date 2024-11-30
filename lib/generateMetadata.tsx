import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts } from "./getPosts"; // Adjust the import to match your file structure

type PageProps = {
  params: Promise<{
    category: string;
    post: string;
  }>;
};

export async function generateMetadata({ params }: { params: PageProps["params"] }): Promise<Metadata> {
  const { category, post } = await params;

  const posts = getAllPosts(); // Fetch all posts from your data source

  const postData = posts.find(
    (p) => p.slug.toLowerCase() === post.toLowerCase() && p.data.category.toLowerCase() === category.toLowerCase()
  );

  if (!postData) {
    notFound(); // Trigger Next.js 404 behavior if the post is not found
  }

  const canonicalUrl = `https://designing-possibilities.vercel.app/blog/${postData.slug}`;

  const metadata = {
    slug: postData.slug,
    title: postData.data.title,
    description: postData.data.excerpt,
    image: postData.data.image,
  };

  return {
    title: `${metadata.title} | Designing Possibilities`,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: canonicalUrl,
      images: metadata.image || "/default-image.webp",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: metadata.image || "/default-image.webp",
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}
