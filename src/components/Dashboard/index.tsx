import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Global/Header";
import { ListRooms } from "../../components/Global/ListRooms";
import { iCity, iCityResponseApi, SearchDashboard } from "./Search";
import { api } from "../../services/api";

interface iResponseApiState {
  localization: {
    state: string;
  };
}

export interface iRoom {
  title: string;
  description: string;
  room_photo: string;
  id: string;
  localization: {
    street: string;
    state: string;
  };
}

export const Dashboard = () => {
  const [stateSearch, SetStateSearch] = useState([]);
  // const [searchResult, SetSearchResult] = useState(false);
  // const [search, SetSearch] = useState("");  Pesquisa não contrada

  const SearchClick = async (state: iCity) => {
    const response = await api.get("/rooms");
    const { data } = response;

    const stateFilter = data.filter((stateApi: iResponseApiState) =>
      stateApi.localization.state
        .toLowerCase()
        .includes(state.city.toLowerCase())
    );
    stateFilter.length > 0 ? SetStateSearch(stateFilter) : SetStateSearch(data);

    // stateFilter.length > 0 ? SetSearchResult(false) : SetSearchResult(true);

    // searchResult && SetSearch(state.city); Pesquisa não encontrada
  };

  const SearchOptionClick = async (state: iCityResponseApi) => {
    const response = await api.get("/rooms");
    const { data } = response;

    const stateFilter = data.filter((stateApi: iResponseApiState) =>
      stateApi.localization.state
        .toLowerCase()
        .includes(state.nome.toLowerCase())
    );
    stateFilter.length > 0 ? SetStateSearch(stateFilter) : SetStateSearch(data);

    // searchResult && SetSearch(state.nome);  Pesquisa não encontrada

    // stateFilter.length > 0 ? SetSearchResult(false) : SetSearchResult(true);
  };

  useEffect(() => {
    const roomApi = async () => {
      const response = await api.get("/rooms");
      const { data } = response;
      SetStateSearch(data);
    };

    roomApi();
  }, []);

  return (
    <>
      <Header />
      <SearchDashboard
        SearchClick={SearchClick}
        SearchOptionClick={SearchOptionClick}
      />
      {/* {searchResult && (
        <H3Result>{`${search} não foi encontado quartos`}</H3Result>
      )} */}
      <ListRooms rooms={stateSearch} />
    </>
  );
};
