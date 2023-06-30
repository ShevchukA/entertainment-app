import Card from "../components/Card";
import ContentGrid from "../components/ContentGrid";
import TrendLine from "../components/TrendLine";
import data from "../data.json";

function HomePage() {
  const content = data
    .filter((item) => !item.isTrending)
    .map((item) => {
      return <Card key={item.title} data={item} />;
    });

  const trendingContent = data
    .filter((item) => item.isTrending)
    .map((item) => {
      return <Card key={item.title} data={item} isTrending={item.isTrending} />;
    });

  return (
    <>
      <TrendLine content={trendingContent} />
      <ContentGrid title="Recommended for you" content={content} />
    </>
  );
}

export default HomePage;
