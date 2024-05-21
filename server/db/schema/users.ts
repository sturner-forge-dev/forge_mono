import {
  boolean,
  pgTable,
  serial,
  text,
  json,
  uniqueIndex,
  date
} from 'drizzle-orm/pg-core'

type userConfiguration = {
  height: number
  weight: number
  goalWeight: number
}

export const users = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    firstName: text('first_name'),
    lastName: text('last_name'),
    username: text('username'),
    dateOfBirth: date('date_of_birth'),
    phone: text('phone'),
    email: text('email'),
    password: text('password'),
    passwordChangedAt: date('password_changed_at'),
    active: boolean('active'),
    avatar: text('avatar'),
    configuration: json('configuration').$type<userConfiguration>()
  },
  (users) => {
    return {
      idIndex: uniqueIndex('users_id_idx').on(users.id),
      emailIndex: uniqueIndex('users_email_idx').on(users.email)
    }
  }
)
