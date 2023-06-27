import classes from "./SearchBar.module.css";
import icon from "../assets/icon-search.svg";

function SearchBar() {
  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        <img src={icon} />
      </div>
      <div className={classes.field}>
        <input type="text" placeholder="Search for movies on TV series" />
      </div>
    </div>
  );
}

export default SearchBar;
