import Card from "../components/Card";
import ContentGrid from "../components/ContentGrid";
import data from "../data.json";

function MoviesPage() {
  const movies = data
    .filter((item) => item.category === "Movie")
    .map((item) => {
      return <Card key={item.title} data={item} />;
    });

  return (
    <>
      <ContentGrid title="Movies" content={movies} />
    </>
  );
}

export default MoviesPage;
