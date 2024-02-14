/* eslint-disable @typescript-eslint/no-unused-vars */
import CommonModalWrapper from "UI/CommonModalWrapper/CommonModalWrapper";
import CustomButtonPrimary from "UI/CustomButton/CustomButtonPrimary";
import CustomInput from "UI/CustomInput/CustomInput";
import CustomSwitch from "UI/CustomSwichWithLabel/CustomSwitch";
import CustomTable, { TableHeader } from "UI/CustomTable/CustomTable";
import AddIcon from "UI/Icons/AddIcon";
import CrossRedIcon from "UI/Icons/CrossRedIcon";
import DeleteIcon from "UI/Icons/DeleteIcon";
import InfoIcon from "UI/Icons/InfoIcon";
import RightGreenIcon from "UI/Icons/RightGreenIcon";
import {
  Avatar,
  Button,
  Col,
  Flex,
  List,
  Modal,
  Row,
  Select,
  Space,
  Tooltip,
  Typography,
} from "antd";
import { ColumnsType } from "antd/es/table";
import FilterRow from "components/FilterRow/FilterRow";
import assets from "json/assets";
import { useState } from "react";
import { UserTabWrapper } from "styles/StyledComponents/UserTabWrapper";
interface DataType {
  key: string;
  name: string;
  designation: string;
  email: string;
  phoneNumber: number | string;
  role: "Admin" | "User";
  branches: string | number;
}

const data: DataType[] = [
  {
    key: "1",
    name: "Dianne Russell",
    designation: "Senior Manager",
    email: "joie@gmail.com",
    phoneNumber: "077 5465 8785",
    role: "Admin",
    branches: 4,
  },
  {
    key: "1",
    name: "Dianne Russell",
    designation: "Senior Manager",
    email: "joie@gmail.com",
    phoneNumber: "077 5465 8785",
    role: "Admin",
    branches: 4,
  },
  {
    key: "1",
    name: "Dianne Russell",
    designation: "Senior Manager",
    email: "joie@gmail.com",
    phoneNumber: "077 5465 8785",
    role: "Admin",
    branches: 4,
  },
  {
    key: "1",
    name: "Dianne Russell",
    designation: "Senior Manager",
    email: "joie@gmail.com",
    phoneNumber: "077 5465 8785",
    role: "Admin",
    branches: 4,
  },
  {
    key: "1",
    name: "Dianne Russell",
    designation: "Senior Manager",
    email: "joie@gmail.com",
    phoneNumber: "077 5465 8785",
    role: "Admin",
    branches: 4,
  },
  {
    key: "1",
    name: "Dianne Russell",
    designation: "Senior Manager",
    email: "joie@gmail.com",
    phoneNumber: "077 5465 8785",
    role: "Admin",
    branches: 4,
  },
  {
    key: "1",
    name: "Dianne Russell",
    designation: "Senior Manager",
    email: "joie@gmail.com",
    phoneNumber: "077 5465 8785",
    role: "Admin",
    branches: 4,
  },
  {
    key: "1",
    name: "Dianne Russell",
    designation: "Senior Manager",
    email: "joie@gmail.com",
    phoneNumber: "077 5465 8785",
    role: "Admin",
    branches: 4,
  },
];

const dataList = [
  "View & edit pharmacy details;",
  "View branches;",
  "Change pharmacy settings;",
  "View & edit Medications Price Override.",
];

const BranchesdataList = [
  {
    picture: `${assets.img01}`,
    text: "Bilbo’s House",
  },
  {
    picture: `${assets.img01}`,
    text: "Bilbo’s House",
  },
  {
    picture: `${assets.img01}`,
    text: "Bilbo’s House",
  },
  {
    picture: `${assets.img01}`,
    text: "Bilbo’s House",
  },
  {
    picture: `${assets.img01}`,
    text: "Bilbo’s House",
  },
  {
    picture: `${assets.img01}`,
    text: "Bilbo’s House",
  },
  {
    picture: `${assets.img01}`,
    text: "Bilbo’s House",
  },
  {
    picture: `${assets.img01}`,
    text: "Bilbo’s House",
  },
  {
    picture: `${assets.img01}`,
    text: "Bilbo’s House",
  },
  {
    picture: `${assets.img01}`,
    text: "Bilbo’s House",
  },
  {
    picture: `${assets.img01}`,
    text: "Bilbo’s House",
  },
  {
    picture: `${assets.img01}`,
    text: "Bilbo’s House",
  },
  {
    picture: `${assets.img01}`,
    text: "Bilbo’s House",
  },
  {
    picture: `${assets.img01}`,
    text: "Bilbo’s House",
  },
  {
    picture: `${assets.img01}`,
    text: "Bilbo’s House",
  },
  {
    picture: `${assets.img01}`,
    text: "Bilbo’s House",
  },
];

