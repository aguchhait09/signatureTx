import { useQuery } from "@tanstack/react-query";
import CustomButtonPrimary from "UI/CustomButton/CustomButtonPrimary";
import CustomTable, { TableHeader } from "UI/CustomTable/CustomTable";
import CustomTag from "UI/CustomTag/CustomTag";
import CircleCheck from "UI/Icons/CircleCheck";
import CircleCross from "UI/Icons/CircleCross";
import { useMemoizedFn } from "ahooks";
import { Avatar, Button, Flex, Space } from "antd";
import { ColumnsType } from "antd/es/table";
import FilterRow from "components/FilterRow/FilterRow";
import { itemPerPage } from "lib/helpers/common.helper";
import { pharmacyCall } from "lib/modules/pharmacyTab/functions/pharmacyTab.api";
import { useState } from "react";
// import assets from "json/assets";
import { Link } from "react-router-dom";
import { PharmacytabWrapper } from "styles/StyledComponents/PharmacytabWrapper";
import { Doc, pharmacyTab } from "typescript/interfaces/pharmacyTab.interface";

// interface propsType {
//   pharmacy: Data;
//   isPending: boolean;
// }

interface filterInterface {
  pharmacyLength?: number,
  pharmacySortColumn?: string,
  pharmacySortOrder?: string,
  pharmacySearch?: string,
  pharmacyPage?: number,
  pharmacyStatus?: string
}
// interface typeParams{
//     page?: number,
//       length?: number,
//       sort?: {
//         column?: string,
//         order?: string,
//       },
//       status?: string,
//   }

const PharmacyTab = (props: any) => {

  // const { pharmacy, isPending } = props;
   
  const [filter, setFilter] = useState<filterInterface>({
    pharmacyLength: 5,
    pharmacySortColumn: "name",
    pharmacySortOrder: "ASC",
    pharmacySearch: "",
    pharmacyPage: 1,
    pharmacyStatus:   ""
  })
  console.log('filter', filter);

  // Data Fetch
  const { isPending, data: pharmacy } = useQuery({
    queryKey: ["pharmacyTab", filter],
    queryFn: () => pharmacyCall({...filter}),
  });

  // Props for count ... child to parent
  if(props.count){
    props.count(pharmacy?.count)
  }

  // useMemoizedFn -- not to change the function reference
  const updateFilter = useMemoizedFn((newValues: filterInterface) => {
    setFilter((prevParams) => {
      return {
        ...prevParams,
        ...newValues,
      };
    });
  });

  const columns: ColumnsType<Doc> = [
    {
      title: (props) => <TableHeader title="Pharmacy" {...props} />,
      dataIndex: "name",
      key: "pharmacy",
      render: (name: Doc["name"], data: Doc) => {
        return (
          <Space>
            <Avatar size={32} src="" style={{ backgroundColor: "#0D80D8" }}>{name?.charAt(0)}</Avatar>
            <Link to={`/pharmacy/`}>{data?.name}</Link>
          </Space>
        );
      },
      sorter: true,
      width: 282,
      defaultSortOrder: "ascend",
    },
    {
      title: (props) => <TableHeader title="Status" {...props} />,
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <>
          <CustomTag
            color={
              status === "active"
                ? "success"
                : status === "pending"
                  ? "processing"
                  : "default"
            }
            text={
              status === "active"
                ? "Active"
                : status === "pending approval"
                  ? "Approval Pending"
                  : "Inactive"
            }
          />
        </>
      ),
      sorter: true,
      width: 282,
    },
    {
      title: (props) => <TableHeader title="Branches" {...props} />,
      dataIndex: "branches",
      key: "branches",
      sorter: true,
      render: (branches) => <>{branches > 0 ? branches : "-"}</>,
      align: "end",
      width: 282,
    },
    {
      title: "Action",
      key: "action",
      render: (status: pharmacyTab) => (
        <Flex justify="end" gap={4}>
          {status.status === "pending" && (
            <Space>
              <Button type="text" icon={<CircleCheck />} />
              <Button type="text" icon={<CircleCross />} />
            </Space>
          )}
          <CustomButtonPrimary type="link">View Report</CustomButtonPrimary>
        </Flex>
      ),
      align: "end",
      width: 282,
    },
  ];

  return (
    <PharmacytabWrapper>
      <FilterRow hideDatePicker 
      onChange={(e)=>(e.target.checked && updateFilter({pharmacyStatus: "pending approval"}))}
      />
      <CustomTable
        columns={columns}
        dataSource={pharmacy?.docs}
        pagination={{
          total: pharmacy?.count,
          pageSize: filter?.pharmacyLength,
          current: filter?.pharmacyPage,
          onChange: (num) => {
            updateFilter({ pharmacyPage: num });
          },
        }}
        loading={isPending}
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
    </PharmacytabWrapper>
  );
};

export default PharmacyTab;
