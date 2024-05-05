import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'

import { userSchema } from '../models/schemas/userSchema'
import {
  getAllUsers,
  getUserById,
  createUser
} from '../controllers/userController'

export const userRouter = new Hono()
  .get('/', getAllUsers)
  .get('/:id{[0-9]+}', getUserById)
  .post('/', zValidator('json', userSchema.omit({ id: true })), createUser)
