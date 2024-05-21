import { z } from 'zod'

export const exerciseType = z.object({
  id: z.number().int().positive().min(1),
  name: z.string().min(3).max(100),
  description: z.string().optional()
})

export type ExerciseType = z.infer<typeof exerciseType>
