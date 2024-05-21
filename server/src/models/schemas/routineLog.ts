import { z } from 'zod'

export const routineLog = z.object({
  id: z.number().int().positive().min(1),
  userId: z.number().int().positive().min(1),
  routineId: z.number().int().positive().min(1),
  startedAt: z.string().transform((val) => new Date(val)),
  completedAt: z.string().transform((val) => new Date(val))
})

export type RoutineLog = z.infer<typeof routineLog>
