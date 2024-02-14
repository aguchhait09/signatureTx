import CustomTag from "UI/CustomTag/CustomTag";
import { TagProps } from "antd";
import {
  AccountStatusesEnum,
  AccountStatusesType,
} from "typescript/@types/enums";

type AccountStatusChipProps = {
  status?: AccountStatusesType;
};
export default function AccountStatusChip(props: AccountStatusChipProps) {
  const { status } = props;
  const color: TagProps["color"] =
    status === AccountStatusesEnum.ACTIVE
      ? "success"
      : status === AccountStatusesEnum.DELETED
      ? "red"
      : status === AccountStatusesEnum.DEACTIVATED
      ? "red"
      : status === AccountStatusesEnum.PENDING_APPROVAL
      ? "orange"
      : "default";
  const text: TagProps["color"] =
    status === AccountStatusesEnum.ACTIVE
      ? "Active"
      : status === AccountStatusesEnum.DELETED
      ? "Deleted"
      : status === AccountStatusesEnum.DEACTIVATED
      ? "Deactivated"
      : status === AccountStatusesEnum.PENDING_APPROVAL
      ? "Pending Approval"
      : "Unknown";
  return <CustomTag color={color} text={text}></CustomTag>;
}
