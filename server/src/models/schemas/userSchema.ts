import { z } from 'zod'

export const userConfigurationSchema = z.object({
  height: z.number().int().positive().min(1).optional(),
  weight: z.number().int().positive().min(1).optional(),
  goalWeight: z.number().int().positive().min(1).optional()
})

export const userSchema = z.object({
  id: z.number().int().positive().min(1),
  firstName: z.string().min(2).max(100).optional(),
  lastName: z.string().min(2).max(100).optional(),
  username: z.string().min(3).max(100).optional(),
  dateOfBirth: z.string().transform((val) => new Date(val)),
  phone: z
    .string()
    .regex(/^\d{3}-\d{3}-\d{4}$/)
    .optional(),
  email: z.string().email(),
  password: z.string().min(8),
  passwordChangedAt: z.string().transform((val) => new Date(val)),
  active: z.boolean().optional().default(true),
  avatar: z.string().optional(),
  configuration: userConfigurationSchema.optional()
})

export type UserConfiguration = z.infer<typeof userConfigurationSchema>
export type User = z.infer<typeof userSchema>
