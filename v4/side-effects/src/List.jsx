import Item from "./Item";

// title: "React",
//     url: "https://reactjs.org/",
//     author: "Jordan Walke",
//     num_comments: 3,
//     points: 4,

//     objectID: 0,

export default function List(props) {
  const list = props.list;
  const onRemoveItem = props.onRemoveItem;

  return (
    <ul>
      {list.map((item) => {
        return (
          <Item onRemoveItem={onRemoveItem} key={item.objectID} {...item} />
        );
      })}
    </ul>
  );
}
