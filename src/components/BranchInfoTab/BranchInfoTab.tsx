import { useQuery } from "@tanstack/react-query";
import ClockIcon from "UI/Icons/ClockIcon";
import CoinstackIcon from "UI/Icons/CoinstackIcon";
import { Button, Col, Row } from "antd";
import BankStatusAndSettingsCard from "components/BankStatusAndSettingCard/BankStatusAndSettingsCard";
import BranchDetailsCard from "components/BrnachDetailCard/BranchDetailCard";
import InfoCardSmall from "components/InfoCardSmall/InfoCardSmall";
import { branchInfoApi } from "lib/modules/branchTab/functions/branchDetailsCall.api";
import { branchTimeApi } from "lib/modules/branchTab/functions/branchResCall.api";
import { branchOrderApi } from "lib/modules/branchTab/functions/branhcOrder.api";
import { useParams } from "react-router";
import { DataTagLarge } from "styles/StyledComponents/PharmaCardWrapper";

const BranchInfoTab = (props: any) => {

  // Get ID using params
  const {id} = useParams()
  console.log('ParamsID', id);

  // get branchDetails data 
  const {data: detailsBranch} = useQuery({
    queryKey: ['getBranchDetails'],
    queryFn: ()=>branchInfoApi({id})
  })
  console.log('detailsBranch', detailsBranch);

  // get Branch Res Time
  const {data: branchTime} = useQuery({
    queryKey: ['branchRT'],
    queryFn: ()=>branchTimeApi({id})
    })
    console.log('time', branchTime);
  
  // get Order Value Data 
  const {data: ordervalue} = useQuery({
    queryKey: ['orderValu'],
    queryFn: ()=>branchOrderApi({id})
  })
  console.log('orderValue', ordervalue);
  
  // Props 
  if(props.name){
    props.name(detailsBranch?.name)
  }
  if(props.sname){
    props.sname(detailsBranch?.pharmacy?.name)
  }
  
  return (
    <Row gutter={[20, 20]}>
      <Col span={24}>
        {" "}
        <Row gutter={[20, 20]}>
          <Col md={16}>
            <BranchDetailsCard
              details={{
                name: detailsBranch?.name as string,
                logo: detailsBranch?.logo,
                phone: detailsBranch?.phone as string,
                postcode: detailsBranch?.postcode as string,
                city: detailsBranch?.city as string,
                email: detailsBranch?.email as string,
                address: detailsBranch?.address as string,
                address2: "",
                website: "N.A" ,
                pharmacy: detailsBranch?.pharmacy?.name as string,
                status: detailsBranch?.status as boolean | undefined,
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
              <DataTagLarge color="default">{branchTime?.averageResponseTime === !null ? branchTime?.averageResponseTime : 0} min</DataTagLarge>
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
              <DataTagLarge color="processing">￡{ordervalue?.totalOrderAmount}</DataTagLarge>
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
              <DataTagLarge color="default">{ordervalue?.totalOrderCount}</DataTagLarge>
            </InfoCardSmall>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default BranchInfoTab;
