'use server';

const bcrypt = require('bcryptjs');

export async function bCryptPassword(password: string) {
    const saltRounds = 10;
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        return hashedPassword
    } catch (error) {
        throw new Error('Error hashing password')
    }
    
};