import Logo from "./Logo";
import Avatar from "./Avatar";
import NavButton from "./NavButton";
import homeicon from "../assets/icon-nav-home.svg";

import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={classes.navigation}>
      <Logo />
      <NavButton path="/" icon="./assets/icon-nav-home.svg" />
      <NavButton path="/movies" icon="./assets/icon-nav-movies.svg" />
      <NavButton path="/series" icon="./assets/icon-nav-tv-series.svg" />
      <NavButton path="/bookmark" icon="./assets/icon-nav-bookmark.svg" />

      {/* TEMP */}
      <p>temp</p>
      <svg src={homeicon} />
      <svg src="./assets/icon-nav-home.svg" />
      <svg src="../assets/icon-nav-home.svg" />

      <Avatar />
    </nav>
  );
}

export default NavBar;
