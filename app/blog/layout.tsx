// app/blog/layout.tsx

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='container mx-auto px-4 py-8'>
      <header className='mb-8'>
        <h1 className='text-5xl font-bold'>Blog</h1>
        <p className='text-gray-600'>Insights, tutorials, and more from Designing Possibilities.</p>
      </header>
      <main>{children}</main>
    </div>
  );
}
