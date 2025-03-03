"use server";

import {signIn} from "@/auth"
import { AuthError } from "next-auth";

export async function googleAuthenticate () {
    try {
        await signIn("google")
    } catch (error) {
        if(error instanceof AuthError){
            console.error("Google sign in failed", error)
            return "Google sign in failed"
        }else{
             console.error("Unexpected error during Google sign in:", error);
            throw new Error("An unexpected error occurred during Google sign in");
        }
    }
}