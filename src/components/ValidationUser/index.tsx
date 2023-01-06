import { Header } from "../../components/Global/Header";
import { HeadlineMedium } from "../../components/Global/Headlines/HeadlineMedium";
import { StyledButton } from "../../styles/components/Button";
import { DivInputs, DivIntro, FormValidation } from "./style";
import * as yup from "yup";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { iValidation } from "../../contexts/AuthContext/types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledInput } from "../../styles/components/Input";

export const ValidationUser = () => {
  const { UserValidation } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    profile_photo: yup.string().required("Foto Obrigatória"),
    about: yup.string().required('Campo "Conte mais sobre você" obrigatório!'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iValidation>({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      <Header />
      <HeadlineMedium />
      <FormValidation onSubmit={handleSubmit(UserValidation)}>
        <DivIntro>
          <h2>Finalize seu cadastro</h2>
          <p>Carregue uma foto sua, e diga mais sobre você</p>
        </DivIntro>
        <DivInputs>
          <div>
            <label htmlFor="photo">Insira Url de sua foto</label>
            <StyledInput
              type="text"
              id="photo"
              {...register("profile_photo")}
              placeholder="Ex: https://i.imgur.com/5bLyHek.jpeg"
            />
            {errors.profile_photo && (
              <span>{errors.profile_photo.message}</span>
            )}
          </div>
          <div>
            <label htmlFor="about">Conte mais sobre você</label>
            <textarea
              id="about"
              rows={5}
              cols={100}
              {...register("about")}
              placeholder="Conte um pouco masi sobre você."
            />
            {errors.about && <span>{errors.about.message}</span>}
          </div>
        </DivInputs>
        <StyledButton type="submit">Finalizar</StyledButton>
      </FormValidation>
    </>
  );
};
