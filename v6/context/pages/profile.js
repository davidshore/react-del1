import { useLogin } from "@/LoginContext";

export default function Profile() {
  const { state } = useLogin();

  return (
    <div>
      <h1>Profile</h1>
      <p>Username: {state.username}</p>
      {state.loggedIn ? <p>Du är inloggad</p> : <p>Du är inte inloggad</p>}
    </div>
  );
}
