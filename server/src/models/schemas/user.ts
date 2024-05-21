import { z } from 'zod'

export const userConfiguration = z.object({
  height: z.number().int().positive().min(1).optional(),
  weight: z.number().int().positive().min(1).optional(),
  goalWeight: z.number().int().positive().min(1).optional()
})

export const user = z.object({
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
  configuration: userConfiguration.optional()
})

export type UserConfiguration = z.infer<typeof userConfiguration>
export type User = z.infer<typeof user>
