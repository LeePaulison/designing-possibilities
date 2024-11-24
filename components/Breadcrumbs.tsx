"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Breadcrumb = {
  name: string;
  href: string;
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean); // Remove empty segments (e.g., root)

  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([]);

  useEffect(() => {
    async function buildBreadcrumbs() {
      const breadcrumbs: Breadcrumb[] = [
        { name: "Home", href: "/" }, // Always include Home
      ];

      // Handle direct post navigation
      if (segments[0] === "blog" && segments[1] === "categories" && segments.length === 4) {
        const categorySlug = segments[2];
        const postSlug = segments[3];

        // Add category breadcrumb
        breadcrumbs.push({
          name: categorySlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
          href: `/blog/categories/${categorySlug}`,
        });

        // Add post breadcrumb
        breadcrumbs.push({
          name: postSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
          href: pathname, // Current page
        });

        setBreadcrumbs(breadcrumbs);
        return;
      }

      // General case: Build breadcrumbs from URL segments
      segments.forEach((segment, index) => {
        if (segment === "blog") return; // Skip "blog"
        const href = "/" + segments.slice(0, index + 1).join("/");
        breadcrumbs.push({
          name: segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
          href,
        });
      });

      setBreadcrumbs(breadcrumbs);
    }

    buildBreadcrumbs();
  }, [pathname]);

  // Don't render breadcrumbs on the root page
  if (breadcrumbs.length <= 1) return null;

  return (
    <nav aria-label='Breadcrumb' className='mb-4 text-sm text-stone-600'>
      <ul className='flex space-x-2'>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href} className='flex items-center'>
            {index > 0 && <span className='mx-1'>/</span>}
            {index === breadcrumbs.length - 1 ? (
              <span aria-current='page'>{breadcrumb.name}</span>
            ) : (
              <a href={breadcrumb.href} className='hover:underline text-amber-500'>
                {breadcrumb.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
