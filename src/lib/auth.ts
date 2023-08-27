import { NextAuthOptions, getServerSession } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./db";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { nanoid } from "nanoid";
import { RoomType, UserType } from "@prisma/client";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 7, // Set maxAge to 7 days (in seconds)
  },
  pages: {
    signIn: "/sign-in",
    newUser: "/new-user",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.username = token.username;
      }
      return session;
    },

    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      });

      // TODO:
      // const dbAccount = await db.account.findFirst({
      //     where: {
      //         userId: token.id
      //     }
      // })

      if (!dbUser) {
        token.id = user!.id;
        return token;
      }

      if (!dbUser.username) {
        const randUName = nanoid(10);
        const defaultBio = "Hi! I'm new to Isked.";
        const defaultUrls = [
          {
            value: `1isked.vercel.app/${randUName}`,
          },
          {
            value: `2isked.vercel.app/${randUName}`,
          },
          {
            value: `3isked.vercel.app/${randUName}`,
          },
        ];
        await db.user.update({
          where: {
            id: dbUser.id,
          },
          data: {
            // set default data of created fields here
            username: randUName,
            bio: defaultBio,
            roles: [UserType.DEVELOPER, UserType.ADMINISTRATOR],
            urls: defaultUrls,
          },
        });
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
        username: dbUser.username,
      };
    },
    redirect() {
      return "/";
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
