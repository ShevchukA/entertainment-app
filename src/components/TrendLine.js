import classes from "./TrendLine.module.css";
import data from "../data.json";

function TrendLine({ children }) {
  const trendingContent = data
    .filter((item) => item.isTrending)
    .map((foundItem) => (
      <img
        key={foundItem.title}
        src={`${foundItem.thumbnail.trending.large}`}
      />
    ));

  return (
    <section>
      <h1>Trending</h1>
      <div className={classes.line}>{trendingContent}</div>
    </section>
  );
}

export default TrendLine;
