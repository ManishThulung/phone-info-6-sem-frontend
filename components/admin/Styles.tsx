import { styled } from "styled-components";
import { Table } from "antd";

export const AdminSection = styled.div`
  margin: 100px 60px 0 60px;
  display: flex;
`;

export const AdminBg = styled.div`
  background: linear-gradient(135deg, #f8f7f3 0%, #e7f6fc 100%);
  width: 100%;
`;

export const AntTableWrapper = styled<any>(Table)`
  .ant-table {
    background: none;
  }

  .ant-table-thead {
    .ant-table-cell {
      background: none;
    }
  }
`;
