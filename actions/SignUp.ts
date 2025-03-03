"use server";

import { prisma } from "@/prisma/prisma";
import bcrypt from "bcryptjs";

interface SignUpDataValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignUpAction = async (data: SignUpDataValues) => {
  const { name, email, password, confirmPassword } = data;

  if (password !== confirmPassword) {
    console.error("Passwords do not match");
    return { error: "Passwords do not match" };
  }

  try {
    const lowerCaseEmail = email.toLowerCase();

    const userExists = await prisma.user.findFirst({
      where: { email: lowerCaseEmail },
    });

    if (userExists) {
      console.error("Email already in use");
      return { error: "Email already in use" };
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email: lowerCaseEmail,
        password: hashPassword,
      },
    });

    return { success: "User created successfully", user };
  } catch (error) {
    console.error("Error during user creation:", error);
    return { error: "An error occurred during user creation" };
  }
};