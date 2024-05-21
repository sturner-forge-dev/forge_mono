import { z } from 'zod'

export const equipment = z.object({
  id: z.number().int().positive().min(1),
  name: z.string().min(3).max(100),
  description: z.string().optional()
})

export type Equipment = z.infer<typeof equipment>
