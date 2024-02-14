import Layout from "Layout/Layout";
import CustomTable, { TableHeader } from "UI/CustomTable/CustomTable";
import CustomTag from "UI/CustomTag/CustomTag";
import CheckIcon from "UI/Icons/CheckIcon";
import ClockIcon from "UI/Icons/ClockIcon";
import RoundArrowUpIocn from "UI/Icons/RoundArrowUpIocn";
import { Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import FilterRow from "components/FilterRow/FilterRow";
import {
  PayoutTable,
  TopHeader,
} from "styles/StyledComponents/PayoutreporttableWrapper";

const PayoutReport = () => {
  interface DataType {
    key: string;
    initiatedDate: string;
    status: string;
    arrival: string;
    branch: string;
    order: string;
    gross: string;
    fees: string;
    net: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: <TableHeader title="Initiated Date" sort />,
      dataIndex: "initiatedDate",
      key: "initiatedDate",
      sorter: true,
      width: 175,
    },
    {
      title: <TableHeader title="Status" sort />,
      dataIndex: "status",
      key: "status",
      sorter: true,
      render: (status) => (
        <CustomTag
          color={
            status === "Paid"
              ? "success"
              : status === "In Progress"
              ? "processing"
              : "default"
          }
          text={status}
          icon={
            status === "Paid" ? (
              <CheckIcon />
            ) : status === "In Progress" ? (
              <ClockIcon />
            ) : (
              <RoundArrowUpIocn />
            )
          }
        />
      ),
      width: 160,
    },
    {
      title: <TableHeader title="Arrival" sort />,
      dataIndex: "arrival",
      key: "arrival",
      sorter: true,
      width: 200,
    },
    {
      title: <TableHeader title="Branches #" sort />,
      dataIndex: "branch",
      key: "branch",
      sorter: true,
      align: "end",
      width: 140,
    },
    {
      title: <TableHeader title="# orders" sort />,
      dataIndex: "order",
      key: "order",
      sorter: true,
      align: "end",
      width: 140,
    },
    {
      title: <TableHeader title="Gross, ￡" sort />,
      dataIndex: "gross",
      key: "gross",
      sorter: true,
      align: "end",
      width: 148,
    },
    {
      title: <TableHeader title="Fees,￡" sort />,
      dataIndex: "fees",
      key: "fees",
      sorter: true,
      align: "end",
      width: 120,
    },
    {
      title: <TableHeader title="Net,￡" sort />,
      dataIndex: "net",
      key: "net",
      sorter: true,
      align: "end",
      width: 120,
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      initiatedDate: "10 Oct, 2023",
      status: "Payout Sent",
      arrival: "24 Oct, 2023 (Estimated)",
      branch: "17",
      order: "23",
      gross: "198",
      fees: "9622",
      net: "647",
    },
    {
      key: "1",
      initiatedDate: "10 Oct, 2023",
      status: "Paid",
      arrival: "24 Oct, 2023 (Estimated)",
      branch: "17",
      order: "23",
      gross: "198",
      fees: "9622",
      net: "647",
    },
    {
      key: "1",
      initiatedDate: "10 Oct, 2023",
      status: "Paid",
      arrival: "24 Oct, 2023 (Estimated)",
      branch: "17",
      order: "23",
      gross: "198",
      fees: "9622",
      net: "647",
    },
    {
      key: "1",
      initiatedDate: "10 Oct, 2023",
      status: "Payout Sent",
      arrival: "24 Oct, 2023 (Estimated)",
      branch: "17",
      order: "23",
      gross: "198",
      fees: "9622",
      net: "647",
    },
    {
      key: "1",
      initiatedDate: "10 Oct, 2023",
      status: "In Progress",
      arrival: "24 Oct, 2023 (Estimated)",
      branch: "17",
      order: "23",
      gross: "198",
      fees: "9622",
      net: "647",
    },
    {
      key: "1",
      initiatedDate: "10 Oct, 2023",
      status: "In Progress",
      arrival: "24 Oct, 2023 (Estimated)",
      branch: "17",
      order: "23",
      gross: "198",
      fees: "9622",
      net: "647",
    },
    {
      key: "1",
      initiatedDate: "10 Oct, 2023",
      status: "Paid",
      arrival: "24 Oct, 2023 (Estimated)",
      branch: "17",
      order: "23",
      gross: "198",
      fees: "9622",
      net: "647",
    },
    {
      key: "1",
      initiatedDate: "10 Oct, 2023",
      status: "Payout Sent",
      arrival: "24 Oct, 2023 (Estimated)",
      branch: "17",
      order: "23",
      gross: "198",
      fees: "9622",
      net: "647",
    },
    {
      key: "1",
      initiatedDate: "10 Oct, 2023",
      status: "Payout Sent",
      arrival: "24 Oct, 2023 (Estimated)",
      branch: "17",
      order: "23",
      gross: "198",
      fees: "9622",
      net: "647",
    },
    {
      key: "1",
      initiatedDate: "10 Oct, 2023",
      status: "In Progress",
      arrival: "24 Oct, 2023 (Estimated)",
      branch: "17",
      order: "23",
      gross: "198",
      fees: "9622",
      net: "647",
    },
  ];

  return (
    <Layout Headertext={"Spinal Health Payout Report"} backButton>
      <TopHeader>
        <Typography.Text className="date-label">Initiated Date</Typography.Text>
        <FilterRow hidesearch showDownloadButton hideCheckbox />
      </TopHeader>
      <PayoutTable>
        <CustomTable columns={columns} dataSource={data} />
      </PayoutTable>
    </Layout>
  );
};

export default PayoutReport;
