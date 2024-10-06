import HeroSection from "./_components/hero-section";
import BlogPosts from "./_components/blog-posts";
import FeaturedPosts from "./_components/featured-posts";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <HeroSection />
      <FeaturedPosts />
      <BlogPosts />
    </div>
  );
};

export default Home;
