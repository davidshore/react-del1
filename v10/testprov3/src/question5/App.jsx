// 5. Responsive Users 3p
// Ladda ner users från denna url: https://jsonplaceholder.typicode.com/users
// För varje user ska name, email och city visas i en div och placeras under varandra.
// I desktop-vy ska divarna för varje user visas i 3 kolumner.
// I mobil-vy ska divarna för varje user visas i en kolumn med 100% width.

import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div className="grid md:grid-cols-3 place-items-center gap-2">
      {users &&
        users.map((user) => {
          return (
            <div className="flex flex-col border-2 w-full md:max-w-xs border-black rounded-lg gap-6 text-center p-4">
              <div>{user.name}</div>
              <div>{user.email}</div>
              <div>{user.address.city}</div>
            </div>
          );
        })}
    </div>
  );
}

export default App;
// 3p
