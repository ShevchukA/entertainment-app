import classes from "./Bookmark.module.css";

function Bookmark({ isBookmarked, onBookmark }) {
  let iconSrc = isBookmarked
    ? "./assets/icon-bookmark-full.svg"
    : "./assets/icon-bookmark-empty.svg";

  function clickHandler() {
    onBookmark();
  }

  return (
    <div onClick={clickHandler} className={classes.bookmark}>
      <img src={iconSrc} />
    </div>
  );
}

export default Bookmark;
