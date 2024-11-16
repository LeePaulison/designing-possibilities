"use client";

import React, { useEffect, useState } from "react";
import { parseMarkdown } from "../../../lib/markdownToHtml";
import { useAddCopyButtons } from "../../hooks/useAddCopyButtons";

type Post = {
  slug: string;
  content: string;
  data: {
    title: string;
    date: string;
    excerpt: string;
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
    <article className='container mx-auto px-4'>
      <h1 className='text-4xl font-bold mb-2'>{post.data.title}</h1>
      <p className='text-gray-600'>{post.data.date}</p>
      <div className='prose max-w-none' dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
}
