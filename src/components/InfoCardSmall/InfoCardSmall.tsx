import { Flex, Typography } from "antd";
import React from "react";
import { InfoSmallWrapper } from "styles/StyledComponents/InfoSmallWrapper";

interface CardProps {
  title: string;
  children?: string | JSX.Element | JSX.Element[];
  titleRight?: string | JSX.Element | JSX.Element[];
}
const InfoCardSmall = ({ title, titleRight, children }: CardProps) => {
  return (
    <InfoSmallWrapper className="common-white-box sm">
      <Flex justify="space-between" className="title-sec">
        <Typography.Title level={5}>{title}</Typography.Title>
        <div>{titleRight}</div>
      </Flex>
      {children}
    </InfoSmallWrapper>
  );
};

export default InfoCardSmall;
