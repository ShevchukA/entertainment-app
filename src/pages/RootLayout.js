import { Outlet } from "react-router";
import classes from "./RootLayout.module.css";
import NavBar from "../components/NavBar";
function RootLayout() {
  return (
    <div className={classes.container}>
      <NavBar />
      <main>
        <div>search</div>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
