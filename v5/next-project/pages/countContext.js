import { createContext } from "react";
import { useState } from "react";
export const CountContext = createContext();

export function CountProvider({ children }) {
  const [count, setCount] = useState(1);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}
