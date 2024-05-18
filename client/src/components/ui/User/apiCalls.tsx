import { api } from '@/lib/api'
import { type User } from '@server/src/models/User'

/**
 * Fetches all users from the server
 *
 * @returns User[]
 */
export async function fetchUsers() {
  const res = await api.users.$get()

  if (!res.ok) {
    throw new Error('Failed to fetch users')
  }

  const data: { users: User[] } = await res.json()
  return data.users
}

/**
 * Fetches a user by their id
 *
 * @param id:number
 *
 * @returns User
 */
export async function fetchUserById(id: number) {
  const res = await api.users[':id{[0-9]+}'].$get({
    param: { id: id.toString() }
  })

  if (!res.ok) {
    throw new Error('Failed to fetch user')
  }

  const data = (await res.json()) as { user: User }
  return data.user
}

/**
 * Creates a new user
 *
 * @param {any} user:User
 *
 * @returns {any}
 */
export async function createUser(user: User) {
  const res = await api.users.$post({
    json: user
  })

  if (!res.ok) {
    throw new Error(`HTTP error: ${res.status}`)
  }

  const data = (await res.json()) as { user: User }
  return data.user
}

/**
 * Patches a user by their id
 *
 * @param {number} id
 *
 * @returns User
 */
export async function patchUserById(id: number, user: User) {
  const res = await api.users[':id{[0-9]+}'].$patch({
    param: { id: id.toString() },
    json: user
  } as { param: { id: string }; json: User })

  if (!res.ok) {
    throw new Error(`HTTP error: ${res.status}`)
  }

  const data = (await res.json()) as { user: User }
  return data.user
}

export async function getCurrentUser() {
  const res = await api.me.$get()

  if (!res.ok) {
    throw new Error('Failed to fetch current user')
  }

  const data = await res.json()
  return data
}
