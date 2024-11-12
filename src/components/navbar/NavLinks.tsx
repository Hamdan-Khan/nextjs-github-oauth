"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const path = usePathname();
  if (path == "/") {
    return (
      <>
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
      </>
    );
  } else {
    return <></>;
  }
};

export default NavLinks;
