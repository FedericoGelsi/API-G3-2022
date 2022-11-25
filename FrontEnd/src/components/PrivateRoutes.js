import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { useCookies } from "react-cookie";

export const PrivateRoutes = () => {
  const [cookies] = useCookies(["user-token"]);
  const { token, setToken } = useContext(UserContext);
  setToken(cookies["user-token"]);
  return token ? <Outlet /> : <Navigate to={"/login"} />;
};
