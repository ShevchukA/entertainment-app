import classes from "./Card.module.css";
import Bookmark from "./Bookmark";
import PlayButton from "./PlayButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { contentActions } from "../store";
import { ReactComponent as IconTV } from "../assets/icon-nav-tv-series.svg";
import { ReactComponent as IconMovies } from "../assets/icon-nav-movies.svg";

function Card({ isTrending, data }) {
  const { title, thumbnail, year, category, rating, isBookmarked } = data;

  const [bookmarked, setBookmarked] = useState(isBookmarked);

  const dispatch = useDispatch();

  const imgSrc = isTrending
    ? thumbnail.trending.large
    : thumbnail.regular.large;

  const cardClass = isTrending
    ? `${classes.card} ${classes.trending}`
    : classes.card;

  function bookmarkHandler() {
    setBookmarked((prevState) => !prevState);
    dispatch(contentActions.bookmarkItem(title));
    //after that it will dispatch a send request to a server, see App.js
  }

  return (
    <div className={cardClass}>
      <div className={classes.thumbnail}>
        <img src={imgSrc} />
        <PlayButton />
      </div>
      <div className={classes.info}>
        <span>{year}</span>
        <span>•</span>
        <span>
          {category === "Movie" && <IconMovies />}
          {category === "TV Series" && <IconTV />}
        </span>
        <span>{category}</span>
        <span>•</span>
        <span>{rating}</span>
        <h3>{title}</h3>
      </div>

      <Bookmark isBookmarked={bookmarked} onBookmark={bookmarkHandler} />
    </div>
  );
}

export default Card;
