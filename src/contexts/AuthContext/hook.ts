import { useContext } from "react";
import { AuthContext } from ".";

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};
