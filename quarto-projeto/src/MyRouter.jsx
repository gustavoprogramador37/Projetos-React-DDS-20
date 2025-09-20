import { createBrowserRouter } from "react-router-dom";

//Páginas importadas
import App from "./App";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Sobre from "./pages/Sobre";
import PaginaErro from "./pages/PaginaErro";
import RotasProtegidas from "./pages/RotasProtegidas";
import ResetarSenha from "./pages/ResetarSenha";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PaginaErro />,
    children: [
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Resetar",
        element: <ResetarSenha />,
      },
    ],
  },
  {
    path: "/",
    element: <RotasProtegidas />,
    errorElement: <PaginaErro />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },

      {
        path: "/Cadastro",
        element: <Cadastro />,
      },

      {
        path: "/Sobre",
        element: <Sobre />,
      },
    ],
  },
]);
export default router;
