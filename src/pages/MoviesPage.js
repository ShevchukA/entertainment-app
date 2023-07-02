import { useSelector } from "react-redux";
import Card from "../components/Card";
import ContentGrid from "../components/ContentGrid";

function MoviesPage() {
  console.log("MOVIES PAGE");
  const content = useSelector((state) => state.items);

  const movies = content
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
