import * as yup from "yup";
import {
  DeepMap,
  Message,
  MultipleFieldErrors,
  Ref,
  useForm,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { cepRequest } from "../../services/cep";
import { StyledInput } from "../../styles/components/Input";
import {
  BorderHeader,
  ContainerAboutRoom,
  ContainerFormRoom,
  ContainerRegisterRoom,
  Error,
  LocationRoom,
} from "../../styles/components/FormRoom";
import { api } from "../../services/api";
import { StyledButton } from "../../styles/components/Button";
import { Header } from "../Global/Header";
import { useNavigate } from "react-router-dom";

interface iCep {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export interface iForm {
  title: string;
  description: string;
  gym: boolean;
  internet: boolean;
  tv: boolean;
  garage: boolean;
  animals: boolean;
  furnished: boolean;
  zip_code: string;
  district: string;
  state: string;
  street: string;
  number: string;
  room_photo: string;
  contact: string;
}

export type FieldError = {
  type: string;
  ref?: Ref;
  types?: MultipleFieldErrors;
  message?: Message;
};

export type FieldErrors<TFieldValues extends iForm = iForm> = DeepMap<
  TFieldValues,
  FieldError
>;

export const FormRoom = () => {
  const navigate = useNavigate();
  const [neighborhood, setNeighborhood] = useState<string>("");
  const [cityState, setCityState] = useState<string>("");
  const [street, setStreet] = useState<string>("");

  const regex: RegExp = /[1-9]{2}9[1-9][0-9]{3}[0-9]{4}/;

  const schema = yup.object().shape({
    title: yup.string().required("Título é obrigatorio"),
    description: yup.string().required("Descrição é obrigatoria"),
    gym: yup.bool(),
    internet: yup.bool(),
    tv: yup.bool(),
    garage: yup.bool(),
    animals: yup.bool(),
    furnished: yup.bool(),
    zip_code: yup
      .string()
      .required("CEP obrigatorio")
      .matches(/\d{8}/, "Cep invalido"),
    district: yup.string().required("Bairro obrigatorio"),
    state: yup.string().required("Localização obrigatoria"),
    street: yup.string().required("Logradouro obrigatorio"),
    number: yup.string().required("Numero obrigatorio"),
    room_photo: yup.string().required("Foto obrigatoria"),
    contact: yup
      .string()
      .required("Contato obrigatorio")
      .matches(regex, "Numero invalido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iForm>({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = async (data: iForm) => {
    const userId = localStorage.getItem("@NomadRoom:userId");
    let bodyReq = {
      userId: userId,
      title: data.title,
      description: data.description,
      about: {
        gym: data.gym,
        garage: data.garage,
        internet: data.internet,
        animals: data.animals,
        tv: data.tv,
        furnished: data.furnished,
      },
      localization: {
        zip_code: data.zip_code,
        district: data.district,
        street: data.street,
        state: data.state,
        number: data.number,
      },
      room_photo: data.room_photo,
      contact: data.contact,
    };
    try {
      await api.post("/rooms", bodyReq, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@NomadRoom:token")}`,
        },
      });
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  const cepListener = async (event: any) => {
    if (event.target.value.length === 8) {
      try {
        let response = await cepRequest.get<iCep>(`${event.target.value}/json`);
        setNeighborhood(response.data.bairro);
        setCityState(`${response.data.localidade}, ${response.data.uf}`);
        setStreet(response.data.logradouro);
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <>
      <Header />
      <BorderHeader />
      <ContainerRegisterRoom>
        <h2>Disponibilize seu quarto</h2>
        <ContainerFormRoom onSubmit={handleSubmit(onSubmitForm)}>
          <label htmlFor="title">Titulo*</label>
          <StyledInput
            id="title"
            type="text"
            placeholder="Ex: Quarto com vista para mar no Flamengo "
            {...register("title")}
          />
          <Error>{errors.title?.message}</Error>
          <label htmlFor="description">Descrição*</label>
          <textarea
            cols={30}
            rows={10}
            id="description"
            placeholder="Descreava bem sua acomandação, quem você está procurando. Mão informe dados pessoais."
            {...register("description")}
          ></textarea>
          <Error>{errors.description?.message}</Error>
          <label htmlFor="about">Sobre o quarto</label>
          <ContainerAboutRoom id="about">
            <li>
              <input type="checkbox" id="gym" {...register("gym")} />
              <label htmlFor="gym">Academia</label>
            </li>
            <li>
              <input type="checkbox" id="internet" {...register("internet")} />
              <label htmlFor="internet">Internet</label>
            </li>
            <li>
              <input type="checkbox" id="tv" {...register("tv")} />
              <label htmlFor="tv">Tv</label>
            </li>
            <li>
              <input type="checkbox" id="garage" {...register("garage")} />
              <label htmlFor="garage">Garagem</label>
            </li>
            <li>
              <input type="checkbox" id="pets" {...register("animals")} />
              <label htmlFor="pets">Aceita animais</label>
            </li>

            <li>
              <input
                type="checkbox"
                id="furniture"
                {...register("furnished")}
              />
              <label htmlFor="furniture">Mobiliado</label>
            </li>
          </ContainerAboutRoom>
          <label htmlFor="location">Localização do quarto*</label>
          <LocationRoom id="location">
            <StyledInput
              type="text"
              {...register("zip_code")}
              onChange={cepListener}
              placeholder="CEP (somente numeros)"
            />
            <Error>{errors.zip_code?.message}</Error>
            <StyledInput
              type="text"
              value={neighborhood}
              {...register("district")}
              onChange={(event) => {
                setNeighborhood(event.target.value);
              }}
              placeholder="Bairro"
            />
            <Error>{errors.district?.message}</Error>
            <StyledInput
              type="text"
              value={cityState}
              {...register("state")}
              onChange={(event) => {
                setCityState(event.target.value);
              }}
              placeholder="Cidade e Estado"
            />
            <Error>{errors.state?.message}</Error>
            <StyledInput
              type="text"
              value={street}
              {...register("street")}
              onChange={(event) => {
                setStreet(event.target.value);
              }}
              placeholder="Logradouro"
            />
            <Error>{errors.street?.message}</Error>
            <StyledInput
              type="text"
              {...register("number")}
              placeholder="Numero"
            />
            <Error>{errors.number?.message}</Error>

            <StyledInput
              type="text"
              {...register("room_photo")}
              placeholder="Url da foto"
            />
            <Error>{errors.room_photo?.message}</Error>
            <StyledInput
              type="text"
              {...register("contact")}
              placeholder="Contato"
            />
            <Error>{errors.contact?.message}</Error>
          </LocationRoom>

          <StyledButton type="submit">Disponibilizar</StyledButton>
          <p>Todas as informações com (*) são obrigatórias</p>
        </ContainerFormRoom>
      </ContainerRegisterRoom>
    </>
  );
};
