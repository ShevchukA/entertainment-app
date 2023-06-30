import Card from "../components/Card";
import ContentGrid from "../components/ContentGrid";
import TrendLine from "../components/TrendLine";
import data from "../data.json";

function HomePage() {
  const content = data
    .filter((item) => !item.isTrending)
    .map((item) => {
      return <Card key={item.title} data={item} />;
      // return <img key={item.title} src={item.thumbnail.regular.large} />;
    });

  const trendingContent = data
    .filter((item) => item.isTrending)
    .map((item) => (
      <Card key={item.title} data={item} />
      // <img key={item.title} src={`${item.thumbnail.trending.large}`} />
    ));

  return (
    <>
      <TrendLine content={trendingContent} />
      <ContentGrid title="Recommended for you" content={content} />
    </>
  );
}

export default HomePage;
