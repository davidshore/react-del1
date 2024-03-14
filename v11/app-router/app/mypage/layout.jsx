import Link from "next/link";

export default function MyPageLayout({ children }) {
  return (
    <div>
      <nav className="flex gap-2">
        <Link href={"/mypage"}>Home</Link>
        <Link href={"/mypage/page2"}>Page2</Link>
      </nav>

      {children}
    </div>
  );
}
