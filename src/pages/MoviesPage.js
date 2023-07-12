import { useSelector } from "react-redux";
import Card from "../components/Card/Card";
import ContentGrid from "../components/ContentGrid/ContentGrid";

function MoviesPage() {
  // console.log("MOVIES PAGE");
  const content = useSelector((state) => state.content.items);
  const searchingRequest = useSelector(
    (state) => state.search.searchingRequest
  );
  const isSearching = useSelector((state) => state.search.isSearching);

  const searchResults = content
    .filter(
      (item) =>
        item.category === "Movie" &&
        item.title.toLowerCase().includes(searchingRequest.trim().toLowerCase())
    )
    .map((item) => {
      return <Card key={item.title} data={item} />;
    });

  const movies = content
    .filter((item) => item.category === "Movie")
    .map((item) => {
      return <Card key={item.title} data={item} />;
    });

  return (
    <>
      {isSearching && (
        <ContentGrid
          title={`Found ${searchResults.length} results for '${searchingRequest}'`}
          content={searchResults}
        />
      )}
      {!isSearching && <ContentGrid title="Movies" content={movies} />}
    </>
  );
}

export default MoviesPage;
