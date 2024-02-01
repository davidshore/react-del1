import Link from "next/link";
import { useReducer, useState } from "react";

const initialState = {
  username: "",
  email: "",
  loggedIn: false,
  score: 0,
};

function reducer(state, action) {
  if (action.type == "setUsername") {
    return {
      ...state,
      username: action.username,
    };
  } else if (action.type == "setEmail") {
    return {
      ...state,
      email: action.email,
    };
  } else if (action.type == "setLogin") {
    return {
      ...state,
      loggedIn: action.loggedIn,
    };
  } else if (action.type == "setScore") {
    return {
      ...state,
      score: action.score,
    };
  }
}

export default function Home() {
  //const [state, setState] = useState(initialState);

  const [state, dispatch] = useReducer(reducer, initialState);

  function handleUsername(e) {
    // setState({
    //   ...state,
    //   username: e.target.value,
    // });
    const action = {
      type: "setUsername",
      username: e.target.value,
    };

    dispatch(action);
  }

  function handleEmail(e) {
    // setState({
    //   ...state,
    //   email: e.target.value,
    // });

    dispatch({ type: "setEmail", email: e.target.value });
  }

  function handleLogin() {
    // setState({
    //   ...state,
    //   loggedIn: true,
    // });
    dispatch({ type: "setLogin", loggedIn: true });
  }

  function handleScore() {
    // setState({
    //   ...state,
    //   score: state.score + 1,
    // });

    dispatch({ type: "setScore", score: state.score + 1 });
  }

  return (
    <div>
      <Link href={"/test2"}>till test-sida</Link>
      <h1>Update state:</h1>

      <h2>Username</h2>
      <input onChange={handleUsername} type="text" />
      <button onClick={handleLogin}>Log in</button>

      <h2>Email</h2>
      <input onChange={handleEmail} type="text" />

      <h2>Score</h2>
      <button onClick={handleScore}>Click</button>

      <h1>Profile:</h1>
      <h2>Username</h2>
      <p>{state.username}</p>

      <h2>Email</h2>
      <p>{state.email}</p>

      <h2>Logged in?</h2>
      {state.loggedIn ? <p>Yes</p> : <p>No</p>}

      <h2>Score</h2>
      <p>{state.score}</p>
    </div>
  );
}
