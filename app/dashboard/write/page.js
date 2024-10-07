import "react-quill/dist/quill.bubble.css";

import WritingBlogForm from "../_components/writing-blog-form";
import { createBlog } from "@/actions/blog";

const WriteBlogPage = async () => {
  const newCreatedBlog = async (blog) => {
    "use server";
    await createBlog(blog);
  };

  return (
    <div className="container mx-auto relative">
      <WritingBlogForm newCreatedBlog={newCreatedBlog} />
    </div>
  );
};

export default WriteBlogPage;
