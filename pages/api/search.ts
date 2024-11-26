import { NextApiRequest, NextApiResponse } from "next";
import { getSearchIndex } from "@/lib/getSearchIndex";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req.query;

  if (!query || typeof query !== "string") {
    return res.status(400).json({ error: "A valid search query is required." });
  }

  const searchIndex = getSearchIndex(); // Retrieve all posts
  const results = searchIndex.filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.description.toLowerCase().includes(query.toLowerCase()) ||
      post.category.toLowerCase().includes(query.toLowerCase())
  );

  return res.status(200).json({ results });
}
