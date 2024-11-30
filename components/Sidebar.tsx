"use client";

import React, { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogClose, DialogTitle } from "@radix-ui/react-dialog";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import DropdownMenu from "@/components/DropdownMenu";
import { Category } from "@/lib/getCategories";
import SearchInput from "./SearchInput";

const SidebarButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className='block py-2 px-4 rounded transition text-light-text dark:text-dark-text hover:ring-2 hover:ring-light-accent dark:hover:ring-dark-accent'
  >
    {children}
  </Link>
);

const SidebarHeader = () => (
  <div className='text-light-primary dark:text-dark-primary text-4xl font-serif font-bold tracking-wider mb-12 relative'>
    <span className='block transform -rotate-45 leading-none'>Designing</span>
    <span className='block transform -rotate-45 leading-none ml-16'>Possibilities</span>
  </div>
);

const SidebarNavigation = ({ categories }: { categories: Category[] }) => (
  <nav className='mt-8 w-full'>
    <ul className='space-y-4'>
      <li>
        <SidebarButton href='/'>Home</SidebarButton>
      </li>
      <li>
        <SidebarButton href='/blog/categories'>All Categories</SidebarButton>
      </li>
      <DropdownMenu categories={categories} />
      <li>
        <SidebarButton href='/about'>About</SidebarButton>
      </li>
    </ul>
  </nav>
);

const Sidebar = ({ categories }: { categories: Category[] }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <>
      {/* Sidebar for mobile */}
      <Dialog open={sidebarVisible} onOpenChange={setSidebarVisible}>
        <DialogTrigger asChild>
          <button
            aria-label='Toggle Menu'
            className='inline-flex md:hidden h-fit w-fit text-light-primary dark:text-dark-primary p-2 mt-1 ms-1 rounded focus:outline-none hover:ring-2 hover:ring-light-accent dark:hover:ring-dark-accent transition'
          >
            {sidebarVisible ? <Cross2Icon className='h-6 w-6' /> : <HamburgerMenuIcon className='h-6 w-6' />}
          </button>
        </DialogTrigger>
        <DialogContent
          className='fixed top-0 left-0 w-64 h-full bg-light-background dark:bg-dark-background shadow-md flex flex-col items-center py-8 px-4'
          aria-label='Sidebar'
        >
          <DialogTitle className='sr-only'>Main Menu</DialogTitle>
          <DialogClose asChild>
            <button
              aria-label='Close Menu'
              className='absolute top-0 left-0 text-light-text dark:text-dark-text p-2 mt-1 ms-1 rounded focus:outline-none hover:ring-2 hover:ring-light-accent dark:hover:ring-dark-accent transition'
            >
              <Cross2Icon className='h-6 w-6' />
            </button>
          </DialogClose>
          <SidebarHeader />
          <SearchInput />
          <SidebarNavigation categories={categories} />
        </DialogContent>
      </Dialog>

      {/* Sidebar for larger screens */}
      <aside className='hidden md:flex w-64 h-full bg-light-background dark:bg-dark-background shadow-md flex-col items-center py-8 px-4'>
        <SidebarHeader />
        <SearchInput className='mt-8' />
        <SidebarNavigation categories={categories} />
      </aside>
    </>
  );
};

export default Sidebar;
