import { z } from 'zod'

export const routineSchema = z.object({
  id: z.number().int().positive().min(1),
  userId: z.number().int().positive().min(1),
  name: z.string().min(3).max(100),
  description: z.string(),
  createdAt: z.string().transform((val) => new Date(val))
})

export type Routine = z.infer<typeof routineSchema>
