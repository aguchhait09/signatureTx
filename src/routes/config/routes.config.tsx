import { RouteObject } from "react-router";
import adminRoutes from "./admin/admin.routes";
import Login from "pages/login/index";
const routes: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
  ...adminRoutes,
];
export default routes;
