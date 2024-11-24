"use client";

import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean); // Remove empty segments (e.g., root)

  // Utility to format segment names
  const formatSegment = (segment: string) => {
    return decodeURIComponent(segment)
      .replace(/-/g, " ") // Replace hyphens with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word
  };

  // Don't render breadcrumbs on the root page
  if (segments.length === 0) return null;

  return (
    <nav aria-label='Breadcrumb' className='mb-4 text-sm text-stone-600'>
      <ul className='flex space-x-2'>
        {/* Home Breadcrumb */}
        <li>
          <a href='/' className='hover:underline text-amber-500'>
            Home
          </a>
        </li>

        {segments.map((segment, index) => {
          // Skip "blog" from the breadcrumb hierarchy
          if (segment === "blog") return null;

          const isLast = index === segments.length - 1 || segments[index + 1] === "blog";
          const href = "/" + segments.slice(0, index + 1).join("/");

          return (
            <li key={index} className='flex items-center'>
              <span className='mx-1'>/</span>
              {isLast ? (
                <span aria-current='page'>{formatSegment(segment)}</span>
              ) : (
                <a href={href} className='hover:underline text-amber-500'>
                  {formatSegment(segment)}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
