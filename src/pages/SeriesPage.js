import Card from "../components/Card";
import ContentGrid from "../components/ContentGrid";
import data from "../data.json";

function SeriesPage() {
  const series = data
    .filter((item) => item.category === "TV Series")
    .map((item) => {
      return <Card key={item.title} data={item} />;
    });

  return (
    <>
      <ContentGrid title="TV Series" content={series} />
    </>
  );
}

export default SeriesPage;
