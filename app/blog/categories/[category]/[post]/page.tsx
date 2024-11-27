import { getAllPosts } from "@/lib/getPosts";
import { notFound } from "next/navigation";
import ClientPostPage from "./ClientPostPage";
import { Metadata } from "next";

type MetadataType = {
  slug: string;
  title: string;
  description: string;
  image?: string;
};

type PageProps = {
  params: Promise<{
    category: string;
    post: string;
  }>;
};

export async function generateMetadata({ params }: { params: PageProps["params"] }): Promise<Metadata> {
  const { category, post } = await params;
  const posts = getAllPosts();

  const postData = posts.find(
    (p) => p.slug.toLowerCase() === post.toLowerCase() && p.data.category.toLowerCase() === category.toLowerCase()
  );

  if (!postData) {
    notFound();
  }

  const metadata: MetadataType = {
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
      url: `https://example.com/blog/${metadata.slug}`,
      images: metadata.image || "/default-image.jpg",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: metadata.image || "/default-image.jpg",
    },
  };
}

export default async function PostPage({ params }: { params: PageProps["params"] }) {
  const { category, post } = await params;

  // Get All Posts
  const posts = getAllPosts();
  // Specific Post
  const postData = posts.find(
    (p) => p.slug.toLowerCase() === post.toLowerCase() && p.data.category.toLowerCase() === category.toLowerCase()
  );

  if (!postData) {
    notFound();
  }

  return <ClientPostPage post={postData} />;
}
