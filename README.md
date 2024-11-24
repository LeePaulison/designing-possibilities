# Designing Possibilities

Welcome to **Designing Possibilities**, a professional blog built to share knowledge, insights, and tutorials focused on the world of front-end development and beyond. This project serves as a platform to showcase technical expertise while embracing creativity and growth in web development.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Folder Structure](#folder-structure)
- [Customization](#customization)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## About the Project

**Designing Possibilities** aims to:

- Offer detailed, engaging articles for developers of all levels.
- Experiment with modern web technologies to enhance the blogging experience.
- Promote accessibility and responsiveness as core principles.
- Serve as a personal portfolio to demonstrate front-end development skills.

---

## Features

- **Markdown Support**: Write blog posts using Markdown for simplicity and readability.
- **Responsive Design**: Ensures a seamless experience across devices.
- **Dark/Light Theme Toggle**: Personalize the viewing experience.
- **Custom Styling**: Tailored with the Stone and Amber palettes from Tailwind CSS.
- **Zero External Data**: Focused on server-rendered static content.

---

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), SCSS
- **Markdown Parsing**: [Remark](https://remark.js.org/) and [Gray-Matter](https://github.com/jonschlinkert/gray-matter)
- **TypeScript**: For type-safe development (optional but encouraged)
- **Package Manager**: [Yarn](https://yarnpkg.com/)

---

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/designing-possibilities.git
   ```
2. Navigate to the project directory:
   ```bash
   cd designing-possibilities
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

Start the development server:
```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see the blog in action.

To build the project for production:
```bash
npm run build
```

Serve the production build locally:
```bash
npm run start
```

---

## Folder Structure

```
├── app
│   ├── blog
│   │   ├── [slug]
│   │   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
├── styles
│   ├── globals.scss
├── posts
│   ├── example-post.md
├── public
│   ├── images
├── utils
│   ├── markdownUtils.ts
├── README.md
```

---

## Customization

1. **Styling**:
   - Modify global styles in `styles/globals.scss`.
   - Tailwind CSS is configured via `tailwind.config.js` for theme and palette adjustments.

2. **Content**:
   - Add new blog posts in the `posts` folder using Markdown format.

3. **Metadata**:
   - Adjust post metadata (e.g., title, description, date) in the front matter of each Markdown file.

---

## Future Enhancements

- **Dynamic Tag Filtering**: Add support for filtering posts by tags.
- **Search Functionality**: Enable users to search for specific articles.
- **RSS Feed**: Provide an RSS feed for subscribers.
- **Animations**: Integrate smooth transitions and animations using Framer Motion.
- **Accessibility Features**: Achieve full compliance with WCAG 2.1 standards.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

