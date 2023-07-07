import classes from "./Bookmark.module.css";
import { ReactComponent as IconBookmarkFull } from "../assets/icon-bookmark-full.svg";
import { ReactComponent as IconBookmarkEmpty } from "../assets/icon-bookmark-empty.svg";

function Bookmark({ isBookmarked, onBookmark }) {
  let iconSrc = isBookmarked
    ? "./assets/icon-bookmark-full.svg"
    : "./assets/icon-bookmark-empty.svg";

  function clickHandler() {
    onBookmark();
  }

  return (
    <div onClick={clickHandler} className={classes.bookmark}>
      {isBookmarked ? (
        <IconBookmarkFull className={classes.full} />
      ) : (
        <IconBookmarkEmpty className={classes.empty} />
      )}
    </div>
  );
}

export default Bookmark;
