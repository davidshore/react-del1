import { useEffect, useState } from "react";

// CSR = Client Side Rendering
export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // fetch("/api/hej")
    //   .then((res) => res.json())
    //   .then((data) => setMessage(data.name));

    // Hämta från nyhets-api
    fetch(
      "https://newsapi.org/v2/everything?apiKey=2a19d6e86e134101a8e2cf04114eee2d&q=Apple"
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <main>Your message: hej {message}</main>;
}
