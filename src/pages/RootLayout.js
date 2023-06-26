import { Outlet } from "react-router";
import classes from "./RootLayout.module.css";
function RootLayout() {
  return (
    <div className={classes.container}>
      <div>navigation</div>
      <main>
        <div>search</div>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
