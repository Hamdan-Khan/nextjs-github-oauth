"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const GithubSignOutButton = () => {
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/signout`);
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <Button variant="destructive" onClick={handleSignOut}>
      Sign Out
    </Button>
  );
};

export default GithubSignOutButton;
