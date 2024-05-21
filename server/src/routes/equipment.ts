import { Hono } from 'hono'
import {
  getAllDifficulties,
  getDifficultyById,
  createDifficulty,
  updateDifficultyById,
  deleteDifficultyById
} from '../controllers/difficultiesController'
import { getUser } from '../../kinde'

export const difficultyRouter = new Hono()
  .get('/', getUser, getAllDifficulties)
  .get('/:id', getUser, getDifficultyById)
  .post('/', getUser, createDifficulty)
  .patch('/:id', getUser, updateDifficultyById)
  .delete('/:id', getUser, deleteDifficultyById)
