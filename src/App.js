import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import ContentLayout from "./pages/ContentLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import BookmarkPage from "./pages/BookmarkPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { contentActions } from "./store/index";

function App() {
  const dispatch = useDispatch();
  async function fetchData() {
    const response = await fetch("https://api.npoint.io/4424c46c093c84dc4fa5");
    const data = await response.json();
    dispatch(contentActions.updateContent(data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
        <Route element={<ContentLayout />} errorElement={<ErrorPage />}>
          <Route index="true" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="series" element={<SeriesPage />} />
          <Route path="bookmark" element={<BookmarkPage />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
