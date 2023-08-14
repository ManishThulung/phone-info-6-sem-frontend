"use client";
import React, { useState } from "react";
import Button from "../Button";
import { styled } from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import { Modal, Rate } from "antd";
import { useAddCommentMutation } from "@/redux/services/commentApi";
import { useAddRatingMutation } from "@/redux/services/ratingApi";

function Comment({ id, data }: { id: number; data: any }) {
  const [open, setOpen] = useState(false);
  const [comment, setCommet] = useState("");
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [value, setValue] = useState<number>(0);

  const [addComment, { data: commentData, error, isSuccess }] =
    useAddCommentMutation();
  const [addRating, { data: ratingData }] = useAddRatingMutation();

  let user: any;
  if (typeof window !== "undefined") {
    user = localStorage.getItem("access_token");
  }
  const handleClick = (key: any) => {
    if (!user) {
      return toast.warning("Please login first");
    } else {
      if (key == "comment") {
        setOpen(true);
      } else {
        setIsRatingOpen(true);
      }
    }
  };

  const handleOk = () => {
    if (open) {
      addComment({ id, value: comment });
      toast.success("Comment submitted successfully");
      setOpen(false);
    }
    if (isRatingOpen) {
      addRating({ id, value: value });
      toast.success("Rating submitted successfully");
      setIsRatingOpen(false);
    }
  };

  const handleCancel = () => {
    if (open) {
      setOpen(false);
    } else {
      setIsRatingOpen(false);
    }
  };
  return (
    <div className="max-w-[1040px] mx-auto my-[128px]">
      <div className="flex flex-col justify-center">
        <div className="flex gap-8 justify-center">
          <Button
            type="primary"
            className="text-2xl w-fit py-3 px-8 h-[56px] rounded-lg"
            onClick={() => handleClick("comment")}
          >
            Add Comments
          </Button>
          <Button
            type="primary"
            className="text-2xl w-fit py-3 px-8 h-[56px] rounded-lg"
            onClick={() => handleClick("rating")}
          >
            Submit Rating
          </Button>
        </div>
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
      {(isRatingOpen || open) && (
        <ModalWrapper
          title={open ? "Add Comment" : "Rate this Phone"}
          open={open ? open : isRatingOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          {open ? (
            <textarea
              name="comment"
              placeholder="Write comments"
              rows={5}
              value={comment}
              onChange={(e) => {
                setCommet(e.target.value);
              }}
            />
          ) : (
            <Rate allowHalf onChange={setValue} value={value} />
          )}
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
    .ant-modal-header {
      .ant-modal-title {
        font-size: 24px;
        font-weight: 700;
        text-align: center;
      }
    }

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
      ul {
        display: flex;
        justify-content: center;
        font-size: 40px;
        margin: 16px 0;

        li {
          margin-inline-end: 14px;
        }
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
        font-weight: 700;
        height: 45px;
      }
      button:last-child {
        background: blue;
        width: 170px;
        font-size: 18px;
        font-weight: 700;
        height: 45px;
      }
    }
  }
`;
