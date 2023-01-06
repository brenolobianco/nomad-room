import { iRoom } from "../..";
import { Container } from "./styles";

interface iDescriptionProps {
  room: iRoom;
}

export const Description = ({ room }: iDescriptionProps) => {
  const { description } = room;
  return (
    <Container>
      <h3>Descrição do quarto diponível</h3>
      <p>{description}</p>
    </Container>
  );
};
