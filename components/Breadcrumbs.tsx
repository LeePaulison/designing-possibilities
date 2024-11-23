"use client";

import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean); // Remove empty segments (e.g., root)

  // Don't render breadcrumbs on the root page
  if (segments.length === 0) return null;

  return (
    <nav aria-label='Breadcrumb' className='mb-4 text-sm text-stone-600'>
      <ul className='flex space-x-2'>
        <li>
          <a href='/' className='hover:underline text-amber-500'>
            Home
          </a>
        </li>
        {segments.map((segment, index) => {
          if (segment === "category") return null;

          const isLast = index === segments.length - 1;
          const href = "/" + segments.slice(0, index + 1).join("/");

          return (
            <li key={index} className='flex items-center'>
              <span className='mx-1'>/</span>
              {isLast ? (
                <span>{decodeURIComponent(segment)}</span> // Decode for readability
              ) : (
                <a href={href} className='hover:underline text-amber-500'>
                  {decodeURIComponent(segment)}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
