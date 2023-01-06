import { Box, Icon, IconButton, Image, Text } from "@chakra-ui/react";
import { MdFavoriteBorder, MdLocationPin } from "react-icons/md";
import { useAuthContext } from "../../../../contexts/AuthContext/hook";
import { api } from "../../../../services/api";

export interface iRoom {
  title: string;
  description: string;
  room_photo: string;
  id: number;
  localization: {
    street: string;
    state: string;
  };
}

export const Card = ({ room }: any) => {
  const { userInfo } = useAuthContext();

  // const favoritButton = async (e: any) => {
  //   const roomId = e.target.id;
  //   const userId = Number(localStorage.getItem("@NomadRoom:userId"));
  //   const token = localStorage.getItem("@NomadRoom:token");

  //   const data = {
  //     rooms_favorits: [roomId],
  //   };
  //   console.log(data);

  //   const response = await api.patch(`/users/${userId}`, data, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   console.log(response.data);
  // };

  const {
    title,
    description,
    room_photo,
    id,
    localization: { state, street },
  } = room;
  return (
    <Box
      as="li"
      id={id}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      my="9"
      w="100%"
      cursor="pointer"
    >
      <Box
        w="100%"
        rounded="8px"
        overflow="hidden"
        boxShadow="sm"
        bg="rgb(250 250 250)"
        display="flex"
        flexDirection={["column", "column", "column", "row"]}
        justifyContent="flex-start"
        alignItems="center"
        position={"relative"}
      >
        <Image
          src={room_photo}
          alt={`room photo`}
          maxW="298"
          maxH="158.67"
          minW="298"
          minH="158.67"
          rounded="8px"
          m="5"
        />
        <Box
          overflow="hidden"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Text
            mx="5"
            as="h2"
            fontWeight="semibold"
            fontSize="xl"
            my="5"
            w="80%"
          >
            {title}
          </Text>
          <Text mx="5" noOfLines={3}>
            {description}
          </Text>
          <Text
            mx="5"
            mt="1"
            fontWeight="normal"
            as="h4"
            lineHeight="tight"
            noOfLines={3}
            alignSelf="flex-start"
            m="5"
          >
            <Icon as={MdLocationPin} w={5} h={5} /> {street} - {state}
          </Text>
        </Box>
        <IconButton
          id={id}
          className="favBtn"
          aria-label="Search database"
          icon={<MdFavoriteBorder />}
          fontSize="22px"
          alignSelf="flex-start"
          m="5"
          position={"absolute"}
          right="5"
          top="2"
        />
      </Box>
    </Box>
  );
};
