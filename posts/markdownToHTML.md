---
title: "Markdown to HTML"
date: "2024-12-07"
excerpt: "Markdown is a developer’s best friend for creating clean, formatted content quickly."
tags: ["markdown", "html", "development"]
category: "Designing-Possibilities"
image: "/markdownToHTMLDataflow.drawio.svg"
alt: "Default Image | Welcome to Designing Possibilities"
---

# Markdown to HTML

A Guide to taking your Markdown files and converting them to HTML.

 Please note, that from this point on, any code presented, functions within a Next.JS 15 + SSR app written in TypeScript.

# Introduction

Markdown is a developer’s best friend for creating clean, formatted content quickly. Whether it’s for blog posts, documentation, or project notes, Markdown provides a simple way to write structured text that supports everything from headings to code snippets. Its simplicity allows you to focus on content creation, avoiding the complexity of inline HTML.

But Markdown alone isn’t enough for most applications. To integrate Markdown into a dynamic website or application, you need tools that can extract its content, convert it to usable formats, and enrich it with metadata. This is where **gray-matter** shines.

Gray-matter is a lightweight Node.js package designed to transform Markdown files into structured, easy-to-use objects. Let’s see it in action. Consider this Markdown file:

```markdown
markdown
Copy code
---
title: "Hello World"
---

# Hello World

```

When processed with gray-matter, the result is:

```jsx
javascript
Copy code
{
  data: {
    title: "Hello World"
  },
  content: "# Hello World"
}

```

By separating content (`content`) from metadata (`data`), gray-matter simplifies how you manage and render dynamic content in your application. Whether you’re building a blog, a documentation system, or a portfolio, this tool makes Markdown not just usable, but incredibly powerful.

---

## Why Metadata Matters

Metadata is the unsung hero of modern web development. It’s the invisible layer of information that enables organization, discovery, and presentation of content.

Take this blog, for instance. Metadata powers critical features, such as:

- **Organization:** Sorting posts by category or tag.
- **Searchability:** Improving SEO by adding structured data like titles, descriptions, and keywords.
- **Navigation:** Automatically generating menus or archives.

Imagine you’re managing a documentation site. Metadata can make tasks like these seamless:

- Grouping topics into logical categories or subcategories.
- Enabling advanced search and filtering options by tags or author.
- Creating dynamic pages, such as “Most Viewed” or “Recently Added.”

Metadata also unlocks personalization. For example, you can:

- Recommend articles based on user interests or tags.
- Highlight trending posts by view counts or upvotes.
- Automatically generate a Table of Contents based on heading levels.

Even something as simple as adding a `title` to your metadata makes content more meaningful to both users and search engines. By leveraging tools like gray-matter, you can extract and utilize this metadata seamlessly, creating content-rich, user-friendly applications.

---

## Setup and Installation

### Installing Gray-Matter

To get started, install gray-matter using npm:

```bash
npm install gray-matter
```

Once installed, you can use it to parse Markdown files into structured objects. Here’s an example function for processing multiple Markdown files in a directory:

```tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getAllPosts(): Post[] {
  const postsDirectory = path.join(process.cwd(), "posts");
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const category = data.category && data.category.trim() ? data.category : "Uncategorized";

    return {
      slug: fileName.replace(/\.md$/, ""),
      data: {
        title: data.title || "",
        date: data.date || "",
        excerpt: data.excerpt || "",
        tags: data.tags || [],
        category,
        image: data.image || undefined,
        alt: data.alt || undefined,
      },
      content,
    };
  });
}
```

### Breaking It Down

- **Metadata (`data`):** Includes everything from the frontmatter, such as `title`, `date`, and `tags`. Adjust the fields to suit your project’s needs.
- **Content (`content`):** Contains the Markdown body, ready for further processing.

This function reads Markdown files, extracts their metadata and content, and returns an array of post objects. At this stage, you have structured data, but the `content` key is still raw Markdown.

