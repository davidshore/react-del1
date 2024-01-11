import "./Button.css";

// const props = {
//   color: "red",
//   children: "Hej",
// };

// const { color, children } = props;

export default function Button({ color, children }) {
  return <button className={color}>{children}</button>;
}
