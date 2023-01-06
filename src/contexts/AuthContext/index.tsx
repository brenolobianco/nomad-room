import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import {
  iAuthProvider,
  iAuthValues,
  iUser,
  iUseRegister,
  iUserLogin,
  iValidation,
} from "./types";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext<iAuthValues>({} as iAuthValues);

export const AuthProvider = ({ children }: iAuthProvider) => {
  // const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [userInfo, setUserInfo] = useState<iUser>({} as iUser);

  const login = async (data: iUserLogin) => {
    try {
      const response = await api.post("/login", data);

      const { user, accessToken } = response.data;
      const newUser = {
        ...user,
        rooms_favorits: [],
      };

      setUserInfo(newUser);
      window.localStorage.clear();
      localStorage.setItem("@NomadRoom:token", accessToken);
      localStorage.setItem("@NomadRoom:userId", user.id);

      toast.success("Login Realizado");

      const toNavigate = response.data.user.validation
        ? "dashboard"
        : "validation";
      navigate(toNavigate, { replace: true });
    } catch (error) {
      toast.error("Login não realizado");
      console.error(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("@NomadRoom:token");
    const userId = localStorage.getItem("@NomadRoom:userId");

    const GetUser = async () => {
      const response = await api.get(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { data } = response;
      const newUser = {
        ...data,
        rooms_favorits: [],
      };
      setUserInfo(newUser);
    };
    if (!userInfo.id && token) {
      GetUser();
    }
  }, []);

  const registerUser = async (data: iUseRegister) => {
    try {
      const response = await api.post("/register", data);

      const { user, accessToken } = response.data;

      setUserInfo(user);
      localStorage.setItem("@NomadRoom:token", accessToken);
      localStorage.setItem("@NomadRoom:userId", user.id);
      toast.success("Cadastro Realizado");

      const toNavigate = response.data.user.validation
        ? "dashboard"
        : "validation";
      navigate(toNavigate, { replace: true });
    } catch (error) {
      toast.error("cadastro nao realizado");
      console.error(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("@NomadRoom:token");
    localStorage.removeItem("@NomadRoom:userId");
    setUserInfo({} as iUser);
  };

  const UserValidation = async (data: iValidation): Promise<void> => {
    const { profile_photo } = data;

    const updateUser = {
      ...userInfo,
      profile_photo: profile_photo,
    };
    setUserInfo(updateUser);
    const userId = localStorage.getItem("@NomadRoom:userId");
    const token = localStorage.getItem("@NomadRoom:token");
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      data = { ...data, validation: true };
      await api.patch(`/users/${userId}`, data);
      toast.success("Usuario atualizado com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Algo deu errado");
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        UserValidation,
        login,
        registerUser,
        setUserInfo,
        userInfo,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
