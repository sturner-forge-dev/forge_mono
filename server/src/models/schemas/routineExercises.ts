import { z } from 'zod'

export const routineExercises = z.object({
  id: z.number().int().positive().min(1),
  routineId: z.number().int().positive().min(1),
  exerciseId: z.number().int().positive().min(1).optional(),
  customExerciseId: z.number().int().positive().min(1).optional(),
  sets: z.number().int().positive().min(1),
  reps: z.number().int().positive().min(1)
})

export type RoutineExercise = z.infer<typeof routineExercises>
