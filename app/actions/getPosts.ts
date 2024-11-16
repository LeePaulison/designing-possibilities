"use server";

import { getAllPosts } from "../../lib/getPosts";
import { Post } from "../../lib/getPosts";

export async function fetchPosts(): Promise<Post[]> {
  return getAllPosts();
}
