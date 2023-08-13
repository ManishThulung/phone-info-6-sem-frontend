"use client";

import { Button, Tooltip } from "antd";
import { Table } from "antd";
import { TableData } from "./TableData";
import { useEffect, useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import type { InputRef } from "antd";
import { Input, Space } from "antd";
import type { ColumnsType, ColumnType } from "antd/es/table";
import type { FilterConfirmProps } from "antd/es/table/interface";
import { UserData } from "@/components/types/admin/types";
import EditIcon from "@/public/assets/EditIcon";
import DeleteIcon from "@/public/assets/DeleteIcon";
import { AntTableWrapper } from "../Styles";
import UserModal from "./UserModal";
import { useDeleteUserMutation } from "@/redux/services/adminApi";
import { ToastContainer, toast } from "react-toastify";

type DataIndex = keyof UserData;

export const UserTable = () => {
  const { data } = TableData();

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): ColumnType<UserData> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
  });

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [key, setKey] = useState<string>("");
  const [id, setId] = useState<number>(0);
  const [role, setRole] = useState<string>("");
  const [deleteUser] = useDeleteUserMutation();

  const showModal = (id: number) => {
    setKey("delete");
    setId(id);
    setIsModalOpen(true);
  };

  const showEditModal = (id: number, role: string) => {
    setId(id);
    setRole(role);
    setKey("edit");
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (key == "delete") {
      deleteUser(id);
      toast.success("User Deleted Successfully");
    }
    if (key == "edit") {
      toast.success("User Role Updated Successfully");
    }
    setId(0);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns: ColumnsType<UserData> = [
    {
      title: "Id",
      key: "id",
      render: (record) => record.id,
    },
    {
      title: "Name",
      key: "name",
      ...getColumnSearchProps("name"),
      render: (record) => record.name,
    },

    {
      title: "Email",
      key: "email",
      render: (record) => record.email,
    },
    {
      title: "Role",
      key: "role",
      render: (record) => record.role,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <div className="flex gap-6">
            <div
              className="cursor-pointer"
              onClick={() => showEditModal(record?.id, record?.role)}
            >
              <Tooltip placement="right" title="Review Phone">
                <EditIcon />
              </Tooltip>
            </div>
            <div
              className="cursor-pointer"
              onClick={() => showModal(record?.id)}
            >
              <DeleteIcon />
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <AntTableWrapper dataSource={data} columns={columns} />
      {isModalOpen && (
        <UserModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          id={id}
          role={role}
          action={key}
        />
      )}
      <ToastContainer />
    </>
  );
};

export default UserTable;
