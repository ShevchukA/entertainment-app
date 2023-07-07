import { useSelector } from "react-redux";
import Card from "../components/Card";
import ContentGrid from "../components/ContentGrid";

function MoviesPage() {
  console.log("MOVIES PAGE");
  const content = useSelector((state) => state.content.items);
  const searchingRequest = useSelector((state) => state.search)
    .trim()
    .toLowerCase();

  const movies = content
    .filter(
      (item) =>
        item.category === "Movie" &&
        item.title.toLowerCase().includes(searchingRequest)
    )
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
