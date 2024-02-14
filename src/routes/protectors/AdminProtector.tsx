import useAppSelector from "lib/hooks/redux/useAppSelector";
import { Navigate } from "react-router";

interface AdminProtectorProps {
  children: React.ReactElement;
}
const AdminProtector = ({ children }: AdminProtectorProps) => {
  const { accessToken } = useAppSelector((s) => s.userSlice);
  if (!accessToken) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default AdminProtector;
