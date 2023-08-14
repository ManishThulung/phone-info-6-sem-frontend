"use client";
import React, { useState } from "react";
import Button from "../Button";
import { styled } from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import { Modal } from "antd";
import { useAddCommentMutation } from "@/redux/services/commentApi";

function Comment({ id, data }: { id: number; data: any }) {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [comment, setCommet] = useState("");

  const [addComment, { data: commentData, error, isSuccess }] =
    useAddCommentMutation();

  let user: any;
  if (typeof window !== "undefined") {
    user = localStorage.getItem("access_token");
  }
  const handleClick = () => {
    if (!user) {
      return toast.warning("Please login first");
    } else {
      setOpen(true);
    }
  };

  const handleOk = () => {
    addComment({ id, value: comment });
    toast.success(commentData?.message);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <div className="max-w-[1040px] mx-auto my-[128px]">
      <div className="flex flex-col justify-center">
        <Button
          type="primary"
          className="text-2xl w-fit py-4 px-8 h-[60px] mx-auto rounded-lg"
          onClick={handleClick}
        >
          Add Comments
        </Button>
        <p className="text-3xl font-semibold my-[56px] text-gray-700">
          See what people say about this phone
        </p>

        {data.length < 1 ? (
          <div>No commetns yet</div>
        ) : (
          <div className="flex flex-col gap-[56px]">
            {data?.map((item: any, index: any) => (
              <BoxShadow className="w-full py-8 px-[40px]" key={index}>
                <p className="text-center">svg</p>
                <p className="text-2xl font-bold text-center text-gray-900 py-3">
                  {item?.author?.name}
                </p>
                <p className="text-xl font-medium text-gray-700">
                  {item.comment}
                </p>
              </BoxShadow>
            ))}
          </div>
        )}
      </div>
      {open && (
        <ModalWrapper
          title="Comment"
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <textarea
            name="comment"
            placeholder="Write comments"
            rows={5}
            value={comment}
            onChange={(e) => {
              setCommet(e.target.value);
            }}
          />
        </ModalWrapper>
      )}
      <ToastContainer />
    </div>
  );
}

export default Comment;

const BoxShadow = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const ModalWrapper = styled(Modal)`
  .ant-modal-content {
    .ant-modal-body {
      margin: 32px 0;
      textarea {
        width: 100%;
        padding: 8px 16px;
        outline: none;
        border-radius: 8px;
        border-width: 1px;
        border-color: rgb(191 219 254);
        font-size: 16px;
      }
    }

    .ant-modal-footer {
      display: flex;
      column-gap: 32px;
      justify-content: center;

      button:first-child {
        background: red;
        width: 170px;
        color: white;
        font-size: 18px;
        font-weight: 600;
        height: 45px;
      }
      button:last-child {
        background: blue;
        width: 170px;
        font-size: 18px;
        font-weight: 600;
        height: 45px;
      }
    }
  }
`;
