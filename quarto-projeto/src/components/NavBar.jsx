import {NavLink, Link} from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
       {/* LINKS DE MENU = NAVLINK */}
      <NavLink to="Home"> Home </NavLink>
      <NavLink to="Cadastro"> Cadastro</NavLink>
      <NavLink to="Sobre"> Sobre </NavLink>

       {/* LINK NORMAIS - LINK     */}
      <Link to="/login"> Ir pra login</Link>
    </nav>
  )
}

export default NavBar