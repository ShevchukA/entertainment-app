import { useSelector } from "react-redux";
import Card from "../components/Card";
import ContentGrid from "../components/ContentGrid";
import TrendLine from "../components/TrendLine";
import data from "../data.json";

function HomePage() {
  const content = useSelector((state) => state.items);

  const recommendations = content
    .filter((item) => !item.isTrending)
    .map((item) => {
      return <Card key={item.title} data={item} />;
    });

  const trending = content
    .filter((item) => item.isTrending)
    .map((item) => {
      return <Card key={item.title} data={item} isTrending={item.isTrending} />;
    });

  return (
    <>
      <TrendLine content={trending} />
      <ContentGrid title="Recommended for you" content={recommendations} />
    </>
  );
}

export default HomePage;
