import classes from "./TrendLine.module.css";
import data from "../data.json";

function TrendLine({ children }) {
  console.log("TRENDING");
  const trendingContent = data
    .filter((item) => item.isTrending)
    .map((foundItem) => (
      <img
        key={foundItem.title}
        src={`${foundItem.thumbnail.trending.large}`}
      />
    ));

  function scrollHandler(e) {
    // console.log(e.deltaY);
    const line = e.target.closest("div"); // select whole div
    line.scrollLeft += e.deltaY; //deltaY because we rotate mousewheel down or up
  }

  return (
    <section>
      <h1>Trending</h1>
      <div className={classes.line} onWheel={scrollHandler}>
        {trendingContent}
      </div>
    </section>
  );
}

export default TrendLine;
