import "./Badge.css";

export default function Badge({ title, color }) {
  return <div className={color}>{title}</div>;
}
