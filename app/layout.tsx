import "prismjs/themes/prism-tomorrow.css";
import "./globals.css";

import Link from "next/link";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export const metadata = {
  title: "My Blog",
  description: "Exploring possibilities through words.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='font-sans'>
        <ThemeProvider>
          <div className='min-h-screen flex flex-col'>
            {/* Global Navigation */}
            <header className='bg-primary text-primary py-4 px-8 shadow'>
              <div className='container mx-auto flex justify-between items-center'>
                <h1 className='text-3xl font-bold'>My Blog</h1>
                <nav>
                  <Link href='/' className='mr-4 hover:underline'>
                    Home
                  </Link>
                  <Link href='/blog' className='mr-4 hover:underline'>
                    Blog
                  </Link>
                  <Link href='/about' className='hover:underline'>
                    About
                  </Link>
                </nav>
                <ThemeSwitcher />
              </div>
            </header>

            {/* Main Content */}
            <main className='flex-grow container mx-auto py-8 px-4'>{children}</main>

            {/* Footer */}
            <footer className='bg-primary text-primary py-4 px-8'>
              <div className='container mx-auto text-center'>
                <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
