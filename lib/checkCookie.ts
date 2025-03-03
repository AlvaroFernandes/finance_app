"use server"

import { cookies } from "next/headers"

export const sessionCookie = async() =>{
    const cookieStore = await cookies();

    const sessionCookie = cookieStore.get("authjs.session-token");

    
    return sessionCookie
}