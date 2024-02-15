import endpoints from "config/endpoints.config";
import { axiosInstance } from "request";
import { branchAll } from "typescript/interfaces/branchAll.interface";

interface filterInterface {
  pharmacyLength?: number,
  pharmacySortColumn?: string,
  pharmacySortOrder?: string,
  pharmacySearch?: string,
  pharmacyPage?: number,
  pharmacyStatus?: string
}

export const branchApi = async (params: filterInterface) => {
  const res = await axiosInstance.post<branchAll>(endpoints.brances.branchAll, {
    page: params?.pharmacyPage,
    length: params?.pharmacyLength,
    sort: {
      column: params?.pharmacySortColumn,
      order: params?.pharmacySortOrder,
    },
  });
  console.log("resBranch", res);
  return res?.data;
};
