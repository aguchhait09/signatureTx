import CustomButtonPrimary from "UI/CustomButton/CustomButtonPrimary";
import CustomDatePicker from "UI/CustomDateRangePicker/CustomDatePicker";
import CustomTag from "UI/CustomTag/CustomTag";
import AddIcon from "UI/Icons/AddIcon";
import Downloadicon from "UI/Icons/Downloadicon";
import FilterIcon from "UI/Icons/FilterIcon";
import Searchicon from "UI/Icons/Searchicon";
import XIcon from "UI/Icons/XIcon";
import { Button, Checkbox, Flex, Input, Popover, Typography } from "antd";

import { FilterRowWrapper } from "styles/StyledComponents/FilterRowWrapper";

interface FilterRowprops {
  title?: string;
  hidesearch?: boolean;
  hidefilter?: boolean;
  hideDatePicker?: boolean;
  showDownloadButton?: boolean;
  showAddButton?: boolean;
  hideCheckbox?: boolean;
}

const PopoverContent = () => {
  return (
    <ul className="popover-list">
      <li>
        <Checkbox>All</Checkbox>{" "}
        <Button type="link" icon={<XIcon />}>
          Clear All
        </Button>
      </li>
      <li>
        <Checkbox>In Progress</Checkbox>
      </li>
      <li>
        <Checkbox>Payout Sent</Checkbox>
      </li>
      <li>
        <Checkbox>Paid</Checkbox>
      </li>
    </ul>
  );
};
const FilterRow = ({
  title,
  hidesearch,
  hidefilter,
  hideDatePicker,
  showDownloadButton,
  showAddButton,
  hideCheckbox,
}: FilterRowprops) => {
  return (
    <FilterRowWrapper>
      <Flex justify="space-between" align="center">
        {title && <Typography.Title level={4}>{title}</Typography.Title>}
        {!hideDatePicker && <CustomDatePicker />}
        <Flex>
          {}
          {!hidesearch && (
            <Input
              size="large"
              placeholder="Search"
              className="searchbar"
              prefix={<Searchicon />}
            />
          )}
          {!hidefilter && (
            <Popover
              placement="bottomLeft"
              content={PopoverContent}
              arrow={false}
            >
              <Button className="filter">
                Filters
                <i>
                  <FilterIcon />
                </i>
              </Button>
            </Popover>
          )}
          {showAddButton && (
            <CustomButtonPrimary
              type="primary"
              icon={
                <AddIcon
                  color="#fff"
                  width={11}
                  height={11}
                  className="whitePlus"
                />
              }
            >
              Add Medication{" "}
            </CustomButtonPrimary>
          )}
          {showDownloadButton && (
            <CustomButtonPrimary type="link" icon={<Downloadicon />}>
              Download Report{" "}
            </CustomButtonPrimary>
          )}
        </Flex>

        {!hideCheckbox ? (
          <Flex>
            <Checkbox>Show only</Checkbox>
            <CustomTag color="processing" text="Approval Pending"></CustomTag>
          </Flex>
        ) : (
          ""
        )}
      </Flex>
    </FilterRowWrapper>
  );
};

export default FilterRow;
