import { useEffect, useRef } from "react";
import classes from "./TrendLine.module.css";

function TrendLine({ content }) {
  const trending = useRef();

  //onWheel event works in passive mode in React, thus can't prevent default behaviour
  //can be solved using useEffect and useRef for adding regular event listener
  //trending.current - DOM element
  useEffect(() => {
    trending.current.addEventListener("wheel", scrollHandler, {
      passive: false,
    });
  }, []);

  function scrollHandler(e) {
    e.preventDefault();
    // const line = e.target.closest("#trendLine"); // select whole div
    trending.current.scrollLeft += e.deltaY; //deltaY because we rotate mousewheel down or up
  }

  return (
    <div>
      <h1>Trending</h1>
      <div ref={trending} id="trendLine" className={classes.line}>
        {content}
      </div>
    </div>
  );
}

export default TrendLine;
