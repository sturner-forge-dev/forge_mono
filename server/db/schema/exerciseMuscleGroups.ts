import { pgTable, serial, boolean, uniqueIndex } from 'drizzle-orm/pg-core'
import { exercises } from './exercises'
import { muscleGroups } from './muscleGroups'

export const exerciseMuscleGroups = pgTable(
  'exercise_muscle_groups',
  {
    exerciseId: serial('exercise_id')
      .notNull()
      .references(() => exercises.id),
    muscleGroupId: serial('muscle_group_id')
      .notNull()
      .references(() => muscleGroups.id),
    isPrimary: boolean('is_primary').notNull()
  },
  (exerciseMuscleGroups) => {
    return {
      exerciseIdIndex: uniqueIndex('exercise_muscle_groups_exercise_id_idx').on(
        exerciseMuscleGroups.exerciseId
      ),
      muscleGroupIdIndex: uniqueIndex(
        'exercise_muscle_groups_muscle_group_id_idx'
      ).on(exerciseMuscleGroups.muscleGroupId)
    }
  }
)
