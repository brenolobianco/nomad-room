import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SchemaLogin from "../../validation/schemaLogin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledButton } from "../../styles/components/Button";
import { StyledInput } from "../../styles/components/Input";
import { useAuthContext } from "../../contexts/AuthContext/hook";
import { iUserLogin } from "../../contexts/AuthContext/types";
import { HeadlineMedium } from "../Global/Headlines/HeadlineMedium";
import { ContainerFormLogin, FormLogin } from "./styles";
import { Header } from "../Global/Header";

const Login = () => {
  const { login } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserLogin>({
    resolver: yupResolver(SchemaLogin),
  });

  return (
    <>
      <Header />

      <ToastContainer />
      <HeadlineMedium />
      <ContainerFormLogin>
        <FormLogin onSubmit={handleSubmit(login)}>
          <h2>Faça seu Login</h2>
          <label htmlFor="Email"></label>
          <StyledInput placeholder="Email" {...register("email")} />
          <p>{errors.email?.message}</p>
          <label htmlFor="Senha"></label>
          <StyledInput placeholder="Senha" {...register("password")} />
          <p>{errors.password?.message}</p>
          <StyledButton type="submit">Entrar</StyledButton>
        </FormLogin>
      </ContainerFormLogin>

      <ToastContainer />
    </>
  );
};

export default Login;
