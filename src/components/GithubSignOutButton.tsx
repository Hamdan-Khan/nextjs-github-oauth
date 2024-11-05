"use client";

import { useRouter } from "next/navigation";

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

  return <button onClick={handleSignOut}>Sign Out</button>;
};

export default GithubSignOutButton;
