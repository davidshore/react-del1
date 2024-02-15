export default function Article({ article }) {
  return (
    <div>
      {article && (
        <>
          <h2>{article.title}</h2>
          <img src={article.image_url} />
        </>
      )}
    </div>
  );
}
