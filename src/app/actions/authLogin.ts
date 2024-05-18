import { endPointToUsers } from "@/utils/endpoints";
import { FormLoginState, LoginFormSchema } from "../lib/definitions";
import { createSession } from "../lib/session";
import { redirect } from "next/navigation";

async function getUserForValidation(emailUser: string) {

    const filterEndPoint = (emailUser: string) => {
        const url = new URL(endPointToUsers);
        url.searchParams.append('email', emailUser);
        return url.toString();  // Retorna a URL como string
    };

    try {
        const response = await fetch(filterEndPoint(emailUser), {  // Correção na chamada de fetch
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
            throw new Error('Usuário não existe');
        }

        return await response.json();

    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;  // Re-throw para tratamento na UI
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

    const userValidaded = await getUserForValidation(validatedFieldsForLogin.data.email)

    await createSession(userValidaded[0].id);

    redirect('/');


5
}


