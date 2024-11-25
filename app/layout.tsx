import "prismjs/themes/prism-tomorrow.css";
import "./globals.css";

import React, { ReactNode } from "react";
import { getCategories } from "@/lib/getCategories";
import Breadcrumbs from "@/components/Breadcrumbs";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "My Blog",
  description: "Exploring possibilities through words.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const categories = getCategories();

  return (
    <html lang='en'>
      <body className='bg-stone-100 text-stone-900 font-sans flex'>
        <Sidebar categories={categories} />
        <main className='flex-1 p-8 overflow-auto'>
          <Breadcrumbs />
          {children}
        </main>
      </body>
    </html>
  );
}
