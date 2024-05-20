import { pgTable, serial, integer } from 'drizzle-orm/pg-core'
import { users } from './users'
import { customExercises } from './customExercises'

export const userCustomExercises = pgTable('user_custom_exercises', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id),
  customExerciseId: integer('custom_exercise_id')
    .notNull()
    .references(() => customExercises.id)
})
