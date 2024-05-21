import {
  pgTable,
  serial,
  uniqueIndex,
  varchar,
  text,
  boolean
} from 'drizzle-orm/pg-core'
import { users } from './users'

export const customExercises = pgTable(
  'custom_exercises',
  {
    id: serial('id').primaryKey(),
    userId: serial('user_id').references(() => users.id),
    name: varchar('name', { length: 256 }),
    description: text('description'),
    image: text('image'),
    isCustom: boolean('is_custom').default(true)
  },
  (customExercises) => {
    return {
      idIndex: uniqueIndex('id_idx').on(customExercises.id),
      nameIndex: uniqueIndex('name_idx').on(customExercises.name),
      userIdIndex: uniqueIndex('user_id_idx').on(customExercises.userId)
    }
  }
)