import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

export const PrivateRoutes = () => {
  const userContext = useContext(UserContext);
  return userContext.user ? <Outlet /> : <Navigate to={"/"} />;
};
