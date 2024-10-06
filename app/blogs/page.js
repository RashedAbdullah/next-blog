import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";

const dirContents = fs.readdirSync("contents", "utf-8");
const blogs = dirContents.map((file) => {
  const fileContent = fs.readFileSync(`contents/${file}`, "utf-8");
  const { data } = matter(fileContent);
  return data;
});

// Log the blogs for debugging (optional)


// Function to truncate content to the first three lines
// const truncateContent = (content, lineLimit) => {
//   const text = content.replace(/<\/?[^>]+(>|$)/g, ""); // Remove HTML tags
//   const lines = text.split("\n").filter((line) => line.trim() !== ""); // Split by lines and remove empty lines
//   return (
//     lines.slice(0, lineLimit).join("\n") +
//     (lines.length > lineLimit ? "..." : "")
//   ); // Limit lines
// };

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
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                {blog.title}
              </h2>
              <div className="text-gray-600 dark:text-gray-300 mb-4">
                {blog.content} {/* Display the first 4 lines */}
              </div>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
                <span>{blog.date}</span>
                <span>{blog.author}</span>
              </div>
              <Link
                href={`/blogs/${blog.slug}`}
                className="bg-blue-600 dark:bg-blue-400 text-white font-semibold py-2 px-4 rounded transition-all duration-200 hover:bg-blue-700 dark:hover:bg-blue-300 transform hover:scale-105"
              >
                Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
