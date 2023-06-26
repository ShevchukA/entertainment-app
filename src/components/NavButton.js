import { NavLink } from "react-router-dom";
import classes from "./NavButton.module.css";

function NavButton({ path, icon }) {
  return (
    <NavLink className={classes["nav-button"]} to={path}>
      <img src={icon} />
    </NavLink>
  );
}

export default NavButton;
