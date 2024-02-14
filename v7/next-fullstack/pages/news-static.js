// SSG - Static Site Generation
export async function getStaticProps() {
  const res = await fetch(
    "https://newsapi.org/v2/everything?apiKey=2a19d6e86e134101a8e2cf04114eee2d&q=Apple"
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
