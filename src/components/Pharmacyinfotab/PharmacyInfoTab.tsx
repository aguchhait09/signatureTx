import CustomButtonPrimary from "UI/CustomButton/CustomButtonPrimary";
import ClockIcon from "UI/Icons/ClockIcon";
import { Button, Col, Flex, Row, Space, Typography } from "antd";

import BankStatusAndSettingsCard from "components/BankStatusAndSettingCard/BankStatusAndSettingsCard";
import InfoCardSmall from "components/InfoCardSmall/InfoCardSmall";
import MedicationPricingCard from "components/MedicationPricingCard/MedicationPricingCard";
import DetailsCard from "components/DetailsCard/DetailsCard";
import usePharmacy from "lib/modules/pharmacy/hooks/usePharmacy";
import { DataTagLarge } from "styles/StyledComponents/PharmaCardWrapper";
import { PharmacyInfoWrapper } from "styles/StyledComponents/PharmacyInfoWrapper";
import { useMemo } from "react";
import { useNavigate } from "react-router";

const PharmacyInfoTab = () => {
  const {
    pharmacyQuery: { data: pharmacyData },
  } = usePharmacy();
  console.log(pharmacyData, "pharmacyQuery");

  const details = useMemo((): React.ComponentProps<
    typeof DetailsCard
  >["details"] => {
    return {
      name: pharmacyData?.name || "",
      address: pharmacyData?.address || "",
      phone: pharmacyData?.phone || "",
      email: pharmacyData?.user?.email || "",
      city: pharmacyData?.city || "",
      logo: pharmacyData?.logo || "",
      postcode: pharmacyData?.postcode || "",
      status: pharmacyData?.status,
    };
  }, [pharmacyData]);

  const navigate = useNavigate();

  return (
    <PharmacyInfoWrapper>
      <Row gutter={20} justify={"center"} className="upper-sec-row">
        <Col span={12}>
          <DetailsCard details={details} />
        </Col>
        <Col span={12}>
          <Row gutter={[20, 20]}>
            <Col span={24}>
              <BankStatusAndSettingsCard />
            </Col>
            <Col span={24}>
              <MedicationPricingCard />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={[20, 20]}>
        <Col md={6}>
          <InfoCardSmall
            title="# Branches"
            titleRight={<Typography.Title level={5}>28</Typography.Title>}
          >
            <Flex>
              <DataTagLarge color="success">
                <Space direction="vertical">
                  <p> Online</p>

                  <Typography.Title level={5}>24</Typography.Title>
                </Space>
              </DataTagLarge>
              <DataTagLarge color="default">
                <Space direction="vertical">
                  <p> Online</p>

                  <Typography.Title level={5}>4</Typography.Title>
                </Space>
              </DataTagLarge>
            </Flex>
          </InfoCardSmall>
        </Col>
        <Col md={6}>
          <InfoCardSmall
            title="AVG Response Time
"
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
        <Col md={6}>
          <InfoCardSmall
            title="Payout Report"
            titleRight={
              <CustomButtonPrimary
                size="small"
                type="link"
                onClick={() => navigate("/payout-report")}
              >
                View Report
              </CustomButtonPrimary>
            }
          >
            <DataTagLarge color="warning">￡23 598</DataTagLarge>
          </InfoCardSmall>
        </Col>
        <Col md={6}>
          <InfoCardSmall
            title="Commission"
            titleRight={
              <CustomButtonPrimary
                size="small"
                type="link"
                onClick={() => navigate("/commission-report")}
              >
                View Report
              </CustomButtonPrimary>
            }
          >
            <DataTagLarge color="processing">￡2 598</DataTagLarge>
          </InfoCardSmall>
        </Col>
      </Row>
    </PharmacyInfoWrapper>
  );
};

export default PharmacyInfoTab;
