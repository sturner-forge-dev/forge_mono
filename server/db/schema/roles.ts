import {
  pgTable,
  serial,
  varchar,
  text,
  uniqueIndex
} from 'drizzle-orm/pg-core'

export const roles = pgTable(
  'roles',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }),
    description: text('description')
  },
  (roles) => {
    return {
      idIndex: uniqueIndex('id_idx').on(roles.id),
      nameIndex: uniqueIndex('name_idx').on(roles.name)
    }
  }
)
