export default function Button({ color, title }) {
  const colors = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    yellow: "bg-yellow-500",
    purple: "bg-purple-500",
    gray: "bg-gray-500",
  };

  return <button className={`${colors[color]}`}>{title}</button>;
}
