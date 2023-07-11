"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { header: "3" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

function ReviewEditor() {
  const [value, setValue] = useState("");
  return (
    <div className="mt-[128px]">
      <ReactQuill
        modules={modules}
        value={value}
        onChange={setValue}
        theme="snow"
      />
      <button
        onClick={() => {
          console.log(value);
        }}
      >
        save
      </button>
    </div>
  );
}

export default ReviewEditor;
