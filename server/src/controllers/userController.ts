import type { Context } from 'hono'
import type { User } from '../models/User'
import exampleUsers from '../dev/data/exampleUsers'

/**
 * Retrieves all users.
 *
 * @param c - The context object.
 *
 * @returns A Promise that resolves to the JSON response containing all users.
 */
export const getAllUsers = async (c: Context) => {
  return c.json({ users: exampleUsers })
}

/**
 * Retrieves a user by their ID.
 *
 * @param c - The context object.
 *
 * @returns A Promise that resolves to the JSON response containing the user.
 */
export const getUserById = async (c: Context) => {
  const id = Number.parseInt(c.req.param('id'))
  const user = await exampleUsers.find((e) => e.id === id)

  if (!user) {
    return c.notFound()
  }

  return c.json({ user })
}

/**
 * Creates a new user.
 *
 * @param c - The context object.
 *
 * @returns A Promise that resolves to the JSON response containing the created user.
 */
export const createUser = async (c: Context) => {
  const user = await c.req.valid('json' as never)
  exampleUsers.push({ ...(user as User), id: exampleUsers.length + 1 })

  c.status(201)
  return c.json({ user })
}

/**
 * Updates a user by their ID.
 *
 * @param c - The context object.
 *
 * @returns A Promise that resolves to the JSON response containing the updated user.
 */
export const updateUserById = async (c: Context) => {
  const id = Number.parseInt(c.req.param('id'))
  const user = await c.req.json()

  const index = exampleUsers.findIndex((u) => u.id === id)

  if (index === -1) {
    return c.notFound()
  }

  exampleUsers[index] = { ...(user as User), id }
  return c.json({ user: exampleUsers[index] })
}
