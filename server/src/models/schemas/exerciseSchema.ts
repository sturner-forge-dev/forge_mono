import { z } from 'zod'
import {
  Difficulty,
  Equipment,
  MuscleGroup,
  Type
} from '../enums/ExerciseEnums'

const exerciseSchema = z.object({
  id: z.number().int().positive().min(1),
  name: z.string().min(3).max(100),
  description: z.string(),
  difficulty: z.enum([
    ...Object.values(Difficulty).map((d) => d.toString())
  ] as [string, ...string[]]),
  image: z.string().optional(),
  equipment: z
    .enum([...Object.values(Equipment).map((e) => e.toString())] as [
      string,
      ...string[]
    ])
    .optional(),
  primaryMuscleGroup: z.array(
    z.enum([...Object.values(MuscleGroup).map((mg) => mg.toString())] as [
      string,
      ...string[]
    ])
  ),
  secondaryMuscleGroup: z
    .array(
      z.enum([...Object.values(MuscleGroup).map((mg) => mg.toString())] as [
        string,
        ...string[]
      ])
    )
    .optional(),
  type: z.array(
    z.enum([...Object.values(Type).map((t) => t.toString())] as [
      string,
      ...string[]
    ])
  ),
  variations: z.array(z.string()).default([]).optional(),
  isCustom: z.boolean().optional()
})

export { exerciseSchema }
