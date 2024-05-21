import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'

import { exerciseSchema } from '../models/schemas/exercise'
import {
  getAllExercises,
  getExerciseById,
  createExercise,
  deleteExerciseById
} from '../controllers/exercisesController'
import { getUser } from '../../kinde'

export const exerciseRouter = new Hono()
  .post('/', getUser, createExercise)
  .get('/', getUser, getAllExercises)
  .get('/:id', getUser, getExerciseById)
  .delete('/:id{[0-9]+}', getUser, deleteExerciseById)
