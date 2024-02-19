/* eslint-disable @typescript-eslint/no-unused-vars */
import useUrlState from "@ahooksjs/use-url-state";
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
import { Link } from "react-router-dom";
import { DataBranchAll, Doc } from "typescript/interfaces/branchAll.interface";
import { updateStatusButton } from "./Status.api";
import { updateStatusInterface } from "typescript/interfaces/updateStatus.interface";
import { useDebounce } from "@uidotdev/usehooks";
import { useState } from "react";

interface propsType {
  allBranch: DataBranchAll;
}

interface filterInterface {
  pharmacyLength?: number;
  pharmacySortColumn?: string;
  pharmacySortOrder?: string;
  pharmacySearch?: string;
  pharmacyPage?: number;
  pharmacyStatus?: string;
  updateStat?: string;
  branchId?: number
}

const BranchesTabpage = (props: any) => {
  // State for payload allBranch
  const [filter, setFilter] = useUrlState<filterInterface>({
    pharmacyLength: 5,
    pharmacySortColumn: "name",
    pharmacySortOrder: "ASC",
    pharmacySearch: "",
    pharmacyPage: 1,
    pharmacyStatus: "",
    updateStat: "",
    branchId: 1
  });
  console.log("filterBranch", filter);
  const debouncedFilter = useDebounce(filter.pharmacySearch, 1000)
  
  // Update Status
  const [stat, setStat] = useUrlState({
    availabilityStatusBySuperAdmin: false,
    branchId: 9,
    superAdminAvailabilityStatusExpiry: "2024-02-16T12:30:00.000Z"
  })
  console.log('stat', stat);
  const [open, setOpen] = useState(stat.availabilityStatusBySuperAdmin)
  
  // Fetch Data for Branch Tab
  const { data: allBranch } = useQuery({
    queryKey: ["branchAlll", debouncedFilter],
    queryFn: () => branchApi({ ...filter, pharmacySearch: debouncedFilter }),
    enabled: !!filter
  });
  console.log("allBranch", allBranch);

  // Fetch Update Status Data 
  const { data: statusUpdate } = useQuery({
    queryKey: ['updateStat', stat],
    queryFn: updateStatusButton,
    
  })
  console.log('StatusData', statusUpdate)


  // Porps for count ... child to parent
  if (props.counts) {
    props.counts(allBranch?.count);
  }

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
          <Avatar
            size={32}
            src={data?.name}
            style={{ backgroundColor: "#ff9e16" }}
          >
            {name?.charAt(0).toUpperCase()}
          </Avatar>
          <Link to={`/branch/${data?.id}`}>{name}</Link>
        </Space>
      ),
      fixed: 'left',
      width: 300,
    },
    {
      title: (props) => (
        <TableHeader title="Status" {...props} />
      ),
      dataIndex: "availabilityStatusBySuperAdmin",
      key: "availabilityStatusBySuperAdmin",
      render: (availabilityStatusBySuperAdmin , data: Doc) => (
        <>
          <CustomSwitch
            label={availabilityStatusBySuperAdmin ? "Online" : "Offline"}
            // checked={availabilityStatusBySuperAdmin}
            className="greenSwitch"
            onChange={(e) => setStat({...stat, availabilityStatusBySuperAdmin: e, branchId: data?.id})}
            defaultChecked={availabilityStatusBySuperAdmin}
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
          <Avatar size={32} style={{ backgroundColor: "green" }}>
            {data?.pharmacy?.name?.charAt(0)}
          </Avatar>
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
        <FilterRow
          hideCheckbox
          hideDatePicker
          onSearch={(e) =>
            e.target.value
              ? updateFilter({ ...filter, pharmacyPage: 1, pharmacySearch: e.target.value })
              : updateFilter({ ...filter, pharmacyPage: 1, pharmacySearch: "" })
          }
        />
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
            console.log("value", value);
          },
        }}
        scroll={{x: 1300}}
        
      />
    </div>
  );
};

export default BranchesTabpage;
