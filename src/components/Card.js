import classes from "./Card.module.css";
import Bookmark from "./Bookmark";

function Card({ type, data }) {
  const { title, thumbnail, year, category, rating, isBookmarked, isTrending } =
    data;

  const imgSrc = isTrending
    ? thumbnail.trending.large
    : thumbnail.regular.large;

  const cardClass = isTrending
    ? `${classes.card} ${classes.trending}`
    : classes.card;

  let iconSrc;
  switch (category) {
    case "TV Series":
      iconSrc = "./assets/icon-nav-tv-series.svg";
      break;
    case "Movie":
      iconSrc = "./assets/icon-nav-movies.svg";
      break;
  }

  return (
    <div className={cardClass}>
      <div className={classes.thumbnail}>
        <img src={imgSrc} />
      </div>
      <div className={classes.info}>
        <span>{year}</span>
        <span>•</span>
        <span>
          <img src={iconSrc} alt="icon" />
        </span>
        <span>{category}</span>
        <span>•</span>
        <span>{rating}</span>
        <h3>{title}</h3>
      </div>
      <Bookmark isBookmarked={isBookmarked} />
    </div>
  );
}

export default Card;
