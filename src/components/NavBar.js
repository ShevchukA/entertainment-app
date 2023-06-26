import Logo from "./Logo";
import Avatar from "./Avatar";
import NavButton from "./NavButton";

import homeIcon from "../assets/icon-nav-home.svg";
import moviesIcon from "../assets/icon-nav-movies.svg";
import showsIcon from "../assets/icon-nav-tv-series.svg";
import bookmarkIcon from "../assets/icon-nav-bookmark.svg";

import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={classes.navigation}>
      <Logo />
      <NavButton path="/" icon={homeIcon} />
      <NavButton path="/movies" icon={moviesIcon} />
      <NavButton path="/series" icon={showsIcon} />
      <NavButton path="/bookmark" icon={bookmarkIcon} />
      <Avatar />
    </div>
  );
}

export default NavBar;
