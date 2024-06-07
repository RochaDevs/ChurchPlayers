'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { id, name, email, nickname, birthDate, gender, country, maritalStatus, christianDenom } = req.body;
        
        try {
            const updatedUser = await prisma.user.update({
                where: { id: Number(id) },
                data: {
                    name,
                    email,
                    nickname,
                    birthDate: new Date(birthDate),
                    gender,
                    country,
                    maritalStatus,
                    christianDenom
                },
            });
            res.status(200).json(updatedUser);
        } catch (error) {
            console.error('Failed to update user:', error);
            res.status(500).json({ error: "Failed to update user" });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
