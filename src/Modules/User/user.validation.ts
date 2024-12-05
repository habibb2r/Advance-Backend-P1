import { z } from 'zod'

const userValidationSchema = z.object({
    id: z.string().max(30, { message: 'Password must be less than 30 characters'}),
    password: z.string().max(20, { message: 'Password must be less than 20 characters'}),
    needsPasswordChange: z.boolean().optional().default(true),
    role: z.enum(['admin', 'student', 'faculty']),
    status: z.enum(['in-progress', 'blocked']).default('in-progress'),
    isDeleted: z.boolean().optional().default(false),
})

export const UserValidation ={
    userValidationSchema
}