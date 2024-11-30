import "prismjs/themes/prism-tomorrow.css";
import "./globals.css";

import React, { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getCategories } from "@/lib/getCategories";
import Breadcrumbs from "@/components/Breadcrumbs";
import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata = {
  metadataBase: new URL("https://designing-possibilities.vercel.app"),
  title: "Designing Possibilities",
  description: "Exploring the possibilities found in accessible front-end design.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const categories = getCategories();

  return (
    <html lang='en'>
      <head>
        {/* Favicon Links */}
        <link rel='icon' type='image/png' href='/favicon-96x96.png' sizes='96x96' />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <meta name='apple-mobile-web-app-title' content='Designing Possibilities' />
        <link rel='manifest' href='/site.webmanifest' />
      </head>
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
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
