import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    blog: {
      type: mongoose.Schema.ObjectId,
      ref: "Blog",
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    blogs: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

const categoryModel =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export { categoryModel };
