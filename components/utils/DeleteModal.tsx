"use client";
import { useDeletePhoneMutation } from "@/redux/services/phoneApi";
import { Modal } from "antd";
import React, { useState } from "react";
import TextEditor from "../admin/review/TextEditor";

interface PageProps {
  isModalOpen: boolean;
  setIsModalOpen: any;
  id?: number;
  name?: string;
  onOk: () => void;
  onCancel: () => void;
}

function DeleteModal({ isModalOpen, onOk, onCancel, id, name }: PageProps) {
  const [deletePhone, { data, error, isSuccess }] = useDeletePhoneMutation();

  console.log(data, "data");
  console.log(id, "id");
  console.log(name, "name");
  return (
    <Modal
      title={name == "delete" ? "Delete?" : "Review"}
      open={isModalOpen}
      // onOk={() => {
      //   deletePhone(id);
      //   setIsModalOpen(false);
      // }}
      onOk={onOk}
      onCancel={onCancel}
      className="w-[800px]"
    >
      {name == "delete" ? (
        <p>Are you sure you want to delete this?</p>
      ) : (
        <TextEditor />
      )}
    </Modal>
  );
}

export default DeleteModal;
