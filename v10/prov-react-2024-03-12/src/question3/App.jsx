// 3. Custom Hook för counter (3p)
// Skapa en custom hook, useCounter, som hanterar en räknare.
// Denna hook ska tillhandahålla två funktioner: en för att öka
// räknarens värde och en för att minska den. Skriv kod i App-komponenten
// nedanför som använder din custom hook och visar räknarens värde
// samt två knappar för att öka och minska värdet.

import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  function decrease() {
    setCount(count - 1);
  }

  function increase() {
    setCount(count + 1);
  }

  return { count, increase, decrease };
}

function App() {
  const { count, increase, decrease } = useCounter();

  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  );
}

export default App;
