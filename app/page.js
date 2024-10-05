import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blogging Website</title>
        <meta name="description" content="A modern blogging platform" />
      </Head>

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        {/* Theme Toggle Button */}

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 dark:from-indigo-700 dark:to-purple-800">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Welcome to the Blog
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8">
              Dive into the latest stories, updates, and insights from the
              world.
            </p>
            <Link
              href="/blogs"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition duration-300"
            >
              Start Reading
            </Link>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900 dark:text-white">
              Latest Posts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Single Blog Post */}
              <div className="bg-white dark:bg-gray-800 dark:text-gray-300 shadow-md rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-2">Post Title 1</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A short description of the blog post content goes here. This
                  is just a preview.
                </p>
                <Link
                  href="/blogs"
                  className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                >
                  Read More
                </Link>
              </div>

              <div className="bg-white dark:bg-gray-800 dark:text-gray-300 shadow-md rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-2">Post Title 2</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A short description of the blog post content goes here. This
                  is just a preview.
                </p>
                <Link
                  href="/blogs"
                  className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                >
                  Read More
                </Link>
              </div>

              <div className="bg-white dark:bg-gray-800 dark:text-gray-300 shadow-md rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-2">Post Title 3</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A short description of the blog post content goes here. This
                  is just a preview.
                </p>
                <Link
                  href="/blogs"
                  className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
