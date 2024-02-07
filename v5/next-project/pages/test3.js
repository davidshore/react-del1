import MyComponent from "@/components/myComponent";
import Link from "next/link";

export default function Test() {
  return (
    <div>
      test3
      <Link href={"/"}>Home</Link>
      <MyComponent />
    </div>
  );
}
