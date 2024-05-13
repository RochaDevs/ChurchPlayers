'use server';

import { SignupFormSchema, FormState } from '@/app/lib/definitions';
import { createSession } from '../lib/session';
import { redirect } from 'next/navigation';

export async function signup(state: FormState, formData: FormData) {

  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  // If any form fields are invalid, return early with errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Prepare the data to send to the API
  const userData = {
    name: validatedFields.data.name,
    email: validatedFields.data.email,
    password: validatedFields.data.password,
  };

  // 3. Insert the user into the database or call an Library API
  try {
    const response = await fetch('https://664150e6a7500fcf1aa015b0.mockapi.io/nextest/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    const user = await response.json();

    console.log(user)

    if (!response.ok) {
      throw new Error(user.message || 'Failed to create user');
    }

    // Create user session
    await createSession(user.id);

    // Redirect user
    redirect('/login');

  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message };
    } else {
      return { error: 'An unknown error occurred' };
    }
  }

}
