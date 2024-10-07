"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import ReactQuill from "react-quill";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const WritingBlogForm = ({ newCreatedBlog }) => {
  const [value, setValue] = useState("");
  console.log(value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = {
      slug: "new-blog-about-javascript",
      title: "How to Learn Javascript",
      desc:
        value,
      image: "",
      views: 0,

      comments: [],
    };
    await newCreatedBlog(blog);
  };
  return (
    <form onSubmit={handleSubmit} className="bg-gray-300 p-5">
      <h2 className="text-center">Write The Blog</h2>
      <Input
        type="text"
        placeholder="Title"
        className="border-none text-3xl bg-white p-2"
      />
      <ReactQuill
        theme="bubble"
        value={value}
        onChange={setValue}
        placeholder="Write what you thinking..."
        className="dark:text-white"
      />
      <div className="">
        <Button variant="outline">Publish the blog</Button>
      </div>
    </form>
  );
};

export default WritingBlogForm;
