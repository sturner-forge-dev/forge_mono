import { z } from 'zod'

export const customExerciseSchema = z.object({
  id: z.number().int().positive().min(1),
  userId: z.number().int().positive().min(1),
  name: z.string().min(3).max(100),
  description: z.string(),
  image: z.string().optional(),
  isCustom: z.boolean().default(true)
})

export type CustomExercise = z.infer<typeof customExerciseSchema>
