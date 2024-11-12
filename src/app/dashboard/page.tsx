import Profile from "@/components/dashboard/Profile";
import React from "react";
import { SessionManager } from "../api/session";
import GithubSignInButton from "@/components/GithubLoginButton";

export default async function Dashboard() {
  const session = await SessionManager.getSession();
  if (!session)
    return (
      <div>
        <p>You need to be logged in to access this resource</p>
        <GithubSignInButton />
      </div>
    );

  return (
    <div>
      <Profile session={session} />
    </div>
  );
}
