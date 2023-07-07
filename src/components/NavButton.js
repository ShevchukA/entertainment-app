import { NavLink } from "react-router-dom";
import classes from "./NavButton.module.css";
import { ReactComponent as Icon } from "../assets/icon-nav-home.svg";

function NavButton({ path, children }) {
  // console.log(icon);

  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? `${classes.button} ${classes.active}` : classes.button
      }
      to={path}
    >
      {children}
    </NavLink>
  );
}

export default NavButton;
