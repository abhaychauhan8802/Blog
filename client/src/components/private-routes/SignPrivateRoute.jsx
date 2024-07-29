import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const SignPrivateRoute = () => {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Navigate to="/dashboard?tab=profile" /> : <Outlet />;
};

export default SignPrivateRoute;
