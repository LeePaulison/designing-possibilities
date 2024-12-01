import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";
import rehypePrism from "rehype-prism-plus";

import { Root, Element } from "hast";
import { visit } from "unist-util-visit";

function rehypeAddCopyButtons() {
  return (tree: Root) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName === "pre") {
        // Ensure the <pre> element has a relative class
        if (!node.properties) node.properties = {};

        const classNames = Array.isArray(node.properties.className)
          ? node.properties.className
          : typeof node.properties.className === "string"
          ? node.properties.className.split(" ")
          : [];

        node.properties.className = [...classNames, "relative"];
        // Add the copy button
        node.children.push({
          type: "element",
          tagName: "button",
          properties: {
            className: [
              "copy-button",
              "absolute",
              "right-2",
              "top-2",
              "bg-gray-700",
              "text-white",
              "px-2",
              "py-1",
              "rounded",
            ],
            onclick: `
            const button = this;
            navigator.clipboard.writeText(this.previousSibling.textContent)
              .then(() => {
                button.innerText = 'Copied!';
                setTimeout(() => { button.innerText = 'Copy'; }, 2000);
              })
              .catch(() => {
                button.innerText = 'Failed to Copy';
                setTimeout(() => { button.innerText = 'Copy'; }, 2000);
              });
          `,
          },
          children: [{ type: "text", value: "Copy" }],
        });
      }
    });
  };
}

export async function parseMarkdown(content: string) {
  const processedContent = await remark()
    .use(remarkParse) // Parse markdown
    .use(remarkRehype, { allowDangerousHtml: true }) // Convert to HTML
    .use(rehypeRaw) // Preserve raw HTML
    .use(rehypePrism) // Add syntax highlighting
    .use(rehypeAddCopyButtons) // Add copy buttons to code blocks
    .use(rehypeStringify) // Convert to an HTML string
    .process(content);

  return processedContent.toString();
}
