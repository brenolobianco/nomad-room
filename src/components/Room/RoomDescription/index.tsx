import { iRoom } from "..";
import { About } from "./About";
import { Description } from "./Description";
import { Container } from "./styles";
import { TitleLocalization } from "./TitleLocalization";

interface iRoomDescriptionProps {
  room: iRoom;
}

export const RoomDescription = ({ room }: iRoomDescriptionProps) => {
  return (
    <Container>
      <TitleLocalization room={room} />
      <About room={room} />
      <Description room={room} />
    </Container>
  );
};
