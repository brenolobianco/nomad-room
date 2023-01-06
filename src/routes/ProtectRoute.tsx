import { Navigate, Outlet } from "react-router-dom";

export const ProtectRoute = () => {
  const token = localStorage.getItem("@NomadRoom:token");

  return token ? <Outlet /> : <Navigate to="/" />;
};
