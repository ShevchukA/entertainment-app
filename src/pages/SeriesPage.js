import { useSelector } from "react-redux";
import Card from "../components/Card";
import ContentGrid from "../components/ContentGrid";

function SeriesPage() {
  console.log("SERIES PAGE");
  const content = useSelector((state) => state.items);
  const series = content
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
