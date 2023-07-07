import { useSelector } from "react-redux";
import { Outlet } from "react-router";

function ContentLayout() {
  const isLoading = useSelector((state) => state.content.isLoading);

  return <>{isLoading ? <h1>Loading content for you...</h1> : <Outlet />}</>;
}

export default ContentLayout;
