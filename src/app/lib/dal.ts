'use server';
 
import { cookies } from 'next/headers'
import { decrypt } from '@/app/lib/session'
import { redirect } from 'next/navigation';
import {cache} from 'react';
import { endPointToUsers } from '@/utils/endpoints';

 
export const verifySession = cache(async () => {

  const cookie = cookies().get('session')?.value
  console.log(cookie, 'cookie')
  const session = await decrypt(cookie)

 
  if (!session?.userId) {
    redirect('/')
  }
 
  return { isAuth: true, userId: session.userId, roles: session.roles}
})

// export const getUser = cache(async () => {
//   const session = await verifySession();
//   if (!session) return null;

//   try {
//     const response = await fetch(`${endPointToUsers}${session.userId}`, {
//       method: 'GET'
//     });

//     if (!response.ok) {
//       console.log('Failed to fetch user');
//       return null;
//     }

//     const user = await response.json();
    
//     // Retornar apenas as propriedades necessárias
//     return {
//       id: user.id,
//       name: user.name,
//       email: user.email,
//     };
//   } catch (error) {
//     console.log('Failed to fetch user', error);
//     return null;
//   }
// });
