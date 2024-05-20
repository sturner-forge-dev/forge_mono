import { pgTable, serial, integer, uniqueIndex } from 'drizzle-orm/pg-core'
import { routines } from './routines'
import { exercises } from './exercises'
import { customExercises } from './customExercises'

export const routineExercises = pgTable(
  'routine_exercises',
  {
    id: serial('id').primaryKey(),
    routineId: serial('routine_id')
      .notNull()
      .references(() => routines.id),
    exerciseId: serial('exercise_id').references(() => exercises.id),
    customExerciseId: serial('custom_exercise_id').references(
      () => customExercises.id
    ),
    sets: integer('sets').notNull(),
    reps: integer('reps')
  },
  (routineExercises) => {
    return {
      routineIdIndex: uniqueIndex('routine_id_idx').on(
        routineExercises.routineId
      ),
      exerciseIdIndex: uniqueIndex('exercise_id_idx').on(
        routineExercises.exerciseId
      ),
      customExerciseIdIndex: uniqueIndex('custom_exercise_id_idx').on(
        routineExercises.customExerciseId
      )
    }
  }
)
