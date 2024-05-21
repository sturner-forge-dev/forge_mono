import { pgTable, serial, varchar, uniqueIndex } from 'drizzle-orm/pg-core'

export const equipment = pgTable(
  'equipment',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }).notNull()
  },
  (equipment) => {
    return {
      idIndex: uniqueIndex('equipment_id_idx').on(equipment.id),
      nameIndex: uniqueIndex('equipment_name_idx').on(equipment.name)
    }
  }
)
