import { z } from 'zod'

export const roleSchema = z.object({
  id: z.number().int().positive().min(1),
  name: z.string().min(3).max(100),
  description: z.string().optional()
})

export type Role = z.infer<typeof roleSchema>
