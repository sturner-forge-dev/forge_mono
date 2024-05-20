import { pgTable, serial, uniqueIndex } from 'drizzle-orm/pg-core'
import { users } from './users'
import { roles } from './roles'

export const userRoles = pgTable(
  'user_roles',
  {
    id: serial('id').primaryKey(),
    userId: serial('user_id').references(() => users.id),
    roleId: serial('role_id').references(() => roles.id)
  },
  (userRoles) => {
    return {
      idIndex: uniqueIndex('id_idx').on(userRoles.id),
      userIdIndex: uniqueIndex('user_id_idx').on(userRoles.userId),
      roleIdIndex: uniqueIndex('role_id_idx').on(userRoles.roleId)
    }
  }
)
