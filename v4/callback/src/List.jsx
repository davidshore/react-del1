export default function List(props) {
  const list = props.list;

  return (
    <ul>
      {list.map((item) => {
        return <li key={item.objectID}>{item.title}</li>;
      })}
    </ul>
  );
}
