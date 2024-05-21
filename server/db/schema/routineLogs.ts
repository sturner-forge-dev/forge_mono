import { pgTable, serial, timestamp, uniqueIndex } from 'drizzle-orm/pg-core'
import { routines } from './routines'
import { users } from './users'

export const routineLogs = pgTable(
  'routine_logs',
  {
    id: serial('id').primaryKey(),
    userId: serial('user_id').references(() => users.id),
    routineId: serial('routine_id').references(() => routines.id),
    startedAt: timestamp('started_at').notNull().defaultNow().notNull(),
    completedAt: timestamp('completed_at').notNull()
  },
  (routineLogs) => {
    return {
      idIndex: uniqueIndex('routine_logs_id_idx').on(routineLogs.id),
      userIdIndex: uniqueIndex('routine_logs_user_id_idx').on(
        routineLogs.userId
      ),
      routineIdIndex: uniqueIndex('routine_logs_routine_id_idx').on(
        routineLogs.routineId
      )
    }
  }
)
