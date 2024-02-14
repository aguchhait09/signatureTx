import Layout from "Layout/Layout";
import CustomTable, { TableHeader } from "UI/CustomTable/CustomTable";
import FilterRow from "components/FilterRow/FilterRow";
import {
  PageCommissionReport,
  CommissionTable,
  TopHeader,
} from "styles/StyledComponents/CommissionreporttableWrapper";
import { ColumnsType } from "antd/es/table";
import { Avatar, Flex } from "antd";
import { Link } from "react-router-dom";
import assets from "json/assets";

const CommissionReport = () => {
  interface DataType {
    key: string;
    branch: string;
    branchLogo?: string;
    address: string;
    order: string;
    gross: string;
    commission: string;
    net: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: <TableHeader title="Branch" sort />,
      dataIndex: "branch",
      key: "branch",
      sorter: true,
      render: (branch, branchLogo: DataType) => (
        <Flex align="center" className="branch-media">
          <Avatar size={32} src={branchLogo.branchLogo} />
          <Link to={"/"} className="branch-name">
            {branch}
          </Link>
        </Flex>
      ),
    },
    {
      title: <TableHeader title="Address" sort />,
      dataIndex: "address",
      key: "address",
      sorter: true,
    },
    {
      title: <TableHeader title="# Order" sort />,
      dataIndex: "order",
      key: "order",
      sorter: true,
      align: "end",
    },
    {
      title: <TableHeader title="Gross,￡" sort />,
      dataIndex: "gross",
      key: "gross",
      sorter: true,
      align: "end",
    },
    {
      title: <TableHeader title="Commission,￡" sort />,
      dataIndex: "commission",
      key: "commission",
      sorter: true,
      align: "end",
    },
    {
      title: <TableHeader title="Net,￡" sort />,
      dataIndex: "net",
      key: "net",
      sorter: true,
      align: "end",
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      branch: "Paulatim Summa Petuntur",
      address: "5278 Meadowview Circle, Springfield",
      order: "4",
      gross: "9624",
      commission: "647",
      net: "9624",
      branchLogo: assets.img01,
    },
    {
      key: "2",
      branch: "Aversi Pharmacy",
      address: "6923 Brookside Avenue, Boulder",
      order: "12",
      gross: "3535",
      commission: "235",
      net: "3535",
      branchLogo: assets.img02,
    },
    {
      key: "3",
      branch: "Aversi Pharmacy",
      address: "6923 Brookside Avenue, Boulder",
      order: "12",
      gross: "3535",
      commission: "235",
      net: "3535",
      branchLogo: assets.img03,
    },
    {
      key: "4",
      branch: "Aversi Pharmacy",
      address: "6923 Brookside Avenue, Boulder",
      order: "12",
      gross: "3535",
      commission: "235",
      net: "3535",
      branchLogo: assets.img02,
    },
    {
      key: "5",
      branch: "Aversi Pharmacy",
      address: "6923 Brookside Avenue, Boulder",
      order: "12",
      gross: "3535",
      commission: "235",
      net: "3535",
      branchLogo: assets.img04,
    },
    {
      key: "6",
      branch: "Aversi Pharmacy",
      address: "6923 Brookside Avenue, Boulder",
      order: "12",
      gross: "3535",
      commission: "235",
      net: "3535",
      branchLogo: assets.img05,
    },
    {
      key: "7",
      branch: "Aversi Pharmacy",
      address: "6923 Brookside Avenue, Boulder",
      order: "12",
      gross: "3535",
      commission: "235",
      net: "3535",
      branchLogo: assets.img06,
    },
    {
      key: "8",
      branch: "Aversi Pharmacy",
      address: "6923 Brookside Avenue, Boulder",
      order: "12",
      gross: "3535",
      commission: "235",
      net: "3535",
      branchLogo: assets.img07,
    },
    {
      key: "9",
      branch: "Aversi Pharmacy",
      address: "6923 Brookside Avenue, Boulder",
      order: "12",
      gross: "3535",
      commission: "235",
      net: "3535",
      branchLogo: assets.img08,
    },
    {
      key: "10",
      branch: "Aversi Pharmacy",
      address: "6923 Brookside Avenue, Boulder",
      order: "12",
      gross: "3535",
      commission: "235",
      net: "3535",
      branchLogo: assets.img09,
    },
    {
      key: "11",
      branch: "Aversi Pharmacy",
      address: "6923 Brookside Avenue, Boulder",
      order: "12",
      gross: "3535",
      commission: "235",
      net: "3535",
      branchLogo: assets.img01,
    },
    {
      key: "12",
      branch: "John Brown",
      address: "active",
      order: "active",
      gross: "1",
      commission: "active",
      net: "active",
      branchLogo: assets.img02,
    },
    {
      key: "13",
      branch: "John Brown",
      address: "active",
      order: "active",
      gross: "1",
      commission: "active",
      net: "active",
      branchLogo: assets.img03,
    },
    {
      key: "14",
      branch: "John Brown",
      address: "active",
      order: "active",
      gross: "1",
      commission: "active",
      net: "active",
      branchLogo: assets.img02,
    },
    {
      key: "15",
      branch: "John Brown",
      address: "active",
      order: "active",
      gross: "1",
      commission: "active",
      net: "active",
      branchLogo: assets.img04,
    },
    {
      key: "16",
      branch: "John Brown",
      address: "active",
      order: "active",
      gross: "1",
      commission: "active",
      net: "active",
      branchLogo: assets.img05,
    },
    {
      key: "17",
      branch: "John Brown",
      address: "active",
      order: "active",
      gross: "1",
      commission: "active",
      net: "active",
      branchLogo: assets.img06,
    },
    {
      key: "18",
      branch: "John Brown",
      address: "active",
      order: "active",
      gross: "1",
      commission: "active",
      net: "active",
      branchLogo: assets.img07,
    },
    {
      key: "19",
      branch: "John Brown",
      address: "active",
      order: "active",
      gross: "1",
      commission: "active",
      net: "active",
      branchLogo: assets.img08,
    },
    {
      key: "20",
      branch: "John Brown",
      address: "active",
      order: "active",
      gross: "1",
      commission: "active",
      net: "active",
      branchLogo: assets.img09,
    },
  ];

  return (
    <Layout Headertext={"Spinal Health Commission"} backButton>
      <PageCommissionReport>
        <TopHeader className="report-table-header">
          <div className="reprt-header-right">
            <FilterRow hidefilter showDownloadButton hideCheckbox />
          </div>
        </TopHeader>
        <CommissionTable>
          <CustomTable columns={columns} dataSource={data} tableHeightsmall />
        </CommissionTable>
      </PageCommissionReport>
    </Layout>
  );
};

export default CommissionReport;
