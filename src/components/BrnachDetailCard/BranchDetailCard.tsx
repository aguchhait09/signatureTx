import CommonModalWrapper from "UI/CommonModalWrapper/CommonModalWrapper";
import CustomInput from "UI/CustomInput/CustomInput";
import CustomSelect from "UI/CustomSelect/CustomSelect";
import CustomSwitch from "UI/CustomSwichWithLabel/CustomSwitch";
import EditIcon from "UI/Icons/EditIcon";
import WhiteCrossIcon from "UI/Icons/WhiteCrossIcon";
import { Avatar, Button, Col, Flex, Row, Space, Typography } from "antd";

import assets from "json/assets";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CardListItem,
  PharmaCardWrapper,
} from "styles/StyledComponents/PharmaCardWrapper";

type DetailsCardProps = {
  details: {
    name: string;
    logo: string;
    phone: string;
    postcode: string;
    city: string;
    email: string;
    address: string;
    address2: string;
    website: string;
    pharmacy: string;
    status?: boolean;
  };
};
const BranchDetailsCard = (props: DetailsCardProps) => {
  const { details } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const SELECToptions = [
    { value: "New", label: "New" },
    { value: "Approval Pending", label: "Approval Pending" },
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];

  return (
    <PharmaCardWrapper className="common-white-box">
      <Flex align="center" justify="space-between" className="title-wrap">
        <p className="pharma-title">Branch Details</p>
        <Button onClick={showModal} type="text" icon={<EditIcon />} />
      </Flex>

      <Flex justify="space-between">
        <Space size={12} align="center" className="pharma-logo-sec">
          <Avatar size={48} icon={<img src={details?.logo} />} />

          <div>
            <Space size={20}>
              <Typography.Title level={5}>{details?.name}</Typography.Title>
              <CustomSwitch
                className="greenSwitch"
                label={details?.status ? "Online" : "Offline"}
              />
            </Space>
            <p className="grey-text">{details.website}</p>
          </div>
          {/* <AccountStatusChip status={details?.status? } /> */}
        </Space>

        <div>
          <p className="grey-text">Pharmacy</p>
          <Link to={"/"}>{details?.pharmacy}</Link>
        </div>
      </Flex>

      <Row gutter={[16, 16]}>
        <Col md={8}>
          <CardListItem className="card-list-item">
            <Typography.Text>Address Line 1</Typography.Text>
            <p>{details?.address}</p>
          </CardListItem>
        </Col>
        <Col md={8}>
          <CardListItem className="card-list-item">
            <Typography.Text>Address Line 2</Typography.Text>
            <p>{details?.address}</p>
          </CardListItem>
        </Col>

        <Col md={8}>
          <CardListItem className="card-list-item">
            <Typography.Text>Town / City</Typography.Text>
            <p>{details?.city}</p>
          </CardListItem>
        </Col>
        <Col md={8}>
          <CardListItem className="card-list-item">
            <Typography.Text>Post Code</Typography.Text>
            <p>{details?.postcode}</p>
          </CardListItem>
        </Col>
        <Col md={8}>
          <CardListItem className="card-list-item">
            <Typography.Text>Phone</Typography.Text>
            <p>{details?.phone}</p>
          </CardListItem>
        </Col>
        <Col md={8}>
          <CardListItem className="card-list-item">
            <Typography.Text>E-mail</Typography.Text>
            <p>{details?.email}</p>
          </CardListItem>
        </Col>
      </Row>

      <CommonModalWrapper
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        title="Edit Pharmacy Details"
        className="editModalWrapper"
        okText="Save"
      >
        <>
          <div className="modalBodyWrap">
            <Flex className="modalBody">
              <div className="pharmaLogo">
                <Avatar
                  size={120}
                  icon={
                    <img
                      src={assets.pharmaLogo}
                      alt=""
                      width={120}
                      height={120}
                    />
                  }
                />
                <Button className="whiteCrossIcon">
                  <WhiteCrossIcon />
                </Button>
              </div>
            </Flex>

            <div className="editFrom">
              <Row align={"middle"}>
                <Col span={12}>
                  <div className="inputField">
                    <label>Pharmacy Name</label>
                    <CustomInput placeholder="Spinal Health" type="text" />
                  </div>
                </Col>
                <Col span={12}>
                  <CustomSwitch className="greenSwitch" label={"Online"} />
                </Col>
                <Col span={12}>
                  <div className="inputField">
                    <label>Address Line 1</label>
                    <CustomInput placeholder="Spinal Health" type="text" />
                  </div>
                </Col>
                <Col span={12}>
                  <div className="inputField">
                    <label>Address Line 2</label>
                    <CustomInput placeholder="Spinal Health" type="text" />
                  </div>
                </Col>
                <Col span={12}>
                  <div className="inputField">
                    <label>Town / City</label>
                    <CustomSelect option={SELECToptions} />
                  </div>
                </Col>
                <Col span={12}>
                  <div className="inputField">
                    <label>Post Code</label>
                    <CustomInput placeholder="Spinal Health" type="text" />
                  </div>
                </Col>
                <Col span={12}>
                  <div className="inputField">
                    <label>Phone</label>
                    <CustomInput placeholder="Spinal Health" type="text" />
                  </div>
                </Col>
                <Col span={12}>
                  <div className="inputField">
                    <label>E-mail</label>
                    <CustomInput placeholder="Spinal Health" type="email" />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </>
      </CommonModalWrapper>
    </PharmaCardWrapper>
  );
};

export default BranchDetailsCard;