const Roledata = [
  "View & edit pharmacy details;",
  "View branches;",
  "Change pharmacy settings;",
  "View & edit Medications Price Override.",
];

const text = (
  <>
    <Typography.Text>Permissions that will be granted to user:</Typography.Text>
    <List
      dataSource={dataList}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text>{item}</Typography.Text>
        </List.Item>
      )}
    />
  </>
);

// select field
interface Options {
  value: string;
  label: string | JSX.Element | JSX.Element[];
}
interface selectProps {
  option?: Options[];
}

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
// select field

const UserTab = ({ option }: selectProps) => {
  // table data decleared
  const columns: ColumnsType<DataType> = [
    {
      title: <TableHeader title="Name" sort />,
      dataIndex: "name",
      key: "name",
      render: (name, data: DataType) => (
        <Space
          direction="vertical"
          size={2}
          className="user-name"
          onClick={handleModalToggleUser}
        >
          <CustomButtonPrimary type="text">{name}</CustomButtonPrimary>
          <p>{data.designation}</p>
        </Space>
      ),
      sorter: true,
      width: 300,
    },
    {
      title: <TableHeader title="Email" sort />,
      dataIndex: "email",
      key: "email",
      render: (email) => <p>{email}</p>,
      sorter: true,
      width: 230,
    },
    {
      title: <TableHeader title="Phone Number" sort />,
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      sorter: true,
      render: (phone) => <p>{phone}</p>,
      align: "start",
      width: 230,
    },

    {
      title: <TableHeader title="Role" sort />,
      key: "role",
      dataIndex: "role",
      render: (role) => (
        <>
          <p>{role}</p>
        </>
      ),
      sorter: true,
      width: 140,
    },
    {
      title: <TableHeader title="# branches" sort />,
      key: "branches",
      dataIndex: "branches",
      render: (branches) => (
        <CustomButtonPrimary
          type="text"
          className="branches-button"
          onClick={handleModalToggleBranchesList}
        >
          {branches}
        </CustomButtonPrimary>
      ),
      align: "end",
      sorter: true,
      width: 230,
    },
  ];
  // table data decleared

  // modal
  // User Details modal
  const [isModalOpenUser, setIsModalOpenUser] = useState(false);
  const handleModalToggleUser = () => {
    setIsModalOpenUser(!isModalOpenUser);
  };
  // User Details modal

  // branches list modal
  const [isModalOpenBranchesList, setIsModalOpenBranchesList] = useState(false);
  const handleModalToggleBranchesList = () => {
    setIsModalOpenBranchesList(!isModalOpenBranchesList);
  };
  // branches list modal

  // restore password modal
  const [isModalOpenRestorePass, setIsModalOpenRestorePass] = useState(false);
  const handleModalToggleRestorePass = () => {
    setIsModalOpenRestorePass(!isModalOpenRestorePass);
  };
  // restore password modal

  // Change Role modal
  const [isModalOpenChangeModal, setIsModalOpenChangeModal] = useState(false);
  const handleModalToggleChangeModal = () => {
    setIsModalOpenChangeModal(!isModalOpenChangeModal);
  };
  // Change Role modal
  // modal

  const SELECToptions = [
    {
      value: "value1",
      label: (
        <>
          <div className="branchesListTxt">
            {<Avatar src={assets.img01} />}
            <Typography.Text>Paulatim Summa Petuntur</Typography.Text>
          </div>
        </>
      ),
    },
    {
      value: "value2",
      label: (
        <>
          <div className="branchesListTxt">
            {<Avatar src={assets.img01} />}
            <Typography.Text>Paulatim Summa Petuntur</Typography.Text>
          </div>
        </>
      ),
    },
    {
      value: "value3",
      label: (
        <>
          <div className="branchesListTxt">
            {<Avatar src={assets.img01} />}
            <Typography.Text>Paulatim Summa Petuntur</Typography.Text>
          </div>
        </>
      ),
    },
    {
      value: "value4",
      label: (
        <>
          <div className="branchesListTxt">
            {<Avatar src={assets.img01} />}
            <Typography.Text>Paulatim Summa Petuntur</Typography.Text>
          </div>
        </>
      ),
    },
  ];

  return (
    <UserTabWrapper>
      <FilterRow hideCheckbox hideDatePicker />
      <CustomTable columns={columns} dataSource={data} />

      {/* User Details modal */}
      <CommonModalWrapper
        title="User Details"
        open={isModalOpenUser}
        onCancel={handleModalToggleUser}
        className="editModalWrapper userDetailsModal"
      >
        <div className="userDetailsModalBody">
          <Row className="userdetailsRow">
            <Col span={12}>
              <div className="userdetailsWrap">
                <Typography.Title level={5}>Dianne Russell</Typography.Title>
                <Typography.Text>Senior Manager</Typography.Text>
              </div>
            </Col>
            <Col span={12}>
              <div className="userdetailsWrap">
                <div
                  className="userdetailsSwitch"
                  onClick={handleModalToggleChangeModal}
                >
                  <CustomSwitch label="Grant admin permissions" />
                  <Tooltip
                    placement="rightBottom"
                    title={text}
                    overlayClassName="tooltipCard"
                  >
                    <Button className="tooltipBtn">
                      <InfoIcon />
                    </Button>
                  </Tooltip>
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className="userdetailsWrap">
                <Typography.Text>Senior Manager</Typography.Text>
                <Typography.Title level={4}>
                  cedennar@gmail.com
                </Typography.Title>
              </div>
            </Col>
            <Col span={12}>
              <div className="userdetailsWrap">
                <Typography.Text>Senior Manager</Typography.Text>
                <Typography.Title level={4}>070 6302 8446 </Typography.Title>
              </div>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <div className="userdetailsWrap userdetailsPassword">
                <div className="userPasswordWrap">
                  <Typography.Text>Password</Typography.Text>
                  <Typography.Title level={4}>xxxxxxxxxxxxx</Typography.Title>
                </div>
                <CustomButtonPrimary
                  type="link"
                  className="restoreBtn"
                  onClick={handleModalToggleRestorePass}
                >
                  Restore
                </CustomButtonPrimary>
              </div>
            </Col>
          </Row>

          <div className="branchesCardWrap">
            <div className="branchesCardWrapHead">
              <Typography.Title level={4}>Branches:</Typography.Title>
              <CustomButtonPrimary
                type="link"
                icon={<AddIcon color="#1760E8" width={11} height={11} />}
              >
                Add Branch
              </CustomButtonPrimary>
            </div>

            <List
              dataSource={BranchesdataList}
              renderItem={(item) => (
                <>
                  <List.Item>
                    <div className="branchesListTxt">
                      {<Avatar src={item.picture} />}
                      <Typography.Text>{item.text}</Typography.Text>
                    </div>

                    <Button>
                      <DeleteIcon />
                    </Button>
                  </List.Item>

                  <List.Item>
                    <div className="branchesAdd">
                      <Select
                        onChange={handleChange}
                        options={option ? option : SELECToptions}
                        style={{ width: 258 }}
                        defaultValue="lucy"
                        popupClassName="branchesAddPopup"
                      />
                      <div className="branchesAddButton">
                        <Button>
                          <RightGreenIcon />
                        </Button>
                        <Button>
                          <CrossRedIcon />
                        </Button>
                      </div>
                    </div>
                  </List.Item>
                </>
              )}
            />
          </div>
        </div>
      </CommonModalWrapper>
      {/* User Details modal */}

      {/* branches list modal */}
      <CommonModalWrapper
        title="Dianne Russell’s branches"
        open={isModalOpenBranchesList}
        onCancel={handleModalToggleBranchesList}
        className="editModalWrapper userDetailsModal"
      >
        <div className="branchesCardWrap branchesListModal">
          <div className="branchesCardWrapHead">
            <Typography.Title level={4}>Branches List (54)</Typography.Title>
          </div>

          <List
            dataSource={BranchesdataList}
            renderItem={(item) => (
              <>
                <List.Item>
                  <div className="branchesListTxt">
                    {<Avatar src={item.picture} />}
                    <Typography.Text>{item.text}</Typography.Text>
                  </div>
                </List.Item>
              </>
            )}
          />
        </div>
      </CommonModalWrapper>
      {/* branches list modal */}

      {/* restore password modal */}
      <CommonModalWrapper
        title="Restore Password"
        open={isModalOpenRestorePass}
        onCancel={handleModalToggleRestorePass}
        className="editModalWrapper resetPassModal"
        okText="Save"
      >
        <div className="modalBodyWrap">
          <div className="editFrom">
            <Row>
              <Col span={24}>
                <div className="inputField">
                  <label>New password</label>
                  <CustomInput placeholder="Type" type="text" />
                </div>
              </Col>
              <Col span={24}>
                <div className="inputField">
                  <label>Repeat new password</label>
                  <CustomInput placeholder="Type" type="text" />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </CommonModalWrapper>
      {/* restore password modal */}

      {/* change role modal */}
      <CommonModalWrapper
        title="Change Role"
        open={isModalOpenChangeModal}
        onCancel={handleModalToggleChangeModal}
        className="editModalWrapper changeRoleModal"
        okText="Yes, proceed"
      >
        <div className="changeRoleBody">
          <p>
            Are you sure that you want to grant <span>Dianne Russell</span> an
            admin permissions?
          </p>

          <List
            header={<div>Permissions that will be granted to user:</div>}
            dataSource={Roledata}
            renderItem={(item) => (
              <List.Item>
                <Typography.Text>{item}</Typography.Text>
              </List.Item>
            )}
          />
        </div>
      </CommonModalWrapper>
      {/* change role modal */}
    </UserTabWrapper>
  );
};

export default UserTab;
