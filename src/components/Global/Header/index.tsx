import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  ButtonGroup,
  Flex,
  Heading,
  Link,
  Menu,
  MenuButton,
  MenuList,
  Spacer,
  useMediaQuery,
} from "@chakra-ui/react";

import { Link as ReachLink } from "react-router-dom";

import LogoDesktop from "../../../assets/logoDesktop.svg";
import LogoMobile from "../../../assets/logoMobile.svg";
import { useAuthContext } from "../../../contexts/AuthContext/hook";

export const Header = () => {
  const { userInfo, logout } = useAuthContext();

  const { name, profile_photo } = userInfo;

  const token = localStorage.getItem("@NomadRoom:token");

  const [tablet] = useMediaQuery("(min-width: 550px)");

  return (
    <Flex justifyContent="center" p="0 20px" bgColor="#ffffff">
      <Flex alignItems="center" gap="2" h="80px" w="1200px">
        <Box>
          <Heading>
            <Link as={ReachLink} to="/dashboard">
              <img src={tablet ? LogoDesktop : LogoMobile} alt="Logo" />
            </Link>
          </Heading>
        </Box>
        <Spacer />
        {token ? (
          <Flex alignItems="center" gap="16px">
            <Avatar w="45px" h="45px" name={name} src={profile_photo} />
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    px={4}
                    py={2}
                    transition="all 0.2s"
                    fontSize="1rem"
                    fontWeight={["700", "700", "500"]}
                  >
                    {name} {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </MenuButton>
                  <MenuList border="none">
                    <Flex flexDirection="column">
                      <Link
                        style={{ textDecoration: "none", padding: "5px 10px" }}
                        _hover={{
                          background: "#D3FFDB",
                        }}
                        as={ReachLink}
                        to="/register/room"
                      >
                        Disponibilizar quarto
                      </Link>
                      <Link
                        style={{ textDecoration: "none", padding: "5px 10px" }}
                        _hover={{
                          background: "#D3FFDB",
                        }}
                        as={ReachLink}
                        to="/favorites"
                      >
                        Favoritos
                      </Link>
                      <Link
                        style={{ textDecoration: "none", padding: "5px 10px" }}
                        _hover={{
                          background: "#D3FFDB",
                        }}
                        as={ReachLink}
                        to="/"
                        onClick={() => logout()}
                      >
                        Sair
                      </Link>
                    </Flex>
                  </MenuList>
                </>
              )}
            </Menu>
          </Flex>
        ) : (
          <ButtonGroup gap="2" mt="15px">
            <Link
              as={ReachLink}
              to="/register"
              color="#ffffff"
              bg="#40C057"
              border="none"
              p="12px 20px"
              borderRadius="10px"
              fontWeight={["400", "700"]}
              _hover={{
                filter: "brightness(1.05)",
              }}
            >
              Cadastrar-se
            </Link>
            <Link
              as={ReachLink}
              to="/login"
              color="#ffffff "
              bg="#40C057"
              border="none"
              p="12px 20px"
              borderRadius="10px"
              fontWeight={["400", "700"]}
              _hover={{
                filter: "brightness(1.05)",
              }}
            >
              Login
            </Link>
          </ButtonGroup>
        )}
      </Flex>
    </Flex>
  );
};
