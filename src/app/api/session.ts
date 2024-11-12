import { cookies } from "next/headers";

interface GithubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string | null;
  blog: string;
  location: string | null;
  email: string | null;
  hireable: boolean | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export type Session = Pick<
  GithubUser,
  | "name"
  | "email"
  | "avatar_url"
  | "login"
  | "id"
  | "bio"
  | "created_at"
  | "updated_at"
  | "public_repos"
  | "followers"
  | "following"
  | "location" // define the properties you want to expose
>;

export class SessionManager {
  static async getSession(): Promise<Session | null> {
    const githubUserCookie = (await cookies()).get("githubUser");
    if (!githubUserCookie) return null;
    const githubUser = JSON.parse(githubUserCookie.value) as GithubUser;
    return {
      name: githubUser.name,
      email: githubUser.email,
      avatar_url: githubUser.avatar_url,
      login: githubUser.login,
      id: githubUser.id,
      bio: githubUser.bio,
      created_at: githubUser.created_at,
      updated_at: githubUser.updated_at,
      followers: githubUser.followers,
      following: githubUser.following,
      location: githubUser.location,
      public_repos: githubUser.public_repos,
    };
  }

  static async setSession(userData: GithubUser): Promise<void> {
    (await cookies()).set("githubUser", JSON.stringify(userData), {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
    });
  }

  static async clearSession(): Promise<void> {
    (await cookies()).delete("githubUser");
  }
}
