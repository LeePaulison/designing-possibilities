import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export type PostData = {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
};

export type Post = {
  slug: string;
  data: PostData;
  content: string;
};

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      data: data as PostData,
      content,
    };
  });
}
