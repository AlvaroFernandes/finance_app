"use server";

import {prisma} from "@/prisma/prisma"
import bcrypt from "bcryptjs";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

interface SignInDataValues {
    email: string;
    password: string;
}

export const SignInAction = async (data: SignInDataValues)  => {
    console.log(data);

    const {email, password} = data;

    const userExists = await prisma.user.findFirst({
        where:{
            email: email,
        }
    })

    if(!userExists || !userExists.password || !userExists.email){ return "User not found"};


    const passwordMatch = await bcrypt.compare(password, userExists.password);

    if(!passwordMatch) return "Invalid Credentials."

    try {
       await signIn("credentials", {
        email: userExists.email,
        password: password,
        redirectTo: "/dashboard"
       })

    } catch (error) {
        if(error instanceof AuthError){
            switch(error.type){
                case "CredentialsSignin":
                    return { error: "Invalid credentials"}
                default:
                    return {error: 'Please confirm your email address'}
                
            }
        }
    throw error
    }
    return {success: "user login successfully"}
}