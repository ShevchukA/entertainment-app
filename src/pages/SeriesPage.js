import { useSelector } from "react-redux";
import Card from "../components/Card";
import ContentGrid from "../components/ContentGrid";

function SeriesPage() {
  console.log("SERIES PAGE");
  const content = useSelector((state) => state.content.items);
  const searchingRequest = useSelector((state) => state.search)
    .trim()
    .toLowerCase();

  const series = content
    .filter(
      (item) =>
        item.category === "TV Series" &&
        item.title.toLowerCase().includes(searchingRequest)
    )
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
