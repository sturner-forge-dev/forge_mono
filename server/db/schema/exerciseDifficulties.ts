import { pgTable, serial, uniqueIndex } from 'drizzle-orm/pg-core'
import { exercises } from './exercises'
import { difficulties } from './difficulties'

export const exerciseDifficulties = pgTable(
  'exercise_difficulties',
  {
    exerciseId: serial('exercise_id')
      .notNull()
      .references(() => exercises.id),
    difficultyyId: serial('difficulty_id')
      .notNull()
      .references(() => difficulties.id)
  },
  (exerciseDifficulties) => {
    return {
      exerciseIdIndex: uniqueIndex('exercise_id_idx').on(
        exerciseDifficulties.exerciseId
      ),
      difficultyIdIndex: uniqueIndex('difficulty_id_idx').on(
        exerciseDifficulties.difficultyyId
      )
    }
  }
)
