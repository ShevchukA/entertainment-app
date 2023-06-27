import { NavLink } from "react-router-dom";
import classes from "./NavButton.module.css";

function NavButton({ path, icon }) {
  console.log(icon);
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? `${classes.button} ${classes.active}` : classes.button
      }
      to={path}
    >
      <img src={icon} alt={path} className={classes.image} />
    </NavLink>
  );
}

export default NavButton;
