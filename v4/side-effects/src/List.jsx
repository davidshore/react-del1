import Item from "./Item";

// title: "React",
//     url: "https://reactjs.org/",
//     author: "Jordan Walke",
//     num_comments: 3,
//     points: 4,

//     objectID: 0,

export default function List(props) {
  const list = props.list;

  return (
    <ul>
      {list.map(({ objectID, ...item }) => {
        return <Item key={objectID} {...item} />;
      })}
    </ul>
  );
}
