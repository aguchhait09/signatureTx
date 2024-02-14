import styled from "@emotion/styled";
import Chevorndown from "UI/Icons/Chevorn-down";
import SortIcon from "UI/Icons/SortIcon";
import { Flex, Select, Table } from "antd";
import { TableProps } from "antd/es/table";

const TableWrapper = styled("div")`
  position: relative;
  background-color: ${({ theme }) => theme.colorWhite};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colorBgMask};

  .ant-table-wrapper {
    border: 1px solid ${({ theme }) => theme.colorBorderSecondary};
    border-radius: 12px;
  }

  .ant-table-body {
    overflow: auto !important;
    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colorBgMask};
      border-radius: 16px;
    }

    &::-webkit-scrollbar-track {
      background-color: #fff;
      border-radius: 16px;
    }
  }

  table {
    thead {
      th {
        background-color: ${({ theme }) => theme.colorWhite} !important;
        padding: 17px 16px !important;

        &::before {
          display: none;
        }

        .sort-flex {
          display: inline-flex;
          align-items: center;

          .table-header {
            line-height: 1;
            color: ${({ theme }) => theme.colorPrimaryText};
            font-size: 14px;
            font-weight: 500;
            margin-right: 8px;
          }

          i {
            line-height: 0;
          }
        }
      }
    }
    tbody {
      tr {
        &:not(:first-child) {
          td {
            padding: 12px 16px;
          }
        }

        td {
          font-family: "Inter", sans-serif;
          border-bottom: none !important;
          color: ${({ theme }) => theme.colorPrimaryText};
        }

        &:nth-child(2n + 1) {
          background-color: ${({ theme }) => theme.colorF9FAFB} !important;
        }
      }
    }
  }

  .ant-pagination-item {
    border-radius: 5px;
    font-weight: 500;
    &.ant-pagination-item-active {
      border: none;
      background-color: ${({ theme }) => theme.colorE8EFFD};
      a {
        font-weight: 700;
      }
    }
  }

  .absolute-table-pagination {
    position: absolute;
    left: 16px;
    bottom: 16px;

    p {
      color: ${({ theme }) => theme.color667085};
    }
    > p {
      margin-right: 8px;
    }

    .ant-select {
      margin-right: 8px;
    }

    .ant-select-selector {
      border: none;
      border-radius: 8px;
      background-color: ${({ theme }) => theme.colorE8EFFD};
    }
    .ant-select-selection-item {
      color: ${({ theme }) => theme.color0E3A8B};
      font-weight: 500;
      font-size: 16px;
    }
  }

  .ant-table-pagination {
    margin: 0;
    margin-top: 0 !important;
    padding-top: 12px;
    border-top: 1px solid ${({ theme }) => theme.colorBgMask};
  }
`;

export const TableHeader = (props: { title?: string; sort?: boolean }) => {
  return (
    <div className="sort-flex">
      <p className="table-header"> {props.title}</p>
      {props.sort && (
        <i>
          <SortIcon />
        </i>
      )}
    </div>
  );
};
interface CustomtableProps extends TableProps<any> {
  tableHeightsmall?: boolean;
}
const CustomTable = ({
  className,
  columns,
  dataSource,
  tableHeightsmall,
}: CustomtableProps) => {
  return (
    <TableWrapper>
      <Table
        columns={columns}
        dataSource={dataSource}
        scroll={{
          y: tableHeightsmall ? "calc(100vh - 310px)" : "calc(100vh - 390px)",
          x: 1200,
        }}
        className={className}
        pagination={{ pageSize: 10 }}
      />

      <Flex align="center" className="absolute-table-pagination">
        <p>View</p>{" "}
        <Select
          defaultValue="14"
          options={[{ value: 14, label: 14 }]}
          suffixIcon={<Chevorndown />}
        />{" "}
        <p>item per page</p>
      </Flex>
    </TableWrapper>
  );
};

export default CustomTable;
