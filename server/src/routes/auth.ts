import { Hono } from 'hono'
import {
  loginUser,
  registerUser,
  executeCallback,
  logoutUser,
  getCurrentUser
} from '../controllers/authController'
import { getUser } from '../../kinde'

export const authRouter = new Hono()
  .get('/login', loginUser)
  .get('/register', registerUser)
  .get('/callback', executeCallback)
  .get('/logout', logoutUser)
  .get('/me', getUser, getCurrentUser)
