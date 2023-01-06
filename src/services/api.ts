import axios from "axios";

export const api = axios.create({
  baseURL: "https://nomad-room-json-server.onrender.com",
});
