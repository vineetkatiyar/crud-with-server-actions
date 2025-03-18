import { SearchQuery } from "@/components/search";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-geist">
      <main className="flex flex-col space-y-8 items-center sm:items-start">
        {/* User Details Button */}
        <Button asChild>
          <Link href="/details">User Details</Link>
        </Button>

        {/* Search Component */}
        <SearchQuery />

        {/* Next.js Logo */}
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </main>
    </div>
  );
}
