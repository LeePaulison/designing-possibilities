"use client";

import React, { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogClose, DialogTitle } from "@radix-ui/react-dialog";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import DropdownMenu from "@/components/DropdownMenu";
import { Category } from "@/lib/getCategories";
import SearchInput from "./SearchInput";

const Sidebar = ({ categories }: { categories: Category[] }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <>
      {/* Sidebar for mobile */}
      <Dialog open={sidebarVisible} onOpenChange={setSidebarVisible}>
        <DialogTrigger asChild>
          <button
            aria-label='Toggle Menu'
            className='inline-flex md:hidden h-fit w-fit text-amber-500 p-2 mt-1 ms-1 rounded focus:outline-none hover:ring-2 hover:ring-amber-400 transition'
          >
            {sidebarVisible ? <Cross2Icon className='h-6 w-6' /> : <HamburgerMenuIcon className='h-6 w-6' />}
          </button>
        </DialogTrigger>
        <DialogContent
          className='fixed top-0 left-0 w-64 h-full bg-white shadow-md flex flex-col items-center py-8 px-4'
          aria-label='Sidebar'
        >
          <DialogTitle className='sr-only'>Main Menu</DialogTitle>
          <DialogClose asChild>
            <button
              aria-label='Close Menu'
              className='absolute top-0 left-0 text-stone-500 p-2 mt-1 ms-1 rounded focus:outline-none hover:ring-2 hover:ring-stone-400 transition'
            >
              <Cross2Icon className='h-6 w-6' />
            </button>
          </DialogClose>
          <div className='text-amber-500 text-4xl font-bold tracking-wider mb-12 relative'>
            <span className='block transform -rotate-45 leading-none'>Designing</span>
            <span className='block transform -rotate-45 leading-none ml-16'>Possibilities</span>
          </div>
          <SearchInput />
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
        </DialogContent>
      </Dialog>

      {/* Sidebar for larger screens */}
      <aside className='hidden md:flex w-64 h-full bg-white shadow-md flex-col items-center py-8 px-4'>
        <div className='text-amber-500 text-4xl font-bold tracking-wider mb-12 relative'>
          <span className='block transform -rotate-45 leading-none'>Designing</span>
          <span className='block transform -rotate-45 leading-none ml-16'>Possibilities</span>
        </div>
        <SearchInput className='mt-8' />
        <nav className='mt-4 w-full'>
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
    </>
  );
};

export default Sidebar;
