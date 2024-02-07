import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../store";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Link href="/">Login</Link>
      <Link href="/profile">Profile</Link>
      <Component {...pageProps} />
    </Provider>
  );
}
