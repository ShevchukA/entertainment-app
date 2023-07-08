import { useSelector } from "react-redux";
import Card from "../components/Card";
import ContentGrid from "../components/ContentGrid";
import TrendLine from "../components/TrendLine";

function HomePage() {
  console.log("HOME PAGE");
  const content = useSelector((state) => state.content.items);
  const searchingRequest = useSelector(
    (state) => state.search.searchingRequest
  );

  const isSearching = useSelector((state) => state.search.isSearching);

  console.log("Content: ", content);

  const searchResults = content
    .filter((item) =>
      item.title.toLowerCase().includes(searchingRequest.trim().toLowerCase())
    )
    .map((item) => {
      return <Card key={item.title} data={item} />;
    });

  const trending = content
    .filter((item) => item.isTrending)
    .map((item) => {
      return <Card key={item.title} data={item} isTrending={item.isTrending} />;
    });

  const recommendations = content
    .filter((item) => !item.isTrending)
    .map((item) => {
      return <Card key={item.title} data={item} />;
    });

  return (
    <div>
      {isSearching && (
        <ContentGrid
          title={`Found ${searchResults.length} results for '${searchingRequest}'`}
          content={searchResults}
        />
      )}
      {!isSearching && <TrendLine content={trending} />}
      {!isSearching && (
        <ContentGrid title="Recommended for you" content={recommendations} />
      )}
    </div>
  );
}

export default HomePage;
