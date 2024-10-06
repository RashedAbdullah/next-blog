"use client";

import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { Button } from "@/components/ui/button";

const WriteBlogPage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className="container mx-auto relative">
      <div>
        <input type="text" placeholder="Title..." />
      </div>
      <div>
        <Button onClick={() => setOpen(!open)}>+</Button>
        {open && (
          <div>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
          </div>
        )}
      </div>
      <div>
        <input type="text" placeholder="Description" />
      </div>
      <ReactQuill
        theme="bubble"
        value={value}
        onChange={setValue}
        placeholder="Write what you thinking..."
        className=""
      />
      <div className="absolute top-4 right-0">
        <Button className="bg-green-500 text-white rounded hover:bg-slate-700">
          Publish the blog
        </Button>
      </div>
    </div>
  );
};

export default WriteBlogPage;
