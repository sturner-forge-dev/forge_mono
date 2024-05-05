import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'

import { exerciseSchema } from '../models/schemas/exerciseSchema'
import {
  getAllExercises,
  getExerciseById,
  createExercise,
  deleteExerciseById
} from '../controllers/exercisesController'

export const exerciseRouter = new Hono()
  .get('/', getAllExercises)
  .get('/:id{[0-9]+}', getExerciseById)
  .post(
    '/',
    zValidator('json', exerciseSchema.omit({ id: true })),
    createExercise
  )
  .delete('/:id{[0-9]+}', deleteExerciseById)
