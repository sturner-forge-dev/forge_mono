import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import {
  getAllExercises,
  getExerciseById,
  deleteExerciseById
} from '../controllers/exercisesController'
import { getUser } from '../../kinde'

export const exerciseRouter = new Hono()
  .get('/', getAllExercises)
  .get('/:id', getUser, getExerciseById)
  .delete('/:id{[0-9]+}', getUser, deleteExerciseById)
