import Link from "next/link";
import { Github } from "lucide-react";
import { SessionManager } from "@/app/api/session";
import GithubSignInButton from "../GithubLoginButton";
import GithubSignOutButton from "../GithubSignOutButton";
import NavLinks from "./NavLinks";

const Navbar = async () => {
  const session = await SessionManager.getSession();
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="/">
        <Github className="h-6 w-6 mr-2" />
        <span className="font-bold">Next.js GitHub OAuth Template</span>
      </Link>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        <NavLinks />

        {!session ? (
          <GithubSignInButton />
        ) : (
          <>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="/dashboard"
            >
              Dashboard
            </Link>
            <GithubSignOutButton />
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
