import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { exerciseRouter } from './src/routes/exercises'
import { userRouter } from './src/routes/users'

const app = new Hono()

app.use('*', logger())

app
  .basePath('/api')
  .route('/exercises', exerciseRouter)
  .route('/users', userRouter)

export default app
