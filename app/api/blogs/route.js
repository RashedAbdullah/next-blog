// app/api/blog/route.js

import { connectMongo } from "@/connections/mongo-connection";
import { blogModel } from "@/models/blog-model";

export async function GET(request) {
  try {
    await connectMongo();
    const blogs = await blogModel.find({});
    return new Response(JSON.stringify(blogs), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to fateh blogs" }), {
      status: 500,
    });
  }
}

export async function POST(req) {
  try {
    await connectMongo();

    const body = await req.json();
    console.log(body);
    const newBlog = {
      slug: "next-backend",
      title: "next backend title",
      desc: "next backend desc",
    };

    const blog = await blogModel.create(newBlog);
    return new Response(
      JSON.stringify({ message: "Successfully fathed data", data: blog }),
      { status: 201 }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Failed to create new blog" }),
      { status: 500 }
    );
  }
}
