"use client";

import React, { useEffect, useState } from "react";

interface SearchResult {
  title: string;
  description: string;
  category: string;
  slug: string;
}

export default function SearchResultsPage({ query }: { query: string }) {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
        if (!response.ok) {
          throw new Error("Failed to fetch search results");
        }
        const data = await response.json();
        setResults(data.results);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <main className='max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-8'>
      <h1 className='text-2xl font-bold mb-4'>Search Results</h1>

      {loading && <p className='text-gray-600'>Loading...</p>}
      {error && <p className='text-red-500'>{error}</p>}
      {!loading && !error && results.length === 0 && (
        <p className='text-gray-600'>
          No results found for: <strong>{query}</strong>
        </p>
      )}
      {!loading && !error && results.length > 0 && (
        <ul className='mt-4 space-y-4'>
          {results.map((result) => (
            <li key={result.slug} className='border-b py-4'>
              <a
                href={`/blog/${result.category}/${result.slug}`}
                className='text-lg font-semibold text-blue-500 hover:underline'
              >
                {result.title}
              </a>
              <p className='text-gray-600'>{result.description}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
