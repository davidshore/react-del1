const DIN_API_NYCKEL = "pub_38158964e5638dbf5b237b29d3be5bf1a5b9d";
import Link from "next/link";
import Counter from "./counter";
import Search from "./search";

export default async function News() {
  const response = await fetch(
    `https://newsdata.io/api/1/news?apikey=${DIN_API_NYCKEL}&q=pizza`
  );

  const data = await response.json();

  const news = data.results;

  return (
    <div>
      <Search news={news} />
    </div>
  );
}
