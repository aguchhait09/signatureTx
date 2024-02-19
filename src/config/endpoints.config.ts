const endpoints = {
  auth: {
    login: "auth/login",
  },
  user: {
    profile: "profile/personal-info",
  },
  pharmacy: {
    getDetails: (id?: string) => `pharmacy/get/${id}`,
    list: "/pharmacy/list",
    branchCount: "/pharmacy/branch/count",
    avgTime: "/pharmacy/average/response/time",
    payoutSummary: "/pharmacy/payout-and-commission/summary",
    // medicationRange: "/pharmacy/medication-pricing/update"
  },
  brances: {
    branchAll: "/pharmacy-branch/list/all",
    update: "/pharmacy-branch/availability/update",
    branchDetails: (id?: string)=>`/pharmacy-branch/get/${id}`,
    branchResTime: "/pharmacy-branch/average/response/time",
    orderValue: "/pharmacy-branch/order/summary"
  },
};
export default endpoints;
