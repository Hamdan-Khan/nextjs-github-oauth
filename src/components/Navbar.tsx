import Link from "next/link";
import { Github } from "lucide-react";
import GithubSignInButton from "./GithubLoginButton";

const Navbar = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <Github className="h-6 w-6 mr-2" />
        <span className="font-bold">Next.js GitHub OAuth Template</span>
      </Link>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#features"
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#get-started"
        >
          Get Started
        </Link>
        <GithubSignInButton />
      </nav>
    </header>
  );
};

export default Navbar;
