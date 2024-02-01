import "@/styles/globals.css";
import { CountProvider } from "./countContext";

export default function App({ Component, pageProps }) {
  return (
    <CountProvider>
      <Component {...pageProps} />
    </CountProvider>
  );
}
