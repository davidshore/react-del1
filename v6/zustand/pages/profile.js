import { useUserStore } from "../store";

export default function Profile() {
  const username = useUserStore((state) => state.username);
  const loggedIn = useUserStore((state) => state.loggedIn);

  return (
    <div>
      <h1>Profile</h1>
      <p>Username: {username}</p>
      {loggedIn ? <p>Du är inloggad</p> : <p>Du är inte inloggad</p>}
    </div>
  );
}
