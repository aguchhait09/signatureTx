import ClockIcon from "UI/Icons/ClockIcon";
import CoinstackIcon from "UI/Icons/CoinstackIcon";
import { Button, Col, Row } from "antd";
import BankStatusAndSettingsCard from "components/BankStatusAndSettingCard/BankStatusAndSettingsCard";
import BranchDetailsCard from "components/BrnachDetailCard/BranchDetailCard";
import InfoCardSmall from "components/InfoCardSmall/InfoCardSmall";
import assets from "json/assets";
import React from "react";
import { DataTagLarge } from "styles/StyledComponents/PharmaCardWrapper";

const BranchInfoTab = () => {
  return (
    <Row gutter={[20, 20]}>
      <Col span={24}>
        {" "}
        <Row gutter={[20, 20]}>
          <Col md={16}>
            <BranchDetailsCard
              details={{
                name: "Bright Side",
                logo: assets.img01,
                phone: "+44 7939 665777",
                postcode: "31134",
                city: "Liverpool",
                email: "spinal.health@gmail.com",
                address: "4140 Parker Rd. Allentown",
                address2: "4140 Parker Rd. Allentown",
                website: "www.BilbosHouseAdventures.com",
                pharmacy: "Spinal Health ",
                status: true,
              }}
            />
          </Col>
          <Col md={8}>
            <BankStatusAndSettingsCard cols={2} />
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row gutter={[20, 20]}>
          <Col md={8}>
            <InfoCardSmall
              title="AVG Response Time"
              titleRight={
                <Button
                  type="text"
                  className="info-card-btn"
                  icon={<ClockIcon />}
                />
              }
            >
              <DataTagLarge color="default">48 min</DataTagLarge>
            </InfoCardSmall>
          </Col>
          <Col md={8}>
            <InfoCardSmall
              title="Total Orders Value"
              titleRight={
                <Button
                  type="text"
                  className="info-card-btn blue"
                  icon={<CoinstackIcon />}
                />
              }
            >
              <DataTagLarge color="processing">￡91 580</DataTagLarge>
            </InfoCardSmall>
          </Col>
          <Col md={8}>
            <InfoCardSmall
              title="# Orders"
              titleRight={
                <Button
                  type="text"
                  className="info-card-btn"
                  icon={<ClockIcon />}
                />
              }
            >
              <DataTagLarge color="default">1580</DataTagLarge>
            </InfoCardSmall>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default BranchInfoTab;
