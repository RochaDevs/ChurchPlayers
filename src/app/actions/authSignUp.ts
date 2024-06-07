'use server';

import { SignupFormSchema, FormSignUpState } from '@/app/lib/definitions';
import { createSession } from '../lib/session';
import { PrismaClient } from '@prisma/client';
import { redirect } from 'next/navigation';

const prisma = new PrismaClient();

export async function signup(state: FormSignUpState, formData: FormData) {

  // Validate form fields
  const validatedFieldsForSignUp = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  // If any form fields are invalid, return early with errors
  if (!validatedFieldsForSignUp.success) {
    return {
      errors: validatedFieldsForSignUp.error.flatten().fieldErrors,
    };
  }

  // Check if the email already exists

  const existingUser = await prisma.user.findUnique({
    where: {
      email: validatedFieldsForSignUp.data.email
    }
  })


  if (existingUser) {
    return {erroEmailJaEmUso: 'E-mail já está em uso'}
  }

  // Prepare the data to send to the API
  const userData = {
    name: validatedFieldsForSignUp.data.name,
    email: validatedFieldsForSignUp.data.email,
    password: validatedFieldsForSignUp.data.password,
  };

  // 3. Insert the user into the database or call an Library API
  try {

    const user = await prisma.user.create({
      data: userData
    })

    await createSession(user.id.toString(), user.function);

  } catch (error) {
    return {erroAoCriarUsuario: 'Algo deu errado ao registrar seus dados. Tente novamente mais tarde.'}
  }

  // Redirect user
  redirect('/');

}
