import { Select } from "antd";
import styled from "styled-components";

export const StyledSelect = styled<any>(Select)`
  &.ant-select {
    width: 400px;
  }
  &.ant-select:hover {
    cursor: pointer !important;
  }
`;

export const StyleTable = styled.table`
  border-bottom: 1px solid black;
  border-collapse: collapse;
  .photoRow {
    border-bottom: none;
    td {
      padding: none;
    }
  }
  tr {
    border-bottom: 1px solid black;

    padding: 150px 0;
    th {
      padding-bottom: 20px;
      font-wight: 700;
      font-size: 32px;
    }
    td:first-child,
    td:last-child {
      font-weight: 500;
      font-size: 20px;
      padding: 30px 0;
      text-align: center;
    }
    td:first-child {
      padding-right: 15px;
    }
    td:last-child {
      padding-left: 15px;
    }
    .midCol {
      border-left: 1px solid black;
      border-right: 1px solid black;

      width: 340px;
      div {
        display: flex;
        row-gap: 4px;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        p {
          font-weight: 600;
          font-size: 22px;
        }
      }
    }
  }
`;
