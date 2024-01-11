// import "./App.css";
import Search from "./Search";
import List from "./List";
import Button from "./Button";
import ButtonWithTitle from "./ButtonWithTitle";
import Badge from "./Badge";

function App() {
  const stories = [
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

  return (
    <div>
      <h1>Hacker stories</h1>

      <Search />
      <List list={stories} />

      <Button color="red">Click Red button</Button>
      <Button color="blue">Click</Button>

      <ButtonWithTitle title={"hej"} />
      <Badge title={"Alert"} color={"red"} />
      <Badge title={"Saved"} color={"green"} />
    </div>
  );
}

export default App;
