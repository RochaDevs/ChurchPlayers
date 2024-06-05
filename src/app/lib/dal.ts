'use server';
 
import { cookies } from 'next/headers'
import { decrypt } from '@/app/lib/session'
import { redirect } from 'next/navigation';
import {cache} from 'react';

export const verifySession = cache(async () => {
  try {
    const cookie = cookies().get('session')?.value;

    if (!cookie) {
      throw new Error('Cookie de sessão não encontrado');
    }

    const session = await decrypt(cookie);

    if (!session?.userId) {
      throw new Error('Sessão inválida');
    }

    return { isAuth: true, userId: session.userId, roles: session.roles };
  } catch (error) {
    console.error('Erro ao verificar a sessão:', error);
    redirect('/');
  }
});