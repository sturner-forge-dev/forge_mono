import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'

import { userSchema } from '../models/schemas/user'
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById
} from '../controllers/userController'
import { getUser } from '../../kinde'

export const userRouter = new Hono()
  .get('/', getUser, getAllUsers)
  .get('/:id{[0-9]+}', getUser, getUserById)
  .post(
    '/',
    zValidator('json', userSchema.omit({ id: true })),
    getUser,
    createUser
  )
  .patch(
    '/:id{[0-9]+}',
    zValidator('json', userSchema.omit({ id: true })),
    getUser,
    updateUserById
  )
