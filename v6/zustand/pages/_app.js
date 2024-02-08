import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Link href="/">Login</Link>
      <Link href="/profile">Profile</Link>
      <Component {...pageProps} />
    </>
  );
}
