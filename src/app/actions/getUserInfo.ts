
'use server';

import { PrismaClient } from '@prisma/client';
import { verifySession } from '../lib/dal';
import { cache } from 'react';

const prisma = new PrismaClient();

export const getUserInfo = cache(async () => {
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
      select: {
        id: true,
        name: true,
        email: true,
        function: true,
        nickname: true,
        christianDenom: true,
        createdAt: true,
        gender: true,
        maritalStatus: true,
        contry: true
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
})