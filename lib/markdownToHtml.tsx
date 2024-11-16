import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";
import rehypePrism from "rehype-prism-plus";

export async function parseMarkdown(content: string) {
  const processedContent = await remark()
    .use(remarkParse) // Parse markdown
    .use(remarkRehype, { allowDangerousHtml: true }) // Convert to HTML
    .use(rehypeRaw) // Preserve raw HTML
    .use(rehypePrism) // Add syntax highlighting
    .use(rehypeStringify) // Convert to an HTML string
    .process(content);

  return processedContent.toString();
}
