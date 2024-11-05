import Image from "next/image";
import { SessionManager } from "./api/session";
import GithubLoginButton from "@/components/GithubLoginButton";

export default async function Home() {
  const session = await SessionManager.getSession();

  return (
    <div>
      {session ? (
        <div className="text-white">
          <h1>Welcome, {session.name}!</h1>
          <Image
            src={session.avatar_url}
            alt={session.name}
            width={100}
            height={100}
            className="rounded-[50%] overflow-hidden"
          />
          <p>GitHub Username: {session.login}</p>
          <p>GitHub Email: {session.email}</p>
        </div>
      ) : (
        <GithubLoginButton />
      )}
    </div>
  );
}
