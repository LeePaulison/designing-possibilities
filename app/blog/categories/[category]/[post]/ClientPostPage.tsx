"use client";

import React, { useEffect, useState } from "react";
import { parseMarkdown } from "@/lib/markdownToHtml";
import { useAddCopyButtons } from "@/app/hooks/useAddCopyButtons";
import Link from "next/link";

type Post = {
  slug: string;
  content: string;
  data: {
    title: string;
    date: string;
    excerpt: string;
    tags?: string[];
  };
};

export default function ClientPostPage({ post }: { post: Post }) {
  const [contentHtml, setContentHtml] = useState<string>("");

  // Add copy buttons to the rendered content
  useAddCopyButtons(contentHtml);

  // Parse the Markdown content on the client
  useEffect(() => {
    const parseContent = async () => {
      const parsedHtml = await parseMarkdown(post.content);
      setContentHtml(parsedHtml);
    };

    parseContent();
  }, [post.content]);

  return (
    <article className='container mx-auto py-8 px-4 max-w-4xl bg-neutral-light shadow rounded-lg'>
      {/* Post Header */}
      <header className='mb-8'>
        <h1 className='text-4xl font-bold text-primary mb-4'>{post.data.title}</h1>
        <p className='text-neutral-dark text-sm'>{post.data.date}</p>
        {post.data.tags && (
          <div className='flex gap-2 mt-4'>
            {post.data.tags.map((tag) => (
              <span key={tag} className='bg-primary-light text-primary-dark px-2 py-1 rounded text-sm'>
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Post Content */}
      <div className='prose prose-lg text-neutral-dark' dangerouslySetInnerHTML={{ __html: contentHtml }} />

      {/* Back to Blog Link */}
      <Link href='/blog' className='inline-block mt-8 text-primary hover:underline'>
        ← Back to Blog
      </Link>
    </article>
  );
}
