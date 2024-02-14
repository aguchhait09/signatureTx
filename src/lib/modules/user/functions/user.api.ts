import endpoints from "config/endpoints.config";
import { UserData } from "../types/user";
import { axiosInstance } from "request";

export type CurrentUserProfileResponse = BaseApiResponseType<UserData>;
export const getCurrentUserProfile = () => {
  return axiosInstance.get<CurrentUserProfileResponse>(endpoints.user.profile);
};

export type LogInMutationParams = {
  email: string;
  password: string;
};
export type LogInMutationResponse = BaseApiResponseType<
  UserData & {
    access: string;
    refresh: string;
    success: boolean;
  }
>;
export const loginMutation = (params: LogInMutationParams) => {
  return axiosInstance.post<LogInMutationResponse>(
    endpoints.auth.login,
    params
  );
};
