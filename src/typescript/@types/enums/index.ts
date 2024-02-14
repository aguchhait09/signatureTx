export enum AccountStatusesEnum {
  DEACTIVATED = "deactivated",
  ACTIVE = "active",
  DELETED = "deleted",
  PENDING_APPROVAL = "pending approval",
}

export type AccountStatusesType = EnumToPipes<AccountStatusesEnum, string>;
