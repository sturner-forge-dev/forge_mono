import { z } from 'zod'
import { exerciseSchema } from './exerciseSchema'

const userConfigurationSchema = z.object({
  height: z.number().int().positive().min(1).optional(),
  weight: z.number().int().positive().min(1).optional(),
  goalWeight: z.number().int().positive().min(1).optional()
})

const userSchema = z.object({
  id: z.number().int().positive().min(1),
  firstName: z.string().min(2).max(100).optional(),
  lastName: z.string().min(2).max(100).optional(),
  username: z.string().min(3).max(100).optional(),
  dateOfBirth: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .optional(),
  phone: z
    .string()
    .regex(/^\d{3}-\d{3}-\d{4}$/)
    .optional(),
  email: z.string().email(),
  password: z.string().min(8),
  passwordChangedAt: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .optional(),
  active: z.boolean().optional().default(true),
  role: z.string().optional().default('user'),
  configuration: userConfigurationSchema.optional(),
  customExercises: z.array(exerciseSchema).optional()
})

export { userSchema }
