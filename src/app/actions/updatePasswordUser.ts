'use server';
import {PasswordFormSchema, PasswordState } from '@/app/lib/definitions';
import { PrismaClient } from "@prisma/client";
import { compareBcryptPassword } from '@/utils/comparebcrypt';
import { bCryptPassword } from '@/utils/dobcrypt';
import { getUserInfo } from './getUserInfo';

const prisma = new PrismaClient();

export async function updatePasswordUser(state: PasswordState, formData: FormData) {

    const userID = (await getUserInfo()).id;

    const currentPassword = formData.get('password') as string;

    if (!currentPassword) {
        return {error: 'Campo vazio'}
    }

    const validatedFieldForPassword = PasswordFormSchema.safeParse({
        password: formData.get('newPassword')
    });

    if (!validatedFieldForPassword.success) {
        return {
            errors: validatedFieldForPassword.error.flatten().fieldErrors,
        };
    }

    try {
        const userPassword = await prisma.user.findFirst({
            where: { id: userID },
            select: { password: true }
        });

        if (!userPassword || !userPassword.password) {
            throw new Error('Usuário não encontrado ou senha não encontrada');
        }

        const isPasswordValid = await compareBcryptPassword(currentPassword, userPassword.password);

        if (isPasswordValid) {
            const newPasswordCrypt = await bCryptPassword(validatedFieldForPassword.data.password);

            const updatePassword = await prisma.user.update({
                where: { id: userID },
                data: { password: newPasswordCrypt }
            });


            return { success: true, updatePassword };
        } else {
            return {error: 'Senha inválida'}
        }
    } catch (error) {
        console.error('Erro ao atualizar a senha:');
        throw new Error('Erro ao atualizar a senha');
    }
}
