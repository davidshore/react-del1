import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");

  function handleChange(event) {
    console.log(event);

    // value of target (here: input HTML element)
    console.log(event.target.value);
    setSearch(event.target.value);
  }

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />

      <p>Searching for: {search}</p>
    </div>
  );
}
