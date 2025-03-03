"use server";

import { prisma } from "@/prisma/prisma";
import bcrypt from "bcryptjs";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

interface SignInDataValues {
    email: string;
    password: string;
}

export const SignInAction = async (data: SignInDataValues) => {
    const { email, password } = data;

    try {
        const user = await prisma.user.findFirst({
            where: { email },
        });

        if (!user || !user.password) {
            console.error("User not found or password is missing");
            return { error: "User not found" };
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            console.error("Invalid credentials");
            return { error: "Invalid credentials" };
        }

        await signIn("credentials", {
            email: user.email,
            password,
            redirectTo: "/dashboard",
        });

        return { success: "User logged in successfully" };
    } catch (error) {
        if (error instanceof AuthError) {
            console.error("Authentication error:", error);
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials" };
                default:
                    return { error: "Please confirm your email address" };
            }
        } else {
            console.error("Unexpected error during sign in:", error);
            throw new Error("An unexpected error occurred during sign in");
        }
    }
};