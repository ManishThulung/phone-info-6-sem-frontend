"use client";
import { useDeletePhoneMutation } from "@/redux/services/phoneApi";
import { Modal } from "antd";
import React, { useState } from "react";

interface PageProps {
  isModalOpen: boolean;
  setIsModalOpen: any;
  id?: number;
  onOk: () => void;
  onCancel: () => void;
}

function DeleteModal({
  isModalOpen,
  onOk,
  onCancel,
  id,
  setIsModalOpen,
}: PageProps) {
  const [deletePhone, { data, error, isSuccess }] = useDeletePhoneMutation();

  console.log(data, "data");
  console.log(id, "id");
  return (
    <Modal
      title="Delete?"
      open={isModalOpen}
      // onOk={() => {
      //   deletePhone(id);
      //   setIsModalOpen(false);
      // }}
      onOk={onOk}
      onCancel={onCancel}
    >
      <p>Are you sure you want to delete this?</p>
    </Modal>
  );
}

export default DeleteModal;
