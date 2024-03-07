// 3. Öka eller minska en siffra. 3p
// En siffra ska visas på sidan och siffran ska vara kopplad till useState.
// Skapa en komponent: LessButton som via en callback-funktion minskar siffrans
// värde med ett när man klickar på en knapp i komponenten.
// Skapa en button i App.jsx som ökar siffrans värde med ett.
import { useState } from "react";

function LessButton({ setCount }) {
  return <button onClick={() => setCount((count) => count - 1)}>Less</button>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}

      <button onClick={() => setCount(count + 1)}>More</button>

      <LessButton setCount={setCount} />
    </div>
  );
}

export default App;
