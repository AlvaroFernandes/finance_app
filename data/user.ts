import{prisma} from "@/prisma/prisma"

export const getUserById = async (id: string) => {
    try{
        const user = prisma.user.findFirst({
            where: {
                id: id,
            }
        })
        return user;
    }catch(error){
        console.log(error)
        return null
    }

}