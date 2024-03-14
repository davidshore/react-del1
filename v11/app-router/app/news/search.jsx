"use client";

import { useState } from "react";

export default function Search({ news }) {
  const [searchWord, setSearchWord] = useState("");

  const filteredNews = news.filter(
    (article) =>
      searchWord != "" &&
      article.title.toLowerCase().includes(searchWord.toLowerCase())
  );

  return (
    <div>
      <input onChange={(e) => setSearchWord(e.target.value)} />
      <ul>
        {filteredNews.map((article) => (
          <li>
            <h2>{article.title}</h2>
            <img src={article.image_url} />
          </li>
        ))}
      </ul>
    </div>
  );
}
