import classes from "./ContentGrid.module.css";

function ContentGrid({ content, title }) {
  console.log("CONTENT");
  return (
    <section>
      <h1>{title}</h1>
      <div className={classes.grid}>{content}</div>
    </section>
  );
}

export default ContentGrid;
