'use server';

import { UpdateUserFormSchema, UpdateUserFormState } from "../lib/definitions";
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

export async function updateUser(state: UpdateUserFormState, formData: FormData ) {

    //Validate form fields
    const validatedFieldsFormUpdateUser = UpdateUserFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        nickname: formData.get('nickname'),
        birthDate: formData.get('birthDate'),
        gender: formData.get('gender'),
        country: formData.get('country'),
        maritalStatus: formData.get('maritalStatus'),
        christianDenom: formData.get('christianDenom'),
    })

    //If any form field are invalid, return early with erros
    if(!validatedFieldsFormUpdateUser.success) {
        return {
            errors: validatedFieldsFormUpdateUser.error.flatten().fieldErrors
        }
    }

    //Prepare the data to send to the API
    const updatedDatas = {
        name: validatedFieldsFormUpdateUser.data.name,
        email: validatedFieldsFormUpdateUser.data.email,
        nickname: validatedFieldsFormUpdateUser.data.nickname,
        birthDate: validatedFieldsFormUpdateUser.data.birthDate,
        gender: validatedFieldsFormUpdateUser.data.gender,
        country: validatedFieldsFormUpdateUser.data.country,
        maritalStatus: validatedFieldsFormUpdateUser.data.maritalStatus,
        christianDenom: validatedFieldsFormUpdateUser.data.christianDenom
    };

    // Insert the user into the database or call an Library API

    try {
        const updateUser = await prisma.user.update({
            
        })
    } catch (error) {
        
    }


}