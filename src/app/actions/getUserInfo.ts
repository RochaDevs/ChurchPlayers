// app/actions/getUserInfo.ts
'use server';


import { PrismaClient } from '@prisma/client';
import { verifySession } from '../lib/dal';

const prisma = new PrismaClient();

export async function getUserInfo() {
  try {
    const session = await verifySession();

    if (!session || !session.isAuth) {
      throw new Error('Usuário não autenticado');
    }

    const userId = Number(session.userId)

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    return user;
  } catch (error) {
    console.error('Erro ao buscar informações do usuário:', error);
    throw error;
  }
}
