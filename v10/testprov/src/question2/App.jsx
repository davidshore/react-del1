// 2. Hämta och visa användare. 3p
// Ladda ner användare med fetch från denna url: https://jsonplaceholder.typicode.com/users
// Föjlande information från varje användare ska visas i en tablell på sidan:
// name, email, city och company name.
// För att skapa tabellen går det bra att använda table eller vanliga div-ar

import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    setUsers(data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <table>
        <tr>
          <th>User</th>
          <th>Email</th>
          <th>City</th>
          <th>Company name</th>
        </tr>
        {users.map((user) => {
          return (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td>{user.company.name}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
