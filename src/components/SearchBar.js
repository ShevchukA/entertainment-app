import classes from "./SearchBar.module.css";
import icon from "../assets/icon-search.svg";

function SearchBar() {
  return (
    <section className={classes.container}>
      <div className={classes.icon}>
        <img src={icon} />
      </div>
      <div className={classes.field}>
        <input type="text" placeholder="Search for movies and TV series" />
      </div>
    </section>
  );
}

export default SearchBar;
