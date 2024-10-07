import HeroSection from "./_components/hero-section";
import BlogPosts from "./_components/blog-posts";
import FeaturedPosts from "./_components/featured-posts";
import { getBlogs } from "@/actions/blog";

const Home = async () => {
  const blogs = await getBlogs();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* <div>
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-red-50 my-4">
            <div
              dangerouslySetInnerHTML={{ __html: `<div>${blog.desc}</div>` }}
            />
          </div>
        ))}
      </div> */}
      <HeroSection />
      <FeaturedPosts />
      <BlogPosts />
    </div>
  );
};

export default Home;
