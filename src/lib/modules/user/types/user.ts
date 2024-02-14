export interface UserSliceData {
  isLoggedIn: boolean;
  userData: Nullable<UserData>;
  accessToken: Nullable<string>;
}

export enum UserGroupEnum {
  superAdmin = "super_admin",
}
export type UserGroupType = EnumToPipes<UserGroupEnum, string>;

export enum UserRoleEnum {
  superAdmin = "super_admin",
}
export type UserRoleType = EnumToPipes<UserRoleEnum, string>;
interface UserRole {
  id: number;
  role: UserRoleType;
}

export type UserData = Partial<{
  dob: null;
  id: number;
  name: string;
  surname: string;
  email: string;
  status: string;
  totalLogin: number;
  createdAt: string;
  fullName: string;
  roleId: number;
  role: UserRoleType;
  label: string;
  group: UserGroupType;
  city: null;
  state: null;
  countryId: null;
  zipCode: null;
  phone: null;
  gender: null;
  image: null;
  address1: string;
  address2: string;
  latitude: null;
  longitude: null;
  userRole: UserRole;
  lastLogin: string;
  updatedAt: string;
  sessionId: string;
  firstLogin: string;
}>;
