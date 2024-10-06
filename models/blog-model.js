import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    views: {
      type: Number,
      required: false,
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    comments: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

const blogModel = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export { blogModel };
