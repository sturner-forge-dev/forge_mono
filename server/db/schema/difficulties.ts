import {
  pgTable,
  serial,
  varchar,
  text,
  uniqueIndex
} from 'drizzle-orm/pg-core'

export const difficulties = pgTable(
  'difficulties',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }),
    description: text('description')
  },
  (difficulties) => {
    return {
      idIndex: uniqueIndex('difficulties_id_idx').on(difficulties.id),
      nameIndex: uniqueIndex('difficulties_name_idx').on(difficulties.name)
    }
  }
)
