// 1. Lista med useState (3p)
// Skapa en komponent som visar en lista med hobbies.
// Användaren ska kunna lägga till en ny hobby via ett
// inputfält och en "Lägg till"-knapp. Varje hobby i listan
// ska ha en "Ta bort"-knapp som tar bort hobbyn från listan.
// Använd useState för att hantera listan.

import { useState } from "react";

let count = 1;

function App() {
  const [hobbies, setHobbies] = useState([]);
  const [input, setInput] = useState("");

  function handleAdd() {
    const hobby = {
      id: count++,
      text: input,
    };

    setHobbies([...hobbies, hobby]);
  }

  function handleRemove(id) {
    const filteredHobbies = hobbies.filter((hobby) => hobby.id != id);

    setHobbies(filteredHobbies);
  }

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAdd}>Add hobby</button>

      <h2>My hobbies</h2>
      <ul>
        {hobbies.map((hobby) => {
          return (
            <li key={hobby.id}>
              {hobby.text}{" "}
              <button onClick={() => handleRemove(hobby.id)}>Remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
