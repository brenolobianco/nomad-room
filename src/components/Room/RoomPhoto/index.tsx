import { Container } from "./styles";

interface iRoomPhoto {
  urlImg: string | undefined;
}

export const RoomPhoto = ({ urlImg }: iRoomPhoto) => {
  return (
    <Container>
      <img src={urlImg} alt="" />
    </Container>
  );
};
