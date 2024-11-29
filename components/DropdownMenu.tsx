"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Category } from "@/lib/getCategories";
import Link from "next/link";

type DropdownMenuProps = {
  categories: Category[];
};

export default function RadixDropdownMenu({ categories }: DropdownMenuProps) {
  return (
    <DropdownMenu.Root>
      {/* Trigger */}
      <DropdownMenu.Trigger
        className='w-full flex justify-between items-center py-2 px-4 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text hover:ring-2 hover:ring-light-accent dark:hover:ring-dark-accent rounded transition'
        aria-label='Categories'
      >
        Explore Topics
        <span className='text-light-secondary dark:text-dark-secondary'>▼</span>
      </DropdownMenu.Trigger>

      {/* Dropdown Content */}
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className='flex flex-col bg-light-background dark:bg-dark-background rounded shadow p-2 w-56 shadow-light-primary dark:shadow-dark-accent'
          sideOffset={5}
          align='start'
        >
          {categories.map((category) => (
            <DropdownMenu.Item
              key={category.slug}
              className='px-4 py-2 text-light-text dark:text-dark-text hover:ring-2 hover:ring-light-accent dark:hover:ring-dark-accent rounded cursor-pointer transition'
              asChild
            >
              <Link href={`/blog/categories/${category.slug}`} className='font-sans'>
                {category.title}
              </Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
