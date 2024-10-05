import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";

const SingleBlogPage = ({ params: { id } }) => {
  const filePath = `contents/${id}.md`;
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  console.log(data);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100">
          {data.title}
        </h1>
        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
          <span>{data.date}</span>
          <span>{data.author}</span>
        </div>
        <div className="prose lg:prose-xl text-gray-700 dark:text-gray-300 mb-8">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/blogs"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
