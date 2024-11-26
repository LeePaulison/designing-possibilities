import "prismjs/themes/prism-tomorrow.css";
import "./globals.css";

import React, { ReactNode } from "react";
import { getCategories } from "@/lib/getCategories";
import Breadcrumbs from "@/components/Breadcrumbs";
import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ui/ThemeToggle";

export const metadata = {
  title: "Designing Possibilities",
  description: "Exploring the possibilities found in accessible front-end design.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const categories = getCategories();

  return (
    <html lang='en'>
      <body className='font-sans flex bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text'>
        <Sidebar categories={categories} />
        <main className='flex-1 overflow-auto'>
          <div className='max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-8'>
            <div className='flex flex-row'>
              <Breadcrumbs />
              <ThemeToggle />
            </div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
