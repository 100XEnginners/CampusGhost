import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "../utils/auth";
import SignoutButton from "./LogoutButton";

export async function Navbar() {
  const session = await getServerSession(authOptions);
  return (
    <header>
      <nav className="max-w-7xl mx-auto flex flex-row justify-between items-center m-6">
        <div className="left-nav">
          <Link href="/">
            <div className="text-xl font-semibold">Campus Ghost</div>
          </Link>
        </div>
        <div className="right-nav">
          {session ? (
            <div className="flex flex-row items-center gap-4">
              <h1 className="text-lg font-medium">Account</h1>
              <SignoutButton />
            </div>
          ) : (
            <Button asChild className="text-lg font-medium">
              <Link href="/auth">SignIn</Link>
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}
