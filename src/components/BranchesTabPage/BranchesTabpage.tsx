/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import CustomButtonPrimary from "UI/CustomButton/CustomButtonPrimary";
import CustomSwitch from "UI/CustomSwichWithLabel/CustomSwitch";
import CustomTable, { TableHeader } from "UI/CustomTable/CustomTable";
import CustomTag from "UI/CustomTag/CustomTag";
import CircleCheck from "UI/Icons/CircleCheck";
import CircleCross from "UI/Icons/CircleCross";
import { useMemoizedFn } from "ahooks";
import { Space, Avatar, Flex, Button, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import FilterRow from "components/FilterRow/FilterRow";
import { itemPerPage } from "lib/helpers/common.helper";
import { branchApi } from "lib/modules/branchTab/functions/branchTab.api";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DataBranchAll, Doc } from "typescript/interfaces/branchAll.interface";

interface propsType {
  allBranch: DataBranchAll;
}

interface filterInterface {
  pharmacyLength?: number,
  pharmacySortColumn?: string,
  pharmacySortOrder?: string,
  pharmacySearch?: string,
  pharmacyPage?: number,
  pharmacyStatus?: string
}

const BranchesTabpage = () => {

  // State for payload
  const [filter, setFilter] = useState<filterInterface>({
    pharmacyLength: 5,
    pharmacySortColumn: "name",
    pharmacySortOrder: "ASC",
    pharmacySearch: "",
    pharmacyPage: 1,
    pharmacyStatus:   ""
  })
  console.log('filterBranch', filter);

  // Fetch Data for Branch Tab
  const { data: allBranch } = useQuery({
    queryKey: ["branchAlll", filter],
    queryFn: ()=> branchApi({...filter}),
  });
  console.log("allBranch", allBranch);  

  // useMemoizedFn 
  const updateFilter = useMemoizedFn((newValues: filterInterface) => {
    setFilter((prevParams) => {
      return {
        ...prevParams,
        ...newValues,
      };
    });
  });

  // Columns  
  const columns: ColumnsType<Doc> = [
    {
      title: (props) => <TableHeader title="Name" {...props} />,
      dataIndex: "name",
      key: "name",
      sorter: true,
      render: (name: Doc["name"], data: Doc) => (
        <Space>
          <Avatar size={32} src={data?.name} style={{backgroundColor: '#ff9e16'}}>{name?.charAt(0)}</Avatar>
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
          <Avatar size={32} style={{backgroundColor: "green"}}>{data?.pharmacy?.name?.charAt(0)}</Avatar>
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
        pagination={{
          total: allBranch?.count,
          pageSize: filter?.pharmacyLength,
          current: filter?.pharmacyPage,
          onChange: (num) => {
            updateFilter({ pharmacyPage: num });
          },
        }}
        tableHeightsmall
        perPageItem={{
          options: itemPerPage(),
          value: Number(filter?.pharmacyLength),
          onChange: (value) => {
            updateFilter({
              pharmacyLength: value as number,
              pharmacyPage: 1,
            });
            console.log('value', value);
          },
        }}
      />
    </div>
  );
};

export default BranchesTabpage;
