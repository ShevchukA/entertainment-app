import ContentGrid from "../components/ContentGrid";
import TrendLine from "../components/TrendLine";
import data from "../data.json";

function HomePage() {
  const content = data.map((item) => {
    return <img key={item.title} src={item.thumbnail.regular.large} />;
  });

  return (
    <>
      <TrendLine />
      <ContentGrid title="Recommended for you" content={content} />
    </>
  );
}

export default HomePage;
