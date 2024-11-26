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
        className='w-full flex justify-between items-center py-2 px-4 bg-background-light dark:bg-background-dark hover:bg-stone-200 hover:dark:bg-stone-800 rounded transition'
        aria-label='Categories'
      >
        Categories
        <span>▼</span>
      </DropdownMenu.Trigger>

      {/* Dropdown Content */}
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className='flex flex-col bg-background-light dark:bg-background-dark rounded shadow-lg p-2 w-56'
          sideOffset={5}
          align='start'
        >
          {categories.map((category) => (
            <DropdownMenu.Item
              key={category.slug}
              className='px-4 py-2 text-stone-700 dark:text-stone-300 hover:bg-stone-200 hover:dark:bg-stone-800 rounded cursor-pointer'
              asChild
            >
              <Link href={`/blog/categories/${category.slug}`}>{category.title}</Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
