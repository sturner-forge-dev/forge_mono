import type { Context } from 'hono'
import { db } from '../../db'
import { users as usersTable } from '../../db/schema/users'
import { eq } from 'drizzle-orm'

/**
 * Retrieves all users.
 *
 * @param c - The context object.
 *
 * @returns A Promise that resolves to the JSON response containing all users.
 */
export const getAllUsers = async (c: Context) => {
  const user = c.var.user
  console.log(user)

  const results = await db.select().from(usersTable)

  if (!results) {
    return c.notFound()
  }

  return c.json({ users: results })
}

/**
 * Retrieves a user by their ID.
 *
 * @param c - The context object.
 *
 * @returns A Promise that resolves to the JSON response containing the user.
 */
export const getUserById = async (c: Context) => {
  const user = c.var.user
  console.log(user)

  const id = Number.parseInt(c.req.param('id'))
  const result = await db.select().from(usersTable).where(eq(usersTable.id, id))

  if (!result) {
    return c.notFound()
  }

  return c.json({ user: result })
}

/**
 * Creates a new user.
 *
 * @param c - The context object.
 *
 * @returns A Promise that resolves to the JSON response containing the created user.
 */
export const createUser = async (c: Context) => {
  const user = c.var.user
  console.log(user)

  try {
    const newUser = await c.req.json()
    const result = await db.insert(usersTable).values(newUser).returning()

    c.status(201)
    return c.json({ user: result })
  } catch (error) {
    console.error(error)
    return c.json({ error: 'Failed to create user' }, 500)
  }
}

/**
 * Updates a user by their ID.
 *
 * @param c - The context object.
 *
 * @returns A Promise that resolves to the JSON response containing the updated user.
 */
export const updateUserById = async (c: Context) => {
  const user = c.var.user
  console.log(user)

  try {
    const id = Number.parseInt(c.req.param('id'))
    const userToUpdate = await c.req.json()

    const result = await db
      .update(usersTable)
      .set(userToUpdate)
      .where(eq(usersTable.id, id))
      .returning()

    if (!result) {
      return c.notFound()
    }

    return c.json({ user: result })
  } catch (error) {
    console.error(error)
    return c.json({ error: 'Failed to update user' }, 500)
  }
}
