import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext/hook";
import { api } from "../../services/api";
import { Header } from "../Global/Header";
import { HeadlineMedium } from "../Global/Headlines/HeadlineMedium";
import { ListRooms } from "../Global/ListRooms";

export const Favorites = () => {
  const { userInfo } = useAuthContext();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favRoom = async () => {
      const response = await api.get(`/favorites?userId=${userInfo.id}`);
      const { data } = response;

      setFavorites(data);
    };
    favRoom();
  }, [userInfo]);

  return (
    <>
      <Header />
      <HeadlineMedium>
        <Text color="white" fontWeight="700" fontSize="2rem">
          Quartos favoritos
        </Text>
      </HeadlineMedium>
      <ListRooms rooms={favorites} />
    </>
  );
};
