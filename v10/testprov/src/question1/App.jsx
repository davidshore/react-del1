// 1. Uppdatera person-info. 3p
//
// Visa informationen i objektet person på sidan nedan.
// Brevid varje bit information ska det finnas en edit-knapp.
//
// När man klickar på edit-knappen ska man kunna uppdatera och spara
// informationen genom att den läggs i ett input-fält samtidigt som
// edit-knappen blir en spara-knapp.
//
// När man klickar på spara ska inputfältet bytas tillbaka till en
// vanlig div med den nya informationen.

import { useState } from "react";

const person = {
  firstName: "Fred",
  lastName: "Smith",
};

function App() {
  const [firstName, setFirstName] = useState(person.firstName);
  const [lastName, setLastName] = useState(person.lastName);

  const [editingFirstName, setEditingFirstName] = useState(false);

  return (
    <div>
      <label>First Name</label>
      {editingFirstName ? (
        <div>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <button onClick={() => setEditingFirstName(false)}>Save</button>
        </div>
      ) : (
        <div>
          <div>{firstName}</div>
          <button onClick={() => setEditingFirstName(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default App;
