import { useState } from "react";

export default function Post() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/api/greet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    })
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }

  return (
    <div>
      <h1>Next.js POST Request Example</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit">Greet Me</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
