import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { ContainerWrapper } from "../../styles/components/Container";
import { Header } from "../Global/Header";
import { Contact } from "./Contact";
import { RoomDescription } from "./RoomDescription";
import { RoomPhoto } from "./RoomPhoto";
import { ContainerPhotoContact } from "./styles";

export interface iUser {
  email: string;
  password: string;
  name: string;
  last_name: string;
  age: number;
  genre: string;
  profession: string;
  profile_photo: string;
  validation: boolean;
  id: number;
}

export interface iRoom {
  userId: number;
  title: string;
  description: string;
  about: {
    gym: boolean;
    internet: boolean;
    tv: boolean;
    garage: boolean;
    animals: boolean;
    furnished: boolean;
  };
  localization?: {
    zip_code: string;
    district: string;
    state: string;
    street: string;
    number: number;
  };
  location?: {
    street: string;
    city: string;
    district: string;
  };
  room_img?: string;
  room_photo?: string;
  contact: number | string;
  id: number;
  user: iUser;
}

export const Room = () => {
  const [room, setRoom] = useState({} as iRoom);
  const { id } = useParams();

  useEffect(() => {
    const getRoom = async () => {
      const response = await api.get(`/rooms/${id}`, {
        params: {
          _expand: "user",
        },
      });

      const { data } = response;

      setRoom(data);
    };

    getRoom();
  }, [id]);

  return (
    <>
      {room.title ? (
        <>
          <Header />
          <ContainerWrapper>
            <ContainerPhotoContact>
              <RoomPhoto urlImg={room.room_photo || room.room_img} />
              <Contact contact={room.contact} user={room.user} />
            </ContainerPhotoContact>

            <RoomDescription room={room} />
          </ContainerWrapper>
        </>
      ) : (
        ""
      )}
    </>
  );
};
