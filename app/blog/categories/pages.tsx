import { getCategories } from "@/lib/getCategories";

type Category = {
  slug: string;
  title: string;
  description: string;
};

export default function CategoriesPage() {
  const categories = getCategories();

  return (
    <div>
      <h1 className='text-3xl font-bold mb-6'>Blog Categories</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {categories.map((category: Category) => (
          <div key={category.slug} className='p-4 border rounded shadow-md'>
            <h2 className='text-xl font-semibold mb-2'>
              <a href={`/blog/categories/${category.slug}`} className='hover:underline text-amber-500'>
                {category.title}
              </a>
            </h2>
            <p>{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
