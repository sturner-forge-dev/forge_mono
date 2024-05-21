import {
  pgTable,
  serial,
  varchar,
  text,
  uniqueIndex
} from 'drizzle-orm/pg-core'

export const exerciseTypes = pgTable(
  'exercise_types',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }).notNull(),
    description: text('description')
  },
  (exerciseTypes) => {
    return {
      idIndex: uniqueIndex('exercise_types_id_idx').on(exerciseTypes.id),
      nameIndex: uniqueIndex('exercise_types_name_idx').on(exerciseTypes.name)
    }
  }
)
