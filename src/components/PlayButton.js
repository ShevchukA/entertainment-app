import classes from "./PlayButton.module.css";

function PlayButton() {
  return (
    <div className={classes.play}>
      <div className={classes.button}>
        <img src="./assets/icon-play.svg" alt="play" />
        <h3>Play</h3>
      </div>
    </div>
  );
}

export default PlayButton;
