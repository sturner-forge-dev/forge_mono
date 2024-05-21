import { z } from 'zod'
import { exerciseSchema } from './schemas/exercise'

export type Exercise = z.infer<typeof exerciseSchema>
