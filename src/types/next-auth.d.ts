import NextAuth from "next-auth"

interface SignResponse {
  refreshToken: string;
  accessToken: string;
  user: user;
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
   */
  interface Session {
    user: SignResponse;
  }
}

