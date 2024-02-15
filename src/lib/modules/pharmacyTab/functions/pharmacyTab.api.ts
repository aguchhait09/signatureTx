import endpoints from "config/endpoints.config";
import { axiosInstance } from "request";
import { pharmacyTab } from "typescript/interfaces/pharmacyTab.interface";

interface filterInterface {
  pharmacyLength?: number;
  pharmacySortColumn?: string;
  pharmacySortOrder?: string;
  pharmacySearch?: string;
  pharmacyPage?: number;
  pharmacyStatus?: string;
}

export const pharmacyCall = async (params: filterInterface) => {
  const res = await axiosInstance.post<pharmacyTab>(endpoints.pharmacy.list, {
    page: params?.pharmacyPage,
    length: params?.pharmacyLength,
    sort: {
      column: params?.pharmacySortColumn,
      order: params?.pharmacySortOrder,
    },
    keyword: params?.pharmacySearch,
    status: params?.pharmacyStatus,
  });
  console.log("resPharmacy", res);
  return res?.data;
};
