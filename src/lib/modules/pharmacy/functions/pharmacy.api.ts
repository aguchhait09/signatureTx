import endpoints from "config/endpoints.config";
import { axiosInstance } from "request";
import { PharmacyData } from "../types/pharmacy";

export type GetPharmacyDetailsQueryResponse = BaseApiResponseType<PharmacyData>;
export const getPharmacyDetailsQuery = (pharmacyId?: string) => {
  return axiosInstance
    .get<GetPharmacyDetailsQueryResponse>(
      endpoints.pharmacy.getDetails(pharmacyId)
    )
    ?.then((res) => res.data);
};
