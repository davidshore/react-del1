import ChildComponent from "./ChildComponent";
import { useState } from "react";

export default function ParentComponent() {
  const [color, setColor] = useState("");

  function handleColor(color) {
    setColor(color);
  }

  return (
    <div>
      <p>{color}</p>
      <ChildComponent handleColor={handleColor} />
    </div>
  );
}
