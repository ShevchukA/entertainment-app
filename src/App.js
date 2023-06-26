import { BrowserRouter, Routes, Route } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import ContentLayout from "./pages/ContentLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import ShowsPage from "./pages/ShowsPage";
import BookmarkedPage from "./pages/BookmarkedPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route element={<ContentLayout />} errorElement={<ErrorPage />}>
            <Route index="true" element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="tv-shows" element={<ShowsPage />} />
            <Route path="bookmarked" element={<BookmarkedPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
