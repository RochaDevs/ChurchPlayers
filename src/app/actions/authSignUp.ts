'use server';

import { SignupFormSchema, FormSignUpState } from '@/app/lib/definitions';
import { createSession } from '../lib/session';
import { redirect } from 'next/navigation';
import { endPointToUsers } from '@/utils/endpoints';

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

  // Prepare the data to send to the API
  const userData = {
    name: validatedFieldsForSignUp.data.name,
    email: validatedFieldsForSignUp.data.email,
    password: validatedFieldsForSignUp.data.password,
  };

  // 3. Insert the user into the database or call an Library API
  try {
    const response = await fetch(endPointToUsers, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    const user = await response.json();

    // console.log(user)

    if (!response.ok) {
      throw new Error(user.message || 'Failed to create user');
    }

    await createSession(user.id);

  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message };
    } else {
      return { error: 'An unknown error occurred' };
    }
  }

  // Redirect user
  // redirect('/');

}
