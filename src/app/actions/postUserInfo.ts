'use server';

import { UpdateUserFormSchema, UpdateUserFormState } from "../lib/definitions";
import { PrismaClient } from "@prisma/client";
import { getUserInfo } from "./getUserInfo";

const prisma = new PrismaClient();

export async function updateUser(state: UpdateUserFormState, formData: FormData) {
    try {
        const userID = (await getUserInfo()).id;
        console.log(`User ID: ${userID}`);

        // Validate form fields
        const validatedFieldsFormUpdateUser = UpdateUserFormSchema.safeParse({
            name: formData.get('name'),
            email: formData.get('email'),
            nickname: formData.get('nickname'),
            gender: formData.get('gender'),
            contry: formData.get('contry'),
            maritalStatus: formData.get('maritalStatus'),
            christianDenom: formData.get('christianDenom'),
        });
        console.log('Validation result:', validatedFieldsFormUpdateUser);

        // If any form field is invalid, return early with errors
        if (!validatedFieldsFormUpdateUser.success) {
            return {
                errors: validatedFieldsFormUpdateUser.error.flatten().fieldErrors
            };
        }

        // Prepare the data to send to the API
        const updatedDatas = {
            name: validatedFieldsFormUpdateUser.data.name,
            email: validatedFieldsFormUpdateUser.data.email,
            nickname: validatedFieldsFormUpdateUser.data.nickname,
            gender: validatedFieldsFormUpdateUser.data.gender,
            contry: validatedFieldsFormUpdateUser.data.contry,
            maritalStatus: validatedFieldsFormUpdateUser.data.maritalStatus,
            christianDenom: validatedFieldsFormUpdateUser.data.christianDenom
        };
        console.log('Updated data:', updatedDatas);

        // Update the user in the database
        const updatedUser = await prisma.user.update({
            where: { id: userID },
            data: updatedDatas
        });
        console.log('User updated successfully:', updatedUser);

        return { success: true, updatedUser };
    } catch (error) {
        console.error('Error updating user:', error);
        return { erroAoAtualizarUsuario: 'Algo deu errado ao atualizar os dados do usuário. Tente novamente mais tarde.' };
    }
}
