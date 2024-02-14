import CustomButtonPrimary from "UI/CustomButton/CustomButtonPrimary";
import CustomInput from "UI/CustomInput/CustomInput";
import AddIcon from "UI/Icons/AddIcon";
import EditIcon from "UI/Icons/EditIcon";
import TrashIcon from "UI/Icons/TrashIcon";
import { Button, Col, Row, Typography } from "antd";
import { useState } from "react";
import { SettingsTabWrapper } from "styles/StyledComponents/SettingsTabWrapper";

const SettingsTab = () => {
  const [commissionEdit, setCommissionEdit] = useState(true);
  const [addRange, setAddRange] = useState<string[]>([]);
  const handleEdit = () => {
    setCommissionEdit(false);
  };
  const handlCancel = () => {
    setCommissionEdit(true);
  };
  const addRangeDiv = () => {
    setAddRange([...addRange, ""]);
  };
  const removeRangeDiv = (indexToRemove: number) => {
    const updatedDivs = addRange.filter((_, index) => index !== indexToRemove);
    setAddRange(updatedDivs);
  };

  return (
    <SettingsTabWrapper className="initTabs-wrapper">
      <div className="com-inner">
        <Typography.Title level={4}>Commission</Typography.Title>
        {commissionEdit ? (
          <div className="commission-grp">
            <div className="row-bg">
              <Row gutter={[16, 0]}>
                <Col xs={24} sm={24} xl={12}>
                  <div className="grp-bind">
                    <label>Up to,￡</label>
                    <p>1000</p>
                  </div>
                </Col>
                <Col xs={24} sm={24} xl={12}>
                  <div className="grp-bind">
                    <label>Commission, %</label>
                    <p>30</p>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="row-bg">
              <Row gutter={[16, 0]}>
                <Col xs={24} sm={24} xl={12}>
                  <div className="grp-bind">
                    <label>From,￡</label>
                    <p>1001</p>
                  </div>
                </Col>
                <Col xs={24} sm={24} xl={12}>
                  <div className="grp-bind">
                    <label>Commission, %</label>
                    <p>20</p>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="row-bg">
              <Row gutter={[16, 0]}>
                <Col xs={24} sm={24} xl={12}>
                  <div className="grp-bind">
                    <label>Fixed Fee,￡</label>
                    <p>2</p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        ) : (
          <div className="edit-commission">
            <div className="row-bg cmn_gap">
              <Row gutter={[16, 0]}>
                <Col xs={24} sm={24} xl={12}>
                  <div className="grp-bind">
                    <label>Up to,￡</label>
                    <CustomInput />
                  </div>
                </Col>
                <Col xs={24} sm={24} xl={12}>
                  <div className="grp-bind">
                    <label>Commission, %</label>
                    <CustomInput />
                  </div>
                </Col>
              </Row>
            </div>
            {addRange.map((item, index) => (
              <div className="row-bg cmn_gap" key={item}>
                <Button
                  className="dltBtn"
                  onClick={() => removeRangeDiv(index)}
                >
                  <TrashIcon />
                </Button>
                <Row gutter={[16, 0]} className="btmGap">
                  <Col xs={24} sm={24} xl={24}>
                    <div className="grp-bind">
                      <label>From,￡</label>
                      <p>1001</p>
                    </div>
                  </Col>
                </Row>
                <Row gutter={[16, 0]}>
                  <Col xs={24} sm={24} xl={12}>
                    <div className="grp-bind">
                      <label>Up to,￡</label>
                      <CustomInput />
                    </div>
                  </Col>
                  <Col xs={24} sm={24} xl={12}>
                    <div className="grp-bind">
                      <label>Commission, %</label>
                      <CustomInput />
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
            <div className="add-range cmn_gap">
              <CustomButtonPrimary
                type="link"
                icon={<AddIcon />}
                onClick={addRangeDiv}
              >
                Add Range In-between
              </CustomButtonPrimary>
            </div>
            <div className="row-bg cmn_gap">
              <Row gutter={[16, 0]}>
                <Col xs={24} sm={24} xl={12}>
                  <div className="grp-bind">
                    <label>From,￡</label>
                    <p>1001</p>
                  </div>
                </Col>
                <Col xs={24} sm={24} xl={12}>
                  <div className="grp-bind">
                    <label>Commission, %</label>
                    <CustomInput />
                  </div>
                </Col>
              </Row>
            </div>
            <div className="row-bg cmn_gap">
              <Row gutter={[16, 0]}>
                <Col xs={24} sm={24} xl={12}>
                  <div className="grp-bind">
                    <label>Fixed Fee,￡</label>
                    <CustomInput />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        )}
      </div>
      <div className="edit-btn">
        {commissionEdit ? (
          <CustomButtonPrimary
            type="link"
            icon={<EditIcon />}
            onClick={handleEdit}
            className="btnEdit"
          >
            Edit
          </CustomButtonPrimary>
        ) : (
          <>
            <CustomButtonPrimary
              type="link"
              onClick={handlCancel}
              className="btnCancel"
            >
              cancel
            </CustomButtonPrimary>
            <CustomButtonPrimary type="primary">Save</CustomButtonPrimary>
          </>
        )}
      </div>
    </SettingsTabWrapper>
  );
};

export default SettingsTab;
