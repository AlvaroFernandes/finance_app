import { db } from "@/db/db"

export const  getUserByEmail = async (email: string) => {
    try {
        if(!email) return null

        return await db.user.findUnique({where: {email}})
    } catch (error) {
        return error
    }
}