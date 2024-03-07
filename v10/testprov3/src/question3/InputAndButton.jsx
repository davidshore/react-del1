import { useState } from "react";

export default function InputAndButton({ setDisplay }) {
  const [input, setInput] = useState("");

  return (
    <div>
      <h2>child component</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-black"
      />
      <button onClick={() => setDisplay(input)}>Enter</button>
    </div>
  );
}
