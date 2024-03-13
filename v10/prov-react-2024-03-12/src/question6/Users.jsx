import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./usersSlice";

export default function Users() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.list);

  function handleAdd() {
    dispatch(addUser(input));
  }

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAdd}>Add User</button>

      <h2>Users</h2>
      {users.map((user, index) => (
        <div key={index}>{user}</div>
      ))}
    </div>
  );
}
