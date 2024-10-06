import React from "react";
import BlogCard from "./blog-card";

const BlogPosts = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900 dark:text-white">
          Latest Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCard /> <BlogCard /> <BlogCard /> <BlogCard /> <BlogCard />
          <BlogCard />
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
