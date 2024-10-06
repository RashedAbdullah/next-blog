import { getBlogsByCategory } from "@/actions/blog";
import { getCategories } from "@/actions/category";
import { getCommentByBlog } from "@/actions/comment";

const CategoryPage = async ({ params: { category } }) => {
  const blogsByCategory = await getBlogsByCategory(category);
  const ctg = await getCategories();
  const clmt = await getCommentByBlog()
  console.log(blogsByCategory);
  return <div>{category}</div>;
};

export default CategoryPage;
