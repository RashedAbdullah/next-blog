const { connectMongo } = require("@/connections/mongo-connection");
const { blogModel } = require("@/models/blog-model");

const getBlogs = async () => {
  try {
    await connectMongo();
    const blogs = await blogModel.find({});
    return blogs;
  } catch (err) {
    console.log(err.message);
  }
};

const getBlogsByCategory = async (category) => {
  try {
    await connectMongo();
    const blogs = await blogModel.find({ category: category });
    return blogs;
  } catch (err) {
    console.log(err.message);
  }
};

const createBlog = async (newBlog) => {
  try {
    await connectMongo();
    const blog = await blogModel.create(newBlog);
    return blog;
  } catch (err) {
    console.log(err.message);
  }
};

export { getBlogs, getBlogsByCategory, createBlog };
