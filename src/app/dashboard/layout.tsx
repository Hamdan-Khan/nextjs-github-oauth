import GithubLoginButton from "@/components/GithubLoginButton";
import { SessionManager } from "../api/session";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await SessionManager.getSession();

  if (!session)
    return (
      <div>
        <p>You need to be logged in to access this resource</p>
        <GithubLoginButton />
      </div>
    );

  return <div className="container mx-auto p-4">{children}</div>;
}
