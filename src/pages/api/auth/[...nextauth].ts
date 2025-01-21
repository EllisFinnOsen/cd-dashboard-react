import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  // taken from https://youtu.be/g95MmAczBUg?si=f4HQHZf933Xln_EZ&t=198
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          token_endpoint_auth_method: "none",
        },
      },
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
