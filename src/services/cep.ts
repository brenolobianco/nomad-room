import axios from "axios";

export const cepRequest = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});
