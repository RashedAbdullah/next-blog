import Link from "next/link";

const BlogCard = () => {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-gray-300 shadow-md rounded-lg p-6">
      <h3 className="text-2xl font-semibold mb-2">Post Title 1</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        A short description of the blog post content goes here. This is just a
        preview.
      </p>
      <Link
        href="/blogs"
        className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
      >
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
