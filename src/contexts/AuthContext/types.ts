import { ReactNode, SetStateAction, Dispatch } from "react";

export interface iAuthProvider {
  children: ReactNode;
}

export interface iValidation {
  profile_photo: string;
  about: string;
  validation?: boolean;
}

export interface iAuthValues {
  UserValidation: (data: iValidation) => void;
  userInfo: iUser;
  setUserInfo: Dispatch<SetStateAction<iUser>>;
  login: (user: iUserLogin) => void;
  registerUser: (data: iUseRegister) => void;
  logout: () => void;
}

export interface iUser {
  id: string;
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  age: string;
  genre: string;
  profession: string;
  token: string;
  profile_photo: string;
  rooms_favorits: number[];
}
export interface iUserLogin {
  email: string;
  password: string;
  id: string;
}
export interface iAuthProviderProps {
  children: ReactNode;
}

export interface iUseRegister {
  name: string;
  last_name: string;
  email: string;
  password: string;
  age: string;
  profession: string;
  genre: string;
  id: string;
}
