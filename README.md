## Next.js Github OAuth Template

Created this customizable template for implementing GitHub OAuth authentication in Next.js. Just to avoid the complexity of next-auth

- Next.js v15 + TypeScript
- Direct GitHub OAuth implementation
- Custom Session Management

## Installation

1. Clone the repo

2. Install the modules

```bash
pnpm install
```

3. Set the environment variables in the .env file

### Setting Up GitHub OAuth

1. Go to GitHub Developer Settings > OAuth Apps > New OAuth App

2. Fill in the application details:

   - Application name: Your app name
   - Homepage URL: http://localhost:3000
   - Authorization callback URL: http://localhost:3000/api/auth/callback/github

3. Copy the generated Client ID and Client Secret to your .env.local file

Contributions are welcome!
