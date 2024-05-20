import { pgTable, serial, varchar, uniqueIndex } from 'drizzle-orm/pg-core'

export const muscleGroups = pgTable(
  'muscle_groups',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 })
  },
  (muscleGroups) => {
    return {
      idIndex: uniqueIndex('id_idx').on(muscleGroups.id),
      nameIndex: uniqueIndex('name_idx').on(muscleGroups.name)
    }
  }
)
