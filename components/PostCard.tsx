"use client";

import Image from "next/image";
import * as HoverCard from "@radix-ui/react-hover-card";
import * as Tooltip from "@radix-ui/react-tooltip";
import Link from "next/link";
import { formatCategoryForDisplay } from "@/lib/utilities";

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
        <Link
          onPointerDown={() => console.log("clicked")}
          href={`/blog/categories/${resolvedCategory}/${slug}`}
          className='block rounded-lg shadow-md bg-light-background dark:bg-dark-background p-4 hover:shadow-lg hover:dark:shadow-dark-primary transition cursor-pointer'
        >
          {/* Image Section */}
          {image && (
            <div className='mb-4'>
              <Image
                src={image}
                alt={title}
                width={400}
                height={200}
                style={{ objectFit: "cover" }}
                className='rounded-md'
              />
            </div>
          )}

          {/* Post Content */}
          <div>
            <h2 className='text-xl font-serif font-bold text-light-primary dark:text-dark-primary mb-2'>
              <Link href={`/blog/categories/${resolvedCategory}/${slug}`} className='hover:underline'>
                {title}
              </Link>
            </h2>
            <p className='text-sm text-light-secondary dark:text-dark-secondary mb-2'>{date}</p>
            {category && (
              <p className='text-xs text-light-accent dark:text-dark-accent mb-4 uppercase tracking-wide'>
                {formatCategoryForDisplay(category)}
              </p>
            )}
            <p className='text-sm font-sans text-light-text dark:text-dark-text'>{excerpt}</p>
          </div>

          {/* Tags Section */}
          {tags && tags.length > 0 && (
            <div className='mt-4 flex flex-wrap gap-2'>
              <Tooltip.Provider>
                {tags.map((tag) => (
                  <Tooltip.Root key={tag}>
                    <Tooltip.Trigger asChild>
                      <span className='bg-light-background dark:bg-dark-background text-light-accent dark:text-dark-accent px-2 py-1 rounded text-sm'>
                        {tag}
                      </span>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className='bg-light-primary dark:bg-dark-primary text-white text-xs px-2 py-1 rounded shadow'
                        sideOffset={5}
                      >
                        Tooltip for {tag}
                        <Tooltip.Arrow className='fill-light-primary dark:fill-dark-primary' />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                ))}
              </Tooltip.Provider>
            </div>
          )}
        </Link>
      </HoverCard.Trigger>

      <HoverCard.Content
        className='bg-light-background dark:bg-dark-background rounded-lg shadow dark:shadow-dark-primary p-4 w-64'
        sideOffset={10}
      >
        <h3 className='text-lg font-serif font-bold text-light-primary dark:text-dark-primary'>{title}</h3>
        <p className='text-sm text-light-secondary dark:text-dark-secondary mb-2'>{date}</p>
        <p className='text-sm font-sans text-light-text dark:text-dark-text'>{excerpt}</p>
        <Link
          href={`/blog/categories/${resolvedCategory}/${slug}`}
          className='text-light-accent dark:text-dark-accent hover:underline mt-2 inline-block'
        >
          Read More
        </Link>
      </HoverCard.Content>
    </HoverCard.Root>
  );
}
