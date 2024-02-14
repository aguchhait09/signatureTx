import CustomTable, { TableHeader } from "UI/CustomTable/CustomTable";
import DeleteIcon from "UI/Icons/DeleteIcon";
import EditIcon from "UI/Icons/EditIcon";
import { Space, Typography, Button, Flex } from "antd";
import { ColumnsType } from "antd/es/table";
import FilterRow from "components/FilterRow/FilterRow";

const MedicationsPriceOverrideTab = () => {
  interface DataType {
    key: string;
    medication: string;
    packqty: number;
    priceperpack: string;
    markup: string;
    resaleprice: string;
    priceoverride: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: <TableHeader title="Medication" sort />,
      dataIndex: "medication",
      key: "medication",
      render: (medication) => <Typography.Text>{medication}</Typography.Text>,
      sorter: true,
      width: 240,
    },
    {
      title: <TableHeader title="Pack Qty" />,
      dataIndex: "packqty",
      key: "packqty",
      render: (packqty) => <Typography.Text>{packqty}</Typography.Text>,
      sorter: true,
      width: 124,
      align: "end",
    },
    {
      title: <TableHeader title="DT Price Per Pack, £" sort />,
      dataIndex: "priceperpack",
      key: "priceperpack",
      render: (priceperpack) => (
        <>
          <Typography.Text>{priceperpack}</Typography.Text>
        </>
      ),
      sorter: true,
      width: 204,
      align: "end",
    },
    {
      title: <TableHeader title="Markup, £" sort />,
      dataIndex: "markup",
      key: "markup",
      sorter: true,
      render: (markup) => <Typography.Text>{markup}</Typography.Text>,
      width: 131,
      align: "end",
    },
    {
      title: <TableHeader title="Resale Price, £" sort />,
      key: "resaleprice",
      dataIndex: "resaleprice",
      render: (resaleprice) => (
        <>
          <Typography.Text>{resaleprice}</Typography.Text>
        </>
      ),
      align: "end",
      width: 160,
    },
    {
      title: <TableHeader title="Price Override, £" sort />,
      key: "priceoverride",
      dataIndex: "priceoverride",
      render: (priceoverride) => (
        <>
          <Typography.Text>{priceoverride}</Typography.Text>
        </>
      ),
      align: "end",
      width: 173,
    },
    {
      title: "Actions",
      key: "action",
      render: () => (
        <Flex justify="center" gap={4}>
          <Space>
            <Button type="text" icon={<EditIcon />} />
            <Button type="text" icon={<DeleteIcon />} />
          </Space>
        </Flex>
      ),
      align: "center",
      width: 100,
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      medication: "Acetaminophen",
      packqty: 300,
      priceperpack: "£00.00",
      markup: "£0.20",
      resaleprice: "£23.00",
      priceoverride: "£23.00",
    },
    {
      key: "1",
      medication: "Adderall",
      packqty: 100,
      priceperpack: "£00.00",
      markup: "£0.05",
      resaleprice: "£105.00",
      priceoverride: "£23.00",
    },
    {
      key: "1",
      medication: "Acetaminophen",
      packqty: 300,
      priceperpack: "£00.00",
      markup: "£0.20",
      resaleprice: "£23.00",
      priceoverride: "£23.00",
    },
    {
      key: "1",
      medication: "Adderall",
      packqty: 100,
      priceperpack: "£00.00",
      markup: "£0.05",
      resaleprice: "£105.00",
      priceoverride: "£23.00",
    },
    {
      key: "1",
      medication: "Acetaminophen",
      packqty: 300,
      priceperpack: "£00.00",
      markup: "£0.20",
      resaleprice: "£23.00",
      priceoverride: "£23.00",
    },
    {
      key: "1",
      medication: "Adderall",
      packqty: 100,
      priceperpack: "£00.00",
      markup: "£0.05",
      resaleprice: "£105.00",
      priceoverride: "£23.00",
    },
    {
      key: "1",
      medication: "Acetaminophen",
      packqty: 300,
      priceperpack: "£00.00",
      markup: "£0.20",
      resaleprice: "£23.00",
      priceoverride: "£23.00",
    },
    {
      key: "1",
      medication: "Adderall",
      packqty: 100,
      priceperpack: "£00.00",
      markup: "£0.05",
      resaleprice: "£105.00",
      priceoverride: "£23.00",
    },
    {
      key: "1",
      medication: "Acetaminophen",
      packqty: 300,
      priceperpack: "£00.00",
      markup: "£0.20",
      resaleprice: "£23.00",
      priceoverride: "£23.00",
    },
    {
      key: "1",
      medication: "Adderall",
      packqty: 100,
      priceperpack: "£00.00",
      markup: "£0.05",
      resaleprice: "£105.00",
      priceoverride: "£23.00",
    },
  ];

  return (
    <>
      <FilterRow
        title="Medications Price Override 23"
        hideCheckbox
        hideDatePicker
        showAddButton
        hidefilter
      />
      <CustomTable columns={columns} dataSource={data} />
    </>
  );
};

export default MedicationsPriceOverrideTab;
