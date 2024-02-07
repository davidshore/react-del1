import { useSelector } from "react-redux";

export default function Profile() {
  const state = useSelector((state) => state.login);

  return (
    <div>
      <h1>Profile</h1>
      <p>Username: {state.username}</p>
      {state.loggedIn ? <p>Du är inloggad</p> : <p>Du är inte inloggad</p>}
    </div>
  );
}
