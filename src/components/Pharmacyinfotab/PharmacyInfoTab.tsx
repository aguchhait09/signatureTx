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
import { useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { branchCountApi } from "lib/modules/pharmacyTab/functions/branchCountFunc.api";
import { avgResTime } from "lib/modules/pharmacyTab/functions/pharmaResponseTime.api";
import { payoutReportApi } from "lib/modules/pharmacyTab/functions/pharmaPayoutSummary.api";


const PharmacyInfoTab = (props: any) => {
  const {
    pharmacyQuery: { data: pharmacyData },
  } = usePharmacy();
  console.log(pharmacyData, "pharmacyQuery");

  // params
  const {pharmacyId} = useParams()
  console.log('asd', pharmacyId);
  
  // Branch Data Count
  const {data: dataCount} = useQuery({
    queryKey: ['count'],
    queryFn: ()=>branchCountApi({pharmacyId})
  })
  console.log('dataCount', typeof dataCount?.offlineCount);

  // Avg Res Time
  const {data: avgResponseTime} = useQuery({
    queryKey: ['avgTimke'],
    queryFn: ()=>avgResTime({pharmacyId})
  })
  console.log('ResTime', avgResponseTime);

  // Payout Report 
  const {data: payoutData} = useQuery({
    queryKey: ['ReportPayout'],
    queryFn: ()=>payoutReportApi({pharmacyId})
  })
  console.log('Report_Payout', payoutData);
  
  // Props
  if (props.name) {
    props.name(pharmacyData?.name);
  }


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
  console.log('data', pharmacyData);
  

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
            titleRight={<Typography.Title level={5}>{Number(dataCount?.offlineCount) + Number(dataCount?.onlineCount)}</Typography.Title>}
          >
            <Flex>
              <DataTagLarge color="success">
                <Space direction="vertical">
                  <p> Online</p>

                  <Typography.Title level={5}>{dataCount?.onlineCount}</Typography.Title>
                </Space>
              </DataTagLarge>
              <DataTagLarge color="default">
                <Space direction="vertical">
                  <p> Online</p>

                  <Typography.Title level={5}>{dataCount?.offlineCount}</Typography.Title>
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
            <DataTagLarge color="default">{avgResponseTime?.averageResponseTime === !null ? avgResponseTime?.averageResponseTime : 0} min</DataTagLarge>
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
            <DataTagLarge color="warning">￡{payoutData?.totalPayoutAmount}</DataTagLarge>
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
            <DataTagLarge color="processing">￡{payoutData?.totalCommission}</DataTagLarge>
          </InfoCardSmall>
        </Col>
      </Row>
    </PharmacyInfoWrapper>
  );
};

export default PharmacyInfoTab;
