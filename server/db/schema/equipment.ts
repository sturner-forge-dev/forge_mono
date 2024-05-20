import { pgTable, serial, varchar, uniqueIndex } from 'drizzle-orm/pg-core'

export const equipment = pgTable(
  'equipment',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }).notNull()
  },
  (equipment) => {
    return {
      idIndex: uniqueIndex('id_idx').on(equipment.id),
      nameIndex: uniqueIndex('name_idx').on(equipment.name)
    }
  }
)
