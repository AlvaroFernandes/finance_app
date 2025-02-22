import bcrypt from "bcryptjs";


export const saltAndHashPassword = async (pass: string) => {
    const salt = await bcrypt.genSalt(10);

    const hashPassword = await bcrypt.hash(pass, salt)

    return hashPassword
}