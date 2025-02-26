"use server"

import {prisma} from "@/prisma/prisma"
import bcrypt from "bcryptjs"


interface SignUpDataValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignUpAction = async (data: SignUpDataValues) =>{
    try{
    const {name, email, password} = data;

        const hashPassword = await bcrypt.hash(password, 10)

        const userExists = await prisma.user.findFirst({
            where: {
                email
            }
        })

        if(userExists) return "Email already in use!";

        const lowerCaseEmail = email.toLowerCase();

        const user = await prisma.user.create({
            data:{
                name,
                email: lowerCaseEmail,
                password: hashPassword
            }
        })

        return {success: "User created successfully.", user}

    }catch(error){
        console.log( error)
        return {error: "An error occurred"}
    }


 }

