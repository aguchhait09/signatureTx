import React from "react";
import { DatePicker, DatePickerProps } from "antd";
import styled from "@emotion/styled";
import CalendarIcon from "UI/Icons/CalendarIcon";
const { RangePicker } = DatePicker;

const DatePickerWrap = styled("div")`
  .ant-picker {
    max-width: 260px;
    padding: 12px;
    border-radius: 50px;
    border-color: ${({ theme }) => theme.colorBorderSecondary};
    color: ${({ theme }) => theme.colorPrimaryText};
    font-family: "Inter", sans-serif;
    input {
      font-size: 14px;
      font-weight: 400;
      :placeholder-shown {
        font-family: "Inter", sans-serif;
      }
    }
  }
`;

const CustomDatePicker = ({ ...props }: DatePickerProps) => {
  const { picker, disabled } = props;
  return (
    <DatePickerWrap>
      <RangePicker
        picker={picker || "date"}
        disabled={disabled}
        suffixIcon={<CalendarIcon />}
        separator={<>-</>}
      />
    </DatePickerWrap>
  );
};

export default CustomDatePicker;
