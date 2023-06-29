import ContentGrid from "../components/ContentGrid";
import data from "../data.json";

function MoviesPage() {
  const movies = data
    .filter((item) => item.category === "Movie")
    .map((item) => {
      return <img key={item.title} src={item.thumbnail.regular.large} />;
    });

  return (
    <>
      <ContentGrid title="Movies" content={movies} />
    </>
  );
}

export default MoviesPage;
