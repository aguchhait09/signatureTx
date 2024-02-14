import CustomTable, { TableHeader } from "UI/CustomTable/CustomTable";
import { Flex, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";
import { HighDemandTableWrapper } from "styles/StyledComponents/HighDemandTableWrapper";

const HighDemandlinesTable = () => {
  interface DataType {
    key: string;
    medication: string;
    stock: number | string;
    dmdPrice: number | string;
    retailPrice: number | string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: <TableHeader title="Medication" sort />,
      dataIndex: "medication",
      key: "medication",
      render: (medication) => (
        <>
          <Typography.Text>{medication}</Typography.Text>
        </>
      ),
      sorter: true,
      width: 289,
    },
    {
      title: <TableHeader title="Stock" sort />,
      dataIndex: "stock",
      key: "stock",
      render: (stock) => (
        <>
          <Typography.Text>{stock}</Typography.Text>
        </>
      ),
      sorter: true,
      width: 289,
      align: "end",
    },
    {
      title: <TableHeader title="DM+D Price" sort />,
      dataIndex: "dmdPrice",
      key: "dmdPrice",
      render: (dmdPrice) => (
        <>
          <Typography.Text>{dmdPrice}</Typography.Text>
        </>
      ),
      sorter: true,
      width: 289,
      align: "end",
    },
    {
      title: <TableHeader title="Retail Price,￡" sort />,
      dataIndex: "retailPrice",
      key: "retailPrice",
      render: (retailPrice) => (
        <>
          <Typography.Text>{retailPrice}</Typography.Text>
        </>
      ),
      sorter: true,
      align: "end",
      width: 289,
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      medication: "Panadol",
      stock: 0,
      dmdPrice: 25,
      retailPrice: 0,
    },
    {
      key: "2",
      medication: "Panadol",
      stock: 0,
      dmdPrice: 25,
      retailPrice: 0,
    },
    {
      key: "3",
      medication: "Panadol",
      stock: 0,
      dmdPrice: 25,
      retailPrice: 0,
    },
  ];

  return (
    <HighDemandTableWrapper>
      <CustomTable
        columns={columns}
        dataSource={data}
        footer={() => <Flex>g</Flex>}
      />
    </HighDemandTableWrapper>
  );
};

export default HighDemandlinesTable;
