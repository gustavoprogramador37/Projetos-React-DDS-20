import { createBrowserRouter } from "react-router-dom";

//Página importadas
import App from "./App";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Sobre from "./pages/Sobre";
import PaginaErro from "./pages/PaginaErro";
import RotasProtegidas from "./pages/RotasProtegidas";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PaginaErro />,
    children: [
        {
         index:true,
         element:<Login/>
        },
      {
        path: "login",
        element: <Login />,
      }
    ],
  },
  {
    path: "/",
    element: <RotasProtegidas />,
    errorElement: <PaginaErro />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "cadastro",
        element: <Cadastro />,
      },
      {
        path: "sobre",
        element: <Sobre />,
      }
    ],
  },
]);

export default router;
