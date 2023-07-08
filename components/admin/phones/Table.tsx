"use client";

// import { InputRef } from "antd";
// import { ColumnType } from "antd/es/list";
// import { FilterConfirmProps } from "antd/es/table/interface";
// import { useRef, useState } from "react";
import { Button } from "antd";
import { Table } from "antd";
import { TableData } from "./TableData";
import { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import type { InputRef } from "antd";
import { Input, Space } from "antd";
import type { ColumnsType, ColumnType } from "antd/es/table";
import type { FilterConfirmProps } from "antd/es/table/interface";
import Link from "next/link";
import { PhoneData } from "@/components/types/admin/types";
import EditIcon from "@/public/assets/EditIcon";
import DeleteIcon from "@/public/assets/DeleteIcon";
import DeleteModal from "@/components/utils/DeleteModal";
import { useDeletePhoneMutation } from "@/redux/services/phoneApi";

type DataIndex = keyof PhoneData;

export const PhoneTable = () => {
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
  ): ColumnType<PhoneData> => ({
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
  const [id, setId] = useState<number>();
  const { data: dataw } = useDeletePhoneMutation(id);
  console.log(dataw, "data");

  const showModal = (id: number) => {
    setId(id);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns: ColumnsType<PhoneData> = [
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
      title: "Company",
      key: "company",
      render: (record) => record.company,
    },
    {
      title: "Price",
      key: "price",
      render: (record) => record.price,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <div className="flex gap-6">
            <Link href={"sd"} className="cursor-pointer">
              <EditIcon />
            </Link>
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
      <Table
        // onRow={(record) => {
        //   return {
        //     onClick: () => {
        //       navigate(record?.id, { state: { itemId: record?.id } });
        //     },
        //   };
        // }}
        dataSource={data}
        columns={columns}
      />
      {isModalOpen && (
        <DeleteModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          id={id}
        />
      )}
    </>
  );
};

export default PhoneTable;
