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
      idIndex: uniqueIndex('id_idx').on(exerciseTypes.id),
      nameIndex: uniqueIndex('name_idx').on(exerciseTypes.name)
    }
  }
)
