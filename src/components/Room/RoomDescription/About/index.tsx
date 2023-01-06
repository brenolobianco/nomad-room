import { iRoom } from "../..";
import { Animals } from "./IconsDescription/Animals";
import { Furnished } from "./IconsDescription/Furnished";
import { Garage } from "./IconsDescription/Garage";
import { Gym } from "./IconsDescription/Gym";
import { Internet } from "./IconsDescription/Internet";
import { Tv } from "./IconsDescription/Tv";
import { Container } from "./styles";

interface iAboutProps {
  room: iRoom;
}

export const About = ({ room }: iAboutProps) => {
  const { about } = room;
  const { gym, internet, tv, garage, animals, furnished } = about;

  return (
    <Container>
      <h3>Sobre o quarto disponível</h3>
      {gym && <Gym />}
      {internet && <Internet />}
      {tv && <Tv />}
      {garage && <Garage />}
      {animals && <Animals />}
      {furnished && <Furnished />}
    </Container>
  );
};
