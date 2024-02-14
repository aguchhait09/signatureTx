import styled from "@emotion/styled";
import { Select } from "antd";
import assets from "json/assets";
import React from "react";

const SelectStyled = styled.div`
  .ant-select {
    width: 100%;
    .ant-select-selector {
      padding: 12px;
      border: 1px solid ${({ theme }) => theme.colorBorderSecondary};
      font-size: 16px;
      color: ${({ theme }) => theme.colorTextBase};
      font-weight: 400;
      border-radius: 48px;
      min-height: 50px;
      background-image: url(${assets.downArrowGray});
      background-repeat: no-repeat;
      background-position: center right 15px;
    }
  }
`;

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

interface Options {
  value: string;
  label: string | JSX.Element | JSX.Element[];
}
interface selectProps {
  option?: Options[];
}

const CustomSelect = ({ option }: selectProps) => {
  const SELECToptions = [
    { value: "value1", label: "label1" },
    { value: "value2", label: "label2" },
    { value: "value3", label: "label3" },
    { value: "value4", label: "label3" },
  ];

  return (
    <SelectStyled>
      <Select
        defaultValue="Active"
        onChange={handleChange}
        options={option ? option : SELECToptions}
        popupClassName="popupDropdown"
      />
    </SelectStyled>
  );
};

export default CustomSelect;
