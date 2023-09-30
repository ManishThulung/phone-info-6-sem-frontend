"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useAddReviewMutation } from "@/redux/services/ReviewAi";
import { ToastContainer, toast } from "react-toastify";
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

function TextEditor({
  id,
  setIsModalOpen,
}: {
  id: number;
  setIsModalOpen: (value: boolean) => void;
}) {
  const [value, setValue] = useState("");

  const [addReview, { success, error, loading }] = useAddReviewMutation();

  if (error) {
    toast.success("Review added successfully");
  }
  return (
    <>
      <ReactQuill
        modules={modules}
        value={value}
        onChange={setValue}
        theme="snow"
      />
      <button
        onClick={() => {
          addReview({ id, review: value });
          toast.success("Review added successfully");
          setIsModalOpen(false);
        }}
        disabled={loading}
      >
        save
      </button>
      <ToastContainer />
    </>
  );
}

export default TextEditor;
