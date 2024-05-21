import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { exerciseRouter } from './src/routes/exercises'
import { userRouter } from './src/routes/users'
import { authRouter } from './src/routes/auth'
import { difficultiesRouter } from './src/routes/difficulties'

const app = new Hono()

app.use('*', logger())

const apiRoutes = app
  .basePath('/api')
  .route('/exercises', exerciseRouter)
  .route('/difficulties', difficultiesRouter)
  .route('/users', userRouter)
  .route('/', authRouter)

export default app
export type ApiRoutes = typeof apiRoutes
