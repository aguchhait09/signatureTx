/* eslint-disable @typescript-eslint/no-unused-vars */
import CustomButtonPrimary from "UI/CustomButton/CustomButtonPrimary";
import CustomSwitch from "UI/CustomSwichWithLabel/CustomSwitch";
import CustomTable, { TableHeader } from "UI/CustomTable/CustomTable";
import CustomTag from "UI/CustomTag/CustomTag";
import CircleCheck from "UI/Icons/CircleCheck";
import CircleCross from "UI/Icons/CircleCross";
import { Space, Avatar, Flex, Button, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import FilterRow from "components/FilterRow/FilterRow";
import assets from "json/assets";
import React from "react";
import { Link } from "react-router-dom";
import { DataBranchAll, Doc } from "typescript/interfaces/branchAll.interface";

interface propsType {
  allBranch: DataBranchAll;
}

const BranchesTabpage = (props: propsType) => {
  const { allBranch } = props;

  const columns: ColumnsType<Doc> = [
    {
      title: (props) => <TableHeader title="Name" {...props} />,
      dataIndex: "name",
      key: "name",
      sorter: true,
      render: (name: Doc["name"], data: Doc) => (
        <Space>
          <Avatar size={32} src={data?.name} />
          <Link to={"/"}>{name}</Link>
        </Space>
      ),

      width: 300,
    },
    {
      title: (props) => <TableHeader title="Status" {...props} />,
      dataIndex: "isAvailableForAcceptOrder",
      key: "status",
      render: (status) => (
        <>
          <CustomSwitch
            label="Online"
            checked={status}
            className="greenSwitch"
          />
        </>
      ),
      sorter: true,
      width: 160,
    },
    {
      title: (props) => <TableHeader title="Pharmacy" {...props} />,
      dataIndex: "pharmacy",
      key: "pharmacy",
      render: (_, data) => (
        <Space>
          <Avatar size={32} src={data?.pharmacy?.logo} />
          <Link to={`/pharmacy/${data?.pharmacy?.id}`}>
            {data?.pharmacy?.name}
          </Link>
        </Space>
      ),
      sorter: true,
      width: 300,
    },

    {
      title: <TableHeader title="Address" sort />,
      dataIndex: "address",
      key: "address",
      render: (address) => (
        <>
          <Typography.Text>{address}</Typography.Text>
        </>
      ),
      sorter: true,
      width: 300,
    },
  ];

  return (
    <div className="tab-wrapper">
      <div className="filter-row-absolute">
        {" "}
        <FilterRow hideCheckbox hideDatePicker />
      </div>
      <CustomTable
        columns={columns}
        dataSource={allBranch?.docs}
        tableHeightsmall
      />
    </div>
  );
};

export default BranchesTabpage;
