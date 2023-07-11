import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import BookmarkPage from "./pages/BookmarkPage";
import { useEffect } from "react";
import { fetchContent, sendContent } from "./store/index";
import { useDispatch, useSelector } from "react-redux";

let isInitial = true;
function App() {
  console.log("APP");
  const content = useSelector((state) => state.content.items);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (isInitial) {
  //     console.log("initial");
  //     isInitial = false;
  //     dispatch(fetchContent()); // get content from a server in initial stage
  //     return;
  //   }
  //   console.log("not initial");
  //   dispatch(sendContent(content)); // send content to a server after every change in the state
  // }, [content]);

  useEffect(() => {
    console.log("Initial");
    dispatch(fetchContent()); // get content from a server in initial stage
    return () => console.log("clean up");
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
        <Route index="true" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="series" element={<SeriesPage />} />
        <Route path="bookmark" element={<BookmarkPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
