import styled from "@emotion/styled";
import { Button } from "antd";
import defaultTheme from "theme/themes/defaultTheme";

const CustomButtonPrimary = styled(Button)`
  height: auto;
  padding: 11px 28px;
  border-radius: 50px;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:hover {
    .whitePlus {
      path {
        stroke: ${({ theme }) => theme.colorInfo};
      }
    }
  }

  &.ant-btn-sm {
    border-radius: 50px;
    padding: 5px 12px;
    height: auto;
    span {
      line-height: 1;
    }
  }

  .ant-btn-icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  &.ant-btn-primary {
    background: ${defaultTheme.token?.colorPrimary};
    &:hover {
      background: transparent !important;
      border: 1px solid ${defaultTheme.token?.colorPrimary};
      span {
        color: ${defaultTheme.token?.colorPrimary} !important;
      }
    }
  }

  @media (max-width: 599px) {
    padding: 12px 24px !important;
  }
  &.ant-btn-default {
    background: ${defaultTheme.token?.colorPrimaryText};
    padding: 22px 43px;
    border-color: ${defaultTheme.token?.colorPrimaryText};
    span {
      color: ${defaultTheme.token?.colorWhite} !important;
    }
    &:hover {
      background: transparent !important;
      border: 1px solid ${defaultTheme.token?.colorPrimaryText};
      border-color: ${defaultTheme.token?.colorPrimaryText} !important;
      span {
        color: ${defaultTheme.token?.colorPrimaryText} !important;
      }
    }
  }
  &.ant-btn-link {
    border: 1px solid ${({ theme }) => theme.colorPrimary};
    span {
      color: ${defaultTheme.token?.colorPrimary} !important;
      font-weight: 500;
    }
    &:hover {
      background: transparent !important;
    }
  }
  &.ant-btn-text {
    background: radial-gradient(
      126.07% 141.42% at 0% 0%,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.28) 100%
    );
    backdrop-filter: blur(26.5px);
    &:hover {
      background: radial-gradient(
        126.07% 141.42% at 0% 0%,
        rgba(255, 255, 255, 0) 40%,
        rgba(255, 255, 255, 0.28) 60%
      );
      span {
        color: ${defaultTheme.token?.colorWhite} !important;
      }
    }
  }
  span {
    color: ${defaultTheme.token?.colorWhite} !important;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
  }
`;

export default CustomButtonPrimary;
