import { useSelector } from "react-redux";
import Card from "../components/Card";
import ContentGrid from "../components/ContentGrid";

function BookmarkPage() {
  console.log("BOOKMARK PAGE");
  const content = useSelector((state) => state.content.items);
  const searchingRequest = useSelector((state) => state.search)
    .trim()
    .toLowerCase();

  const bookmarkedMovies = content
    .filter(
      (item) =>
        item.isBookmarked &&
        item.category === "Movie" &&
        item.title.toLowerCase().includes(searchingRequest)
    )
    .map((item) => {
      return <Card key={item.title} data={item} />;
    });

  let bookmarkedMoviesContent = bookmarkedMovies;
  if (bookmarkedMovies.length === 0)
    bookmarkedMoviesContent = <p>You don't have bookmarked movies</p>;

  const bookmarkedSeries = content
    .filter(
      (item) =>
        item.isBookmarked &&
        item.category === "TV Series" &&
        item.title.toLowerCase().includes(searchingRequest)
    )
    .map((item) => {
      return <Card key={item.title} data={item} />;
    });

  let bookmarkedSeriesContent = bookmarkedSeries;
  if (bookmarkedSeries.length === 0)
    bookmarkedSeriesContent = <p>You don't have bookmarked TV series</p>;

  return (
    <>
      <ContentGrid
        title="Bookmarked Movies"
        content={bookmarkedMoviesContent}
      />
      <ContentGrid
        title="Bookmarked TV Series"
        content={bookmarkedSeriesContent}
      />
    </>
  );
}

export default BookmarkPage;
