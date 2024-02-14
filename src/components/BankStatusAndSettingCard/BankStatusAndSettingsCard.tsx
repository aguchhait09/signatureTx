import CommonModalWrapper from "UI/CommonModalWrapper/CommonModalWrapper";
import CustomInput from "UI/CustomInput/CustomInput";
import CustomTag from "UI/CustomTag/CustomTag";
import CheckIcon from "UI/Icons/CheckIcon";
import EditIcon from "UI/Icons/EditIcon";
import SandClock from "UI/Icons/SandClock";
import {
  Button,
  Col,
  Flex,
  Radio,
  RadioChangeEvent,
  Row,
  Typography,
} from "antd";
import { useEffect, useState } from "react";
import {
  CardListItem,
  PharmaCardWrapper,
} from "styles/StyledComponents/PharmaCardWrapper";

const BankStatusAndSettingsCard = (props: {
  cols?: number;
  paymentType?: "";
}) => {
  const { cols, paymentType } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [colspan, setcolspan] = useState(8);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // radio button

  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  useEffect(() => {
    if (cols === 2) {
      setcolspan(12);
    }
  }, [cols]);

  // radio button

  return (
    <PharmaCardWrapper className="common-white-box">
      <Flex align="center" justify="space-between" className="title-wrap">
        <p className="pharma-title">Bank Status & Settings</p>
        <Button onClick={showModal} type="text" icon={<EditIcon />} />
      </Flex>

      <Row gutter={[16, 16]}>
        <Col span={colspan}>
          <CardListItem className="card-list-item">
            <Typography.Text>Account Name</Typography.Text>
            <p>John Smith</p>
          </CardListItem>
        </Col>
        <Col span={colspan}>
          <CardListItem className="card-list-item">
            <Typography.Text>Account Number</Typography.Text>
            <p>9501956750</p>
          </CardListItem>
        </Col>
        <Col span={colspan}>
          <CardListItem className="card-list-item">
            <Typography.Text>Sort-Code</Typography.Text>
            <p>651535KH</p>
          </CardListItem>
        </Col>
        <Col span={colspan}>
          <CardListItem className="card-list-item">
            <Typography.Text>Bank Status</Typography.Text>
            <CustomTag
              color="success"
              icon={<CheckIcon />}
              text="Verified"
            ></CustomTag>
          </CardListItem>
        </Col>
        <Col span={colspan}>
          <CardListItem className="card-list-item">
            <Typography.Text>Account Status</Typography.Text>
            <CustomTag
              color="processing"
              icon={<SandClock />}
              text="Pending"
            ></CustomTag>
          </CardListItem>
        </Col>
        {paymentType && (
          <Col span={colspan}>
            <CardListItem className="card-list-item">
              <Typography.Text>Payment Type</Typography.Text>
              <p>By individual pharmacy account</p>
            </CardListItem>
          </Col>
        )}
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
            <div className="editFrom">
              <Row>
                <Col span={12}>
                  <div className="inputField">
                    <label>Account Name</label>
                    <CustomInput placeholder="John Smith" type="text" />
                  </div>
                </Col>
                <Col span={12}>
                  <div className="inputField">
                    <label>Account Number</label>
                    <CustomInput placeholder="9501956750" type="text" />
                  </div>
                </Col>
                <Col span={12}>
                  <div className="inputField">
                    <label>Sort-Code</label>
                    <CustomInput placeholder="651535KH" type="text" />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col span={12}>
                  <div className="inputField">
                    <label>Bank Status</label>
                    <CustomTag
                      icon={<CheckIcon />}
                      color="success"
                      text="Verified"
                    ></CustomTag>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="inputField">
                    <label>Account Status</label>
                    <CustomTag
                      icon={<SandClock />}
                      color="processing"
                      text="Pending"
                    ></CustomTag>
                  </div>
                </Col>
                {paymentType && (
                  <Col span={24}>
                    <div className="inputField inputFieldRadio">
                      <label>Sort-Code</label>
                      <Radio.Group onChange={onChange} value={value}>
                        <Radio value={1}>By individual pharmacy account</Radio>
                        <Radio value={2}>Branch has individual payment</Radio>
                      </Radio.Group>
                    </div>
                  </Col>
                )}
              </Row>
            </div>
          </div>
        </>
      </CommonModalWrapper>
    </PharmaCardWrapper>
  );
};

export default BankStatusAndSettingsCard;
