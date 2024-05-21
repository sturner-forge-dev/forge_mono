import { pgTable, serial, integer, uniqueIndex } from 'drizzle-orm/pg-core'
import { routineLogs } from './routineLogs'
import { exercises } from './exercises'
import { customExercises } from './customExercises'

export const routineExerciseLogs = pgTable(
  'routine_exercise_logs',
  {
    id: serial('id').primaryKey(),
    routineLogId: serial('routine_log_id')
      .notNull()
      .references(() => routineLogs.id),
    exerciseId: serial('exercise_id').references(() => exercises.id),
    customExerciseId: serial('custom_exercise_id').references(
      () => customExercises.id
    ),
    sets: integer('sets'),
    reps: integer('reps'),
    weight: integer('weight')
  },
  (routineExerciseLogs) => {
    return {
      routineLogIdIndex: uniqueIndex(
        'routine_exercise_logs_routine_log_id_idx'
      ).on(routineExerciseLogs.routineLogId),
      exerciseIdIndex: uniqueIndex('routine_exercise_logs_exercise_id_idx').on(
        routineExerciseLogs.exerciseId
      ),
      customExerciseIdIndex: uniqueIndex(
        'routine_exercise_logs_custom_exercise_id_idx'
      ).on(routineExerciseLogs.customExerciseId)
    }
  }
)
