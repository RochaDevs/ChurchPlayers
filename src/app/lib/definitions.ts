import { z } from 'zod';

export const SignupFormSchema = z.object({
    name: z
        .string()
        .min(3, { message: 'O nome deve conter no mínimo 3 caracteres.' })
        .trim(),
    email: z.string().email({ message: 'Por favor insira um e-mail válido.' }).trim(),
    password: z
        .string()
        .min(8, { message: 'Mínimo de 8 caracteres.' })
        .regex(/[a-zA-Z]/, { message: 'Deve conter pelo menos uma letra (maiúscula ou minúscula).' })
        .regex(/[0-9]/, { message: 'Deve conter pelo menos um número.' })
        .regex(/[^a-zA-Z0-9]/, {
            message: 'Deve conter pelo menos um caractere especial (não letra nem número).',
        })
        .trim(),
})

export type FormSignUpState =
    | {
        errors?: {
            name?: string[]
            email?: string[]
            password?: string[]
        }
        message?: string
    }
    | undefined

export const LoginFormSchema = z.object({
    email: z
        .string()
        .email({ message: 'Por favor insira um e-mail válido.' })
        .trim(),
    password: z
        .string()
        .min(8, { message: 'Mínimo de 8 caracteres.' })
        .regex(/[a-zA-Z]/, { message: 'Deve conter pelo menos uma letra (maiúscula ou minúscula).' })
        .regex(/[0-9]/, { message: 'Deve conter pelo menos um número.' })
        .regex(/[^a-zA-Z0-9]/, {
            message: 'Deve conter pelo menos um caractere especial (não letra nem número).',
        })
        .trim()
})

export type FormLoginState =
    | {
        errors?: {
            email?: string[]
            password?: string[]
        }
        message?: string
    }
    | undefined