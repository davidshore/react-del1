import { useContext } from "react";
import { ColorContext } from "./colorContext";

export default function ColorDisplay() {
  const { state } = useContext(ColorContext);
  const { color } = state;

  return (
    <div>
      <p>{color}</p>
    </div>
  );
}
