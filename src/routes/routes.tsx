import { Route, Routes } from "react-router-dom";
import { ValidationPage } from "../pages/validationUser/indedx";
import { DashboardPage } from "../pages/dashboard";
import { ProtectRoute } from "./ProtectRoute";
import { HomePage } from "../pages/home";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";
import { RoomPage } from "../pages/room";
import { FavoritesPage } from "../pages/favorites";
import { FormRoomPage } from "../pages/provideRoom";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route element={<ProtectRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/validation" element={<ValidationPage />} />
        <Route path="/room/:id" element={<RoomPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Route>
      <Route path="/register/room" element={<FormRoomPage />} />
    </Routes>
  );
};
