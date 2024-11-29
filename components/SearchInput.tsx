"use client";

import React, { useState } from "react";
import { MagnifyingGlassIcon, Cross2Icon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

interface SearchInputProps {
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
}

export default function SearchInput({ className, inputClassName, buttonClassName }: SearchInputProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() !== "") {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
    setQuery("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative w-full max-w-md mx-auto flex items-center ${className}`}
      aria-label='Search Content'
    >
      {/* Magnifying Glass Icon */}
      <span className='absolute left-3'>
        <MagnifyingGlassIcon className='h-5 w-5 text-stone-500' />
      </span>
      {/* Input Field */}
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Search posts...'
        className={`w-full pl-10 pr-10 py-2 border rounded-lg dark:border-stone-800 bg-background-light dark:bg-background-dark text-light dark:text-dark hover:ring-2 hover:ring-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-500 ${inputClassName}`}
        aria-label='Search Posts'
      />
      {/* Clear Input Button */}
      {query && (
        <button type='button' onClick={() => setQuery("")} className={`absolute right-3 ${buttonClassName}`}>
          <Cross2Icon className='h-5 w-5 text-stone-500 hover:text-stone-800 hover:dark:text-stone-200' />
        </button>
      )}
    </form>
  );
}
