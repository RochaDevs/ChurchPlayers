'use server';

import { EmailFormSchema, EmailState } from '@/app/lib/definitions';
import { PrismaClient } from "@prisma/client";
import { compareBcryptPassword } from '@/utils/comparebcrypt';
import { getUserInfo } from './getUserInfo';

const prisma = new PrismaClient();

export async function updateEmailUser(state: EmailState, formData: FormData) {

    const userID = (await getUserInfo()).id;

    try {

        //Validando senha atual:
        const currentPassword = formData.get('password') as string;
        if (!currentPassword) {
            return { error: 'Campo vazio' }
        }
        const userHashPassword = await prisma.user.findFirst({
            where: { id: userID },
            select: { password: true }
        });

        if (!userHashPassword) {
            return { erros: 'Usuário não encontrado ou senha não encontrada' };
        }

        const isPasswordValid = await compareBcryptPassword(currentPassword, userHashPassword.password);

        if (!isPasswordValid) {
            return { error: 'Senha inválida' }
        }

        //Validação do novo e-mail
        const newEmail = formData.get('newEmail');
        const validatedFieldForNewEmail = EmailFormSchema.safeParse({
            email: newEmail
        });

        if (!validatedFieldForNewEmail.success) {
            return {
                errors: validatedFieldForNewEmail.error.flatten().fieldErrors,
            };
        }

        //Verificar se o novo e-mail já existe no banco de dados
        const existingUser = await prisma.user.findUnique({
            where: { email: validatedFieldForNewEmail.data.email }
        });

        if (!existingUser) {
            // Atualizar o e-mail no banco de dados
            await prisma.user.update({
                where: { id: userID },
                data: { email: validatedFieldForNewEmail.data.email }
            });
            return { success: true, messageSucess: 'E-mail atualizado com sucesso!' };
        } else {
            console.log("Erro: E-mail já está em uso por outro usuário.");
            return { error: 'E-mail já está em uso por outro usuário' };
        }


    } catch (error) {
        throw new Error('Erro ao processar a solicitação de atualização de e-mail');
    }

}
