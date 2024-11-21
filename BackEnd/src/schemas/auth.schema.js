import { validateRut } from '@fdograph/rut-utilities'
import { z } from 'zod'

const MIN_PASSWORD = 6;

const emailSchema = z
    .string({ required_error: 'Email is required.' })
    .email(['Invalid email.']);

const passwordSchema = z
    .string({ required_error: 'Password is required.' })
    .min(MIN_PASSWORD, `Password must be at least ${ MIN_PASSWORD } characters long.`);

export const registerSchema = z.object({
    username: z.string({ required_error: 'Username is required.', }),
    rut: z.string({ required_error: 'Rut is required.', }),
    region: z.string({ required_error: 'Region is required.', }),
    comuna: z.string({ required_error: 'Comuna is required.', }),

    email: emailSchema,
    password: passwordSchema,
}).refine((data) => {
    return validateRut(data.rut);
}, ["Invalid rut."]);

export const loginSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
});