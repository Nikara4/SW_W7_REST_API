import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav className="nav">
      <ul className="nav--ul">
        <li>
          <NavLink
            className="nav--link"
            activeClassName="nav--link__active"
            to="/"
            exact
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav--link"
            activeClassName="nav--link__active"
            to="/week7"
            exact
          >
            Users list
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
