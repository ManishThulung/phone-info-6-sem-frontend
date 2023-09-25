import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { TableData } from "./TableData";
import { CompanyData } from "@/components/types/admin/types";

const CompanyTable: React.FC = () => {
  const { data } = TableData();
  const columns: ColumnsType<CompanyData> = [
    {
      title: "Id",
      key: "id",
      render: (record) => record.id,
    },
    {
      title: "Company",
      key: "company",
      render: (record) => record?.company,
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.company}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default CompanyTable;
