import React from "react";

const blogs = [
  {
    id: 1,
    title: "Understanding JavaScript Closures",
    description:
      "A deep dive into closures in JavaScript and how they work under the hood.",
    date: "October 1, 2024",
    author: "John Doe",
  },
  {
    id: 2,
    title: "Mastering React Hooks",
    description: "Learn how to effectively use React hooks in your projects.",
    date: "September 28, 2024",
    author: "Jane Smith",
  },
  {
    id: 3,
    title: "Tailwind CSS for Beginners",
    description:
      "An introduction to Tailwind CSS and how to use it in projects.",
    date: "September 25, 2024",
    author: "Alice Johnson",
  },
  {
    id: 4,
    title: "Building with Next.js",
    description:
      "Discover how Next.js improves your workflow for server-rendered React applications.",
    date: "September 20, 2024",
    author: "Michael Brown",
  },
];

const BlogsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
          Latest Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                {blog.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {blog.description}
              </p>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
                <span>{blog.date}</span>
                <span>{blog.author}</span>
              </div>
              <button className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
