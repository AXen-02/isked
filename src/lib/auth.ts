import { NextAuthOptions, getServerSession } from "next-auth";
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import { db } from "./db";
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github";
import EmailProvider from 'next-auth/providers/email'
import {nanoid} from 'nanoid'
import { sendVerificationRequest } from "@/hooks/use-send-verification-request";
import { ThemeProvider } from "@/components/Providers";
import { useTheme } from "next-themes";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    session: {
        strategy:'jwt'
    },
    pages:{
        signIn: '/sign-in'
    },
    providers: [
        GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
        GitHubProvider({
        clientId: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!
    }),
        EmailProvider({
        server: {
          host: process.env.EMAIL_SERVER_HOST,
          port: process.env.EMAIL_SERVER_PORT,
          auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD,
          },
        },
        from: process.env.EMAIL_FROM,
      }),],
    callbacks: {
        async session({token, session}) {
            if(token){
                session.user.id = token.id
                session.user.name = token.name
                session.user.email = token.email
                session.user.image = token.picture
                session.user.username = token.username
            }
            return session
        },
        async jwt ({token, user}) {

            const dbUser = await db.user.findFirst({
                where: {
                    email: token.email,
                }
            })

            if(!dbUser) {
                token.id = user!.id
                return token
            }

            if(!dbUser.username) {
                await db.user.update({
                    where: {
                        id: dbUser.id,
                    },
                    data: {
                        username: nanoid(10)
                    }
                })
            }

            return {
                id: dbUser.id,
                name: dbUser.name,
                email: dbUser.email,
                picture: dbUser.image,
                username: dbUser.username,
            }
        },
        // TODO:
    // async signIn({ user, account, email }) {
    //     // TODO: For Testing purposes only
    //     console.log('// ------ Params passed when signed in ------ //');
    //     console.log(`user: ${JSON.stringify(user, null, 4)}`);
    //     console.log(`account: ${JSON.stringify(account, null, 4)}`);
    //     console.log(`email: ${JSON.stringify(email, null, 4)}`);
    //     console.log('// ------------------------------------------ //');
        

    //     await db.$connect()

    //     const userExists = await db.user.findFirst({
    //         where: {
    //             email: user.email, //the user object has an email property, which contains the email the user entered.
    //         }
    //     })

    //     if (userExists) {
    //         console.log(`Found ${email}`);

    //         const dbUser = await db.user.findFirst({
    //             where: {
    //                 email: user.email,
    //             }
    //         })

    //         console.log( `${JSON.stringify(dbUser, null, 4)}`);
            
    //         // TODO: Put notification, the email entered is already used in <insert provider here>.
    //         return "/sign-in";   //if the email exists in the User collection, email them a magic login link
    //     } else {
    //         console.log('Not found');

    //         return '/'
    //     }
    // },
        redirect () {
            return '/'
        }
    },
}


export const getAuthSession = () => getServerSession(authOptions)