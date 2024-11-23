import "prismjs/themes/prism-tomorrow.css";
import "./globals.css";

import React, { ReactNode } from "react";
import DropdownMenu from "../components/DropdownMenu";
import { getUniqueCategories } from "@/lib/getPosts";

export const metadata = {
  title: "My Blog",
  description: "Exploring possibilities through words.",
};

// Example hardcoded categories (fetch dynamically later)
const categories = getUniqueCategories();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-stone-100 text-stone-900 font-sans flex'>
        {/* Sidebar */}
        <aside className='w-64 h-full my-auto bg-white shadow-md flex flex-col items-center py-8 px-4'>
          <div className='text-amber-500 text-4xl font-bold tracking-wider mb-12 relative'>
            <span className='block transform -rotate-45 leading-none'>Designing</span>
            <span className='block transform -rotate-45 leading-none ml-16'>Possibilities</span>
          </div>
          <nav className='mt-8 w-full'>
            <ul className='space-y-4 text-stone-700'>
              <li>
                <a href='/' className='block py-2 px-4 hover:bg-stone-200 rounded transition'>
                  Home
                </a>
              </li>
              <li>
                <a href='/blog' className='block py-2 px-4 hover:bg-stone-200 rounded transition'>
                  Blog
                </a>
              </li>
              <DropdownMenu categories={categories} />
              <li>
                <a href='/about' className='block py-2 px-4 hover:bg-stone-200 rounded transition'>
                  About
                </a>
              </li>
              <li>
                <a href='/contact' className='block py-2 px-4 hover:bg-stone-200 rounded transition'>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className='flex-1 p-8'>{children}</main>
      </body>
    </html>
  );
}
