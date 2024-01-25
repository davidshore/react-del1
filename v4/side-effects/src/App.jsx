import { useEffect, useState } from "react";
import Search from "./Search";
import List from "./List";
import "./App.css";
import InputWithLabel from "./InputWithLabel";
import Item from "./Item";

const initialStories = [
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

function useStorageState(key, initialState) {
  const [value, setValue] = useState(localStorage.getItem(key) || initialState);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
}

function getAsyncStories() {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: { stories: initialStories } }), 2000)
  );
}

function App() {
  const [searchTerm, setSearchTerm] = useStorageState("search", "React");

  const [stories, setStories] = useState([]);

  function handleRemoveStory(objectID) {
    const newStories = stories.filter((story) => objectID !== story.objectID);
    setStories(newStories);
  }

  useEffect(() => {
    getAsyncStories().then((result) => {
      setStories(result.data.stories);
    });
  }, []);

  function handleSearchTerm(e) {
    setSearchTerm(e.target.value);
  }

  const filteredList = stories.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      searchTerm != ""
    );
  });

  return (
    <div>
      {/* <Search onSearch={handleSearchTerm} searchTerm={searchTerm} /> */}

      <InputWithLabel
        value={searchTerm}
        placeholder="Search here"
        id="search"
        onInputChange={handleSearchTerm}
        type="text"
      >
        Search:
      </InputWithLabel>

      <hr />
      <List onRemoveItem={handleRemoveStory} list={filteredList} />
    </div>
  );
}

export default App;
