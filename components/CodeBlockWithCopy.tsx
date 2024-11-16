// components/CodeBlockWithCopy.tsx
"use client";

import { useState, useEffect } from "react";

export default function CodeBlockWithCopy({ children }: { children: React.ReactNode }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (children && typeof children === "string") {
      navigator.clipboard.writeText(children);
      setIsCopied(true);

      setTimeout(() => setIsCopied(false), 2000); // Reset the message after 2 seconds
    }
  };

  return (
    <div className='relative'>
      <button
        onClick={handleCopy}
        className='absolute right-2 top-2 bg-gray-700 text-white text-xs px-2 py-1 rounded hover:bg-gray-600 focus:outline-none'
      >
        {isCopied ? "Copied!" : "Copy"}
      </button>
      <pre className='p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto'>{children}</pre>
    </div>
  );
}
