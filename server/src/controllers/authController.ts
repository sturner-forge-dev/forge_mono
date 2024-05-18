import { type Context } from 'hono'
import { kindeClient, sessionManager } from '../../kinde'

/**
 * Logs in a user.
 *
 * @param {any} c:Context
 *
 * @returns {any}
 */
export const loginUser = async (c: Context) => {
  const loginUrl = await kindeClient.login(sessionManager(c))

  return c.redirect(loginUrl.toString())
}

/**
 * Registers a user.
 *
 * @param {any} c:Context
 *
 * @returns {any}
 */
export const registerUser = async (c: Context) => {
  const registerUrl = await kindeClient.register(sessionManager(c))

  return c.redirect(registerUrl.toString())
}

/**
 * Executes a callback.
 *
 * @param {any} c:Context
 *
 * @returns {any}
 */
export const executeCallback = async (c: Context) => {
  const session = sessionManager(c)
  const url = new URL(c.req.url)
  await kindeClient.handleRedirectToApp(session, url)

  return c.redirect('/')
}

/**
 * Logs out a user.
 *
 * @param {any} c:Context
 *
 * @returns {any}
 */
export const logoutUser = async (c: Context) => {
  const logoutUrl = await kindeClient.logout(sessionManager(c))

  return c.redirect(logoutUrl.toString())
}

/**
 * Gets the current user.
 *
 * @param {any} c:Context
 *
 * @returns {any}
 */
export const getCurrentUser = async (c: Context) => {
  const user = c.var.user

  return c.json({ user })
}
