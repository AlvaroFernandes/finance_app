
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import AppleProvider from "next-auth/providers/apple"
import CredentialsProvider from "next-auth/providers/credentials"
import {PrismaClient} from "@prisma/client"
import {PrismaAdapter } from "@auth/prisma-adapter"

import bcrypt from "bcryptjs"

const prisma = new PrismaClient();

const handler = NextAuth({
    adapter:PrismaAdapter(prisma),
    providers:[
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "you@example.com" },
                 password: { label: "Password", type: "password" },
            },
            async authorize(credentials){
                  // Ensure credentials exist and have the expected string values.
                if (
                    !credentials ||
                    typeof credentials.email !== "string" ||
                    typeof credentials.password !== "string"
                ) {
                    throw new Error("Invalid credentials");
                }

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                });

                if (!user) {
                    throw new Error("No user found with this email");
                }

                // Ensure user.password is a string.
                if (typeof user.password !== "string") {
                    throw new Error("User password is not set correctly");
                }

                const isValid = await bcrypt.compare(credentials.password, user.password);

                if (!isValid) {
                    throw new Error("Invalid credentials");
                }

                return user;
            }
        }),
        GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        AppleProvider({
        clientId: process.env.APPLE_CLIENT_ID!,
        clientSecret: process.env.APPLE_CLIENT_SECRET!,
        }),

    ],
    session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export {handler as GET, handler as POST}