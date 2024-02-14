import endpoints from "config/endpoints.config";
import { axiosInstance } from "request";
import { pharmacyTab } from "typescript/interfaces/pharmacyTab.interface";

export const pharmacyCall = async () => {
  const res = await axiosInstance.post<pharmacyTab>(endpoints.pharmacy.list, {
    page: 1,
    length: 10,
    sort: {
      column: "id",
      order: "asc",
    },
    status: "active",
    // "keyword": "string"
  });
  console.log("resPharmacy", res);
  return res?.data;
};
