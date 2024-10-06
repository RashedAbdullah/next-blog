import Image from "next/image";
import Link from "next/link";

const featuredPosts = [
  {
    id: 1,
    title: "Understanding React Hooks",
    excerpt: "A comprehensive guide to mastering React Hooks.",
    image: "/featured.webp",
    link: "/posts/react-hooks",
  },
  {
    id: 2,
    title: "Next.js Server-Side Components",
    excerpt: "Learn how to build performant apps with server-side components.",
    image: "/featured.webp",
    link: "/posts/nextjs-server-side",
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox",
    excerpt: "A comparison of CSS Grid and Flexbox for layout design.",
    image: "/featured.webp",
    link: "/posts/css-grid-vs-flexbox",
  },
];

const FeaturedPosts = () => {
  return (
    <section className="py-12 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
        Featured Posts
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {featuredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {post.excerpt}
              </p>
              <Link
                href={post.link}
                className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white dark:bg-blue-700 dark:text-gray-200 rounded hover:bg-blue-600 dark:hover:bg-blue-800 transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;
