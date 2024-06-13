'use server';
import { SignupFormSchema, FormSignUpState, LoginFormSchema } from '@/app/lib/definitions';
import { PrismaClient } from "@prisma/client";
import { compareBcryptPassword } from '@/utils/comparebcrypt';
import { bCryptPassword } from '@/utils/dobcrypt';
import { getUserInfo } from './getUserInfo';

const prisma = new PrismaClient()

export async function updatePasswordUser (state: FormSignUpState, formData: FormData ) {

    const userID = (await getUserInfo()).id;

    const currentPassword = formData.get('password') as string
    if (!currentPassword) {
        throw new Error('Senha atual não fornecida');
    }
    
    const validatedFieldForPassword = LoginFormSchema.safeParse({
        password: formData.get('newPassword')
    })
    if (!validatedFieldForPassword.success) {
        return {
            errors: validatedFieldForPassword.error.flatten().fieldErrors,
        };
    };


    try {
        const userPassword = await prisma.user.findFirst({
            where: {
                id: userID
            },
            select: {
                password: true
            }
        })

        if(!userPassword) {
            throw new Error('Usuário não encontrado');
        }

        const isPasswordValid = await compareBcryptPassword(currentPassword, userPassword?.password)

        if(isPasswordValid) {
            const newPasswordCrypt = await bCryptPassword(validatedFieldForPassword.data.password)

            const updatePassword = await prisma.user.update({
                where: {id: userID},
                data: {password: newPasswordCrypt}
            })

            return {sucess: true, updatePassword}
        }


    } catch (error) {
        throw new Error ('Usuário não encontrado')
    }

}