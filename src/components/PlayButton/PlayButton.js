import classes from "./PlayButton.module.css";
import { ReactComponent as PlayIcon } from "../../assets/icon-play.svg";

function PlayButton() {
  return (
    <div className={classes.play}>
      <div className={classes.button}>
        <PlayIcon />
        <h3>Play</h3>
      </div>
    </div>
  );
}

export default PlayButton;
