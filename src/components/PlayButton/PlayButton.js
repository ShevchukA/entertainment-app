import classes from "./PlayButton.module.css";
import icon from "../../assets/icon-play.svg";

function PlayButton() {
  return (
    <div className={classes.play}>
      <div className={classes.button}>
        <img src={icon} alt="play" />
        <h3>Play</h3>
      </div>
    </div>
  );
}

export default PlayButton;
