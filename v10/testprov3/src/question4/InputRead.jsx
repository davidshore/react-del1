import { useSelector } from "react-redux";

function InputRead() {
  const value = useSelector((state) => state.input.value);
  // const { value } =  useSelector((state) => state.input)

  return (
    <div>
      <h2>Parent component</h2>
      <div>{value}</div>
    </div>
  );
}

export default InputRead;
