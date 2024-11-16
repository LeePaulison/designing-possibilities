// lib/markdownToHtml.js
import React from "react";
import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";
import rehypePrism from "rehype-prism-plus";

import CodeBlockWithCopy from "@/components/CodeBlockWithCopy";
import rehypeReact from "rehype-react";

const DebugWrapper = (props) => {
  return <CodeBlockWithCopy {...props} />;
};

export async function parseMarkdown(content) {
  const processedContent = await remark()
    .use(remarkParse) // Parse Markdown
    .use(remarkRehype, { allowDangerousHtml: true }) // Convert to HTML
    .use(rehypeRaw) // Allows raw HTML to be included
    .use(rehypePrism) // Add syntax highlighting
    .use(rehypeReact, {
      createElement: React.createElement,
      components: {
        pre: DebugWrapper,
      },
    })
    .use(rehypeStringify) // Converts output to HTML string
    .process(content);

  console.log("processedContent", processedContent);

  return processedContent.toString();
}
