import { useSelector } from "react-redux";
import Card from "../components/Card";
import ContentGrid from "../components/ContentGrid";
import TrendLine from "../components/TrendLine";

function HomePage() {
  console.log("HOME PAGE");
  const content = useSelector((state) => state.content.items);
  const searchingRequest = useSelector((state) => state.search)
    .trim()
    .toLowerCase();

  console.log("Content: ", content);
  console.log(searchingRequest.trim().length);

  const trending = content
    .filter((item) => item.isTrending)
    .map((item) => {
      return <Card key={item.title} data={item} isTrending={item.isTrending} />;
    });

  const recommendations = content
    .filter(
      (item) =>
        !item.isTrending && item.title.toLowerCase().includes(searchingRequest)
    )
    .map((item) => {
      return <Card key={item.title} data={item} />;
    });

  return (
    <>
      {searchingRequest.trim().length === 0 && <TrendLine content={trending} />}
      <ContentGrid title="Recommended for you" content={recommendations} />
    </>
  );
}

export default HomePage;
