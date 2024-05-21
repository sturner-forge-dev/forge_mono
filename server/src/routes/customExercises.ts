import { Hono } from 'hono'
import {
  getAllCustomExercises,
  getCustomExerciseById,
  createCustomExercise,
  updateCustomExercise,
  deleteCustomExercise
} from '../controllers/customExercisesController'
import { getUser } from '../../kinde'

export const customExerciseRouter = new Hono()
  .get('/', getUser, getAllCustomExercises)
  .get('/:id', getUser, getCustomExerciseById)
  .post('/', getUser, createCustomExercise)
  .put('/:id', getUser, updateCustomExercise)
  .delete('/:id', getUser, deleteCustomExercise)
