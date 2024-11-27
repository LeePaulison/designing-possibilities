import { Metadata } from "next";
import SearchResultsPage from "./SearchResultsPage";

type PageProps = {
  searchParams: Promise<{
    query?: string;
  }>;
};

export const metadata: Metadata = {
  title: "Search Results | Designing Possibilities",
  description: "Find blog posts and content on Designing Possibilities.",
};

export default async function SearchPage({ searchParams }: { searchParams: PageProps["searchParams"] }) {
  const query = (await searchParams)?.query ?? "";

  return <SearchResultsPage query={query} />;
}
