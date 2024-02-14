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
  },
  brances: {
    branchAll: "/pharmacy-branch/list/all",
  },
};
export default endpoints;
