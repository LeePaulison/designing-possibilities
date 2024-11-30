export default function AboutPage() {
  return (
    <main className='p-6 md:p-12 lg:p-24 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text font-sans'>
      <section className='max-w-4xl mx-auto'>
        <h1 className='text-4xl font-bold mb-6 text-light-primary dark:text-dark-primary'>About</h1>
        <h2 className='text-3xl font-semibold mb-6 text-light-primary dark:text-dark-primary'>
          Welcome to <strong className='text-light-accent dark:text-dark-accent'>Designing Possibilities</strong>!
        </h2>
        <p className='text-lg mb-6'>
          I’m Lee, a passionate front-end developer with a mission to share knowledge, spark inspiration, and promote
          accessibility in web development. As a quadriplegic developer, I believe in creating websites that are not
          just functional but truly inclusive for everyone.
        </p>

        <h3 className='text-xl font-semibold mb-4 text-light-primary dark:text-dark-secondary'>
          Why Designing Possibilities?
        </h3>
        <p className='text-lg mb-6'>
          The name <strong className='text-light-accent dark:text-dark-accent'>Designing Possibilities</strong> reflects
          my journey—turning challenges into opportunities and pushing the boundaries of what’s possible in web design
          and development. My goal is to build a professional footprint while empowering developers and designers to
          think inclusively when crafting digital experiences.
        </p>

        <h3 className='text-xl font-semibold mb-4 text-light-primary dark:text-dark-secondary'>My Journey</h3>
        <p className='text-lg mb-4'>
          I began my professional journey in 2018, studying Simulations and Visualization at Full Sail University in
          Winter Park, FL. After graduating, I started as a Software Developer, where I honed my skills in HTML, CSS,
          Bootstrap, JavaScript, and jQuery. In my current role as a Front-end Developer, I specialize in React and
          Bootstrap while continuously learning and exploring new technologies.
        </p>
        <p className='text-lg mb-6'>
          Beyond work, I’ve earned a certificate in{" "}
          <strong className='text-light-accent dark:text-dark-accent'>Apollo Server</strong> and am diving deep into{" "}
          <strong className='text-light-accent dark:text-dark-accent'>Next.js 15 + SSR</strong>,{" "}
          <strong className='text-light-accent dark:text-dark-accent'>TypeScript</strong>,{" "}
          <strong className='text-light-accent dark:text-dark-accent'>RadixUI</strong>, and{" "}
          <strong className='text-light-accent dark:text-dark-accent'>Tailwind CSS</strong>. These projects and
          learnings fuel the insights and content you’ll find here.
        </p>

        <h3 className='text-xl font-semibold mb-4 text-light-primary dark:text-dark-secondary'>What You’ll Find</h3>
        <ul className='list-disc list-inside text-lg mb-6'>
          <li>
            <strong className='text-light-accent dark:text-dark-accent'>Insights on accessibility:</strong> Making the
            web more inclusive for all users.
          </li>
          <li>
            <strong className='text-light-accent dark:text-dark-accent'>Front-end development tips:</strong> Lessons
            learned and tools explored.
          </li>
          <li>
            <strong className='text-light-accent dark:text-dark-accent'>Project highlights:</strong> Behind-the-scenes
            looks at how I tackle challenges and create solutions.
          </li>
        </ul>

        <h3 className='text-xl font-semibold mb-4 text-light-primary dark:text-dark-secondary'>Let’s Connect</h3>
        <p className='text-lg mb-6'>
          Whether you’re here to learn, share ideas, or collaborate, I’d love to hear from you:
        </p>
        <ul className='list-disc list-inside text-lg mb-6'>
          <li>
            <strong className='text-light-accent dark:text-dark-accent'>Explore the blog</strong> to dive into my latest
            thoughts and projects.
          </li>
          <li>
            <strong className='text-light-accent dark:text-dark-accent'>Reach out on social media</strong> to connect
            and share your insights.
          </li>
          <li>
            <strong className='text-light-accent dark:text-dark-accent'>Collaborate with me</strong> on projects that
            make the web a better place for everyone.
          </li>
        </ul>

        <p className='text-lg'>Together, we can design new possibilities.</p>
      </section>
    </main>
  );
}