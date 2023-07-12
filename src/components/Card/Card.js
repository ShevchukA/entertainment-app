import classes from "./Card.module.css";
import Bookmark from "../Bookmark/Bookmark";
import PlayButton from "../PlayButton/PlayButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { contentActions } from "../../store";
import { ReactComponent as IconTV } from "../../assets/icon-category-tv.svg";
import { ReactComponent as IconMovies } from "../../assets/icon-category-movie.svg";

function Card({ isTrending, data }) {
  const { title, thumbnail, year, category, rating, isBookmarked } = data;

  const [bookmarked, setBookmarked] = useState(isBookmarked);

  const dispatch = useDispatch();

  const imgSrc = isTrending
    ? thumbnail.trending.small
    : thumbnail.regular.small;

  const imgSrcSet = isTrending
    ? `${thumbnail.trending.small} 328w,
       ${thumbnail.trending.medium} 440w,
       ${thumbnail.trending.large} 560w`
    : `${thumbnail.regular.small} 328w,
       ${thumbnail.regular.medium} 440w,
       ${thumbnail.regular.large} 560w`;

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
      <div className={classes.container}>
        <div className={classes.thumbnail}>
          <img
            src={imgSrc}
            srcSet={imgSrcSet}
            sizes="(max-width: 700px) 45vw, (max-width: 1100px) 25vw, 20vw"
            alt={`${category} ${title}`}
          />
          <PlayButton />
          <Bookmark isBookmarked={bookmarked} onBookmark={bookmarkHandler} />
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
      </div>
    </div>
  );
}

export default Card;
