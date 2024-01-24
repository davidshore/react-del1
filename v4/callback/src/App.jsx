import { useState } from "react";
import Search from "./Search";
import List from "./List";
import "./App.css";

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("hej");

  function handleSearchTerm(e) {
    setSearchTerm(e.target.value);
  }

  const filteredList = list.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      searchTerm != ""
    );
  });

  return (
    <div>
      <Search onSearch={handleSearchTerm} searchTerm={searchTerm} />
      <hr />
      <List list={filteredList} />
    </div>
  );
}

export default App;
