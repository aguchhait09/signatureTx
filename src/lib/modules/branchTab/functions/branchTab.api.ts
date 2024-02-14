import endpoints from "config/endpoints.config";
import { axiosInstance } from "request";
import { branchAll } from "typescript/interfaces/branchAll.interface";

export const branchApi = async () => {
  const res = await axiosInstance.post<branchAll>(endpoints.brances.branchAll, {
    length: 10,
    page: 1,
    sort: {
      column: "name",
      order: "ASC",
    },
  });
  console.log("resBranch", res);
  return res?.data;
};
