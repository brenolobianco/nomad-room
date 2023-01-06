import { RoutesMain } from "./routes/routes";
import { StyledGlobal } from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <RoutesMain />
      <StyledGlobal />
      <ToastContainer />
    </>
  );
};

export default App;
