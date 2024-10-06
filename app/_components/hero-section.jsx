import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 dark:from-indigo-700 dark:to-purple-800">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Welcome to the Blog
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8">
          Dive into the latest stories, updates, and insights from the world.
        </p>
        <div className="space-x-7">
          <Link
            href="/blogs"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition duration-300"
          >
            Start Reading
          </Link>
          <Link
            href="/dashboard/write"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition duration-300"
          >
            Write blog
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
