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
import { fetchContent } from "./store/index";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContent());
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
