import styled from "@emotion/styled";
import { Tag } from "antd";

export const PharmaCardWrapper = styled("div")`
  height: 100%;
  .title-wrap {
    margin-bottom: 16px;

    .pharma-title {
      font-size: 16px;
      font-weight: 600;
      font-family: "Inter", sans-serif;
      color: ${({ theme }) => theme.colorPrimaryText};
    }
  }
  .pharma-logo-sec {
    margin-bottom: 16px;
  }
`;

export const CardListItem = styled("div")`
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  span {
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 4px;
    color: ${({ theme }) => theme.colorSecondaryText};
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colorPrimaryText};
  }
`;

export const DataTagLarge = styled(Tag)`
  padding: 16px;
  width: 100%;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  p {
    font-size: 12px;
    font-weight: 600;
    position: relative;
    &::before {
      position: absolute;
      content: "";
      height: 6px;
      width: 6px;
      border-radius: 50px;
      background-color: currentColor;
      top: 50%;
      transform: translateY(-50%);
      left: -12px;
    }
  }
  &.ant-tag-default {
    background-color: ${({ theme }) => theme.colorBgMask};
    color: ${({ theme }) => theme.color475467};
  }
  &.ant-tag-warning {
    /* background-color: ${({ theme }) => theme.color475467}; */
    color: ${({ theme }) => theme.colorWarningText};
  }
  &.ant-tag-processing {
    background-color: ${({ theme }) => theme.colorE8EFFD};
    color: ${({ theme }) => theme.colorPrimary};
  }
`;
