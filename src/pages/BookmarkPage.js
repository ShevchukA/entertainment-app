import Card from "../components/Card";
import ContentGrid from "../components/ContentGrid";
import data from "../data.json";

function BookmarkPage() {
  const bookmarkedMovies = data
    .filter((item) => item.isBookmarked && item.category === "Movie")
    .map((item) => {
      return <Card key={item.title} data={item} />;
    });

  const bookmarkedSeries = data
    .filter((item) => item.isBookmarked && item.category === "TV Series")
    .map((item) => {
      return <Card key={item.title} data={item} />;
    });

  return (
    <>
      <ContentGrid title="Bookmarked Movies" content={bookmarkedMovies} />
      <ContentGrid title="Bookmarked TV Series" content={bookmarkedSeries} />
    </>
  );
}

export default BookmarkPage;
