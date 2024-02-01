import { useContext } from "react";
import { CountContext } from "./countContext";

export default function CountChild() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <h2>Child</h2>
      {count}
      <button onClick={() => setCount(count + 1)}>Click </button>
    </div>
  );
}
