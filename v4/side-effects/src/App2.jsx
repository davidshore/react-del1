import { useEffect, useState } from "react";

export default function App2() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await result.json();
    setUsers(data);
  }

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((result) => result.json())
    //   .then((data) => {
    //     console.log(data);

    //     setUsers(data);
    //   });

    getUsers();
  }, []);

  return (
    <div>
      {users.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
}
