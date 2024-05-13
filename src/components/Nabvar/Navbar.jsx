 import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <NavLink>
        Mini <span>Blog</span>
      </NavLink>
      <ul>
        <li>
            <NavLink to="/">
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to="about">
                Sobre
            </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;