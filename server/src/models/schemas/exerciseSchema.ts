import { z } from 'zod'

const exerciseSchema = z.object({
  id: z.number().int().positive().min(1),
  name: z.string().min(3).max(100),
  description: z.string(),
  difficulty: z.string(),
  image: z.string().optional(),
  equipment: z.string(),
  primaryMuscleGroup: z.array(z.string()),
  secondaryMuscleGroup: z.array(z.string()).optional(),
  type: z.array(z.string()),
  variations: z.array(z.string()).optional(),
  isCustom: z.boolean().optional()
})

export { exerciseSchema }
