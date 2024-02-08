import { useState } from "react";
import { useUserStore } from "../store";

export default function Home() {
  const [username, setUsername] = useState("");

  const login = useUserStore((state) => state.login);
  const logout = useUserStore((state) => state.logout);

  function handleOnChange(e) {
    setUsername(e.target.value);
  }

  function handleLogin() {
    login(username);
    setUsername("");
  }

  function handleLogout() {
    logout();
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
