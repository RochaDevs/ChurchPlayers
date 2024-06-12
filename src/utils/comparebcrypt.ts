'use server';

const bcrypt = require('bcryptjs');

export async function compareBcryptPassword(password: string, hash: string) {
    try {
        const isMatchPassword = await bcrypt.compare(password, hash)
        return isMatchPassword
    } catch (error) {
        throw new Error('Error comparing password')
    }
    
};