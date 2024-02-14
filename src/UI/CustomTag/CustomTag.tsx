import styled from "@emotion/styled";
import { Tag, TagProps } from "antd";
import React from "react";

const CustomTagWrapper = styled(Tag)`
  border-radius: 50px;
  padding: 6px 12px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: fit-content;
  svg {
    margin-right: 4px;
  }
  span {
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 500;
  }

  &.ant-tag-success {
    span {
      color: ${({ theme }) => theme.colorSuccess};
      margin-bottom: 0;
    }
  }
  &.ant-tag-processing {
    background-color: ${({ theme }) => theme.colorE8EFFD};
    border-color: ${({ theme }) => theme.colorB7CEF8};

    span {
      margin-bottom: 0;
      color: ${({ theme }) => theme.color0E3A8B};
    }
  }
`;

interface CustomtagProps extends TagProps {
  text?: string;
}
const CustomTag = ({ text, icon, color, className, style }: CustomtagProps) => {
  return (
    <CustomTagWrapper
      color={color}
      icon={icon}
      className={className}
      style={style}
    >
      {text}
    </CustomTagWrapper>
  );
};

export default CustomTag;
