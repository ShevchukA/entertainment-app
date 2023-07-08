import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import { useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./page-animations.css";

function ContentLayout() {
  const isLoading = useSelector((state) => state.content.isLoading);
  const location = useLocation();
  return (
    <section className="content">
      <TransitionGroup className="transition">
        <CSSTransition key={location.pathname} timeout={600} classNames="fade">
          {isLoading ? <h1>Loading content for you...</h1> : <Outlet />}
        </CSSTransition>
      </TransitionGroup>
    </section>
  );
}

export default ContentLayout;
