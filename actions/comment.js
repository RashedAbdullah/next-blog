const { connectMongo } = require("@/connections/mongo-connection");
const { commentModel } = require("@/models/comment-model");

const getCommentByBlog = async (blog) => {
  try {
    await connectMongo();
    const comments = await commentModel.find({ blog });
    return comments;
  } catch (err) {
    console.log(err.message);
  }
};

export { getCommentByBlog };
