import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import prisma from "@/lib/db";
import { Adapter } from "next-auth/adapters";
import { compare } from "bcryptjs";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt"
  },

  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "email", type: "text", placeholder: "jsmith" },
        password: { label: "password", type: "password" }
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }

        const existingUser = await prisma.users.findUnique({
          where: {
            email: credentials.email
          }
        });

        if (!existingUser) {
          return null;
        }

        const passwordMatch = await compare(
          credentials.password,
          existingUser.password
        );

        if (!passwordMatch) {
          return null;
        }

        return {
          id: existingUser.id + "",
          email: existingUser.email,
          image: existingUser.profile_img,
          firstName: existingUser.first_name,
          lastName: existingUser.last_name
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },
    async session({ session, user, token }) {
      session.user = token.user as any;
      return session;
    }
  }
};
