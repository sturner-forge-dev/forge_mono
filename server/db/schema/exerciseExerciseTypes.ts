import { pgTable, serial, uniqueIndex } from 'drizzle-orm/pg-core'
import { exercises } from './exercises'
import { exerciseTypes } from './exerciseTypes'

export const exerciseExerciseTypes = pgTable(
  'exercise_exercise_types',
  {
    exerciseId: serial('exercise_id')
      .notNull()
      .references(() => exercises.id),
    exerciseTypeId: serial('exercise_type_id')
      .notNull()
      .references(() => exerciseTypes.id)
  },
  (exerciseExerciseTypes) => {
    return {
      exerciseIdIndex: uniqueIndex('exercise_types_exercise_id_idx').on(
        exerciseExerciseTypes.exerciseId
      ),
      exerciseTypeIdIndex: uniqueIndex(
        'exercise_types_exercise_type_id_idx'
      ).on(exerciseExerciseTypes.exerciseTypeId)
    }
  }
)
