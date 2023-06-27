import { Outlet } from "react-router";
import classes from "./RootLayout.module.css";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
function RootLayout() {
  return (
    <div className={classes.container}>
      <NavBar />
      <main>
        <SearchBar />
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
