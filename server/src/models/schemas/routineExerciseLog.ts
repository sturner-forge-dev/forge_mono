import { z } from 'zod'

export const routineExerciseLog = z.object({
  id: z.number().int().positive().min(1),
  routineLogId: z.number().int().positive().min(1),
  exerciseId: z.number().int().positive().min(1).optional(),
  customExerciseId: z.number().int().positive().min(1).optional(),
  sequence: z.number().int().positive().min(1),
  sets: z.number().int().positive().min(1),
  reps: z.number().int().positive().min(1),
  weight: z.number().int().positive().min(1).optional()
})

export type RoutineExerciseLog = z.infer<typeof routineExerciseLog>
