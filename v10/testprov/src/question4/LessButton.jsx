import { useDispatch } from "react-redux";
import { decrement } from "./counterSlice";

export default function LessButton() {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(decrement())}>Minska</button>;
}
