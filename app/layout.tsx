import "prismjs/themes/prism-tomorrow.css";
import "./globals.css";

import React, { ReactNode } from "react";
import DropdownMenu from "../components/DropdownMenu";
import { getCategories } from "@/lib/getCategories";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "My Blog",
  description: "Exploring possibilities through words.",
};

// Example hardcoded categories (fetch dynamically later)
const categories = getCategories();

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
                <Link href='/' className='block py-2 px-4 hover:bg-stone-200 rounded transition'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/blog/categories' className='block py-2 px-4 hover:bg-stone-200 rounded transition'>
                  Categories
                </Link>
              </li>
              <DropdownMenu categories={categories} />
              <li>
                <Link href='/about' className='block py-2 px-4 hover:bg-stone-200 rounded transition'>
                  About
                </Link>
              </li>
              <li>
                <Link href='/contact' className='block py-2 px-4 hover:bg-stone-200 rounded transition'>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className='flex-1 p-8'>
          <Breadcrumbs />
          {children}
        </main>
      </body>
    </html>
  );
}
