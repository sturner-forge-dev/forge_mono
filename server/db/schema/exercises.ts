import {
  pgTable,
  serial,
  uniqueIndex,
  varchar,
  text,
  boolean
} from 'drizzle-orm/pg-core'

export const exercises = pgTable(
  'exercises',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }),
    description: text('description'),
    image: text('image'),
    isCustom: boolean('is_custom').default(false)
  },
  (exercises) => {
    return {
      idIndex: uniqueIndex('id_idx').on(exercises.id),
      nameIndex: uniqueIndex('name_idx').on(exercises.name)
    }
  }
)
