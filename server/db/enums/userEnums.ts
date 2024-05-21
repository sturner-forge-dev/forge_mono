import { pgEnum } from 'drizzle-orm/pg-core'

export const roleEnum = pgEnum('user_role', ['user', 'admin', 'super_admin'])
