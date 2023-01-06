import { iUser } from "..";
import { Container, ContainerCard, ContainerUser } from "./styles";
import { BsWhatsapp } from "react-icons/bs";

interface iContactProps {
  contact: number | string;
  user: iUser;
}

export const Contact = ({ contact, user }: iContactProps) => {
  const { name, last_name, profile_photo } = user;
  const fullName = `${name} ${last_name}`;
  const textMsg = `Olá, ${name}, acabei de ver o seu anuncio sobre o quarto e gostaria de saber mais, podemos conversar? xD`;

  return (
    <Container>
      <ContainerCard>
        <ContainerUser>
          <div>
            <img src={profile_photo} alt={fullName} />
          </div>
          <p>{name}</p>
        </ContainerUser>
        <a
          href={`https://api.whatsapp.com/send?phone=55${contact}&text=${textMsg}`}
          target="_blank"
        >
          <BsWhatsapp />
          WhatsApp
        </a>
      </ContainerCard>
    </Container>
  );
};
