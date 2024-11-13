// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className='container mx-auto px-4 py-12 text-center'>
      <h1 className='text-5xl font-bold mb-4'>Welcome to Designing Possibilities</h1>
      <p className='text-xl text-gray-700 mb-8'>Exploring accessible and inclusive front-end development.</p>
      <Link href='/blog' className='px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition'>
        Explore the Blog
      </Link>
    </div>
  );
}
