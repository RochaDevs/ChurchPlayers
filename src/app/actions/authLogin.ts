import { endPointToUsers } from "@/utils/endpoints";
import { FormLoginState, LoginFormSchema } from "../lib/definitions";

async function getUserForValidation() {
    try {
        const response = await fetch(endPointToUsers, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
            throw new Error('Failed to get user');
        }

        return await response.json();

    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;  // Re-throw to handle it or show it in the UI
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

    const todosOsUsuarios = await getUserForValidation()

}


