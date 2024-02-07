import "@/styles/globals.css";
import { CountProvider } from "./countContext";

export default function App({ Component, pageProps }) {
  return (
    <CountProvider>
      <h1>hej</h1>
      <Component {...pageProps} />
    </CountProvider>
  );
}
