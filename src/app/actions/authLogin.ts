'use server';

import { FormLoginState, LoginFormSchema } from "../lib/definitions";
import { createSession } from "../lib/session";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function getUserForValidation(emailUser: string, passwordUser: string) {

    try {

        const user = await prisma.user.findFirst({
            where: {
                email: emailUser,
                password: passwordUser
            }
        })

        if (!user) {
            throw new Error('Usuário não encontrado ou senha incorreta')
        }

        return user;

    } catch (error) {

        console.error('Usuário não encontrado ou senha incorreta');
        throw error;

    }

}

export async function login(state: FormLoginState, formData: FormData) {

    //Validade form fields

    const validatedFieldsForLogin = LoginFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password')
    });

    // If any form fields are invalid, return early with errors
    if (!validatedFieldsForLogin.success) {
        return {
            errors: validatedFieldsForLogin.error.flatten().fieldErrors,
        };
    };

    try {
        const userValidaded = await getUserForValidation(validatedFieldsForLogin.data.email, validatedFieldsForLogin.data.password);

        await createSession(userValidaded.id.toString());

        redirect('/');
    } catch (error) {
        return {erroDeAutenticacao: 'Usuário não encontrado ou senha incorreta'}
    }

    
}


