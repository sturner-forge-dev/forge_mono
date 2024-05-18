import { z } from 'zod'
import {
  Difficulty,
  Equipment,
  MuscleGroup,
  Type
} from '../enums/ExerciseEnums'

const exerciseSchema = z.object({
  id: z.number().int().positive().min(1).optional(),
  name: z.string().min(3).max(100),
  description: z.string(),
  difficulty: z.nativeEnum(Difficulty),
  image: z.string().optional(),
  equipment: z.array(z.nativeEnum(Equipment)).optional(),
  primaryMuscleGroup: z.array(z.nativeEnum(MuscleGroup)),
  secondaryMuscleGroup: z.array(z.nativeEnum(MuscleGroup)).optional(),
  type: z.array(z.nativeEnum(Type)),
  variations: z.array(z.string()).optional(),
  isCustom: z.boolean().optional()
})

export { exerciseSchema }
