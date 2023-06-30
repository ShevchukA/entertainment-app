import classes from "./TrendLine.module.css";

function TrendLine({ content }) {
  console.log("TRENDING");

  function scrollHandler(e) {
    const line = e.target.closest("#trendLine"); // select whole div
    line.scrollLeft += e.deltaY; //deltaY because we rotate mousewheel down or up
    // document.body.style.overflow = "hidden";
  }

  return (
    <section>
      <h1>Trending</h1>
      <div id="trendLine" className={classes.line} onWheel={scrollHandler}>
        {content}
      </div>
    </section>
  );
}

export default TrendLine;
