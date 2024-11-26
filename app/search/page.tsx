import { Metadata } from "next";
import SearchResultsPage from "./SearchResultsPage";

export const metadata: Metadata = {
  title: "Search Results | Designing Possibilities",
  description: "Find blog posts and content on Designing Possibilities.",
};

export default async function SearchPage({ searchParams }: { searchParams: { query?: string } }) {
  const query = (await searchParams)?.query ?? "";

  return <SearchResultsPage query={query} />;
}
