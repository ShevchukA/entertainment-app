import classes from "./Bookmark.module.css";

function Bookmark({ isBookmarked }) {
  let iconSrc = isBookmarked
    ? "./assets/icon-bookmark-full.svg"
    : "./assets/icon-bookmark-empty.svg";

  return (
    <div className={classes.bookmark}>
      <img src={iconSrc} />
    </div>
  );
}

export default Bookmark;
