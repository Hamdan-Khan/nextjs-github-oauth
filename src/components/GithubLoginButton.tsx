"use client";
const GithubSignInButton = () => {
  const handleGitHubSignIn = async () => {
    const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
    const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback/github`;

    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`;
  };
  return <button onClick={handleGitHubSignIn}>Sign in with GitHub</button>;
};

export default GithubSignInButton;