To render it as HTML, you’ll need additional tools like **remark** and **rehype**.

![Markdown to HTML Flowchart](/markdownToHTMLDataflow.drawio.svg)

Markdown to HTML Flowchart

## Converting Markdown to Usable HTML

To render the content as HTML, you’ll need two additional packages:

- [**remark](https://www.npmjs.com/package/remark):** Converts Markdown to HTML.
- [**rehype](https://www.npmjs.com/package/rehype):** Processes the HTML for serialization or further customization.

Install both packages:

```bash
npm install remark rehype
```

### Why Both?

- **Remark:** Transforms the Markdown into HTML.
- **Rehype:** Makes the resulting HTML more versatile by converting it into a format that’s easier to manipulate or serialize. This is especially useful if you need to customize your HTML before rendering.

Here’s how you might integrate these tools:

```tsx
typescript
Copy code
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

export async function markdownToHtml(markdown: string): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(markdown);

  return String(file);
}

```

### Next Steps

Now you can take the `content` key from the gray-matter object and pass it through the `markdownToHtml` function to render it as HTML. For example:

```tsx
const posts = getAllPosts();
const firstPostHtml = await markdownToHtml(posts[0].content);
```

This approach allows you to:

1. Organize and extract metadata for SEO and dynamic content organization.
2. Render your Markdown content into customizable, serializable HTML.

With these tools in place, you’re ready to integrate Markdown files seamlessly into your app, whether it’s for a blog, documentation, or another content-driven project.

### Why Rehype

As a developer, you’ve probably wanted to enhance your blog with features that make your content more interactive and user-friendly. Take code blocks, for example—adding a “Copy to Clipboard” button can make it easier for readers to use your examples in their projects. With **rehype**, this kind of customization is not just possible—it’s incredibly straightforward.

Let’s walk through how you can add a “Copy to Clipboard” button to your code blocks using rehype.

### What You’ll Need

To get started, you’ll need a couple of additional packages:

- [**hast](https://github.com/syntax-tree/hast):** The HTML Abstract Syntax Tree format that rehype works with.
- [**unist-util-visit](https://github.com/syntax-tree/unist-util-visit):** A utility for traversing the syntax tree to locate and modify specific nodes.

Install them via npm:

```bash
npm install hast unist-util-visit
```

### Adding Copy Buttons

Here’s a custom rehype plugin that appends a “Copy” button to each `<pre>` tag in your Markdown content:

```tsx
import { visit } from "unist-util-visit";

function rehypeAddCopyButtons() {
  return (tree: Root) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName === "pre") {
        // Ensure the <pre> element has a relative class for positioning
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
```

### Updating `parseMarkdown`

To use this plugin, update your Markdown processing function to include it in the rehype pipeline. Here’s how your `parseMarkdown` function might look:

```tsx
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypePrism from "rehype-prism";
import rehypeStringify from "rehype-stringify";

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
```

### What You’ll Get

With this setup, your code blocks will have a clean, functional “Copy” button that works seamlessly. The `rehypeAddCopyButtons` plugin ensures every `<pre>` tag gets an appended button, and the button itself uses a simple `navigator.clipboard` API to copy the code.

This is what makes rehype so powerful—it lets you modify your content dynamically while processing it. By combining it with other plugins like **remark** and **rehype-prism**, you can build highly customizable content pipelines tailored to your needs.

# Wrapping It Up

Markdown is an incredibly flexible tool for creating content, and with the right workflow, you can unlock its full potential. Tools like gray-matter, remark, and rehype allow you to transform simple Markdown files into structured, interactive content that’s ready for the web.

Whether you’re building a blog or documentation site, the ability to separate content from metadata, convert it to HTML, and enhance it dynamically with plugins gives you control and flexibility.

Now it’s your turn! Try incorporating these techniques into your next project. Start small—parse a Markdown file and extract metadata—and build from there. With practice, you’ll see how these tools can simplify and supercharge your development process.