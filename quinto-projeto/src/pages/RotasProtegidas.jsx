import { Outlet, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const RotasProtegidas = () => {
  const estaLogado = true;

  if (!estaLogado) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
  
};

export default RotasProtegidas;
