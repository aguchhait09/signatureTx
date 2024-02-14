import CommonModalWrapper from "UI/CommonModalWrapper/CommonModalWrapper";
import CustomInput from "UI/CustomInput/CustomInput";
import CustomSwitch from "UI/CustomSwichWithLabel/CustomSwitch";
import EditIcon from "UI/Icons/EditIcon";
import { Button, Col, Flex, Row, Space, Typography } from "antd";
import React, { useState } from "react";
import {
  CardListItem,
  PharmaCardWrapper,
} from "styles/StyledComponents/PharmaCardWrapper";

const MedicationPricingCard = () => {
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

  return (
    <PharmaCardWrapper className="common-white-box">
      <Flex align="center" justify="space-between" className="title-wrap">
        <p className="pharma-title">Medication Pricing</p>

        <Space>
          <CustomSwitch label="Apply to all branches" />
          <Button onClick={showModal} type="text" icon={<EditIcon />} />
        </Space>
      </Flex>

      <Row gutter={[16, 16]}>
        <Col span={8}>
          <CardListItem className="card-list-item">
            <Typography.Text>Price Multiple</Typography.Text>
            <p>1.3</p>
          </CardListItem>
        </Col>
        <Col span={8}>
          <CardListItem className="card-list-item">
            <Typography.Text>Dispensing Fee</Typography.Text>
            <p>￡0</p>
          </CardListItem>
        </Col>
        <Col span={8}>
          <CardListItem className="card-list-item">
            <Typography.Text>Minimum Item Charge</Typography.Text>
            <p>10</p>
          </CardListItem>
        </Col>
      </Row>

      <CommonModalWrapper
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        title="Edit Bank Status & Settings"
        className="editModalWrapper"
        okText="Save"
      >
        <>
          <div className="modalBodyWrap">
            <Flex className="modalBody modalBodySwitxh">
              <CustomSwitch label={"Special pricing for each branch"} />
            </Flex>

            <div className="editFrom">
              <Row>
                <Col span={12}>
                  <div className="inputField">
                    <label>Price Multiple</label>
                    <CustomInput placeholder="1.3" type="text" />
                  </div>
                </Col>
                <Col span={12}>
                  <div className="inputField">
                    <label>Dispensing Fee, ￡</label>
                    <CustomInput placeholder="0" type="text" />
                  </div>
                </Col>
                <Col span={12}>
                  <div className="inputField">
                    <label>Minimum Item Charge</label>
                    <CustomInput placeholder="10" type="text" />
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

export default MedicationPricingCard;
