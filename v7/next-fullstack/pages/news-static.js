// SSG - Static Site Generation

const DIN_API_NYCKEL = "";

export async function getStaticProps() {
  const res = await fetch(
    `https://newsapi.org/v2/everything?apiKey=${DIN_API_NYCKEL}&q=Apple`
  );
  const data = await res.json();

  return {
    props: {
      news: data.articles,
    },

    revalidate: 10,
  };
}

export default function NewsStatic({ news }) {
  return (
    <div>
      <h1>Latest news about Apple</h1>

      <ul>
        {news.map((item) => {
          return (
            <li>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
