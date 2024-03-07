import { useDispatch, useSelector } from "react-redux";
import { increment } from "./counterSlice";
import LessButton from "./LessButton";

export default function ReduxApp() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>Siffra: {count}</div>
      <button onClick={() => dispatch(increment())}>Öka</button>

      <LessButton />
    </div>
  );
}
