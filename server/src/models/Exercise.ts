import { z } from 'zod'
import { exerciseSchema } from './schemas/exerciseSchema'

export type Exercise = z.infer<typeof exerciseSchema>
