"use client";

import MyComponent from "../components/mycomponent";
import { useState } from "react";

export default function MyPage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Welcome to my page</h2>
      <MyComponent />
      <button onClick={() => setCount(count + 1)}>öka</button>
      {count}
    </div>
  );
}
