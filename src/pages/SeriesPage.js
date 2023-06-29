import ContentGrid from "../components/ContentGrid";
import data from "../data.json";

function SeriesPage() {
  const series = data
    .filter((item) => item.category === "TV Series")
    .map((item) => {
      return <img key={item.title} src={item.thumbnail.regular.large} />;
    });

  return (
    <>
      <ContentGrid title="TV Series" content={series} />
    </>
  );
}

export default SeriesPage;
