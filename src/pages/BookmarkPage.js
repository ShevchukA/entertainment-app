import ContentGrid from "../components/ContentGrid";
import data from "../data.json";

function BookmarkPage() {
  const bookmarkedMovies = data
    .filter((item) => item.isBookmarked && item.category === "Movie")
    .map((item) => {
      return <img key={item.title} src={item.thumbnail.regular.large} />;
    });

  const bookmarkedSeries = data
    .filter((item) => item.isBookmarked && item.category === "TV Series")
    .map((item) => {
      return <img key={item.title} src={item.thumbnail.regular.large} />;
    });

  return (
    <>
      <ContentGrid title="Bookmarked Movies" content={bookmarkedMovies} />
      <ContentGrid title="Bookmarked TV Series" content={bookmarkedSeries} />
    </>
  );
}

export default BookmarkPage;
