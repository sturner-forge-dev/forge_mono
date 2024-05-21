import { z } from 'zod'

export const exercise = z.object({
  id: z.number().int().positive().min(1),
  name: z.string().min(3).max(100),
  description: z.string(),
  image: z.string().optional(),
  isCustom: z.boolean().default(false)
})

export type Exercise = z.infer<typeof exercise>
