import {NavLink, Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
      {/* LINKS DE MENU = NAVLINK */}
      <NavLink to="/home"> Home </NavLink>
      <NavLink to="/cadastro"> Cadastro </NavLink>
      <NavLink to="/sobre"> Sobre </NavLink>

      {/* LINK NORMAIS = LINK  */}
      <Link to="/login"> Ir pra Login</Link>
    </nav>
  )
}

export default NavBar