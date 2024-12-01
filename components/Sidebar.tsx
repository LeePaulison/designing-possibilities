"use client";

import React, { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogClose, DialogTitle } from "@radix-ui/react-dialog";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";
import { motion, AnimatePresence } from "framer-motion";
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

const SidebarHeader = ({ className }: { className?: string }) => (
  <div
    className={`${className} text-light-primary dark:text-dark-primary text-4xl font-serif font-bold tracking-wider mt-8 mb-16 md:mb-12 md:mt-6 relative transform -rotate-45`}
  >
    <div className='inline-block mb-2'>
      <span className='block leading-none'>Designing</span>
    </div>
    <div className='inline-block ml-8'>
      <span className='block leading-none'>Possibilities</span>
    </div>
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
      {/* Sidebar for Mobile */}
      <Dialog open={sidebarVisible} onOpenChange={setSidebarVisible}>
        <DialogTrigger asChild>
          <button
            aria-label='Toggle Menu'
            className='inline-flex fixed top-4 left-4 md:hidden h-fit w-fit text-light-primary dark:text-dark-primary p-2 rounded focus:outline-none hover:ring-2 hover:ring-light-accent dark:hover:ring-dark-accent transition'
          >
            {sidebarVisible ? <Cross2Icon className='h-6 w-6' /> : <HamburgerMenuIcon className='h-6 w-6' />}
          </button>
        </DialogTrigger>
        <AnimatePresence>
          {sidebarVisible && (
            <DialogContent asChild forceMount aria-label='Sidebar'>
              <motion.div
                key='mobile-sidebar'
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className='fixed inset-y-0 left-0 max-w-sm md:flex w-64 h-full bg-light-background dark:bg-dark-background shadow-md flex-col items-center py-8 px-4'
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
                <SearchInput className='mt-8' />
                <SidebarNavigation categories={categories} />
              </motion.div>
            </DialogContent>
          )}
        </AnimatePresence>
      </Dialog>

      {/* Sidebar for Larger Screens */}
      <aside className='hidden md:flex w-64 h-full bg-light-background dark:bg-dark-background shadow-md flex-col items-center py-8 px-4'>
        <SidebarHeader />
        <SearchInput className='mt-8' />
        <SidebarNavigation categories={categories} />
      </aside>
    </>
  );
};

export default Sidebar;
