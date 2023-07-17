"use client";
import { useDeletePhoneMutation } from "@/redux/services/phoneApi";
import { Modal, Select, Space } from "antd";
import React, { useState } from "react";
import { AntSelect } from "../Styles";

interface PageProps {
  isModalOpen: boolean;
  setIsModalOpen: any;
  id?: number;
  role?: string;
  action?: string;
  onOk: () => void;
  onCancel: () => void;
}

function UserModal({
  isModalOpen,
  onOk,
  onCancel,
  id,
  role,
  action,
}: PageProps) {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <Modal
      title={action == "delete" ? "Delete?" : "Update the Role"}
      open={isModalOpen}
      onOk={onOk}
      onCancel={onCancel}
      className="w-[800px]"
    >
      {action == "delete" ? (
        <p>Are you sure you want to delete this?</p>
      ) : (
        <Space wrap>
          <AntSelect
            defaultValue={role}
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: "admin", label: "Admin" },
              { value: "content_creator", label: "Content Creator" },
              { value: "user", label: "User" },
            ]}
          />
        </Space>
      )}
    </Modal>
  );
}

export default UserModal;
