import { NextResponse } from "next/server";

export const GET = () => {
  const content = `
    User-agent: *
    Allow: /
    Sitemap: https://designing-possibilities.vercel.app/sitemap.xml
  `;
  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
