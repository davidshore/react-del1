import { login, logout } from "@/redux/login";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");

  function handleOnChange(e) {
    setUsername(e.target.value);
  }

  function handleLogin() {
    dispatch(login({ username }));
    setUsername("");
  }

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <main>
      <h1>Login</h1>
      <input value={username} type="text" onChange={handleOnChange} />
      <button onClick={handleLogin}>Log in</button>
      <button onClick={handleLogout}>Log out</button>
    </main>
  );
}
