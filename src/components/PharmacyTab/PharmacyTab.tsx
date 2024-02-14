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
import { useState } from "react";
// import assets from "json/assets";
import { Link } from "react-router-dom";
import { PharmacytabWrapper } from "styles/StyledComponents/PharmacytabWrapper";
import { Data, Doc, pharmacyTab } from "typescript/interfaces/pharmacyTab.interface";

interface propsType {
  pharmacy: Data;
  isPending: boolean;
}

const PharmacyTab = (props: propsType) => {

  const { pharmacy, isPending } = props;

  const [filter, setFilter] = useState({
    pharmacyLength: 5,
    pharmacySortColumn: "name",
    pharmacySortOrder: "DSC",
    pharmacySearch: "",
    pharmacyPage: 1,
  })

  // useMemoizedFn -- not to change the function reference
  const updateFilter = useMemoizedFn((newValues: typeof filter) => {
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
                : status === "pending"
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
      <FilterRow hideDatePicker />
      <CustomTable
        columns={columns}
        dataSource={pharmacy?.docs}
        pagination={{
          total: pharmacy?.count,
          pageSize: filter?.pharmacyLength,
          current: filter?.pharmacyPage,
          onChange: (num) => {
            updateFilter({ pharmacyPage: num});
          },
        }}
        loading={isPending}
        perPageItem={{
          options: itemPerPage(),
          value: Number(filter?.pharmacyLength),
          onChange: (value) => {
            updateFilter({
              pharmacyLength: (value),
              pharmacyPage: 1,
            });
          },
        }}
      />
    </PharmacytabWrapper>
  );
};

export default PharmacyTab;
