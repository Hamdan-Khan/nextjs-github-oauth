import { SessionManager } from "@/app/api/session";

export async function GET() {
  await SessionManager.clearSession();
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/",
    },
  });
}
