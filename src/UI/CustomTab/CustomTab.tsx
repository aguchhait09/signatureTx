import { Tabs } from "antd";
import styled from "@emotion/styled";

const CustomTab = styled(Tabs)`
  .ant-tabs-nav {
    width: auto;
    margin-bottom: 24px;
    &::before {
      display: none;
    }
    &::after {
      display: none;
    }
  }

  .ant-tabs-nav-list {
    border: 1px solid ${({ theme }) => theme.colorBorder};
    border-radius: 50px;
    padding: 4px;

    .ant-tabs-tab {
      padding: 8px 12px;
      border-radius: 50px;
      font-family: "Inter", sans-serif;
      font-size: 16px;
      font-weight: 500;
      color: ${({ theme }) => theme.color667085};

      &.ant-tabs-tab-active {
        background-color: ${({ theme }) => theme.colorB7CEF8};
        color: ${({ theme }) => theme.color0E3A8B};
      }
    }
    .ant-tabs-tab + .ant-tabs-tab {
      margin-left: 8px;
    }
  }
  .ant-tabs-ink-bar {
    display: none;
  }
`;

export default CustomTab;
