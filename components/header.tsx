import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <div className="flex justify-between items-center px-10 border-b h-15">
      <h1>
        <Link href="/">Home</Link>
      </h1>
      <ModeToggle />
    </div>
  );
}
