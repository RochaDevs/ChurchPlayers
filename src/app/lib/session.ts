'use server';

import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers'
 
const secretKey = process.env.SESSION_SECRET; 
const encodedKey = new TextEncoder().encode(secretKey)

// Definição de tipo para o payload da sessão
type SessionPayload = {
    userId: string;
    roles: string[];
    expiresAt: Date;
    // Outros campos que possam ser necessários para a sessão
};
 
export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey)
}
 
export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    })
    return payload
  } catch (error) {
    console.log('Failed to verify session')
  }
}
 
export async function createSession(userId: string, roles: string[] = []) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  const session = await encrypt({ userId, roles, expiresAt })
 
  cookies().set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })
}