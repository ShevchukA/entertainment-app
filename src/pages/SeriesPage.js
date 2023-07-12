import { useSelector } from "react-redux";
import Card from "../components/Card/Card";
import ContentGrid from "../components/ContentGrid/ContentGrid";

function SeriesPage() {
  // console.log("SERIES PAGE");
  const content = useSelector((state) => state.content.items);
  const searchingRequest = useSelector(
    (state) => state.search.searchingRequest
  );
  const isSearching = useSelector((state) => state.search.isSearching);

  const searchResults = content
    .filter(
      (item) =>
        item.category === "TV Series" &&
        item.title.toLowerCase().includes(searchingRequest.trim().toLowerCase())
    )
    .map((item) => {
      return <Card key={item.title} data={item} />;
    });

  const series = content
    .filter((item) => item.category === "TV Series")
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
      {!isSearching && <ContentGrid title="TV Series" content={series} />}
    </>
  );
}

export default SeriesPage;
