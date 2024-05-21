import { pgTable, serial, integer, uniqueIndex } from 'drizzle-orm/pg-core'
import { users } from './users'
import { customExercises } from './customExercises'

export const userCustomExercises = pgTable(
  'user_custom_exercises',
  {
    id: serial('id').primaryKey(),
    userId: integer('user_id')
      .notNull()
      .references(() => users.id),
    customExerciseId: integer('custom_exercise_id')
      .notNull()
      .references(() => customExercises.id)
  },
  (userCustomExercises) => ({
    userIdIndex: uniqueIndex('user_custom_exercises_user_id_idx').on(
      userCustomExercises.userId
    ),
    customExerciseIdIndex: uniqueIndex(
      'user_custom_exercises_custom_exercise_id_idx'
    ).on(userCustomExercises.customExerciseId)
  })
)
