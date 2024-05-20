import {
  pgTable,
  serial,
  varchar,
  timestamp,
  uniqueIndex
} from 'drizzle-orm/pg-core'
import { users } from './users'

export const routines = pgTable(
  'routines',
  {
    id: serial('id').primaryKey(),
    userId: serial('user_id').references(() => users.id),
    name: varchar('name', { length: 256 }).notNull(),
    description: varchar('description', { length: 256 }),
    createdAt: timestamp('created_at').notNull().defaultNow()
  },
  (routines) => {
    return {
      idIndex: uniqueIndex('id_idx').on(routines.id),
      userIdIndex: uniqueIndex('user_id_idx').on(routines.userId)
    }
  }
)
