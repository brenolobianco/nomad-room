import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext/hook";
import { api } from "../../../services/api";
import { ContainerWrapper } from "../../../styles/components/Container";
import { Card } from "./Card";

export const ListRooms = ({ rooms }: any) => {
  const { userInfo } = useAuthContext();
  const token = localStorage.getItem("@NomadRoom:token");
  const userId = Number(localStorage.getItem("@NomadRoom:userId"));

  const navigate = useNavigate();
  const favRoom = (event: any) => {
    const btnFav = event.target.closest(".favBtn");

    if (userInfo.id) {
      if (!btnFav) {
        const idCard = event.target.closest("li").id;
        idCard && navigate(`/room/${idCard}`);
      } else {
        const Fav = async () => {
          const fav = rooms.find((room: any) => +room.id === +btnFav.id);

          const data = {
            userId: userId,
            title: fav.title,
            description: fav.description,
            about: {
              gym: fav.about.gym,
              internet: fav.about.internet,
              tv: fav.about.tv,
              garage: fav.about.garage,
              animals: fav.about.animals,
              furnished: fav.about.furnished,
            },
            localization: {
              zip_code: fav.localization.zip_code,
              district: fav.localization.district,
              state: fav.localization.state,
              street: fav.localization.street,
              number: fav.localization.number,
            },
            room_photo: fav.room_photo,
            contact: fav.contact,
          };

          try {
            const response = await api.post("/favorites", data, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
          } catch (error) {
            console.error(error);
          }
        };

        Fav();
      }
    } else {
      navigate(`/login`);
    }
  };
  return (
    <ContainerWrapper>
      <ul onClick={(event) => favRoom(event)}>
        {rooms.length > 0 &&
          rooms.map((room: any) => (
            <Card key={room.id} id={room.id} room={room} />
          ))}
      </ul>
    </ContainerWrapper>
  );
};
