"use client";

import { useState } from "react";

type DropdownMenuProps = {
  categories: string[];
};

export default function DropdownMenu({ categories }: DropdownMenuProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <li>
      <div className='relative'>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className='w-full flex justify-between items-center py-2 px-4 hover:bg-stone-200 rounded transition'
        >
          Categories
          <span>{dropdownOpen ? "▲" : "▼"}</span>
        </button>
        {dropdownOpen && (
          <ul className='absolute left-0 mt-2 bg-white shadow rounded w-full'>
            {categories.map((category) => (
              <li key={category}>
                <a href={`/blog/category/${category}`} className='block py-2 px-4 hover:bg-stone-200 transition'>
                  {category}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}
