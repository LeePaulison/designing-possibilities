"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { formatCategoryForDisplay, splitIntoWords } from "@/lib/utilities";

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Ensure proper splitting and filtering of segments
  const segments = pathname?.split("/").filter((segment) => segment !== "" && segment !== "blog"); // Remove empty and 'blog' segments

  // Don't render breadcrumbs on the root page
  if (segments?.length === 0) return null;

  return (
    <nav aria-label='Breadcrumb' className='mb-4 text-sm text-light-secondary dark:text-dark-secondary font-sans'>
      <ul className='flex space-x-2'>
        {/* Always include Home */}
        <li>
          <Link href='/' className='hover:underline text-light-text dark:text-dark-text' aria-label='Home Breadcrumb'>
            Home
          </Link>
        </li>

        {segments?.map((segment, index) => {
          const isLast = index === segments.length - 1;

          // Handle "Categories" special case
          if (segment === "categories") {
            return (
              <li key={index} className='flex items-center'>
                <span className='text-light-text dark:text-dark-text mx-1'>/</span>
                <Link
                  href='/blog/categories'
                  className='hover:underline text-light-accent dark:text-dark-accent'
                  aria-label='Categories Breadcrumb'
                >
                  Categories
                </Link>
              </li>
            );
          }

          // Handle Category link
          if (segments[0] === "categories" && index === 1) {
            const href = `/blog/categories/${segment}`;
            return (
              <li key={index} className='flex items-center text-light-text dark:text-dark-text'>
                <span className='mx-1'>/</span>
                {isLast ? (
                  <span className='text-light-text dark:text-dark-text' aria-current='page'>
                    {formatCategoryForDisplay(segment)}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className='hover:underline text-light-accent dark:text-dark-accent'
                    aria-label={`${formatCategoryForDisplay(segment)} Breadcrumb`}
                  >
                    {formatCategoryForDisplay(segment)}
                  </Link>
                )}
              </li>
            );
          }

          // Handle Post (last breadcrumb)
          if (segments[0] === "categories" && index === segments.length - 1) {
            return (
              <li key={index} className='flex items-center'>
                <span className='text-light-text dark:text-dark-text mx-1'>/</span>
                <span className='text-light-text dark:text-dark-text' aria-current='page'>
                  {splitIntoWords(segment)}
                </span>
              </li>
            );
          }

          const href = "/" + segments.slice(0, index + 1).join("/");

          return (
            <li key={index} className='flex items-center'>
              <span className='mx-1'>/</span>
              {isLast ? (
                <span className='text-light-text dark:text-dark-text' aria-current='page'>
                  {formatCategoryForDisplay(segment)}
                </span>
              ) : (
                <Link
                  href={href}
                  className='hover:underline text-light-accent dark:text-dark-accent'
                  aria-label={`${formatCategoryForDisplay(segment)} Breadcrumb`}
                >
                  {formatCategoryForDisplay(segment)}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
