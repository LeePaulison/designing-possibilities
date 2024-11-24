"use client";

import Image from "next/image";
import * as HoverCard from "@radix-ui/react-hover-card";
import * as Tooltip from "@radix-ui/react-tooltip";
import Link from "next/link";

type PostCardProps = {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  image?: string;
  tags?: string[];
};

export default function PostCard({ title, excerpt, date, category, slug, image, tags }: PostCardProps) {
  const resolvedCategory = category?.toLowerCase() || "uncategorized";

  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <div className='rounded-lg shadow-md bg-white p-4 hover:shadow-lg transition cursor-pointer'>
          {/* Image Section */}
          {image && (
            <div className='mb-4'>
              <Image src={image} alt={title} width={400} height={200} className='rounded-md object-cover' />
            </div>
          )}

          {/* Post Content */}
          <div>
            <h2 className='text-xl font-semibold text-stone-900 mb-2'>
              <Link href={`/blog/categories/${resolvedCategory}/${slug}`} className='hover:underline'>
                {title}
              </Link>
            </h2>
            <p className='text-sm text-stone-500 mb-2'>{date}</p>
            {category && <p className='text-xs text-amber-500 mb-4 uppercase tracking-wide'>{category}</p>}
            <p className='text-sm text-stone-700'>{excerpt}</p>
          </div>

          {/* Tags Section */}
          {tags && tags.length > 0 && (
            <div className='mt-4 flex flex-wrap gap-2'>
              <Tooltip.Provider>
                {tags.map((tag) => (
                  <Tooltip.Root key={tag}>
                    <Tooltip.Trigger asChild>
                      <span className='bg-stone-100 text-stone-700 px-2 py-1 rounded text-sm'>{tag}</span>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className='bg-stone-800 text-white text-xs px-2 py-1 rounded shadow'
                        sideOffset={5}
                      >
                        Tooltip for {tag}
                        <Tooltip.Arrow className='fill-stone-800' />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                ))}
              </Tooltip.Provider>
            </div>
          )}
        </div>
      </HoverCard.Trigger>

      <HoverCard.Content className='bg-white rounded-lg shadow-lg p-4 w-64' sideOffset={10}>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <p className='text-sm text-stone-500 mb-2'>{date}</p>
        <p className='text-sm text-stone-700'>{excerpt}</p>
        <Link
          href={`/blog/categories/${resolvedCategory}/${slug}`}
          className='text-amber-500 hover:underline mt-2 inline-block'
        >
          Read More
        </Link>
      </HoverCard.Content>
    </HoverCard.Root>
  );
}
