import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://designing-possibilities.vercel.app";

  // Fetch or dynamically generate URLs
  const staticPaths = [`${baseUrl}/`, `${baseUrl}/categories`];

  // Example dynamic paths
  const categories = ["frontend", "accessibility", "react"]; // Replace with dynamic categories
  const categoryPaths = categories.map((category) => `${baseUrl}/categories/${category}`);

  const allPaths = [...staticPaths, ...categoryPaths];

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <priority>0.8</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  return new NextResponse(sitemap.trim(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
