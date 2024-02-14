import styled from "@emotion/styled";
import { Space, Switch, SwitchProps, Typography } from "antd";
import React from "react";

interface Swtichprops extends SwitchProps {
  label: string;
}

const SwitchWrapper = styled(Switch)`
  height: 28px;
  min-width: 46px;
  &.ant-switch.ant-switch-checked {
    .ant-switch-handle {
      inset-inline-start: calc(100% - 26px);
    }
  }
  .ant-switch-handle {
    width: 24px;
    height: 24px;
    &::before {
      border-radius: 50px;
    }
  }

  &.greenSwitch {
    &.ant-switch-checked {
      background: ${({ theme }) => theme.color10A55F};
      &:hover {
        background: ${({ theme }) => theme.color10A55F} !important;
      }
    }
  }
`;
const CustomSwitch = ({ label, ...props }: Swtichprops) => {
  return (
    <Space size={6}>
      <SwitchWrapper checked={props.checked} className={props.className} />
      <Typography.Text>{label}</Typography.Text>
    </Space>
  );
};

export default CustomSwitch;
