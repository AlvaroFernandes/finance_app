import NextAuth from "next-auth";
import {PrismaAdapter} from "@auth/prisma-adapter";

import authConfig from "@/config/auth.config";
import { db } from "@/db/db";

import {getUserByEmail} from "@/actions/user-data"



export const {handlers, signIn, signOut, auth} = NextAuth({
   ...authConfig,
   adapter: PrismaAdapter(db),
   session: {strategy: "jwt"},
   callbacks: {
      async jwt({token}) {
         if(!token.sub) return token;

         const existingUser = await getUserByEmail(token.email as string)

         if(!existingUser) return token;

         token.role = existingUser.role
         token.id = existingUser.id

         return token
      },
      async session ({session,token}: any) {
         if( token.role && session.user){
            session.user.id = token.id;
            session.user.role = token.role;
         }
         
         return session
      }
   },
})


